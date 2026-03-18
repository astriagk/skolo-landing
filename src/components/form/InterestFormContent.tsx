"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import StepIndicator from "@/components/form/StepIndicator";
import UserTypeSelect, { type UserType } from "@/components/form/UserTypeSelect";
import ParentFields from "@/components/form/ParentFields";
import SchoolFields from "@/components/form/SchoolFields";
import DriverFields from "@/components/form/DriverFields";


const initialParentData = { name: "", phone: "", email: "", schoolName: "", city: "" };
const initialSchoolData = { schoolName: "", contactName: "", designation: "", phone: "", email: "", city: "", busCount: "", studentCount: "" };
const initialDriverData = { name: "", phone: "", schoolName: "", city: "", experience: "" };

interface Props {
  /** Smaller icon/text sizes — use inside the modal */
  compact?: boolean;
}

export default function InterestFormContent({ compact = false }: Props) {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [parentData, setParentData] = useState(initialParentData);
  const [schoolData, setSchoolData] = useState(initialSchoolData);
  const [driverData, setDriverData] = useState(initialDriverData);
  const [consent, setConsent] = useState(true);
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const currentPhone =
    userType === "parent" ? parentData.phone
    : userType === "school" ? schoolData.phone
    : driverData.phone;

  useEffect(() => {
    if (!userType || currentPhone.length !== 10) { setPhoneError(""); return; }
    let cancelled = false;
    fetch(`/api/interest?phone=${currentPhone}&userType=${userType}`)
      .then((r) => r.json())
      .then((data) => { if (!cancelled) setPhoneError(data.exists ? data.message : ""); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [currentPhone, userType]);

  const canProceedStep1 = userType !== null;

  const canProceedStep2 = (() => {
    if (phoneError) return false;
    if (userType === "parent") return parentData.name.trim() && parentData.phone.length === 10 && parentData.city;
    if (userType === "school") return schoolData.schoolName.trim() && schoolData.contactName.trim() && schoolData.designation && schoolData.phone.length === 10 && schoolData.email.trim() && schoolData.city;
    if (userType === "driver") return driverData.name.trim() && driverData.phone.length === 10 && driverData.city;
    return false;
  })();

  const getFormData = () => {
    const base = { userType, whatsappOptIn, submittedAt: new Date().toISOString() };
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
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getFormData()),
      });
      if (res.status === 409) {
        const data = await res.json();
        setError(data.message || "You are already registered with this phone number.");
        return;
      }
      if (!res.ok) throw new Error("Submission failed");
      localStorage.setItem("skolo_registered", "1");
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success ──────────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className={`mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary-100 to-emerald-100 shadow-lg shadow-secondary-200/50 ${compact ? "h-14 w-14" : "h-20 w-20"}`}>
          <svg className={`text-secondary-600 ${compact ? "h-7 w-7" : "h-10 w-10"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className={`font-bold text-gray-900 mb-2 ${compact ? "text-lg" : "text-2xl"}`}>
          You&apos;re on the list!
        </h2>
        <p className={`text-gray-600 ${compact ? "text-sm" : ""}`}>
          Thank you for your interest in Skolo. We&apos;ll reach out to you soon with updates.
        </p>
      </div>
    );
  }

  // ── Steps ─────────────────────────────────────────────────────────────────
  return (
    <>
      <StepIndicator currentStep={step} totalSteps={3} />

      {/* Step 1: User Type */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">I am a...</h3>
          <UserTypeSelect
            value={userType}
            onChange={setUserType}
            onSelect={() => setTimeout(() => setStep(2), 200)}
          />
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className={!canProceedStep1 ? "opacity-50 cursor-not-allowed" : ""}
            >
              Continue
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {userType === "parent" && "Tell us about yourself"}
            {userType === "school" && "School details"}
            {userType === "driver" && "Driver details"}
          </h3>
          {userType === "parent" && <ParentFields data={parentData} onChange={setParentData} phoneError={phoneError} />}
          {userType === "school" && <SchoolFields data={schoolData} onChange={setSchoolData} phoneError={phoneError} />}
          {userType === "driver" && <DriverFields data={driverData} onChange={setDriverData} phoneError={phoneError} />}
          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)} size="sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Button>
            <Button
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className={!canProceedStep2 ? "opacity-50 cursor-not-allowed" : ""}
            >
              Review
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm your details</h3>

          <div className="rounded-xl bg-gray-50 p-4 mb-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Type</span>
              <span className="font-medium text-gray-900 capitalize">{userType}</span>
            </div>
            {userType === "parent" && (
              <>
                <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium text-gray-900">{parentData.name}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium text-gray-900">+91 {parentData.phone}</span></div>
                {parentData.email && <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium text-gray-900">{parentData.email}</span></div>}
                <div className="flex justify-between"><span className="text-gray-500">School</span><span className="font-medium text-gray-900">{parentData.schoolName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">City</span><span className="font-medium text-gray-900">{parentData.city}</span></div>
              </>
            )}
            {userType === "school" && (
              <>
                <div className="flex justify-between"><span className="text-gray-500">School</span><span className="font-medium text-gray-900">{schoolData.schoolName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Contact</span><span className="font-medium text-gray-900">{schoolData.contactName}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium text-gray-900">+91 {schoolData.phone}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium text-gray-900">{schoolData.email}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">City</span><span className="font-medium text-gray-900">{schoolData.city}</span></div>
              </>
            )}
            {userType === "driver" && (
              <>
                <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium text-gray-900">{driverData.name}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium text-gray-900">+91 {driverData.phone}</span></div>
                {driverData.schoolName && <div className="flex justify-between"><span className="text-gray-500">School</span><span className="font-medium text-gray-900">{driverData.schoolName}</span></div>}
                <div className="flex justify-between"><span className="text-gray-500">City</span><span className="font-medium text-gray-900">{driverData.city}</span></div>
              </>
            )}
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">I agree to be contacted about Skolo updates *</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsappOptIn}
                onChange={(e) => setWhatsappOptIn(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">Send me updates on WhatsApp</span>
            </label>
          </div>

          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-danger-50 border border-danger-200 px-4 py-3 mb-4">
              <svg className="h-5 w-5 text-danger-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <p className="text-sm text-danger-700">{error}</p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)} size="sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!consent || isSubmitting}
              className={!consent ? "opacity-50 cursor-not-allowed" : ""}
            >
              {isSubmitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Join Us
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
