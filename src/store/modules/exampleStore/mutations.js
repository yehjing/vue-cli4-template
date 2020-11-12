
export const state = {
  fetchSites: {},
  fetchRoles: {},
  role: {},
  userLog: {},
  permission: {},
  loginRecord: {},
}

// 首页/員工管理
export const mutations = {
  // 站点后台 index
  FETCH_SITES: (state, data) => {
    state.fetchSites = data
  },
  // 角色管理 index
  FETCH_ROLES: (state, data) => {
    state.fetchRoles = data
  },
  // 修改角色
  ROLE: (state, role) => {
    state.role = role
  },

  // 登录日志
  USER_LOG: (state, data) => {
    state.userLog = data
  },
  PERMISSION: (state, data) => {
    let { permissionIds = [] } = data

    // NOTE: 过滤重复以及 null
    permissionIds = [...new Set(permissionIds.filter(id => id !== null))]

    state.permission = {
      ...data,
      permissionIds,
    }
  },

  // 登录日志
  LOGIN_RECORD: (state, data) => {
    state.loginRecord = data
  },

}

