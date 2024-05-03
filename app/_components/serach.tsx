import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Buscar Rango..." className="border-none" />
      <Button>
        <SearchIcon size="icon" />
      </Button>
    </div>
  );
};

export default Search;
