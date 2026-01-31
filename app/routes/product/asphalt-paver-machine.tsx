import { createFileRoute } from "@tanstack/react-router";
import { ProductLayout } from "../../components/ProductLayout";

export const Route = createFileRoute("/product/asphalt-paver-machine")({
  component: AsphaltPaverMachine,
});

function AsphaltPaverMachine() {
  return (
    <ProductLayout
      title="Asphalt Paver Machine"
      description="Kaushik Road Technologies Asphalt Paver Machines (Mechanical Road Paver Finisher) are built for accurate, consistent paving on city streets, parking lots, rural roads, and highways. With a hydraulically extendable screed, they deliver uniform thickness and smooth finish across common asphalt layers (BM, DBM, BC, AC) and are also suitable for Wet Mix Macadam (WMM). Designed for productivity and ease of operation, the machine combines robust rear-wheel drive components, efficient screed heating, and operator-friendly controls for reliable performance on demanding sites."
      image="https://images.pexels.com/photos/5924641/pexels-photo-5924641.jpeg?auto=compress&cs=tinysrgb&w=800"
      seoDescription="Kaushik Road Technologies Asphalt Paver Machine (Mechanical Road Paver Finisher) with hydraulically extendable screed. Uniform paving, smooth finish, and reliable 150–200 T/hr output for highways and urban roads."
      seoKeywords="asphalt paver machine, mechanical road paver finisher, road paver, asphalt paving equipment, screed paver, hydraulic screed, wet mix macadam paver, road construction machinery, India manufacturer"
      specifications={[
        { label: "Typical Applications", value: "NH/SH, city streets, rural roads, parking lots" },
        { label: "Paving Width", value: "2.5m – 4.5m (hydraulically extendable screed)" },
        { label: "Paving Thickness", value: "10mm – 200mm" },
        { label: "Paving Speed", value: "1.25 – 25 m/min" },
        { label: "Travel Speed", value: "0 – 16 km/h" },
        { label: "Hopper Capacity", value: "4 – 5 m³" },
        { label: "Engine", value: "~100 HP (74 kW) @ 2200 rpm (Ashok Leyland/Kirloskar)" },
        { label: "Operating Weight", value: "Approx. 10 – 10.5 tonnes" },
        { label: "Screed Heating", value: "2 nos. oil burners / LPG burners" },
        { label: "Production Capacity", value: "150 – 200 T/hr" },
        { label: "Fuel Tank", value: "~120 liters" },
        { label: "Hydraulic Tank", value: "~80 – 90 liters" },
        { label: "Steering", value: "Power steering" },
        { label: "Warranty", value: "1 year (typical)" },
      ]}
      features={[
        { text: "Versatile paving for asphalt layers (BM, DBM, BC, AC) and WMM" },
        { text: "Engineered for uniformity, smoothness, and excellent pavement quality" },
        { text: "Hydraulically extendable screed for flexible paving widths" },
        { text: "Hydraulic cylinders with electric control panel for easy operation" },
        { text: "Heavy-duty chain and sprocket rear-wheel drive for rugged sites" },
        { text: "Alloy steel gears for long service life" },
        { text: "Maintenance-free sealed auger bearings to reduce daily greasing" },
        { text: "Operator-friendly controls with levers within easy reach" },
      ]}
    />
  );
}
