import connectDB from './../../../../db/connectDB';
import Comment from "../../../../model/Comment";
import Post from "../../../../model/Post";
import { NextResponse } from "next/server";
import User from "../../../../model/User";
import mongoose from 'mongoose';

// GET: Get a comment by ID
// export async function GET(request, context) {
//   try {
//     await connectDB();

//     const commentId = context.params.id;

//     if (!mongoose.Types.ObjectId.isValid(commentId)) {
//       return new NextResponse('Invalid comment ID', { status: 400 });
//     }

//     const comment = await Comment.findById(commentId)
//       .populate('UserId', 'name email')
//       .populate('PostId', 'content');

//     if (!comment) {
//       return new NextResponse('Comment not found', { status: 404 });
//     }

//     return NextResponse.json(comment);
//   } catch (error) {
//     console.error('GET /api/comments/[id] error:', error);
//     return new NextResponse('Server Error', { status: 500 });
//   }
// }

// // PATCH: Update a comment by ID
// export async function PATCH(request, context) {
//   try {
//     await connectDB();

//     const commentId = context.params.id;
//     const body = await request.json();

//     const updated = await Comment.findByIdAndUpdate(
//       commentId,
//       { $set: body },
//       { new: true }
//     );

//     if (!updated) {
//       return new NextResponse('Comment not found', { status: 404 });
//     }

//     return NextResponse.json(updated);
//   } catch (error) {
//     console.error('PATCH /api/comments/[id] error:', error);
//     return new NextResponse('Server Error', { status: 500 });
//   }
// }

// // DELETE: Delete a comment by ID
// export async function DELETE(request, context) {
//   try {
//     await connectDB();

//     const commentId = context.params.id;

//     const deleted = await Comment.findByIdAndDelete(commentId);

//     if (!deleted) {
//       return new NextResponse('Comment not found', { status: 404 });
//     }

//     return new NextResponse('Comment deleted', { status: 200 });
//   } catch (error) {
//     console.error('DELETE /api/comments/[id] error:', error);
//     return new NextResponse('Server Error', { status: 500 });
//   }
// }
// export const GET = async (req, { params }) =>{
//     const { id } = params;
//     try {
//         await connectDB();

//         const comment = await Comment.findById(id)


//     }
    
    

// } 


// export const GET = async (req, { params }) => {
//   const { id } = params;
//   try {
//     await connectDB();

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return new NextResponse('Invalid comment ID', { status: 400 });
//     }

//     const comment = await Comment.findById(id)
//       .populate('UserId', 'name email')
//       .populate('PostId', 'content');

//     if (!comment) {
//       return new NextResponse('Comment not found', { status: 404 });
//     }

//     return NextResponse.json(comment);
//   } catch (error) {
//     console.error('GET /api/comments/[id] error:', error);
//     return new NextResponse('Server Error', { status: 500 });
//   }
// };

// PATCH: Update a comment by ID
export const PATCH = async (req, { params }) => {
  const { id } = params;
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse('Invalid comment ID', { status: 400 });
    }

    const body = await req.json();
    const updated = await Comment.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updated) {
      return new NextResponse('Comment not found', { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/comments/[id] error:', error);
    return new NextResponse('Server Error', { status: 500 });
  }
};
// DELETE: Delete a comment by ID
export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse('Invalid comment ID', { status: 400 });
    }

    const deleted = await Comment.findByIdAndDelete(id);

    if (!deleted) {
      return new NextResponse('Comment not found', { status: 404 });
    }

    return new NextResponse('Comment deleted', { status: 200 });
  } catch (error) {
    console.error('DELETE /api/comments/[id] error:', error);
    return new NextResponse('Server Error', { status: 500 });
  }
}

// get all comments for a specific post by PostId
// get all comments of post
export const GET = async (req, { params }) => {
    const { id } = params;
    try {
      // Connect to the database
      await connectDB();
  
      // Find the post by ID
      const comments = await Comment.find({PostId: id}).sort({createdAt: -1}).populate("UserId", "Name  ProfileImage");
  
      // If no post is found, return a 404 response
      if (!comments) {
        return new NextResponse(
          JSON.stringify({ error: 'no comments found for this post.' }),
          { status: 404 }
        );
      }
  
      // Return the comments of the post as a JSON response
      return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: 'failed to fetch comments.' }),
        { status: 500 }
      );
    }
  };

