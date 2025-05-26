export default function FormAccount(){
    return(
        <div>

            <header className="bg-white w-full flex justify-center items-cente p-5 xl:p-10 xl:flex xl:justify-start xl:h-[]">
        <div className="flex items-center justify-center flex-1 space-x-4">
            <img src="projeto-dripstore/Assets/logo-header.svg" alt="" 
            className="w-50 xl:absolute xl:top-[px] xl:left-[70px] xl:w-[253px] xl:h-[44px]"/>
        </div>
    </header>
    <section className="flex items-center justify-center ">
        <div className="bg-white flex flex-col  w-[315px]
                    h-[400px] top-[171px] left-[30px] p-[30px] 
                    rounded-lg shadow-xl mt-15 gap-[35px] md:w-[500px] md:h-[400px]">
            <div>
                <h2 className="text-2xl flex justify-center items-center">Crie sua conta </h2>
                <h3 className="text-center mb-4">
                    Já possui uma conta? Entre <a href="#" className=" underline cursor-pointer hover:text-[#C92071]"> aqui</a>
                  </h3>
            </div>
        
            <div>
                <p>Email </p>
                <input type="text" name="email" id="email"
                placeholder="Insira seu login ou email" className="bg-gray-50 p-2 w-full rounded"/>
                
            </div>
            
            <div>
                <button type="submit" className="text-white bg-[#C92071] bordeR-[#C92071]
                cursor-pointer w-full h-[40px] rounded-lg">Criar conta</button>
            </div>
            <h3 className="flex justify-center items-center">Ou faça login</h3>
            <div className="flex justify-center items-center gap-4 h-[0px] ">
                <img src="projeto-dripstore/Assets/gmail 1.png" alt="" className="cursor-pointer"/>
                <img src="projeto-dripstore/Assets/facebook.login.png" alt="" className="cursor-pointer"/>
            </div>
        </div>
        <div className="md:flex md:flex-row hidden md:block hidden ">
            <div>
                <img src="projeto-dripstore/Assets/tenis-login-1.png" alt="" className="w-60 xl:w-90 mb-4 xl:w-[350px] xl:ml-30"/>
            </div>
            <div>
                <img src="projeto-dripstore/Assets/tenis-login-2.png" alt="" 
                className="w-60 xl:w-[420px] transform translate-y-30 xl:translate-y-50 xl:-ml-[90px]"/>
            </div>
        </div>
    </section>

        </div>
    )
}