import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";

const DynamicPropertyId = async ({ params }) => {
    await connectDB();
    const property = await Property.findById(params.id).lean();

    return (
        <>
            {/* TOP HEADER IMAGE */}
            <PropertyHeaderImage image={property.images[0]} />

            {/* CONTENT BELOW HEADER IMAGE */}
            <section className='bg-blue-50'>
                <div className='container m-auto py-10 px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                        {/* LEFT SIDE!! */}
                        {/* Property Details */}
                        <PropertyDetails property={property} />

                        {/* RIGHT SIDE!! */}
                        <aside className='space-y-4'>

                            {/* <!-- Sidebar --> */}
                            {/* Bookmark Button */}
                            <BookmarkButton property={property} />
                            
                            {/* Share Buttons */}
                            <ShareButtons property={property} />

                            {/* <!-- Contact Form --> */}
                            <PropertyContactForm property={property} />
                        </aside>
                    </div>
                </div>
            </section>
            <PropertyImages images={property.images} />
        </>
    )
}

export default DynamicPropertyId;