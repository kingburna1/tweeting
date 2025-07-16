export const GET  = async (req, { params }) =>{
    const { id } = params;
    try {
        // Connect to the database
        await connectDB();

        // Find the post by ID and populate UserId and PostId fields
        const post = await Post.findById(id)
            .populate('UserId', 'name email')
            .populate('PostId', 'content');

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
        console.error('GET /api/posts/[id] error:', error);
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
        console.error('DELETE /api/posts/[id] error:', error);
        return new NextResponse(
            JSON.stringify({ error: 'An error occurred while processing your request.', error }),
            { status: 500 }
        );
    }

}