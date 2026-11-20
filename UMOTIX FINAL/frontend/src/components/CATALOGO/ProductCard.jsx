function ProductCard ({product, onAdd}) {
    return (
        <article className="card">
            <img src={product.image} alt={product.name} className="card__img"/>
            <div className="card__body">
                <span className="card__category">{product.category}</span>
                <h3 className="card__title">{product.name}</h3>
                <p className="card__price">${product.price.toLocaleString("es-CO")}</p>
                <button className="btn" onClick={() => onAdd(product)}>
                    Agregar al carrito
                </button>
            </div>
        </article>
    );


}
export default ProductCard;