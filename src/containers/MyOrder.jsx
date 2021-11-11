import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import useSumTotal from '@hooks/useSumTotal';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	
	return (
		
				<aside className="MyOrder">
					<div className="title-container">
						<img src={arrow} alt="arrow" />
						<p className="title">My order</p>
					</div>
					<div className="my-order-content">
						<scroll-container>
							<scroll-page>
								{state.cart.map((product) => (
									<OrderItem key={`orderItem-${product.id}` && console.log(product.id)} product={product} />
								))}
							</scroll-page>
							<div className="order">
								<p>
									<span>Total</span>
								</p>
								<p>${useSumTotal(state.cart)}</p>
							</div>
							<button className="primary-button">
								Checkout
							</button>
						</scroll-container>
					</div>
					
				</aside>
			
	);
}

export default MyOrder;
