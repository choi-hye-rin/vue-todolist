export default {
  getCategoryLabel(categoryList, id) {
    const label = categoryList.filter((cate) => cate.id === id)[0]?.value;
    return label;
  },
};
