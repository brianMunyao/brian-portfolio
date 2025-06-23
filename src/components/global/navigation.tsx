'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import logo from '@/assets/logo.png';

type Props = {
	isScrolled: boolean;
};

const Navigation = ({ isScrolled }: Props) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Modern Clean Navigation with Enhanced Animations */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.8, ease: 'backIn', delay: 0.3 }}
				className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
					isScrolled ? 'py-4 backdrop-blur-md shadow-lg' : 'py-6'
				}`}
				style={{
					backgroundColor: isScrolled
						? 'rgba(0, 29, 33, 0.95)'
						: '#001d21',
					borderBottom: isScrolled
						? '1px solid rgba(205, 238, 211, 0.2)'
						: 'none',
				}}
			>
				{/* Left - Brand */}
				<motion.div
					className="flex items-center space-x-3"
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					<motion.div
						className={`rounded-full overflow-hidden transition-all duration-300 ${
							isScrolled ? 'w-8 h-8' : 'w-10 h-10'
						}`}
						// style={{ borderColor: '#cdeed3' }}
						whileHover={{ rotate: 360 }}
						transition={{ duration: 0.6 }}
					>
						<Image
							src={logo}
							alt="Brian Kalusi"
							width={40}
							height={40}
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<span className="text-white font-semibold transition-all duration-300">
						Brian Kalusi
					</span>
				</motion.div>

				{/* Center - Navigation Menu */}
				<div className="hidden lg:flex items-center space-x-8">
					{['Services', 'Projects', 'Experience', 'Resources'].map(
						(item, index) => (
							<motion.div
								key={item}
								className="relative group"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 + 0.6 }}
							>
								<motion.button
									className="text-white hover:opacity-80 transition-all duration-200 flex items-center gap-1"
									whileHover={{
										scale: 1.05,
										color: '#cdeed3',
									}}
									whileTap={{ scale: 0.95 }}
								>
									{item}
									{item !== 'Experience' && (
										<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
									)}
								</motion.button>
								<motion.div
									className="absolute bottom-0 left-0 h-0.5"
									style={{
										background:
											'linear-gradient(to right, transparent, #cdeed3, transparent)',
									}}
									initial={{ width: 0 }}
									whileHover={{ width: '100%' }}
									transition={{ duration: 0.3 }}
								/>
							</motion.div>
						)
					)}
				</div>

				{/* Right - Actions */}
				<div className="flex items-center gap-4">
					<motion.a
						href="#about"
						className="text-foreground hover:opacity-80 transition-all duration-200 hidden md:block"
						whileHover={{
							scale: 1.05,
							color: 'hsl(var(--primary))',
						}}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.9 }}
					>
						About me
					</motion.a>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1 }}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 8px 30px rgba(205, 238, 211, 0.4)',
							backgroundColor: '#b8e6c1',
						}}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							className={`font-medium rounded-lg transition-all duration-300 ${
								isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2'
							}`}
							style={{
								backgroundColor: '#cdeed3',
								color: '#001d21',
								boxShadow: isScrolled
									? '0 4px 20px rgba(205, 238, 211, 0.3)'
									: 'none',
							}}
						>
							Get in touch
						</Button>
					</motion.div>

					{/* Mobile Menu Button */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden text-foreground hover:bg-muted"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						>
							<motion.div
								animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
								transition={{ duration: 0.3 }}
							>
								<Menu className="h-5 w-5" />
							</motion.div>
						</Button>
					</motion.div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed top-20 left-0 right-0 z-30 lg:hidden"
						style={{ backgroundColor: 'rgba(0, 29, 33, 0.98)' }}
					>
						<div className="px-6 py-8 space-y-6">
							{[
								'Services',
								'Projects',
								'Experience',
								'Resources',
								'About me',
							].map((item, index) => (
								<motion.a
									key={item}
									href={`#${item
										.toLowerCase()
										.replace(' ', '-')}`}
									className="block text-white text-lg transition-colors"
									style={{ color: 'white' }}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ x: 10, color: '#cdeed3' }}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
