import { useContext } from "react";
import { KostContext } from "../context/KostContext"; 

// Hook utama untuk ambil daftar semua kost
export function useKost() {
  const { kosts } = useContext(KostContext); 
  
  //set loading false karena data dari Context sudah siap di memori
  const loading = false; 
  const error = null;

  return { kostList: kosts, loading, error };
}

// Hook turunan untuk ambil 1 kost 
export function useKostDetail(id) {
  const { kostList } = useKost();
  const kost = kostList.find((k) => k.id === parseInt(id));
  
  return { kost, loading: false, error: null };
}