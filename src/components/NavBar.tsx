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
			<div className="nav-inner">
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

			<div
				className={`mobile-nav-links ${isNavOpened ? 'open' : ''}`}
				role="dialog"
				aria-modal="true"
				aria-label="Mobile Navigation Menu"
			>
				<div
					className="close-nav-icon"
					onClick={toggleNavOpened}
					aria-label="Close navigation menu"
				>
					<IoCloseCircle />
				</div>

				<nav className="nav-links" onClick={toggleNavOpened}>
					{navLinks.map((navLink) => (
						<a
							key={navLink.to}
							href={navLink.to}
							className="nav-link"
							tabIndex={isNavOpened ? 0 : -1}
						>
							{navLink.label}
						</a>
					))}
				</nav>
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
	padding: 0 10px;

	z-index: 10;
	transition: all 0.3s ease-in-out;

	.nav-inner {
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-radius: 16px;
		background: #ffffffcc;
		backdrop-filter: blur(8px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

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
	}

	.mobile-nav-links {
		border: 1px solid black;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: #fff;
		height: 100vh;
		width: 100vw;
		background: #fffffffc;
		backdrop-filter: blur(8px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		pointer-events: none;
		transform: translateX(100%);
		transition: all 0.3s ease;

		.close-nav-icon {
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
			background: transparent;
			border: none;
			font-size: 2.5rem;
			cursor: pointer;
			transition: transform 0.2s ease;
		}

		.close-nav-icon:hover,
		.close-nav-icon:focus {
			transform: scale(1.1);
			outline: none;
		}

		.nav-links {
			display: flex;
			flex-direction: column;
			gap: 1.8rem;
		}

		.nav-link {
			font-size: 1.8rem;
			text-decoration: none;
			font-weight: 600;
			transition: color 0.2s ease, transform 0.2s ease;
		}

		.nav-link:hover,
		.nav-link:focus {
			color: #e57c00;
			transform: scale(1.05);
			outline: none;
		}
	}

	.mobile-nav-links.open {
		opacity: 1;
		pointer-events: auto;
		transform: translateX(0);
	}

	@media screen and (max-width: 580px) {
		top: 10px;
		margin: 0 10px;

		.nav-inner .nav-links {
			display: none;
		}

		.nav-inner .burger,
		.mobile-nav-links {
			display: flex;

			.nav-links {
				display: flex;
			}
		}

		.logo {
			font-size: 17px !important;
			.logo img {
				width: auto;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

				&:hover {
					transform: rotate(-90deg) scale(1.05);
				}
			}
		}
	}
`;

export default NavBar;
