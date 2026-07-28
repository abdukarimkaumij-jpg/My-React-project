import './category.css'
function Categories({ icon, name, products_count, id, active, onClick }) {
    return (
        <button
            className={`category__wrap-flex ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className='category__flex-img'>{icon}</span>
            <h5 className="category__flex-name">{name}</h5>
            <p className="category__flex-number">{products_count}</p>
        </button>
    )
}
export default Categories
