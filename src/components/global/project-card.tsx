import { IProject } from '@/types/IProject';
import Image from 'next/image';
import { Github, ExternalLink, Apple, Play } from 'lucide-react';
import { motion } from 'motion/react';

const ProjectCard = ({ project }: { project: IProject }) => (
	<motion.div
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		viewport={{ once: true }}
		className="bg-card rounded-xl shadow-lg border border-border overflow-hidden flex flex-col"
	>
		{/* Image */}
		<div className="relative h-52 w-full">
			<Image
				src={project.main_image}
				alt={project.title}
				fill
				className="object-cover"
			/>
		</div>

		{/* Info */}
		<div className="p-6 flex flex-col justify-between h-full gap-4">
			<div>
				<h3 className="text-xl font-bold text-foreground mb-1">
					{project.title}
				</h3>
				<p className="text-muted-foreground text-sm">
					{project.description}
				</p>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
					>
						{tag}
					</span>
				))}
			</div>

			<div className="flex gap-2 flex-wrap pt-2">
				{project.repo_link && (
					<a
						href={project.repo_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs hover:underline flex items-center gap-1"
					>
						<Github size={14} />
						Code
					</a>
				)}
				{project.web_link && (
					<a
						href={project.web_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs hover:underline flex items-center gap-1"
					>
						<ExternalLink size={14} />
						Live
					</a>
				)}
				{project.play_store_link && (
					<a
						href={project.play_store_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs hover:underline flex items-center gap-1"
					>
						<Play size={14} />
						Play
					</a>
				)}
				{project.app_store_link && (
					<a
						href={project.app_store_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs hover:underline flex items-center gap-1"
					>
						<Apple size={14} />
						App Store
					</a>
				)}
			</div>
		</div>
	</motion.div>
);

export default ProjectCard;
