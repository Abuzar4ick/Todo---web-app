import Task from "../models/Task.js";

export const createNewTask = async (req, res) => {
  const { task } = req.body;

  try {
    if (!task) return res.status(400).json({ message: "Field is required" });

    const newTask = await Task.create({ task });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(`Error in createNewTask controller: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(`Error in getAllTasks controller: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task was deleted successfully" });
  } catch (error) {
    console.error(`Error in deleteTaskById controller: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { isCompleted: true });
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task was updated successfully" });
  } catch (error) {
    console.error(`Error in updateTaskById controller: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
