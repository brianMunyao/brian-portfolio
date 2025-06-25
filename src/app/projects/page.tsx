'use client';

import { projects } from '@/constants/projects';
import React from 'react';
import { motion } from 'motion/react';
import ProjectCard from '@/components/projects/project-card';

const ProjectsPage = () => {
	return (
		<section className="w-full px-6 md:px-12 py-24 ">
			<div className="flex flex-col mt-[100px]">
				<motion.div
					className="mx-auto mb-8"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<span className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 text-xs font-medium text-white shadow-lg">
						<span>Built with passion & purpose 💡</span>
					</span>
				</motion.div>

				<motion.h2
					className=" text-4xl md:text-5xl font-bold text-center mb-6 text-foreground"
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
					experiences, and web platforms I&apos;ve crafted using
					modern tools and frameworks. Each project highlights a
					unique challenge and the solution I engineered to solve it.
				</motion.p>
			</div>

			<div className="mx-auto max-w-7xl w-full columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
