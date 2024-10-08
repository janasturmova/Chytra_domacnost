import React from 'react';
import { Dashboard } from '../../components/dashboard';
import { Header } from '../../components/header';
import './style.css';

export const HomePage = () => {
  return (
    <>
      {/* ↓↓↓ Zde z komponent poskládej svůj chytrý dům ↓↓↓ */}
      <div class="container">
        <Header title="Chytrý dům"/>
        <Dashboard/>
      </div>
    </>
  );
};
