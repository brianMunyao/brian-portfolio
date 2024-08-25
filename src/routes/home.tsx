import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

const HomePage = () => {
	return (
		<div>
			<HeroSection />

			<ServicesSection />

			<SkillsSection />

			<ProjectsSection />

			<ContactSection />
		</div>
	);
};

export default HomePage;
