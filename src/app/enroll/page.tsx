import { buildPublicEnrollUrl, getSchoolCatalog } from "@/lib/catalog";
import { EnrollGateClient } from "@/components/enrollment/EnrollGateClient";

type PageProps = {
  searchParams: Promise<{
    product?: string;
    quantity?: string;
    package?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const catalog = await getSchoolCatalog();
  const enrollUrl = buildPublicEnrollUrl(catalog, {
    product: params.package ?? params.product,
    package: params.package,
    quantity: params.quantity,
  });

  return <EnrollGateClient enrollUrl={enrollUrl} />;
}
