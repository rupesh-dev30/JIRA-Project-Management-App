"use client"

import ResponsiveModal from "@/components/ResponsiveModal";
import CreateWorkspaceForm from "./createWorkspaceForm";
import { useCreateWorkspaceModal } from "../hooks/useCreateWorkspaceModal";

export default function CreateWorkspaceModal() {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close}/>
    </ResponsiveModal>
  );
}
