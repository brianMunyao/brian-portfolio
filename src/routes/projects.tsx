import styled from 'styled-components';

import { projects } from '../data/projects';
import Skill from '../components/Skill';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
	return (
		<Container className="app-padding">
			<p className="title p-title">Key Projects</p>
			<p className="subtitle">
				Here you will find some of my notable personal projects that I
				created over the years
			</p>

			<div className="projects">
				{projects.map((p, i) => (
					<Link to={p.to} key={i}>
						<div className="project" key={i}>
							<div className="project-image">
								<img src={p.img} alt="project-name" />
							</div>

							<div className="project-details">
								<p className="project-title">{p.name}</p>

								<p className="project-description">
									{p.description}
								</p>

								<div className="project-tags">
									{p.tags.map((tag, i) => (
										<Skill key={i} tag={tag} brief={true} />
									))}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	border-top: 2px solid #f6f6f6;
	padding-top: 80px;
	padding-bottom: 80px;

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: auto;
		column-gap: 40px;
		row-gap: 60px;

		.project {
			width: 100%;
			height: 100%;
			background: #fff;
			border: 1px solid rgb(245, 245, 245);
			padding: 10px;
			border-radius: 15px;
			box-shadow: 0px 5px 10px #83838333;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 220px auto;
			transition: all 0.15s linear;

			&:hover {
				transform: scale(1.015);
			}
			.project-image {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
			}
			.project-image img {
				max-width: 100%;
				max-height: 100%;
				object-fit: cover;
			}
			.project-details {
				padding: 10px;
			}
			.project-title {
				color: #113834;
				font-weight: 600;
				font-size: 18px;
				letter-spacing: 0.3px;
			}

			.project-description {
				letter-spacing: 0.2px;
				color: #767676;
				margin: 10px 0 20px;
				font-weight: 300;
				flex: 1;
			}
			.project-tags {
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
				gap: 10px;
			}
			.img {
				margin-bottom: 15px;
				height: 40px;
			}
		}
	}

	@media (max-width: 650px) {
		.projects {
			grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
			row-gap: 40px;
			padding: 10px 30px;
		}
	}
	@media (max-width: 550px) {
		.projects {
			grid-template-columns: 1fr;
			padding: 5px;
		}
	}
`;

export default ProjectsPage;
