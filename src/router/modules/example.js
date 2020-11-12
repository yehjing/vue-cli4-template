/** When your routing table is too long, you can split it into small modules **/

// import Container from '@/views/container'

// import Layout from '@/layout'

const exampleRouter = {
  path: '/login',
  component: () => import('@/views/login/index'),

  // path: '/manage-employee',
  // component: Layout,
  // name: 'manageEmployee',
  // redirect: 'noRedirect',
  // meta: {
  //   title: '员工管理',
  //   icon: 'user',
  //   perKey: 'staffManager',
  // },
  // children: [
  //   {
  //     path: 'role-manage',
  //     component: () => import('@/views/manage-employee/role-manage'),
  //     name: 'role-manage',
  //     meta: { title: '角色管理', perKey: 'staffManager:role' },
  //   },
  // ],
}

export default exampleRouter
