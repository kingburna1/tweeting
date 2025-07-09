import mongoose, {Schema} from 'mongoose'

const commentSchema = new Schema({
    Content: {
        type: String,
        required: true,
    },
    MediaFile: {
        type: String,
        FileType: String,
    },
    PostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {timestamps: true}

)

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema)