import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import profile from '@/assets/profile.jpg';
import profileGhibli from '@/assets/profile-ghibli-square.png';

const ProfilePhoto = () => {
	return (
		<motion.div
			className="lg:col-span-3 flex justify-center lg:justify-start"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.5 }}
		>
			<motion.div
				className="relative group w-48 h-48 rounded-full overflow-hidden"
				animate={{
					scale: [1, 1.04, 1.02, 1.06, 1, 1],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'loop',
					times: [0, 0.2, 0.25, 0.4, 0.6, 1],
					ease: 'easeInOut',
				}}
			>
				<motion.div
					className="relative w-full h-full rounded-full"
					whileHover={{ rotate: 360 }}
					transition={{
						duration: 0.8,
						ease: 'easeInOut',
					}}
				>
					<Image
						src={profile}
						alt="Actual Brian"
						fill
						className="object-cover rounded-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
					/>

					<Image
						src={profileGhibli}
						alt="Ghibli Brian"
						fill
						className="object-cover rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute top-0 left-0"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ProfilePhoto;
