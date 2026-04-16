import { Image, Rate } from "antd";
import { FaPlay, FaStar } from "react-icons/fa6";
import { useState } from "react";
import VideoPlayer from "../premium/VideoPlayer";
import {
  motorhomePartsLookup,
  motorhomePresetParts,
  motorhomeYesNoParts,
} from "../../lib/constant";

const MediaComponent = ({ media }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  const onVideoClose = () => {
    setVideoSrc(null);
  };

  return media?.photos.length === 0 && !media?.video ? null : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4 border-b">
      {media?.video && (
        <div
          className="bg-no-repeat bg-center w-full h-[100px] sm:h-[120px] md:h-[130px] rounded-lg object-contain flex items-center justify-center bg-black"
          style={{
            backgroundImage: `url(https://image.mux.com/${media?.video}/thumbnail.png?width=400&height=130&time=1)`,
          }}
        >
          <button
            onClick={() => setVideoSrc(media?.video)}
            className="bg-white/20 hover:bg-primary transition-all duration-200 cursor-pointer size-12 flex items-center justify-center text-white rounded-full drop-shadow-2xl border shadow-2xl shadow-black"
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

const PresetCommentComponent = ({ k, value }) => {
  return (
    <>
      <div>{motorhomePartsLookup[k]}</div>

      {!value?.available ? (
        <>
          <div className="max-md:hidden"> - </div>
          <div className="md:col-span-2">N/A</div>
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <Rate
              allowHalf
              style={{ fontSize: 16 }}
              defaultValue={value?.rating}
              disabled
            />
            <p className="font-medium">{value?.rating?.toFixed(1)}</p>
          </div>

          <div className="md:col-span-2 space-y-2">
            <p>
              {value?.rating >= 3
                ? "Good condition. No significant damage. Well maintained."
                : "Wear/damage/deterioration detected. May require attention."}
            </p>
            {value?.photos?.length > 0 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-2">
                <Image.PreviewGroup items={value?.photos}>
                  {value.photos.map((photo, index) => (
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
        </>
      )}
    </>
  );
};

const Component = ({ k, value }) => {
  return (
    <>
      <div>{motorhomePartsLookup[k]}</div>

      {!value?.available ? (
        <>
          <div className="max-md:hidden"> - </div>
          <div className="md:col-span-2">N/A</div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Rate
              allowHalf
              style={{ fontSize: 16 }}
              defaultValue={value?.rating}
              disabled
            />
            <p className="font-medium">{value?.rating?.toFixed(1)}</p>
          </div>

          <div className="md:col-span-2 space-y-2">
            <p>{value.comment}</p>
            {value?.photos?.length > 0 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-2">
                <Image.PreviewGroup items={value?.photos}>
                  {value.photos.map((photo, index) => (
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
        </>
      )}
    </>
  );
};

const YesNoComponent = ({ k, value }) => {
  return (
    <>
      <div>{motorhomePartsLookup[k]}</div>

      {!value?.available ? (
        <>
          <div className="">N/A</div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            {value.status === "no" ? (
              <p className="text-red-500">No</p>
            ) : (
              <p>Yes{value.comment !== "" ? `. ${value.comment}` : ""}</p>
            )}

            {value?.photos?.length > 0 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-2">
                <Image.PreviewGroup items={value?.photos}>
                  {value.photos.map((photo, index) => (
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
        </>
      )}
    </>
  );
};

const QNAComponent = ({ k, value }) => {
  return (
    <>
      <div>{motorhomePartsLookup[k]}</div>

      {!value?.available ? (
        <div>N/A</div>
      ) : (
        <div>
          {!value.detected ? (
            <p>No</p>
          ) : (
            <p className="text-red-500">
              Yes
              {value.comment && value.comment !== ""
                ? `. ${value.comment}`
                : ""}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default function MotorhomeInspectionResult({ inspectionResult }) {
  return (
    <div>
      <div className="rounded-xl border">
        <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
          <h4 className="font-semibold text-lg">Detailed Inspection Results</h4>
          <p className="text-sm">Motorhome / RV</p>
        </div>

        <div className="px-3 py-3 sm:p-6 space-y-5">
          {inspectionResult
            .filter(
              (component) =>
                component.key !== "documentation" && component.key !== "qna"
            )
            .map((component) => {
              const tableEntries = Object.entries(component.data).filter(
                ([key, value]) => key !== "media"
              );
              return (
                <div id={component.key} key={component.key}>
                  <div className="rounded-xl border">
                    <div className="bg-muted rounded-t-xl py-3 px-4 border-b flex items-center justify-between gap-2">
                      <h4 className="font-semibold sm:text-lg">
                        {component.title}
                      </h4>
                      {component?.avgRating && (
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">
                            Avg Rating {component.avgRating}
                          </p>
                          <FaStar size={14} className="text-[#374151]" />
                        </div>
                      )}
                    </div>

                    {/* Display media if it exists */}
                    {component?.data?.media && (
                      <MediaComponent media={component.data.media} />
                    )}

                    {/* Display table header and other rows */}
                    {tableEntries.length > 0 && (
                      <div>
                        <div className={`${styles.row} max-md:hidden`}>
                          <div className="font-semibold">Parts</div>
                          <div className="font-semibold">Rating (out of 5)</div>
                          <div className="col-span-2 font-semibold">
                            Comment/Photo
                          </div>
                        </div>

                        {/* Render other table rows here */}
                        {tableEntries.map(([key, value]) => (
                          <div key={key} className={styles.row}>
                            {motorhomePresetParts.includes(key) ? (
                              <PresetCommentComponent k={key} value={value} />
                            ) : motorhomeYesNoParts.includes(key) ? (
                              <YesNoComponent k={key} value={value} />
                            ) : (
                              <Component k={key} value={value} />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          {inspectionResult
            .filter((component) => component.key === "documentation")
            .map((component) => {
              const tableEntries = Object.entries(component.data).filter(
                ([key, value]) => key !== "media"
              );
              return (
                <div id={component.key} key={component.key}>
                  <div className="rounded-xl border">
                    <div className="bg-muted rounded-t-xl py-3 px-4 border-b flex items-center justify-between gap-2">
                      <h4 className="font-semibold sm:text-lg">
                        {component.title}
                      </h4>
                    </div>

                    {/* Display media if it exists */}
                    {component?.data?.media && (
                      <MediaComponent media={component.data.media} />
                    )}

                    {/* Display table header and other rows */}
                    {tableEntries.length > 0 && (
                      <div>

                        {/* Render other table rows here */}
                        {tableEntries.map(([key, value]) => (
                          <div key={key} className={styles.gridRow}>
                            <YesNoComponent k={key} value={value} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          {inspectionResult
            .filter((component) => component.key === "qna")
            .map((component) => {
              const tableEntries = Object.entries(component.data);
              return (
                <div id={component.key} key={component.key}>
                  <div className="rounded-xl border">
                    <div className="bg-muted rounded-t-xl py-3 px-4 border-b">
                      <h4 className="font-semibold sm:text-lg">
                        {component.title}
                      </h4>
                    </div>
                    {/* Display table header and other rows */}
                    {tableEntries.length > 0 && (
                      <div>
                        {/* Render other table rows here */}
                        {tableEntries.map(([key, value]) => (
                          <div key={key} className={styles.gridRow}>
                            <QNAComponent k={key} value={value} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  row: "gap-x-5 gap-y-2 grid md:grid-cols-4 p-4 text-sm border-b last-of-type:border-b-0",
  gridRow:
    "gap-x-5 gap-y-2 grid md:grid-cols-2 p-4 text-sm border-b last-of-type:border-b-0",
};
