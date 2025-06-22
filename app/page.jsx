import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";

const MainPage = () => {
    return (
        <div>
            {/* These children are being passed to the layout via props */}
            <Hero />
            <InfoBoxes />
            <FeaturedProperties />
            <HomeProperties />
        </div>
    );
};

export default MainPage;