export default function TermsAndCondition({ title }) {
  return (
    <div className="border rounded-xl">
      <div className="bg-muted rounded-t-xl px-4 sm:px-6 py-4 border-b flex items-center justify-between gap-4">
        <h4 className="font-semibold text-lg">Terms & Conditions</h4>
        <p className="text-sm">{title}</p>
      </div>
      <div className="p-4 sm:p-6 space-y-4">
        <div className={styles.container}>
          <h5 className={styles.title}>1. Nature of the Service:</h5>
          <p className={styles.text}>
            Vehicle Inspection provides pre-purchase inspection services only.
            Inspections are visual, non-invasive assessments of the vehicle's
            condition at the time of inspection. Vehicle Inspection does not
            dismantle components or guarantee detection of all faults.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>2. Scope & Limitations:</h5>
          <p className={styles.text}>
            Inspections are limited in scope and cannot guarantee future
            performance, durability, or reliability of the vehicle. Vehicles may
            develop faults or breakdowns after inspection due to normal wear and
            tear, latent defects, or pre-existing conditions not visible at the
            time. Vehicle Inspection accepts no liability in such cases.
            Inspections are a snapshot in time only and should not be relied
            upon as a guarantee of condition.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>3. Inspector Oversight & Complaints:</h5>
          <p className={styles.text}>
            Inspectors perform their duties with care and diligence. However,
            inspections are subject to human judgment and not all issues can or
            will be identified. Minor or cosmetic issues (e.g., scratches, small
            fluid marks, trim wear, minor noises) are not considered material
            and do not form grounds for complaint. Vehicle Inspection is not
            responsible for any perceived omissions, oversights, or subsequent
            faults discovered after the inspection.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>
            4. No Liability for Breakdown or Repairs:
          </h5>
          <p className={styles.text}>
            Vehicle Inspection is not liable if the vehicle experiences
            breakdowns, faults, or repair needs after the inspection. Vehicle
            Inspection is not responsible for repair costs, towing, replacement
            vehicles, or any consequential losses.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>5. Customer Responsibilities:</h5>
          <p className={styles.text}>
            Customers must provide accurate information and ensure
            vehicle/seller availability. If the inspector cannot access the
            vehicle due to incorrect details or seller unavailability, the
            inspection will be marked as completed and charges will apply.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>6. Inspection Report Use:</h5>
          <p className={styles.text}>
            Reports are for informational purposes only. They are not to be
            treated as warranties, guarantees, or insurance of vehicle
            condition. Customers must make their own purchase decisions and are
            encouraged to seek independent advice.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>7. Exclusion of Liability:</h5>
          <p className={styles.text}>
            To the fullest extent permitted by law, Vehicle Inspection excludes
            all liability for any claims for refunds or compensation outside of
            its published Refund Policy, losses arising from reliance on the
            inspection report, and vehicle breakdowns, repair costs, or
            financial loss following inspection. Vehicle Inspection's liability,
            if any, is strictly limited by the Refund Policy and cannot exceed
            what is stated therein.
          </p>
        </div>

        <div className={styles.container}>
          <h5 className={styles.title}>8. Governing Law:</h5>
          <p className={styles.text}>
            These Terms are governed by the laws of the state or territory in
            which the inspection is conducted. Any disputes must be resolved in
            that jurisdiction. For a detailed understanding of our services,
            please refer to our{" "}
            <a
              target="_blank"
              className="underline text-primary"
              href="https://rideinspect.com.au/refund-policy/"
            >
              Refund Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  title: "font-medium",
  text: "text-text text-sm leading-relaxed",
  container: "space-y-1",
};
