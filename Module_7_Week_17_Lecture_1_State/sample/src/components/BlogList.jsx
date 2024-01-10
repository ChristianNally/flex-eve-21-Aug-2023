import Blog from './Blog';
import { useState } from 'react';

const BlogList = (props) => {

	const [total, setTotal] = useState(0);
	const [names, setNames] = useState({
		first: 'Monkey',
		last: 'Fuzz'
	});

	const incrementTotal = () => {setTotal((prev) => {return prev + 1;})};
	const decrementTotal = () => {setTotal((prev) => {return prev - 1;})};

	const handleClick = () => {
		setNames((prev) => {
			return {...prev, first: "Astro"};
		});
	};

	const displayHelper = () => {
		return props.blogData.map((item) => {
			return <Blog 
								title={ item.title } 
								body={ item.body } 
								incrementTotal={incrementTotal}
								decrementTotal={decrementTotal}
								total={ total }
							/> 
		});
	};

	return (
		<div>
			<h1>blog list :: { total } </h1>
			<h2>First: { names.first } Last: { names.last }</h2>
			<button onClick={ handleClick } >Try Me!</button>

			{ displayHelper() }
		</div>
	);

};

export default BlogList;