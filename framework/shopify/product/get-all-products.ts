import { ApiConfig } from '@common/types/api'
import { Product } from '@common/types/product'
import { ProductConnection } from '../schema'
import { getAllProductsQuery, normalizeProduct } from '../utils'


type ReturnType = {
  products: ProductConnection 
}

export default async function getAllProducts(config: ApiConfig): Promise<Product[]> {
  const { data } = await config.fetch<ReturnType>(
    {
      query: getAllProductsQuery,
      url: config.apiUrl
    })
  
  // map over edges and return nodes
  const products = data.products.edges.map(({node: product}) => 
     normalizeProduct(product)
   ) ?? []
  return products
}

