import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Finish from '../views/Finish.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'
import Play from '../views/Play.vue'


const history = createWebHistory()
const routes = [

    { 
      path: '/Finish', 
      name: 'Finish', 
      component: Finish
    },
    { 
      path: '/Men', 
      name: 'Men', 
      component: Men
    },
    { 
      path: '/Women', 
      name: 'Women', 
      component: Women
    },
    { 
      path: '/Play', 
      name: 'Play', 
      component: Play
    }
  
]
  
  const router = createRouter({ history, routes })
  export default router
  