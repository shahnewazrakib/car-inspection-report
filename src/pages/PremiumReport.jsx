import { Alert, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import RatingGuide from "../components/RatingGuide";
import PremiumVehicle from "../components/premium/PremiumVehicle";
import Rating from "../components/Rating";
import InspectionResult from "../components/InspectionResult";
import PoorParts from "../components/PoorParts";
import ScrollToTop from "../components/ScrollToTop";
import TermsAndCondition from "../components/TermsAndCondition";
import PremiumHistory from "../components/premium/PremiumHistory";
import PremiumHistoryDetail from "../components/premium/PremiumHistoryDetail";
import InspectorComment from "../components/InspectorComment";
import RepairCost from "../components/RapairCost";

export default function PremiumReport() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reportId, setReportId] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [history, setHistory] = useState(null);
  const [rating, setRating] = useState(null);
  const [inspectionResult, setInspectionResult] = useState([]);
  const [poorParts, setPoorParts] = useState([]);

  const fetchReport = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API_BASE_URL
        }/report/premium/public/${slug}`
      );
      setReportId(response.data.reportId);
      setVehicle(response.data.vehicle);
      setFeedback(response.data.feedback);
      setHistory(response.data.history);
      setRating(response.data.rating);
      setInspectionResult(response.data.inspectionResult || []);
      setPoorParts(response.data.poorParts || []);
    } catch (err) {
      setError(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchReport();
    }
  }, [slug]);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  ) : error ? (
    <div className="max-w-[800px] mx-auto mt-10">
      <Alert message={error} type="error" showIcon />
    </div>
  ) : (
    <div>
      <Header reportId={reportId} />
      <main className="max-w-[1140px] px-4 mx-auto my-5 space-y-5">
        <PremiumVehicle vehicle={vehicle} />
        <PremiumHistory history={history} />
        <Rating title="Premium Package" rating={rating} packageName="Premium" />
        <InspectorComment
          title="Premium Package"
          inspectorComment={feedback.inspectorComment}
          assignedTo={feedback.assignedTo}
        />
        <RepairCost repairCost={feedback.repairCost} title="Premium Package" />
        <PoorParts poorParts={poorParts} title="Premium Package" />
        <InspectionResult
          inspectionResult={inspectionResult}
          title="Premium Package"
        />
        <PremiumHistoryDetail history={history} />
        <RatingGuide title="Premium Package" />
        <Disclaimer title="Premium Package" />
        <TermsAndCondition title="Premium Package" />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}
