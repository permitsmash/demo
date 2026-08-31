import { EnrollmentFlow } from "@/components/enrollment/EnrollmentFlow";
import { resolveEnrollmentProduct } from "@/lib/enrollment/catalog";

type PageProps = {
  searchParams: Promise<{
    product?: string;
    quantity?: string;
    package?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const product = resolveEnrollmentProduct(params.product, {
    package: params.package,
    quantity: params.quantity,
  });

  return (
    <div className="w-full section">
      <div className="container-page max-w-content-md">
        <EnrollmentFlow product={product} />
      </div>
    </div>
  );
}
