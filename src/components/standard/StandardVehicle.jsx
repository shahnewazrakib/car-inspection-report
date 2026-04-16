import { Image } from "antd";
import moment from "moment";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function StandardVehicle({ vehicle }) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (value) => {
    setCurrent(value);
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <div className="border rounded-xl sm:p-6 p-4 grid md:grid-cols-2 gap-5 lg:gap-10">
      <div>
        <h2 className="font-semibold text-xl sm:hidden mb-4">
          Standard Pre-purchase Car Inspection Report
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
          {vehicle?.media?.photos?.length > 1 &&
            vehicle?.media?.photos?.slice(1, 4).map((photo, index) => (
              <div
                key={index}
                onClick={() =>
                  handleChange(vehicle?.media?.video ? index : index + 1)
                }
                className="relative group cursor-pointer"
              >
                <Image
                  className="rounded-md object-cover w-full"
                  src={photo}
                  height={65}
                  placeholder={true}
                />
                <div className={styles.mask}>
                  <MdOutlineRemoveRedEye /> <span>Preview</span>
                </div>
              </div>
            ))}

          {vehicle?.media?.photos?.length > 4 && (
            <button
              onClick={() => handleChange(4)}
              className="bg-text/10 border rounded-md flex items-center justify-center text-sm text-text cursor-pointer hover:bg-black/5"
            >
              + {vehicle?.media?.photos?.length - 4} more
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold max-sm:hidden text-xl sm:text-2xl">
          Standard Pre-purchase Car Inspection Report
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
            <p className="text-text text-sm">Rego/Vin</p>
            <p className="font-medium">{vehicle?.vin || "N/A"}</p>
          </div>
          <div>
            <p className="text-text text-sm">Odometer</p>
            <p className="font-medium">
              {vehicle?.odometer
                ? `${vehicle?.odometer.toLocaleString()} km`
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="text-text text-sm">Transmission</p>
            <p className="font-medium">
              {vehicle?.transmissionType === "automatic"
                ? "Automatic"
                : vehicle?.transmissionType === "manual"
                ? "Manual"
                : vehicle?.transmissionType === "cvt"
                ? "CVT"
                : "Dual Clutch"}
            </p>
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
    </div>
  );
}

const styles = {
  mask: "group-hover:opacity-100 opacity-0 transition duration-100 bg-black/50 flex items-center justify-center rounded-xl text-sm text-white absolute top-0 left-0 w-full h-full gap-1",
};
