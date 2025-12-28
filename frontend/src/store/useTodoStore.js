import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useTodoStore = create((set, get) => ({
  tasks: [],
  isTaskCreating: false,

  createNewTask: async ({ task }) => {
    set({ isTaskCreating: true })

    try {
      await axiosInstance.post("/tasks", { task });
      toast.success("A new task created successfully")
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isTaskCreating: false })
    }
  },

  getAllTasks: async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      set({ tasks: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  deleteTask: async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      toast.success("Task was deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  completeTask: async (id) => {
    try {
      await axiosInstance.patch(`/tasks/${id}`);
      toast.success("Task was completed successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
