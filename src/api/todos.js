import axios from "axios";

export default {
  getTodoList() {
    const res = axios.get(`${process.env.VUE_APP_API_BASE_URL}/todos`);
    return res;
  },

  addTodoItem(data) {
    const res = axios.post(`${process.env.VUE_APP_API_BASE_URL}/todos`, data);
    return res;
  },

  deleteTodoItem(id) {
    const res = axios.delete(`${process.env.VUE_APP_API_BASE_URL}/todos/${id}`);
    return res;
  },
};
