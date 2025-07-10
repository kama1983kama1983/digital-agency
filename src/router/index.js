import {createRouter, createWebHistory} from 'vue-router';
import ServicesPage from '../pages/ServicesPage.vue';
import Home from '../pages/Home.vue';
import AdminDashboard from '../pages/AdminDashboard.vue';
import LoginPage from '../pages/LoginPage.vue';
import LogoutPage from '../pages/LogoutPage.vue';
import ContactPage from '@/pages/Contact.vue';
import AboutPage from '@/pages/About.vue';
import ExplorPage from '@/pages/Explor.vue'
const BaseTitle = import.meta.env.Title;
const BaseUrl = import.meta.env.BASE_URL;
const routes = [
 {
  path : '/services',
  name : 'services',
  component : ServicesPage,
  meta: {
    title: "Our Services"
  }
 },
 {
    path:'/explor',
    name:'explor',
    component:ExplorPage,
    meta:{
      title :"Explor My Comapny"
    }
 },
 {
  path : '/',
  name : 'home',
  component : Home,
  meta: {
    title: "Home"
  }
 },
  {
  path : '/contact',
  name : 'contact',
  component : ContactPage,
  meta: {
    title: "About Our Company"
  }
 },,
  {
  path : '/about',
  name : 'about',
  component : AboutPage,
  meta: {
    title: "About Our Company"
  }
 },
 {
  path : '/admin',
  name : 'admin',
  component : AdminDashboard,
  meta: {
    title: "Admin Dashboard"
  },

 },
 {
  path:'/admin/login',
  name : 'login',
  component:LoginPage,
  meta:{
    title : "Login Area"
  }
},
 {
  path:'/admin/login',
  name : 'login',
  component:LoginPage,
  meta:{
    title : "Login Area"
  }
},
  {
  path:'/admin/logout',
  name : 'logout',
  component:LogoutPage
 }
];

console.log(BaseTitle)

const router = createRouter({
    history : createWebHistory(BaseUrl),
    routes
})

router.beforeEach(async (to ,from , next) => {
  // Use the meta title if available, otherwise use BaseTitle, or a fallback
  document.title = to.meta.title ? `${to.meta.title} | ${BaseTitle || 'Digital Agency'}` : (BaseTitle || 'Digital Agency');

  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    try {
      const response = await fetch('http://localhost:3000/admin/check-auth', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        if (data.isAuthenticated) {
          next();
        } else {
          next('/admin/login');
        }
      } else {
        next('/admin/login');
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      next('/admin/login');
    }
  } else {
    next();
  }
})

export default router;
