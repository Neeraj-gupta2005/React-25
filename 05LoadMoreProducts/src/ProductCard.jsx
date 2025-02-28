const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="product-button">Buy Now</button>
      </div>
    );
  };

export default ProductCard;