import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbCircleChevronLeft } from 'react-icons/tb';

import { projects } from '../data/projects';
import IProject from '../types/IProject';
import Skill from '../components/Skill';

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const loader = async ({ params }: { params: any }) => {
	return params.projectId;
};

const SingleProjectPage = () => {
	const projectId = useLoaderData() as string;
	const navigate = useNavigate();

	const [project, setProject] = useState<IProject | null>(null);

	useEffect(() => {
		const temp = projects.find((p) => p.id === Number(projectId));
		if (temp) setProject(temp);
		else navigate('/');
	}, [projectId]);

	if (!project) return <span>Loading...</span>;

	return (
		<Container>
			<div className="inner app-padding">
				<BackBtn onClick={() => navigate(-1)}>
					<TbCircleChevronLeft />
					<span>Back</span>
				</BackBtn>

				<section className="title-section">
					<h1>{project.name}</h1>
					<p className="project-desc">{project.description}</p>
				</section>

				{project.features && (
					<section>
						<h2>Features</h2>
						<ul className="features">
							{project.features.map((f, i) => (
								<li key={i}>✅ {f}</li>
							))}
						</ul>
					</section>
				)}

				{project.link && (
					<section>
						<h2>Live Demo</h2>
						<div className="link">
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
							>
								Visit Project
							</a>
						</div>
					</section>
				)}

				<section>
					<h2>Technologies Used</h2>
					<div className="skills">
						{project.tags.map((tag, i) => (
							<Skill key={i} tag={tag} />
						))}
					</div>
				</section>

				<section className="gallery-section">
					<h2>Gallery</h2>
					<div className="gallery">
						{project.gallery.map((img, i) => (
							<div
								className="img"
								key={i}
								style={{ background: project.color }}
							>
								<img src={img} alt={`Gallery ${i + 1}`} />
							</div>
						))}
					</div>
				</section>
			</div>
		</Container>
	);
};

export const BackBtn = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 10px;
	color: #666;
	cursor: pointer;
	margin-bottom: 30px;
	font-size: 18px;

	svg {
		font-size: 28px;
	}
	&:hover {
		color: #333;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;

	.inner {
		max-width: 1100px;
		margin: 100px auto 50px;
		position: relative;

		h1 {
			font-size: 42px;
			text-align: center;
			margin-bottom: 20px;
			color: #2b2b2b;
		}

		h2 {
			font-size: 28px;
			margin: 40px 0 20px;
			text-align: center;
			color: #444;
		}

		.project-desc {
			text-align: center;
			font-size: 18px;
			font-weight: 300;
			opacity: 0.75;
			line-height: 1.6;
			max-width: 800px;
			margin: 0 auto 30px;
		}

		.back-btn {
			position: absolute;
			top: -60px;
			left: 0;
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;
			font-size: 18px;
			color: #666;
			transition: color 0.2s;
			svg {
				font-size: 26px;
			}
			&:hover {
				color: #333;
			}
		}

		.link {
			text-align: center;
			margin-top: 10px;
			a {
				display: inline-block;
				background-color: dodgerblue;
				color: white;
				padding: 10px 20px;
				border-radius: 8px;
				text-decoration: none;
				transition: background 0.2s;
				&:hover {
					background-color: #0077d9;
				}
			}
		}

		.skills {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 10px;
			margin-top: 15px;
		}

		.features {
			list-style: none;
			padding: 0;
			text-align: center;
			li {
				font-size: 17px;
				margin-bottom: 8px;
				opacity: 0.75;
			}
		}

		.gallery-section {
			margin-top: 40px;

			.gallery {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
				gap: 20px;

				.img {
					border-radius: 10px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
					padding: 8px;
					background: #f9f9f9;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						width: 100%;
						height: auto;
						object-fit: contain;
						border-radius: 8px;
					}
				}
			}
		}

		@media (max-width: 600px) {
			h1 {
				font-size: 32px;
			}
			h2 {
				font-size: 22px;
			}
			.project-desc {
				font-size: 16px;
			}
			.back-btn {
				top: -50px;
			}
		}
	}
`;

export default SingleProjectPage;
