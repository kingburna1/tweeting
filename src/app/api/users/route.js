import connectDB from "@/db/connectDB";
import User from "@/model/User";
// import connectDB from "../../../db/connectDB";
// import User from "../../../model/User";

import { NextResponse } from "next/server";

// GET all users from database

export const GET = async () => {
  try {
    await connectDB();
    const users = await User.find({}, '-password -__v').sort({ createdAt: -1 });
    return new NextResponse(
      JSON.stringify(users),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch users'}),
      { status: 500 }
    );
   
  }
}

  //  adding a user to database

  export const POST = async (request) => {
    try {
      // const response = await axios.post('/api/users', formData);
        // connect to the database
        await connectDB();
        // get the data from the request body
        const userData = await request.json();
        // check if the user already exists
        const { Email, Phone } = userData;

      //  check if email or phone already exist in database
      const existingUser = await User.findOne({
        $or: [{Email},{Phone}]
      })

      if (existingUser){
        return new NextResponse(
          JSON.stringify({
            error:existingUser.Email === Email?"Email already in use":"Phone number already in use"
          }),{status: 409}
        )
      };
        
        // create a new user instance
        
        console.log("Incoming user data:", userData);

        const newUser = new User(userData);
        // save the user to the database
        await newUser.save();
        // return the created user as a JSON response
        return new NextResponse(JSON.stringify(newUser), { 
            status: 201 
        });
    }  catch (error) {
            console.error("User creation failed:", error);
        return new NextResponse(
            // return an error message if the user creation fails
            JSON.stringify({
              error: 'Failed to create user, try again.',
              details: error.message,
            }),
            { status: 500 }
        );
    }
}