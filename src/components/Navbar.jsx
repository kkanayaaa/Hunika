import { Link, NavLink } from "react-router-dom";

export default function Navbar({ isLoggedIn, role, onLogout }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
      {/* Logo - Kembali ke dashboard utama */}
      <Link to="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600 cursor-pointer">
        <span className="bg-emerald-600 text-white px-2 py-1 rounded-lg text-sm">H</span>
        Hunika
      </Link>

      {/* Menu Navigasi */}
      <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
        
        {/* Menu untuk Pencari (atau tamu) */}
        {(!isLoggedIn || role === 'pencari') && (
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : "hover:text-emerald-600"}
          >
            Cari Kos
          </NavLink>
        )}
        
        {/* Menu untuk Pemilik (Tetap muncul jika login) */}
        {isLoggedIn && role === 'pemilik' && (
          <NavLink 
            to="/dashboard-pemilik" 
            className={({ isActive }) => isActive ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : "hover:text-emerald-600"}
          >
            Dashboard Pemilik
          </NavLink>
        )}
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-700 font-medium">Halo, {role === 'pemilik' ? 'Pemilik' : 'Pencari'}!</span>
            <button 
              onClick={onLogout} 
              className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
            >
              Keluar
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium text-sm transition-colors">
              Masuk
            </Link>
            <Link to="/register" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm rounded-xl transition-all">
              Daftar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}