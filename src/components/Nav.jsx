export default function Nav() {
  const listNav = ["Home", "Produtos", "Categoria", "Meus Pedidos"];

  return (
    <div className="shadow-lg fixed inset-0 md:hidden bg-white  p-[1rem] top-[5.7rem]  w-[308px] h-[702px]">
       
      <p>Páginas</p>
      <div>
      {listNav.map((item, index) => (
        <div key={index}>
          <button className=" hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071] cursor-pointer">{item}</button>
        </div>
      ))}
        <div className="flex flex-col mt-[20rem] justify-center items-center">
          <button className=" w-[248px] bg-[#C92071] text-white h-[40px] rounded-[5px] cursor-pointer">
              Entrar
            </button>
            <a href="#" className=" hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071] cursor-pointer ">
              Cadastre-se
            </a>
        </div>
      <div>
      </div>
     

    </div> 
    </div>
  );
}