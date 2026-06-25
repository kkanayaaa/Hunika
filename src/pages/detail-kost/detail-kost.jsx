import { useParams } from "react-router-dom";
import { useState } from "react";

export default function DetailKost() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  
  const kostData = {
    1: {
      name: "Kost Melati Residence",
      price: "1.200.000",
      location: "Jakarta Selatan - Kebayoran Baru",
      image: "/images-hunika/1.jpg",
      rating: 4.5,
      description:
        "Kost nyaman dan bersih di kawasan strategis Kebayoran Baru. Dekat dengan pusat perbelanjaan, transportasi umum, dan berbagai fasilitas kota.",
      facilities: ["AC", "WiFi", "Parkir"],
      
    },
    2: {
      name: "Kost Bintaro Indah",
      price: "1.500.000",
      location: "Jakarta Selatan - Bintaro",
      image: "/images-hunika/2.jpg",
      rating: 4.7,
      description:
        "Kost modern dengan lingkungan nyaman dan akses mudah ke berbagai fasilitas umum.",
      facilities: ["AC", "WiFi", "Parkir"],
    },
    3: {
      name: "Kost Mawar Kemang",
      price: "1.100.000",
      location: "Jakarta Selatan - Kemang",
      image: "/images-hunika/3.jpg",
      rating: 4.5,
      description:
        "Kost dengan lingkungan nyaman dan lahan parkir yang lumayan luas.",
      facilities: ["AC", "WiFi"],
    },
    4: {
      name: "Kost Casabella",
      price: "2.0000.000",
      location: "Jakarta Selatan - Pondok Indah",
      image: "/images-hunika/4.jpg",
      rating: 4.8,
      description:
        "Kost modern dengan lingkungan nyaman dan fasilitas yang lengkap",
      facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"],
    },
    5: {
      name: "Kost Green",
      price: "900.000",
      location: "Jakarta Selatan - Cipete",
      image: "/images-hunika/5.jpg",
      rating: 4.4,
      description:
        "Kost nyaman dan akses mudah ke berbagai fasilitas umum.",
      facilities: ["AC"],
    },
    6: {
      name: "Kost Pesanggrahan Indah",
      price: "1.800.000",
      location: "Jakarta Selatan - Pesanggrahan",
      image: "/images-hunika/6.jpg",
      rating: 4.9,
      description:
        "Kost modern dengan lingkungan nyaman dan akses mudah ke berbagai fasilitas umum.",
      facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"],
    },
    7: {
      name: "Kost Tebet Hijau",
      price: "1.600.000",
      location: "Jakarta Selatan - Tebet",
      image: "/images-hunika/7.jpg",
      rating: 4.7,
      description:
        "Kamar minimalis full furnished, internet cepat, cocok kerja remote. Langsung tempati sekarang!",
      facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"],
    },
    8: {
      name: "Kost Mama",
      price: "1.000.000",
      location: "Jakarta Selatan - Mampang",
      image: "/images-hunika/8.jpg",
      rating: 4.4,
      description:
        "Kost syariah dekat kantor, pembatasan tamu, suasa tenang & non-rokok",
      facilities: ["AC", "Parkir"],
    },
    9: {
      name: "Kost Harmonika",
      price: "1.300.000",
      location: "Jakarta Selatan - Fatmawati",
      image: "/images-hunika/9.jpg",
      rating: 4.5,
      description:
        "Kost modern dengan lingkungan nyaman dan akses mudah ke berbagai fasilitas umum.",
      facilities: ["AC", "Kamar Mandi Dalam"],
    },
    10: {
      name: "Kost Senara",
      price: "1.200.000",
      location: "Jakarta Selatan - Senopati",
      image: "/images-hunika/10.jpg",
      rating: 4.8,
      description:
        "Kost nyaman & bersih, AC, lemari, dekat kampus/stasiun — biaya all-in, aman 24 jam",
      facilities: ["AC", "WiFi", "Parkir"],
    },
    11: {
      name: "Kost Gandaria City",
      price: "2.400.000",
      location: "Jakarta Selatan - Gandaria",
      image: "/images-hunika/11.jpg",
      rating: 5,
      description:
        "Kamar eksklusif dengan balkon, private bathroom, kulkas, TV,layanan laundry, dan Pantry.",
      facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"],
    },
    12: {
      name: "Kost Setia",
      price: "2.300.000",
      location: "Jakarta Selatan - Setiabudi",
      image: "/images-hunika/12.jpg",
      rating: 5,
      description:
        "Kamar siap huni (full furnished) dengan fasilitas lengkap, area komunal yang nyaman, dan lingkungan yang tenang.",
      facilities: ["AC", "WiFi", "Parkir", "Kamar Mandi Dalam"],
    },
  };

  const kost = kostData[id];
  if (!kost) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Kost tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto flex gap-6">
        
        {/* KIRI */}
        <div className="flex-1">
          
          {/* FOTO */}
          <div className="bg-white rounded-xl overflow-hidden shadow">
            <img
              src={kost.image}
              alt={kost.name}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* INFO KOST */}
          <div className="bg-white rounded-xl shadow mt-5 p-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">
                  {kost.name}
                </h1>

                <p className="text-gray-500 mt-2">
                  📍 {kost.location}
                </p>
              </div>

              <button className="text-red-500 text-2xl">
                ❤️
              </button>
            </div>

            <div className="mt-4">
              ⭐ {kost.rating}
            </div>

            <p className="mt-4 text-gray-600">
              {kost.description}
            </p>
          </div>

          {/* FASILITAS */}
          <div className="bg-white rounded-xl shadow mt-6 p-4">
            <h2 className="text-xl font-bold mb-4">
              Fasilitas
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {kost.facilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-lg p-3"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          {/* TIPE KAMAR */}
          <div className="bg-white rounded-xl shadow mt-6 p-6 px-5">
            <h2 className="text-xl font-bold mb-4">
              Tipe Kamar
            </h2>

            <div className="space-y-3">

              <div className="bg-green-100/50 rounded-lg flex justify-between items-center pb-3">
                <div>
                  <h3 className="font-semibold text-lg px-4 py-3">
                    Standar
                  </h3>
                  <p className="text-sm text-gray-500 px-4">
                    Kapasitas 1 Orang
                  </p>
                </div>

                <div className="text-right">
                  <div className="font-bold text-green-600 px-4 py-3">
                    Rp 1.200.000
                  </div>

                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded px-7">
                    Tersedia
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ULASAN */}
          <div className="bg-white rounded-xl shadow mt-5 p-4">
            <h2 className="text-xl font-bold">
              Ulasan & Rating
            </h2>

          <div className="bg-gray-50 p-4 rounded-lg mb-5">
            <h3 className="font-semibold mb-2">Tambah Ulasan</h3>

            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded-lg text-sm mb-2"
            placeholder="Masukkan nama kamu..."
            />

            {/* Bintang */}
            <div className="flex gap-1 text-2xl mb-2 cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            onClick={() => setRatingInput(star)}
            className={star <= ratingInput ? "text-yellow-500" : "text-gray-300"}
            >
            ★
            </span>
            ))}

            </div>
            {/* Comment */}
            <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border p-2 rounded-lg text-sm"
            placeholder="Tulis komentar..."
            />

            <button
            onClick={() => {    
            if (!name || !ratingInput || !comment) return;

            setReviews((prev) => [
            ...prev,
            {
            name: name,
            rating: ratingInput,
            comment,
            },
            ]);

            setName("");
            setRatingInput(0);
            setComment("");
            }}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
            Kirim Ulasan
            </button>
          </div>

            <div className="space-y-4">
              {reviews.length === 0 ? (
              <p className="text-gray-400 text-sm">
                Belum ada ulasan
              </p>
              ) : (
               reviews.map((r, i) => (
               <div key={i} className="bg-green-50 p-3 rounded-lg mb-5">
               <h4 className="font-semibold">{r.name}</h4>

               <p className="text-yellow-500">
                {"★".repeat(r.rating)}
               </p>

               <p className="text-gray-600">
               {r.comment}
               </p>
               </div>
               ))
               )}
            </div>
          </div>

        </div>

        {/* KANAN */}
        <div className="w-[300px]">  

          <div className="bg-white rounded-xl shadow p-6 sticky top-5">
            <div className="bg-green-100/50 rounded-xl p-4 mb-4 backdrop-blur-sm">

            <div className="text-center text-5xl font-bold text-emerald-600">
                {kost.rating}
            </div>

            <div className="text-center text-3xl text-yellow-500">
                ★★★★★
            </div>

            <p className="text-sm text-center text-gray-600">
                28 Ulasan
            </p>
            </div>
            
            <div className="text-3xl text-center font-bold text-emerald-600">
              Rp {kost.price}
            </div>

            <p className="text-center text-gray-600 mb-4">
              per bulan
            </p>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Booking Sekarang
            </button>

            <div className="mt-5 space-y-3 text-sm">
              <p>🏠 Pemilik: Bu Sari</p>
              <p>🛏️ Kamar tersedia: 2</p>
              <p>📅 Ditambahkan: 2024-01-15</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}