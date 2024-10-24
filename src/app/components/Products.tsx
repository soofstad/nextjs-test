import products from '../public/products.json'

export default async function Products() {
  return (
    <ul>
      {products.products.map((product: {name: string, description: string}) => (
        <li key={product.name}>{product.description}</li>
      ))}
    </ul>
  )
}