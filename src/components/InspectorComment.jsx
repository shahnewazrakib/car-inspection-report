import { Avatar } from "antd";

export default function InspectorComment({inspectorComment, assignedTo, title}) {
  return (
    <div className="rounded-xl border">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
        <h4 className="font-semibold text-lg">Inspector Comment</h4>
        <p className="text-sm">{title}</p>
      </div>
      
      <div className="p-4 sm:p-6 space-y-2">
        <div className="text-sm text-center leading-relaxed">
          {inspectorComment || "No comments"}
        </div>
        <div className="flex items-center gap-2 justify-center">
          {assignedTo?.profilePhoto ? (
            <Avatar
              size={40}
              src={assignedTo?.profilePhoto}
              width={50}
            />
          ) : (
            <img src="/inspector.png" width={50} />
          )}
          <div className="text-sm">
            <p>{assignedTo?.name}</p>
            <p className=" text-text">Inspector, Ride Inspect</p>
          </div>
        </div>
      </div>
    </div>
  );
}
