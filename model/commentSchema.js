import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const commentSchema = mongoose.Schema({

    body: String,

});

autoIncrement.initialize(mongoose.connection);
commentSchema.plugin(autoIncrement.plugin, 'comment');


const comment = mongoose.model('comment', commentSchema);

export default comment;