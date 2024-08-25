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

	// const [currentImage, setCurrentImage] = useState(0);
	// const [isViewerOpen, setIsViewerOpen] = useState(false);

	// const openImageViewer = useCallback((index: number) => {
	// 	setCurrentImage(index);
	// 	setIsViewerOpen(true);
	// }, []);

	// const closeImageViewer = () => {
	// 	setCurrentImage(0);
	// 	setIsViewerOpen(false);
	// };

	useEffect(() => {
		const temp = projects.filter((p) => p.id === Number(projectId));

		if (temp.length > 0) {
			setProject(temp[0]);
		} else {
			navigate('/');
		}
	}, [projectId]);

	return !project ? (
		<span>loading</span>
	) : (
		<Container>
			{/* {isViewerOpen && (
				<ImageViewer
					backgroundStyle={{
						zIndex: 999,
						background: 'rgba(0,0,0,0.6)',
					}}
					src={project.gallery}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)} */}
			<div className="inner app-padding">
				<span className="back-btn" onClick={() => navigate(-1)}>
					<TbCircleChevronLeft /> <span>Back</span>
				</span>

				<div className="title-section">
					<h1>{project.name}</h1>
					<p className="project-desc">{project.description}</p>

					{project.features && (
						<>
							<h2 className="features-title">Features</h2>
							<ul className="features">
								{project.features.map((f, i) => (
									<li key={i}>✅ {f}</li>
								))}
							</ul>
						</>
					)}

					<h2>Technologies Used</h2>
					<div className="skills">
						{project.tags.map((p, i) => (
							<Skill key={i} tag={p} />
						))}
					</div>
				</div>

				<div className="gallery-section">
					<h2>Gallery</h2>

					<div className="gallery">
						{project.gallery.map((img, i) => (
							<div
								// onClick={() => openImageViewer(i)}
								className="img"
								key={i}
								style={{
									background: project.color,
								}}
							>
								<img key={i} src={img} alt={img} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
	position: relative;

	.inner {
		position: relative;
		margin-top: 90px;
		flex: 1;
		transition: all 0.2s linear;

		h1,
		h2 {
			text-align: center;
			opacity: 0.8;
			letter-spacing: 0.5px;
		}
		h1 {
			font-size: 45px;
			line-height: 70px;
		}
		h2 {
			font-size: 30px;
			margin: 35px 0 20px;
			color: #2b2b2b;
		}

		.back-btn {
			position: sticky;
			top: 100px;
			width: fit-content;
			transition: all 0.2s linear;
			z-index: 100;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 10px;
			background: #fff;
			color: #ababab;
			padding: 3px 10px;
			border-radius: 10px;
			svg {
				font-size: 25px;
			}
			span {
				font-size: 20px;
			}
			&:hover {
				color: #919191;
			}
		}

		.title-section {
			width: 50%;
			margin: auto;
			text-align: center;
			h1 {
				padding: 60px 10px 30px;
				font-size: 40px;
				line-height: 48px;
			}
			.project-desc {
				text-align: center;
				font-size: 18px;
				font-weight: 300;
				opacity: 0.7;
				letter-spacing: 0.4px;
				line-height: 30px;
			}
			.skills {
				width: 100%;
				margin: 10px auto;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 10px;
			}
			.features-title {
				margin-bottom: 30px;
			}
			ul.features {
				list-style: none;
				li {
					font-size: 17px;
					font-weight: 300;
					opacity: 0.7;
					letter-spacing: 0.4px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 10px;
				}
			}
		}

		.gallery-section {
			.gallery {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
				grid-gap: 20px;

				.img {
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					border-radius: 10px;
				}
				.img img {
					width: 96%;
					max-height: 96%;
					padding: 2%;
					object-fit: contain;
					border-radius: 5px;
					overflow: hidden;
				}

				/* .img {
					position: relative;
					padding-top: 75%;
					border-radius: 10px;
					img {
						position: absolute;
						top: 0;
						left: 0;
						width: 96%;
						max-height: 96%;
						padding: 2%;
						object-fit: contain;
						border-radius: 5px;
					}
				} */
				/* position: relative;
				width: 90%;
				margin: 0 5%;
				height: 0;
				padding: 75% 0 0; */
			}
			/* padding: 20px 0; */
			/* height: fit-content; */

			/* .project-tags {
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
			} */
		}

		@media (max-width: 1000px) {
			.title-section {
				width: 60%;
			}
		}
		@media (max-width: 850px) {
			.title-section {
				width: 60%;
			}
		}

		@media (max-width: 750px) {
			.title-section {
				width: 70%;
			}
		}

		@media (max-width: 650px) {
			.title-section {
				width: 80%;
			}
		}
		@media (max-width: 550px) {
			.title-section {
				width: 90%;
				h1 {
					font-size: 35px;
					line-height: 50px;
					padding: 80px 10px 35px;
				}
			}
			h2 {
				font-size: 25px;
				margin: 40px 0 20px;
			}
		}
	}
`;
export default SingleProjectPage;
