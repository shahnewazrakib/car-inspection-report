export default function BasicRatingGuide() {
  const guide = [
    {
      label: "Good",
      description:
        "The item is functional with some signs of damage or wear and tear, appropriate for the vehicle's age.",
      color: "bg-lime-100 border-lime-300",
    },
    {
      label: "Fair",
      description:
        "The item is operational but shows noticeable damage or wear and tear, consistent with the age of the vehicle.",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      label: "Poor",
      description:
        "The item is not functioning properly or displays significant damage or wear and tear.",
      color: "bg-orange-100 border-orange-300",
    },
  ];

  return (
    <div className="rounded-xl border" id="rating-guide">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex items-center justify-between gap-4">
        <h4 className="font-semibold text-lg">Rating Guide</h4>
        <p className="text-sm">Basic Package</p>
      </div>
      <div className="p-4 sm:p-6 space-y-4">
        {guide.map((item, index) => (
          <div key={index}>
            <p className="text-sm">
              <span className="font-medium">{item.label}</span>
            </p>
            <p className="text-sm text-text">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
