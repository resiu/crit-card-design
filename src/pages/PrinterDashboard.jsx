import { useState } from 'react';
import PrinterGrid from '../components/PrinterGrid';
import SearchBar from '../components/SearchBar';
import printers from '../models/model';

const PrinterDashboard = () => {
  const [query, setQuery] = useState('');

  const filteredPrinters = printers.filter((p) =>
    p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').includes(query.toLowerCase().replace(/[^a-z0-9\s]/g, ''))
  );

  return (
    <>
      <SearchBar onChange={setQuery} />
      <PrinterGrid printers={filteredPrinters} />
    </>
  );
}

export default PrinterDashboard;