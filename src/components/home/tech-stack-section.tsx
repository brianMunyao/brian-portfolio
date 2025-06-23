'use client';

import { skills } from '@/constants/skills';
import { motion } from 'framer-motion';

const TechStackSection = () => {
	return (
		<section
			className="w-full py-24 px-6 md:px-12"
			style={{
				backgroundColor: 'oklch(0.15 0 0)',
				color: 'oklch(1 0 0)',
			}}
		>
			<div className="max-w-6xl mx-auto space-y-12">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="text-4xl md:text-5xl font-bold">
						Tech I Use
					</h2>
					<p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
						My preferred tools and technologies, spanning frontend,
						backend, and ops.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{skills.map(
						({ name, Logo, backColor, textColor, isTop }) => (
							<motion.div
								key={name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true }}
								className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl shadow-md hover:scale-[1.03] transition-transform"
								style={{
									backgroundColor: backColor,
									color: textColor,
								}}
							>
								{Logo && <Logo className="w-6 h-6" />}
								<span className="text-sm font-semibold">
									{name}
								</span>
								{isTop && (
									<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white">
										Top Skill
									</span>
								)}
							</motion.div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default TechStackSection;
