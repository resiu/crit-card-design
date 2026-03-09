import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faTriangleExclamation, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SupplyBar = ({ percent, color, warning }) => (
  <div className="flex items-center gap-[7.5px] relative">
    <div className="flex-1 h-[17.5px] bg-[#ccc] rounded-[2.5px] relative overflow-visible">
      <div
        className="h-full rounded-[2.5px] absolute left-0 top-0"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
      <div
        className="absolute left-[25%] top-[-3.75px] w-[1.875px] h-[calc(100%+7.5px)]"
        style={{
          background: 'repeating-linear-gradient(to bottom, #c0392b 0, #c0392b 3.75px, transparent 3.75px, transparent 7.5px)',
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.9375rem] font-bold text-white pointer-events-none"
        style={{ textShadow: '0 0 2.5px rgba(0,0,0,0.6)' }}
      >
        {percent}%
      </span>
    </div>
    {warning && (
      <span className="flex items-center gap-[3.75px] bg-[#f5d000] rounded-[3.75px] px-[5px] py-[1.25px] text-[0.8125rem] text-[#333] whitespace-nowrap">
        <FontAwesomeIcon icon={faTriangleExclamation} className="text-[0.75rem]" />
        <span>{warning}</span>
      </span>
    )}
  </div>
);

const TONER_COLOR = [
  { percent: 6,  color: '#111111' },
  { percent: 76, color: '#00bcd4' },
  { percent: 51, color: '#e91e8c' },
  { percent: 80, color: '#f5d000' },
];

const TONER_MONO = [
  { percent: 6, color: '#111111', warning: 'Toner IN Inventory!' },
];

const CardComponent = ({
  title         = 'Irving',
  subtitle      = 'laserjet 62665',
  statusSummary = 'summary of reason for status',
  printerId     = 'xxxxxxxxxx',
  ipAddress     = 'xxxxxxxxx',
  serialNumber  = 'xxxxx',
  printCount    = 'xxxxxxxxxxxxx',
  color         = '#811311',
  isColor       = true,
  paper         = [{ percent: 36, color: '#1a3a6b' }, { percent: 76, color: '#1a3a6b' }],
  toner,
}) => {
  const [open, setOpen] = useState(false);
  const tonerSlots = toner ?? (isColor ? TONER_COLOR : TONER_MONO);

  // Orange and green cards hide the header warning when collapsed
  const CALM_COLORS = ["#c0681f", "#1a6b3a"];
  const isCalm = CALM_COLORS.map(c => c.toLowerCase()).includes(color.toLowerCase());
  const showHeaderWarning = !isCalm;

  return (
    <div
      className="w-full min-w-70"
      style={{ filter: 'drop-shadow(0.5rem 0.5rem 0rem rgba(0,0,0,0.4))' }}
    >
      <Collapsible.Root open={open} onOpenChange={setOpen}>

        {/* Card header */}
        <div
          className="w-full box-border h-[4.375rem] rounded-t-[0.625rem] px-[1.25rem] py-[2.5rem] flex justify-between items-center relative"
          style={{ backgroundColor: color }}
        >
          <div className="flex flex-col items-start">
            <div className="text-white font-alumni text-[2.5rem] font-bold leading-none mt-[0.625rem] truncate">
              {title}
            </div>
            <div className="text-white font-alumni text-[1.25rem] mb-[0.3125rem]">
              {subtitle}
            </div>
          </div>
          <FontAwesomeIcon icon={faPrint} className="text-white text-[3.125rem]" />
          {showHeaderWarning && (
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-[#f5d000] text-[1.25rem] absolute top-[10px] right-[10px]" />
          )}
        </div>

        {/* Status / trigger bar */}
        <Collapsible.Trigger
          className={`w-full box-border bg-[#e0e0e0] hover:bg-[#d0d0d0] px-[12.5px] py-[7.5px] flex justify-between items-center cursor-pointer font-barlow text-[1.125rem] text-[#333] select-none ${open ? '' : 'rounded-b-[0.625rem]'}`}
        >
          <span className="italic text-[#555] truncate">{statusSummary}</span>
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="text-[#555] text-[1rem]" />
        </Collapsible.Trigger>

        {/* Expanded panel */}
        <Collapsible.Panel
          className="bg-[#f5f5f5] rounded-b-[0.625rem] px-[15px] py-[12.5px] font-barlow text-[1.125rem] text-[#222] flex flex-col gap-[10px]"
        >
          <div className="flex justify-between items-start gap-[10px]">
            <div className="flex flex-col gap-[2.5px] text-[1.0625rem] leading-[1.4] min-w-0">
              <div className="truncate"><span className="text-[#555]">printer ID:</span> {printerId}</div>
              <div className="truncate"><span className="text-[#555]">ip address:</span> {ipAddress}</div>
              <div className="truncate"><span className="text-[#555]">serial number:</span> {serialNumber}</div>
            </div>
            <div className="w-[67.5px] h-[67.5px] shrink-0 bg-[#c8e6c9] border border-[#aaa] rounded-[5px] flex items-center justify-center">
              <span>map</span>
            </div>
          </div>

          <div className="flex flex-col gap-[5px]">
            <div className="text-[1.0625rem] text-[#555] mb-[2.5px]">paper</div>
            {paper.map((p, i) => <SupplyBar key={i} {...p} />)}
          </div>

          <div className="flex flex-col gap-[5px]">
            <div className="text-[1.0625rem] text-[#555] mb-[2.5px]">toner</div>
            {tonerSlots.map((t, i) => <SupplyBar key={i} {...t} />)}
          </div>

          <div className="flex items-center gap-[5px] text-[1.0625rem] pt-[5px] border-t border-[#ddd]">
            <span className="text-[#555]">print count:</span> {printCount}
            <Collapsible.Trigger className="ml-auto text-[#555] text-[1rem]">
              <FontAwesomeIcon icon={faChevronUp} />
            </Collapsible.Trigger>
          </div>
        </Collapsible.Panel>

      </Collapsible.Root>
    </div>
  );
};

export default CardComponent;