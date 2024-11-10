import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { projects } from '../data/projects';
import Skill from '../components/Skill';
import { childVariants, containerVariants } from '../constants/framer-configs';

const ProjectsSection = () => {
	return (
		<Container
			id="projects"
			className="app-padding"
			variants={containerVariants}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			viewport={{ once: true }}
		>
			<motion.p variants={childVariants} className="title p-title">
				Key Projects
			</motion.p>
			<motion.p variants={childVariants} className="subtitle">
				Here you will find some of my notable personal projects that I
				created over the years.
			</motion.p>

			<div className="projects-grid">
				{projects.map((project, i) => (
					<Link to={`/projects/${project.id}`} key={i}>
						<motion.div
							variants={childVariants}
							className="project-card"
						>
							<img
								src={project.img}
								alt={`${project.name} main image`}
								className="project-image"
								style={{ background: project.color }}
								loading="lazy"
							/>
							<div className="project-info">
								<h3 className="project-title">
									{project.name}
								</h3>
								<p className="project-description">
									{project.description}
								</p>
								<div className="project-tags">
									{project.tags.map((tag, i) => (
										<Skill key={i} tag={tag} brief={true} />
									))}
								</div>
							</div>
						</motion.div>
					</Link>
				))}
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	border-top: 2px solid #f6f6f6;
	padding-top: 80px;
	padding-bottom: 80px;

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 20px;
		padding: 20px;
	}

	.project-card {
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
	}

	.project-image {
		width: 100%;
		height: 300px;
		object-fit: contain;
	}

	.project-info {
		padding: 15px;
	}

	.project-title {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 10px;
	}

	.project-description {
		margin-bottom: 15px;
		color: #767676;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		gap: 10px;
	}

	@media (max-width: 650px) {
		.projects-grid {
			grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
			row-gap: 40px;
			padding: 10px 30px;
		}
	}

	@media (max-width: 550px) {
		.projects-grid {
			grid-template-columns: 1fr;
			padding: 5px;
		}
	}
`;

export default ProjectsSection;
