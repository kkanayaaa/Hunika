import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function SearchKost({ isLoggedIn, handleLogout }) {
const [selectedFacility, setSelectedFacility] = useState([]);
const [selectedRoomType, setSelectedRoomType] = useState("");

const getImageUrl = (name) => {
  return `/images-hunika/${name}`;
};

const [isLogin, setIsLogin] = useState(
  localStorage.getItem("isLogin") === "true"
);

useEffect(() => {
const status = localStorage.getItem("isLogin");
setIsLogin(status === "true");
}, []);

/* const handleLogout = () => {
  localStorage.removeItem("isLogin");
  setIsLogin(false);
}; */

const [search, setSearch] = useState("");
const [maxPrice,setMaxPrice]=useState("");
const [showMenu, setShowMenu] = useState(false);

const kostList = [
    { id : 1, img: getImageUrl("1.jpg"), name: "Kost Melati Residence", loc: "Jakarta Selatan - Kebayoran Baru", price: "1.200.000", facilities: ["AC", "WiFi", "Parkir"], roomType: "Standar" },
    { id : 2, img: getImageUrl("2.jpg"), name: "Kost Bintaro Indah", loc: "Jakarta Selatan - Bintaro", price: "1.500.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"], roomType: "Standar" },
    { id : 3, img: getImageUrl("3.jpg"), name: "Kost Mawar Kemang", loc: "Jakarta Selatan - Kemang", price: "1.100.000", facilities: ["AC", "WiFi"], roomType: "Standar"  },
    { id : 4, img: getImageUrl("4.jpg"), name: "Kost Casabella", loc: "Jakarta Selatan - Pondok Indah", price: "2.000.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"], roomType: "Deluxe"  },
    { id : 5, img: getImageUrl("5.jpg"), name: "Kost Green", loc: "Jakarta Selatan - Cipete", price: "900.000", facilities: ["AC"], roomType: "Standar"  },
    { id : 6, img: getImageUrl("6.jpg"), name: "Kost Pesanggrahan Indah", loc: "Jakarta Selatan - Pesanggrahan", price: "1.800.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"], roomType: "Deluxe"  },
    { id : 7, img: getImageUrl("7.jpg"), name: "Kost Tebet Hijau", loc: "Jakarta Selatan - Tebet", price: "1.600.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"], roomType: "Deluxe"  },
    { id : 8, img: getImageUrl("8.jpg"), name: "Kost Mama", loc: "Jakarta Selatan - Mampang", price: "1.000.000", facilities: ["AC", "Parkir"], roomType: "Standar"  },
    { id : 9, img: getImageUrl("9.jpg"), name: "Kost Harmonika", loc: "Jakarta Selatan - Fatmawati", price: "1.300.000", facilities: ["AC", "Kamar Mandi Dalam"], roomType: "Standar"  },
    { id : 10, img: getImageUrl("10.jpg"), name: "Kost Senara", loc: "Jakarta Selatan - Senopati", price: "1.200.000", facilities: ["AC", "WiFi", "Parkir"], roomType: "Standar"  },
    { id : 11, img: getImageUrl("11.jpg"), name: "Kost Gandaria City", loc: "Jakarta Selatan - Gandaria", price: "2.400.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam", "Pantry"], roomType: "Eksklusif"  },
    { id : 12, img: getImageUrl("12.jpg"), name: "Kost Setia", loc: "Jakarta Selatan - Setiabudi", price: "2.300.000", facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam", "Pantry"], roomType: "Eksklusif"  },
  ];

const filteredKost = kostList.filter((kost) => {

  const facilityMatch =
    selectedFacility.length === 0 ||
    selectedFacility.every((facility) =>
      kost.facilities.includes(facility)
    );

  const roomMatch =
    selectedRoomType === "" ||
    kost.roomType === selectedRoomType;

  const searchMatch =
    kost.name.toLowerCase().includes(search.toLowerCase()) ||
    kost.loc.toLowerCase().includes(search.toLowerCase()) ||
    kost.facilities.some((facility) =>
      facility.toLowerCase().includes(search.toLowerCase())
    );

  const price = Number(kost.price.replace(/\./g, ""));

  const inputPrice = Number(maxPrice.replace(/\./g, ""));

  const priceMatch =
    maxPrice === "" || price <= inputPrice;
    return facilityMatch && roomMatch && searchMatch && priceMatch;
  });

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans">
      {/* NAVBAR */}
      {/* <nav className="bg-white px-12 py-4 flex justify-between items-center shadow-md">
        <div className="text-3xl font-bold text-green-600">Hunika</div>

        <ul className="flex gap-8">
          <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
            isActive
            ? "text-green-600 text-xl font-semibold border-green-600 pb-1"
            : "text-gray-700 hover:text-green-600"
          }
          >
            Cari Kost
            </NavLink>
            </li>          
            
            <li>
              <a 
              href="#" className="text-gray-700 text-xl hover:text-green-600"
              >
                Dashboard Pemilik
                </a>
                </li>
        </ul>
        {isLogin ? (
        <div className="relative">
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
        <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="Profile"
        className="w-6 h-6"
        />
        Profil
        </button>

        {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
        <Link
          to="/profile"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Profil Saya
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("isLogin");
            localStorage.removeItem("email");
            window.location.reload();
          }}
          className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
        >
          Logout
        </button>
        </div>
        )}
        </div>
        ) : ( 
        <Link
        to="/login"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
        Login
       </Link>
       )}

        </nav> */}

       {/*  <Navbar 
        isLoggedIn={isLoggedIn} 
        role="pencari" 
        onLogout={handleLogout} 
        /> */}

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
              {["AC", "WiFi", "Parkir", "Kamar Mandi Dalam", "Pantry"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={selectedFacility.includes(item)}
                  onChange={() => {
                  if (selectedFacility.includes(item)) {
                  setSelectedFacility(
                  selectedFacility.filter((f) => f !== item)
                );
                } else {
                setSelectedFacility([
                ...selectedFacility,
                item,
                ]);
               }
              }}
              />
              {item}
              </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Tipe Kamar</h3>
            <div className="space-y-2 text-gray-600">
              {["Standar", "Deluxe", "Eksklusif", "All"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input 
                  type="radio"
                  name="tipe" 
                  value={item}
                  checked={selectedRoomType === item}
                  onChange={(e) =>
                    setSelectedRoomType(
                    e.target.value === "All" ? "" : e.target.value
                    )
                  }
                  className="text-green-600 focus:ring-green-500" /> {item}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Harga Maks (Rp)</h3>
            <input
            type="text"
            placeholder="cth: 2000000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ""))}
            className="w-full p-3 border rounded-lg"
            />
          </div>

          <button 
           onClick={() => {
            setSelectedFacility([]);
            setSelectedRoomType("");
           }}
           className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-full transition text-sm font-medium">
          </button>
        </aside>

        {/* LIST KOST */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredKost.map((kost) => (
              <Link
              key={kost.id}
              to={`/detail/${kost.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-slate-100 block"
              >
              <img
              src={kost.img}
              alt={kost.name}
              className="w-full h-52 object-cover"
              />

              <div className="p-4">
              <h3>{kost.name}</h3>
              <p>📍 {kost.loc}</p>
              <span>Rp {kost.price} / bulan</span>
              </div>
              </Link>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}