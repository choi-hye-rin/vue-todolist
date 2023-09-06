import dayjs from "dayjs";

export default {
  getCategoryLabel(categoryList, id) {
    const label = categoryList.filter((cate) => cate.id === id)[0]?.value;
    return label;
  },
  createRandomId() {
    const id = `${Math.random()}${dayjs().format("YYMMDDHHmmss")}`;
    return id;
  },
};
