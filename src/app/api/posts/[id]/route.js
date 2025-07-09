import { NextResponse } from 'next/server';

import mongoose from 'mongoose';
import connectDB from '@/db/connectDB';
import Post from '@/model/Post';

// update post by id from database
export const PUT = async (req, { params }) => {
    const { id } = params;
    try {
        // Connect to the database
        await connectDB();

        // Get the updated post data from the request body
        const postData = await req.json();

        // Find the post by ID and update it
        const updatedPost = await Post.findByIdAndUpdate(id, postData, { new: true });

        // If no post is found, return a 404 response
        if (!updatedPost) {
            return new NextResponse(
                JSON.stringify({ error: 'Post not found.' }),
                { status: 404 }
            );
        }

        // Return the updated post as a JSON response
        return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}


export const DELETE = async (req, { params }) => {
    const { id } = params;
    try {
        // Connect to the database
        await connectDB();

        // Find the post by ID and delete it
        const post = await Post.findByIdAndDelete(id);

        // If no post is found, return a 404 response
        if (!post) {
            return new NextResponse(
                JSON.stringify({ error: 'Post not found.' }),
                { status: 404 }
            );
        }

        // Return a success message as a JSON response
        return new NextResponse(
            JSON.stringify({ message: 'Post deleted successfully.' }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}

// get post by id from database

export const GET = async (req, { params }) => {
    const { id } = params;
    try {
        // Connect to the database
        await connectDB();

        // Find the post by ID
        const post = await Post.findById(id);

        // If no post is found, return a 404 response
        if (!post) {
            return new NextResponse(
                JSON.stringify({ error: 'Post not found.' }),
                { status: 404 }
            );
        }

        // Return the post as a JSON response
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}