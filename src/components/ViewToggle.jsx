import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react/toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells, faMap } from '@fortawesome/free-solid-svg-icons';

const ViewToggle = ({ mode, onModeChange }) => {
  return (
    <ToggleGroup
      value={[mode]}
      onValueChange={(val) => val.length > 0 && onModeChange(val[0])}
      style={{
        display: 'flex',
        border: '2px solid #ccc',
        borderRadius: '6px',
        overflow: 'hidden',
        background: '#ececec',
      }}
    >
      {[
        { value: 'cards', icon: faTableCells, label: 'Cards' },
        { value: 'map',   icon: faMap,        label: 'Map'   },
      ].map(({ value, icon, label }) => (
        <Toggle
  key={value}
  value={value}
  aria-label={label}
  style={{
    display: 'flex',
    alignItems: 'center',
    padding: '9px 18px',
    minHeight: '42px',
    border: 'none',
    cursor: 'pointer',
    background: mode === value ? '#811311' : 'transparent',
    color: mode === value ? '#fff' : '#555',
    transition: 'background 0.15s, color 0.15s',
  }}
>
  <FontAwesomeIcon icon={icon} fontSize="1.6rem" />
</Toggle>
      ))}
    </ToggleGroup>
  );
};

export default ViewToggle;