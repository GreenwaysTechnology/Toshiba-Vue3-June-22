import Home from '../components/Home.vue'
import Greeter from '../components/Greeter.vue'
import NotFound from '../components/NotFound.vue'
import HelloWorld from '../components/HelloWorld.vue';
import User from '../components/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'
import List from '../components/List.vue'
import Product from '../components/Product.vue'
// import ProductDetails from '../components/ProductDetails.vue'

import { createRouter, createWebHistory } from 'vue-router'


//route configuration
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '/product',
        component: Product,
        name: 'product'
    },
    {
        path: '/product/:id',
        //lazy loaded component
        component: import('../components/ProductDetails.vue')
    },
    {
        path: '/greet/:message',
        component: Greeter
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/user/:name',
        component: User,
        //nested routing
        children: [
            {
                path: '/',
                component: UserProfile
            },
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPost
            }
        ]
    },
    //will match everything and put under
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }

]
//create router object
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;