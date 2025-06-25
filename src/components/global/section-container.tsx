'use client';

import React, { PropsWithChildren, ReactNode } from 'react';
import { motion, MotionStyle, Variants } from 'motion/react';
import { cn } from '@/lib/utils';

type Props = PropsWithChildren<{
	id: string;
	pillText?: string;
	sectionTitle?: string;
	customSectionTitle?: ReactNode;
	description?: string;
	style?: MotionStyle;
	className?: string;
}>;

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

const SectionContainer = ({
	id,
	pillText,
	sectionTitle,
	customSectionTitle,
	description,
	children,
	style = {},
	className,
}: Props) => {
	return (
		<motion.section
			id={id}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className={cn('py-28 px-6 md:px-12', className)}
			style={style}
		>
			<motion.div
				variants={childVariants}
				className="text-center mb-16 max-w-3xl mx-auto"
			>
				{pillText && (
					<div className="mb-8 text-center inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-xs font-medium text-white shadow">
						<span>{pillText}</span>
					</div>
				)}

				{sectionTitle ? (
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{sectionTitle}
					</h2>
				) : customSectionTitle ? (
					customSectionTitle
				) : null}

				{description && (
					<p className="tracking-wide font-extralight">
						{description}
					</p>
				)}
			</motion.div>

			{children}
		</motion.section>
	);
};

export default SectionContainer;
