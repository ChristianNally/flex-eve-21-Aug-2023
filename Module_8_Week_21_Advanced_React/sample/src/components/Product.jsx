import { useParams } from 'react-router-dom';

const Product = () => {

	const params = useParams();
	console.log('params', params);

	return (
		<>
			<h2>Product</h2>
			<p>Here are some details about product id = {params.id}.</p>
		</>
	);
};

export default Product;
