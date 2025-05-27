import LogoHeader from "../assets/logo-header.svg";
import LogoEmail from "../assets/gmail.png"
import LogoFacebook from "../assets/facebook.login.png"
import TenisLogin4 from "../assets/tenislogin4.png"

export default function AccountLogin(){
    return(
        <div className="  flex flex-col items-center justify-center">
            <header className="bg-white w-full flex justify-center items-cente p-5 xl:p-10 xl:flex xl:justify-start xl:h-[]">
        <div className="flex items-center justify-center flex-1 space-x-4">
            <img src={LogoHeader} alt="" className="w-50 xl:absolu
            te xl:top-[px] xl:left-[70px] xl:w-[253px] xl:h-[44px]"/>
        </div>
    </header>
    <div className=" bg-linear-to-bl from-[#b5b6f2] to-[#efefff] w-full">
        <div className="flex items-center justify-center ">
            <div className=" bg-white flex flex-col  w-[315px]
                        h-[450px] top-[171px] left-[30px] p-[30px]
                        rounded-lg shadow-xl mt-15 gap-5 md:w-[450px] md:h-[450px]">
                <div>
                    <h2 className="text-2xl flex justify-center items-center">Acessar sua conta </h2>
                    <h3 className="text-center mb-4">
                        Novo cliente? registre-se <a href="#" className=" underline cursor-pointer hover:text-[#C92071]"> aqui</a>
                      </h3>
                </div>
        
                <div>
                    <p>Login </p>
                    <input type="text" name="email" id="email"
                    placeholder="Insira seu login ou email" 
                    className="opacity-50 w-full p-2 border bg-gray-50 border-gray-50 rounded 
                    focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                    <p>Senha</p>
                    <input type="password" name="password" id="password"
                     placeholder="Insira sua senha" 
                     className="opacity-50 w-full p-2 border bg-gray-50 border-gray-50 rounded 
                    focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                <a href="#" className="cursor-pointer underline hover:hover:text-[#C92071]">Esqueci minha senha </a>
                <div>
                    <button type="submit" className="text-white bg-[#C92071] bordeR-[#C92071]
                    cursor-pointer w-full h-[40px] rounded-lg">Acessar conta</button>
                </div>
                <h3 className="flex justify-center items-center">Ou faça login</h3>
                <div className="flex justify-center items-center gap-4 h-[0px] ">
                    <img src={LogoEmail} alt="" className="cursor-pointer"/>
                    <img src={LogoFacebook} alt="" className="cursor-pointer"/>
                </div>
            </div>
            <div className="md:flex md:flex-row  md:block hidden ">
                <img src={TenisLogin4} alt="" className=" "/>                               
            </div>
        </div>
    </div>
        </div>
    )
}