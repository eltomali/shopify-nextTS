import { ProductConnection } from '../../schema'
import fetchApi from '../utils/fetch-api'
import getAllProductsQuery from "../utils/queries/get-all-products"

type ReturnType = {
  products: ProductConnection 
}

export default async function getAllProducts(): Promise<any> {
  const {data} = await fetchApi<ReturnType>({query: getAllProductsQuery})
  return data.products
}

