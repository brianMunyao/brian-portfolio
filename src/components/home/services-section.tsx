'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Server, Smartphone, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SectionContainer from '../global/section-container';

const services = [
	{
		icon: Laptop,
		title: 'Frontend Applications',
		shortDesc: 'Modern, responsive web applications with exceptional UX',
		fullDesc:
			'I create captivating frontend experiences using cutting-edge technologies that deliver seamless interactions and stunning visual designs.',
		technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
		color: 'secondary',
	},
	{
		icon: Server,
		title: 'Backend Systems',
		shortDesc: 'Scalable, secure APIs and server architectures',
		fullDesc:
			'Building robust backend solutions that power modern applications with reliability, security, and performance at scale.',
		technologies: [
			'Node.js',
			'Express.js',
			'Python',
			'Flask',
			'PostgreSQL',
			'MongoDB',
		],
		color: 'destructive',
	},
	{
		icon: Smartphone,
		title: 'Mobile Applications',
		shortDesc: 'Native-like mobile experiences across platforms',
		fullDesc:
			'Developing cross-platform mobile applications that provide native performance and user experiences on both iOS and Android.',
		technologies: ['React Native', 'Expo', 'TypeScript'],
		color: 'secondary',
	},
];

const ServicesSection = () => {
	const [activeService, setActiveService] = useState<number | null>(null);

	return (
		<SectionContainer
			id="services"
			className="bg-card border-t border-white/10"
			pillText="What I Do"
			sectionTitle="Let's Build Something Modern"
			description="From interactive UIs to robust server-side logic, here’s how I help you bring ideas to life."
			style={{
				backgroundColor: 'rgba(0,0,0,0.5)',
				color: 'oklch(0.98 0 0)',
			}}
		>
			<div className="grid gap-8 max-w-7xl mx-auto lg:grid-cols-3">
				{services.map((service, i) => {
					const Icon = service.icon;
					const isActive = activeService === i;

					return (
						<motion.article
							key={i}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									ease: 'anticipate',
									delay: 0.2 * i,
								},
							}}
							whileHover={{ y: -8 }}
							onHoverStart={() => setActiveService(i)}
							onHoverEnd={() => setActiveService(null)}
							className={`group relative p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col overflow-hidden ${
								isActive
									? 'border-secondary/50 bg-secondary/5 shadow-lg shadow-secondary/10'
									: 'border-white/10 bg-white/5 hover:border-white/20 hover:shadow-xl'
							}`}
						>
							{/* Header */}
							<div className="relative z-10 flex items-start justify-between mb-4">
								<motion.div
									className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
										isActive
											? 'bg-secondary/20 text-secondary shadow-lg'
											: 'bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white'
									}`}
									animate={
										isActive
											? {
													scale: [1, 1.1, 1],
													rotate: [0, 5, 0, -5, 0],
											  }
											: {}
									}
									transition={{
										duration: 2,
										repeat: isActive ? Infinity : 0,
									}}
								>
									<Icon className="w-7 h-7" />
								</motion.div>
								<ChevronRight
									className={`w-5 h-5 transition-transform duration-300 ${
										isActive
											? 'rotate-90 text-white'
											: 'text-white/40 group-hover:text-white/60'
									}`}
								/>
							</div>

							{/* Title & Description */}
							<div className="relative z-10 mb-4">
								<h3
									className={`text-xl font-bold mb-2 transition-colors ${
										isActive
											? 'text-white'
											: 'text-white group-hover:text-white'
									}`}
								>
									{service.title}
								</h3>
								<p className="text-white/70 text-sm leading-relaxed">
									{isActive
										? service.fullDesc
										: service.shortDesc}
								</p>
							</div>

							{/* Technologies */}
							{false && (
								<AnimatePresence>
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										className="relative z-10 mb-4"
									>
										<h4 className="text-white/90 font-semibold text-sm mb-2">
											Technologies
										</h4>
										<div className="flex flex-wrap gap-2">
											{service.technologies.map(
												(tech, techIndex) => (
													<motion.span
														key={tech}
														initial={{
															opacity: 0,
															scale: 0.8,
														}}
														animate={{
															opacity: 1,
															scale: 1,
														}}
														transition={{
															delay:
																techIndex * 0.1,
														}}
														className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80"
													>
														{tech}
													</motion.span>
												)
											)}
										</div>
									</motion.div>
								</AnimatePresence>
							)}
						</motion.article>
					);
				})}
			</div>
		</SectionContainer>
	);
};

export default ServicesSection;
