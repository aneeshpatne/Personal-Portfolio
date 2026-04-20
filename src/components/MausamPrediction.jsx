import MausamPredictionClient from "./MausamPredictionClient";

function normalizePredictionData(rawData) {
  if (!rawData || typeof rawData !== "object") {
    return {
      alertColor: "yellow",
      alertMessage: "Prediction data is unavailable right now.",
      indexName: "Prediction Index",
      indexValue: 50,
    };
  }

  const parsedIndexValue = Number(
    rawData.index_value ?? rawData.indexValue ?? rawData.score ?? rawData.value ?? 50,
  );

  return {
    alertColor:
      rawData.alert_color ??
      rawData.alertColor ??
      rawData.severity ??
      "yellow",
    alertMessage:
      rawData.alert_message ??
      rawData.alertMessage ??
      rawData.message ??
      rawData.prediction ??
      "Prediction data is unavailable right now.",
    indexName:
      rawData.index_name ??
      rawData.indexName ??
      rawData.metric_name ??
      rawData.metricName ??
      "Prediction Index",
    indexValue: Number.isFinite(parsedIndexValue)
      ? Math.max(0, Math.min(100, parsedIndexValue))
      : 50,
  };
}

export async function MausamPrediction() {
  const apiKey = process.env.ANEESH_API_KEY;
  let predictionData = {
    alertColor: "yellow",
    alertMessage: "Prediction data is unavailable right now.",
    indexName: "Prediction Index",
    indexValue: 50,
  };

  try {
    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/weather-prediction",
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      const rawData = await response.json();
      predictionData = normalizePredictionData(rawData);
    }
  } catch (error) {
    console.error("Failed to fetch Mausam prediction:", error);
  }

  return <MausamPredictionClient {...predictionData} />;
}
