import { getCurrent } from "@/features/auth/actions";
import { getWorkspace } from "@/features/workspaces/actions";
import EditWorkspaceForm from "@/features/workspaces/components/editWorkspaceForm";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingProps {
  params: {
    workspaceId: string;
  };
}

export default async function WorkspaceIdSetting({
  params,
}: WorkspaceIdSettingProps) {
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
