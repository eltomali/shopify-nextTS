import fetchApi from '../utils/fetch-api'
import getAllProductsQuery from "../utils/queries/get-all-products"




export default async function getAllProducts(): Promise<any[]> {
  const products = await fetchApi({query: getAllProductsQuery})
  return products.data
}

