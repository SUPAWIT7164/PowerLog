export default {
  selectLog({ commit }, data) {
    return this.$axios
      .$get('/select/selectLog', { params: data })
      .then((response) => {
        return Promise.resolve(response)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },
}
