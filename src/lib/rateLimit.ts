type RateLimitRecord = {
  count: number;
  expiresAt: number;
};

const buckets = new Map<string, RateLimitRecord>();

/** Apply a simple in-memory request rate limit for unauthenticated API routes. */
export function applyRequestRateLimit(
  key: string,
  options?: { windowMs?: number; maxRequests?: number },
) {
  const windowMs = options?.windowMs ?? 60_000;
  const maxRequests = options?.maxRequests ?? 20;
  const now = Date.now();
  const record = buckets.get(key);

  if (!record || record.expiresAt < now) {
    buckets.set(key, { count: 1, expiresAt: now + windowMs });
    return { limited: false as const };
  }

  record.count += 1;
  buckets.set(key, record);

  if (record.count > maxRequests) {
    return {
      limited: true as const,
      retryAfter: Math.max(1, Math.ceil((record.expiresAt - now) / 1000)),
    };
  }

  return { limited: false as const };
}

export function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
