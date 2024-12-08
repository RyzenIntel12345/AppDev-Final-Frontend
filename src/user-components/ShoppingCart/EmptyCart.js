

function EmptyCart() {
    return (
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center" >
            <h2 className="mb-4 mt-5" style={{ color: '#59b280' }}>Your Cart is Empty</h2>
            <p className="text-muted">Add items to your cart to start shopping.</p>
        </div>
    );
}

export default EmptyCart;