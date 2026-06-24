import React from "react";

export default function SearchKost() {
  const getImageUrl = (name) => {
  return `/images-hunika/${name}`;
};

  const kostList = [
    { img: "/images-hunika/1.jpg", name: "Kost Melati Residence", loc: "Jakarta Selatan - Kebayoran Baru", price: "1.200.000" },
    { img: getImageUrl("2.jpg"), name: "Kost Bintaro Indah", loc: "Jakarta Selatan - Bintaro", price: "1.500.000" },
    { img: getImageUrl("3.jpg"), name: "Kost Mawar Kemang", loc: "Jakarta Selatan - Kemang", price: "1.100.000" },
    { img: getImageUrl("4.jpg"), name: "Kost Casabella", loc: "Jakarta Selatan - Pondok Indah", price: "2.000.000" },
    { img: getImageUrl("5.jpg"), name: "Kost Green", loc: "Jakarta Selatan - Cipete", price: "900.000" },
    { img: getImageUrl("6.jpg"), name: "Kost Pesanggarahan Indah", loc: "Jakarta Selatan - Pesanggarahan", price: "1.800.000" },
    { img: getImageUrl("7.jpg"), name: "Kost Tebet Hijau", loc: "Jakarta Selatan - Tebet", price: "1.600.000" },
    { img: getImageUrl("8.jpg"), name: "Kost Mama", loc: "Jakarta Selatan - Mampang", price: "1.000.000" },
    { img: getImageUrl("9.jpg"), name: "Kost Harmonika", loc: "Jakarta Selatan - Fatmawati", price: "1.300.000" },
    { img: getImageUrl("10.jpg"), name: "Kost Senara", loc: "Jakarta Selatan - Senopati", price: "1.200.000" },
    { img: getImageUrl("11.jpg"), name: "Kost Gandaria City", loc: "Jakarta Selatan - Gandaria", price: "2.400.000" },
    { img: getImageUrl("12.jpg"), name: "Kost Setia", loc: "Jakarta Selatan - Setiabudi", price: "2.100.000" },
  ];

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white px-12 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-green-600">Hunika</div>

        <ul className="flex gap-8">
          <li><a href="#" className="text-gray-700 hover:text-green-600">Cari Kost</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">Dashboard Pemilik</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">Favorit</a></li>
        </ul>

        <a
          href="/login"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Login
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center py-16 px-5">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">
          Cari Kost yang Nyaman dan Terjangkau
        </h1>
        <p className="text-gray-500 mb-6">
          Temukan kost impianmu dengan mudah.
        </p>
        <div className="flex justify-center gap-3">
          <input
            type="text"
            placeholder="Cari lokasi, nama kost, atau fasilitas..."
            className="w-[500px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          />
          <button className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition">
            Cari
          </button>
        </div>
      </section>

      {/* MAIN */}
      <div className="flex gap-6 px-10 pb-10">
        {/* FILTER */}
        <aside className="w-64 self-start bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <h2 className="text-gray-400 font-bold uppercase text-sm mb-5">
            Filter
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Fasilitas</h3>
            <div className="space-y-2 text-gray-600">
              {["AC", "WiFi", "Parkir", "KM Dalam"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" /> {item}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Tipe Kamar</h3>
            <div className="space-y-2 text-gray-600">
              {["Standar", "Deluxe", "Eksklusif", "All"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tipe" className="text-green-600 focus:ring-green-500" /> {item}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Harga Maks (Rp)</h3>
            <input
              type="number"
              placeholder="cth: 2000000"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            />
          </div>

          <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-full transition text-sm font-medium">
            ↺ Reset Filter
          </button>
        </aside>

        {/* LIST KOST */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kostList.map((kost, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-slate-100">
                <img
                  src={kost.img}
                  alt={kost.name}
                  className="w-full h-52 object-cover"
                  onError={(e) => {
                    // Jika gambar tetap gagal di-load, tampilkan placeholder abu-abu agar tidak pecah
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Gambar+Kost";
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">{kost.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">📍 {kost.loc}</p>
                  <span className="font-bold text-green-600 block">
                    Rp {kost.price} / bulan
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}