import { Link, Outlet } from 'react-router-dom';
import './App.css';
export default function App() {
  return (
    <div>
      <h2 style={{ color: 'crimson' }}>Hello,everyone!</h2>
      <nav style={{ borderBottom: ' solid 1px crimson', paddingLeft: '1rem' }}>
        <Link to="./invoices">invoices</Link>&nbsp;&nbsp;&nbsp;
        <Link to="./expenses">expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
