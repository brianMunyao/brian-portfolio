import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			Crafted with <span style={{ fontFamily: 'serif' }}>❤️</span> by{' '}
			<a href="https://github.com/brianMunyao">brianMunyao</a> ©️{' '}
			{new Date().getFullYear()}
		</Container>
	);
};
const Container = styled.footer`
	text-align: center;
	font-weight: 300;
	padding: 30px 0;

	a {
		color: #e57c00;
	}
`;

export default Footer;
