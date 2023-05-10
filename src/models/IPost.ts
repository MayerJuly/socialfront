export interface IPost {
    _id: string,
    userId: string,
    profilePicture: string,
    NameUser: string,
    SurnameUser: string,
    description: string,
    image: string,
    likes: string[],
    createdAt: Date,
    updatedAt: Date,
}