
import comment from "../model/commentSchema.js";

export const addComment = async (req, res) => {
    console.log("comment Post");
    console.log(req.body);
    const { body } = req.body;
    try {
        console.log("comment data")
        const Comment = new comment({ body });
        console.log("comment", Comment);
        const a = await Comment.save();
        console.log(a)

    } catch (error) {
        console.log(error);
    }
}

export const getComments = async (req, res) => {
    console.log("get comments")
    try {
        let Comment = await comment.find();
        console.log("get", Comment)
        res.json(Comment)
    } catch (err) {
        res.json({ message: err.message })
    }
}