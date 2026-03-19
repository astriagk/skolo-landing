"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import StepIndicator from "@/components/form/StepIndicator";
import UserTypeSelect, {
  type UserType,
} from "@/components/form/UserTypeSelect";
import ParentFields from "@/components/form/ParentFields";
import SchoolFields from "@/components/form/SchoolFields";
import DriverFields from "@/components/form/DriverFields";
import { checkPhone, submitInterest } from "@/lib/api";

const initialParentData = {
  name: "",
  phone: "",
  email: "",
  schoolName: "",
  city: "",
};
const initialSchoolData = {
  schoolName: "",
  contactName: "",
  designation: "",
  phone: "",
  email: "",
  city: "",
  busCount: "",
  studentCount: "",
};
const initialDriverData = {
  name: "",
  phone: "",
  schoolName: "",
  city: "",
  experience: "",
};

interface Props {
  /** Smaller icon/text sizes — use inside the modal */
  compact?: boolean;
  /** Called ~3s after successful submission (e.g. to close a modal) */
  onSuccess?: () => void;
}

export default function InterestFormContent({
  compact = false,
  onSuccess,
}: Props) {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [parentData, setParentData] = useState(initialParentData);
  const [schoolData, setSchoolData] = useState(initialSchoolData);
  const [driverData, setDriverData] = useState(initialDriverData);
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const currentPhone =
    userType === "parent"
      ? parentData.phone
      : userType === "school"
        ? schoolData.phone
        : driverData.phone;

  useEffect(() => {
    if (!userType || currentPhone.length !== 10) {
      setPhoneError("");
      return;
    }
    let cancelled = false;
    checkPhone(currentPhone, userType)
      .then((data) => {
        if (!cancelled) setPhoneError(data.exists ? (data.message ?? "") : "");
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [currentPhone, userType]);

  const canProceedStep2 = (() => {
    if (phoneError) return false;
    if (userType === "parent")
      return (
        parentData.name.trim() &&
        parentData.phone.length === 10 &&
        parentData.city
      );
    if (userType === "school")
      return (
        schoolData.schoolName.trim() &&
        schoolData.contactName.trim() &&
        schoolData.designation &&
        schoolData.phone.length === 10 &&
        schoolData.email.trim() &&
        schoolData.city
      );
    if (userType === "driver")
      return (
        driverData.name.trim() &&
        driverData.phone.length === 10 &&
        driverData.city
      );
    return false;
  })();

  const getFormData = () => {
    const base = { userType, submittedAt: new Date().toISOString() };
    if (userType === "parent") return { ...base, ...parentData };
    if (userType === "school") return { ...base, ...schoolData };
    if (userType === "driver") return { ...base, ...driverData };
    return base;
  };

  const handleSubmit = async () => {
    if (!consent) return;
    setIsSubmitting(true);
    setError("");
    try {
      const { ok, status, message } = await submitInterest(getFormData());
      if (status === 409) {
        setError(message || "You are already registered with this phone number.");
        return;
      }
      if (!ok) throw new Error("Submission failed");
      localStorage.setItem("skolo_registered", "1");
      setIsSubmitted(true);
      if (onSuccess) setTimeout(onSuccess, 6000);
    } catch {
      setError(
        "Something went wrong. Please try again or reach out on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success ──────────────────────────────────────────────────────────────
  if (isSubmitted) {
    const particles = [
      { tx: "-64px", ty: "-52px", bg: "#6366f1", delay: "0.10s" },
      { tx: "64px", ty: "-52px", bg: "#10b981", delay: "0.18s" },
      { tx: "-72px", ty: "8px", bg: "#f59e0b", delay: "0.06s" },
      { tx: "72px", ty: "8px", bg: "#ec4899", delay: "0.24s" },
      { tx: "-38px", ty: "62px", bg: "#3b82f6", delay: "0.14s" },
      { tx: "38px", ty: "62px", bg: "#8b5cf6", delay: "0.20s" },
      { tx: "0", ty: "-72px", bg: "#f97316", delay: "0.08s" },
      { tx: "0", ty: "74px", bg: "#14b8a6", delay: "0.16s" },
    ];

    return (
      <div className="text-center py-8">
        <style>{`
          @keyframes skolo-pop {
            0%   { transform: scale(0) rotate(-12deg); opacity: 0; }
            60%  { transform: scale(1.2) rotate(4deg);  opacity: 1; }
            100% { transform: scale(1)  rotate(0deg);  opacity: 1; }
          }
          @keyframes skolo-check {
            to { stroke-dashoffset: 0; }
          }
          @keyframes skolo-ring {
            0%   { transform: scale(1);   opacity: 0.55; }
            100% { transform: scale(2.1); opacity: 0; }
          }
          @keyframes skolo-burst {
            0%   { transform: translate(0,0)                        scale(1);   opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0.2); opacity: 0; }
          }
          @keyframes skolo-fade-up {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0);    }
          }
          .sk-pop   { animation: skolo-pop  0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
          .sk-check { stroke-dasharray: 50; stroke-dashoffset: 50;
                      animation: skolo-check 0.35s ease-out 0.38s forwards; }
          .sk-ring  { animation: skolo-ring  0.75s ease-out 0.15s forwards; }
          .sk-burst { animation: skolo-burst 0.75s ease-out forwards; }
          .sk-t1    { opacity:0; animation: skolo-fade-up 0.4s ease-out 0.62s forwards; }
          .sk-t2    { opacity:0; animation: skolo-fade-up 0.4s ease-out 0.80s forwards; }
          .sk-t3    { opacity:0; animation: skolo-fade-up 0.4s ease-out 0.95s forwards; }
        `}</style>

        {/* Icon + particles wrapper */}
        <div className="relative inline-flex items-center justify-center mx-auto mb-6">
          {/* Burst particles */}
          {particles.map((p, i) => (
            <div
              key={i}
              className="sk-burst pointer-events-none absolute h-3 w-3 rounded-full"
              style={
                {
                  "--tx": p.tx,
                  "--ty": p.ty,
                  background: p.bg,
                  animationDelay: p.delay,
                } as React.CSSProperties
              }
            />
          ))}

          {/* Pulse ring */}
          <div
            className={`sk-ring absolute inset-0 rounded-full bg-emerald-400/30`}
          />

          {/* Icon circle */}
          <div
            className={`sk-pop flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl shadow-emerald-300/50 ${compact ? "h-16 w-16" : "h-24 w-24"}`}
          >
            <svg
              className={`text-white ${compact ? "h-8 w-8" : "h-12 w-12"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                className="sk-check"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2
          className={`sk-t1 font-bold text-gray-900 mb-1 ${compact ? "text-xl" : "text-3xl"}`}
        >
          You&apos;re on the list! 🎉
        </h2>
        <p
          className={`sk-t2 font-medium text-emerald-600 mb-2 ${compact ? "text-sm" : "text-base"}`}
        >
          Welcome to the Skolo family!
        </p>
        <p className={`sk-t3 text-gray-400 ${compact ? "text-xs" : "text-sm"}`}>
          We&apos;ll reach out to you soon with updates.
        </p>
      </div>
    );
  }

  // ── Steps ─────────────────────────────────────────────────────────────────
  return (
    <>
      <StepIndicator currentStep={step} totalSteps={2} />

      {/* Step 1: User Type */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            I am a...
          </h3>
          <UserTypeSelect
            value={userType}
            onChange={setUserType}
            onSelect={() => setTimeout(() => setStep(2), 200)}
          />
        </div>
      )}

      {/* Step 2: Details + Submit */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {userType === "parent" && "Tell us about yourself"}
            {userType === "school" && "School details"}
            {userType === "driver" && "Driver details"}
          </h3>
          {userType === "parent" && (
            <ParentFields
              data={parentData}
              onChange={setParentData}
              phoneError={phoneError}
            />
          )}
          {userType === "school" && (
            <SchoolFields
              data={schoolData}
              onChange={setSchoolData}
              phoneError={phoneError}
            />
          )}
          {userType === "driver" && (
            <DriverFields
              data={driverData}
              onChange={setDriverData}
              phoneError={phoneError}
            />
          )}

          <div className="mt-4 mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">
                I agree to be contacted about Skolo updates *
              </span>
            </label>
          </div>

          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-danger-50 border border-danger-200 px-4 py-3 mb-4">
              <svg
                className="h-5 w-5 text-danger-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
              <p className="text-sm text-danger-700">{error}</p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)} size="sm">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!canProceedStep2 || !consent || isSubmitting}
              className={
                !canProceedStep2 || !consent
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Join Us
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
