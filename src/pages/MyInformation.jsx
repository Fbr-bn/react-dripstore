// src/pages/MyInformation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import LayoutWrapper from '../components/LayoutWrapper';
import SidebarMenu from '../components/SidebarMenu';

const MyInformation = () => {
  const userInfo = {
    nome: "Francisco Antonio Pereira",
    cpf: "123485913-35",
    email: "francisco@gmail.com",
    celular: "(85) 5555-5555",
  };

  const deliveryInfo = {
    endereco: "Rua João Pessoa, 333",
    bairro: "Centro",
    cidade: "Fortaleza, Ceará",
    cep: "433-8800",
  };

  return (
    <LayoutWrapper>
      <main className="container mx-auto px-4 py-8 pt-52 pb-35">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <SidebarMenu />

          <div className="w-full bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h2 className="font-bold text-lg text-gray-800">Minhas Informações</h2>
              <Link 
                to="#"
                className="text-sm font-semibold text-pink-600 hover:underline"
              >
                Editar
              </Link>
            </div>

            <div className="pt-6 pb-4 border-b border-gray-200 text-left">
              <h3 className="font-semibold text-gray-700 mb-4">Informações Pessoais</h3>
              <div className="space-y-3 text-sm">
                <p><span className="font-medium text-gray-500 w-24 inline-block">Nome:</span> <span className="font-semibold text-gray-800">{userInfo.nome}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">CPF:</span> <span className="font-semibold text-gray-800">{userInfo.cpf}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">Email:</span> <span className="font-semibold text-gray-800">{userInfo.email}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">Celular:</span> <span className="font-semibold text-gray-800">{userInfo.celular}</span></p>
              </div>
            </div>

            <div className="pt-6 text-left">
              <h3 className="font-semibold text-gray-700 mb-4">Informações de Entrega</h3>
              <div className="space-y-3 text-sm">
                <p><span className="font-medium text-gray-500 w-24 inline-block">Endereço:</span> <span className="font-semibold text-gray-800">{deliveryInfo.endereco}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">Bairro:</span> <span className="font-semibold text-gray-800">{deliveryInfo.bairro}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">Cidade:</span> <span className="font-semibold text-gray-800">{deliveryInfo.cidade}</span></p>
                <p><span className="font-medium text-gray-500 w-24 inline-block">CEP:</span> <span className="font-semibold text-gray-800">{deliveryInfo.cep}</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default MyInformation;