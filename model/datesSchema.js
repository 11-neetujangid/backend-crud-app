import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const datesSchema = mongoose.Schema({
    startDate: Date,
    endDate: Date,

});

autoIncrement.initialize(mongoose.connection);
datesSchema.plugin(autoIncrement.plugin, 'date');

const date = mongoose.model('date', datesSchema);

export default date;