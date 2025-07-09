import connectDB from "@/db/connectDB";
import Post from "@/model/Post";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all posts from the database
        const posts = await Post.find().sort({ createdAt: -1 });
        console.log("Posts fetched:", posts.length);

        // Return the posts as a JSON response
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
}

  // to add a new post to the database
export const POST = async (req) => {
    try {
        // Connect to the database
        await connectDB();

        // Get the post data from the request body
        const postData = await req.json();
        console.log("Post data received:", postData);

        // Create a new post instance
        const newPost = new Post(postData);

        // Save the post to the database
        await newPost.save();
        console.log("Post saved to database:", newPost);

        // Return the created post as a JSON response
        return new NextResponse(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        // Return an error message if the post creation fails
        return new NextResponse(
            JSON.stringify({ error: 'Failed to create post.', error }),
            { status: 500 }
        );
    }
}


//remove post 

