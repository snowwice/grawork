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
            path: '/:subject/mock/:id', component: exam,
            // beforeEnter(to,from,next){
            //     console.log(to.query.path);
            //     if(to.query.path == ""){next('/404')}
            //     next();
            // }
        },{
            path: '/:subject/:mode/:id', component: practice,
            beforeEnter(to, from, next){
                // console.log(to.query.path);
                if (to.query.path == "") {
                    next('/404')
                }
                next();
            }
        }, {
            path: '/404', component: notfound
        }
    ] 
});

export {router};