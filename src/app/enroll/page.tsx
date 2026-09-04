import { redirect } from "next/navigation";
import { buildPublicEnrollUrl, getSchoolCatalog } from "@/lib/catalog";

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
  const destination = buildPublicEnrollUrl(catalog, {
    product: params.package ?? params.product,
    package: params.package,
    quantity: params.quantity,
  });

  redirect(destination);
}
