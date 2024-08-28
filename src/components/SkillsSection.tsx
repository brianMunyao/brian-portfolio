import styled from 'styled-components';
import { databases, frameworks, languages, tools } from '../data/skills';
import Skill from './Skill';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1, // Time between animations of each child
			delayChildren: 0.1, // Delay before the first child starts animating
		},
	},
};

const childVariants: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'anticipate',
			duration: 0.3,
		},
	},
};

const SkillsSection = () => {
	return (
		<Container
			id="skills"
			className="app-padding"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
		>
			<motion.p variants={childVariants} className="title">
				Skills and Tools
			</motion.p>
			<motion.p variants={childVariants} className="subtitle">
				Here are some of the most notable programming languages,
				frameworks, and tools that I have used in my projects
			</motion.p>

			<div className="skills-con">
				<motion.p variants={childVariants} className="skills-title">
					Programming Languages
				</motion.p>

				<div className="skills">
					{languages.map((lang, i) => (
						<motion.div key={i} variants={childVariants}>
							<Skill tag={lang} />
						</motion.div>
					))}
				</div>

				<motion.p variants={childVariants} className="skills-title">
					Development Frameworks
				</motion.p>
				<div className="skills">
					{frameworks.map((fr, i) => (
						<motion.div key={i} variants={childVariants}>
							<Skill tag={fr} />
						</motion.div>
					))}
				</div>

				<motion.p variants={childVariants} className="skills-title">
					Databases
				</motion.p>
				<div className="skills">
					{databases.map((db, i) => (
						<motion.div key={i} variants={childVariants}>
							<Skill tag={db} />
						</motion.div>
					))}
				</div>

				<motion.p variants={childVariants} className="skills-title">
					Tools
				</motion.p>
				<div className="skills">
					{tools.map((tool, i) => (
						<motion.div key={i} variants={childVariants}>
							<Skill tag={tool} />
						</motion.div>
					))}
				</div>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	padding-top: 40px;
	padding-bottom: 90px;

	.skills-con {
		.skills-title {
			text-align: center;
			font-size: 20px;
			font-weight: 600;
			opacity: 0.6;
			margin: 30px 0 25px;
		}

		.skills {
			width: 70%;
			margin: 10px auto 15px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 15px;

			@media (max-width: 500px) {
				width: 95%;
			}
		}
	}
`;

export default SkillsSection;
