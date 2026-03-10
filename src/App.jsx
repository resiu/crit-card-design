import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;