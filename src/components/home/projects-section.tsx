'use client';

import { motion } from 'motion/react';
import { projects } from '@/constants/projects';
import ProjectCard from '../projects/project-card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import SectionContainer from '../global/section-container';

type Props = {
	count?: number;
};

const ProjectsSection = ({ count = projects.length }: Props) => {
	return (
		<SectionContainer
			id="projects"
			className="border-t border-white/10 border-b"
			pillText="Built with passion & purpose 💡"
			sectionTitle="Featured Projects"
			description="A curated collection of full-stack applications, mobile experiences, and web platforms I've crafted using modern tools and frameworks. Each project highlights a unique challenge and the solution I engineered to solve it."
		>
			<div className="mx-auto max-w-7xl w-full columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
				{projects.slice(0, count).map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.5,
								ease: 'anticipate',
								delay: 0.3 * index,
							},
						}}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</div>

			<div className="flex items-center justify-center mt-10">
				<Link href="/projects">
					<Button className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-4 py-2 rounded-sm text-sm shadow-lg flex items-center gap-2">
						View More
						<ArrowRight className="size-4 " />
					</Button>
				</Link>
			</div>
		</SectionContainer>
	);
};

export default ProjectsSection;
