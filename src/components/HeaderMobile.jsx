import logoHeader from "../assets/logo-header.svg";

export default function HeaderMobile() {
  return (
    <header className="absolute p-6  w-full">
      <div className="flex items-center">
        <button id="menu-button" className="mr-4 md:hidden cursor-pointer">
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>

        <nav
          id="menu"
          className="hidden md:flex md:flex-row absolute top-0 mt-12 mr-4 md:top-[30px] md:left-[60px]"
        >
          <ul className="flex flex-col items-start gap-2 md:flex-row">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Especialidades
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Depoimentos
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center flex-1 space-x-4">
          <img
            src={logoHeader}
            alt="Logo"
            className="md:absolute md:top-[42px] md:left-[60px] md:w-[253px] md:h-[44px]"
          />

          <div className="absolute right-2 flex space-x-4 items-center md:top-[42px] md:left-[350px] xl:left-[690px]">
            <div className="p-4 flex flex-row gap-4 md:w-[350px] md:h-[50px] md:bg-gray-50 md:rounded-[5px]">
              <input
                className="text-[1.2rem] focus:outline-none hidden md:block"
                type="text"
                name="name"
                id="name"
                placeholder="Pesquisar produtos..."
              />
              <label htmlFor="name">
                <i className="fas fa-magnifying-glass hidden md:flex md:ml-15 opacity-50 hover:text-[#C92071] cursor-pointer"></i>
              </label>
            </div>

            <a href="#" className="hidden md:block">
              Cadastre-se
            </a>

            <button className="hidden md:block bg-[#C92071] text-white w-[114px] h-[40px] rounded-[5px] cursor-pointer">
              Entrar
            </button>

            <i className="fas fa-cart-shopping text-[#C92071] cursor-pointer"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
