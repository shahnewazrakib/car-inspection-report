import { Alert, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import ScrollToTop from "../components/ScrollToTop";
import BasicVehicle from "../components/basic/BasicVehicle";
import BasicRatingGuide from "../components/basic/BasicRatingGuide";
import TermsAndCondition from "../components/TermsAndCondition";
import BasicInspectionResult from "../components/basic/BasicInspectionResult";
import BasicInspectorComment from "../components/InspectorComment";

export default function BasicReport() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [report, setReport] = useState(null);
  const [reportId, setReportId] = useState(null);

  const fetchReport = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API_BASE_URL
        }/report/basic/public/${slug}`
      );
      setReport(response.data.report);
      setVehicle(response.data.vehicle);
      setReportId(response.data.reportId);
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
        <BasicVehicle vehicle={vehicle} />
        <BasicInspectionResult report={report} />
        <BasicInspectorComment
          inspectorComment={report?.inspectorComment}
          assignedTo={vehicle?.assignedTo}
          title="Basic Package"
        />
        <BasicRatingGuide />
        <Disclaimer title="Basic Package" />
        <TermsAndCondition title="Basic Package" />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}
