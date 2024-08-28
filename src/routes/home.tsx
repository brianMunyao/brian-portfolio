import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ObjectiveSection from '../components/ObjectiveSection';

const HomePage = () => {
	return (
		<div>
			<HeroSection />

			<ServicesSection />

			<ObjectiveSection />

			<SkillsSection />

			<ProjectsSection />

			<ContactSection />
		</div>
	);
};

export default HomePage;
