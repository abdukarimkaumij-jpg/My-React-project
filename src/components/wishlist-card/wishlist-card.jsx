import { Link } from 'react-router-dom'
import './wishlist-card.css'

function WishlistCard({discount_percent, tags, rating, price, old_price, id, img, name, ins, category_id, main_image }) {
    return (
         <Link to={`/product/${id}`} className="product__wraper-flex">

            <div className="product__flex-bg">
                <div className="product__bg-top">
                    <div className="product__top-percent blue">
                        <span>-{discount_percent}%</span>
                    </div>
                    <div className="product__top-sale">
                        <span>{Array.isArray(tags) ? tags.join(', ') : tags}</span>
                    </div>
                </div>

                <img src={main_image} alt={name} className="product__bg-img" />
            </div>

            <div className="product__flex-body">
                <p className="product__body-category" key={category_id}>Bread and Juice</p>
                <h5 className="product__body-name">{name}</h5>

                <div className="product__body-rating">
                    <span className="product__reting-star">★★★★★</span>
                    <span className="product__reting-number">{rating}</span>
                </div>

                <div className="product__body-footer">
                    <span className="product__footer-ins">${price}</span>
                    <span className="product__footer-del">${old_price}</span>
                    <button className="product__footer-button">
                        <span>Add</span>
                    </button>
                </div>
            </div>

        </Link>
    )
}

export default WishlistCard;