import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryProducts from '../../components/category-main/category-products';
import './products-details-content.css';
import { useProductDetails } from "../../context/details-context";
import { useWishlistContext } from "../../context/wishlist-context";
import { useCartContext } from "../../context/CartContext";

function PtoductDetailsContent() {
    const { id } = useParams();
    const { product, getProductById, loading } = useProductDetails();

    const [commentText, setCommentText] = useState("");
    const [rating, setRating] = useState(5);
    const [reviews, setReviews] = useState([]);
    const [sending, setSending] = useState(false);

    // 🔥 quantity state
    const [quantity, setQuantity] = useState(1);

    const [showWishlistMsg, setShowWishlistMsg] = useState(false);
    const [showCartMsg, setShowCartMsg] = useState(false);

    const { addWishlist } = useWishlistContext();
    const { addToCart } = useCartContext();

    const getReviews = async (productId) => {
        try {
            const res = await axios.get(
                `https://nestmart-api-core.lovable.app/api/public/products/${productId}/reviews`
            );
            setReviews(res.data?.data?.reviews || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (id) {
            getProductById(id);
            getReviews(id);
        }
    }, [id]);

    // ✅ wishlist
    const handleAddWishlist = (id) => {
        addWishlist(id);
        setShowWishlistMsg(true);
        setTimeout(() => setShowWishlistMsg(false), 2000);
    };

    // ✅ cart
    const handleAddCart = (id) => {
        addToCart(id, quantity);
        setShowCartMsg(true);
        setTimeout(() => setShowCartMsg(false), 2000);
    };

    // ✅ review
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!commentText.trim()) {
            alert("Comment yozing!");
            return;
        }

        const token = localStorage.getItem("access_token");

        if (!token) {
            alert("Login qiling!");
            return;
        }

        try {
            setSending(true);

            await axios.post(
                `https://nestmart-api-core.lovable.app/api/public/products/${id}/reviews`,
                {
                    comment: commentText,
                    rating: rating,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCommentText("");
            setRating(5);

            await getReviews(id);
            await getProductById(id);

        } catch (error) {
            console.error(error);
        } finally {
            setSending(false);
        }
    };

    if (loading) return <h2>Loading...</h2>;
    if (!product) return <h2>No product</h2>;

    return (
        <section className="details">

            {showWishlistMsg && (
                <div className="wishlist__content-message">
                    <p className="wishlist__message-name">
                        Added to wishlist ❤️
                    </p>
                </div>
            )}

            {showCartMsg && (
                <div className="wishlist__content-message">
                    <p className="wishlist__message-name">
                        Added to cart 🛒
                    </p>
                </div>
            )}

            <div className="details__content container">
                <div className="details__content-body">

                    <div className="details__body-main">

                        <div className="details__main-bg">
                            <img 
                                src={product?.main_image}  
                                alt={product?.name}        
                                className="details__bg-main" 
                            />
                        </div>

                        <div className="details__main-info">

                            <h2 className="details__info-title title">
                                {product?.name}
                            </h2>

                            <div className="details__info-price">
                                <span className="details__price-inse">
                                    ${product?.price}
                                </span>
                            </div>

                            <p className="details__info-text text">
                                {product?.description}
                            </p>

                            <div className="details__info-footer">
                                <div className="details__footer-number">
                                    <input 
                                        type="number" 
                                        min={1} 
                                        max={10} 
                                        value={quantity}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            if (val >= 1 && val <= 10) {
                                                setQuantity(val);
                                            }
                                        }}
                                        className="details__number-input" 
                                    />
                                </div>

                                <button 
                                    className="details__number-btn"
                                    onClick={() => handleAddCart(product.id)}
                                >
                                    Add to cart
                                </button>

                                <button  
                                    onClick={() => handleAddWishlist(product.id)} 
                                    className="details__number-wishlist"
                                >
                                    <img src="../src/assets/images/wishlist.svg" alt="wishlist" />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* COMMENTS */}
                    <div className="details__content-coment">
                        <h2 className="details__coment-title title">
                            Customer Reviews
                        </h2>

                        <div className="details__coment-list">
                            {reviews.length > 0 ? (
                                reviews.map((item) => (
                                    <div key={item.id} className="details__coment-item">
                                        <h4>{item?.user?.full_name}</h4>
                                        <p>{item.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews yet</p>
                            )}
                        </div>

                        <div className="details__coment-form">
                            <form onSubmit={handleSubmit}>
                                <textarea 
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                />
                                <button disabled={sending}>
                                    {sending ? "Sending..." : "Submit Review"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="details__content-category">
                    <CategoryProducts />
                </div>
            </div>
        </section>
    );
}

export default PtoductDetailsContent;