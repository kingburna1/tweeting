import connectDB from "../../../../db/connectDB";
import User from "../../../../model/User";

import { NextResponse } from "next/server";
   
// get user by id from database
export const GET = async (req, { params }) => {
    const { id } = params; // Extracting the user ID from the request parameters
    try {
        // Connect to the database
        await connectDB();
        
        // Extract the user ID from the request parameters
        // const { id } = params;

        // Find the user by ID, excluding sensitive fields
        const user = await User.findById(id).select('-Password -__v');

        // If no user is found, return a 404 response
        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found.' }),
                { status: 404 }
            );
        }

        // Return the user data as a JSON response
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}

// delete user by id from database
export const DELETE = async (req, { params }) => {
    const { id } = params; 
    
    console.log ("Deleting User ID:".id); 
    try {
        // Connect to the database
        await connectDB();

        // Find the user by ID and delete them
        const user = await User.findByIdAndDelete(id);

        // If no user is found, return a 404 response
        if (!user) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found.' }),
                { status: 404 }
            );
        }

        // Return a success message as a JSON response
        return new NextResponse(
            JSON.stringify({ message: 'User deleted successfully.' }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}


// update user by id from database
export const PUT = async (req, { params }) => {
    const { id } = params; 
    console.log ("Updating User ID:".id);
    try {
        // Connect to the database
        await connectDB();

        // Get the updated user data from the request body
        const userData = await req.json();

        // Find the user by ID and update their information
        const updateUser = await User.findByIdAndUpdate(id, userData, {
             new: true ,
             runValidators: true
            }).select('-Password -__v');

        // If no user is found, return a 404 response
        if (!updateUser) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found.' }),
                { status: 404 }
            );
        }

        // Return the updated user data as a JSON response
        return new NextResponse(JSON.stringify(updateUser), { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        // Return an error message if the update fails
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}