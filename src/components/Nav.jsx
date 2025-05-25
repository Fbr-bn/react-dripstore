export default function Nav() {
  const listNav = ["Home", "Produtos", "Categoria", "Meus Pedidos"];

  return (
    <div className="flex flex-row shadow-lg fixed inset-0 z-index md:hidden top-[5.7rem]  w-full h-[702px]">
       
      <div className="bg-white p-[1rem] z-50">
        <p>Páginas</p>
        <div>
        {listNav.map((item, index) => (
          <div key={index}>
            <button className=" hover:border-b-2 hover:border-[#C92071] text-[#474747]
             hover:text-[#C92071] cursor-pointer">{item}</button>
          </div>
        ))}
          <div className="flex flex-col mt-[20rem] justify-center items-center">
            <button className=" w-[248px] bg-[#C92071] text-white h-[40px] rounded-[5px] cursor-pointer">
                Entrar
              </button>
              <a href="#" className="  hover:border-[#C92071] 
              text-[#474747] hover:text-[#C92071]  cursor-pointer underline">
                Cadastre-se
              </a>
          </div>
      </div>
      

    </div> 
      <div className="bg-[rgba(0,0,0,0.6)] flex-1 p-4 min-h-[100px]">
        
      </div>
    </div>
  );
}