import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/bitumen-pressure-distributor")({
  component: BitumenPressureDistributor,
});

function BitumenPressureDistributor() {
  return (
    <ProductLayout
      title="MINI BITUMEN SPRAYER"
      description="Kaushik Road Technologies MINI BITUMEN SPRAYER is a tractor attachment designed for manual hand spraying with consistent flow and dependable heating. Available in KRT 2.5 & 4 Ton (KRT-2500 / KRT-4000) capacities, it features an insulated U-shape tank, gear pump, diesel engine with air compressor, and heating options (wood fire or burner) to maintain workable bitumen viscosity during application."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Bitumen-Pressure-Distributor-1.png"
      seoDescription="Kaushik Road Technologies MINI BITUMEN SPRAYER - KRT 2.5 & 4 Ton (KRT-2500 / KRT-4000). Tractor attachment with manual hand spraying and wood fire/burner heating."
      seoKeywords="mini bitumen sprayer, tractor mounted bitumen sprayer, bitumen hand sprayer, KRT 2500, KRT 4000"
      specifications={[
        { label: "Model", value: "KRT-2500 / KRT-4000" },
        { label: "Shape", value: "U Shape" },
        { label: "Tank Capacity", value: "2.5 & 4 Ton (2500 / 4000 Ltr)" },
        { label: "Insulation", value: "40 mm Glass Wool" },
        { label: "Hose Pipe", value: "S.S. Corrugated Flexible, 3 m" },
        { label: "Bitumen Pump", value: '1.5" x 1.5" Gear Pump' },
        { label: "Engine", value: "6 HP Kirloskar Air Cooled Diesel Engine" },
        { label: "Air Compressor", value: "STD Make Dual Piston Type" },
        { label: "Burner Fuel Tank", value: "25 Ltr" },
        { label: "Fuel Consumption", value: "6–8 Ltr/Hour" },
        { label: "Axle & Wheels", value: "M.S. Heavy Axle with Wheel Plate" },
        { label: "Tyres", value: "4 Nos. (Size: 9.00-20)" },
      ]}
      features={[
        { text: "An attachment only for tractor" },
        { text: "Both heating system options: wood fire and burner system" },
        { text: "M.S. heavy duty steel structure and chassis" },
        { text: "Easy operating system and safety" },
        { text: "Manual hand spraying system" },
      ]}
    />
  );
}
