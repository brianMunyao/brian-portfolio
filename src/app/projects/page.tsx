'use client';

import { projects } from '@/constants/projects';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import { RiAppStoreLine, RiGooglePlayLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

const ProjectsPage = () => {
	const router = useRouter();
	const goToProject = (id: string) => {
		return () => router.push(`/projects/${id}`);
	};

	return (
		<section className="w-full px-6 md:px-12 py-24 ">
			{/* <motion.div
				className="mb-8"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 text-xs font-medium text-white shadow-lg">
					<span>Hi 👋, Let&apos;s Build Something Amazing</span>
				</div>
			</motion.div> */}

			<motion.h2
				className="mt-[100px] text-4xl md:text-5xl font-bold text-center mb-6 text-foreground"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				Featured Projects
			</motion.h2>

			<motion.p
				className="max-w-3xl text-center mx-auto text-muted-foreground text-sm md:text-base mb-16"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				A curated collection of full-stack applications, mobile
				experiences, and web platforms I’ve crafted using modern tools
				and frameworks. Each project highlights a unique challenge and
				the solution I engineered to solve it.
			</motion.p>

			<div className="mx-auto max-w-7xl w-full columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
				{projects.map((project, index) => (
					<motion.div
						onClick={goToProject(project.id)}
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className=" cursor-pointer break-inside-avoid p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
						style={{
							backgroundColor: 'oklch(0.22 0.025 180)',
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
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
