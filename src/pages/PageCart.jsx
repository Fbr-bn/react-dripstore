// import LayoutWrapper from "../components/LayoutWrapper";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ApiTenis from "../components/ContainerCardsTenis";
// import RelatedProducts from "../components/RelatedProducts";

import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function PageCart () {
  return (
    <div className="pt-[160px]">
    <LayoutWrapper>
    
    
    <main className="pt-6 sm:pt-8 pb-10 ">
      <div className="container mx-auto p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
          {/* Card Meu Carrinho */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 min-h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Meu Carrinho</h2>
              <div className="hidden sm:flex text-center text-gray-600 text-xs uppercase gap-4">
                <p className="w-20">QUANTIDADE</p>
                <p className="w-20">UNITÁRIO</p>
                <p className="w-20">TOTAL</p>
              </div>
            </div>
            <hr className="border-gray-300 my-2" />

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src="assets/Group 53617 (1).png"
                  alt="Produto"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">Tênis Nike Revolution 6</p>
                  <p className="font-medium text-sm">Next Nature Masculino</p>
                  <p className="text-xs text-gray-500">Cor: Vermelho / Branco</p>
                  <p className="text-xs text-gray-500">Tamanho: 42</p>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row justify-between sm:justify-center items-center gap-4 mt-2 sm:mt-0">
                    {/* Quantidade */}
                    <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                      <p className="text-xs uppercase text-gray-600 sm:hidden">QUANTIDADE</p>
                      <div className="flex items-center mb-1">
                        <button className="px-2 py-1 bg-gray-200 text-xs" aria-label="Decrease quantity">-</button>
                        <input
                          type="text"
                          value="1"
                          readOnly
                          className="w-8 text-center mx-1 text-xs"
                          aria-label="Current quantity"
                        />
                        <button className="px-2 py-1 bg-gray-200 text-xs" aria-label="Increase quantity">+</button>
                      </div>
                      <a href="#" className="text-xs text-blue-500 mt-1 hover:underline">Remover</a>
                    </div>

                    {/* Unitário */}
                    <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                      <p className="text-xs uppercase text-gray-600 sm:hidden">UNITÁRIO</p>
                      <span className="text-xs line-through text-gray-400">R$ 299,00</span>
                      <span className="text-sm text-[#C92071] font-medium">R$ 219,00</span>
                    </div>

                    {/* Total */}
                    <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                      <p className="text-xs uppercase text-gray-600 sm:hidden">TOTAL</p>
                      <span className="text-xs line-through text-gray-400">R$ 299,00</span>
                      <span className="text-sm font-medium text-[#C92071]">R$ 219,00</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-2" />

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Cupom */}
                <div className="flex-1">
                  <h3 className="text-xs font-semibold mb-1">Cupom de Desconto</h3>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Insira seu código"
                      className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm focus:outline-none"
                    />
                    <button className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200">
                      OK
                    </button>
                  </div>
                </div>

                {/* Frete */}
                <div className="flex-1">
                  <h3 className="text-xs font-semibold mb-1">Calcular Frete</h3>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Insira seu CEP"
                      className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm focus:outline-none"
                    />
                    <button className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Resumo */}
          <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-80 min-h-[250px]">
            <h3 className="text-lg font-bold mb-3">Resumo</h3>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>R$ 219,00</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Frete</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Desconto</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t pt-2 mb-3">
              <span>Total</span>
              <span className="text-[#C92071]">R$ 219,00</span>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-right">ou 10x de R$ 21,90 sem juros</p>
            <button className="bg-[#F6AA1C] text-white px-4 py-2 mt-3 rounded-md hover:bg-[#d89617] w-full text-sm">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </main>
  </LayoutWrapper> 
    </div>
  );
};


