import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import Blogs from "../components/Blogs";
import PupiloTopic from "../components/PupiloTopic";
import Innovators from "../components/Innovators";
import Families from "../components/Families";

const BlogPage = () => {
    return (
        <>
            <Hero />
            <HeroSlider />
            <Blogs />
            <PupiloTopic
                text={"General Pupilo Topic"}
                description={
                    "In this section, we cover a wide range of topics to support everylearner on their coding journey."
                }
            />
            <Families />
            <Innovators
                text={"Let's Raise Africa's Next Tech Innovators."}
                description={
                    "Browse programs by level, or book a free placement session to find the perfect fit."
                }
            />
        </>
    );
};

export default BlogPage;