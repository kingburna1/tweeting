import { FileType } from 'lucide-react'
import mongoose, {Schema} from 'mongoose'

const postSchema = new Schema({
    
    Content: {
        type: String,
        required: true,
    },
    MediaFile: {
        url: String,
        FileType: String,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },


}, {timestamps: true}
)

export default mongoose.models.Post || mongoose.model('Post', postSchema)