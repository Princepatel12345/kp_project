import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/asphalt-paver-machine")({
  component: AsphaltPaverMachine,
});

function AsphaltPaverMachine() {
  return (
    <ProductLayout
      title="Asphalt Paver Machine"
      description="Kaushik Road Technologies Asphalt Paver Machines are precision-engineered equipment designed for laying asphalt on road surfaces with uniform thickness and smooth finish. Our pavers feature advanced screed technology, automatic grade and slope control, and robust construction for reliable performance in demanding road construction projects. Built to deliver consistent results and high productivity, our asphalt pavers ensure superior road quality and operational efficiency."
      image="https://images.pexels.com/photos/5924641/pexels-photo-5924641.jpeg?auto=compress&cs=tinysrgb&w=800"
      seoDescription="Kaushik Road Technologies Asphalt Paver Machine - Precision road paving equipment with automatic grade control. High productivity, uniform thickness, smooth finish. Leading manufacturer in India."
      seoKeywords="asphalt paver machine, road paver, asphalt paving equipment, road construction machinery, screed paver, automatic grade control, India manufacturer"
      specifications={[
        { label: "Paving Width", value: "2.5m – 8.0m" },
        { label: "Paving Thickness", value: "50mm – 300mm" },
        { label: "Paving Speed", value: "0 – 20 m/min" },
        { label: "Hopper Capacity", value: "8 – 15 Tons" },
        { label: "Screed Type", value: "Mechanical / Hydraulic" },
        { label: "Grade Control", value: "Automatic / Manual" },
        { label: "Engine Power", value: "75 HP – 150 HP" },
        { label: "Operating Weight", value: "8 – 18 Tons" },
      ]}
      features={[
        { text: "Precision screed technology for uniform thickness" },
        { text: "Automatic grade and slope control system" },
        { text: "High-capacity hopper for continuous paving" },
        { text: "Robust construction for durability and reliability" },
        { text: "Easy operation with user-friendly controls" },
        { text: "Excellent compaction and surface finish" },
        { text: "Versatile paving width adjustment" },
        { text: "Low maintenance with reliable components" },
      ]}
    />
  );
}
