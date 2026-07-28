import { useCategoryContext } from '../../context/category-context';
import './category-products.css'
function CategoryProducts() {
    const { category, selectCategory, selectedCategory, resetCategory } = useCategoryContext();

    return(
        <div className="products__category-body">
            <h2 className="category__body-name">Category</h2>

            <div className="category__body-list">
                <button
                    onClick={resetCategory}
                    className={`category__list-btn ${!selectedCategory ? 'active' : ''}`}
                >
                    <h5 className="category__btn-name">Hammasi</h5>
                </button>

                {category.categories?.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => selectCategory({ id: item.id, products_count: item.products_count })}
                        className={`category__list-btn ${selectedCategory?.id === item.id ? 'active' : ''}`}
                    >
                        <span className='category__btn-img'>{item.icon}</span>
                        <h5 className="category__btn-name">{item.name}</h5>
                        <span className="category__btn-number">{item.products_count}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default CategoryProducts
