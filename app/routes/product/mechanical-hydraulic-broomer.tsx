import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/mechanical-hydraulic-broomer")({
  component: MechanicalHydraulicBroomer,
});

function MechanicalHydraulicBroomer() {
  return (
    <ProductLayout
      title="Mechanical Hydraulic Broomer"
      description="Mechanical Hydraulic Broomer can be conveniently operated by towing with a tractor. It provides 2.4 meter clear sweeping with screw-based pressure adjustment and brush adjustment up to 150 mm. The unit includes left-hand-side dust collection, nylon bristle brush (diameter 460 mm) set at 45° angle, and two heavy-duty wheels (6 x 12 nylon, 8 ply). Suitable for metalling, wet mix macadam surface, and asphalted road surface with sweeping speed of 7–15 km/hr."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Mechanical-Hydraulic-Broomer-1.png"
      seoDescription="Mechanical Hydraulic Broomer - tractor-towed road sweeping equipment with 2.4m clear sweeping width and left-side dust collection."
      seoKeywords="mechanical hydraulic broomer, tractor broom, road sweeper, road broom, surface cleaning equipment, 2.4m sweeping width"
      specifications={[
        { label: "Mode of Operation", value: "Towing with a tractor" },
        { label: "Sweeping Width", value: "2400 mm" },
        { label: "Brush Pressure Adjustment", value: "Screw adjustment" },
        { label: "Brush Adjustment", value: "Up to 150 mm" },
        { label: "Dust Collection", value: "Left hand side" },
        { label: "Wheels", value: "Two heavy duty wheels (6 x 12 nylon, 8 ply)" },
        { label: "Brush Material", value: "Nylon bristles" },
        { label: "Suitable For", value: "Metalling, wet mix macadam, asphalted road surface" },
        { label: "Angle of Brush", value: "45°" },
        { label: "Diameter of Brush", value: "460 mm" },
        { label: "Total Length", value: "3600 mm" },
        { label: "Width", value: "2800 mm" },
        { label: "Total Width of Brush", value: "2700 mm" },
        { label: "Sweeping Speed", value: "7 – 15 km/hr" },
      ]}
      features={[
        { text: "Convenient tractor towing operation" },
        { text: "2.4 meter clear sweeping width" },
        { text: "Screw-based pressure adjustment to the brush" },
        { text: "Brush adjustment up to 150 mm" },
        { text: "Left-hand-side dust collection" },
        { text: "Nylon bristle brush with 45° angle and 460 mm diameter" },
        { text: "Heavy-duty wheels (6 x 12 nylon, 8 ply)" },
        { text: "Suitable for metalling, WMM, and asphalted road surfaces" },
      ]}
    />
  );
}
