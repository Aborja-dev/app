
import { Navbar } from "flowbite-react";
import { SearchBar } from "../shared/SearchBar";
import { Brand } from "../shared/Brand";
const routes = ["Home", "Categorias", "Shop", "Blog"]
export function Navigation() {
  return (
    // TODO REMOVE MARGIN TOP AND ADD ANIMATION
    // QUITAR EL ESPACIO ENTRE ITEMS Y ALINEARLO
    <Navbar className=" bg-slate-300 pt-5 px-5 h-20 shadow-md sticky top-0 z-30">
      <Navbar.Brand>
        <Brand />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-white md:bg-transparent md:items-center">
        <SearchBar className="md:order-4 md:w-40 ml-4" />
            {
              routes.map((route, index) =>
                <Navbar.Link className="text-xl md:text-sm" key={index} href="#">
                  {route}
                </Navbar.Link>
              )}
       
        

      </Navbar.Collapse>
    </Navbar>
  );
}