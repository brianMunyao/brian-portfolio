'use client';

import { Laptop, Server, Smartphone } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import SkillHighlight from '../global/skill-highlight';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2,
		},
	},
};

const childVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const services = [
	{
		icon: Laptop,
		title: 'Frontend Apps',
		desc: (
			<>
				I excel at developing captivating frontend applications using
				modern frameworks like <SkillHighlight>React</SkillHighlight>{' '}
				and <SkillHighlight>Next.js</SkillHighlight>, creating seamless
				and interactive user experiences.
			</>
		),
	},
	{
		icon: Server,
		title: 'Backend Apps',
		desc: (
			<>
				Good at leveraging frameworks like{' '}
				<SkillHighlight>Node.js</SkillHighlight>,{' '}
				<SkillHighlight>Express.js</SkillHighlight>, and{' '}
				<SkillHighlight>Flask</SkillHighlight> to build robust and
				scalable server-side applications.
			</>
		),
	},
	{
		icon: Smartphone,
		title: 'Mobile Apps',
		desc: (
			<>
				I specialize in crafting high-performance mobile applications
				with <SkillHighlight>React Native</SkillHighlight> that deliver
				native-like experiences across platforms.
			</>
		),
	},
];

const ServicesSection = () => {
	return (
		<motion.section
			id="services"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
			className="py-28 px-6 md:px-12 bg-card border-t border-white/10"
			style={{
				backgroundColor: 'rgba(0,0,0,0.5)', // Dark base
				color: 'oklch(0.98 0 0)', // Light foreground
			}}
		>
			<motion.div
				variants={childVariants}
				className="text-center mb-16 max-w-3xl mx-auto"
			>
				<div className="mb-8 text-center inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-xs font-medium text-white shadow">
					<span>What I Do</span>
				</div>

				<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
					Let’s Build Something Modern
				</h2>
				<p className="text-muted-foreground text-base">
					From interactive UIs to robust server-side logic, here’s how
					I help you bring ideas to life.
				</p>
			</motion.div>

			<div className="grid gap-6 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
				{services.map(({ icon: Icon, title, desc }, i) => (
					<motion.article
						key={i}
						variants={childVariants}
						className="group p-6 rounded-xl border border-border bg-muted/5 transition hover:shadow-xl h-full flex flex-col"
					>
						<div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4 text-xl transition-transform group-hover:scale-110">
							<Icon className="w-6 h-6" />
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							{title}
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed flex-1">
							{desc}
						</p>
					</motion.article>
				))}
			</div>
		</motion.section>
	);
};

export default ServicesSection;
