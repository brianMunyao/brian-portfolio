'use client';

import { Laptop, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillHighlight from '../global/skill-highlight';
import SectionContainer from '../global/section-container';

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
		<SectionContainer
			id="services"
			className="bg-card border-t border-white/10"
			pillText="What I Do"
			sectionTitle="Let’s Build Something Modern"
			description="From interactive UIs to robust server-side logic, here’s how I help you bring ideas to life."
			style={{
				backgroundColor: 'rgba(0,0,0,0.5)', // Dark base
				color: 'oklch(0.98 0 0)', // Light foreground
			}}
		>
			<div className="grid gap-6 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
				{services.map(({ icon: Icon, title, desc }, i) => (
					<motion.article
						key={i}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.5,
								ease: 'anticipate',
								delay: 0.3 * i,
							},
						}}
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
		</SectionContainer>
	);
};

export default ServicesSection;
