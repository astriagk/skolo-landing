"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import StepIndicator from "@/components/form/StepIndicator";
import UserTypeSelect, { type UserType } from "@/components/form/UserTypeSelect";
import ParentFields from "@/components/form/ParentFields";
import SchoolFields from "@/components/form/SchoolFields";
import DriverFields from "@/components/form/DriverFields";
import { WHATSAPP_LINK } from "@/lib/constants";
import InterestStats from "@/components/ui/InterestStats";

const initialParentData = { name: "", phone: "", email: "", schoolName: "", city: "" };
const initialSchoolData = { schoolName: "", contactName: "", designation: "", phone: "", email: "", city: "", busCount: "", studentCount: "" };
const initialDriverData = { name: "", phone: "", schoolName: "", city: "", experience: "" };

export default function InterestForm() {
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
    if (!userType || currentPhone.length !== 10) {
      setPhoneError("");
      return;
    }
    let cancelled = false;
    fetch(`/api/interest?phone=${currentPhone}&userType=${userType}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setPhoneError(data.exists ? data.message : "");
      })
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
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <SectionWrapper id="interest-form" className="bg-gradient-to-b from-primary-50 via-violet-50/30 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-lg text-center py-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary-100 to-emerald-100 shadow-lg shadow-secondary-200/50">
            <svg className="h-10 w-10 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re on the list!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Skolo. We&apos;ll reach out to you
            soon with updates.
          </p>
          <Button href={WHATSAPP_LINK} variant="whatsapp" size="lg">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Join WhatsApp Updates
          </Button>
          <p className="mt-4 text-xs text-gray-400">No spam, ever. Only important updates.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="interest-form" className="bg-gradient-to-b from-primary-50 via-violet-50/20 to-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-primary-200/20 via-violet-200/15 to-secondary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-xl">
        <div className="text-center mb-8">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 border border-primary-200/50 px-4 py-1.5 text-sm font-semibold text-primary-700 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
              Now Accepting Registrations
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Join <span className="text-gradient">Us</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Be among the first families to use Skolo. Register your interest today.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              No spam &bull; Secure data &bull; Cancel anytime
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <InterestStats />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-gray-200/40">
            <StepIndicator currentStep={step} totalSteps={3} />

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

                {userType === "parent" && (
                  <ParentFields data={parentData} onChange={setParentData} phoneError={phoneError} />
                )}
                {userType === "school" && (
                  <SchoolFields data={schoolData} onChange={setSchoolData} phoneError={phoneError} />
                )}
                {userType === "driver" && (
                  <DriverFields data={driverData} onChange={setDriverData} phoneError={phoneError} />
                )}

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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Confirm your details
                </h3>

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
                    <span className="text-sm text-gray-600">
                      I agree to be contacted about Skolo updates *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={whatsappOptIn}
                      onChange={(e) => setWhatsappOptIn(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-600">
                      Send me updates on WhatsApp
                    </span>
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
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
