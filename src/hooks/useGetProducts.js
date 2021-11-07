import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(async () => {
		const res = await axios(API);
		setProducts(res.data);
	}, [])
    return products;
};

export default useGetProducts;