import date from '../model/userSchema.js';


export const addDate = async (req, res) => {
    console.log("date")
    try {

        const { startDate, endDate } = req.query;
        console.log(req.query)
        console.log("heloooo")

        if (startDate === '' || endDate === '') {
            console.log("helloo")
            return res.json({ error: "Please ensure you pick two dates" });
        }
        console.log({ startDate, endDate });

        const checkdate = date.find({
            startDate: {
                $gte: new Date(new Date(startDate).setHours()),
                $lt: new Date(new Date(endDate).setHours())
            }
        }).sort({ startDate: 'asc' })

    }
    catch (err) {
        console.log("errrrrr")
        console.log(err);
    }


}


