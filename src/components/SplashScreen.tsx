import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import logo from '/logo.png';

export default function SplashScreen() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(false), 2500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<SplashContainer
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Logo
						src={logo}
						alt="Logo"
						initial={{ rotate: 0, scale: 1 }}
						animate={{ rotate: 720 }}
						exit={{
							scale: 0.1,
						}}
						transition={{ duration: 1 }}
					/>
				</SplashContainer>
			)}
		</AnimatePresence>
	);
}

const SplashContainer = styled(motion.div)`
	position: fixed;
	inset: 0;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`;

const Logo = styled(motion.img)`
	width: 6rem;
	height: 6rem;
`;
