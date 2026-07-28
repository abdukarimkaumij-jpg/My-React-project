import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './category-section.css'
import Categories from '../category/category'
import { useCategoryContext } from '../../context/category-context'

function CategorySection() {
    const { category, selectedCategory, selectCategory, resetCategory } = useCategoryContext();

    return (
        <section className="category">
            <div className="category__content container">     
                <div className="category__content-header">
                    <div className="category__header-info">
                        <h2 className="category__info-title title">
                            Shop by Categories
                        </h2>
                        <button className="category__info-btn" onClick={resetCategory}>
                            All Categories
                        </button>
                    </div>
                </div>

                <div className="category__content-wrap">
                    <Swiper
                        spaceBetween={20}
                        navigation={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1280: {
                                slidesPerView: 6,
                            },
                            1440: {
                                slidesPerView: 8,
                            },
                        }}
                    >
                        {category.categories?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Categories
                                    id={item.id}
                                    icon={item.icon}
                                    name={item.name}
                                    products_count={item.products_count}
                                    active={selectedCategory?.id === item.id}
                                    onClick={() => selectCategory({ id: item.id, products_count: item.products_count })}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CategorySection
