'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import { type LucideIcon } from 'lucide-react';

type Props = {
	title: string;
	subtitle: string;
	color: string;
	icon: LucideIcon;
	features: { icon: LucideIcon; text: string }[];
	quote: string;
};

const TwoWorldFeatureCard = ({
	title,
	subtitle,
	color,
	icon: Icon,
	features,
	quote,
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<Card
				className={`border-${color}/30 hover:border-${color}/50 bg-card transition duration-300`}
			>
				<CardContent className="p-8">
					<div className="flex items-center gap-4 mb-6">
						<motion.div
							className={`w-16 h-16 rounded-full flex items-center justify-center bg-${color}`}
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<Icon className="h-8 w-8 text-white" />
						</motion.div>
						<div>
							<h3 className="text-2xl font-bold text-card-foreground">
								{title}
							</h3>
							<p className={`text-${color}`}>{subtitle}</p>
						</div>
					</div>

					<div className="space-y-4">
						{features.map(({ icon: FeatureIcon, text }, index) => (
							<motion.div
								key={index}
								className="flex items-center gap-3 text-muted-foreground"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 + 0.4 }}
								whileHover={{
									x: 10,
									color: `hsl(var(--${color}))`,
								}}
								viewport={{ once: true }}
							>
								<FeatureIcon
									className={`h-5 w-5 text-${color}`}
								/>
								<span>{text}</span>
							</motion.div>
						))}
					</div>

					<motion.blockquote
						className="mt-6 p-4 rounded-lg bg-muted"
						whileHover={{ scale: 1.02 }}
					>
						<p className="text-sm text-muted-foreground italic">
							{quote}
						</p>
					</motion.blockquote>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default TwoWorldFeatureCard;
