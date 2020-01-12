import mongoose, { Document, Schema } from 'mongoose'

interface IFile extends Document {
    name: string
    content: string
}

const fileSchema: Schema = new Schema({
    name: String,
    content: String
})

interface INote extends Document {
    color?: string
    category?: string
    title?: string
    content: string
    date: Date
    file?: IFile
}

const noteSchema: Schema = new Schema({
    color: String,
    category: String,
    title: String,
    content: {
        type: String,
        required: true
    },
    date: { 
        type: Number,
        required: true
    },
    file: fileSchema
})

interface IUser extends Document {
    name: string
    email: string
    password: string
    notes: INote[]
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: (value: string): boolean => value.includes('@')
    },
    password: {
        type: String,
        required: true
    },
    notes: [noteSchema]
})

export default mongoose.model<IUser>('User', userSchema)