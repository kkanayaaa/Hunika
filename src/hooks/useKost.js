import { useState, useEffect } from "react";

// Custom hook: ambil data kost dari "API" (kost-data.json)
// dipakai bareng di SearchKost & DetailKost supaya logic fetch-nya gak diulang.
export default function useKost() {
  const [kostList, setKostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    fetch("/kost-data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data kost");
        return res.json();
      })
      .then((data) => {
        if (isMounted) setKostList(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { kostList, loading, error };
}

// Custom hook turunan: ambil 1 kost spesifik berdasarkan id
// (contoh custom hook yang "compose" custom hook lain)
export function useKostDetail(id) {
  const { kostList, loading, error } = useKost();
  const kost = kostList.find((k) => String(k.id) === String(id));
  return { kost, loading, error };
}
