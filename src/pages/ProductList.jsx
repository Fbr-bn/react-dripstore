import LayoutWrapper from "../components/LayoutWrapper";
import ListProducts from "../components/ListProducts";
import RelatedProducts from "../components/RelatedProducts";
import SidebarFilters from "../components/SidebarFilters";

export default function ProductList() {
  return (
    <LayoutWrapper>
      <div className="pt-[160px] max-w-7xl mx-auto px-4 py-6">
        {/* ... Cabeçalho aqui ... */}

        <div className="flex flex-col md:flex-row gap-6">
          <SidebarFilters />

          {/* Lista de produtos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <ListProducts />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
