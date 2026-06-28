export default function Navbar({ isLoggedIn, role }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
      {/* Logo - bisa diklik untuk balik ke katalog utama */}
      <a href="#" className="flex items-center gap-2 font-bold text-xl text-emerald-600 cursor-pointer">
        <span className="bg-emerald-600 text-white px-2 py-1 rounded-lg text-sm">H</span>
        Hunika
      </a>

      {/* Menu Navigasi */}
      <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
        
        {/* Kondisi belum login atau login as pencari -> Menu berubah jadi 'Cari Kos' */}
        {(!isLoggedIn || role === 'pencari') && (
          <a href="#" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">
            Cari Kos
          </a>
        )}
        
        {/* Kondisi sudah login as pemilik -> menu berubah jadi 'Dashboard Pemilik' */}
        {isLoggedIn && role === 'pemilik' && (
          <a href="#" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">
            Dashboard Pemilik
          </a>
        )}
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          // Tampilan kalau SUDAH login
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-700 font-medium">Selamat Datang!</span>
            <button className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors">Keluar</button>
          </div>
        ) : (
          // Tampilan jika BELUM login
          <>
            <button className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium text-sm transition-colors">Masuk</button>
            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm rounded-xl transition-all">Daftar</button>
          </>
        )}
      </div>
    </nav>
  );
}
