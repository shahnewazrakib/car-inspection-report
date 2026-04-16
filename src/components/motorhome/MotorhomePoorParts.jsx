import { Image, Rate } from "antd";
import { motorhomePartsLookup, motorhomeQnAParts } from "../../lib/constant";

const PoorPartComponent = ({ part }) => {
  return (
    <div className="border rounded-lg p-4 bg-red-500/10 border-red-100">
      <div className="space-y-1">
        <p className="font-medium text-sm">{motorhomePartsLookup[part?.key]}</p>
        <div className="flex items-center gap-2">
          <Rate
            allowHalf
            style={{ fontSize: 14 }}
            value={part.rating}
            disabled
          />
          <span className="text-sm font-medium">{part.rating.toFixed(1)}</span>
        </div>
      </div>
      <p className="text-sm text-text">{part?.comment}</p>

      {part?.photos?.length > 0 && (
        <div className="flex gap-2 mt-2">
          <Image.PreviewGroup items={part?.photos}>
            {part?.photos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                placeholder={true}
                height={50}
                width={80}
                className="rounded-md object-cover"
              />
            ))}
          </Image.PreviewGroup>
        </div>
      )}
    </div>
  );
};

const PoorPartQNA = ({ part }) => {
  return (
    <div className="border rounded-lg p-4 bg-red-500/10 border-red-100">
      <p className="font-medium text-sm">{motorhomePartsLookup[part?.key]}</p>
      <p className="text-sm text-text">
        {!part.detected
          ? "No"
          : `Yes
          ${part.comment && part.comment !== "" ? `. ${part.comment}` : ""}`}
      </p>
    </div>
  );
};

export default function MotorhomePoorParts({ poorParts, title }) {
  return poorParts.length > 0 ? (
    <div className="border rounded-xl border-red-100">
      <div className="bg-red-500/10 rounded-t-xl px-4 sm:px-6 py-4 border-b border-red-100 flex max-sm:flex-col items-center justify-between sm:gap-4">
        <h4 className="font-semibold text-lg">Attention Needed</h4>
        <p className="text-sm">{title}</p>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {poorParts.map((part, index) => {
          return motorhomeQnAParts.includes(part.key) ? (
            <PoorPartQNA key={index} part={part} />
          ) : (
            <PoorPartComponent key={index} part={part} />
          );
        })}
      </div>
    </div>
  ) : null;
}
