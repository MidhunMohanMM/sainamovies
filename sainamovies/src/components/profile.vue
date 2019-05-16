<template>
    <div>
        <span id="load" ></span>
        <div id="contents">
                      <nav class="uk-navbar-container" id="nav" uk-navbar style="background:black;height:50px;">
                 
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                             <a id="pplr"><i class="fas fa-arrow-left fa-2x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
                           <a id="pplrm"><i class="fas fa-arrow-left fa-3x"  @click="back" style="margin-bottom:451px;margin-left:40px;color:white;"></i></a>
                        <!-- <li v-if="name!='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-push"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                         <li v-if="name=='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-pushg"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li> -->
                        <li><router-link v-bind:to="'/movies'">
                            <img id="navimg" src="../assets/images/sainalogin1.png" style="width: 15px;margin-right:10px;margin-left:30px;">
                                <a id="pplr"  style="color:darkorange;font-size:30px;text-decoration:none" class="uk-text-capitalize"> Saina</a>  
                            </router-link>
                        </li>
                        <li id="pplr"><router-link v-bind:to="'/category/watchlist'" class="uk-text-capitalize">Watchlisted Movies</router-link></li>

                    </ul>
                </div>

        <div v-if="name!='Guest'" id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
         <div class="uk-offcanvas-bar uk-flex uk-flex-column">
            <button class="uk-offcanvas-close" type="button" style="background:transparent;border-color:transparent"><i class="fas fa-times fa-4x" style="color:#757575"></i></button>
            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" uk-nav="multiple: true">
                
                <img class="uk-border-circle" width="80" height="80" src="../assets/images/a1.png">
                <!-- <li><router-link v-bind:to="'/movies'"><a style="color:darkorange;font-size:30px;text-decoration:none" class="uk-text-capitalize">Saina</a>   </router-link></li> -->
               <li id="font" class="uk-nav-header uk-text-capitalize uk-text-large" onTranslate="global.menu.title">{{ name }}</li>
               <li id="sfont" class=" uk-text-lowercase " onTranslate="global.menu.subtitle">{{ email }}</li>
               <li class="uk-divider-icon uk-margin-remove-bottom"></li>
               <li>
                  <a id="font"><router-link v-bind:to="'/profile'"><span uk-icon="user"></span> My Account</router-link></a>
               </li>
               <!-- <li class="uk-parent">
                  <a>News</a>
                  
               </li> -->
               <li class="uk-parent">
                  <a id="font" class="uk-nav-header uk-text-capitalize" href="#"><span uk-icon="heart"></span> My Watchlist</a>

               </li>
               <li class="uk-parent">
                  <a id="font" class="uk-nav-header uk-text-capitalize" href="#"><span uk-icon="commenting"></span> Help</a>

               </li>
               <li class="uk-parent">
                  <a id="font" class="uk-nav-header uk-text-capitalize" href="#"><span uk-icon="info"></span> Terms of Use</a>

               </li>

               <li>
                  <a id="font" class="uk-nav-header uk-text-capitalize" href='#'><span uk-icon="list"></span> Privacy Policy</a>
               </li>
               <li>
                  <a id="font" class="uk-nav-header uk-text-capitalize" @click="logout()"><span uk-icon="sign-out"></span> Log Out</a>
               </li>
    
               <hr class="uk-nav-divider">
            </ul>
         </div>
      </div>

        <div v-if="name=='Guest'" id="offcanvas-pushg" uk-offcanvas="mode: push; overlay: true">
         <div class="uk-offcanvas-bar uk-flex uk-flex-column">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" uk-nav="multiple: true">
                
                <img class="uk-border-circle" width="80" height="80" src="../assets/images/a1.png">
                <!-- <li><router-link v-bind:to="'/movies'"><a style="color:darkorange;font-size:30px;text-decoration:none" class="uk-text-capitalize">Saina</a>   </router-link></li> -->
               <li id="font" class="uk-nav-header uk-text-capitalize uk-text-large" onTranslate="global.menu.title">{{ name }}</li>
               <li id="sfont" class=" uk-text-lowercase " onTranslate="global.menu.subtitle">{{ email }}</li>
               <li class="uk-divider-icon uk-margin-remove-bottom"></li>
               <li>
                  <a id="font"><router-link v-bind:to="'/login'"><span uk-icon="user"></span> Sign In</router-link></a>
               </li>
  
    
               <hr class="uk-nav-divider">
            </ul>
         </div>
      </div>
      <div id="pplrm" class="uk-navbar-center">
          
          <i class="fas fa-user-circle fa-10x " style="color:#ff9b00;"></i>
      </div>
      <p style="color:white;font-size:43px;font-weight:450;padding-left:32%;padding-top:42%">Profile</p>
            <div class="uk-navbar-right" >
                    <ul class="uk-navbar-nav" >
                        <li>
                            <a class="uk-navbar-toggle" id="dropd"><i class="fas fa-search " ></i></a>
                            <div class="uk-drop"  uk-drop="mode: click; pos: left-center; offset: 0">
                                <form class="uk-search uk-search-navbar ">
                                    <input type="text" v-model="searchvue" id="srchinput" class="uk-search-input"  placeholder="Search..." autofocus />
                                    <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 300" style="background:black;display:block;margin-top:0px;min-width:300px;">
                                        <ul v-for="movie in filteredMovies.slice(0,6)"  :key="movie.id" class="uk-nav uk-dropdown-nav" style="display:block;">
                                            <li class="uk-active">
                                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                                    <a style="color:white;">{{ movie.title }}</a>
                                                </router-link>
                                            </li>
                                            <li style="border-top: 1px solid #3a3a3a" class="uk-nav-divider"></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li id="drop-down" v-if="name!='Guest'"><a id="navname" class="uk-text-capitalize"><i class="fas fa-user uk-margin-right"></i> Welcome {{ name }}!</a></li>
                        <li id="drop-down" v-if="name=='Guest'"><a id="navname" class="uk-text-capitalize"><i class="fas fa-user uk-margin-right"></i> {{ name }}</a></li>
                            <div v-if="name!='Guest'" id="drop-down" uk-dropdown style="margin-top:0px;background:rgb(13, 21, 23)">
                                <ul class="uk-nav uk-dropdown-nav" style="margin-top:3px;">
                                    <li ><a href="/profile" >Profile</a></li>
                                    <li class="uk-nav-divider"></li>
                                    <li><a @click="logout()" >Log Out</a></li>
                                </ul>
                            </div>
                            <div v-if="name=='Guest'" id="drop-down" uk-dropdown style="margin-top:0px;background:rgb(13, 21, 23)">
                               <ul class="uk-nav uk-dropdown-nav" style="margin-top:3px;">
                                   <li><a href="/" >Sign In</a></li>
                               </ul>
                            </div>
                    </ul>
                </div>

                <!-- <div class="uk-navbar-right" id="pplrm">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a class="uk-navbar-toggle"><i class="fas fa-search fa-3x"></i></a>
                            <div class="uk-drop"  uk-drop="mode: click; pos: left-center; offset: 0">
                                <form class="uk-search uk-search-navbar uk-width-1-1">
                                    <input style="color:white;"  v-model="searchvue" class="uk-search-input"  placeholder="Search..." autofocus>
                                    <div uk-dropdown  style="background:black;margin-top:0px;display:block;">
                                        <ul v-for="movie in filteredMovies.slice(0,6)"  :key="movie.id" class="uk-nav uk-dropdown-nav"  style="display:block;">
                                            <li class="uk-active">
                                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                                    <a style="color:white;">{{ movie.title }}</a>
                                                </router-link>
                                            </li>
                                            <li style="border-top: 1px solid #3a3a3a" class="uk-nav-divider"></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div> -->
            </nav>
        <div class="uk-container uk-container-small uk-margin-large-top uk-margin-large-bottom" style="background:#fbfbfb" id="pplr" >
            <div>
                <p class="uk-text-large uk-margin-top">Account</p>
                <hr class="uk-divider-icon">
                <div>
                    <p class="uk-align-left">Membership</p>               
                    <div class="uk-align-right uk-margin-large-right">
                        <p v-if="me.user_plan == 'DAILY'">Daily Plan</p>
                        <p v-if="me.user_plan == 'Yearly Plan'">Yearly Plan</p>
                        <p v-if="me.user_plan == 'Monthly Plan'">Monthly Plan</p>
                         <p style="color:#e71e24" v-if="me.user_plan == 'No Plan'">{{ me.user_plan}}</p>
                        <hr>
                        <p >Subscription Valid Till : {{ formatdate }}</p>
                        <p>{{daydiff}} day(s) remaining</p>
                        <a @click="update()">Update Subscription</a><br><br>
                        <a @click="cancel()">Cancel Subscription</a><br><br>
                        <p>Account Details</p>
                        <hr>
                        <p> {{ me.email }}</p>
                        <a @click="logout()">Sign out</a>
                    </div>       
                </div>
                <br><br><br><br>
                <div class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
                    <img src="../assets/images/a1.png" width="100" alt="">
                    <p>{{ me.user }}</p>
                </div>
            </div>

            
        </div>
        <div class="uk-container uk-container-small " style="background:white;padding-bottom:600px;padding-top:50px;" id="pplrm">
            <div>
                <!-- <p id="fontnl" class="uk-text-large uk-margin-top">Account</p> -->

                <!-- <hr class="uk-divider-icon"> -->
                <div>
                    <p class="uk-text-uppercase" style="font-size:35px;" >Membership</p>               
                    <div class=" uk-margin-large-right">

                        <div class="uk-card uk-card-default uk-card-body uk-card-hover">
                        <p  style="font-size:35px" v-if="me.user_plan == 'DAILY'">Daily Plan</p>
                        <p   style="font-size:35px" v-if="me.user_plan == 'Yearly Plan'">Yearly Plan</p>
                        <p  style="font-size:35px" v-if="me.user_plan == 'Monthly Plan'">Monthly Plan</p>
                         <p   style="font-size:35px"  v-if="me.user_plan == 'No Plan'">{{ me.user_plan}}</p>
                        <hr>
                        <p   style="font-size:35px">Subscription Valid Till : {{ formatdate }}</p>
                        <p  style="font-size:35px">{{daydiff}} day(s) remaining</p>
                        <a  style="font-size:35px" @click="update()">Update Subscription</a><br><br>
                        <a   style="font-size:35px" @click="cancel()">Cancel Subscription</a><br><br>
                        </div>

                        <p class="uk-text-uppercase" style="font-size:35px;">Account Details</p>
                        <!-- <hr> -->
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover">
                            <p style="font-size:35px">{{ me.user }}</p>
                            <p style="font-size:35px" > {{ me.email }}</p>
                            <a style="font-size:35px"  @click="logout()">Sign out</a>
                        </div>
                    </div>       
                </div>
                <div class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
                    <!-- <img src="../assets/images/a1.png" width="100" alt=""> -->
                    
                </div>
            </div>

            
        </div>
      <nav id="ft" class="uk-navbar-container " uk-navbar style="background:rgb(122, 134, 139);height:100%;">
                <div class="uk-navbar-left uk-padding-small">
                    <ul class="uk-navbar-nav uk-margin-large-left">
                        <li id="font" class="uk-text-small" style="color:white;"><a href="#" class="uk-text-capitalize" style="min-height: 0px;color:white;padding-right:30px;"> Saina Movies © All Rights Reserved</a></li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-margin-left">
                        <!-- <li id="font" class="uk-text-small" style="color:white; padding-right:30px;" >Help</li> -->
                        <li id="font" class="uk-text-small" style="color:white;padding-right:30px;"><router-link v-bind:to="'/terms-of-use'" class="uk-text-capitalize" style="min-height: 0px;color:white;padding-right:30px;">Terms of use</router-link></li>
                        <li id="font" class="uk-text-small" style="color:white;padding-right:30px;"><a href="#" class="uk-text-capitalize" style="min-height: 0px;color:white;padding-right:30px;">Help</a></li>
                        <li id="font" class="uk-text-small" style="color:white;padding-right:70px;"><router-link v-bind:to="'/privacy-policy'" class="uk-text-capitalize" style="min-height: 0px;color:white;padding-right:30px;">Privacy Policy</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            srch: "",
            noResults: "",
            noResults1: "",
            searchResults: [],
            plan: "",
            name: "",
            me: "",
            daydiff: "",
            formatdate: "",
            list: "",
            subid: {
                bookmark_id: ""
            },
            subup: {
                plan: ""
            },
            subr: {
                grant_type: "refresh_token",
                client_id: "",
                refresh_token: ""
            },
            email: "",
            searchvue: '',
            searchvuem: ''
        }
    },
    created(){
        this.search();
    },
    computed: {
        filteredMovies: function(){
           // console.log(this.searchvue);
            return this.searchResults.filter((searchResult) => {
                return searchResult.title.toLowerCase().match(this.searchvue.toLowerCase())
            })
        },
        filteredMoviesMobile: function(){
           // console.log(this.searchvue);
            return this.searchResults.filter((searchResult) => {
                return searchResult.title.toLowerCase().match(this.searchvuem.toLowerCase())
            })
        },
    },
 
    mounted(){
        this.userdetails();
        this.watchlist();
    //    this.tokenrefresh();
       // this.cancel();
        this.name =  localStorage.getItem('Name');
        this.email =  localStorage.getItem('Email');
        if(this.name == 'Guest')
            this.$router.replace({ name: "home"});
        this.loader();
    },
    methods: {
        back(){
            var self = this;
            self.$router.replace ({ name: "home"});
        },
        loader(){
            $('#load').show(1).delay(1000).hide(1);
        },
        tokenrefresh(){
            var self = this;

            var started = localStorage['started'];
            if (started) {

                var diff = Date.now() - started;

                if (diff >= 1000 ) {
                    self.subr.client_id =  "QvkFkTpUdh3tOu7MjIPm0V5XDrn2tTxIoe0Qk4c7";
                    self.subr.refresh_token =  localStorage.getItem('refresh_token');
                
                    axios.post('https://app.sainavideo.com/auth/token/',self.subr)
                    .then(function(response){
                       // console.log(response.data);
                    
                        localStorage.setItem('server_access_token', response.data.access_token);       
                    })
                    .catch(function (error) {
                        ////console.log('An Error occured',  error);
                    });
                }
            }
             else {
                localStorage['started'] = Date.now();
            }
                  
        },
         back(){
            var self = this;
            self.$router.replace ({ name: "home"});
        },
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        search(){
            var self = this;
            ////console.log(self.srch);
            axios.get('https://app.sainavideo.com/vdocipher/api/search/?keyword='+self.srch,{
            })
            .then(function(response){
                ////console.log(response.data);           
                self.searchResults = response.data.results;
                ////console.log(self.searchResults);
                self.noResults = self.searchResults.length === 0;                       
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });
        },
        update(){
            var self = this;
            localStorage.setItem('product_id', self.me.product_id);
            this.$router.replace ({ name: "paymentplans" });

        },
        cancel(){
            var self = this;
            var server_access_token1 = localStorage.getItem('server_access_token');

            axios({url: 'https://app.sainavideo.com/vdocipher/api/cancelsub', method: 'POST',headers: {'Authorization': 'Bearer '+server_access_token1} })
                .then(function(response){
                    ////console.log(response.data);  
                })
                .catch(function (error) {
                    ////console.log('An Error occured',  error.response);
                });
        },
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        signout(){
            localStorage.clear();
            this.$router.replace( { name: "login" });
        },
        userdetails(){
            var self = this;
            var server_access_token = localStorage.getItem('server_access_token');
           // console.log(server_access_token)
            axios.get('https://app.sainavideo.com/vdocipher/api/me/',{
                 headers: {'Authorization': 'Bearer '+server_access_token},
            })
            .then(function(response){
                // console.log(response.data); 
                self.me = response.data.me;

                var date = new Date (self.me.expiry_date);
                var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                self.formatdate = new Intl.DateTimeFormat('en-US', options).format(date);
                var A = Date.now();
                var d = new Date(self.formatdate).getTime();

                if(d>A) {
                    var diff=d-A;
                  // console.log(diff)

                    var date = new Date (diff);
                    var options1 = { day: 'numeric' };
                    self.daydiff = new Intl.DateTimeFormat('en-US', options1).format(date);
                   // console.log(self.daydiff);
                }
                else{
                    self.daydiff=0;
                }


            })
            .catch(function (error) {
                // if (error.response.status === 401) {
                //     self.tokenrefresh();
                //     self.userdetails();
                // }
                console.log('An Error occured',  error);
            });
        },
        watchlist(){
            var self = this;
            var server_access_token = localStorage.getItem('server_access_token');
            ////console.log(server_access_token);
            axios.get('https://app.sainavideo.com/vdocipher/api/watchlist',{
                 headers: {'Authorization': 'Bearer '+server_access_token},
            })
            .then(function(response){
                ////console.log(response.data); 
                self.list = response.data.results;
                self.noResults1 = self.list.length === 0;  
            })
            .catch(function (error) {
            // if (error.response.status === 401) {
            //     self.tokenrefresh();
            //     self.watchlist();
            // }
              //  console.log('An Error occured',  error);
            });
        },
        deletewatchlist(id){
            var self = this;
            var server_access_token = localStorage.getItem('server_access_token');
            ////console.log(server_access_token);
            ////console.log(id);
            self.subid.bookmark_id = id;
            axios.post('https://app.sainavideo.com/vdocipher/api/deletewatchlist',self.subid,{
            headers: {'Authorization': 'Bearer '+server_access_token}
            })
            .then(function(response){
                ////console.log(response.data);    
                self.watchlist();           
            })
            .catch(function (error) {
            // if (error.response.status === 401) {
            //     self.tokenrefresh();
            //     self.deletewatchlist(id);
            // }
              //  console.log('An Error occured',  error);
            });
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: #859494;
    }


    #load{
    width:100%;
    height:100%;
    position:fixed;
    z-index:9999;
    background:url("../assets/images/491 (2).gif") no-repeat center center
}
img:hover {
    cursor: pointer;
}
#drop-down{
    top: 50px !important;
    text-align: center;
}

@media screen and (max-width: 980px) {
    #pplr{
        display:none;
    }
    #dropd{
        display: none;
    }
        #play{
        top:10%!important;
    }
    #font{
        font-size:35px!important;
        color:white;
    }
    #fontcinema{
        font-size:35px!important;
        padding-left:50%!important;
    }
    #category{
        margin-top:50px;
    }
    #nav{
        height:618px!important;
        background: #217aff!important;
    }
    #navfont{
        font-size:60px!important;
    
    }
    #navimg{
        width:40px!important;
        display:none;
    }
    #navname{
        font-size:30px!important;
    }
        #sfont{
        font-size:20px!important;
    }
    #thumb{
        width: 400px;
    }
    #new{
        display:none;
    }
    #add{
        display:none;
    }
    #fonttitle{
             font-size:35px!important;
        /* padding-left:50%!important; */
    }
    #fonttitlel{
          font-size:50px!important;
    }
    #fontl{
              font-size:50px!important;
                   color:orange;
    }
    #fontnl{
              font-size:60px!important;
                   color:white;
    }
    #drop-down{
        display: none;
    }

}

@media screen and (min-width: 981px) {

#pplrm{
        display:none;
}
}
a{
    text-decoration: none;
}
</style>