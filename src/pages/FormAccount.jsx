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
    <div className="bg-linear-to-bl from-[#b5b6f2] to-[#efefff]">
      <header className=" bg-white  flex justify-center items-cente p-5 xl:p-10 mb-10 xl:flex xl:justify-start ">
        <div className="flex items-center justify-center flex-1 space-x-4">
          <img
            src={LogoHeader}
            alt=""
            className="w-50 xl:absolute xl:top-[px] xl:left-[70px] xl:w-[253px] xl:h-[44px]"
          />
        </div>
      </header>
      <div className="flex justify-center items-cente m-5 xl:ml-[-825px]">
        <h2 className=" font-bold text-3xl  ">Criar Conta</h2>
      </div>
      <form
        className="flex justify-center items-cente"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <div className="bg-white w-[350px] h-[700px] space-y-6 md:w-[700px] xl:w-[1000px]">
            <div className="pt-5">
              <p className="ml-6">Informações Pessoais</p>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>

            <p className="ml-6">Nome Completo </p>
            <div className="flex flex-col items-center ">
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Insira seu nome"
                className=" border-2 border-gray-50 focus:border-[#C92071]
                     outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">CPF </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
                placeholder="Insira seu CPF"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">E-mail </p>
            <div className="flex flex-col items-center">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Insira seu email"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>
            <p className="ml-6">Senha</p>
            <div className="flex flex-col items-center">
              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Insira sua senha"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                 outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px] xl:w-[950px]"
                required
              />
            </div>

            <p className="ml-6">Celular</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="celular"
                value={form.celular}
                onChange={handleChange}
                placeholder="Insira seu celular"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>
          </div>

          <div className="bg-white w-[350px] h-[680px] space-y-6 md:w-[700px] xl:w-[1000px]">
            <div className="pt-5">
              <p className="ml-6">Informações de Entrega</p>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>

            <p className="ml-6">Endereço </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
                placeholder="Insira seu endereço"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Bairro</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="bairro"
                value={form.bairro}
                onChange={handleChange}
                placeholder="Insira seu bairro"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Cidade </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                placeholder="Insira sua cidade"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">CEP</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={handleChange}
                placeholder="Insira seu cep"
                className="border-2 border-gray-50 focus:border-[#C92071] 
                    outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Complemento</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="complemento"
                value={form.complemento}
                onChange={handleChange}
                placeholder="Insira complemento"
                className="border-2 border-gray-50 focus:border-[#C92071]
                     outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[60px] ">
          <div className="w-[350px] h-[48px] gap-[30px] md:w-[700px]  xl:w-[1000px]">
            <label>
              <input
                type="checkbox"
                name="ofertas"
                checked={form.ofertas}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <span>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode variar de acordo com a
                interação do cliente.
              </span>
            </label>
          </div>
          <div className="mb-[30px]">
            <button
              type="submit"
              className="text-white bg-[#C92071] bordeR-[#C92071]
            cursor-pointer w-[350px]  h-[48px] rounded-lg md:w-[700px]  xl:w-[950px]"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
