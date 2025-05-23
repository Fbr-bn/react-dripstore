export default function Nav() {
  const listNav = ["Home", "Produtos", "Categoria", "Meus Pedidos"];

  return (
    <div className="bg-white absolute top-6 left-6 w-[500px] h-[500px]">
       
      <p>Páginas</p>
      <div >
      {listNav.map((item, index) => (
        <div key={index}>
          <button>{item}</button>
        </div>
      ))}

      <button className="hidden md:block bg-[#C92071] text-white w-[114px] h-[40px] rounded-[5px] cursor-pointer">
          Entrar
        </button>
        <a href="#" className="hidden md:block hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071] ">
          Cadastre-se
        </a>
    </div>
    </div>
  );
}