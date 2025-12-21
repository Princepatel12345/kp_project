import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/wet-mix-macadam")({
  component: WetMixMacadamPlant,
});

function WetMixMacadamPlant() {
  return (
    <ProductLayout
      title="Wet Mix Macadam Plant"
      description="Ashitech Wet Mix Macadam (WMM) Plants are specifically designed for producing high-quality water-bound macadam for road base and sub-base construction. These plants feature precise aggregate proportioning, efficient water mixing, and consistent output quality essential for durable road foundations."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Wet-Mix-Macadam-Plant-1.png"
      seoDescription="Ashitech Wet Mix Macadam Plant - 120 to 200 TPH capacity. For road base construction. Precise mixing, high output, ISO certified quality."
      seoKeywords="wet mix macadam plant, WMM plant, road base construction, aggregate mixing plant, 120 TPH, 200 TPH"
      specifications={[
        { label: "Plant Capacity", value: "120 – 200 TPH" },
        { label: "Aggregate Bins", value: "4 Bin Configuration" },
        { label: "Mixer Type", value: "Twin Shaft Pugmill Mixer" },
        { label: "Weighing System", value: "Electronic Load Cell Based" },
        { label: "Water System", value: "Automatic Proportioning" },
        { label: "Control Panel", value: "PLC Based Automation" },
        { label: "Conveyor System", value: "Heavy Duty Belt Conveyor" },
        { label: "Power Requirement", value: "125 – 200 HP" },
      ]}
      features={[
        { text: "Accurate aggregate proportioning with load cells" },
        { text: "Twin shaft pugmill for homogeneous mixing" },
        { text: "Automatic water dosing system" },
        { text: "Modular design for easy transportation" },
        { text: "Low power consumption with efficient operation" },
        { text: "PLC-based control for precise operation" },
        { text: "Minimal maintenance requirements" },
        { text: "Suitable for road base and sub-base work" },
      ]}
    />
  );
}
