import { Image } from "antd";
import moment from "moment";

export default function BasicVehicle({ vehicle }) {
  return (
    <div className="border rounded-xl sm:p-6 p-4 grid md:grid-cols-2 gap-5 lg:gap-10">
      <div>
        <h2 className="font-semibold text-xl sm:hidden mb-4">
          Basic Pre-purchase Car Inspection Report
        </h2>

        <div className="hero-image">
          {vehicle?.coverImage ? (
            <Image
              className="rounded-xl object-cover !h-[200px] sm:!h-[300px] w-full"
              src={vehicle.coverImage}
              placeholder={true}
            />
          ) : (
            <img
              src="/placeholder-car.jpg"
              className="rounded-xl object-cover h-[200px] sm:h-[300px] w-full"
            />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold max-sm:hidden text-xl sm:text-2xl">
          Basic Pre-purchase Car Inspection Report
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
            <p className="text-text text-sm">Inspection Date</p>
            <p className="font-medium">
              {vehicle?.scheduledAt
                ? moment(vehicle?.scheduledAt).format("Do MMMM, YYYY")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
