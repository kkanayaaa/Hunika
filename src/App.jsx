import { useState } from 'react';
import DashboardPemilik from './pages/Pemilik/DashboardPemilik';
import TambahKos from './pages/Pemilik/TambahKos';

const App = () => {
  const [currentView, setCurrentView] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'DashboardPemilik' ? (
        <DashboardPemilik onViewChange={() => setCurrentView('tambah-kos')} />
      ) : (
        <TambahKos onViewChange={() => setCurrentView('DashboardPemilik')} />
      )}
    </div>
  );
}

export default App;