import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Expenses from '../views/Expenses';
import Invoices from '../views/Invoices';
import Invoice from '../views/Invoice';
import NotFound from '../components/NotFound';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
