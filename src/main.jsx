import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/header.jsx'
import { ProductsContext } from './context/product-context.jsx'
import { CategoryContext } from './context/category-context.jsx'
import { ProductDetailsProvider } from './context/details-context.jsx'
import { SearchProvider } from './context/search-context.jsx'
import Search from './components/search/search.jsx'
import Footer from './components/footer/footer.jsx'
import { RegisterProvider } from './context/register-context.jsx'
import { LoginContext } from './context/login-context.jsx'
import { AuthContext } from './context/auth-context.jsx'
import WishlistProvider from './context/wishlist-context.jsx'
import { NewsletterProvider } from './context/newsletter-context.jsx'
import { CartProvider } from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ProductsContext>
        <CategoryContext>
          <ProductDetailsProvider>
            <SearchProvider>
                <Header/>
                <RegisterProvider>
                  <LoginContext>
                    <AuthContext>
                      <WishlistProvider>
                        <NewsletterProvider>
                          <CartProvider>
                            <App />
                          </CartProvider>
                        </NewsletterProvider>
                      </WishlistProvider>
                    </AuthContext>
                  </LoginContext>
                </RegisterProvider>
                <Search/>
                <Footer/>
            </SearchProvider>
          </ProductDetailsProvider>
        </CategoryContext>
      </ProductsContext>
    </StrictMode>
  </BrowserRouter>
)
