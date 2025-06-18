import LogoHeader from "../assets/logo-header.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Adicione esta linha

export default function FormAccount() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "", // Adicionado campo senha
    celular: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    ofertas: false,
  });

  const navigate = useNavigate(); // Adicione esta linha

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert("Conta criada com sucesso!");
        setForm({
          nome: "",
          cpf: "",
          email: "",
          senha: "", // Limpa o campo senha também
          celular: "",
          endereco: "",
          bairro: "",
          cidade: "",
          cep: "",
          complemento: "",
          ofertas: false,
        });
        navigate("/"); // Redireciona para a HomePage
      } else {
        alert("Erro ao criar conta.");
      }
    } catch (err) {
      alert("Erro de conexão.");
    }
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-bl from-[#b5b6f2] to-[#efefff]">
      <header className="bg-white flex justify-center items-center p-5 xl:p-10 mb-10">
        <div className="flex items-center justify-center flex-1 space-x-4">
          <img
            src={LogoHeader}
            alt=""
            className="w-50 xl:absolute xl:top-[px] xl:left-[70px] xl:w-[253px] xl:h-[44px]"
          />
        </div>
      </header>
      <div className="flex justify-center items-center m-5 xl:ml-[-825px]">
        <h2 className=" font-bold text-3xl  ">Criar Conta</h2>
      </div>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-3xl bg-white/90 rounded-lg shadow-lg p-6 md:p-12 flex flex-col gap-8">
          {/* Informações Pessoais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Insira seu nome"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  placeholder="Insira seu CPF"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Insira seu email"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                  placeholder="Insira sua senha"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Celular</label>
                <input
                  type="text"
                  name="celular"
                  value={form.celular}
                  onChange={handleChange}
                  placeholder="Insira seu celular"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
            </div>
          </div>
          {/* Informações de Entrega */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Informações de Entrega
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Endereço</label>
                <input
                  type="text"
                  name="endereco"
                  value={form.endereco}
                  onChange={handleChange}
                  placeholder="Insira seu endereço"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Bairro</label>
                <input
                  type="text"
                  name="bairro"
                  value={form.bairro}
                  onChange={handleChange}
                  placeholder="Insira seu bairro"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  placeholder="Insira sua cidade"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">CEP</label>
                <input
                  type="text"
                  name="cep"
                  value={form.cep}
                  onChange={handleChange}
                  placeholder="Insira seu cep"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">Complemento</label>
                <input
                  type="text"
                  name="complemento"
                  value={form.complemento}
                  onChange={handleChange}
                  placeholder="Insira complemento"
                  className="w-full border-2 border-gray-50 focus:border-[#C92071] outline-none bg-gray-50 p-2 rounded"
                />
              </div>
            </div>
          </div>
          {/* Checkbox e botão */}
          <div className="flex flex-col gap-6">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="ofertas"
                checked={form.ofertas}
                onChange={handleChange}
                className="cursor-pointer mt-1"
              />
              <span>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode variar de acordo com a
                interação do cliente.
              </span>
            </label>
            <button
              type="submit"
              className="text-white bg-[#C92071] hover:bg-pink-700 cursor-pointer w-full h-[48px] rounded-lg font-semibold text-lg"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
