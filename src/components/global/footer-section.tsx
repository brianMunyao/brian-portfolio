'use client';

import { Phone, MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { socials } from '@/constants/socials';

const FooterSection = () => {
	return (
		<footer
			style={{
				backgroundColor: 'oklch(0.19 0 0)', // Dark base
				color: 'oklch(0.98 0 0)', // Light foreground
			}}
			className="border-t border-white/10 relative bg-primary py-28 px-6 md:px-12 overflow-hidden"
		>
			<div className="absolute left-0 right-0 bottom-0  flex items-center justify-center pointer-events-none">
				<motion.div
					className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold text-white/5 select-none"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
				>
					Brian Kalusi
				</motion.div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-6">
							<motion.div
								className="space-y-3 text-white/80"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
							>
								<motion.div
									className="flex items-center gap-3"
									whileHover={{ scale: 1.05 }}
									transition={{
										type: 'spring',
										stiffness: 400,
										damping: 10,
									}}
								>
									<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
										<span className="text-primary font-bold text-lg">
											BK
										</span>
									</div>
								</motion.div>

								<div className="flex items-center gap-3">
									<Mail className="h-5 w-5" />
									<Link href="mailto:brianmunyao6@gmail.com">
										brianmunyao6@gmail.com
									</Link>
								</div>

								<div className="flex items-center gap-3">
									<Phone className="h-5 w-5" />
									<Link href="tel:+254714436599">
										+254714436599
									</Link>
								</div>

								<div className="flex items-center gap-3">
									<MapPin className="h-5 w-5" />
									<span>Nairobi, Kenya</span>
								</div>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p className="font-bold text-white mb-4">Socials</p>

						<div className="space-y-4">
							{socials.map((link, index) => (
								<motion.a
									key={link.label}
									href={link.href}
									className="flex items-center text-sm text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 gap-2 flex-row"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.4,
										delay: 0.3 + index * 0.1,
									}}
								>
									<link.icon className="size-4" />
									<span>{link.label}</span>
								</motion.a>
							))}
						</div>

						{/* <motion.div
							className="space-y-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<h4 className="text-xl font-semibold text-white">
								Let&apos;s Work Together
							</h4>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 rounded-full shadow-lg">
									See More
								</Button>
							</motion.div>
						</motion.div> */}
					</motion.div>
				</div>

				<motion.div
					className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<div className="text-white/60 text-sm">
						&copy; {new Date().getFullYear()} Brian Kalusi.
					</div>
				</motion.div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-50 pointer-events-none" />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(4)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full opacity-5"
						style={{
							width: Math.random() * 100 + 50,
							height: Math.random() * 100 + 50,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
						}}
						animate={{
							x: [0, Math.random() * 50 - 25, 0],
							y: [0, Math.random() * 50 - 25, 0],
							scale: [1, Math.random() * 0.3 + 0.8, 1],
						}}
						transition={{
							duration: Math.random() * 15 + 10,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>
		</footer>
	);
};

export default FooterSection;
