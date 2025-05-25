"use client"

import ResponsiveModal from "@/components/ResponsiveModal";
import CreateWorkspaceForm from "./createWorkspaceForm";

export default function CreateWorkspaceModal() {
  return (
    <ResponsiveModal open onOpenChange={() => {}}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  );
}
