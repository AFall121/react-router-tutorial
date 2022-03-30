import React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

import { getInvoices } from '../data';
export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        value={searchParams.get('filter') || ''}
        onChange={(e) => {
          let filter = e.target.value;
          filter ? setSearchParams({ filter }) : setSearchParams({});
        }}
        type="text"
      />
      <nav style={{ borderBottom: 'crimson 1px solid', padding: 10 }}>
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice, idx) => {
            {
              /**
            let filter = searchParams.get('filter');
            let search = filter ? '?filter=' + filter : '';
              */
            }

            return (
              <NavLink
                style={({ isActive }) => ({
                  display: 'block',
                  borderBottom: '1px solid black',
                  color: isActive ? 'red' : '',
                })}
                to={`/invoices/${invoice.number}`}
                key={idx}
              >
                {invoice.name}
              </NavLink>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
}
