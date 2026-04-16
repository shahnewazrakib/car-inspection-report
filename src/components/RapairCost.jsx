export default function RepairCost({ repairCost, title }) {
  return (
    <div className="rounded-xl border">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex max-sm:flex-col items-center justify-between sm:gap-4">
        <h4 className="font-semibold text-lg">
          Repair Cost
        </h4>
        <p className="text-sm">{title}</p>
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-center text-sm">Estimated Repair Cost: {repairCost ? `$${repairCost.toLocaleString()} AUD` : "N/A"}</p>
      </div>
    </div>
  );
}
