import connectDB from "../../../db/connectDB";
import { NextResponse } from "next/server";
import Comment from "../../../model/Comment";

// GET: Fetch all comments
export async function GET() {
  try {
    await connectDB();

    const comments = await Comment.find()
      .populate('UserId', 'name email')
      .populate('PostId', 'content');

    return NextResponse.json(comments);
  } catch (error) {
    console.error('GET /api/comments error:', error);
    return new NextResponse('Server Error', { status: 500 });
  }
}

// POST: Create a new comment
// export async function POST(req) {
//   try {
//     await connectDB();

//     const body = await req.json();
//     const { PostId, UserId, Content } = body;

//     if (!PostId || !UserId || !Content) {
//       return new NextResponse('Missing required fields', { status: 400 });
//     }

//     const newComment = await Comment.create({ PostId, UserId, Content });

//     return NextResponse.json(newComment, { status: 201 });
//   } catch (error) {
//     console.error('POST /api/comments error:', error);
//     return new NextResponse('Server Error', { status: 500 });
//   }
// }
// POST: Create a new comment
// adding a comment to the database

export const POST = async (request) => {
  try {
    // connect DB
    await connectDB()
    // Get the comment from the request body
    const commentData = await request.json()
    // Create a new comment
    const newComment = new Comment(commentData)
    // Save the comment to the database
    await newComment.save()
    // Return the comment as a JSON response
    return new NextResponse(JSON.stringify(newComment), { status: 201 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: 'An error occurred while processing your request.', error }),
        { status: 500 }
        );
        }
        };