const defualtTemplate = () => import(/* webpackChunkName: "defualt" */ '@/layout/defualt')
const login = () => import(/* webpackChunkName: "defualt" */ '@/page/login/login')
const test = () => import(/* webpackChunkName: "defualt" */ '@/page/test')

export default{
  defualtTemplate,
  login,
  test
}
