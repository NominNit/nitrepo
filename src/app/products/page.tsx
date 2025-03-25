export default function Products() {
  const products = [
      {id: 1, title: "Product 1", price: 1000, image: "https://m.media-amazon.com/images/I/61nqNujSF2L.jpg"},
      {id: 2, title: "Product 2", price: 2000, image: "https://m.media-amazon.com/images/I/41OEaISuXeL._AC_UF480,480_SR480,480_.jpg"},
      {id: 3, title: "Product 3", price: 3000, image: "https://m.media-amazon.com/images/I/51FjzEeUe+L._AC_UF480,480_SR480,480_.jpg"},
      {id: 4, title: "Product 4", price: 4000, image: "https://m.media-amazon.com/images/I/318UmkJn1HL._AC_UF480,480_SR480,480_.jpg"},
      {id: 5, title: "Product 5", price: 5000, image: "https://m.media-amazon.com/images/I/410gobjgGaL._AC_UF480,480_SR480,480_.jpg"},
  ];
  return (
    <div className="text-sky-300 px-6">
      Products
      <div className="flex flex-row-4 flec-col justify-around items-center space-x-6 mt-4">
        {products.map((product) => (
          <div key={product.id} className="font-semibold">
            <a href={`/product/${product.id}`}>
              <img src={product.image} className="rounded w-70 "/>
              <div className="flex justify-between mt-2">
                <div>{product.title}</div>
                <div>{product.price}₮</div>
              </div>
            </a>
          </div>
        ))} 
      </div>
    </div>
  )
}