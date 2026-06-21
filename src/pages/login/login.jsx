import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // nanti bisa diganti API login
    console.log("Email:", email);
    console.log("Password:", password);

    // redirect manual kalau perlu
    window.location.href = "/search-kost";
  };

  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div className="w-[400px] bg-white p-10 rounded-2xl shadow-lg">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">HUNIKA</h1>
          <p className="text-gray-500 mt-2">Masuk ke akun Anda</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="mt-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>

          <p className="text-center mt-4">
            Belum punya akun?{" "}
            <a href="#" className="text-green-500 font-semibold hover:underline">
              Daftar
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}