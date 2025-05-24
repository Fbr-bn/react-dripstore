import HeaderMobile from "./components/HeaderMobile";
import tenisCarrossel from "../src/assets/tenis-carrossel.png";
import ornamento from "../src/assets/Ornament.png";

export default function App() {
  return (
    <div>
      <HeaderMobile />
       
      <div className="flex flex-col-reverse justify-center items-center bg-gray-100 gap-4 md:flex md:flex-row md:w-[1440] md:h-[1440] ">
        <div className="  flex flex-col justify-center items-center gap-3">
          
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
        </div>

      </div>
      </div>
    
    
  );
}