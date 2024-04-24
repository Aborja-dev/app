
import {  Navbar } from "flowbite-react";
import { SearchBar } from "../shared/SearchBar";
const routes = ["Home", "Categorias", "Shop", "Blog"]
export function Navigation() {
    return (
        <Navbar className=" bg-slate-300 pt-5 px-5 h-20 shadow-md sticky top-0 z-30">
          <Navbar.Brand>
          <figure className="w-10 mr-2">
                    <img src="logo-removebg-preview.png" alt="logo" />
                </figure>
                <h1 className="text-lg italic">La Biblioteca Infinita</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="

          
          ">
            
            {
                routes.map((route, index) => 
                    <Navbar.Link key={index} href="#">
                        {route}
                    </Navbar.Link>
            )}
            <div className="pb-2">
            <SearchBar />
            </div>
          </Navbar.Collapse>
        </Navbar>
      );
    }