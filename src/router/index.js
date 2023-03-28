import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Blog from '../views/VBlog.vue';
import Post from '../views/VPost.vue';
import UserPost from '../views/VUserPost.vue';
import NotFound from '../views/NotFound.vue';
import Order from '../views/VOrder.vue';
import Product from '../views/VProduct.vue';
import Users from '../views/VUsers.vue';
import Profile from '../views/Users/VProfile.vue';
import Courses from '../views/Users/VCourses.vue';
import Index from '../views/Users/VIndex.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'about',
    component: () => import( '../components/AboutComponent.vue')
  },
  {
    path: "/post",
    name: 'blog',
    component: Blog,
  },
  //redireccion de rutas
  {
    path: "/blog",
    redirect: {name: 'blog'}
  },
  //: espera un parametro
  {
    path: "/blog/:post",
    name: 'post',
    component: Post,
  },
  //Pasar mas de dos paramentros en rutas
  {
    path: "/user/:user/post/:post",
    name: 'UserPost',
    component: UserPost,
  },
   // Sintaxis por coincidencia con expresiones regulares
  {
    path: "/compras/:orderId(\\d+)",
    name: 'Order',
    component: Order,
  },
  {
    path: "/compras/:productName",
    name: 'Porduct',
    component: Product,
  },
  //Error 404
  {
    path: "/:pathMath(.*)",
    name: 'NotFound',
    component: NotFound,
  },
  //Rutas con parámetros opcionales 
  {
    path: "/users/:userId(\\d+)?",
    name: 'Users',
    component: Users,
    props: true,
    children: [
      {
        path: "",
        name: "UserIndex",
        component: Index,
      },
      {
        path: "perfile",
        name: "UserProfile",
        component: Profile,
      },
      {
        path: "courses",
        name: "UserCourses",
        component: Courses,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
