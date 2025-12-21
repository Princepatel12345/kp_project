import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/drum-mix")({
  component: DrumMixPlant,
});

function DrumMixPlant() {
  return (
    <ProductLayout
      title="Drum Mix Plant"
      description="Ashitech Drum Mix Plants are designed for continuous production of high-quality asphalt mix. These plants are ideal for large-scale road construction projects where uninterrupted production is essential. With advanced mixing technology and robust construction, our drum mix plants ensure optimal mixing, fuel efficiency, and reduced emissions."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Drum-Mix-Plant-1.png"
      seoDescription="Ashitech Drum Mix Plant - 40 to 120 TPH capacity. Continuous asphalt production for large projects. Energy efficient, ISO certified manufacturer."
      seoKeywords="drum mix plant, continuous mix plant, asphalt drum mixer, road construction equipment, 40 TPH, 120 TPH"
      specifications={[
        { label: "Plant Capacity", value: "40 – 120 TPH" },
        { label: "Drum Size", value: "1.5m x 6m to 2.2m x 9m" },
        { label: "Mixing Type", value: "Continuous Drum Mixing" },
        { label: "Burner Type", value: "High Efficiency Modulating" },
        { label: "Fuel Options", value: "Diesel / LDO / Furnace Oil / Gas" },
        { label: "Control System", value: "Computerized / PLC Based" },
        { label: "Pollution Control", value: "Wet Scrubber / Bag Filter" },
        { label: "Material Handling", value: "Belt Conveyor System" },
      ]}
      features={[
        { text: "Continuous production for uninterrupted workflow" },
        { text: "Counter-flow drum design for better heat transfer" },
        { text: "Low fuel consumption with high thermal efficiency" },
        { text: "Robust steel construction for long service life" },
        { text: "Advanced pollution control system" },
        { text: "Computerized controls for ease of operation" },
        { text: "Quick installation and commissioning" },
        { text: "Low maintenance with readily available spares" },
      ]}
    />
  );
}
