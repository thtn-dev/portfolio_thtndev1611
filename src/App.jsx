import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home';
import QuynhThuong from './pages/QuynhThuong';

function Portfolio() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/quynhthuong" element={<QuynhThuong />} />
      </Routes>
    </Router>
  );
}

export default App;
