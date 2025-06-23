'use client';

import { projects } from '@/constants/projects';
import Image from 'next/image';
import { motion } from 'motion/react';
import { RiAppStoreLine, RiGooglePlayLine } from 'react-icons/ri';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
	count?: number;
};

const ProjectsSection = ({ count = projects.length }: Props) => {
	const router = useRouter();
	const goToProject = (id: string) => {
		return () => router.push(`/projects/${id}`);
	};

	return (
		<section
			className="w-full px-6 md:px-12 py-24 border-t border-white/10 border-b"
			// style={
			// 	{
			// 		backgroundColor: 'oklch(0.19 0 0)', // Dark base
			// 		color: 'oklch(0.98 0 0)', // Light foreground
			// 	}
			// }
		>
			<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
				Featured Projects
			</h2>

			<div className="mx-auto max-w-7xl w-full columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
				{projects.slice(0, count).map((project, index) => (
					<motion.div
						onClick={goToProject(project.id)}
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="break-inside-avoid p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
						style={{
							backgroundColor: 'oklch(0.22 0.025 180)', // Card
						}}
					>
						{project.main_image && (
							<Image
								src={project.main_image}
								alt={project.title}
								width={600}
								height={400}
								className="rounded-lg mb-4 w-full h-auto object-cover"
							/>
						)}
						<h3 className="text-xl font-semibold mb-2">
							{project.title}
						</h3>
						<p className="text-sm mb-4 opacity-90">
							{project.description}
						</p>
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
									>
										<RiAppStoreLine size={14} />
										App Store
									</Link>
								)}
							</div>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
	// return (
	// 	<section className="py-24 px-6 md:px-12 border-t border-white/10">
	// 		<div className="max-w-7xl mx-auto space-y-12">
	// 			{/* Heading */}
	// 			<div className="text-center max-w-3xl mx-auto">
	// 				<h2 className="text-4xl md:text-5xl font-bold mb-4">
	// 					Featured Projects
	// 				</h2>
	// 				<p className="text-muted-foreground text-lg">
	// 					Some highlights from my recent work, spanning mobile,
	// 					web, and QA.
	// 				</p>
	// 			</div>

	// 			{/* Staggered Grid */}
	// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
	// 				{projects.map((project, i) => (
	// 					<div
	// 						key={project.id}
	// 						className={`
	// 							${i % 2 === 1 ? 'md:translate-y-24' : ''}
	// 							transition-transform duration-500
	// 						`}
	// 					>
	// 						<ProjectCard project={project} />
	// 					</div>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</section>
	// );
};

export default ProjectsSection;
