import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { NavLink } from 'react-router-dom';

export const config: ViewConfig = {
  title: 'Hilla 24.4 File-Router Demo',
  menu: {
    exclude: true,
  },
};

export default function Index() {
  return (
    <div className='p-l'>
      <h2>Hilla 24.4 File-Router Demo</h2>
      <ul>
        <li>
          <NavLink to='/orders'>Orders</NavLink>
        </li>
        <li>
          <NavLink to='/customers'>Customers</NavLink>
        </li>
        <li>
          <NavLink to='/Products'>Products</NavLink>
        </li>
      </ul>
    </div>
  );
}
