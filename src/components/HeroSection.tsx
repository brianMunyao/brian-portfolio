import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = () => {
	return (
		<Container
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<div className="hero-section app-padding">
				<div className="links" aria-label="Social Links">
					<a
						href="https://www.linkedin.com/in/brian-kalusi"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<IoLogoLinkedin />
					</a>
					<a
						href="https://github.com/brianMunyao"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<IoLogoGithub />
					</a>
				</div>
				<div className="hero-left">
					<h1>Brian Kalusi</h1>
					<p className="tagline">
						A{' '}
						<span className="highlight">
							&lt;Software Engineer/&gt;
						</span>{' '}
						from Kenya who creates innovative solutions and bring
						ideas to life using technology.
					</p>

					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<Link to="/contact">
							<button className="get-in-touch">
								Let&apos;s Build Something Amazing
							</button>
						</Link>
					</motion.div>

					<div className="reach-out">
						<a
							href="mailto:brianmunyao6@gmail.com"
							aria-label="Email Brian"
						>
							<IoMailOutline />
							<span>brianmunyao6@gmail.com</span>
						</a>
					</div>
				</div>

				<div className="hero-right">
					<i className="bi bi-code-slash" aria-hidden="true"></i>
					<img
						className="dots"
						src="/dots.png"
						alt="Decorative dots"
					/>
					<div className="image-con up-down-anim">
						<img src="/profile.jpg" alt="Brian Kalusi profile" />
					</div>
				</div>
				<p className="dev-title">Full Stack Dev</p>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	.hero-section {
		position: relative;
		min-height: 400px;
		height: 100vh;
		max-height: 800px;
		display: grid;
		grid-template-columns: 80px repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 100%;
		gap: 30px;
		overflow: hidden;
		& > * {
			z-index: 5;
		}
		a {
			width: fit-content;
		}

		@keyframes moveUpDown {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-15px);
			}
			100% {
				transform: translateY(0);
			}
		}

		.up-down-anim {
			animation: moveUpDown 3s infinite;
		}

		& .dev-title {
			position: absolute;
			bottom: -55px;
			font-weight: 800;
			font-size: 120px;
			user-select: none;
			color: rgb(250, 250, 250);
			pointer-events: none;
			z-index: 1;
		}

		.links {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 20px;
			color: rgb(53, 53, 53);
			font-size: 25px;
			transition: all 0.2s linear;
		}
		.links > a {
			width: fit-content;
			transition: all 0.2s linear;
		}
		.links > a:hover {
			transform: scale(1.2);
			color: #d06f01;
		}
		.reach-out {
			display: flex;
			align-items: center;
			gap: 20px;
			margin: 5px 0;
			a {
				display: flex;
				align-items: center;
				gap: 5px;
				color: grey;
			}
			a:hover {
				color: #875010;
			}
			@media (max-width: 470px) {
				flex-direction: column;
			}
		}
	}

	.hero-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
	}
	.hero-left h1 {
		color: #e57c00;
		font-size: 45px;
	}
	.hero-left .tagline {
		font-size: 18px;
		letter-spacing: 0.2px;
		color: rgb(30, 30, 30);
	}

	.hero-left .get-in-touch {
		position: relative;
		margin-top: 15px;
		cursor: pointer;
		padding: 10px 25px;
		width: fit-content;
		background: #e57c00;
		border: 2px solid #e57a007a;
		color: #fff;
		font-weight: 500;
		font-size: 17px;
		letter-spacing: 0.5px;
		z-index: 2;
		transform: translateY(0);
	}
	.hero-left .get-in-touch:hover {
		transform: translate(-6px, -6px);
		background: #d06f01;
		box-shadow: 6px 6px rgba(197, 106, 1, 0.555);
	}

	.hero-right {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.hero-right .image-con {
		width: 260px;
		height: 260px;
		border-radius: 150px;
		background: #efefef;
		overflow: hidden;
	}
	.hero-right i {
		font-size: 120px;
		position: absolute;
		top: 10px;
		color: rgba(200, 200, 200, 0.1);
		transform: translateX(-50%) !important;
	}
	.hero-right .image-con img {
		width: 100%;
		height: 100%;
	}

	.hero-right .dots {
		position: absolute;
		top: 60%;
		right: 30px;
	}

	@media screen and (max-width: 950px) {
		.hero-section .title {
			display: none;
		}
	}
	@media screen and (max-width: 800px) {
		.hero-section {
			padding: 35px 20px;
			height: fit-content;
			min-height: fit-content;
			display: flex;
			flex-direction: column-reverse;
			margin-top: 80px;

			.hero-left {
				align-items: center;
				text-align: center;
			}
			.links {
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
			}
		}
	}
	@media screen and (max-width: 580px) {
	}
	@media screen and (max-width: 500px) {
		.hero-section {
			.hero-left {
				h1 {
					font-size: 35px;
				}
			}

			.hero-right {
				.image-con {
					width: 160px;
					height: 160px;
				}
			}
		}
	}
`;

export default HeroSection;
