import { Task } from "../models/Task.js";
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    //Here we return the task created
    res.json(newTask);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (!task)
      return res.status(404).json({ message: "project does not exist" });
    res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id },
    });
    task.set(req.body);
    await task.save();
    console.log('hola')
    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({
      where: { id },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
