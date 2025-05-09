"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dash border-black p-4 mx-auto mt-10">
      <h2>Dashboard Template {count}</h2>
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
