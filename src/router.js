import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Music from './views/Music'
import Video from './views/Video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
