import { useMemo } from "react";
import Card from "./Card";

// Distribute cards into N columns in order: card 0 -> col0, card 1 -> col1, ..., card n -> col0, etc.
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

const PrinterGrid = ({ printers }) => {
  const [containerRef, colCount] = useColumnCount(280, 20);
   const columns = distributeIntoColumns(printers, colCount);

  console.log("PrinterGrid received printers:", printers.length);

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