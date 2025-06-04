'use server';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Function to add a new property (it is being used in the action of the form)
// This function will be called when the form is submitted
async function addProperty(formData) {
    // connect to the database
    await connectDB();

    // Get the session user
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    // destructure userId from sessionUser
    const { userId } = sessionUser;

    // Access all values for amenities and images
    const amenities = formData.getAll('amenities');
    const images = formData
        .getAll('images')
        .filter((image) => image.name !== '') // Filter out empty names
        .map((image) => image.name); // Extract only the names

    // Create the propertyData object with embedded seller_info
    const propertyData = {
        // Assign the userId to the owner field
        owner: userId,

        // Map formData to the property fields
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        location: {
            street: formData.get('location.street'),
            city: formData.get('location.city'),
            state: formData.get('location.state'),
            zipcode: formData.get('location.zipcode'),
        },
        beds: formData.get('beds'),
        baths: formData.get('baths'),
        square_feet: formData.get('square_feet'),
        amenities,
        rates: {
            weekly: formData.get('rates.weekly'),
            monthly: formData.get('rates.monthly'),
            nightly: formData.get('rates.nightly.'),
        },
        seller_info: {
            name: formData.get('seller_info.name'),
            email: formData.get('seller_info.email'),
            phone: formData.get('seller_info.phone'),
        },
        images,
    };
    // Log the propertyData to verify its structure
    console.log('Property added successfully:', propertyData);

    // Create a new Property instance and save it to the database
    const newProperty = new Property(propertyData);
    await newProperty.save(); // Save the property to the database

    // Revalidate the path to ensure the new property is reflected in the UI
    revalidatePath('/', 'layout');

    // Redirect to the newly created property page
    redirect(`/properties/${newProperty._id}`);
}

export default addProperty;