import { useState, useEffect } from "react";
import { overViewGraphData } from "../../controllers/overview/overviewController";

export const useGetGraphData = (companyName: string, month: number, year: number) => {
  const [graphData, setGraphData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getGraphData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await overViewGraphData(companyName, month, year);
      setGraphData(res.data);
    } catch (err) {
      console.error("Error fetching graph data:", err);
      setError("Failed to load graph data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGraphData();
  }, [companyName, month, year]);
  return { graphData, loading, error, refetch: getGraphData };
};
