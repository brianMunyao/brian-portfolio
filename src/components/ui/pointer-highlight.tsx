'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function PointerHighlight({
	children,
	rectangleClassName,
	pointerClassName,
	containerClassName,
	delay = 2,
}: {
	children: React.ReactNode;
	rectangleClassName?: string;
	pointerClassName?: string;
	containerClassName?: string;
	delay?: number;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (containerRef.current) {
			const { width, height } =
				containerRef.current.getBoundingClientRect();
			setDimensions({ width, height });
		}

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				setDimensions({ width, height });
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

	return (
		<div
			className={cn('relative w-fit', containerClassName)}
			ref={containerRef}
		>
			{children}
			{dimensions.width > 0 && dimensions.height > 0 && (
				<motion.div
					className="pointer-events-none absolute inset-0 z-0"
					initial={{
						opacity: 0,
						scale: 0.95,
						// @ts-expect-error var not existing
						originX: 0,
						originY: 0,
					}}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
				>
					<motion.div
						className={cn(
							'absolute inset-0 border border-neutral-700 rounded-sm',
							rectangleClassName
						)}
						initial={{
							width: 0,
							height: 0,
						}}
						whileInView={{
							width: dimensions.width,
							height: dimensions.height,
						}}
						transition={{
							duration: 1,
							ease: 'easeInOut',
							delay,
						}}
					/>
					<motion.div
						className="pointer-events-none absolute"
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							x: dimensions.width,
							y: dimensions.height,
						}}
						style={{
							rotate: -90,
						}}
						transition={{
							opacity: {
								duration: 0.1,
								ease: 'easeInOut',
								delay,
							},
							duration: 1,
							ease: 'easeInOut',
							delay,
						}}
					>
						<Pointer
							className={cn(
								'h-5 w-5 text-blue-500',
								pointerClassName
							)}
						/>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}

export const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
		</svg>
	);
};
