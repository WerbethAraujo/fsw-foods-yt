import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-5 py-4">
        <Search />
      </div>
      <div className="px-5 py-4">
        <CategoryList />
      </div>

      <Image
        src="/promo-banner-01.png"
        alt="até 30% de promoção em pizzas"
        width={0}
        height={0}
        className="h-auto w-full object-contain"
        sizes="100vh"
        quality={100}
      />
      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomen</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver mais
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList />
      </div>
    </main>
  );
}
