import connectDB from "../../../../db/connectDB";
import User from "../../../../model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async(request) => {
    try {
        await connectDB();
        const {Email, Password} = await request.json();
        if(!Email || !Password) {
            return new NextResponse(JSON.stringify({ error: "Email and Password are required" }), {
                status: 500
            });
        }
        const user = await User.findOne({ Email });
        if(!user) {
            return new NextResponse(JSON.stringify({ error: "Invalid Email or Password" }), {
                status: 400
            });
        }
        const isPasswordValid = bcrypt.compareSync(Password, user.Password);
        if(!isPasswordValid) {
            return new NextResponse(JSON.stringify({ error: "Invalid Email or Password" }), {
                status: 400
            });
        }
        // Exclude password and __v from the response and authenticate the user
        const { Password: _, ...userData } = user._doc; // Exclude Password from the response
        return new NextResponse(JSON.stringify(userData), {
            status: 200,
        });
    } catch(error) {
        console.error("Error during authentication:", error);
        return new NextResponse(JSON.stringify({ error: "Authentication failed" }), {
            status: 500
        });
    }
}