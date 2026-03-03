import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faTriangleExclamation, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SupplyBar = ({ percent, color, warning }) => (
  <div className="supply-row">
    <div className="supply-bar-track">
      <div
        className="supply-bar-fill"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
      <div className="supply-bar-threshold" />
      <span className="supply-percent">{percent}%</span>
    </div>
    {warning && (
      <span className="supply-warning">
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <span className="supply-warning-text">{warning}</span>
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
  title        = 'Irving',
  subtitle     = 'laserjet 62665',
  statusSummary = 'summary of reason for status',
  printerId    = 'xxxxxxxxxx',
  ipAddress    = 'xxxxxxxxx',
  serialNumber = 'xxxxx',
  printCount   = 'xxxxxxxxxxxxx',
  color        = '#811311',
  isColor      = true,
  paper        = [{ percent: 36, color: '#1a3a6b' }, { percent: 76, color: '#1a3a6b' }],
  toner,
}) => {
  const [open, setOpen] = useState(false);
  const tonerSlots = toner ?? (isColor ? TONER_COLOR : TONER_MONO);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="card-wrapper">

      <div className="card" style={{ backgroundColor: color }}>
        <div className="text">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        <FontAwesomeIcon icon={faPrint} className="icon" />
        <FontAwesomeIcon icon={faTriangleExclamation} className="icon-badge" />
      </div>

      <Collapsible.Trigger className="status-bar">
        <span className="status-text">{statusSummary}</span>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="chevron" />
      </Collapsible.Trigger>

      <Collapsible.Panel className="expanded-panel">

        <div className="info-map-row">
          <div className="printer-info">
            <div><span className="info-label">printer ID:</span> {printerId}</div>
            <div><span className="info-label">ip address:</span> {ipAddress}</div>
            <div><span className="info-label">serial number:</span> {serialNumber}</div>
          </div>
          <div className="map-thumb"><span>map</span></div>
        </div>

        <div className="supply-section">
          <div className="supply-title">paper</div>
          {paper.map((p, i) => <SupplyBar key={i} {...p} />)}
        </div>

        <div className="supply-section">
          <div className="supply-title">toner</div>
          {tonerSlots.map((t, i) => <SupplyBar key={i} {...t} />)}
        </div>

        <div className="print-count-row">
          <span className="info-label">print count:</span> {printCount}
          <Collapsible.Trigger className="chevron" style={{ marginLeft: 'auto' }}>
            <FontAwesomeIcon icon={faChevronUp} />
          </Collapsible.Trigger>
        </div>

      </Collapsible.Panel>
    </Collapsible.Root>
  );
};

export default CardComponent;