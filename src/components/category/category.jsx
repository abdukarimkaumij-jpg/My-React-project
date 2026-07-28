import './category.css'
function Categories({icon, name, products_count, id}) {
    return (
        <>
        <button key={id} className="category__wrap-flex">
            <span className='category__flex-img'>{icon}</span>
            <h5 className="category__flex-name">{name}</h5>
            <p className="category__flex-number">{products_count}</p>
        </button>
        </>
    )
}
export default Categories