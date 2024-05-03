import Header from "./_components/header";
import Search from "./_components/serach";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5 py-4">
        <Search />
      </div>
    </main>
  );
}
