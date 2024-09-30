export default {
  selectLog({ commit }, data) {
    return this.$axios
      .$get('api/select/selectLog',)
      .then((response) => {
        return Promise.resolve(response)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },
}
