import LayoutTemplate from "src/components/templates/LayoutTemplate";
import AboutContents from "src/components/organisms/about/AboutContents";

const About = () => {
	return (
		<LayoutTemplate seo={{ title: "about", description: "about" }}>
			<AboutContents />
		</LayoutTemplate>
	);
};

export default About;
