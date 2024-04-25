
import { Navbar } from "flowbite-react";
import { SearchBar } from "../shared/SearchBar";
import { Brand } from "../shared/Brand";
const routes = ["Home", "Categorias", "Shop", "Blog"]
export function Navigation() {
  return (
    <Navbar className=" bg-slate-300 pt-5 px-5 h-20 shadow-md sticky top-0 z-30">
      <Navbar.Brand>
        <Brand />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="flex-row-reverse absolute top-20 left-0 bg-white h-screen w-1/2">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col gap-4">
            {
              routes.map((route, index) =>
                <Navbar.Link className="text-xl" key={index} href="#">
                  {route}
                </Navbar.Link>
              )}
          </div>
          <SearchBar />
        </div>

      </Navbar.Collapse>
    </Navbar>
  );
}