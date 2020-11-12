import request from '@/utils/request'

export default {

  //
  //   {
  //     "pageNo":1,
  //     "pageSize": 20
  // }
  fetchSites(data) {
    return request({
      url: '/emp/querySites/index',
      method: 'POST',
      data,
    })
  },
  //   {
  //     "pageNo":1,
  //     "pageSize": 20,
  //     "status": 1,
  //     "sitePath": "478",
  //     "siteName": "聯合"
  // }
  sitesSearch(data) {
    return request({
      url: '/emp/querySites/search',
      method: 'POST',
      data,
    })
  },
  fetchRoles(data) {
    return request({
      url: '/emp/index',
      method: 'POST',
      data,
    })
  },
  roleSearch(data) {
    return request({
      url: '/emp/search',
      method: 'POST',
      data,
    })
  },
  roleAdd(data) {
    return request({
      url: '/emp/add',
      method: 'POST',
      data,
    })
  },
  role(id) {
    return request({
      url: `/emp/role/${id}`,
      method: 'GET',
    })
  },
  roleDelete(data) {
    return request({
      url: '/emp/delete',
      method: 'POST',
      data,
    })
  },
  // params: { "id": Number, "roleName": String, "roleDesc": String }
  roleUpdate(data) {
    return request({
      url: '/emp/update',
      method: 'POST',
      data,
    })
  },

  // 操作日誌搜尋
  userLog(data) {
    return request({
      url: '/userlog/index',
      method: 'post',
      data,
    })
  },

  //
  permission() {
    return request({
      url: '/permission/index',
      method: 'GET',
    })
  },
  selectPermission(id) {
    return request({
      url: `/permission/${id}`,
      method: 'GET',
    })
  },
  savePermission(data) {
    return request({
      url: '/permission/save',
      method: 'POST',
      data,
    })
  },

  // 登录日志 直接查詢
  loginRecord(data) {
    return request({
      url: '/loginRecord/query',
      method: 'POST',
      data,
    })
  },

}

