import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// import BootstrapVue from 'bootstrap-vue'


Vue.use(VueRouter);
// Vue.use(BootstrapVue);
Vue.prototype.$code = 'FA5G3qtYiul7ytPVZjXctJOv8a0gWr';

window.fbAsyncInit = function() {
  FB.init({
    appId            : '2137933213088860',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.2'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  
})
