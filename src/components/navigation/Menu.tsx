
import {  Navbar } from "flowbite-react";
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
          <Navbar.Collapse className="">
            
            <div className="flex items-center flex-grow gap-2">
            {
                routes.map((route, index) => 
                    <Navbar.Link className="text-xl" key={index} href="#">
                        {route}
                    </Navbar.Link>
            )}
            </div>
            <SearchBar />
            
          </Navbar.Collapse>
        </Navbar>
      );
    }