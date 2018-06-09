import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('../views/home')), 'home')
const ball = r => require.ensure([], () => r(require('../views/ball')), 'ball')
const head = r => require.ensure([], () => r(require('../views/head')), 'head')
const cate = r => require.ensure([], () => r(require('../views/cate')), 'cate')
const index = r => require.ensure([], () => r(require('../views/index')), 'index')
const article = r => require.ensure([], () => r(require('../views/article')), 'article')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component : home
    },
    {
      path: '/ball',
      component : ball
    },
    {
      path: '/head',
      component : head
    },
    {
      path: '/cate',
      component : cate
    },
    {
      path: '/index',
      component : index
    },
    {
      path: '/article',
      component : article
    }
  ]
})