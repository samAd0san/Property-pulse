import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";

const DynamicPropertyId = async ({ params }) => {
    await connectDB();
    const property = await Property.findById(params.id).lean();

    return (
        <>
            <PropertyHeaderImage image={property.images[0]} />
            <section className='bg-blue-50'>
                <div className='container m-auto py-10 px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                        <PropertyDetails property={property} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DynamicPropertyId;