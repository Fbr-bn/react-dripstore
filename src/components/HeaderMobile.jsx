import { useState } from "react";
import logoHeader from "../assets/logo-header.svg";
import MenuNav from "./Nav"

export default function HeaderMobile() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenOrCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
     <header className=" drop-shadow-md p-6  md:h-[160px]">
  <div className="flex items-center">
    {/* Botão do menu */}
    <div className="relative">
      <button id="menu-button" onClick={handleOpenOrCloseMenu} className=" relative mr-4 md:hidden cursor-pointer">
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
      </button>
      {isMenuOpen && <MenuNav/>}
    </div>

    {/* Menu de navegação */}
    <nav
      id="menu"
      className="hidden md:flex md:flex-row md:mt-30 md:top-[px] md:left-[60px] absolute top-0  mt-12 mr-4"
    >
      <ul className="flex flex-col items-start gap-2 md:flex-row">
        <li>
          <a href="#" className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]">
            Início
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]">
            Especialidades
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]">
            Quem Somos
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]">
            Depoimentos
          </a>
        </li>
      </ul>
    </nav>

    {/* Área central com logo e opções */}
    <div className="flex items-center justify-center flex-1 space-x-4 ">
      {/* Logo */}
      <img
        src={logoHeader}
        alt="Logo"
        className=" md:absolute md:top-[42px] md:left-[60px] md:w-[253px] md:h-[44px]"
      />

      {/* Área de busca e ações */}
      <div className="absolute right-5 flex items-center space-x-4 md:top-[42px] md:left-[350px] xl:left-[450px] ">
        {/* Campo de busca */}
        <div className="p-4 flex gap-4 w-full xl:w-[550px] md:h-[50px] md:bg-gray-50 md:rounded-[5px] ">
          <input
            className="text-[1.2rem] focus:outline-none hidden md:block w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Pesquisar produtos..."
          />
          {/* Ícone de busca */}
          <label htmlFor="name">
            <i className="fas fa-magnifying-glass hidden md:flex md:ml-15 opacity-50 hover:text-[#C92071] cursor-pointer"></i>
          </label>
        </div>
        {/* Links de cadastro */}
        <a href="#" className="hidden md:block hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071] ">
          Cadastre-se
        </a>
        {/* Botão de login */}
        <button className="hidden md:block bg-[#C92071] text-white w-[114px] h-[40px] rounded-[5px] cursor-pointer">
          Entrar
        </button>
        {/* Ícone de carrinho */}
        <i className="fas fa-cart-shopping text-[#C92071] cursor-pointer"></i>
      </div>
    </div>
  </div>
</header>
  );
}
   