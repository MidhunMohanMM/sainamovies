<template>
        <div  id="bg" class="uk-width-1-1@m" style="background: url(https://img.yts.am/assets/images/movies/the_predator_2018/background.jpg) no-repeat center center; background-size: cover; -webkit-background-size: cover;-moz-background-size: cover; -o-background-size: cover;">
        <!-- <div v-if="noResults1" style="background:#272727;"></div>    -->
            <span id="load" ></span>
             <nav class="uk-navbar-container" id="nav" uk-navbar style="background:black;height:50px;">
                 
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                               <a id="pplr"><i class="fas fa-arrow-left fa-2x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
                                <a id="pplrm"><i class="fas fa-arrow-left fa-3x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
                            <p id="pplrm" v-if="movname!=''"  class="uk-text-center uk-text-large" style="color:white;margin-left:100px;font-size:40px;font-weight:450">{{ movname }}</p> 
                            <p id="pplrm" v-if="list!=''"  class="uk-text-center uk-text-large" style="color:white;margin-left:100px;font-size:40px;font-weight:450">My Watchlist</p> 
                            <p id="pplrm" v-if="similarmovie!=''"  class="uk-text-center uk-text-large" style="color:white;margin-left:100px;font-size:40px;font-weight:450">Similar Movies</p> 
                            
                        <li v-if="name!='Guest'"><a id="pplr"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-push"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                         <li v-if="name=='Guest'"><a id="pplr"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-pushg"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                        <li><router-link v-bind:to="'/movies'">
                            <img id="navimg" src="../assets/images/sainalogin1.png" style="width: 15px;margin-right:10px;margin-left:30px;">
                                <a id="pplr"  style="color:darkorange;font-size:30px;text-decoration:none" class="uk-text-capitalize"> Saina</a>  
                            </router-link>
                        </li>

                    </ul>
                </div>

        <div v-if="name!='Guest'" id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
         <div class="uk-offcanvas-bar uk-flex uk-flex-column">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
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
            <div class="uk-margin-large-top">
                <p id="fontl" v-if="movname!=''"  class="uk-text-center uk-text-large" style="color:white;">{{ movname }}</p> 

                <div v-if="movies!= ''" class="uk-container uk-container-large uk-margin-large-top" id="dt" style="padding-bottom:500px;">
                    <div class="uk-child-width-1-6@m" uk-grid >
                        <div v-for="movie in movarr" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.thumbnail_image_path" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div>
                                        </div> -->
                                        <div class="middle">
                                             
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v+'/watch'">
                                                <button class="uk-button uk-button-small uk-button-default " style="background:rgb(205, 116, 0);border:none!important;color:white;width:100%">Play now</button>
                                            </router-link>
                                            <div v-if="movie.rating!=null">
                                                <div v-if="movie.rating=='5.00'" class="text">Rating: 5/5</div>
                                                <div v-if="movie.rating=='4.50'" class="text">Rating: 4.5/5</div>
                                                <div v-if="movie.rating=='4.00'" class="text">Rating: 4/5</div>
                                                <div v-if="movie.rating=='3.50'" class="text">Rating: 3.5/5</div>
                                                <div v-if="movie.rating=='3.00'" class="text">Rating: 3/5</div>
                                                <div v-if="movie.rating=='2.50'" class="text">Rating: 2.5/5</div>
                                                <div v-if="movie.rating=='2.00'" class="text">Rating: 2/5</div>
                                                <div v-if="movie.rating=='1.50'" class="text">Rating: 1.5/5</div>
                                                <div v-if="movie.rating=='1.00'" class="text">Rating: 1/5</div>
                                                <div v-if="movie.rating=='0.50'" class="text">Rating: 0.5/5</div>
                                                <div v-if="movie.rating=='0.00'" class="text">Rating: 0/5</div>

                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </router-link>
                                <p v-if="movie.title!=null" class="uk-margin-top" style="color:white">{{ movie.title }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

                <div v-if="similarmovie!= ''" class="uk-container uk-container-large uk-margin-large-top" id="dt" style="padding-bottom:500px;">
                    <p  class="uk-text-center uk-text-large uk-margin-large-bottom" style="color:white;">Similar Movies</p> 
                    <div class="uk-child-width-1-6@m" uk-grid >
                        <div v-for="movie in similarmovie" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.name+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.poster" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div>
                                        </div> -->
                                    </div>
                                </router-link>
                                <p v-if="movie.name!=null" class="uk-margin-top" style="color:white">{{ movie.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

                <p style="padding-left:10px; padding-top:250px;padding-bottom:250px;" class="uk-text-large uk-text-meta uk-text-center" v-if="noResults1" id="dt"> No Bookmarked movies</p>

                <div v-if="list!= ''" class="uk-container uk-container-large uk-margin-large-top" id="dt" style="padding-bottom:500px;">
                    <p id="font" class="uk-text-center uk-text-large uk-margin-large-bottom" style="color:white;">Watchlist</p> 
                    <div class="uk-child-width-1-6@m" style="margin-bottom:500px;" uk-grid >
                        <div v-for="movie in list" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.thumbnail_image_path" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div>
                                        </div> -->
                                    </div>
                                </router-link>
                                <p v-if="movie.title!=null" class="uk-margin-top" style="color:white">{{ movie.title }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>
                
                
                
                <div v-if="movies!= ''" class="uk-container uk-container-large " id="dtm">
                    <div class="uk-child-width-1-2" uk-grid >
                        <div v-for="movie in movarr" :key="movie.id">
                            <div class="uk-text-center ">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" style="width:360px" :src="movie.thumbnail_image_path" alt="">
                                        <div class="middle">
                                             
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v+'/watch'">
                                                <button class="uk-button uk-button-small uk-button-default " style="background:rgb(205, 116, 0);border:none!important;color:white;width:100%">Play now</button>
                                            </router-link>
                                            <div v-if="movie.rating!=null">
                                                <div v-if="movie.rating=='5.00'" class="text">Rating: 5/5</div>
                                                <div v-if="movie.rating=='4.50'" class="text">Rating: 4.5/5</div>
                                                <div v-if="movie.rating=='4.00'" class="text">Rating: 4/5</div>
                                                <div v-if="movie.rating=='3.50'" class="text">Rating: 3.5/5</div>
                                                <div v-if="movie.rating=='3.00'" class="text">Rating: 3/5</div>
                                                <div v-if="movie.rating=='2.50'" class="text">Rating: 2.5/5</div>
                                                <div v-if="movie.rating=='2.00'" class="text">Rating: 2/5</div>
                                                <div v-if="movie.rating=='1.50'" class="text">Rating: 1.5/5</div>
                                                <div v-if="movie.rating=='1.00'" class="text">Rating: 1/5</div>
                                                <div v-if="movie.rating=='0.50'" class="text">Rating: 0.5/5</div>
                                                <div v-if="movie.rating=='0.00'" class="text">Rating: 0/5</div>

                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </router-link>
                                <p v-if="movie.title!=null" id="font" class=" uk-text-uppercase" style="color:white;font-size:30px!important;font-weight:450">{{ movie.title }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

                <div v-if="similarmovie!= ''" class="uk-container uk-container-large uk-margin-large-top" id="dtm">
                    <p id="fontl" class="uk-text-center uk-text-large uk-margin-large-bottom" style="color:white;padding-bottom:100px;">Similar Movies</p> 
                    <div class="uk-child-width-1-3" uk-grid >
                        <div v-for="movie in similarmovie" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.name+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image"  style="width:360px"  :src="movie.poster" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div>
                                        </div> -->
                                    </div>
                                </router-link>
                                <p id="font" v-if="movie.name!=null" class="uk-margin-top" style="color:white">{{ movie.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

                <p style="padding-left:10px;" class="uk-text-large uk-text-meta uk-position-center" v-if="noResults1" id="dtm"> No Bookmarked movies</p>

                <div v-if="list!= ''" class="uk-container uk-container-large uk-margin-large-top" style="padding-bottom:1500px" id="dtm">
                    <p id="fontl" class="uk-text-center uk-text-large uk-margin-large-bottom" style="color:white;">My Watchlist</p> 
                    <div class="uk-child-width-1-3" uk-grid >
                        <div v-for="movie in list" :key="movie.id" >
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" style="width:360px;" :src="movie.thumbnail_image_path" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div>
                                        </div> -->
                                    </div>
                                </router-link>
                                <p id="font" v-if="movie.title!=null" class="uk-margin-top" style="color:white">{{ movie.title }}</p>                 
                            </div> 
                        </div>               
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
</template>
<script>
export default {
    data(){
        return{
            name1: "",
            name: "",
            email: "",
            srch: "",
            movies: [],
            searchResults: [],
            similarmovie: [],
            noResults: "",
            movname: "",
            id: this.$route.params.id,
            actorname: "",
            actormovies: [],
            movarr: [],
            count: "",
            list: [],
            noResults1: "",
            searchvue: '',
            searchvuem: ''
        }
    },
    mounted(){
      //  this.search();
        this.getmovies();
        this.loader();
        this.name =  localStorage.getItem('Name');
        this.email =  localStorage.getItem('Email');
     //   this.getcastdetails();
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
    methods: {
         loader(){
            $('#load').show(1).delay(1000).hide(1);
        },
        search(){
            var self = this;
            ////console.log(self.srch);
            axios.get('https://app.sainavideo.com/vdocipher/api/search/?keyword='+self.srch)
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
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        getmovies(){
            var self = this;      
            //console.log(self.id);
            if( self.id == 'similar'){
                self.similarmovies();
            }
            else if( self.id == 'watchlist'){
                self.watchlist();
            }
            else{
                 axios.get('https://app.sainavideo.com//vdocipher/api/home/')
                .then(function(response){
                    ////console.log(response.data);  
                    self.banners = response.data.banner;
                    self.features = response.data.feature;
                    for(var i=0;i<response.data.feature.length;i++){
                        ////console.log(self.features[i].movie);           
                    }   
                    if( self.id == 'popular'){
                        self.movies = self.features[1].movie;
                        // self.movarr.push(self.movies);
                        // ////console.log(self.movarr);
                        for(var i=0;i<self.features[1].movie.length;i++){
                            self.movarr.push(self.movies[i]); 
                            self.count = i;   
                            if(i == 6)
                            break;       
                        } 

                        self.movname = response.data.feature[1].name;
                    }
                    if( self.id == 'new'){
                        self.movies = self.features[0].movie;
                        for(var i=0;i<self.features[0].movie.length;i++){
                            self.movarr.push(self.movies[i]); 
                            self.count = i;   
                            if(i == 6)
                            break;       
                        } 
                        self.movname = response.data.feature[0].name;
                    }
                    if( self.id == 'trending'){
                        self.movies = self.features[2].movie;
                        for(var i=0;i<self.features[2].movie.length;i++){
                            self.movarr.push(self.movies[i]); 
                            self.count = i;   
                            if(i == 6)
                            break;       
                        } 
                        self.movname = response.data.feature[2].name;               
                    }
                })
                .catch(function (error) {
                    ////console.log('An Error occured',  error);
                });   
                
                
                window.onscroll = () => {

                    var scrollHeight = $(document).height();
                    var scrollPosition = $(window).height() + $(window).scrollTop();

                    if ((scrollHeight - scrollPosition) / scrollHeight <0.0007) {
                        axios.get('https://app.sainavideo.com//vdocipher/api/home/')
                        .then(function(response){
                            ////console.log(response.data);  
                            self.banners = response.data.banner;
                            self.features = response.data.feature;
                            for(var i=0;i<response.data.feature.length;i++){
                                ////console.log(self.features[i].movie);           
                            }   
                            if( self.id == 'popular'){
                                self.movies = self.features[1].movie;
                                for(var i=self.count+1;i<self.features[1].movie.length;i++){
                                    self.movarr.push(self.movies[i]);     
                                    self.count = i;      
                                } 

                                self.movname = response.data.feature[1].name;
                            }
                            if( self.id == 'new'){
                                self.movies = self.features[0].movie;
                                for(var i=self.count+1;i<self.features[0].movie.length;i++){
                                    self.movarr.push(self.movies[i]);     
                                    self.count = i;      
                                } 
                                self.movname = response.data.feature[0].name;
                            }
                            if( self.id == 'trending'){
                                self.movies = self.features[2].movie;
                                for(var i=self.count+1;i<self.features[2].movie.length;i++){
                                    self.movarr.push(self.movies[i]);     
                                    self.count = i;      
                                } 
                                self.movname = response.data.feature[2].name;               
                            }
                        })
                        .catch(function (error) {
                            ////console.log('An Error occured',  error);
                        });  
                    //  window.scrollTo(0, 0); 
                    }
                };
            }

        },
        back(){
            var self = this;
            self.$router.replace ({ name: "home"});
        },
        similarmovies(){
            var self = this;
            var movid = localStorage.getItem('MovieID')
            axios.get('https://app.sainavideo.com//vdocipher/api/movie/'+movid+'/',{
            })
            .then(function(response){
                self.similarmovie = response.data.movie_detail.similar_list;
               // console.log(self.similarmovie);
            })
            .catch(function (error) {
                        ////console.log('An Error occured',  error);
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
              //  console.log(response.data); 
                self.list = response.data.results;
                self.noResults1 = self.list.length === 0;  
            })
            .catch(function (error) {
            if (error.response.status === 401) {
                self.tokenrefresh();
                self.watchlist();
            }    
              //  console.log('An Error occured',  error);
            });
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
    }
}
</script>
<style scoped>
.navbar-logo {
  width: 50px;
}

img:hover {
    cursor: pointer;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.5;
}

.container:hover .middle {
  opacity: 1;

}

.text {
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}


#srchinput{
    height: 34px;
    color:white;
    background-color:#3a3a3a;
    padding-left: 15px;
    font-size: 20px;
}


#drop-down{
    top: 50px !important;
    text-align: center;
}

@media (max-width: 980px) {
    #dt{
        display:none;
    }
    #slideshow{
        display:none!important;
    }
    #pplr{
        display:none;
    }
    #font{
        font-size:35px!important;
    }
    #dropd{
        display: none;
    }
    #fontl{
        font-size:45px!important;
        display:none;
    }
        #sfont{
        font-size:20px!important;
    }
    #category{
        margin-top:50px;
    }
    #nav{
        height:139px!important;
    }
    #navfont{
        font-size:60px!important;
    
    }
    #navimg{
         display:none;
    }
    #navname{
        font-size:30px!important;
    }
    #drop-down{
        display: none;
    }
    #ft{
        display:none;
    }
}

@media (min-width: 981px) {
    #dtm{
        display:none;
    }
     #pplrm{
        display:none;
    }
}
a {
    text-decoration: none;
    }
    #load{
    width:100%;
    height:100%;
    position:fixed;
    z-index:9999;
    background:url("../assets/images/491 (2).gif") no-repeat center center
}
#drop-down{
    top: 50px !important;
    text-align: center;
}
</style>
