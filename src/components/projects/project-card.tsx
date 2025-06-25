'use client';

import Image from 'next/image';
import { Github, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiAppStoreLine, RiGooglePlayLine } from 'react-icons/ri';
import { motion } from 'motion/react';
import { IProject } from '@/types/IProject';

const ProjectCard = ({ project }: { project: IProject }) => {
	const router = useRouter();
	const goToProject = (id: string) => {
		return () => router.push(`/projects/${id}`);
	};

	return (
		<div
			onClick={goToProject(project.id)}
			className="cursor-pointer break-inside-avoid p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
			style={{ backgroundColor: 'oklch(0.22 0.025 180)' }}
		>
			{project.main_image && (
				<div className="overflow-hidden rounded-lg mb-4">
					<motion.div
						whileHover={{ scale: 1.05, y: -2 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={project.main_image}
							alt={project.title}
							width={600}
							height={400}
							className="w-full h-auto object-cover transition-transform duration-300"
						/>
					</motion.div>
				</div>
			)}

			<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
			<p className="text-sm mb-4 opacity-90">{project.description}</p>
			<div className="flex flex-wrap gap-2 text-xs mb-4">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="px-2 py-1 rounded-md"
						style={{
							backgroundColor: 'oklch(0.3 0.03 180)',
							color: 'oklch(0.98 0 0)',
						}}
					>
						{tag}
					</span>
				))}
			</div>

			{(project?.repo_link ||
				project?.web_link ||
				project?.app_store_link ||
				project?.play_store_link) && (
				<div className="flex gap-4 flex-wrap pt-2">
					{project.repo_link && (
						<Link
							href={project.repo_link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-secondary text-xs hover:underline flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<Github size={14} />
							Code
						</Link>
					)}
					{project.web_link && (
						<Link
							href={project.web_link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-secondary text-xs hover:underline flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<Globe size={14} />
							Live
						</Link>
					)}
					{project.play_store_link && (
						<Link
							href={project.play_store_link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-secondary text-xs hover:underline flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<RiGooglePlayLine size={14} />
							Play Store
						</Link>
					)}
					{project.app_store_link && (
						<Link
							href={project.app_store_link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-secondary text-xs hover:underline flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<RiAppStoreLine size={14} />
							App Store
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
