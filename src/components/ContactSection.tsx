import { motion } from 'framer-motion';
import { IoArrowForwardOutline, IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactSection = () => {
	return (
		<Container
			id="contact"
			className="app-padding"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.8 }}
		>
			<div className="inner">
				<span className="mail-icon">
					<IoMailOutline />
				</span>

				<div>
					<h2>Send me a message!</h2>
					<p>Got a question, or just want to say hello? Reach Out</p>
				</div>
				<Link to="/contact">
					<button>
						<span>Get In Touch</span>
						<IoArrowForwardOutline />
					</button>
				</Link>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	& > .inner {
		position: relative;
		overflow: hidden;
		padding-top: 80px;
		padding-bottom: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		background: #633a0b0e;
		border-radius: 50px;

		p {
			opacity: 0.6;
			text-align: center;
		}
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
		}

		.mail-icon {
			position: absolute;
			bottom: 0;
			left: 0;
			font-size: 300px;
			transform: rotate(45deg) translate(0, 40%);
			color: #dba76c23;
		}
	}

	@media screen and (max-width: 500px) {
		& > .inner {
			padding-top: 10px;
			padding-bottom: 40px;
			gap: 20px;
			border-radius: 30px;

			.mail-icon {
				font-size: 200px;
			}
		}
	}
`;

export default ContactSection;
