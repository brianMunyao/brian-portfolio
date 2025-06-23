'use client';

import { motion } from 'motion/react';
import { Bug, Code, Laptop, Shield, TestTube, Zap } from 'lucide-react';
import TwoWorldFeatureCard from './two-world-feature-card';

const TwoWorldsSection = () => {
	return (
		<section className="px-6 md:px-12 py-24">
			<div className="max-w-7xl mx-auto">
				<motion.header
					className="text-center mb-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Bridging{' '}
						<span className="text-secondary">Two Worlds</span>
					</h2>
					<p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
						From crafting reliable code to ensuring rock-solid
						quality—I bring the best of both engineering and QA
						together.
					</p>
				</motion.header>

				<div className="grid md:grid-cols-2 gap-10 md:gap-14">
					<TwoWorldFeatureCard
						title="Full-Stack Developer"
						subtitle="Solution Builder"
						color="secondary"
						icon={Code}
						features={[
							{
								icon: Laptop,
								text: 'React, Next.js, TypeScript',
							},
							{ icon: Code, text: 'Node.js, Python, Java' },
							{ icon: Shield, text: 'PostgreSQL, MongoDB' },
							{ icon: Zap, text: 'Docker, Firebase, GCP' },
						]}
						quote="I build scalable applications with clean code and thoughtful architecture."
					/>

					<TwoWorldFeatureCard
						title="QA Engineer"
						subtitle="Quality Guardian"
						color="destructive"
						icon={Bug}
						features={[
							{
								icon: TestTube,
								text: 'Automated Testing with Cypress',
							},
							{
								icon: Shield,
								text: 'Test Case Development & Execution',
							},
							{ icon: Bug, text: 'Bug Tracking & Documentation' },
							{
								icon: Zap,
								text: 'Performance & Regression Testing',
							},
						]}
						quote="I catch bugs before they reach users—ensuring every feature works flawlessly."
					/>
				</div>

				<motion.div
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<div className="max-w-4xl mx-auto rounded-2xl p-8 border border-border bg-card hover:border-secondary transition duration-300">
						<h3 className="text-3xl font-bold mb-4">The Bridge</h3>
						<p className="text-muted-foreground text-lg">
							By combining both disciplines, I write{' '}
							<span className="text-secondary font-semibold">
								testable code
							</span>
							, anticipate{' '}
							<span className="text-destructive font-semibold">
								edge cases
							</span>
							, and deliver{' '}
							<span className="text-chart-4 font-semibold">
								robust experiences
							</span>{' '}
							from day one.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TwoWorldsSection;
