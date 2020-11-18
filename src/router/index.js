import Vue from 'vue'
import Router from 'vue-router'
import QuizPage from '../components/Quiz.vue'
//import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'QuizPage',
      component: QuizPage,
      meta: { requiresAuth: false }
    },

  ]
});


// Secure routes
router.beforeEach((to, from, next) => {
  //let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth ) {
    next('landing')
  }
  else next();
})

export default router;
