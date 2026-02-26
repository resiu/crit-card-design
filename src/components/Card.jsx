import { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faTriangleExclamation, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SupplyBar = ({ label, percent, color, warning }) => (
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

const CardComponent = ({
  title = 'Irving',
  subtitle = 'laserjet 62665',
  statusSummary = 'summary of reason for status',
  printerId = 'xxxxxxxxxx',
  ipAddress = 'xxxxxxxxx',
  serialNumber = 'xxxxx',
  printCount = 'xxxxxxxxxxxxx',
  color = '#811311', // red | green (#2e7d32) | orange (#e65100)
  isColor = true,
  paper = [
    { percent: 36, color: '#1a3a6b' },
    { percent: 76, color: '#1a3a6b' },
  ],
  toner = isColor
    ? [
        { percent: 6, color: '#111111'},
        { percent: 76, color: '#00bcd4' },
        { percent: 51, color: '#e91e8c' },
        { percent: 80, color: '#f5d000' },
      ]
    : [{ percent: 6, color: '#111111', warning: 'Toner IN Inventory!' }],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-wrapper">
      {/* ── Collapsed header ── */}
      <div className="card" style={{ backgroundColor: color }}>
        <div className="text">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        <FontAwesomeIcon icon={faPrint} className="icon" />
        {/* warning badge */}
        <FontAwesomeIcon icon={faTriangleExclamation} className="icon-badge" />
      </div>

      {/* ── Status summary bar (always visible) ── */}
      <div
        className="status-bar"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setIsOpen(!isOpen)}
      >
        <span className="status-text">{statusSummary}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="chevron" />
      </div>

      {/* ── Expanded panel ── */}
      {isOpen && (
        <div className="expanded-panel">
          {/* Info + map row */}
          <div className="info-map-row">
            <div className="printer-info">
              <div><span className="info-label">printer ID:</span> {printerId}</div>
              <div><span className="info-label">ip address:</span> {ipAddress}</div>
              <div><span className="info-label">serial number:</span> {serialNumber}</div>
            </div>
            <div className="map-thumb">
              <span>map</span>
            </div>
          </div>

          {/* Paper section */}
          <div className="supply-section">
            <div className="supply-title">paper</div>
            {paper.map((p, i) => (
              <SupplyBar key={i} percent={p.percent} color={p.color} warning={p.warning} />
            ))}
          </div>

          {/* Toner section */}
          <div className="supply-section">
            <div className="supply-title">toner</div>
            {toner.map((t, i) => (
              <SupplyBar key={i} percent={t.percent} color={t.color} warning={t.warning} />
            ))}
          </div>

          {/* Print count */}
          <div className="print-count-row">
            <span className="info-label">print count:</span> {printCount}
            <FontAwesomeIcon icon={faChevronUp} className="chevron" onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', marginLeft: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;