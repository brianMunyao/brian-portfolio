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
				Here are some of my notable personal projects built over the
				years.
			</motion.p>

			<div className="projects-grid">
				{projects.map((project) => (
					<Link
						to={`/projects/${project.id}`}
						key={project.id}
						aria-label={`View ${project.name}`}
					>
						<motion.div
							className="project-card"
							variants={childVariants}
							whileHover={{ scale: 1.015 }}
						>
							<div
								className="project-thumbnail"
								style={{ background: project.color }}
							>
								<img
									src={project.img}
									alt={`Screenshot of ${project.name}`}
									loading="lazy"
								/>
							</div>
							<div className="project-details">
								<h3>{project.name}</h3>
								<p>{project.description}</p>
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
		gap: 30px;
	}

	.project-card {
		height: 100%;
		background: #ffffff;
		border-radius: 16px;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: all 0.1s ease;
		cursor: pointer;
		flex: 1;

		&:hover {
			box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
		}
	}

	.project-thumbnail {
		padding: 10px;
		width: 100%;
		height: 200px;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.project-details {
		padding: 20px;

		h3 {
			margin: 0;
			font-size: 1.4rem;
			color: #222;
		}

		p {
			margin: 10px 0 15px;
			color: #666;
			font-size: 0.95rem;
			line-height: 1.4;
		}

		.project-tags {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			margin-bottom: 15px;

			.tag {
				background: #f1f1f1;
				color: #333;
				padding: 4px 10px;
				border-radius: 20px;
				font-size: 0.8rem;
			}
		}

		.view-project {
			font-weight: 500;
			color: #007bff;
			font-size: 0.9rem;
			margin-top: auto;
			transition: color 0.3s ease;

			&:hover {
				color: #0056b3;
			}
		}
	}

	@media (max-width: 600px) {
		.project-details {
			h3 {
				font-size: 1.2rem;
			}
			p {
				font-size: 0.9rem;
			}
		}
	}
`;

export default ProjectsSection;
