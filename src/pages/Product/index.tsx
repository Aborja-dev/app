


import { BaseLayout } from "../../layout/BaseLayout"
import { Aside } from "./sections/Aside"
import { Breadcrumb } from "./sections/Breadcrumbs"
import { Product } from "./sections/Product"
import { ProductDetail } from "./sections/Product-details"
import { Related } from "./sections/Related"

export const ProductPage = () => {
  return (
    <>
      <BaseLayout >
        <Breadcrumb />
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="col-span-4 md:col-span-2 lg:col-span-3 md:order-1">
            <Product />
          </div> 
          <div className="col-span-4 md:order-3">
            <ProductDetail />
          </div>
          <div className="col-span-4 md:order-4">
            <Related />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1 md:order-2 order-4">
            <Aside />
          </div>
        </div>
      </BaseLayout>
    </>
  )
}