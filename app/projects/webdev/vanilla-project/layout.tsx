"use client";

import { Suspense } from "react";
import Side from "../../Side";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Side />
      <div>{children}</div>
    </main>
  );
}
