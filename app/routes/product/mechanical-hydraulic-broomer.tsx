import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/mechanical-hydraulic-broomer")({
  component: MechanicalHydraulicBroomer,
});

function MechanicalHydraulicBroomer() {
  return (
    <ProductLayout
      title="Mechanical Hydraulic Broomer"
      description="Ashitech Mechanical Hydraulic Broomers are designed for efficient cleaning of road surfaces before bitumen application. These tractor-mounted broomers feature heavy-duty brush assemblies, hydraulic controls, and dust suppression systems for thorough surface preparation."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Mechanical-Hydraulic-Broomer-1.png"
      seoDescription="Ashitech Mechanical Hydraulic Broomer - Tractor mounted road cleaning equipment. Dust-free surface preparation for road construction."
      seoKeywords="mechanical broomer, hydraulic road broomer, road sweeper, tractor mounted broomer, surface cleaning equipment"
      specifications={[
        { label: "Mounting Type", value: "Tractor Mounted (3 Point)" },
        { label: "Sweeping Width", value: "2.1m – 2.5m" },
        { label: "Brush Type", value: "Nylon / Wire Bristles" },
        { label: "Brush Diameter", value: "450mm – 600mm" },
        { label: "Height Adjustment", value: "Hydraulic Controlled" },
        { label: "Angle Adjustment", value: "Left / Right Tilting" },
        { label: "Tractor Requirement", value: "45 – 75 HP" },
        { label: "Operating Speed", value: "5 – 15 km/hr" },
      ]}
      features={[
        { text: "Effective dust and debris removal from road surface" },
        { text: "Hydraulic height and angle adjustment" },
        { text: "Heavy-duty brush assembly for long life" },
        { text: "Easy attachment to standard tractors" },
        { text: "Optional water spray for dust suppression" },
        { text: "Suitable for various road widths" },
        { text: "Low maintenance and operating costs" },
        { text: "Improves bitumen adhesion to road surface" },
      ]}
    />
  );
}
