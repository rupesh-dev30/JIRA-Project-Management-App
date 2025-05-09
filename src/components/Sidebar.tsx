import Image from "next/image";
import Link from "next/link";
import React from "react";
import DottedSeparator from "./DottedSeparator";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/jira-logo.png" height={50} width={120} alt="logo" />
      </Link>

      <DottedSeparator className="my-4"/>

      <Navigation />
    </aside>
  );
}
