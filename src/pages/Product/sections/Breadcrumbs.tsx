import { Icon } from "../../../components/shared"
import HomeIconSVG from "@/assets/icons/home-icon.svg"
import ChevronRightIconSVG  from "@/assets/icons/chevron-right-svgrepo-com.svg"
export const Breadcrumb = () => {
  const styleItem = `
    inline-flex items-center 
    text-sm lg:text-xl font-medium text-gray-700 
    dark:text-gray-400 dark:hover:text-white
    `
  return (
    <div data-id="breadcrumb" className="
        border-t border-b
        w-full h-full p-4
        ">
      <nav className="flex" aria-label="Breadcrumb">
        <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="flex items-center">
            <a href="#" className={ `${styleItem} hover:text-blue-600`}>
              <Icon url={HomeIconSVG} size='w-3 h-3'  />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <Icon url={ChevronRightIconSVG} size='w-2 h-2' />
              <a href="#" className={ `${styleItem} hover:text-blue-600` }>Fantasy</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <Icon url={ChevronRightIconSVG} size='w-2 h-2' />
              <span className={ `${styleItem} ` }>Abraham</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}