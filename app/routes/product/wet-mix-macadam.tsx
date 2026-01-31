import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/wet-mix-macadam")({
  component: WetMixMacadamPlant,
});

function WetMixMacadamPlant() {
  return (
    <ProductLayout
      title="Wet Mix Macadam Plant"
      description="A central mixing plant used for producing wet mix macadam. It provides controlled feeding of aggregates of different sizes in the required proportion, addition of specified quantity of water, addition of other ingredients such as cement or lime, and forced/positive mixing of all ingredients to produce a consistent homogeneous mix."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Wet-Mix-Macadam-Plant-1.png"
      seoDescription="Wet Mix Macadam (WMM) Plant with controlled aggregate feeding, specified water and cement/lime addition, and forced/positive mixing to produce a consistent homogeneous mix."
      seoKeywords="wet mix macadam plant, WMM plant, wet mix plant, central mixing plant, twin-shaft pug mill, load cell weighing, gob hopper, load-out conveyor, soil stabilization, GSB, cold bituminous mix, emulsion"
      specifications={[
        { label: "Plant Output Capacity", value: "60 – 300 TPH" },
        { label: "Minimum Paddle Tips (100 TPH)", value: "22" },
        { label: "Minimum Paddle Tips (200 TPH)", value: "44" },
        { label: "Minimum Paddle Tips (300 TPH)", value: "66" },
        { label: "Matching Genset Capacity", value: "37.5 – 150 kVA" },
        { label: "Mixer Type", value: "Twin Shaft Pug Mill" },
        { label: "Aggregate Feeding", value: "Cold aggregate feeder (one or more bins) with even, accurately metered flow" },
        { label: "Weighing System", value: "Continuous electronic weighing with load cell" },
        { label: "Water System", value: "Precise water measurement from water system" },
        { label: "Additives", value: "Addition of cement or lime (and other filler additives where provided)" },
        { label: "Discharge", value: "Gob hopper / load-out conveyor arrangement for discharge into tipper truck without segregation" },
      ]}
      features={[
        { text: "Controlled feeding of aggregates of different sizes in required proportion" },
        { text: "Addition of specified quantity of water" },
        { text: "Addition of specified quantity of other ingredients such as cement or lime" },
        { text: "Forced/positive mixing to produce a consistent homogeneous mix" },
        { text: "Continuous electronic weighing arrangement with load cell for aggregate monitoring" },
        { text: "Water and filler additives synchronized with the aggregate feed and mixed in pug mill" },
        { text: "Gob hopper arrangement allows discharge into tipper truck without segregation" },
        { text: "Can be used (with modification) for cold bituminous mix production with emulsion" },
        { text: "Can be used (with modification) for soil stabilisation by adding cement or lime" },
        { text: "Can be used for blending of material for Granular Sub-Base (GSB)" },
      ]}
    />
  );
}
