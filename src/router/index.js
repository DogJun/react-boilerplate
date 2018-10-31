import Loadable from 'react-loadable'
import Loading from '../components/Loading'

const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: 'app' */'../App'),
      loading: Loading
    }),
    routes: [
      {
        path: '/',
        exact: true,
        component: Loadable({
          loader: () => import(/* webpackChunkName: 'home' */'../pages/Home'),
          loading: Loading
        })
      },
      {
        path: '/home',
        exact: true,
        component: Loadable({
          loader: () => import(/* webpackChunkName: 'home' */'../pages/Home'),
          loading: Loading
        })
      }
    ]
  }
]

export default routes
