"use client";

import Link from "next/link";
import { useState } from "react";

type PackageOption = {
  id: string;
  label: string;
  price: string;
  catalogId?: string;
};

type PackageOptionBuyProps = {
  buyLabel: string;
  selectLabel: string;
  productId: string;
  options: readonly PackageOption[];
};

export function PackageOptionBuy({
  buyLabel,
  selectLabel,
  productId,
  options,
}: PackageOptionBuyProps) {
  const [selectedId, setSelectedId] = useState(options[0]?.id ?? "");
  const selected = options.find((option) => option.id === selectedId) ?? options[0];

  if (!selected) {
    return null;
  }

  return (
    <div className="flex flex-col gap-sm">
      <div className="flex flex-col gap-xs">
        <label className="form-label" htmlFor={`${productId}-package`}>
          {selectLabel}
        </label>
        <div className="relative">
          <select
            id={`${productId}-package`}
            className="input-field appearance-none pr-lg"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} — {option.price}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined icon-base absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
            expand_more
          </span>
        </div>
      </div>
      <div className="font-h3 text-h3 text-primary">{selected.price}</div>
      <Link
        href={
          selected.catalogId
            ? `/enroll?package=${encodeURIComponent(selected.catalogId)}`
            : `/enroll?product=${encodeURIComponent(productId)}&package=${encodeURIComponent(selected.id)}`
        }
        className="btn-primary w-full sm:w-auto self-start"
      >
        {buyLabel}
      </Link>
    </div>
  );
}
