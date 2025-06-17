function ContainerCardsTenis({ produtos }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 cursor-pointer">
      {produtos.map((produto) => (
        <div key={produto.id} className=" ">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-lime-200 text-lime-700 text-xs font-bold px-2 py-1 rounded-full">
                {produto.desconto}
              </span>
              <img
                src={produto.imagem}
                alt="Tênis K-Swiss V8"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-4 text-sm text-gray-500">
              {produto.categoria?.nome}
            </div>
            <div className="text-base font-medium text-gray-800">
              <h3 className="font-medium mb-1">{produto.nome}</h3>
            </div>
            <div className="text-sm mt-1">
              <span className="line-through text-gray-400 mr-2">
                {produto.preco}
              </span>
              <span className="font-bold text-gray-900">
                {produto.precoDesconto}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContainerCardsTenis;
