import axios from "axios";

export default {
  getTodoList(sort) {
    const res = axios.get(
      `${process.env.VUE_APP_API_BASE_URL}/todos?_sort=${sort}`
    );
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

  updateTodoItem(id, data) {
    const res = axios.patch(
      `${process.env.VUE_APP_API_BASE_URL}/todos/${id}`,
      data
    );
    return res;
  },

  getCategory() {
    const res = axios.get(`${process.env.VUE_APP_API_BASE_URL}/category`);
    return res;
  },

  addCategory(data) {
    const res = axios.post(
      `${process.env.VUE_APP_API_BASE_URL}/category`,
      data
    );
    return res;
  },
};
