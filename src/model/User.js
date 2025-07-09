import mongoose, {Schema} from 'mongoose'
import { type } from 'os'

const userSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        DateOfBirth: {
            type: Date,
            required: true,
        },
        Password: {
            type: String,
            required: true,
        },
        ProfileImage: {
            type: String,
            // default: 'https://res.cloudinary.com/dz1qj3v2h/image/upload/v1709301234/DefaultProfilePicture.png',
        },
        CoverImage: {
            type: String,
            // default: 'https://res.cloudinary.com/dz1qj3v2h/image/upload/v1709301234/DefaultProfilePicture.png',
        },
        Bio: {
            type: String,
            default: '',
        },
        Phone: {
            type: String,
            unique: true,
        },
        Location: {
            type: String,
        },

    },

    {timestamps: true}
);

export default mongoose.models.User || mongoose.model('User', userSchema)