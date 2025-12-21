import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/hot-mix")({
  component: AsphaltBatchingPlant,
});

function AsphaltBatchingPlant() {
  return (
    <ProductLayout
      title="Asphalt Batching Plant"
      description="Ashitech is one of the leading asphalt batching plant manufacturers in India. Our batch mix plants are designed to deliver superior quality asphalt mixes with high efficiency, reliability, and low maintenance. The plants reduce thermal loss, improve fuel efficiency, and ensure consistent output quality. Each plant is engineered using cutting-edge technology to meet global industry standards."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Asphalt-Batching-Plant-1.png"
      seoDescription="Ashitech Asphalt Batching Plant - 80 to 200 TPH capacity. Leading manufacturer in India. High efficiency, low maintenance, ISO certified quality."
      seoKeywords="asphalt batching plant, hot mix plant, batch mix plant, asphalt plant manufacturer India, 80 TPH, 200 TPH"
      specifications={[
        { label: "Plant Capacity", value: "80 – 200 TPH" },
        { label: "Batch Size", value: "1000 – 2500 Kg" },
        { label: "Dryer Type", value: "4 Way Friction Drive" },
        { label: "Burner Type", value: "Fully Automatic Modulating" },
        { label: "Fuel Options", value: "Diesel / LDO / Furnace Oil" },
        { label: "Control Panel", value: "PLC / SCADA Based" },
        { label: "Bag Filter Type", value: "Reverse Airflow" },
        { label: "Aggregate Bins", value: "4 Bin / 5 Bin Configuration" },
      ]}
      features={[
        { text: "High production capacity with consistent mix quality" },
        { text: "Energy-efficient burner with modulating flame control" },
        { text: "Advanced dust collection system for eco-friendly operation" },
        { text: "PLC-based automation for precise batching accuracy" },
        { text: "Heavy-duty construction for durability and longevity" },
        { text: "Easy maintenance access and quick spare parts availability" },
        { text: "Optional RAP (Recycled Asphalt Pavement) system" },
        { text: "Temperature monitoring and automatic cut-off safety" },
      ]}
    />
  );
}
