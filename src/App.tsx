import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Footer here</footer>
      <footer>Footer here</footer> <footer>Footer here</footer>{' '}
      <footer>Footer here</footer> <footer>Footer here</footer>{' '}
      <footer>Footer here</footer> <footer>Footer here</footer>{' '}
      <footer>Footer here</footer> <footer>Footer here</footer>{' '}
      <footer>Footer here</footer> <footer>Footer here</footer>{' '}
      <footer>Footer here</footer>
    </div>
  );
}
