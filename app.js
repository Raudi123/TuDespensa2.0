function App() {
    const [selectedStore, setSelectedStore] = React.useState(null);
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const handleAddToCart = (product) => {
        try {
            setCartItems(prevItems => addToCart(prevItems, product));
        } catch (error) {
            reportError(error);
        }
    };

    const handleUpdateQuantity = (productId, quantity) => {
        try {
            setCartItems(prevItems => updateCartItemQuantity(prevItems, productId, quantity));
        } catch (error) {
            reportError(error);
        }
    };

    const handleRemoveItem = (productId) => {
        try {
            setCartItems(prevItems => removeCartItem(prevItems, productId));
        } catch (error) {
            reportError(error);
        }
    };

    const handleStoreSelect = (store) => {
        try {
            setSelectedStore(store);
            setCartItems([]); // Limpiar el carrito al cambiar de tienda
        } catch (error) {
            reportError(error);
        }
    };

    const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div data-name="app" className="min-h-screen bg-gray-100">
            <Header 
                cartCount={cartItemsCount}
                onCartClick={() => setIsCartOpen(true)}
            />
            
            <main className="container mx-auto py-8 px-4">
                <StoreSelector 
                    stores={CONFIG.STORES}
                    selectedStore={selectedStore}
                    onSelectStore={handleStoreSelect}
                />

                {selectedStore ? (
                    <div>
                        <StoreInfo store={selectedStore} />
                        <ProductList 
                            products={selectedStore.products}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-700">
                            Por favor, selecciona una tienda para ver sus productos
                        </h2>
                    </div>
                )}
            </main>

            {isCartOpen && (
                <Cart
                    items={cartItems}
                    onClose={() => setIsCartOpen(false)}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    store={selectedStore}
                />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
