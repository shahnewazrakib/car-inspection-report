import { Tag } from "antd";

const ComponentCheck = ({ title, value, isOptional }) => {
  return (
    <div className="space-y-1 border-b px-3 py-3 sm:px-6 last:border-0 flex max-md:flex-col md:items-center gap-1 md:gap-5 text-sm">
      <div className="md:min-w-[50%]">{title}</div>
      {isOptional && !value?.available ? (
        <p className="text-text md:min-w-[100px]">N/A</p>
      ) : (
        <>
          <div className="capitalize md:min-w-[100px]">
            <Tag
              className="text-sm"
              color={
                value.condition === "good"
                  ? "green"
                  : value.condition === "fair"
                  ? "orange"
                  : "red"
              }
            >
              {value.condition}
            </Tag>
          </div>
          <p className="text-text">{value.comment}</p>
        </>
      )}
    </div>
  );
};

const QnAComponent = ({ title, value, componentKey }) => {
  const isReversedBadgeComponent = ["smoothShift", "serviceRecords"].includes(
    componentKey
  );
  const isReversedCommentComponent = componentKey === "smoothShift";
  const shouldShowComment = isReversedCommentComponent
    ? !value.detected
    : value.detected;

  return (
    <div className="space-y-1 border-b px-3 py-3 sm:px-6 last:border-0 text-sm flex max-md:flex-col md:items-center gap-1 md:gap-5">
      <div className="md:min-w-[50%]">{title}</div>

      <div className="capitalize md:min-w-[100px]">
        <Tag
          className="text-sm"
          color={
            isReversedBadgeComponent
              ? value.detected
                ? "green"
                : "red"
              : value.detected
              ? "red"
              : "green"
          }
        >
          {value.detected ? "Yes" : "No"}
        </Tag>
      </div>
      {shouldShowComment && (
        <p className="text-sm text-text">{value.comment}</p>
      )}
    </div>
  );
};

export default function BasicInspectionResult({ report }) {
  const COMPONENTS = [
    {
      key: "engine",
      label: "Engine Bay",
      data: report?.engine,
    },
    {
      key: "transmission",
      label: "Transmission",
      data: report?.transmission,
    },
    {
      key: "differential",
      label: "Differential",
      data: report?.differential,
    },
    {
      key: "suspension",
      label: "Suspension",
      data: report?.suspension,
    },
    {
      key: "wheel",
      label: "Wheels and Tyres",
      data: report?.wheel,
    },
    {
      key: "light",
      label: "Lights",
      data: report?.light,
    },
    {
      key: "noise",
      label: "Are there any abnormal noises, knocking or vibration?",
      data: report?.noise,
    },
    {
      key: "misfire",
      label: "Are there any misfires?",
      data: report?.misfire,
    },
    {
      key: "leaks",
      label: "Are there any leaks?",
      data: report?.leaks,
    },
    {
      label: "Does transmission/gearbox shift smoothly?",
      key: "smoothShift",
      data: report?.smoothShift,
    },
    {
      label: "Does the vehicle have service records?",
      key: "serviceRecords",
      data: report?.serviceRecords,
    },
  ];

  return (
    <div>
      <div className="rounded-xl border">
        <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex items-center justify-between gap-4">
          <h4 className="font-semibold text-lg">Detailed Inspection Results</h4>
          <p className="text-sm">Basic Package</p>
        </div>

        <div>
          <div className="flex gap-5 text-sm max-md:hidden border-b py-3 px-6">
            <div className="font-medium w-1/2">Component</div>
            <div className="font-medium w-[100px]">Status</div>
            <div className="font-medium">Comments</div>
          </div>
          {COMPONENTS.map((component) =>
            [
              "noise",
              "misfire",
              "leaks",
              "smoothShift",
              "serviceRecords",
            ].includes(component.key) ? (
              <QnAComponent
                key={component.key}
                title={component.label}
                value={component.data}
                componentKey={component.key}
              />
            ) : (
              <ComponentCheck
                key={component.key}
                title={component.label}
                value={component.data}
                isOptional={component.key === "differential"}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
