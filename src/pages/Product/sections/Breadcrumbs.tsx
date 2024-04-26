import { Icon } from "../../../components/shared"
import HomeIconSVG from "@/assets/icons/home-icon.svg"
import ChevronRightIconSVG  from "@/assets/icons/chevron-right-svgrepo-com.svg"
export const Breadcrumb = () => {
  const styleItem = `
    inline-flex items-center 
    text-sm font-medium text-gray-700 
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

const HomeIcon = () => {
  return (
    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  )
}

const ChevronRightIcon = () => {
  return (
    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
  )
}