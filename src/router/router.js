const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')))

const appRouter = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Hello
  }
]

export const routers = [
  ...appRouter
]
