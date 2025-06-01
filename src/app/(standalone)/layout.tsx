import UserButton from "@/features/auth/components/UserButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StandloneLayoutProps {
  children: React.ReactNode;
}

export default function StandloneLayout({ children }: StandloneLayoutProps) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <Image src="/jira-logo.png" height={50} width={120} alt="logo" />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
}
