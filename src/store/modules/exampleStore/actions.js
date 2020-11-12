import api from '@/api/example'
// import { onMessageBy } from '@/utils/message'

export const actions = {

  async FetchSites({ commit }, params) {
    const response = await api.fetchSites(params)
    commit('FETCH_SITES', response.data.result)
  },
  async RoleSearch({ commit }, params) {
    try {
      const response = await api.roleSearch(params)

      console.log('%c response ', 'font-weight: bold; color: white; background: red;', response)
      commit('FETCH_ROLES', response.data.result)
    } catch (error) {
      console.log('%c error ', 'font-weight: bold; color: white; background: red;', error)
      // onMessageBy(error)
    }
  },
  RoleUpdate({ commit }, params) {
    return new Promise((resolve, reject) => {
      api.roleUpdate(params).then(response => {
        // onMessageBy(response)
        resolve(response)
      }).catch(error => {
        // onMessageBy(error)
        reject(error)
      })
    })
  },

  // 操作记录
  async UserLog({ commit }, params) {
    try {
      const response = await api.userLog(params)

      console.log('response: ', response.data)
      commit('USER_LOG', response.data.result)

      // onMessageBy(response)
    } catch (error) {
      console.log('%c error ', 'font-weight: bold; color: white; background: red;', error)
      // onMessageBy(error)
    }
  },
}
