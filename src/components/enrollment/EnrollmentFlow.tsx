"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/components/LocaleProvider";
import {
  formatUsd,
  HIGH_SCHOOLS,
  isEligibleTeenAge,
  isRoadTestProduct,
  type ClassSession,
  type EnrollmentAddon,
  type EnrollmentProduct,
  US_STATES,
} from "@/lib/enrollment/catalog";

type EnrollmentFlowProps = {
  product: EnrollmentProduct | null;
  classSessions: ClassSession[];
  enrollmentAddons: EnrollmentAddon[];
};

type StudentForm = {
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  state: string;
  zipCode: string;
  homePhone: string;
  cellPhone: string;
  email: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;
  gender: string;
  highSchool: string;
  permitNumber: string;
  permitIssuedDate: string;
  parentName: string;
  parentCell: string;
  parentEmail: string;
};

const emptyForm: StudentForm = {
  firstName: "",
  lastName: "",
  city: "",
  address: "",
  state: "",
  zipCode: "",
  homePhone: "",
  cellPhone: "",
  email: "",
  dobMonth: "",
  dobDay: "",
  dobYear: "",
  gender: "",
  highSchool: "",
  permitNumber: "",
  permitIssuedDate: "",
  parentName: "",
  parentCell: "",
  parentEmail: "",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <span>
      {children} <span className="text-error">*</span>
    </span>
  );
}

function OrderSummary({
  product,
  selectedAddon,
  labels,
}: {
  product: EnrollmentProduct;
  selectedAddon: EnrollmentAddon | null;
  labels: {
    productName: string;
    price: string;
    total: string;
    addonName: string;
  };
}) {
  const total = product.price + (selectedAddon?.price ?? 0);

  return (
    <div className="overflow-x-auto rounded-lg border border-outline-variant mb-lg">
      <table className="min-w-full text-left text-body-sm">
        <thead className="bg-surface-container-low">
          <tr>
            <th className="px-md py-sm font-semibold text-on-surface-variant">{labels.productName}</th>
            <th className="px-md py-sm font-semibold text-on-surface-variant text-right">{labels.price}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-outline-variant">
            <td className="px-md py-sm">{product.name}</td>
            <td className="px-md py-sm text-right">{product.priceLabel}</td>
          </tr>
          {selectedAddon && (
            <tr className="border-t border-outline-variant">
              <td className="px-md py-sm">{labels.addonName}</td>
              <td className="px-md py-sm text-right">{selectedAddon.priceLabel}</td>
            </tr>
          )}
          <tr className="border-t border-outline-variant bg-surface-container-low font-semibold">
            <td className="px-md py-sm">{labels.total}</td>
            <td className="px-md py-sm text-right">{formatUsd(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ClassSessionSelectButton({
  isSelected,
  onSelect,
  selectLabel,
  selectedLabel,
}: {
  isSelected: boolean;
  onSelect: () => void;
  selectLabel: string;
  selectedLabel: string;
}) {
  return (
    <button
      type="button"
      className={
        isSelected
          ? "inline-flex w-full items-center justify-center gap-xs rounded-full border-2 border-secondary-container bg-secondary-container px-sm py-xs font-button text-button text-on-secondary sm:w-auto"
          : "btn-primary btn-primary-sm w-full sm:w-auto"
      }
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      {isSelected ? (
        <>
          <span className="material-symbols-outlined icon-sm">check_circle</span>
          {selectedLabel}
        </>
      ) : (
        selectLabel
      )}
    </button>
  );
}

function ClassSessionCards({
  sessions,
  selectedSessionId,
  onSelect,
  onViewSchedule,
  labels,
}: {
  sessions: ClassSession[];
  selectedSessionId: string | null;
  onSelect: (sessionId: string) => void;
  onViewSchedule: (sessionId: string) => void;
  labels: {
    location: string;
    startDate: string;
    endDate: string;
    schedule: string;
    classNotes: string;
    selectClass: string;
    classSelected: string;
    viewSchedule: string;
  };
}) {
  return (
    <div className="flex flex-col gap-sm md:hidden">
      {sessions.map((session) => {
        const isSelected = selectedSessionId === session.id;

        return (
          <article
            key={session.id}
            className={`rounded-lg border p-md flex flex-col gap-sm ${
              isSelected
                ? "border-secondary-container bg-secondary-fixed"
                : "border-outline-variant bg-surface-container-lowest"
            }`}
          >
            <h3 className="font-h3 text-h3 text-primary">{session.location}</h3>
            <dl className="grid grid-cols-[minmax(5.5rem,auto)_1fr] gap-x-sm gap-y-xs text-body-sm">
              <dt className="text-on-surface-variant">{labels.startDate}</dt>
              <dd>{session.startDate}</dd>
              <dt className="text-on-surface-variant">{labels.endDate}</dt>
              <dd>{session.endDate}</dd>
              <dt className="text-on-surface-variant">{labels.schedule}</dt>
              <dd>
                <button
                  type="button"
                  className="text-secondary-container underline hover:text-primary text-left"
                  onClick={() => onViewSchedule(session.id)}
                >
                  {labels.viewSchedule}
                </button>
              </dd>
              {session.notes ? (
                <>
                  <dt className="text-on-surface-variant">{labels.classNotes}</dt>
                  <dd>{session.notes}</dd>
                </>
              ) : null}
            </dl>
            <ClassSessionSelectButton
              isSelected={isSelected}
              onSelect={() => onSelect(session.id)}
              selectLabel={labels.selectClass}
              selectedLabel={labels.classSelected}
            />
          </article>
        );
      })}
    </div>
  );
}

function DobFields({
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange,
  labels,
}: {
  month: string;
  day: string;
  year: string;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onYearChange: (value: string) => void;
  labels: { month: string; day: string; year: string };
}) {
  const days = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0"));
  const years = Array.from({ length: 30 }, (_, index) => String(new Date().getFullYear() - index));

  return (
    <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-sm">
      <select className="input-field" value={month} onChange={(e) => onMonthChange(e.target.value)} aria-label={labels.month}>
        <option value="">{labels.month}</option>
        {MONTHS.map((label, index) => (
          <option key={label} value={String(index + 1)}>
            {label}
          </option>
        ))}
      </select>
      <select className="input-field" value={day} onChange={(e) => onDayChange(e.target.value)} aria-label={labels.day}>
        <option value="">{labels.day}</option>
        {days.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <select className="input-field" value={year} onChange={(e) => onYearChange(e.target.value)} aria-label={labels.year}>
        <option value="">{labels.year}</option>
        {years.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

function ClassSessionTable({
  sessions,
  selectedSessionId,
  onSelect,
  onViewSchedule,
  labels,
}: {
  sessions: ClassSession[];
  selectedSessionId: string | null;
  onSelect: (sessionId: string) => void;
  onViewSchedule: (sessionId: string) => void;
  labels: {
    location: string;
    startDate: string;
    endDate: string;
    schedule: string;
    classNotes: string;
    selectClass: string;
    classSelected: string;
    viewSchedule: string;
  };
}) {
  return (
    <div className="hidden md:block overflow-x-auto rounded-lg border border-outline-variant">
      <table className="min-w-full text-left text-body-sm">
        <thead className="bg-surface-container-low">
          <tr>
            <th className="px-sm py-sm">{labels.location}</th>
            <th className="px-sm py-sm">{labels.startDate}</th>
            <th className="px-sm py-sm">{labels.endDate}</th>
            <th className="px-sm py-sm">{labels.schedule}</th>
            <th className="px-sm py-sm">{labels.classNotes}</th>
            <th className="px-sm py-sm text-right">{labels.selectClass}</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => {
            const isSelected = selectedSessionId === session.id;
            return (
              <tr
                key={session.id}
                className={`border-t border-outline-variant ${
                  isSelected ? "bg-secondary-fixed" : ""
                }`}
              >
                <td className="px-sm py-sm">{session.location}</td>
                <td className="px-sm py-sm">{session.startDate}</td>
                <td className="px-sm py-sm">{session.endDate}</td>
                <td className="px-sm py-sm">
                  <button
                    type="button"
                    className="text-secondary-container underline hover:text-primary"
                    onClick={() => onViewSchedule(session.id)}
                  >
                    {labels.viewSchedule}
                  </button>
                </td>
                <td className="px-sm py-sm">{session.notes || "—"}</td>
                <td className="px-sm py-sm text-right">
                  <ClassSessionSelectButton
                    isSelected={isSelected}
                    onSelect={() => onSelect(session.id)}
                    selectLabel={labels.selectClass}
                    selectedLabel={labels.classSelected}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const subscribeNoop = () => () => undefined;

function useIsClient() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

function ScheduleBox({
  session,
  title,
  closeLabel,
  onClose,
}: {
  session: ClassSession;
  title: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const mounted = useIsClient();

  useEffect(() => {
    if (!mounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className="enrollment-schedule-overlay" onClick={onClose} role="presentation">
      <div
        className="enrollment-schedule-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-dialog-title"
      >
        <div className="flex items-start justify-between gap-sm mb-md">
          <div>
            <h3 id="schedule-dialog-title" className="font-h3 text-h3 text-primary">
              {title}
            </h3>
            <p className="text-body-sm text-on-surface-variant mt-xs">
              {session.location} · {session.startDate} – {session.endDate}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 text-on-surface-variant hover:text-primary"
            onClick={onClose}
            aria-label={closeLabel}
          >
            <span className="material-symbols-outlined icon-base">close</span>
          </button>
        </div>
        <ul className="enrollment-schedule-list">
          {session.scheduleDetails.map((line) => (
            <li key={line}>
              <span className="material-symbols-outlined icon-sm text-secondary-container mt-0.5 shrink-0">
                schedule
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-md flex justify-end">
          <button type="button" className="btn-outline" onClick={onClose}>
            {closeLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function EnrollmentFlow({
  product,
  classSessions,
  enrollmentAddons,
}: EnrollmentFlowProps) {
  const router = useRouter();
  const { messages } = useLocale();
  const e = messages.enrollment;
  const formTopRef = useRef<HTMLDivElement>(null);
  const isFirstStepRender = useRef(true);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dobMonth, setDobMonth] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [showClasses, setShowClasses] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [viewScheduleSessionId, setViewScheduleSessionId] = useState<string | null>(null);
  const [selectedAddonId, setSelectedAddonId] = useState<string | null>(null);
  const [form, setForm] = useState<StudentForm>(emptyForm);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isFirstStepRender.current) {
      isFirstStepRender.current = false;
      return;
    }
    formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const dobComplete = Boolean(dobMonth && dobDay && dobYear);
  const dobEligible = useMemo(() => {
    if (!dobComplete) return null;
    return isEligibleTeenAge(Number(dobMonth), Number(dobDay), Number(dobYear));
  }, [dobComplete, dobMonth, dobDay, dobYear]);

  const selectedSession = classSessions.find((session) => session.id === selectedSessionId);
  const selectedAddon =
    enrollmentAddons.find((addon) => addon.id === selectedAddonId) ?? null;
  const viewScheduleSession = classSessions.find((session) => session.id === viewScheduleSessionId);

  const updateForm = (field: keyof StudentForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const goToStep = (nextStep: 1 | 2 | 3) => {
    setStep(nextStep);
  };

  const handleBack = () => {
    setError(null);
    if (step > 1) {
      goToStep((step - 1) as 1 | 2);
      return;
    }
    router.push(isRoadTestProduct(product?.id) ? "/road-tests" : "/courses");
  };

  const backButton = (
    <button
      type="button"
      onClick={handleBack}
      aria-label={e.back}
      className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-primary hover:bg-surface-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
    >
      <span className="material-symbols-outlined icon-base">arrow_back</span>
    </button>
  );

  if (!product) {
    return (
      <div ref={formTopRef} className="flex flex-col gap-md scroll-mt-28">
        {backButton}
        <div className="card text-center flex flex-col gap-md items-center">
          <p className="text-body-md text-on-surface-variant">{e.selectProduct}</p>
          <Link href="/courses" className="btn-primary">
            {e.browsePrograms}
          </Link>
        </div>
      </div>
    );
  }

  const canContinueStep1 = () => {
    if (product.requiresTeenAge) {
      if (!dobComplete || dobEligible === false) return false;
    }
    if (product.needsClassSelection) {
      if (!showClasses || !selectedSessionId) return false;
    }
    return true;
  };

  const handleShowClasses = () => {
    setError(null);
    if (product.requiresTeenAge && dobEligible === false) {
      setError(e.notEligible);
      return;
    }
    if (product.requiresTeenAge && !dobComplete) {
      setError(e.agePrompt);
      return;
    }
    setShowClasses(true);
  };

  const handleClearDob = () => {
    setDobMonth("");
    setDobDay("");
    setDobYear("");
    setShowClasses(false);
    setSelectedSessionId(null);
    setError(null);
  };

  const continueToStudentInfo = () => {
    if (!canContinueStep1()) {
      setError(product.needsClassSelection ? e.selectClassFirst : e.agePrompt);
      return;
    }
    setError(null);
    setForm((current) => ({
      ...current,
      dobMonth,
      dobDay,
      dobYear,
    }));
    setStep(2);
  };

  const continueToPayment = () => {
    const required: (keyof StudentForm)[] = [
      "firstName",
      "lastName",
      "city",
      "address",
      "state",
      "zipCode",
      "cellPhone",
      "email",
      "dobMonth",
      "dobDay",
      "dobYear",
      "highSchool",
      "parentName",
      "parentCell",
      "parentEmail",
    ];
    const missing = required.some((field) => !form[field]);
    if (missing) {
      setError(e.required);
      return;
    }
    setError(null);
    setStep(3);
  };

  const steps = [
    { id: 1 as const, label: e.steps.package },
    { id: 2 as const, label: e.steps.student },
    { id: 3 as const, label: e.steps.payment },
  ];

  return (
    <div ref={formTopRef} className="flex flex-col gap-lg scroll-mt-28">
      <div className="flex items-start gap-md">
        {backButton}
        <nav className="flex-1 border-b border-outline-variant min-w-0">
          <ol className="flex flex-wrap gap-x-md gap-y-xs">
            {steps.map((item) => (
              <li
                key={item.id}
                className={`pb-sm text-body-sm sm:font-button sm:text-button ${
                  step === item.id
                    ? "text-primary border-b-2 border-secondary-container font-bold"
                    : "text-on-surface-variant"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-lg">
          {(product.requiresTeenAge || product.minDeposit > 0) && (
            <div className="rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md">
              {product.requiresTeenAge && (
                <p className="text-body-md text-error font-semibold">{e.ageRequirement}</p>
              )}
              {product.requiresTeenAge && (
                <p className="text-body-md text-error mt-xs">{e.agePrompt}</p>
              )}
              {product.minDeposit > 0 && (
                <p className="text-body-md text-error mt-xs">
                  {e.minDeposit.replace("${amount}", formatUsd(product.minDeposit))}
                </p>
              )}
            </div>
          )}

          <p className="font-h3 text-h3 text-primary">
            {product.name}, {product.priceLabel}
          </p>

          {product.requiresTeenAge && (
            <div className="flex flex-col gap-sm">
              <label className="form-label">
                <RequiredLabel>{e.studentDob}</RequiredLabel>
              </label>
              <DobFields
                month={dobMonth}
                day={dobDay}
                year={dobYear}
                onMonthChange={setDobMonth}
                onDayChange={setDobDay}
                onYearChange={setDobYear}
                labels={{ month: e.month, day: e.day, year: e.year }}
              />
              <div className="flex flex-wrap gap-sm">
                {product.needsClassSelection && (
                  <button type="button" className="btn-primary" onClick={handleShowClasses}>
                    {e.showClasses}
                  </button>
                )}
                <button type="button" className="btn-outline" onClick={handleClearDob}>
                  {e.clear}
                </button>
                {!product.needsClassSelection && (
                  <button type="button" className="btn-primary" onClick={continueToStudentInfo}>
                    {e.continue}
                  </button>
                )}
              </div>
              {dobEligible === false && (
                <p className="text-body-sm text-error">{e.notEligible}</p>
              )}
            </div>
          )}

          {!product.requiresTeenAge && (
            <div className="flex justify-start">
              <button type="button" className="btn-primary" onClick={continueToStudentInfo}>
                {e.continue}
              </button>
            </div>
          )}

          {showClasses && product.needsClassSelection && (
            <>
              <ClassSessionCards
                sessions={classSessions}
                selectedSessionId={selectedSessionId}
                onSelect={setSelectedSessionId}
                onViewSchedule={setViewScheduleSessionId}
                labels={{
                  location: e.table.location,
                  startDate: e.table.startDate,
                  endDate: e.table.endDate,
                  schedule: e.table.schedule,
                  classNotes: e.table.classNotes,
                  selectClass: e.selectClass,
                  classSelected: e.classSelected,
                  viewSchedule: e.viewSchedule,
                }}
              />
              <ClassSessionTable
                sessions={classSessions}
                selectedSessionId={selectedSessionId}
                onSelect={setSelectedSessionId}
                onViewSchedule={setViewScheduleSessionId}
                labels={{
                  location: e.table.location,
                  startDate: e.table.startDate,
                  endDate: e.table.endDate,
                  schedule: e.table.schedule,
                  classNotes: e.table.classNotes,
                  selectClass: e.selectClass,
                  classSelected: e.classSelected,
                  viewSchedule: e.viewSchedule,
                }}
              />
            </>
          )}

          {selectedSession && (
            <p className="text-body-sm text-on-surface-variant">
              {e.selectedSession}: {selectedSession.location} ({selectedSession.startDate} – {selectedSession.endDate})
            </p>
          )}

          {product.offersAddons && (
            <div className="flex flex-col gap-sm">
              <h3 className="font-h3 text-h3 text-primary">{e.addonsTitle}</h3>
              <div className="flex flex-col gap-sm" role="radiogroup" aria-label={e.addonsTitle}>
                {enrollmentAddons.map((addon) => {
                  const addonCopy = e.addons[addon.id as keyof typeof e.addons];
                  const isSelected = selectedAddonId === addon.id;

                  return (
                    <label
                      key={addon.id}
                      className={`flex cursor-pointer items-start gap-md rounded-lg border p-md transition-colors ${
                        isSelected
                          ? "border-secondary-container bg-secondary-fixed"
                          : "border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low"
                      }`}
                    >
                      <input
                        type="radio"
                        name="enrollment-addon"
                        className="mt-1 h-4 w-4 border-outline-variant text-secondary-container focus:ring-secondary-container"
                        checked={isSelected}
                        onChange={() => setSelectedAddonId(addon.id)}
                        onClick={() => {
                          if (isSelected) setSelectedAddonId(null);
                        }}
                      />
                      <div className="flex flex-1 flex-col gap-xs sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <span className="font-semibold text-primary text-lead sm:text-h3">{addonCopy.name}</span>
                          <p className="text-body-sm text-on-surface-variant mt-xs">{addonCopy.description}</p>
                        </div>
                        <span className="font-semibold text-primary shrink-0">{addon.priceLabel}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {product.needsClassSelection && showClasses && (
            <div className="flex justify-end">
              <button type="button" className="btn-primary" onClick={continueToStudentInfo}>
                {e.continue}
              </button>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-lg">
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 px-md py-sm text-body-sm text-on-surface">
            {e.noPaste}
          </div>

          <h2 className="font-h2 text-h2 text-primary">{e.studentInformation}</h2>
          <OrderSummary
            product={product}
            selectedAddon={selectedAddon}
            labels={{
              productName: e.productName,
              price: e.price,
              total: e.total,
              addonName: selectedAddon
                ? e.addons[selectedAddon.id as keyof typeof e.addons].name
                : "",
            }}
          />

          <div className="grid gap-md md:grid-cols-2">
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="firstName"><RequiredLabel>{e.firstName}</RequiredLabel></label>
              <input id="firstName" className="input-field" value={form.firstName} onChange={(ev) => updateForm("firstName", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="lastName"><RequiredLabel>{e.lastName}</RequiredLabel></label>
              <input id="lastName" className="input-field" value={form.lastName} onChange={(ev) => updateForm("lastName", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="city"><RequiredLabel>{e.city}</RequiredLabel></label>
              <input id="city" className="input-field" value={form.city} onChange={(ev) => updateForm("city", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label"><RequiredLabel>{e.dateOfBirth}</RequiredLabel></label>
              <DobFields
                month={form.dobMonth}
                day={form.dobDay}
                year={form.dobYear}
                onMonthChange={(value) => updateForm("dobMonth", value)}
                onDayChange={(value) => updateForm("dobDay", value)}
                onYearChange={(value) => updateForm("dobYear", value)}
                labels={{ month: e.month, day: e.day, year: e.year }}
              />
            </div>
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="form-label" htmlFor="address"><RequiredLabel>{e.address}</RequiredLabel></label>
              <input id="address" className="input-field" value={form.address} onChange={(ev) => updateForm("address", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="state"><RequiredLabel>{e.state}</RequiredLabel></label>
              <select id="state" className="input-field" value={form.state} onChange={(ev) => updateForm("state", ev.target.value)}>
                <option value="">{e.pleaseSelect}</option>
                {US_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="zipCode"><RequiredLabel>{e.zipCode}</RequiredLabel></label>
              <input id="zipCode" className="input-field" value={form.zipCode} onChange={(ev) => updateForm("zipCode", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="homePhone">{e.homePhone}</label>
              <input id="homePhone" className="input-field" value={form.homePhone} onChange={(ev) => updateForm("homePhone", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label">{e.gender}</label>
              <div className="flex gap-md py-sm">
                <label className="flex items-center gap-xs text-body-sm">
                  <input type="radio" name="gender" value="male" checked={form.gender === "male"} onChange={(ev) => updateForm("gender", ev.target.value)} />
                  {e.male}
                </label>
                <label className="flex items-center gap-xs text-body-sm">
                  <input type="radio" name="gender" value="female" checked={form.gender === "female"} onChange={(ev) => updateForm("gender", ev.target.value)} />
                  {e.female}
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="cellPhone"><RequiredLabel>{e.cellPhone}</RequiredLabel></label>
              <input id="cellPhone" className="input-field" value={form.cellPhone} onChange={(ev) => updateForm("cellPhone", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="highSchool"><RequiredLabel>{e.highSchool}</RequiredLabel></label>
              <select id="highSchool" className="input-field" value={form.highSchool} onChange={(ev) => updateForm("highSchool", ev.target.value)}>
                <option value="">{e.pleaseSelect}</option>
                {HIGH_SCHOOLS.map((school) => (
                  <option key={school} value={school}>{school}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="form-label" htmlFor="email"><RequiredLabel>{e.email}</RequiredLabel></label>
              <input id="email" type="email" className="input-field" value={form.email} onChange={(ev) => updateForm("email", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="permitNumber">{e.permitNumber}</label>
              <input id="permitNumber" className="input-field" value={form.permitNumber} onChange={(ev) => updateForm("permitNumber", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="permitIssuedDate">{e.permitIssuedDate}</label>
              <input id="permitIssuedDate" type="date" className="input-field" value={form.permitIssuedDate} onChange={(ev) => updateForm("permitIssuedDate", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="parentName"><RequiredLabel>{e.parentName}</RequiredLabel></label>
              <input id="parentName" className="input-field" value={form.parentName} onChange={(ev) => updateForm("parentName", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="parentCell"><RequiredLabel>{e.parentCell}</RequiredLabel></label>
              <input id="parentCell" className="input-field" value={form.parentCell} onChange={(ev) => updateForm("parentCell", ev.target.value)} />
            </div>
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="form-label" htmlFor="parentEmail"><RequiredLabel>{e.parentEmail}</RequiredLabel></label>
              <input id="parentEmail" type="email" className="input-field" value={form.parentEmail} onChange={(ev) => updateForm("parentEmail", ev.target.value)} />
            </div>
          </div>

          <div className="flex flex-wrap gap-sm justify-between">
            <button type="button" className="btn-outline" onClick={() => goToStep(1)}>{e.back}</button>
            <button type="button" className="btn-primary" onClick={continueToPayment}>{e.continue}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-lg">
          <h2 className="font-h2 text-h2 text-primary">{e.orderSummary}</h2>
          <OrderSummary
            product={product}
            selectedAddon={selectedAddon}
            labels={{
              productName: e.productName,
              price: e.price,
              total: e.total,
              addonName: selectedAddon
                ? e.addons[selectedAddon.id as keyof typeof e.addons].name
                : "",
            }}
          />
          {selectedSession && (
            <p className="text-body-sm text-on-surface-variant">
              {e.selectedSession}: {selectedSession.location} ({selectedSession.startDate} – {selectedSession.endDate})
            </p>
          )}
          <div className="flex flex-wrap gap-sm justify-between items-center">
            <button type="button" className="btn-outline" onClick={() => goToStep(2)}>{e.back}</button>
            <button type="button" className="btn-primary">{e.payNow}</button>
          </div>
        </div>
      )}

      {error && <p className="text-body-sm text-error">{error}</p>}

      {viewScheduleSession && (
        <ScheduleBox
          session={viewScheduleSession}
          title={e.scheduleTitle}
          closeLabel={e.close}
          onClose={() => setViewScheduleSessionId(null)}
        />
      )}
    </div>
  );
}
