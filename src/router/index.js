import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Music from '@/page/Music'
import Video from '@/page/Video'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
