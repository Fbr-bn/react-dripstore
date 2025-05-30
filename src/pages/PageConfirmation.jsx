import LayoutWrapper from "../components/LayoutWrapper";
import TenisFinalizarCompras from "../assets/tenis-finalizar-compras.png";

export default function PageConfirmation() {
  return (
    <div className="bg-linear-to-bl from-[#b5b6f2] to-[#efefff]">
      <LayoutWrapper>
        <div className="flex justify-center items-cente  xl:ml-[-220px] p-8">
          <h2 className=" space-y-50 font-bold flex justify-center items-center  text-3xl  xl:ml-[-850px] text-center">
            Finalizar compra
          </h2>
        </div>

        <div className="md:flex md:flex-row md:space-x-60">
          <form className="flex flex-col items-center px-4">
            <div className="w-[400px] md:w-[500px] max-w-7xl space-y-6">
              <div className="bg-white w-full rounded-lg shadow p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Informações Pessoais
                </h3>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Insira seu nome"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none  focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">CPF</label>
                  <input
                    type="text"
                    placeholder="Insira seu CPF"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">E-mail</label>
                  <input
                    type="text"
                    placeholder="Insira seu email"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Celular</label>
                  <input
                    type="text"
                    placeholder="Insira seu celular"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>
              </div>

              <div className="bg-white w-full rounded-lg shadow p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Informações de Entrega
                </h3>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Endereço</label>
                  <input
                    type="text"
                    placeholder="Insira seu endereço"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Bairro</label>
                  <input
                    type="text"
                    placeholder="Insira seu bairro"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Cidade</label>
                  <input
                    type="text"
                    placeholder="Insira sua cidade"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">CEP</label>
                  <input
                    type="text"
                    placeholder="Insira seu cep"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">
                    Complemento
                  </label>
                  <input
                    type="text"
                    placeholder="Insira complemento"
                    className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-7xl md:w-[500px]  bg-white rounded-lg shadow p-6 mt-8">
              <h2 className="text-lg font-semibold mb-4">
                Informações de Pagamento
              </h2>

              <div className="mb-4">
                <span className="block text-sm font-medium mb-2">
                  Forma de Pagamento
                </span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="formaPagamento"
                      className="accent-pink-500"
                    />
                    <span>Cartão de Crédito</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="formaPagamento"
                      className="accent-pink-500"
                    />
                    <span>Boleto Bancário</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-700" for="nomeCartao">
                  Nome do Cartão *
                </label>
                <input
                  type="text"
                  id="nomeCartao"
                  placeholder="Insira o nome do Cartão"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    className="block mb-1 text-gray-700"
                    for="numeroCartao"
                  >
                    Data ou Número do Cartão *
                  </label>
                  <input
                    type="text"
                    id="numeroCartao"
                    placeholder="Insira número do Cartão"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700" for="validade">
                    Data de validade do Cartão *
                  </label>
                  <input
                    type="text"
                    id="validade"
                    placeholder="Insira a validade do Cartão"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-1 text-gray-700" for="cvc">
                  CVV *
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVV"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="  flex justify-between items-center mt-4 border-t pt-4 border-gray-200">
                <div>
                  <p className="font-semibold text-lg text-gray-800">Total</p>
                  <p className="text-sm text-gray-600">
                    ou 10x de R$ 21,00 sem juros
                  </p>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-600  text-white font-semibold px-4 py-2 rounded-lg transition-colors ml-1 cursor-pointer">
                  Realizar Pagamento
                </button>
              </div>
            </div>
          </form>

          <div className="px-11 md:-ml-60 xl:-ml-6 ">
            <div className="bg-white md:w-[400px] md:relative md:top-[-30px] xl:w-[450px] xl:relative xl:top-[-35px]  mt-8 p-6  rounded-lg shandow">
              <h2 className="font-semibold text-gray-800 text-lg mb-4">
                RESUMO
              </h2>

              <div className="flex space-x-4 items-center">
                <img
                  src={TenisFinalizarCompras}
                  alt="Tenis Nike Revolution 6"
                  className=" object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ 219,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Desconto:</span>
                  <span>R$ 30,00</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Total</p>
                  <p className="text-sm text-gray-600">
                    ou 10x de R$ 21,00 sem juros
                  </p>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold px-4 xl:py-2 rounded cursor-pointer">
                  Realizar Pagamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
