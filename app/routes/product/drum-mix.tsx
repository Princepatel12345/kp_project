import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";

export const Route = createFileRoute("/product/drum-mix")({
  component: DrumMixPlant,
});

type TableData = {
  columns: string[];
  rows: Array<{
    label: string;
    values: string[];
  }>;
};

function PdfImagePlaceholder({
  label,
  aspectClassName,
  className,
}: {
  label: string;
  aspectClassName: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ""}`}
    >
      <div className={`${aspectClassName} relative`}>
        <img
          src={`https://placehold.co/1200x900/png?text=${encodeURIComponent(label)}`}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3">
          <div className="inline-flex rounded bg-black/45 px-2 py-1 text-xs font-medium tracking-wide text-white">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrochureHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="font-display text-2xl md:text-3xl text-gray-900 tracking-wide">
        {children}
      </div>
      <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mt-4" />
    </>
  );
}

function BrochureTable({ data }: { data: TableData }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-gray-900 font-medium w-[34%]">
              {data.columns[0]}
            </th>
            {data.columns.slice(1).map((col) => (
              <th key={col} className="px-4 py-3 text-gray-900 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-t border-gray-200 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-4 py-3 text-gray-700 font-medium">{row.label}</td>
              {row.values.map((value, idx) => (
                <td key={`${row.label}-${idx}`} className="px-4 py-3 text-gray-900">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DrumMixPlant() {
  const mainImage = "https://www.ashitech.com/wp-content/uploads/2021/07/Drum-Mix-Plant-1.png";
  const mainDescription =
    "Kaushik Road Technologies Drum Mix Plants are designed for continuous production of high-quality asphalt mix. These plants are ideal for large-scale road construction projects where uninterrupted production is essential. With advanced mixing technology and robust construction, our drum mix plants ensure optimal mixing, fuel efficiency, and reduced emissions.";

  const dryerDrumTable: TableData = {
    columns: ["Model", "DM-45 Plant", "DM-50 Plant", "DM-60 Plant"],
    rows: [
      { label: "Dryer Diameter", values: ["1.220 Mtr.", "1.520 Mtr.", "1.830 Mtr."] },
      { label: "Dryer Length", values: ["6.100 Mtr.", "6.710 Mtr.", "7.316 Mtr."] },
      { label: "Dryer Capacity", values: ["40-60 PTH", "60-90 TPH", "90-120 TPH"] },
      { label: "Dryer Drive Motor", values: ["20 HP x 1440 x AC", "25 HP x 1440 x AC", "40 HP x 1440 x AC"] },
      { label: "Dryer Main Worm Gear", values: ['7" x 20 : 1 x Worm Gear', '8" x 20 : 1 x Worm Gear', '9" x 20 : 1 x Worm Gear'] },
      { label: "Exhauster Drive Motor", values: ["20 HP x 1440 x AC", "25 HP x 1440 x AC", "40 HP x 1440 x AC"] },
      { label: "Exhauster Capacity", values: ["10500 CFM", "16500 CFM", "18500 CFM"] },
      { label: "Cyclon Screw Conveyor Motor", values: ["2 HP x 1440 x AC Motor", "2 HP x 1440 x AC Motor", "3 HP x 1440 x AC Motor"] },
      { label: "Cyclon Screw Conveyor Gear", values: ['3" x 40 : 1 x Worm Gear', '3" x 40 : 1 x Worm Gear', '3" x 40 : 1 x Worm Gear'] },
      { label: "Dryer Burner Blower HP", values: ["5 HP x 1440 x AC", "10 HP x 1440 x AC", "15 HP x 1440 x AC"] },
      { label: "Fuel Pump Motor", values: ["2 HP x 1440 x AC", "2 HP x 1440 x AC", "3 HP x 1440 x AC"] },
    ],
  };

  const loadoutTable: TableData = {
    columns: ["Model", "DM-45 & 50 Plant", "DM-60 Plant"],
    rows: [
      { label: "Load Out Conveyor Belt", values: ["550 x 18 Mtr x SHR", "600 x 18 Mtr x SHR"] },
      { label: "Conveyor Drive Motor", values: ["5 HP x A/c Drive", "7.5 PH x A/c Drive"] },
      { label: "Load Out Conveyor Gear", values: ["20:1 x D Type SMSR", "20:1 x D Type SMSR"] },
      { label: "Gob Hopper Capacity", values: ["1000 Kg.. ( 1 Ton )", "1500 Kg.. ( 1.5 Ton )"] },
      { label: "Hydraulic Power Pack", values: ["2 HP x 1440 x AC", "2 HP x 1440 x AC"] },
    ],
  };

  const fourBinFeederTable: TableData = {
    columns: ["Model", "DM-45 Plant", "DM-50 Plant", "DM-60 Plant"],
    rows: [
      { label: "No. of bins", values: ["4 Bin", "4 Bin", "4 Bin"] },
      { label: "Storage Capacity", values: ["8 Ton Per Hopper", "11 Ton Per Hopper", "14 Ton Per Hopper"] },
      { label: "Hopper Size. ( L x W )", values: ["3000 mm x 2000 mm", "3000 mm x 2500 mm", "3000 mm x 2500 mm"] },
      { label: "Auxiliary Conveyor Belt", values: ["500 mm x 2.750 mm", "500 mm x 2.750 mm", "500 mm x 2.750 mm"] },
      { label: "Auxiliary Drive Motor", values: ["2 HP x A/c Drive", "2 HP x A/c Drive", "2 HP x A/c Drive"] },
      { label: "Gathering Conveyor Belt", values: ["600 x 24 Mtr x 3 Play", "600 x 26 Mtr x 3 Play", "600 x 26 Mtr x 3 Play"] },
      { label: "Gathering Drive Motor", values: ["5 HP x A/c Drive", "5 PH x A/c Drive", "7.5 HP x A/c Drive"] },
      { label: "Auxiliary Conveyor Gear", values: ["20:1 x C Type SMSR", "20:1 x C Type SMSR", "20:1 x C Type SMSR"] },
      { label: "Gathering Conveyor Gear", values: ["20:1 x D Type SMSR", "20:1 x D Type SMSR", "20:1 x D Type SMSR"] },
      { label: "Bin Vibrator Motor", values: ["1 HP x 1440 x 3 Ph", "1 HP x 1440 x 3 Ph", "2 HP x 1440 x 3 Ph"] },
    ],
  };

  const slingerTable: TableData = {
    columns: ["Model", "DM-45 Plant", "DM-50 Plant", "DM-60 Plant"],
    rows: [
      { label: "Slinger Conveyor Belt", values: ["500 x 14.5 Mtr", "500 x 14.5 Mtr", "600 x 18 Mtr"] },
      { label: "Conveyor Drive Motor", values: ["5 HP x A/c Drive", "5 HP x A/c Drive", "5 HP x A/c Drive"] },
      { label: "Slinger Conveyor Gear", values: ["05 : 1 x D Type SMSR", "05 : 1 x D Type SMSR", "05 : 1 x D Type SMSR"] },
    ],
  };

  return (
    <>
      <SEO
        title="Drum Mix Plant"
        description="Kaushik Road Technologies Drum Mix Plant product details, including key assemblies, layout, and model-wise specifications."
        keywords="drum mix plant, asphalt drum mix plant, dryer drum, slinger conveyor, pollution control device, bitumen tank, control cabin, control panel"
        type="product"
        image="https://placehold.co/1200x630/png?text=DRUM+MIX+PLANT"
      />

      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#7B1C2B] text-sm uppercase tracking-widest mb-4"
          >
            <Link to="/product" className="hover:underline">
              Products
            </Link>
            <span>/</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Drum Mix Plant
          </h1>
        </motion.div>
      </section>

      <section className="section bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-6 md:p-10">
              <div className="grid gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-8"
                >
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="aspect-[21/9] bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 flex items-center justify-center">
                      <img
                        src={mainImage}
                        alt="Drum Mix Plant"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <BrochureHeading>DRUM MIX PLANT...</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      {mainDescription}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Dryer Drum"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />

                  <div className="md:order-2">
                    <BrochureHeading>DRYER DRUM...</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      The dryer is accurately fabricated to ensure proper heating of
                      aggregates with minimum heat loss. Specially designed flights lift
                      and cascade the aggregate to reduce the final moisture content to
                      0.5% by weight. It is supported on steel rollers through steel tyres
                      with idlers and guide rollers and is provided with segmented driving
                      sprocket. The discharge chute design discharges heated aggregate
                      directly onto the loadout conveyor. The dust collection system
                      consists of end-closed multiple cyclones, exhaust fan and chimney.
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <BrochureTable data={dryerDrumTable} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div className="md:order-1">
                    <BrochureHeading>LOAD OUT CONVEYOR WITH GOB HOPPER...</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      Mixed aggregate from the dryer drum is discharged on an inclined
                      conveyor provided with a hydraulic hopper at delivery end for
                      feeding the mix into tippers.
                    </p>
                    <div className="mt-8">
                      <BrochureTable data={loadoutTable} />
                    </div>
                  </div>

                  <PdfImagePlaceholder
                    label="Loadout Conveyor with Hopper"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Burner"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />
                  <div className="md:order-2">
                    <BrochureHeading>DRYER BURNER...</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      Burner for asphalt drum mix plant: a fully automatic high pressure
                      auto jet burner is mounted at one end of the drum. Electric pre
                      heater with auto on/off control is provided for the burner. The
                      auto on/off system maintains the desired set temperature.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div className="md:order-1">
                    <BrochureHeading>Mineral ( Lime ) Feeler Unit....</BrochureHeading>
                    <div className="text-gray-700 leading-relaxed text-base md:text-lg mt-6 space-y-3">
                      <p>
                        Mineral filler (lime filler) is fabricated with steel plates and
                        has loading doors with pneumatic dust and filler conveying system.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mineral filler rotary valve motor: 2 HP x 1440 x AC x 3 Phase</li>
                        <li>Mineral filler air compressor: 10 HP x 1400 x AC x 3 Phase</li>
                        <li>Drive gear box: 3&quot; x 10 : 1 x Worm gear box</li>
                      </ul>
                    </div>
                  </div>

                  <PdfImagePlaceholder
                    label="Mineral Filler"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Bitumen Tank"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />

                  <div className="md:order-2">
                    <BrochureHeading>Bitumen Tank....</BrochureHeading>
                    <div className="text-gray-700 leading-relaxed text-base md:text-lg mt-6 space-y-3">
                      <p>
                        A stationary bitumen storage tank of capacity 15 Tons / 20 Tons &amp;
                        25 Tons is supplied with drum mix series plants. The &quot;U&quot;
                        shaped single compartmental bitumen tank is fitted with internal
                        heat transfer coils and is fully insulated with 50 mm glass wool
                        from all sides. Bitumen tanks are complete with dial type
                        thermometer, manhole, socket for thermocouple, etc. Tank is fitted
                        with independent on/off type auto burner.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Bitumen drive motor: 5 HP x 1440 x AC</li>
                        <li>Worm gear box: 3&quot; x 10 : 1 x Worm Red gear box</li>
                        <li>Bitumen pump: 2&quot; x 2&quot; M.S. bitumen jacketed pump</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div className="md:order-1">
                    <BrochureHeading>LDO Tank....</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      One LDO (Fuel) tank of capacity 3000 &amp; 5000 Ltrs. is provided
                      with each plant.
                    </p>
                  </div>

                  <PdfImagePlaceholder
                    label="LDO Tank"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Pug Mill"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />

                  <div className="md:order-2">
                    <BrochureHeading>Wet Mix Macdam Plant....</BrochureHeading>
                    <div className="text-gray-700 leading-relaxed text-base md:text-lg mt-6 space-y-3">
                      <p>
                        This central mixing plant for base and sub-base provides higher
                        production with close control on quality of mix and production
                        cost. The wet mix plant is specially designed to suit the typical
                        Indian site conditions.
                      </p>
                      <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <div className="text-gray-900 font-medium mb-2">
                          AVAILABLE MODELS:
                        </div>
                        <div className="space-y-1 text-gray-700">
                          <div>WM100 - Capacity 100 Ton/hr.</div>
                          <div>WM150 - Capacity 150 Ton/hr.</div>
                          <div>WM200 - Capacity 200 Ton/hr.</div>
                        </div>
                      </div>
                      <p>
                        PUG MILL UNIT: a twin shaft pug mill mounted on antifriction
                        bearing provides quick, continuous and homogeneous mix of
                        aggregates and additives.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div className="md:order-1">
                    <BrochureHeading>Four Bin Feeder.....</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      It is of single chassis construction. At each bin a radial gate is
                      provided which can be opened in any position to regulate the
                      aggregate flow. Individual endless belts are provided below the
                      gates to discharge material onto the gathering belt.
                    </p>
                    <div className="mt-8">
                      <BrochureTable data={fourBinFeederTable} />
                    </div>
                  </div>

                  <PdfImagePlaceholder
                    label="Four Bin Feeder"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Vibrating Screen"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />
                  <div className="md:order-2">
                    <BrochureHeading>SINGLE DESK VIBRATING.....</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      A single desk vibratory screen is provided between the gathering and
                      the slinger conveyor for the removal of the oversize material.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div className="md:order-1">
                    <BrochureHeading>SLINGER CONVEYOR ...</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      An inclined conveyor mounted on idlers receives aggregate from the
                      gathering conveyor and feeds it to the dryer. Slinger conveyor is
                      equipped with a load cell for continuously monitoring the weight of
                      the aggregate in TPH.
                    </p>
                    <div className="mt-8">
                      <BrochureTable data={slingerTable} />
                    </div>
                  </div>

                  <PdfImagePlaceholder
                    label="Slinger Conveyor Belt"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <PdfImagePlaceholder
                    label="Pollution Control"
                    aspectClassName="aspect-[16/9]"
                    className="md:order-1"
                  />
                  <div className="md:order-2">
                    <BrochureHeading>AIR POLLUTION CONTROL DEVICE....</BrochureHeading>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
                      Venturi type wet dust collectors are highly efficient and are known
                      to maintain required environmental standards. The extreme turbulence
                      leads to superb entrapping of dust laden exhaust gas. Large size
                      stainless steel nozzles provide a clog free operation to ensure
                      optimum cleaning efficiency.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
