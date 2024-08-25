import styled from 'styled-components';
import {
	BsPcDisplayHorizontal,
	BsDatabaseFillGear,
	BsPhone,
} from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4, // Time between animations of each child
			delayChildren: 0.1, // Delay before the first child starts animating
		},
	},
};

const childVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'anticipate',
			duration: 0.6,
		},
	},
};

const ServicesSection = () => {
	return (
		<Container
			id="services"
			className="app-padding"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.div variants={childVariants} className="title">
				What I Can Do
			</motion.div>

			<div className="services-con">
				<motion.div variants={childVariants} className="service">
					<div className="icon">
						<BsPcDisplayHorizontal />
					</div>
					<p className="service-title">Frontend Apps</p>
					<p className="service-desc">
						I excel at developing captivating frontend applications
						using modern frameworks like{' '}
						<span className="highlight">React</span> and{' '}
						<span className="highlight">Next.js</span>, creating
						seamless and interactive user experiences.
					</p>
				</motion.div>

				<motion.div variants={childVariants} className="service">
					<div className="icon">
						<BsDatabaseFillGear />
					</div>
					<p className="service-title">Backend Apps</p>
					<p className="service-desc">
						Good at leveraging frameworks like{' '}
						<span className="highight">Node.js</span>,{' '}
						<span className="highlight">Flask</span>, and{' '}
						<span className="highlight">Express.js</span> to build
						robust and scalable applications that seamlessly handle
						complex data processing and server-side functionalities.
					</p>
				</motion.div>

				<motion.div variants={childVariants} className="service">
					<div className="icon">
						<BsPhone />
					</div>
					<p className="service-title">Mobile Apps</p>
					<p className="service-desc">
						I specialize in crafting high-performance mobile
						applications with{' '}
						<span className="highlight">React Native</span> that
						deliver native-like experiences across multiple
						platforms, ensuring a smooth and engaging user
						interface.
					</p>
				</motion.div>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	padding-top: 70px;
	padding-bottom: 70px;
	background: #e1e1e11a;
	/* .s-title {
		padding: 70px 0 30px;
	} */

	.services-con {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}
	.service {
		display: flex;
		flex-direction: column;
		gap: 13px;
		padding: 20px;
	}
	.service .icon {
		color: #875010;
		font-size: 25px;
		margin-bottom: 10px;
		background: #874f1027;
		width: 70px;
		height: 70px;
		border-radius: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.5s;
	}
	.service:hover .icon {
		animation: rotateOnce 1s;
	}
	@keyframes rotateOnce {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.service .service-title {
		font-weight: 500;
		font-size: 20px;
	}
	.service .service-desc {
		letter-spacing: 0.1px;
		opacity: 0.8;
		line-height: 23px;
	}
`;

export default ServicesSection;
