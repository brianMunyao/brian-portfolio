'use client';

import Image from 'next/image';
import { Code, Globe, Calendar, Award, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiAppStoreLine, RiGooglePlayLine } from 'react-icons/ri';
import { motion } from 'motion/react';
import { IProject } from '@/types/IProject';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: IProject }) => {
	const router = useRouter();
	const goToProject = (id: string) => {
		return () => router.push(`/projects/${id}`);
	};

	return (
		<motion.div
			onClick={goToProject(project.id)}
			className="group cursor-pointer break-inside-avoid relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
			whileHover={{ y: -8, scale: 1.01 }}
			transition={{ duration: 0.2, ease: 'easeOut' }}
		>
			{/* Featured Badge */}
			{project.is_featured && (
				<div className="absolute top-4 left-4 z-10">
					<div className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
						<Award className="w-3 h-3" />
						Featured
					</div>
				</div>
			)}

			{/* Status Badge */}
			<div className="absolute top-4 right-4 z-10">
				<div
					className={cn(
						'px-3 py-1 rounded-full text-xs font-semibold shadow-lg',
						project.status === 'Live'
							? 'bg-green-500/20 text-green-500 border border-green-500/30'
							: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
					)}
				>
					{project.status}
				</div>
			</div>

			{/* Project Image */}
			{project.main_image && (
				<div className="relative overflow-hidden rounded-t-2xl">
					<motion.div
						className="relative aspect-[4/3] overflow-hidden"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<Image
							src={project.main_image}
							alt={project.title}
							fill
							className="object-cover transition-all duration-500 group-hover:brightness-110"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						{/* Overlay with project type */}
						<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
							<div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
								<p className="text-white text-sm font-medium">
									{project.type}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			)}

			{/* Content */}
			<div className="p-6">
				{/* Category and Year */}
				<div className="flex items-center justify-between mb-3">
					<span className="text-secondary text-sm font-medium px-3 py-1 bg-secondary/10 rounded-full">
						{project.category}
					</span>
					<div className="flex items-center gap-1 text-white/60 text-sm">
						<Calendar className="w-4 h-4" />
						{project.year}
					</div>
				</div>

				<h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
					{project.title}
				</h3>

				{/* Description */}
				<p className="text-white/70 text-sm leading-relaxed mb-4">
					{project.description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-4">
					{project.tags.slice(0, 4).map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 text-xs font-medium bg-white/10 hover:bg-white/20 text-white/80 rounded-full border border-white/20 transition-colors duration-200"
						>
							{tag.replace('#', '')}
						</span>
					))}
					{project.tags.length > 4 && (
						<span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/60 rounded-full">
							+{project.tags.length - 4}
						</span>
					)}
				</div>

				{/* Links */}
				{(project?.repo_link ||
					project?.web_link ||
					project?.app_store_link ||
					project?.play_store_link) && (
					<div className="flex items-center justify-between pt-4 border-t border-white/10">
						<div className="flex gap-3">
							{project.repo_link && (
								<Link
									href={project.repo_link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 group/link"
									onClick={(e) => e.stopPropagation()}
									title="View Source Code"
								>
									<Code size={16} />
								</Link>
							)}
							{project.web_link && (
								<Link
									href={project.web_link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 group/link"
									onClick={(e) => e.stopPropagation()}
									title="View Live Demo"
								>
									<Globe size={16} />
								</Link>
							)}
							{project.play_store_link && (
								<Link
									href={project.play_store_link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 group/link"
									onClick={(e) => e.stopPropagation()}
									title="Download on Play Store"
								>
									<RiGooglePlayLine size={16} />
								</Link>
							)}
							{project.app_store_link && (
								<Link
									href={project.app_store_link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 group/link"
									onClick={(e) => e.stopPropagation()}
									title="Download on App Store"
								>
									<RiAppStoreLine size={16} />
								</Link>
							)}
						</div>

						{/* View Details Link */}
						<motion.div
							className="flex items-center gap-1 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							initial={{ x: 10 }}
							whileHover={{ x: 0 }}
						>
							View Details
							<ExternalLink className="w-4 h-4" />
						</motion.div>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
