import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/pollution-control-unit")({
  component: PollutionControlUnit,
});

function PollutionControlUnit() {
  return (
    <ProductLayout
      title="Pollution Control Unit"
      description="Kaushik Road Technologies Pollution Control Units are essential environmental protection systems designed to minimize emissions and dust from asphalt plants. Our advanced pollution control systems feature efficient bag filter technology, wet scrubber systems, and comprehensive dust collection mechanisms. These units ensure compliance with environmental regulations while maintaining optimal plant performance. Engineered for high efficiency and low maintenance, our pollution control units protect both the environment and plant operators."
      image="https://images.pexels.com/photos/33531833/pexels-photo-33531833.jpeg?auto=compress&cs=tinysrgb&w=800"
      seoDescription="Kaushik Road Technologies Pollution Control Unit - Advanced dust collection and emission control systems for asphalt plants. Bag filter, wet scrubber technology. Environmental compliance, ISO certified."
      seoKeywords="pollution control unit, dust collection system, bag filter, wet scrubber, emission control, environmental compliance, asphalt plant pollution control"
      specifications={[
        { label: "System Type", value: "Bag Filter / Wet Scrubber" },
        { label: "Air Flow Capacity", value: "15,000 – 50,000 CFM" },
        { label: "Filtration Efficiency", value: "99.9% +" },
        { label: "Dust Collection", value: "Reverse Airflow / Pulse Jet" },
        { label: "Filter Bags", value: "High Temperature Resistant" },
        { label: "Fan Power", value: "30 HP – 100 HP" },
        { label: "Pressure Drop", value: "150 – 200 mm WC" },
        { label: "Emission Level", value: "< 50 mg/Nm³" },
      ]}
      features={[
        { text: "High-efficiency dust collection system" },
        { text: "99.9%+ filtration efficiency" },
        { text: "Reverse airflow cleaning mechanism" },
        { text: "High-temperature resistant filter bags" },
        { text: "Automatic pressure monitoring system" },
        { text: "Compliance with environmental standards" },
        { text: "Low maintenance and operational cost" },
        { text: "Easy installation and integration" },
      ]}
    />
  );
}
