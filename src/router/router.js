const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')))
const GetInfoFromVuex = r => require.ensure([], () => r(require('@/components/getInfoFromVuex')))

const appRouter = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Hello
  },
  {
    path: '/getInfoFromVuex',
    name: 'GetInfoFromVuex',
    component: GetInfoFromVuex
  }
]

export const routers = [
  ...appRouter
]
