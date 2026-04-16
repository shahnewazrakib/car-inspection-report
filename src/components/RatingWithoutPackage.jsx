import { Rate } from "antd";
import { IoMdInformationCircleOutline } from "react-icons/io";
import RatingCard from "./RatingCard";

export default function RatingWithoutPackage({ rating, title }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border">
        <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
          <h4 className="font-semibold text-lg">
           Inspection Summary
          </h4>
          <p className="text-sm">{title}</p>
        </div>

        <div className="p-4 sm:p-6 space-y-10">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-center">
              Overall Rating
            </h4>
            <h4 className="text-center text-3xl font-semibold">
              {rating?.overallRating?.toFixed(1)}/5.0
            </h4>
            <div className="flex justify-center">
              <Rate
                allowHalf
                style={{ fontSize: 25 }}
                value={parseFloat(rating?.overallRating)}
                disabled
              />
            </div>
            <a
              href="#rating-guide"
              className="flex items-center justify-center gap-1 text-text text-sm underline-offset-2 hover:underline"
            >
              <IoMdInformationCircleOutline size={16} />{" "}
              <span>Rating Guide</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {rating?.components?.map((component) => {
              return (
                <RatingCard
                  key={component?.key}
                  name={component?.title}
                  rating={component?.avgRating}
                  id={component?.key}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
