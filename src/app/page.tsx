"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/useCurrent";
import { useLogout } from "@/features/auth/api/useLogout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if(!data && !isLoading) {
      router.push("/sign-in");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  return (
    <div className="h-screen flex items-center justify-center gap-4">
      ONLY VISIBLE TO AUTHORIZED USER

      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
