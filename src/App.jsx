import HeaderMobile from "./components/HeaderMobile";
import tenisCarrossel from "../src/assets/tenis-carrossel.png";
import ornamento from "../src/assets/Ornament.png";

import Carrossel from "./components/Carrossel";
import FundoTenis from "./assets/fundoDesign.png";
import FundoCamisa from "./assets/fundoDesignCamisa.png";
import FundoFone from "./assets/fundoDesignFone.png";
import Camisa1 from "./assets/camisa1.svg";
import Camisa2 from "./assets/camisa2.svg";
import Calca1 from "./assets/calca1.svg";
import Calca2 from "./assets/calca2.svg";
import Calca3 from "./assets/calca3.svg";
import Calca4 from "./assets/calca4.svg";
import Fone1 from "./assets/fone1.svg";
import Fone2 from "./assets/fone2.svg";
import Tenis1 from "./assets/tenis1.svg";
import Tenis2 from "./assets/tenis2.svg";
import TenisProdutos from "./assets/tenisProdutos.png";

export default function App() {
  return (
    <div>
      <HeaderMobile />
       <Carrossel/>
      <div className="flex flex-col-reverse justify-center items-center bg-gray-100 gap-4 md:flex md:flex-row md:w-[1440] md:h-[1440] ">
        {/* <div className="  flex flex-col justify-center items-center gap-3">
          
            <p className="text-[#C92071]">Melhores ofertas personalizadas</p>
            <h2 className="font-semibold text-4xl">
              Queima de <br /> estoque Nike
            </h2>
            <h3 className="flex text-center p-2">
              Consequat culpa exercitation mollit nisi <br />
              excepteur do do tempor laboris eiusmod irure <br />
              consectetur
            </h3>
            
              <div>
                <button className="mb-15 text-white bg-[#C92071] bordeR-[#C92071]
                 cursor-pointer w-[330px] h-[48px]
                  uppercase rounded-[8px] md:w-[220px]">Ver ofertas
                </button>
              </div>
          
        




        </div>
        <div className=" flex justify-between items-cente">
          <div className="">
            <img src={tenisCarrossel} alt="Tênis Nike" className=" w-80 rotate-340 md:w-[500px] "/>
            </div>
          <div>
            <img src={ornamento} alt="imagem Ornamento" className="absolute top-30 md:right-5 md:top-55 w-30  " />
          </div>         
        </div> */}

      </div>

      <div
      className="bg-[#f9f9ff] text-[#474747] flex justify-center items-center font-sans"
    >
      <div className=" px-4 p-[15rem] sm:px-8  w-full">
        <h2 className="text-base font-bold mb-6 text-[#474747]">
          Coleções em Destaque
        </h2>
        <div
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-row lg:flex-nowrap  justify-center"
        >
          
          <div className=" relative w-full sm:w-[20rem] md:w-[25.3125rem]">
            <img
              src={FundoCamisa}
              alt="Background 1"
              className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
            />
            <div
              className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5"
            >
              <div className="flex flex-col ml-4 justify-center">
                <span
                  className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2"
                  >30% OFF</span
                >
                <h3
                  className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans"
                >
                  Novo drop<br />Supreme
                </h3>
                <button
                  className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] h-[3rem] 
                  rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative w-full sm:w-[20rem] md:w-[25.3125rem]">
            <img
              src={FundoTenis}
              alt="Background 2"
              className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
            />
            <div
              className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5"
            >
              <div className="flex flex-col ml-4 justify-center">
                <span
                  className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2"
                  >30% OFF</span
                >
                <h3
                  className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans"
                >
                  Coleção<br />Adidas
                </h3>
                <button
                  className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] h-[3rem] 
                  rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative w-full sm:w-[20rem] md:w-[25.3125rem]">
            <img
              src={FundoFone}
              alt="Background 3"
              className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
            />
            <div
              className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5"
            >
              <div className="flex flex-col ml-4 justify-center">
                <span
                  className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2"
                  >30% OFF</span
                >
                <h3
                  className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans"
                >
                  Novo<br />Beats Bass
                </h3>
                <button
                  className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] 
                  h-[3rem] rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
          <h2 className="text-center text-xl font-bold mb-6 text-[#474747] font-sans">
            Coleções em Destaque
          </h2>
        <div className=" flex items-center justify-center p-6">
          <div className="flex flex-row gap-4 sm:flex-row sm:gap-8 justify-center">
            
            <div>
              <div className=" relative w-20 h-20 sm:w-24 sm:h-24 group">
                <button
                  className=" w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={Camisa1}
                    alt="Camiseta 1"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 object-contain
                     left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     transition-opacity duration-500 ease-in-out 
                     group-hover:opacity-0"
                  />
                  <img
                    src={Camisa2}
                    alt="Camiseta 2"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </button>
              </div>
              <p
                className="text-center mt-2 text-sm sm:text-base font-bold
                 text-[#474747] font-sans"
              >
                Camiseta
              </p>
            </div>
            
            <div >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                <button
                  className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={Calca1}
                    alt="Calça 1"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={Calca2}
                    alt="Calça 2"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 transition-opacity duration-500 
                    ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </button>
              </div>
              <p
                className="text-center mt-2 text-sm sm:text-base 
                font-bold text-[#474747] font-sans"
              >
                Calça
              </p>
            </div>
            
            <div >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                <button
                  className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={Calca3}
                    alt="Jaqueta 1"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 transition-opacity duration-500 
                    ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={Calca4}
                    alt="Jaqueta 2"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2
                     -translate-y-1/2 transition-opacity duration-500 
                     ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </button>
              </div>
              <p
                className="text-center mt-2 text-sm sm:text-base font-bold 
                text-[#474747] font-sans"
              >
                Jaqueta
              </p>
            </div>
            
            <div >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                <button
                  className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={Fone1}
                    alt="Acessório 1"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 
                    sm:h-14 object-contain left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 transition-opacity
                     duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={Fone2}
                    alt="Acessório 2"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 transition-opacity duration-500 
                    ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </button>
              </div>
              <p
                className="text-center mt-2 text-sm sm:text-base
                 font-bold text-[#474747] font-sans"
              >
                Acessório
              </p>
            </div>
           
            <div >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                <button
                  className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={Tenis1}
                    alt="Tênis"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 transition-opacity duration-500
                     ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={Tenis2}
                    alt="Tênis"
                    className="cursor-pointer absolute w-12 h-12 sm:w-14 sm:h-14 
                    object-contain left-1/2 top-1/2 -translate-x-1/2
                     -translate-y-1/2 transition-opacity duration-500 
                     ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </button>
              </div>
              <p
                className="text-center mt-2 text-sm sm:text-base 
                font-bold text-[#474747] font-sans"
              >
                Tênis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

           
           
           <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Produtos em alta</h2>
        <a href="#" className="text-sm text-pink-500 hover:underline"
          >Ver todos →</a
        >
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
       

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="relative">
            <span
              className="absolute top-2 left-2 bg-lime-200 text-lime-700 text-xs font-bold px-2 py-1 rounded-full"
              >30% OFF</span
            >
            <img
              src={TenisProdutos}
              alt="Tênis K-Swiss V8"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="relative">
            <span
              className="absolute top-2 left-2 bg-lime-200 text-lime-700 text-xs font-bold px-2 py-1 rounded-full"
              >30% OFF</span
            >
            <img
              src={TenisProdutos}
              alt="Tênis K-Swiss V8"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>

        

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={TenisProdutos}
            alt="Tênis K-Swiss V8"
            className="w-full h-auto object-contain"
          />
          <div className="mt-4 text-sm text-gray-500">Tênis</div>
          <div className="text-base font-medium text-gray-800">
            K-Swiss V8 - Masculino
          </div>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">$200</span>
            <span className="font-bold text-gray-900">$100</span>
          </div>
        </div>
      </div>
    </div>



      </div>
    
    
  );
}