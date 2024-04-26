


import { BaseLayout } from "../../layout/BaseLayout"
import { Aside } from "./sections/Aside"
import { Breadcrumb } from "./sections/Breadcrumbs"
import { Product } from "./sections/Product"
import { ProductDetail } from "./sections/Product-details"

export const ProductPage = () => {
  return (
    <>
      <BaseLayout >
        <Breadcrumb />
        <div className="grid grid-cols-4 auto-rows-auto">
          {/* <div className="col-span-4">
            <Product />
          </div> */}
          <div className="col-span-4">
            <ProductDetail />
          </div>
        </div>
      </BaseLayout>
    </>
  )
}