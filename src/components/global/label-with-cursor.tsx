import React from 'react';
import { motion, useSpring } from 'motion/react';

import { cn } from '@/lib/utils';
import { Pointer } from '../ui/pointer-highlight';

type Props = {
	label: string;
	cursorLocation?: 'top-left' | 'top-right';
	className?: string;
	variant?: 'filled' | 'outline';
};

const LabelWithCursor = ({
	label,
	cursorLocation = 'top-right',
	className = ' left-8 md:left-20',
	variant = 'filled',
}: Props) => {
	const x = useSpring(0, { stiffness: 300, damping: 30 });
	const y = useSpring(0, { stiffness: 300, damping: 30 });

	return (
		<motion.div
			className={cn(
				`absolute top-[calc(25%+70px)] md:top-[calc(25%+100px)] pointer-events-none md:pointer-events-auto`,
				className
			)}
			initial={{
				opacity: 0,
				x: cursorLocation === 'top-left' ? 50 : -50,
				rotate: cursorLocation === 'top-right' ? -10 : 10,
			}}
			animate={{
				opacity: 1,
				x: 0,
				rotate: cursorLocation === 'top-right' ? -5 : 5,
			}}
			transition={{ duration: 0.8, delay: 0.5 }}
			style={{ x, y }}
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				x.set((e.clientX - centerX) * -0.1);
				y.set((e.clientY - centerY) * -0.1);
			}}
			onMouseLeave={() => {
				x.set(0);
				y.set(0);
			}}
		>
			<div
				className={cn(
					' px-4 py-2 rounded-lg font-semibold text-sm shadow-lg',
					{
						'bg-secondary text-secondary-foreground':
							variant === 'filled',
					},
					{
						'bg-transparent border border-secondary text-secondary':
							variant === 'outline',
					}
				)}
			>
				{label}

				<Pointer
					className={cn(
						'text-secondary',
						'absolute -top-2 w-3 h-3',
						{ '-left-2 -rotate-90': cursorLocation === 'top-left' },
						{ '-right-2 ': cursorLocation === 'top-right' }
					)}
				/>
			</div>
		</motion.div>
	);
};

export default LabelWithCursor;
