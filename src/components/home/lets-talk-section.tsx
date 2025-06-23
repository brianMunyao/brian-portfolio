'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const LetsTalkSection = () => {
	const pathname = usePathname();
	// const [selectedServices, setSelectedServices] = useState<string[]>([]);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		projectIdea: '',
	});

	// const services = [
	// 	{ id: 'fullstack', label: 'Full-Stack Development' },
	// 	{ id: 'qa', label: 'QA & Testing' },
	// 	{ id: 'mobile', label: 'Mobile Development' },
	// 	{ id: 'consulting', label: 'Technical Consulting' },
	// ];

	// const handleServiceToggle = (serviceId: string) => {
	// 	setSelectedServices((prev) =>
	// 		prev.includes(serviceId)
	// 			? prev.filter((id) => id !== serviceId)
	// 			: [...prev, serviceId]
	// 	);
	// };

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<section
			id="contact"
			className={cn(
				'relative border-t border-white/10 bg-background py-24 px-6 md:px-12',
				{ 'pt-[150px]': pathname === '/contact' }
			)}
		>
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:50px_50px]',
					'[background-image:radial-gradient(#ffffff21_1px,transparent_1px)]'
				)}
			/>

			<div className="mx-auto max-w-5xl text-center space-y-12 z-10">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-sm uppercase tracking-wide text-muted-foreground z-10">
						Get In Touch
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 z-10">
						Let&apos;s Connect
					</h2>
					<p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4">
						I’d love to hear about your project idea or collaborate
						on something cool.
					</p>
				</motion.div>

				<motion.form
					id="contact-form"
					action="https://formspree.io/f/xeqwbqlr"
					method="post"
					className="grid gap-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className="grid md:grid-cols-2 gap-6">
						<Input
							required
							name="name"
							id="name"
							placeholder="Name"
							value={formData.firstName}
							onChange={(e) =>
								handleInputChange('firstName', e.target.value)
							}
							className="h-14 text-lg rounded-lg bg-primary z-10"
						/>

						<Input
							required
							name="email"
							id="email"
							placeholder="Email Address"
							value={formData.email}
							onChange={(e) =>
								handleInputChange('email', e.target.value)
							}
							className="h-14 text-lg rounded-lg z-10 bg-primary"
						/>
					</div>

					{/* <div className="text-left space-y-3">
						<h3 className="text-base font-semibold text-foreground">
							What can I help you with?
						</h3>
						<div className="flex flex-wrap gap-3">
							{services.map((service, index) => (
								<motion.button
									key={service.id}
									type="button"
									onClick={() =>
										handleServiceToggle(service.id)
									}
									className={`px-5 py-2.5 rounded-full border transition-all text-sm font-medium shadow-sm backdrop-blur-sm hover:scale-105 duration-300 ${
										selectedServices.includes(service.id)
											? 'text-primary-foreground border-border bg-border'
											: 'bg-muted text-muted-foreground border-border'
									}`}
								>
									{service.label}
								</motion.button>
							))}
						</div>
					</div> */}

					<Textarea
						required
						id="message"
						name="message"
						placeholder="Tell me about your project..."
						value={formData.projectIdea}
						onChange={(e) =>
							handleInputChange('projectIdea', e.target.value)
						}
						className="text-lg rounded-lg resize-none min-h-[160px] bg-primary z-10"
					/>

					<Button type="submit" size="lg">
						Let&apos;s Collaborate
						<Send className="size-4 ml-2" />
					</Button>
				</motion.form>
			</div>
		</section>
	);
};

export default LetsTalkSection;
