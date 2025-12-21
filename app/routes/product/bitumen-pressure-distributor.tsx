import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/bitumen-pressure-distributor")({
  component: BitumenPressureDistributor,
});

function BitumenPressureDistributor() {
  return (
    <ProductLayout
      title="Bitumen Pressure Distributor"
      description="Ashitech Bitumen Pressure Distributors are designed for uniform application of bitumen on road surfaces. Available in various tank capacities, these distributors ensure precise spray rate control, even coverage, and efficient heating system for optimal bitumen viscosity during application."
      image="https://www.ashitech.com/wp-content/uploads/2021/07/Bitumen-Pressure-Distributor-1.png"
      seoDescription="Ashitech Bitumen Pressure Distributor - 4000 to 10000 Ltr capacity. Uniform bitumen spraying for road construction. ISO certified manufacturer."
      seoKeywords="bitumen pressure distributor, bitumen sprayer, road surfacing equipment, bitumen tanker, 4000 Ltr, 10000 Ltr"
      specifications={[
        { label: "Tank Capacity", value: "4000 – 10000 Litres" },
        { label: "Spray Width", value: "2m – 4m Adjustable" },
        { label: "Spray Rate", value: "0.4 – 2.0 Kg/sqm" },
        { label: "Heating System", value: "Oil Jacketed / Direct" },
        { label: "Burner Type", value: "Diesel Fired" },
        { label: "Pump Type", value: "Gear Pump / Screw Pump" },
        { label: "Spray Bar", value: "Full Circulating Type" },
        { label: "Mounting", value: "Truck Mounted" },
      ]}
      features={[
        { text: "Uniform spray distribution across road width" },
        { text: "Adjustable spray bar for varying widths" },
        { text: "Efficient heating system maintains bitumen temperature" },
        { text: "Precise spray rate control through pump speed" },
        { text: "Insulated tank to minimize heat loss" },
        { text: "Easy operation from driver cabin" },
        { text: "Suitable for various bitumen grades" },
        { text: "Durable construction for long service life" },
      ]}
    />
  );
}
