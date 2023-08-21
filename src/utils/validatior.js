export default {
  validate(key, val) {
    const errors = [];

    if (!val || val.length === 0) {
      errors.push(`${key}는 필수입니다.`);
    }

    return errors;
  },
};
