import { createContext, useState, useEffect } from "react";
import { getKostData, saveKostData } from "../utils/dataHelper";

export const KostContext = createContext();

export const KostProvider = ({ children }) => {
  const [kosts, setKosts] = useState([]);

  useEffect(() => {
    // Ambil data awal dari JSON
    fetch('/kost-data.json')
      .then(res => res.json())
      .then(data => {
        // Gabungkan dengan data hasil edit/tambah di local storage
        const combined = getKostData(data);
        setKosts(combined);
      });
  }, []);

  // Fungsi untuk update data
  const updateKost = (newData) => {
    setKosts(newData);
    saveKostData(newData);
  };

  return (
    <KostContext.Provider value={{ kosts, updateKost }}>
      {children}
    </KostContext.Provider>
  );
};