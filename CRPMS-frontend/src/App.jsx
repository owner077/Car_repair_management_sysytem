import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login          from './pages/Login';
import Dashboard      from './pages/Dashboard';
import CarForm        from './pages/CarForm';
import ServiceForm    from './pages/ServiceForm';
import RecordForm     from './pages/RecordForm';
import RecordList     from './pages/RecordList';
import PaymentForm    from './pages/PaymentForm';
import BillPage       from './pages/BillPage';
import ReportPage     from './pages/ReportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public — anyone can visit */}
        <Route path='/' element={<Login />} />

        {/* Protected — session verified before each page loads */}
        <Route path='/dashboard'
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/cars/add'
          element={<ProtectedRoute><CarForm /></ProtectedRoute>} />
        <Route path='/services/add'
          element={<ProtectedRoute><ServiceForm /></ProtectedRoute>} />
        <Route path='/records'
          element={<ProtectedRoute><RecordList /></ProtectedRoute>} />
        <Route path='/records/add'
          element={<ProtectedRoute><RecordForm /></ProtectedRoute>} />
        <Route path='/payments/add'
          element={<ProtectedRoute><PaymentForm /></ProtectedRoute>} />
        <Route path='/bill/:id'
          element={<ProtectedRoute><BillPage /></ProtectedRoute>} />
        <Route path='/report'
          element={<ProtectedRoute><ReportPage /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;