
import post from '../model/postSchema.js';

export const addPost = async (req, res) => {
    console.log("user Post")
    console.log(req.body)
    const { userId, title, body } = req.body;
    try {
        console.log("post data")
        const Post = new post({ userId, title, body });
        console.log("posts", Post);
        const a = await Post.save();
        console.log(a)

    } catch (error) {
        console.log(error);
    }
}

export const getPosts = async (req, res) => {
    console.log("get posts")
    try {
        let Post = await post.find();
        console.log("get", Post)
        res.json(Post);
    } catch (err) {
        res.json({ message: err.message })
    }
}

export const getPostById = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    console.log("get posts data")
    try {
        const Post = await post.findById(id);
        res.json(Post);
        console.log("end...")
    } catch (err) {
        res.json({ message: err.message })
    }
}

export const editPost = async (req, res) => {
    console.log("edit post data..");
    const Post = req.body;
    // console.log(Post)
    const editPost = new post(Post);
    // console.log(editUser)
    try {
        const ed = await post.updateOne({ _id: req.params.id }, editPost);
        console.log(ed)
        res.json(editPost);
    } catch (err) {
        res.json({ message: err.message })
    }
}





// export const deletePost = async (req, res) => {

//     try {
//             await post.deleteOne({ _id: req.params.id });
//             res.json("users post deleted")
//     } catch (err) {
//             res.json({ message: err.message })
//     }
// }