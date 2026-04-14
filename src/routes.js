
import Vue from "vue";
import  VueRouter from 'vue-router';

import AddUser from "./views/AddUser.vue";
import EditUser from "./views/EditUser.vue";
import AllUsers from "./views/AllUsers.vue";
import Home_View from "./views/Home.vue"
// import { component } from "vue/types/umd";


Vue.use(VueRouter);
const routes=[

    {
        path:"/Home_View",
        name:"Home_View",
        component:Home_View
    },
    {
        path:"/AddUser",
        name:"AddUser",
        component:AddUser
    },
    {
        path:"/EditUser",
        name:"EditUser",
        component:EditUser
    }
    ,
    {
        path:"/AllUsers",
        name:"AllUsers",
        component:AllUsers
    }
];


const router=new VueRouter({
    routes
});
export default router;
