"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  return (
    <div className="border-2 border-dash border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        <Link
          className={pathName === "/dashboard/about" ? "text-purple-500" : ""}
          href="/dashboard/about"
        >
          About
        </Link>
        <Link
          className={
            pathName === "/dashboard/settings" ? "text-purple-500" : ""
          }
          href="/dashboard/settings"
        >
          Settings
        </Link>
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="p-2 bg-black text-white my-2 rounded-2"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      {children}
    </div>
  );
}
