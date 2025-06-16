import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoFacebook from "../assets/facebook.login.png";
import LogoHeader from "../assets/logo-header.svg";
import LogoEmail from "../assets/gmail.png";
import TenisLogin4 from "../assets/tenislogin4.png";
import Footer from "../components/Footer";

export default function AccountLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert("Login realizado com sucesso!");
        navigate("/"); // Redireciona para a HomePage
      } else {
        alert("Email ou senha inválidos.");
      }
    } catch (err) {
      alert("Erro de conexão.");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <header className="flex w-full items-center justify-center p-5 xl:p-10">
          <div className="flex flex-1 items-center justify-center space-x-4">
            <Link to="/">
              <img
                src={LogoHeader}
                alt="Digital Store Logo"
                className="w-50 cursor-pointer xl:h-[44px] xl:w-[253px]"
              />
            </Link>
          </div>
        </header>

        <div className="w-full bg-gradient-to-bl from-[#b5b6f2] to-[#efefff] py-10 md:py-20 pb-20 md:pb-40">
          <div className="flex items-center justify-center">
            <div className="flex h-auto w-[315px] flex-col gap-5 rounded-lg bg-white p-[30px] shadow-xl md:h-auto md:w-[450px]">
              <div>
                <h2 className="text-center text-2xl">Acessar sua conta</h2>
                <h3 className="mb-4 text-center">
                  Novo cliente?
                  <Link
                    to="/create"
                    className="cursor-pointer text-[#C92071] underline hover:text-pink-700"
                  >
                    {" "}
                    registre-se aqui
                  </Link>
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <p>Login</p>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Insira seu login ou email"
                    className="w-full rounded border border-gray-200 bg-gray-50 p-2 opacity-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <p className="mt-2">Senha</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Insira sua senha"
                    className="w-full rounded border border-gray-200 bg-gray-50 p-2 opacity-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <a href="#" className="cursor-pointer underline hover:text-[#C92071]">
                  Esqueci minha senha
                </a>
                <div>
                  <button
                    type="submit"
                    className="h-[40px] w-full cursor-pointer rounded-lg border border-[#C92071] bg-[#C92071] text-white"
                  >
                    Acessar conta
                  </button>
                </div>
              </form>
              <h3 className="flex items-center justify-center">
                Ou faça login com
              </h3>
              <div className="flex h-auto items-center justify-center gap-4">
                <img
                  src={LogoEmail}
                  alt="Login com Gmail"
                  className="cursor-pointer"
                />
                <img
                  src={LogoFacebook}
                  alt="Login com Facebook"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={TenisLogin4}
                alt="Imagem de um tênis"
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}