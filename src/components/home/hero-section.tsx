'use client';

import { Button } from '@/components/ui/button';
import { GalleryHorizontalEnd } from 'lucide-react';
import { motion, useTransform, useScroll, MotionValue } from 'motion/react';
import LabelWithCursor from '../global/label-with-cursor';
import ProfilePhoto from '../global/profile-photo';
import { socials } from '@/constants/socials';
import { PointerHighlight } from '../ui/pointer-highlight';
import Link from 'next/link';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

export function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}
const HeroSection = () => {
	const { scrollYProgress } = useScroll();
	const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const y = useParallax(scrollYProgress, 60);

	return (
		<motion.div
			className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20 relative"
			style={{ y: yTransform }}
		>
			<AnimatedGridPattern
				numSquares={50}
				maxOpacity={0.05}
				duration={4}
				className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] inset-0"
			/>
			{/* Main Content Container */}
			<motion.div
				style={{ y }}
				className="pt-[100px] max-w-7xl mx-auto w-full flex flex-col justify-center gap-8 items-center"
			>
				<ProfilePhoto />

				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-center">
						<motion.span
							className="text-center text-white flex gap-4 justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
						>
							Hi, I&apos;m
							<PointerHighlight rectangleClassName="bg-white/5">
								<span>Brian</span>
							</PointerHighlight>
							<span className="sr-only">Kalusi</span>
						</motion.span>

						<motion.span
							className="text-center block text-white"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1 }}
						>
							a Software Engineer
						</motion.span>
					</h1>

					{/* Description */}
					<motion.div
						className="mb-8 mx-auto text-white/70 max-w-xl leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.6 }}
					>
						A full-stack developer with a foundation in QA. I merge
						precision and creativity to craft reliable, user-focused
						digital experiences.
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.8 }}
						className="flex items-center gap-1 justify-center"
					>
						<Link href="/#projects">
							<Button
								size="sm"
								className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-4 py-2 rounded-sm text-sm shadow-lg flex items-center gap-2"
							>
								<GalleryHorizontalEnd className="size-4 " />
								View Projects
							</Button>
						</Link>

						<div className="w-0.5 h-[20px] mx-5 bg-white/50"></div>

						<motion.div
							className="flex items-center gap-3"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.7 }}
						>
							{socials.map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									className="group relative"
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.4,
										delay: 2 + index * 0.1,
									}}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<div className="size-10 hover:bg-white/10 rounded-full flex items-center justify-center text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
										<social.icon className="size-4" />
									</div>
								</motion.a>
							))}
						</motion.div>
					</motion.div>
				</motion.div>

				<LabelWithCursor label="Software Engineer" />
				<LabelWithCursor
					label="QA Engineer"
					className="right-8 md:right-20 top-[calc(33%+50px)] md:top-[calc(33%+100px)]"
					cursorLocation="top-left"
					variant="outline"
				/>
			</motion.div>
		</motion.div>
	);
};

export default HeroSection;
