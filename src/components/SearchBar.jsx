import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ placeholder = "Search printers...", onChange }) => {
  const [query, setQuery] = useState(''); // State to hold search input
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    onChange?.('');
  };

  return (
    <div
      className="flex items-center gap-[10px] font-barlow"
      style={{
        background: focused ? '#fff' : '#ececec',
        border: `2px solid ${focused ? '#811311' : '#ccc'}`,
        borderRadius: '6px',
        padding: '9px 16px',
        transition: 'border-color 0.15s, background 0.15s',
        boxShadow: focused ? '0 0 0 3px rgba(129,19,17,0.12)' : 'none',
        width: '100%',
        maxWidth: '420px',
      }}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: focused ? '#811311' : '#888', fontSize: '1.05rem', flexShrink: 0, transition: 'color 0.15s' }}
      />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: '1.08rem',
          color: '#222',
          fontFamily: 'inherit',
        }}
      />
      {query && (
        <button
          onClick={handleClear}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#888', display: 'flex', alignItems: 'center' }}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: '1rem' }} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;