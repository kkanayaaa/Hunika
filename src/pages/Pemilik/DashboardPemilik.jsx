import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import CardWrapper from '../../components/CardWrapper';
import Button from '../../components/Button';
import TambahKos from './TambahKos';

function DashboardPemilik({setPage}) {
  // state untuk kontrol buka/tutup Modal Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // state untuk simpan data kos yang sedang dipilih untuk diedit
  const [selectedKos, setSelectedKos] = useState({
    nama: '',
    harga: '',
    lokasi: ''
  });

  
  const listKos = [
    { id: 1, nama: 'Kos Melati', lokasi: 'Kemang, Jakarta Selatan', harga: 1200000, status: 'Tersedia', statusType: 'available' },
    { id: 2, nama: 'Kos Huni', lokasi: 'Pondok Indah, Jakarta Selatan', harga: 2500000, status: 'Tersedia', statusType: 'available' },
    { id: 3, nama: 'Kos Nestia', lokasi: 'Kemang, Jakarta Selatan', harga: 1000000, status: 'Tersisa 1 Kamar', statusType: 'warning' },
  ];

  
  
  const openEditModal = (kos) => {
    setSelectedKos({
      nama: kos.nama,
      harga: kos.harga,
      lokasi: kos.lokasi
    });
    setIsModalOpen(true);
  };

  
  const closeModalEdit = () => {
    setIsModalOpen(false);
  };

  
  const handleSaveEdit = (e) => {
    e.preventDefault();
    alert(`Data ${selectedKos.nama} berhasil diperbarui!`);
    setIsModalOpen(false);
  };

  return (
    <>
      
      <Navbar isLoggedIn={true} role="pemilik" />

      <main class="max-w-6xl mx-auto px-6 py-10">
        
        {/* HEADER AREA */}
        <div class="flex justify-between items-center mb-8">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
            <p class="text-sm text-gray-500 mt-1">Kelola Kos</p>
          </div>

        
          <Button 
          onClick={() => setPage('TambahKos')}
          variant="emerald">
            <span class="font-bold">+</span> Tambah Kos
          </Button>
        </div>

        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <CardWrapper>
            <div class="p-1">
              <span class="text-3xl font-bold text-emerald-700 block">3</span>
              <span class="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1 block">Total Kos</span>
            </div>
          </CardWrapper>
          
          <CardWrapper>
            <div class="p-1">
              <span class="text-3xl font-bold text-blue-700 block">2</span>
              <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1 block">Tersedia</span>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div class="p-1">
              <span class="text-3xl font-bold text-pink-700 block">0</span>
              <span class="text-xs font-semibold text-pink-600 uppercase tracking-wider mt-1 block">Penuh</span>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div class="p-1">
              <span class="text-3xl font-bold text-amber-700 block">10</span>
              <span class="text-xs font-semibold text-amber-600 uppercase tracking-wider mt-1 block">Total Review</span>
            </div>
          </CardWrapper>
        </div>

        
        <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {/* Header Tabel */}
          <div class="grid grid-cols-12 px-6 py-4 bg-gray-50/70 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <div class="col-span-6">Kos</div>
            <div class="col-span-2">Harga</div>
            <div class="col-span-2">Status</div>
            <div class="col-span-2 text-center">Aksi</div>
          </div>

          
          {listKos.map((kos) => (
            <div key={kos.id} class="grid grid-cols-12 px-6 py-5 border-b border-gray-100 items-center hover:bg-gray-50/50 transition">
              <div class="col-span-6">
                <h3 class="font-semibold text-gray-900 text-sm">{kos.nama}</h3>
                <p class="text-xs text-gray-400 mt-1">{kos.lokasi}</p>
              </div>

              <div class="col-span-2 font-semibold text-emerald-600 text-sm">
                Rp. {kos.harga.toLocaleString('id-ID')}
              </div>

              <div class="col-span-2">
                <span class={`px-2.5 py-1 text-xs font-medium border rounded-full ${
                  kos.statusType === 'available' 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                    : 'bg-amber-50 text-amber-900 border-amber-100'
                }`}>
                  {kos.status}
                </span>
              </div>

              
              <div class="col-span-2 flex justify-center gap-2">
                <Button variant="blue" onClick={() => openEditModal(kos)}>
                  Edit
                </Button>
                <Button variant="pink" onClick={() => alert(`Hapus ${kos.nama}?`)}>
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- modal-edit ELEMENT--- */}
      {isModalOpen && (
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div class="bg-white p-6 rounded-2xl border border-gray-100 w-full max-w-md shadow-xl">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Edit Data Kos</h3>
            
            <form onSubmit={handleSaveEdit} id="formEditKos" class="space-y-4">
              <div>
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Nama Kos</label>
                <input 
                  type="text" 
                  value={selectedKos.nama}
                  onChange={(e) => setSelectedKos({...selectedKos, nama: e.target.value})}
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Harga per Bulan</label>
                <input 
                  type="number" 
                  value={selectedKos.harga}
                  onChange={(e) => setSelectedKos({...selectedKos, harga: e.target.value})}
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Lokasi</label>
                <input 
                  type="text" 
                  value={selectedKos.lokasi}
                  onChange={(e) => setSelectedKos({...selectedKos, lokasi: e.target.value})}
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              
              <div class="flex justify-end gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={closeModalEdit}
                  class="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  class="px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardPemilik;