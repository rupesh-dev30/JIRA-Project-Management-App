import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";
import EditWorkspaceForm from "@/features/workspaces/components/editWorkspaceForm";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingProps {
  params: Promise<{
    workspaceId: string;
  }>;
}

export default async function WorkspaceIdSetting(props: WorkspaceIdSettingProps) {
  const params = await props.params;
  const user = await getCurrent();
  if (!user) redirect("sign-in");

  const initialValues = await getWorkspace({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect(`/wokspaces/${params.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
}
