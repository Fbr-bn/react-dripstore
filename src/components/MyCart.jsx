import TenisCarrinho from "../assets/tenis-finalizar-compras.png"


export default function Nav() {
  

  return (
    <div className="z-50" >
       
      
        <div className="absolute bg-white w-[315.43px] h-[454px] top-[50px] left-[-280px] p-[30px] gap-[20px] md:left-[500px]">
            <h2 className="text-xl font-semibold mb-2">Meu Carrinho</h2>
            <div className="border-t border-gray-300 mb-4"></div>
            
            {/* Produtos */}
            <div className="flex space-x-4 mb-4">
                <img src={TenisCarrinho} alt="Tênis Nike" className=" h-10 object-cover" />
                <div>
                <p className="font-semibold">Tênis Nike Revolution<br/>6 Next Nature Masculino</p>
                <p className="font-bold">R$ 219,00</p>
                </div>
            </div>
            <div className="flex space-x-4 mb-4">
                <img src={TenisCarrinho} alt="Tênis Nike" className=" h-10 object-cover" />
                <div>
                <p className="font-semibold">Tênis Nike Revolution<br/>6 Next Nature Masculino</p>
                <p className=" font-bold">R$ 219,00</p>
                </div>
            </div>

            <div className="border-t border-gray-300 mb-4"></div>
            <div className="flex justify-between font-semibold mb-4">
                <span className="text-gray-700">Valor total:</span>
                <span className="text-[#C92071]">R$ 219,00</span>
            </div>
            

            {/* Botão */}
             <div className="flex flex-row justify-center items-center gap-7">
                 <a href="#" className=" hover:border-[#C92071]
                  text-[#474747] hover:text-[#C92071]  cursor-pointer underline ">
                    Esvaziar
                  </a>
                             <button className="w-[150px] h-[40px]  bg-[#C92071] text-white py-2 rounded-[5px] font-semibold hover:border-b-2 hover:bg-pink-700 cursor-pointer">
                    Ver Carrinho
                             </button>
             </div>
        </div>
        
      

     
      
    </div>
  );
}