import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './views/index.vue';
import subject from './views/subject.vue';
import exam from './views/exam.vue';
import practice from './views/practice.vue';
import notfound from './views/notfound.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: '/', component: index
        },{
            path: '/:subject/:mode', component: subject
        },{
            path: '/:subject/mock/:id', component: notfound
        },{
            path: '/:subject/:mode/:id', component: practice
        }
    ] 
});

export {router};