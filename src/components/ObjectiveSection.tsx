import { motion } from 'framer-motion';
import styled from 'styled-components';

const ObjectiveSection = () => {
	return (
		<Container
			id="objective"
			className="app-padding"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<p className="title">Objective</p>

			<p className="objective">
				Highly motivated{' '}
				<span className="highlight">Software Engineer</span> with a
				strong background in
				<span className="highlight">Computer Science</span> and Quality
				Assurance. Experienced in collaborating effectively with teams
				to develop and optimize software applications.{' '}
				<span className="highlight">Proactive learner</span> committed
				to staying updated on industry trends and continuously improving
				technical skills. Seeking a challenging position to contribute
				to a dynamic organization's success and drive impactful results.
			</p>
		</Container>
	);
};

const Container = styled(motion.div)`
	padding-top: 30px;
	padding-bottom: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	.objective {
		text-align: center;
		opacity: 0.6;
		line-height: 26px;
		width: 80%;
	}
	& > .inner {
		position: relative;
		overflow: hidden;

		background: #633a0b0e;
		border-radius: 50px;

		/* div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}
		 */
	}

	@media screen and (max-width: 500px) {
		padding-top: 10px;
		padding-bottom: 40px;

		.objective {
			width: 100%;
		}
	}
`;

export default ObjectiveSection;
