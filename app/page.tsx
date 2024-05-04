import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/serach";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5 py-4">
        <Search />
      </div>
      <div className="p-5 py-4">
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
    </main>
  );
}
