import { useMemo } from "react";
import Card from "./Card";

const printers = [
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Toner critically low — needs replacement",
    printerId: "PRN-001-IRV",
    ipAddress: "192.168.1.101",
    serialNumber: "SN-38291",
    printCount: "142,330",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 12, color: "#1a3a6b", warning: "Low paper!" },
      { percent: 80, color: "#1a3a6b" },
    ],
    toner: [{ percent: 6, color: "#111111", warning: "Toner IN Inventory!" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Paper tray 1 empty",
    printerId: "PRN-002-IRV",
    ipAddress: "192.168.1.102",
    serialNumber: "SN-38292",
    printCount: "98,741",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 0, color: "#1a3a6b", warning: "Empty!" },
      { percent: 55, color: "#1a3a6b" },
    ],
    toner: [{ percent: 34, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Yellow toner below threshold",
    printerId: "PRN-003-IRV",
    ipAddress: "192.168.1.103",
    serialNumber: "SN-38293",
    printCount: "210,005",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 60, color: "#1a3a6b" },
      { percent: 45, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 72, color: "#111111" },
      { percent: 68, color: "#00bcd4" },
      { percent: 55, color: "#e91e8c" },
      { percent: 18, color: "#f5d000", warning: "Low toner" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Cyan below 25% threshold",
    printerId: "PRN-004-IRV",
    ipAddress: "192.168.1.104",
    serialNumber: "SN-38294",
    printCount: "77,430",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 88, color: "#1a3a6b" },
      { percent: 30, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 90, color: "#111111" },
      { percent: 22, color: "#00bcd4", warning: "Low toner" },
      { percent: 77, color: "#e91e8c" },
      { percent: 65, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-005-IRV",
    ipAddress: "192.168.1.105",
    serialNumber: "SN-38295",
    printCount: "54,120",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 95, color: "#1a3a6b" },
      { percent: 70, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 85, color: "#111111" },
      { percent: 90, color: "#00bcd4" },
      { percent: 78, color: "#e91e8c" },
      { percent: 82, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-006-IRV",
    ipAddress: "192.168.1.106",
    serialNumber: "SN-38296",
    printCount: "33,800",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 76, color: "#1a3a6b" },
      { percent: 100, color: "#1a3a6b" },
    ],
    toner: [{ percent: 62, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-007-IRV",
    ipAddress: "192.168.1.107",
    serialNumber: "SN-38297",
    printCount: "189,050",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 50, color: "#1a3a6b" },
      { percent: 85, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 45, color: "#111111" },
      { percent: 60, color: "#00bcd4" },
      { percent: 70, color: "#e91e8c" },
      { percent: 55, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-008-IRV",
    ipAddress: "192.168.1.108",
    serialNumber: "SN-38298",
    printCount: "401,230",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 40, color: "#1a3a6b" },
      { percent: 90, color: "#1a3a6b" },
    ],
    toner: [{ percent: 78, color: "#111111" }],
  },

  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Toner critically low — needs replacement",
    printerId: "PRN-001-IRV",
    ipAddress: "192.168.1.101",
    serialNumber: "SN-38291",
    printCount: "142,330",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 12, color: "#1a3a6b", warning: "Low paper!" },
      { percent: 80, color: "#1a3a6b" },
    ],
    toner: [{ percent: 6, color: "#111111", warning: "Toner IN Inventory!" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Paper tray 1 empty",
    printerId: "PRN-002-IRV",
    ipAddress: "192.168.1.102",
    serialNumber: "SN-38292",
    printCount: "98,741",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 0, color: "#1a3a6b", warning: "Empty!" },
      { percent: 55, color: "#1a3a6b" },
    ],
    toner: [{ percent: 34, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Yellow toner below threshold",
    printerId: "PRN-003-IRV",
    ipAddress: "192.168.1.103",
    serialNumber: "SN-38293",
    printCount: "210,005",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 60, color: "#1a3a6b" },
      { percent: 45, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 72, color: "#111111" },
      { percent: 68, color: "#00bcd4" },
      { percent: 55, color: "#e91e8c" },
      { percent: 18, color: "#f5d000", warning: "Low toner" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Cyan below 25% threshold",
    printerId: "PRN-004-IRV",
    ipAddress: "192.168.1.104",
    serialNumber: "SN-38294",
    printCount: "77,430",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 88, color: "#1a3a6b" },
      { percent: 30, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 90, color: "#111111" },
      { percent: 22, color: "#00bcd4", warning: "Low toner" },
      { percent: 77, color: "#e91e8c" },
      { percent: 65, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-005-IRV",
    ipAddress: "192.168.1.105",
    serialNumber: "SN-38295",
    printCount: "54,120",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 95, color: "#1a3a6b" },
      { percent: 70, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 85, color: "#111111" },
      { percent: 90, color: "#00bcd4" },
      { percent: 78, color: "#e91e8c" },
      { percent: 82, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-006-IRV",
    ipAddress: "192.168.1.106",
    serialNumber: "SN-38296",
    printCount: "33,800",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 76, color: "#1a3a6b" },
      { percent: 100, color: "#1a3a6b" },
    ],
    toner: [{ percent: 62, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-007-IRV",
    ipAddress: "192.168.1.107",
    serialNumber: "SN-38297",
    printCount: "189,050",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 50, color: "#1a3a6b" },
      { percent: 85, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 45, color: "#111111" },
      { percent: 60, color: "#00bcd4" },
      { percent: 70, color: "#e91e8c" },
      { percent: 55, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-008-IRV",
    ipAddress: "192.168.1.108",
    serialNumber: "SN-38298",
    printCount: "401,230",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 40, color: "#1a3a6b" },
      { percent: 90, color: "#1a3a6b" },
    ],
    toner: [{ percent: 78, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Toner critically low — needs replacement",
    printerId: "PRN-001-IRV",
    ipAddress: "192.168.1.101",
    serialNumber: "SN-38291",
    printCount: "142,330",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 12, color: "#1a3a6b", warning: "Low paper!" },
      { percent: 80, color: "#1a3a6b" },
    ],
    toner: [{ percent: 6, color: "#111111", warning: "Toner IN Inventory!" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Paper tray 1 empty",
    printerId: "PRN-002-IRV",
    ipAddress: "192.168.1.102",
    serialNumber: "SN-38292",
    printCount: "98,741",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 0, color: "#1a3a6b", warning: "Empty!" },
      { percent: 55, color: "#1a3a6b" },
    ],
    toner: [{ percent: 34, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Yellow toner below threshold",
    printerId: "PRN-003-IRV",
    ipAddress: "192.168.1.103",
    serialNumber: "SN-38293",
    printCount: "210,005",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 60, color: "#1a3a6b" },
      { percent: 45, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 72, color: "#111111" },
      { percent: 68, color: "#00bcd4" },
      { percent: 55, color: "#e91e8c" },
      { percent: 18, color: "#f5d000", warning: "Low toner" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Cyan below 25% threshold",
    printerId: "PRN-004-IRV",
    ipAddress: "192.168.1.104",
    serialNumber: "SN-38294",
    printCount: "77,430",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 88, color: "#1a3a6b" },
      { percent: 30, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 90, color: "#111111" },
      { percent: 22, color: "#00bcd4", warning: "Low toner" },
      { percent: 77, color: "#e91e8c" },
      { percent: 65, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-005-IRV",
    ipAddress: "192.168.1.105",
    serialNumber: "SN-38295",
    printCount: "54,120",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 95, color: "#1a3a6b" },
      { percent: 70, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 85, color: "#111111" },
      { percent: 90, color: "#00bcd4" },
      { percent: 78, color: "#e91e8c" },
      { percent: 82, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-006-IRV",
    ipAddress: "192.168.1.106",
    serialNumber: "SN-38296",
    printCount: "33,800",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 76, color: "#1a3a6b" },
      { percent: 100, color: "#1a3a6b" },
    ],
    toner: [{ percent: 62, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-007-IRV",
    ipAddress: "192.168.1.107",
    serialNumber: "SN-38297",
    printCount: "189,050",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 50, color: "#1a3a6b" },
      { percent: 85, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 45, color: "#111111" },
      { percent: 60, color: "#00bcd4" },
      { percent: 70, color: "#e91e8c" },
      { percent: 55, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-008-IRV",
    ipAddress: "192.168.1.108",
    serialNumber: "SN-38298",
    printCount: "401,230",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 40, color: "#1a3a6b" },
      { percent: 90, color: "#1a3a6b" },
    ],
    toner: [{ percent: 78, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Toner critically low — needs replacement",
    printerId: "PRN-001-IRV",
    ipAddress: "192.168.1.101",
    serialNumber: "SN-38291",
    printCount: "142,330",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 12, color: "#1a3a6b", warning: "Low paper!" },
      { percent: 80, color: "#1a3a6b" },
    ],
    toner: [{ percent: 6, color: "#111111", warning: "Toner IN Inventory!" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Paper tray 1 empty",
    printerId: "PRN-002-IRV",
    ipAddress: "192.168.1.102",
    serialNumber: "SN-38292",
    printCount: "98,741",
    color: "#811311",
    isColor: false,
    paper: [
      { percent: 0, color: "#1a3a6b", warning: "Empty!" },
      { percent: 55, color: "#1a3a6b" },
    ],
    toner: [{ percent: 34, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Yellow toner below threshold",
    printerId: "PRN-003-IRV",
    ipAddress: "192.168.1.103",
    serialNumber: "SN-38293",
    printCount: "210,005",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 60, color: "#1a3a6b" },
      { percent: 45, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 72, color: "#111111" },
      { percent: 68, color: "#00bcd4" },
      { percent: 55, color: "#e91e8c" },
      { percent: 18, color: "#f5d000", warning: "Low toner" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "Cyan below 25% threshold",
    printerId: "PRN-004-IRV",
    ipAddress: "192.168.1.104",
    serialNumber: "SN-38294",
    printCount: "77,430",
    color: "#b05a00",
    isColor: true,
    paper: [
      { percent: 88, color: "#1a3a6b" },
      { percent: 30, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 90, color: "#111111" },
      { percent: 22, color: "#00bcd4", warning: "Low toner" },
      { percent: 77, color: "#e91e8c" },
      { percent: 65, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-005-IRV",
    ipAddress: "192.168.1.105",
    serialNumber: "SN-38295",
    printCount: "54,120",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 95, color: "#1a3a6b" },
      { percent: 70, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 85, color: "#111111" },
      { percent: 90, color: "#00bcd4" },
      { percent: 78, color: "#e91e8c" },
      { percent: 82, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-006-IRV",
    ipAddress: "192.168.1.106",
    serialNumber: "SN-38296",
    printCount: "33,800",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 76, color: "#1a3a6b" },
      { percent: 100, color: "#1a3a6b" },
    ],
    toner: [{ percent: 62, color: "#111111" }],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-007-IRV",
    ipAddress: "192.168.1.107",
    serialNumber: "SN-38297",
    printCount: "189,050",
    color: "#1a6b3a",
    isColor: true,
    paper: [
      { percent: 50, color: "#1a3a6b" },
      { percent: 85, color: "#1a3a6b" },
    ],
    toner: [
      { percent: 45, color: "#111111" },
      { percent: 60, color: "#00bcd4" },
      { percent: 70, color: "#e91e8c" },
      { percent: 55, color: "#f5d000" },
    ],
  },
  {
    title: "Irving",
    subtitle: "LaserJet 62665",
    statusSummary: "All systems operational",
    printerId: "PRN-008-IRV",
    ipAddress: "192.168.1.108",
    serialNumber: "SN-38298",
    printCount: "401,230",
    color: "#1a6b3a",
    isColor: false,
    paper: [
      { percent: 40, color: "#1a3a6b" },
      { percent: 90, color: "#1a3a6b" },
    ],
    toner: [{ percent: 78, color: "#111111" }],
  },
];

// Distribute cards into N columns in order: card 0→col0, card 1→col1, ..., card N→col0, etc.
function distributeIntoColumns(items, colCount) {
  const cols = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => cols[i % colCount].push({ item, index: i }));
  return cols;
}

// Hook that returns the number of columns based on container width
// We use a simple breakpoint approach via CSS — but since we need JS column count
// to distribute cards, we use a ResizeObserver on the container.
import { useState, useEffect, useRef, useCallback } from "react";

function useColumnCount(minColWidth = 280, gap = 20) {
  const ref = useRef(null);
  const [colCount, setColCount] = useState(1);

  const calculate = useCallback(() => {
    if (!ref.current) return;
    const width = ref.current.offsetWidth;
    const count = Math.max(1, Math.floor((width + gap) / (minColWidth + gap)));
    setColCount(count);
  }, [minColWidth, gap]);

  useEffect(() => {
    calculate();
    const ro = new ResizeObserver(calculate);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [calculate]);

  return [ref, colCount];
}

const PrinterGrid = () => {
  const [containerRef, colCount] = useColumnCount(280, 20);
  const columns = useMemo(
    () => distributeIntoColumns(printers, colCount),
    [colCount]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/*
       * One flex child per column, each column is flex-col.
       * Cards are distributed left-to-right across columns (0,1,2,3,0,1,2,3…).
       * Expanding a card pushes only the cards below it in that same column.
       * All columns are equal width (flex-1), filling the full container.
       */}
      <div ref={containerRef} className="flex gap-5 items-start w-full">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-5 min-w-0">
            {col.map(({ item, index }) => (
              <Card key={index} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinterGrid;