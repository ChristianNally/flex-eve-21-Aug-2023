import styled from 'styled-components';

const Paragraph = styled.p`
color: pink;
font-size: 24px;
text-decoration: underline;
`; // TODO
console.log('Paragraph.p', Paragraph.p);

const About = (props) => {

	return (
		<>
			<h2>About</h2>
			<Paragraph />
		</>
	);
};

export default About;