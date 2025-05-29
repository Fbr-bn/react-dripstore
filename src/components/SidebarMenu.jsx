const SidebarMenu = () => {
  return (
    <div className="hidden md:block bg-white rounded-lg shadow-sm p-6 md:w-1/4 h-fit">
      <ul className="space-y-4">
        <li className="border-b border-gray-200 pb-2 font-medium text-gray-600">
          Meu Perfil
        </li>
        <li className="border-b border-gray-200 pb-2 text-gray-600 hover:text-[#C92071] cursor-pointer">
          Meus Pedidos
        </li>
        <li className="border-b border-gray-200 pb-2 text-gray-600 hover:text-[#C92071] cursor-pointer">
          Minhas Informações
        </li>
        <li className="text-gray-600 hover:text-[#C92071] cursor-pointer">
          Métodos de Pagamento
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
