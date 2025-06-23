import React from 'react';
import { motion } from 'motion/react';

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
	return (
		<motion.div
			className={cn(
				`absolute top-[calc(25%+70px)] md:top-[calc(25%+100px)] pointer-events-none md:pointer-events-auto`,
				className
			)}
			initial={{
				opacity: 0,
				x: -50,
				rotate: cursorLocation === 'top-right' ? -10 : 10,
			}}
			animate={{
				opacity: 1,
				x: 0,
				rotate: cursorLocation === 'top-right' ? -5 : 5,
			}}
			transition={{ duration: 0.8, delay: 0.5 }}
			whileHover={{ scale: 1.1, rotate: 0 }}
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
