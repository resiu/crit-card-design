import SearchBar from './SearchBar';
import ViewToggle from './ViewToggle';

const TopBar = ({ onSearch, mode, onModeChange }) => {
  return (
    <div className="flex items-center gap-3 mt-8 ml-8">
      <SearchBar onChange={onSearch} />
      <ViewToggle mode={mode} onModeChange={onModeChange} />
    </div>
  );
};

export default TopBar;