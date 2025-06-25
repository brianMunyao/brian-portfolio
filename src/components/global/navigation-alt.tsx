'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight, Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo.png';

type NavigationProps = object;

const Navigation = ({}: NavigationProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const links: {
		label: string;
		href: string;
	}[] = [
		// { label: 'About Me', href: '#' },
		{ label: 'Services', href: '/#services' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Testimonials', href: '/#testimonials' },
	];

	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: 'anticipate', delay: 0.2 }}
				className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 "
			>
				<div className="bg-primary/95 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl">
					<div className="flex items-center gap-8">
						<motion.div
							className="gap-2 cursor-pointer block w-[35px]"
							whileHover={{ scale: 1.09 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
						>
							<Link href="/" className="block md:block">
								<Image
									src={logo}
									alt="logo"
									width={35}
									height={35}
								/>
							</Link>
						</motion.div>

						<div className="hidden md:flex items-center gap-6">
							{links.map((link, index) => (
								<motion.span
									key={link.href}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.4 }}
									whileHover={{ scale: 1.05 }}
								>
									<Link
										href={link.href}
										className="text-white/80 hover:text-white transition-colors text-sm font-medium"
									>
										{link.label}
									</Link>
								</motion.span>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="group"
						>
							<Link href="/contact">
								<Button
									size="sm"
									className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-4 py-2 rounded-full text-sm shadow-lg flex items-center gap-1"
								>
									Let&apos;s Connect{' '}
									<motion.div
										className="size-4"
										whileHover={{
											rotate: [0, 20, -10, 0],
											transition: {
												duration: 0.5,
												ease: 'easeInOut',
											},
										}}
									>
										<ArrowUpRight className="w-full h-full" />
									</motion.div>
								</Button>
							</Link>
						</motion.div>

						{/* Mobile Menu Button */}
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Button
								variant="ghost"
								size="sm"
								className="text-white hover:bg-white/10 p-2"
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
							>
								<motion.div
									animate={{
										rotate: isMobileMenuOpen ? 90 : 0,
									}}
									transition={{ duration: 0.3 }}
								>
									<Menu className="h-4 w-4" />
								</motion.div>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 md:hidden"
					>
						<div className="bg-primary/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 shadow-2xl min-w-[200px]">
							<div className="space-y-4">
								{links.map((link, index) => (
									<motion.span
										key={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ x: 5 }}
										className="block text-white/80 hover:text-white transition-colors text-sm font-medium"
									>
										<Link
											href={link.href}
											onClick={() =>
												setIsMobileMenuOpen(false)
											}
										>
											{link.label}
										</Link>
									</motion.span>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
