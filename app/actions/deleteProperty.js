'use server';
import connectDB from "@/config/database";
import cloudinary from "@/config/cloudinary";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache"; // This is used to revalidate the path after deletion

async function deleteProperty(propertyId) {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    }

    const { userId } = sessionUser;

    await connectDB();

    // Find the property by ID
    const property = await Property.findById(propertyId);
    if (!propertyId) {
        throw new Error("Property Not found");
    }

    // Verify ownership
    if (property.owner.toString() !== userId) {
        throw new Error("Unauthorized");
    }

    /**
     * https://res.cloudinary.com/dm6lmbkve/image/upload/v1749008306/propertypulse/fmrcaoyqbhclo23yx1wm.jpg
     * 
     * we want to extract 'fmrcaoyqbhclo23yx1wm' which will help to delete the image from cloudinary
     * if we did folder_name/fmrcaoyqbhclo23yx1wm => destroy, it'll delete the image
     */

    // Traversing all images from the property
    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        return parts.at(-1).split('.').at(0);
    });


    // Deleting images from cloudinary
    if (publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy('propertypulse/' + publicId); // e.g /propertypulse/fmrcaoyqbhclo23yx1wm
        }
    }

    await property.deleteOne();
    revalidatePath('/', 'layout');
}

export default deleteProperty;