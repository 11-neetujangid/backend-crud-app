
import task from '../model/taskSchema.js';
export const addTask = async (req, res) => {
    console.log("task")
    console.log(req.body)
    const { title, date, startTime, endTime, user } = req.body;
    console.log(date);
    try {
        console.log("data")
        const Task = new task({ title, date, startTime, endTime, user });
        console.log("tasks", Task);
        const a = await Task.save();
        console.log(a)

    } catch (error) {
        console.log("errorrrrrr")
        console.log(error);
    }
}

export const getTasks = async (req, res) => {
    console.log("get tasks");
    try {
        let Task = await task.find();
        console.log("get", Task)
        res.json(Task);
    } catch (err) {
        res.json({ message: err.message })
    }

}

export const getDate = async (req, res) => {
    console.log(req.query)

    try {
        const {sDate, eDate} = req.query;

        console.log("mnbcn");
        console.log("both dates",sDate, eDate);

        const Task = await task.find({
            "date": {
                $gte: sDate,
                $lt: eDate
            }
        })
        console.log(Task);

    } catch (err) {
        console.log("errrr")
        res.json({ message: err.message })
    }

}


