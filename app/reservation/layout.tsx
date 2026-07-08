import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";

export default function ReservationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <div className="flex w-full justify-center pt-[82px]">
        <div className="w-full max-w-5xl">
          {children}
        </div>
      </div>
    </>
  );
}
