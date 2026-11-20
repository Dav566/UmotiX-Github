import ProductCard from "./ProductCard";

function ProductList({products, onAdd}) {
    if (!products || products.length === 0) {
        return <p className="empty">No hay productos disponibles</p>;
    }

    return (
     <section className="grid">
        {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
     </section>
    );
}
export default ProductList;