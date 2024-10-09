
import { Dashboard } from '../../components/dashboard';
import { Header } from '../../components/header';
import './style.css';

export const HomePage = () => {
  return (
      <div className="container">
        <Header title="Chytrý dům"/>
        <Dashboard/>
      </div>
  );
};
