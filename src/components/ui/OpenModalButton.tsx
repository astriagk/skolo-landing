"use client";

import { openInterestModal } from "@/lib/modalController";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function OpenModalButton({ className, children }: Props) {
  return (
    <button onClick={openInterestModal} className={`cursor-pointer ${className ?? ""}`}>
      {children}
    </button>
  );
}
