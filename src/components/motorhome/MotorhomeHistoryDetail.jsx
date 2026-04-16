import { LuShield } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { Image, Popover, Tag } from "antd";
import { FaCarBurst, FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { useState } from "react";
import VideoPlayer from "../premium/VideoPlayer";

const MediaComponent = ({ media }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  const onVideoClose = () => {
    setVideoSrc(null);
  };

  return media?.photos.length === 0 && !media?.video ? null : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
      {media?.video && (
        <div
          className="bg-no-repeat bg-center w-full h-[100px] sm:h-[120px] md:h-[130px] rounded-lg object-contain flex items-center justify-center bg-black"
          style={{
            backgroundImage: `url(https://image.mux.com/${media?.video}/thumbnail.png?width=400&height=130&time=1)`,
          }}
        >
          <button
            onClick={() => setVideoSrc(media?.video)}
            className="bg-black hover:bg-primary transition-all duration-200 cursor-pointer size-12 flex items-center justify-center text-white rounded-full drop-shadow-2xl border shadow-2xl shadow-black"
          >
            <FaPlay size={18} />
          </button>
        </div>
      )}
      {media?.photos.length > 0 && (
        <Image.PreviewGroup items={media?.photos}>
          {media?.photos?.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              placeholder={true}
              className="rounded-xl !h-[100px] sm:!h-[120px] md:!h-[130px] w-full object-cover"
              preview={{ maskClassName: "rounded-xl" }}
            />
          ))}
        </Image.PreviewGroup>
      )}

      {media?.video && (
        <VideoPlayer playbackId={videoSrc} onClose={onVideoClose} />
      )}
    </div>
  );
};

export default function MotorhomeHistoryDetail({ history }) {
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
      key: "serviceRecord",
      label: "Service Record",
      icon: <IoClipboardOutline />,
      yesMessage: "Service records available",
      noMessage: "No service records available",
    },
  ];

  const filteredHistoryChecks = historyChecks.filter((check) => {
    const historyData = history?.[check.key];
    if (!historyData.available) return false;
    return (
      historyData?.status === "yes" &&
      (historyData?.comment.trim() !== "" || historyData?.photos.length > 0)
    );
  });

  const hasHistoryDetails =
    filteredHistoryChecks.length > 0 ||
    history?.media?.photos.length > 0 ||
    history?.media?.video;

  return hasHistoryDetails ? (
    <div className="border rounded-xl">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-lg">Vehicle History Details</h4>
          <div>
            <Popover
              placement="top"
              content={
                <p className="text-[13px] max-w-[300px]">
                  Information is sourced from the PPSR, third-party databases,
                  diagnostic tools, and available service records at the time of
                  inspection. Ride Inspect uses advanced equipment to assess the
                  vehicle, where applicable, at the time of inspection. While
                  every effort is made, we do not guarantee the accuracy,
                  completeness, or future condition of the vehicle.
                </p>
              }
            >
              <FiInfo className="cursor-pointer" size={18} />
            </Popover>
          </div>
        </div>
        <p className="text-sm">Motorhome / RV</p>
      </div>

      <MediaComponent media={history?.media} />

      {filteredHistoryChecks.length > 0 &&
      (history?.media?.photos.length > 0 || history?.media?.video) ? (
        <hr className="border-t my-2" />
      ) : null}

      {filteredHistoryChecks.length > 0 && (
        <div className="p-3 sm:p-6 grid md:grid-cols-2 gap-3">
          {filteredHistoryChecks?.map((check, index) => {
            const historyData = history?.[check.key];
            const isServiceCheck = check.key === "serviceRecord";

            // Determine tag color with reversed logic for serviceCheck
            const tagColor = isServiceCheck
              ? historyData?.status === "yes"
                ? "green"
                : historyData?.status === "no"
                ? "red"
                : undefined
              : historyData?.status === "yes"
              ? "red"
              : historyData?.status === "no"
              ? "green"
              : undefined;

            const tagLabel =
              historyData?.status === "yes"
                ? "Yes"
                : historyData?.status === "no"
                ? isServiceCheck
                  ? "No"
                  : "Ok"
                : "N/A";

            return (
              <div
                key={index}
                id={check.key}
                className="border rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div>{check.icon}</div>
                    <h6 className="max-sm:text-sm font-medium">
                      {check.label}
                    </h6>
                  </div>

                  <Tag color={tagColor}>{tagLabel}</Tag>
                </div>

                <div>
                  <h6 className="text-sm">Status:</h6>
                  <p className="text-sm text-text">
                    {historyData?.status === "yes"
                      ? check.yesMessage
                      : historyData?.status === "no"
                      ? check.noMessage
                      : check.unknownMessage}
                  </p>
                </div>

                {historyData?.comment && (
                  <div>
                    <h6 className="text-sm">Description:</h6>
                    <p className="text-sm text-text">{historyData?.comment}</p>
                  </div>
                )}

                {historyData?.photos?.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-2">
                    <Image.PreviewGroup items={historyData?.photos}>
                      {historyData?.photos.map((photo, index) => (
                        <Image
                          key={index}
                          src={photo}
                          placeholder={true}
                          height={60}
                          className="rounded-md object-cover"
                        />
                      ))}
                    </Image.PreviewGroup>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  ) : null;
}
