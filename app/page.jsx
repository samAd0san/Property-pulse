import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const MainPage = () => {
    return (
        <div>
            {/* These children are being passed to the layout via props */}
            <Hero />
            <InfoBoxes />
        </div>
    )
}

export default MainPage;