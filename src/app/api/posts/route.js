import connectDB from "@/db/connectDB";
import Post from "@/model/Post";
import User from "../../../model/User";
import { NextResponse } from "next/server";



export const GET = async (req) => {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all posts from the database
        const posts = await Post.find().sort({ createdAt: -1 }).populate("UserId", "Name Email ProfileImage");

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
  export async function POST(request) {
    try {
      await connectDB();
      const { Content, MediaFile, UserId } = await request.json();
      const user = await User.findById(UserId);
      if (!user) {
        return new NextResponse(
          JSON.stringify({error: 'User not found'}),
          { status: 404 }
        );
      }
  
      const newPost = await Post.create({ Content, MediaFile, UserId });
  
      return Response.json(newPost, { status: 201 });
    } catch (error) {
      console.log("POST error:", error);
      return new Response("Failed to create post", { status: 500 });
    }
  }


//remove post 

