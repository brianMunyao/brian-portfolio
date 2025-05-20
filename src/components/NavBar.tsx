import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '/logo.png';
import { BsList } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { useState } from 'react';

const NavBar = ({ scrolled }: { scrolled: boolean }) => {
	const navigate = useNavigate();
	const [isNavOpened, setIsNavOpened] = useState(false);

	const toggleNavOpened = () => setIsNavOpened((_open) => !_open);

	const navLinks = [
		{ to: '/#services', label: 'Services' },
		{ to: '/#skills', label: 'Skills' },
		{ to: '/#projects', label: 'Projects' },
		{ to: '/#contact', label: 'Contact' },
	];

	const goToContact = () => {
		navigate('/contact');
	};

	return (
		<Container
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			scrolled={scrolled}
			isNavOpened={isNavOpened}
		>
			<div className=" nav-inner">
				<Link to={'/'} className="logo">
					<img src={logo} alt="logo" />
					<span>Brian Kalusi</span>
				</Link>

				<div className="nav-right">
					<div className="nav-links">
						{navLinks.map((navLink) => (
							<a href={navLink.to} className="nav-link">
								{navLink.label}
							</a>
						))}
					</div>

					<button onClick={goToContact}>Say Hi</button>

					<div className="burger" onClick={toggleNavOpened}>
						<BsList />
					</div>
				</div>
			</div>

			<div className="mobile-nav-links">
				<IoCloseCircle
					className="close-nav-icon"
					onClick={toggleNavOpened}
				/>

				<div className="nav-links">
					{navLinks.map((navLink) => (
						<a
							href={navLink.to}
							onClick={toggleNavOpened}
							className="nav-link"
						>
							{navLink.label}
						</a>
					))}
				</div>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)<{
	scrolled: boolean;
	isNavOpened?: boolean;
}>`
	position: fixed;
	top: 20px;
	left: 0;
	right: 0;
	max-width: 1380px;
	margin: 0 auto;
	border-radius: 16px;
	background: #ffffffcc; /* translucent white */
	backdrop-filter: blur(8px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	z-index: 10;
	transition: all 0.3s ease-in-out;

	& > div {
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: ${({ scrolled }) => (scrolled ? '17px' : '22px')};
		font-weight: 600;
		color: #e57c00;
		letter-spacing: 0.2px;
		cursor: pointer;
	}

	.logo img {
		height: ${({ scrolled }) => (scrolled ? '35px' : '50px')};
		width: auto;
		transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

		&:hover {
			transform: rotate(-90deg) scale(1.05);
		}
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.nav-links {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.nav-links a {
		color: rgb(100, 100, 100);
		font-size: 15px;
		letter-spacing: 0.4px;
		transition: all 0.2s linear;

		&:hover {
			color: #000;
			letter-spacing: 1px;
			border-bottom: 1px solid grey;
		}
	}

	.burger {
		width: 40px;
		height: 40px;
		background: rgb(215, 215, 215);
		border-radius: 10px;
		font-size: 25px;
		display: none;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.mobile-nav-links {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 10;
		transform: ${({ isNavOpened }) =>
			isNavOpened ? 'translateX(0)' : 'translateX(100%)'};
		background: #fff;
		height: 100%;
		width: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: all 0.2s linear;

		.nav-links {
			flex-direction: column;
		}

		.close-nav-icon {
			font-size: 40px;
			margin-bottom: 10px;
			cursor: pointer;
			transition: all 0.2s linear;

			&:hover {
				font-size: 45px;
			}
		}

		a {
			font-size: 25px;
			text-align: center;
			padding: 10px 0;

			&:hover {
				border-bottom: 1px solid grey;
			}
		}
	}

	@media screen and (max-width: 580px) {
		top: 10px;
		border-radius: 0;
		max-width: 100%;
		left: 0;
		right: 0;

		.nav-links {
			display: none;
		}

		.burger,
		.mobile-nav-links {
			display: flex;

			.nav-links {
				display: flex;
			}
		}
	}
`;

export default NavBar;
