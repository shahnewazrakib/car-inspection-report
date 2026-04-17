import { Popover, Tag } from "antd";
import { LuShield } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { PiEngine } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { FaCarBurst } from "react-icons/fa6";

export default function PremiumHistory({ history }) {
  const historyChecks = [
    {
      key: "writtenOffRecord",
      label: "Written Off Record",
      icon: <FaCarBurst size={18} />,
      yesMessage: "Written-off incidents reported",
      noMessage: "Not recorded as written-off",
    },
    {
      key: "stolenRecord",
      label: "Stolen Record",
      icon: <LuShield size={18} />,
      yesMessage: "Listed as stolen",
      noMessage: "No record as stolen",
    },
    {
      key: "financeCheck",
      label: "Finance Check",
      icon: <MdAttachMoney size={20} />,
      yesMessage: "Financial interests reported",
      noMessage: "No security interests reported",
    },
    {
      key: "odometerRollback",
      label: "Odometer Rollback check",
      icon: <IoMdSpeedometer size={18} />,
      yesMessage: "Odometer inconsistency suspected",
      noMessage: "No odometer rollback suspected",
    },
    {
      key: "diagnosticScan",
      label: "Diagnostics Scan",
      icon: <PiEngine />,
      yesMessage: "Fault codes detected",
      noMessage: "No fault codes detected",
    },
    {
      key: "serviceRecord",
      label: "Service Record",
      icon: <IoClipboardOutline />,
      yesMessage: "Service records available",
      noMessage: "No service records available",
    },
  ];

  return (
    <div className="border rounded-xl">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-lg">Vehicle History Snapshot</h4>
          <div>
            <Popover
              placement="top"
              content={
                <p className="text-[13px] max-w-[300px]">
                  Information is sourced from the PPSR, third-party databases,
                  diagnostic tools, and available service records at the time of
                  inspection. Vehicle Inspection uses advanced equipment to
                  assess the vehicle, where applicable, at the time of
                  inspection. While every effort is made, we do not guarantee
                  the accuracy, completeness, or future
                  condition of the vehicle.
                </p>
              }
            >
              <FiInfo className="cursor-pointer" size={18} />
            </Popover>
          </div>
        </div>
        <p className="text-sm">Premium Package</p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
          {historyChecks.map((check, index) => {
            const historyData = history?.[check.key];

            // Is this the service check item?
            const isServiceCheck = check.key === "serviceRecord";

            // Determine text color class (reversed if serviceCheck)
            const textColorClass = isServiceCheck
              ? historyData?.status === "yes"
                ? "text-green-600"
                : "text-red-500"
              : historyData?.status === "yes"
                ? "text-red-500"
                : "text-green-600";

            // Determine message (reversed if serviceCheck)
            const statusMessage =
              historyData?.status === "yes"
                ? check.yesMessage
                : check.noMessage;

            // Determine tag color (reversed if serviceCheck)
            const tagColor = isServiceCheck
              ? historyData?.status === "yes"
                ? "green"
                : "red"
              : historyData?.status === "yes"
                ? "red"
                : "green";

            const tagLabel =
              historyData?.status === "yes"
                ? "Yes"
                : isServiceCheck
                  ? "No"
                  : "Ok";

            return (
              <div
                key={index}
                className="border rounded-lg p-2 flex justify-between gap-4"
              >
                <div className="flex gap-2">
                  <div className="bg-black/5 size-9 min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                    {check.icon}
                  </div>
                  <div>
                    <h6 className="text-sm font-medium">{check.label}</h6>
                    <p className={`text-sm ${textColorClass}`}>
                      {statusMessage}
                    </p>

                    {historyData?.status === "yes" &&
                      (historyData?.comment ||
                        historyData?.photos.length > 0) && (
                        <a
                          href={`#${check.key}`}
                          className="text-text text-sm underline-offset-2 underline block w-max"
                        >
                          View more
                        </a>
                      )}
                  </div>
                </div>
                <div>
                  <Tag color={tagColor}>{tagLabel}</Tag>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
