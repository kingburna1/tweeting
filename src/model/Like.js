import mongoose, {Schema} from 'mongoose'

const likeSchema = new Schema({
    
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

export default mongoose.models.Like || mongoose.model('Like', likeSchema)