import connectDB from "../../../db/connectDB";
import Image from "../../../model/Image";
import Post from "../../../model/Post"; 

import { NextResponse } from "next/server";

import { v2 as cloudinary } from 'cloudinary';

// Get all images from the database
export const GET = async () => {
    try {
        // Connect to the database
        await connectDB();
        
        // Fetch all images from the database
        const images = await Image.find().sort({ createdAt: -1 });
        
        // Return the images as a JSON response
        return new NextResponse(JSON.stringify(images), { status: 200 });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }
};

// add a new image to the database
export const POST = async (request) => {
  try {
    // Connect to the database
    await connectDB();
    // Get the image data from the request body
    // const imageData = await request.json();
    const { image, userId, type, postId } = await request.json();
    const entityId = postId  || userId;

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqyuvcfvb', 
        api_key: '641941537321154', 
        api_secret: 'Gl98ncS4GPaMT2iMtp4oqhumFec' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           image, {
               public_id: type+entityId+new Date().getTime(), // Unique public ID for the image
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log('image uploaded to cloudinary:', uploadResult?.secure_url);

    // Create a new image document
    const newImage = new Image({
      ImageUrl: uploadResult?.secure_url, // Use the secure URL from Cloudinaryy
      UserId: userId,
      PostId: postId,
      Type: type,
    });

     //send the image to the post by post Id
    if (type === "post" && postId) {
      await  Post.findByIdAndUpdate(postId, {
       MediaFile: {
        url: uploadResult?.secure_url,
        fileType: uploadResult?.resource_type || "image",
       },
      });
    }

    // update user profile image if it's type profile
  
        if(type === 'profile' && userId) {
          await User.findByIdAndUpdate(userId,{
            ProfileImage: uploadResult?.secure_url,
            })
            }

   // Update User Profile image if its of type cover
   // update user profile image if it's type profile

               if(type === 'cover' && userId) {
                await User.findByIdAndUpdate(userId, {
                  CoverImage: uploadResult?.secure_url,
                  })
                  }

                  if(type === 'profile' && userId) {
                    await User.findByIdAndUpdate(userId,{
                    ProfileImage: uploadResult?.secure_url,
                    })
                    }
                    
                    // Update User Profile image if its of type cover
                    
                    if(type === 'cover' && userId) {
                    await User.findByIdAndUpdate(userId, {
                    CoverImage: uploadResult?.secure_url,
                    })
                    }
                  
    //save the image document to the database
    await newImage.save();

   
    //return the newly created image as a JSON response
    return new NextResponse(JSON.stringify(newImage),
      { status: 201 }
    );
  } catch (error) {
    console.log('Error creating image:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to add image' }),
      { status: 500 }
    );
  }
}