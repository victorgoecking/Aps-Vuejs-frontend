import Home from '../views/Home.vue'
import ListStudents from '../components/ListStudents.vue'
import RegisterStudent from '../components/RegisterStudent.vue'
import EditStudent from '../components/EditStudent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'ListStudents',
    component: ListStudents
  },
  {
    path: '/register',
    name: 'RegisterStudent',
    component: RegisterStudent
  },
  {
        
    path: '/student/edit/:id',
    component: EditStudent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routes
