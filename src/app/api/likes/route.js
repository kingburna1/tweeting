export const POST = async (request) => {
    try {
        // Connect to the database
        await connectDB();
        
        // Get the like data from the request body
        const { userId, postId } = await request.json();
    
        // Validate input
        if (!userId || !postId) {
        return new NextResponse('Missing required fields', { status: 400 });
        }
    
        // Create a new like document
        const newLike = new Like({
        UserId: userId,
        PostId: postId,
        });
    
        // Save the like to the database
        await newLike.save();
    
        return NextResponse.json(newLike, { status: 201 });
    } catch (error) {
        console.error('POST /api/likes error:', error);
        return new NextResponse('Server Error', { status: 500 });
    }
}

export const GET = async () => {
    try {
        // Connect to the database
        await connectDB();
        
        // Fetch all likes from the database
        const likes = await Like.find().populate('UserId', 'name email').populate('PostId', 'content');
        
        // Return the likes as a JSON response
        return NextResponse.json(likes, { status: 200 });
    } catch (error) {
        console.error('GET /api/likes error:', error);
        return new NextResponse('Server Error', { status: 500 });
    }
}