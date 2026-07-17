"use client";

import dynamic from "next/dynamic";
import { AvatarFallback } from "@/components/AttentionAvatar3D";

export const AttentionAvatar3D = dynamic(
  () => import("@/components/AttentionAvatar3D").then((mod) => mod.AttentionAvatar3D),
  {
    ssr: false,
    loading: () => <AvatarFallback />,
  },
);
