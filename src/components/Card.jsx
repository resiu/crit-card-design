import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faTriangleExclamation, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Add Google Fonts via a style tag
const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .font-alumni { font-family: 'Alumni Sans', sans-serif; }
    .font-barlow { font-family: 'Barlow Condensed', sans-serif; }

    .supply-bar-threshold {
      position: absolute;
      left: 25%;
      top: -3px;
      height: calc(100% + 6px);
      width: 1.5px;
      background: repeating-linear-gradient(
        to bottom,
        #c0392b 0,
        #c0392b 3px,
        transparent 3px,
        transparent 6px
      );
    }
  `}</style>
);

const SupplyBar = ({ percent, color, warning }) => (
  <div className="flex items-center gap-1.5 relative">
    {/* Track */}
    <div className="flex-1 h-3.5 bg-[#ccc] rounded-sm relative overflow-visible">
      {/* Fill */}
      <div
        className="h-full rounded-sm absolute left-0 top-0"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
      {/* Threshold dashed line */}
      <div className="supply-bar-threshold" />
      {/* Percent label */}
      <span
        className="font-barlow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.75rem] font-bold text-white pointer-events-none"
        style={{ textShadow: '0 0 2px rgba(0,0,0,0.6)' }}
      >
        {percent}%
      </span>
    </div>

    {/* Warning badge */}
    {warning && (
      <span className="font-barlow flex items-center gap-1 bg-[#f5d000] rounded-sm px-1 py-px text-[0.65rem] text-[#333] whitespace-nowrap">
        <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '0.6rem' }} />
        <span>{warning}</span>
      </span>
    )}
  </div>
);

const CardComponent = ({
  title = 'Irving',
  subtitle = 'laserjet 62665',
  statusSummary = 'summary of reason for status',
  printerId = 'xxxxxxxxxx',
  ipAddress = 'xxxxxxxxx',
  serialNumber = 'xxxxx',
  printCount = 'xxxxxxxxxxxxx',
  color = '#811311',
  isColor = true,
  paper = [
    { percent: 36, color: '#1a3a6b' },
    { percent: 76, color: '#1a3a6b' },
  ],
  toner = isColor
    ? [
        { percent: 6,  color: '#111111' },
        { percent: 76, color: '#00bcd4' },
        { percent: 51, color: '#e91e8c' },
        { percent: 80, color: '#f5d000' },
      ]
    : [{ percent: 6, color: '#111111', warning: 'Toner IN Inventory!' }],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FontImport />

      {/* card-wrapper */}
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div
        className="w-60 m-1"
        style={{ filter: 'drop-shadow(0.4rem 0.4rem 0rem rgba(0,0,0,0.4))' }}
      >
        {/* ── Collapsed header ── */}
        <div
          className="w-full box-border h-14 rounded-t-lg px-4 py-8 flex justify-between items-center relative"
          style={{ backgroundColor: color }}
        >
          {/* Text block */}
          <div className="flex flex-col items-start">
            <div className="font-alumni text-white text-[2rem] font-bold leading-none mt-2">
              {title}
            </div>
            <div className="font-alumni text-white text-base mb-1">
              {subtitle}
            </div>
          </div>

          {/* Printer icon */}
          <FontAwesomeIcon icon={faPrint} className="text-white text-[2.5rem]" />

          {/* Warning badge (top-right) */}
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-[#f5d000] text-base absolute top-2 right-2"
          />
        </div>

        {/* ── Status summary bar ── */}
        <Collapsible.Trigger className="font-barlow w-full box-border bg-[#e0e0e0] px-2.5 py-1.5 flex justify-between items-center cursor-pointer text-[0.9rem] text-[#333] select-none hover:bg-[#d0d0d0] transition-colors">
          <span className="italic text-[#555]">{statusSummary}</span>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-[#555] text-[0.8rem]" />
        </Collapsible.Trigger>

        {/* ── Expanded panel ── */}
        <Collapsible.Content> 
          <div className="font-barlow bg-[#f5f5f5] rounded-b-lg px-3 py-2.5 text-[0.9rem] text-[#222] flex flex-col gap-2">

            {/* Info + map row */}
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col gap-0.5 text-[0.85rem] leading-snug">
                <div><span className="text-[#555]">printer ID:</span> {printerId}</div>
                <div><span className="text-[#555]">ip address:</span> {ipAddress}</div>
                <div><span className="text-[#555]">serial number:</span> {serialNumber}</div>
              </div>
              <div className="w-[54px] h-[54px] bg-[#c8e6c9] border border-[#aaa] rounded flex items-center justify-center shrink-0">
                <span>map</span>
              </div>
            </div>

            {/* Paper section */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.85rem] text-[#555] mb-0.5">paper</div>
              {paper.map((p, i) => (
                <SupplyBar key={i} percent={p.percent} color={p.color} warning={p.warning} />
              ))}
            </div>

            {/* Toner section */}
            <div className="flex flex-col gap-1">
              <div className="text-[0.85rem] text-[#555] mb-0.5">toner</div>
              {toner.map((t, i) => (
                <SupplyBar key={i} percent={t.percent} color={t.color} warning={t.warning} />
              ))}
            </div>

            {/* Print count */}
            <div className="flex items-center gap-1 text-[0.85rem] pt-1 border-t border-[#ddd]">
              <span className="text-[#555]">print count:</span> {printCount}
              <FontAwesomeIcon
                icon={faChevronUp}
                className="text-[#555] text-[0.8rem] cursor-pointer ml-auto"
                onClick={() => setIsOpen(false)}
              />
            </div>

          </div>
        </Collapsible.Content> 

      </div>
    </Collapsible.Root> 
  </>
  );
};

export default CardComponent;