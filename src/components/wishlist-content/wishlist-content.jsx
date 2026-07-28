import { useWishlistContext } from '../../context/wishlist-context'
import WishlistCard from '../wishlist-card/wishlist-card'
import './wishlist-content.css'

function WishlistContent() {
    const { wishlist } = useWishlistContext();

    return (
        <section className="wishlist">
            <div className="wishlist__content container">
                <h2 className="wishlist__content-title title">My wishlist</h2>
                <div className="wishlist__content-wrap">
                    {wishlist?.items?.map((item) => (
                        <WishlistCard
                            key={item.product?.id}
                            discount_percent={item?.product?.discount_percent}
                            tags={item?.product?.tags}
                            rating={item?.product?.rating}
                            price={item?.product?.price}
                            old_price={item?.product?.old_price}
                            main_image={item?.product?.main_image}
                            name={item?.product?.name}
                            ins={item?.product?.ins}
                            category_id={item?.product?.category_id}

                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WishlistContent;