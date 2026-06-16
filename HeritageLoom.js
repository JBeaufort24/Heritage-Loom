 // Product data
        const products = [
            {
                id: 1,
                title: "Loom White Tracksuit",
                category: "tracksuit",
                price: 450,
                image: "/HeritageLoomImg/Loom 1.jpg"
            },
            {
                id: 2,
                title: "Loom Black Hoodie",
                category: "hoodie",
                price: 350,
                image: "/HeritageLoomImg/Loom 2.jpg"
            },
            {
                id: 3,
                title: "Loom Tracksuit",
                category: "tracksuit",
                price: 600,
                image: "/HeritageLoomImg/Loom 3.jpg"
            },
            {
                id: 4,
                title: "Loom Grey Sweater",
                category: "sweater",
                price: 400,
                image: "/HeritageLoomImg/Loom 4.jpg"
            },
            {
                id: 5,
                title: "Loom Tracksuit",
                category: "tracksuit",
                price: 600,
                image: "/HeritageLoomImg/Loom 5.jpg"
            },
            {
                id: 6,
                title: "Loom Active Sweater",
                category: "sweater",
                price: 500,
                image: "/HeritageLoomImg/Loom 6.jpg"
            },
            {
                id: 7,
                title: "Loom Blue Jeans",
                category: "pants",
                price: 450,
                image: "/HeritageLoomImg/Loom 7.jpg"
            },
            {
                id: 8,
                title: "Loom Comfort Hoodie",
                category: "hoodie",
                price: 500,
                image: "/HeritageLoomImg/Loom 8.jpg"
            },
            {
                id: 9,
                title: "Loom Black Jeans",
                category: "pants",
                price: 400,
                image: "/HeritageLoomImg/Loom 9.jpg"
            },
            {
                id: 10,
                title: "Loom Stripped Shorts",
                category: "shorts",
                price: 250,
                image: "/HeritageLoomImg/Loom 10.jpg"
            },
            {
                id: 11,
                title: "Loom Flour Shorts",
                category: "shorts",
                price: 250,
                image: "/HeritageLoomImg/Loom 11.jpg"
            },
            {
                id: 12,
                title: "Loom Pink Shorts",
                category: "shorts",
                price: 200,
                image: "/HeritageLoomImg/Loom 12.jpg"
            },
            {
                id: 13,
                title: "Loom T-Shirt",
                category: "tshirt",
                price: 300,
                image: "/HeritageLoomImg/Loom 13.jpg"
            },
            {
                id: 14,
                title: "Loom T-Shirt",
                category: "tshirt",
                price: 300,
                image: "/HeritageLoomImg/Loom 14.jpg"
            },
            {
                id: 15,
                title: "Loom T-Shirt",
                category: "tshirt",
                price: 300,
                image: "/HeritageLoomImg/Loom 15.jpg"
            },
            {
                id: 16,
                title: "Loom OrangeRed T-Shirt",
                category: "tshirt",
                price: 300,
                image: "/HeritageLoomImg/Loom 17.jpg"
            },
            {
                id: 17,
                title: "Loom T-Shirt",
                category: "tshirt",
                price: 300,
                image: "/HeritageLoomImg/Loom 18.jpg"
            },
            {
                id: 18,
                title: "Loom T-Shirt",
                category: "tshirt",
                price: 400,
                image: "/HeritageLoomImg/Loom 19.jpg"
            },
            {
                id: 19,
                title: "Loom Sprots T-Shirt",
                category: "tshirt",
                price: 400,
                image: "/HeritageLoomImg/Loom 20.jpg"
            },
            {
                id: 20,
                title: "Loom Brown Jacket",
                category: "jacket",
                price: 500,
                image: "/HeritageLoomImg/Loom 23.jpg"
            },
            {
                id: 22,
                title: "Loom Sweater",
                category: "sweater",
                price: 600,
                image: "/HeritageLoomImg/Loom 25.jpg"
            },
            {
                id: 23,
                title: "Loom Vibe Sweater",
                category: "sweater",
                price: 500,
                image: "/HeritageLoomImg/Loom 28.jpg"
            },
            {
                id: 24,
                title: "Loom Pullover",
                category: "sweater",
                price: 300,
                image: "/HeritageLoomImg/Loom 29.jpg"
            },
            {
                id: 26,
                title: "Loom Black Leather Tracksuit",
                category: "tracksuit",
                price: 900,
                image: "/HeritageLoomImg/Loom 32.jpg"
            },
        ];

        // Cart functionality
        let cart = [];
        let currentPaymentMethod = 'credit';

        function renderProducts(productsToRender = products) {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = productsToRender.map(product => `
                <div class="product-card" data-category="${product.category}">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                        <div class="product-price">R${product.price}</div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Filter products
            const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
            renderProducts(filteredProducts);
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartCount();
            renderCart();
            
            // Show success feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = '✓ Added!';
            button.style.background = 'rgba(255, 80, 80, 1';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'rgba (10, 10, 10, 1';
            }, 1000);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            renderCart();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartCount();
                    renderCart();
                }
            }
        }

        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        function renderCart() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon"></div>
                        <p>Your cart is empty</p>
                    </div>
                `;
                cartTotal.style.display = 'none';
                return;
            }

            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                </div>
            `).join('');

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('totalPrice').textContent = `Total: ${total.toFixed(2)}`;
            document.getElementById('checkoutTotal').textContent = `Total: ${total.toFixed(2)}`;
            cartTotal.style.display = 'block';
        }

        function toggleCart() {
            const modal = document.getElementById('cartModal');
            if (modal.style.display === 'block') {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 400);
            } else {
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('active'), 10);
            }
            
            // Hide checkout form when opening cart
            hideCheckout();
        }

        function showCheckout() {
            if (cart.length === 0) return;
            
            document.getElementById('cartItems').style.display = 'none';
            document.getElementById('cartTotal').style.display = 'none';
            document.getElementById('checkoutForm').classList.add('active');
        }

        function hideCheckout() {
            document.getElementById('cartItems').style.display = 'block';
            document.getElementById('cartTotal').style.display = 'block';
            document.getElementById('checkoutForm').classList.remove('active');
        }

        function selectPayment(method) {
            currentPaymentMethod = method;
            document.querySelectorAll('.payment-method').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            const creditCardForm = document.getElementById('creditCardForm');
            if (method === 'credit') {
                creditCardForm.style.display = 'block';
            } else {
                creditCardForm.style.display = 'none';
            }
        }

        function processOrder(event) {
            event.preventDefault();
            
            if (cart.length === 0) return;
            
            // Get form data
            const formData = new FormData(event.target);
            const orderData = {
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                customer: {
                    name: formData.get('fullName'),
                    email: formData.get('email'),
                    phone: formData.get('phone')
                },
                shipping: {
                    address: formData.get('address'),
                    city: formData.get('city'),
                    zipCode: formData.get('zipCode'),
                    country: formData.get('country')
                },
                payment: {
                    method: currentPaymentMethod
                }
            };
            
            // Simulate order processing
            const placeOrderBtn = document.querySelector('.place-order-btn');
            placeOrderBtn.textContent = 'Processing...';
            placeOrderBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Order placed successfully!\n\nOrder Details:\n- Items: ${cart.length}\n- Total: ${orderData.total.toFixed(2)}\n- Delivery to: ${orderData.customer.name}\n\nThank you for shopping with Kushcartel Apparel!`);
                
                // Reset everything
                cart = [];
                updateCartCount();
                renderCart();
                toggleCart();
                event.target.reset();
                
                placeOrderBtn.textContent = 'Place Order';
                placeOrderBtn.disabled = false;
            }, 2000);
        }

        // Format card number input
        document.addEventListener('DOMContentLoaded', function() {
            const cardNumberInput = document.getElementById('cardNumber');
            const expiryInput = document.getElementById('expiryDate');
            const cvvInput = document.getElementById('cvv');
            
            if (cardNumberInput) {
                cardNumberInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
                    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                    e.target.value = formattedValue;
                });
            }
            
            if (expiryInput) {
                expiryInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                        value = value.substring(0,2) + '/' + value.substring(2,4);
                    }
                    e.target.value = value;
                });
            }
            
            if (cvvInput) {
                cvvInput.addEventListener('input', function(e) {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0,4);
                });
            }
        });

        // Close cart when clicking outside
        document.getElementById('cartModal').addEventListener('click', function(e) {
            if (e.target === this) {
                toggleCart();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCartCount();
        });