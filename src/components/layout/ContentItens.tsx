import EmployeesDetails from "./sidebar/employees/EmployeesDetails";
import ProductDetails from "./sidebar/products/ProductsDetails";

export default function ContentItens() {
  return (
    <div className='flex h-full grow flex-col gap-4'>
      <div className='mx-4 flex items-center gap-2'>
        <ProductDetails />
        <EmployeesDetails />
      </div>
    </div>
  )
}
