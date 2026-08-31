type PageHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  bordered?: boolean;
  className?: string;
};

export default function PageHeader({
  title,
  subtitle,
  align = "center",
  bordered = true,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={`w-full bg-surface-container-lowest py-lg ${
        bordered ? "border-b border-surface-container-high" : ""
      } ${className}`}
    >
      <div
        className={`container-page ${align === "left" ? "text-left" : "text-center"}`}
      >
        <h1 className="font-h1 text-h1 text-primary mb-sm">{title}</h1>
        {subtitle ? (
          <p
            className={`font-body-lg text-body-lg text-on-surface-variant max-w-prose ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
