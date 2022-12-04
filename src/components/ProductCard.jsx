function ProductCard({ item }) {
  console.log(item);
  return (
    <div>
      <div>
        <img src={item.image} alt="Product image" />
      </div>
      <div>
        <div>{item.category}</div>
        <a href="#">{item.title}</a>
        <p>£{item.price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
