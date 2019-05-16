import home from './components/home.vue';
import movieplay from './components/movieplay.vue';
import movieplay1 from './components/movieplay1.vue';
import castdetails from './components/castdetails.vue';
import searchdetails from './components/searchdetails.vue';
import paymentplans from './components/paymentplans.vue';
import singlemovie from './components/singlemovie.vue';
import login from './components/login.vue';
import profile from './components/profile.vue';
import category from './components/category.vue';
import terms_of_use from './components/terms_of_use.vue'
import about from './components/about.vue'
import privacy_policy from './components/privacy_policy.vue';

export default[
    {path: '/', name:"login", component: login},
    {path: '/login', component: login},
    {path: '/profile', component:profile},
    {path: '/category/:id', component:category},
    {path: '/cast/:castname/:id', component:castdetails},
    {
        path: '/movies/:id/:id2',  
        name:"movie", 
        component: singlemovie,
        meta: {
            title: 'Movie Page - Saina Movies',
            metaTags: [
                {
                    name: 'description',
                    content: 'Watch legally now on Saina Movies'
                },
                {
                    property: 'og:description',
                    content: 'Watch legally now on Saina Movie'
                }
            ]
        }
    },
    {path: '/movies/:id/:id2/:id3', name:"movieplay", component: movieplay1},
    {path: '/castdetails', component: castdetails},
    {path: '/searchdetails', component: searchdetails},
    {path: '/paymentplans',  name:"paymentplans", component: paymentplans},
    {path: '/movies', name:"home", component: home},
    {path: '/movieplay',component: movieplay},
    { path: '/terms-of-use', component: terms_of_use},
    { path: '/privacy-policy', component: privacy_policy},
    {path:'/about', component: about}
];

