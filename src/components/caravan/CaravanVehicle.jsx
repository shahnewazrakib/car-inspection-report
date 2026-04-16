import { Image } from "antd";
import moment from "moment";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import VideoPlayer from "../premium/VideoPlayer";

export default function CaravanVehicle({ vehicle }) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (value) => {
    setCurrent(value);
    if (!open) {
      setOpen(true);
    }
  };

  const onVideoClose = () => {
    setVideoSrc(null);
  };

  return (
    <div className="border rounded-xl sm:p-6 p-4 grid md:grid-cols-2 gap-5 lg:gap-10">
      <div>
        <h2 className="font-semibold text-xl sm:hidden mb-4">
          Premium Pre Purchase Caravan and Pop Top Inspection Report
        </h2>

        <div className="hero-image">
          {vehicle?.media?.photos?.length === 0 ? (
            <img
              src="/placeholder-car.jpg"
              className="rounded-xl object-cover h-[200px] sm:h-[300px] w-full"
            />
          ) : (
            <div
              className="relative group cursor-pointer"
              onClick={() => handleChange(0)}
            >
              <Image
                className="rounded-xl object-cover !h-[200px] sm:!h-[300px] w-full"
                src={vehicle?.media?.photos[0]}
                preview={false}
                placeholder={true}
              />
              <div className={styles.mask}>
                <MdOutlineRemoveRedEye /> <span>Preview</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-2 hero-additional-image">
          {vehicle?.media?.video && (
            <div
              className="bg-no-repeat bg-center w-full rounded-lg object-contain flex items-center justify-center bg-black"
              style={{
                backgroundImage: `url(https://image.mux.com/${vehicle?.media?.video}/thumbnail.png?width=400&height=130&time=1)`,
              }}
            >
              <button
                onClick={() => setVideoSrc(vehicle?.media?.video)}
                className="bg-white/20 hover:bg-primary transition-all duration-200 cursor-pointer size-9 flex items-center justify-center text-white rounded-full drop-shadow-2xl border shadow-2xl shadow-black"
              >
                <FaPlay size={15} />
              </button>
            </div>
          )}

          {vehicle?.media?.photos?.length > 1 &&
            (vehicle?.media?.video
              ? vehicle?.media?.photos?.slice(1, 3)
              : vehicle?.media?.photos?.slice(1, 4)
            ) // skip hero image if no video
              .map((photo, index) => (
                <div
                  key={index}
                  onClick={() => handleChange(index + 1)}
                  className="relative group cursor-pointer"
                >
                  <Image
                    className="rounded-md object-cover w-full"
                    src={photo}
                    height={70}
                    placeholder={true}
                  />
                  <div className={styles.mask}>
                    <MdOutlineRemoveRedEye /> <span>Preview</span>
                  </div>
                </div>
              ))}

          {vehicle?.media?.photos?.length > (vehicle?.media?.video ? 3 : 4) && (
            <button
              onClick={() => handleChange(vehicle?.media?.video ? 3 : 4)}
              className="bg-text/10 border rounded-md flex items-center justify-center text-sm text-text cursor-pointer hover:bg-black/5"
            >
              +{" "}
              {vehicle?.media?.photos?.length - (vehicle?.media?.video ? 3 : 4)}{" "}
              more
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold max-sm:hidden text-xl sm:text-2xl">
          Premium Pre Purchase Caravan and Pop Top Inspection Report
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 ">
          <div>
            <p className="text-text text-sm">Make and Model</p>
            <p className="font-medium">{vehicle?.makeModel || "N/A"}</p>
          </div>
          <div>
            <p className="text-text text-sm">Model Year</p>
            <p className="font-medium">{vehicle?.modelYear || "N/A"}</p>
          </div>
          <div>
            <p className="text-text text-sm">Rego / Chassis / VIN</p>
            <p className="font-medium">{vehicle?.vin || "N/A"}</p>
          </div>
          <div>
            <p className="text-text text-sm">Body Type</p>
            <p className="font-medium">
              {vehicle?.bodyType
                ? vehicle.bodyType === "caravan"
                  ? "Caravan"
                  : vehicle.bodyType === "poptop"
                  ? "Pop Top"
                  : "Hybrid"
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="text-text text-sm">ATM (kg)</p>
            <p className="font-medium">{vehicle?.atm || "N/A"}</p>
          </div>
          <div>
            <p className="text-text text-sm">Tare (kg)</p>
            <p className="font-medium">{vehicle?.tare || "N/A"}</p>
          </div>

          <div>
            <p className="text-text text-sm">Inspection Date</p>
            <p className="font-medium">
              {vehicle?.scheduledAt
                ? moment(vehicle?.scheduledAt).format("Do MMMM, YYYY")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <Image.PreviewGroup
        preview={{
          visible: open,
          current: current,
          onChange: (value) => setCurrent(value),
          onVisibleChange: (visible) => setOpen(visible),
        }}
        items={vehicle?.media?.photos}
      />

      <VideoPlayer playbackId={videoSrc} onClose={onVideoClose} />
    </div>
  );
}

const styles = {
  mask: "group-hover:opacity-100 opacity-0 transition duration-100 bg-black/50 flex items-center justify-center rounded-xl text-sm text-white absolute top-0 left-0 w-full h-full gap-1",
};
