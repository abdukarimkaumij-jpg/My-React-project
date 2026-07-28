import { useCategoryContext } from '../../context/category-context';
import { useProductsContext } from '../../context/product-context';
import { useSearchContext } from '../../context/search-context';
import CategoryProducts from '../category-main/category-products';
import ProductsCard from '../product-card/products-card';
import { useState, useEffect } from 'react';
import './products.css';

function Products() {
    const { products, loading, error } = useProductsContext();
    const { results } = useSearchContext();
    const { selectedCategory } = useCategoryContext();

    const [visibleCount, setVisibleCount] = useState(10);

    // 🔒 SAFE DATA
    const searchData = Array.isArray(results) ? results : [];
    const allProducts = Array.isArray(products) ? products : [];

    const baseData = searchData.length > 0 ? searchData : allProducts;

    const categoryId = selectedCategory?.id;

    // 🔥 FILTER (FAqat filter — kesilmaydi)
    // API ba'zan category_id ni to'g'ridan-to'g'ri, ba'zan esa category.id
    // ko'rinishida qaytarishi mumkin — shu sabab ikkalasini ham tekshiramiz
    const filteredData = categoryId
        ? baseData.filter(item => (item?.category_id ?? item?.category?.id) === categoryId)
        : baseData;

    // 🔥 LOAD MORE (asosiy control shu)
    const visibleProducts = filteredData.slice(0, visibleCount);

    // 🔥 RESET (category yoki search o‘zgarsa)
    useEffect(() => {
        setVisibleCount(10);
    }, [selectedCategory, results]);

    // 🔥 LOADING / ERROR
    if (loading) return <h2 className="container">Loading...</h2>;
    if (error) return <h2 className="container">{error}</h2>;

    return (
        <section className="products">
            <div className="products__content container">

                <div className="products__content-info">
                    <h2 className="products__info-title title">
                        {searchData.length > 0 ? "Search Results" : "Popular Products"}
                    </h2>
                </div>

                <div className="products__content-popular">

                    <div className="products__popular-wrap">
                        {visibleProducts.map((item) => (
                            <ProductsCard
                                key={item?.id}
                                id={item?.id}
                                discount_percent={item?.discount_percent}
                                tags={item?.tags}
                                name={item?.name}
                                main_image={item?.main_image}
                                rating={item?.rating}
                                price={item?.price}
                                old_price={item?.old_price}
                                category_id={item?.category_id}
                            />
                        ))}

                        {/* 🔥 LOAD MORE */}
                        {visibleCount < filteredData.length && (
                            <div className="products__loadmore">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 10)}
                                    className="products__loadmore-btn"
                                >
                                    Yana ko‘rsatish 10
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="products__popular-category">
                        <CategoryProducts />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Products;