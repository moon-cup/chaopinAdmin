import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: () => import('../components/index'),
      children: [{
          path: '/index',
          component: () => import('../components/content'),
          children: [{
              path: '/index',
              component: () => import('../components/dealwith')
            },
            {
              path: '/dealwith',
              component: () => import('../components/dealwith')
            },
            {
              path: '/order',
              component: () => import('../components/order')
            },
            {
              path: '/orderEdit',
              component: () => import('../components/orderEdit')
            },
            {
              path: '/userList',
              component: () => import('../components/userList')
            },
            {
              path: '/userEdit',
              component: () => import('../components/userEdit')
            },
            {
              path: '/proUpload',
              component: () => import('../components/proUpload')
            },
            {
              path: '/proList',
              component: () => import('../components/proList'),
              children: [{
                  path: '/proListDetail',
                  component: () => import('../components/proListDetail')
                },

                {
                  path: '/proListDetail1',
                  component: () => import('../components/proListDetail1')
                },
                {
                  path: '/proListDetail2',
                  component: () => import('../components/proListDetail2')
                },
                {
                  path: '/proListDetail3',
                  component: () => import('../components/proListDetail3')
                },
                {
                  path: '/proListDetail4',
                  component: () => import('../components/proListDetail4')
                },
                {
                  path: '/proListDetail5',
                  component: () => import('../components/proListDetail5')
                },
                {
                  path: '/proListDetail6',
                  component: () => import('../components/proListDetail6')
                },
                {
                  path: '/editPro',
                  component: () => import('../components/edit')
                },
              ]
            },
          ]
        },

      ]
    },

    {
      path: '/',
      component: () => import('../components/index'),
      children: [{
          path: '/',
          component: () => import('../components/login')
        },

      ]
    },

  ]
})
