<template>
    <html>
        <span id="load" ></span>
        <div style="background:black; width:100%;height:100%">
            <nav class="uk-navbar-container" id="nav" uk-navbar style="background:black;height:50px;">
                 
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                             <a ><i class="fas fa-arrow-left fa-2x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
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

                <div class="uk-navbar-right" id="pplrm">
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
                </div>
            </nav>
            
            <div class="uk-cover-container uk-height-medium">
               
                <img id="imgmobile" :src="moviedetail.poster_image" alt="" uk-cover>  
                 <a id="top"><i class="fas fa-arrow-left fa-2x"  @click="back" style="color: gainsboro;font-size: 65px;" ></i></a>
                 
            </div>   
            <br>
            <router-link v-bind:to="'/movies/'+title+'/'+moviedetail.id_v+'/watch'">
            <!-- <div @click="movieplay()"> -->
                <img src="../assets/images/play1.png" id="play" alt="" class="uk-padding-small btn" style=" z-index: 1;position: absolute;left: 47%;top: 18%;width: 100px;height: 100px">
            <!-- </div> -->
            </router-link>
            <img :src="moviedetail.thumbnail_image_path" id="pplr" alt="" class="uk-padding-small uk-width-1-6 uk-height-1-5" style="    z-index: 1;position: absolute;left: 74px;top: 280px;">
                       <img id="pplrm" :src="moviedetail.thumbnail_image_path"  alt="" class="uk-padding-small uk-width-1-6 uk-height-1-5" style="    width:40%;z-index: 1;position: absolute;left: 74px;top: 230px;">
            <div style="color:white;padding-left: 25%" id="fontcinema">   
                <p style="color:white;font-size:25px" class="uk-align-left uk-text-uppercase" id="fonttitlel">{{ title }}</p>
                <div class="uk-align-right" id="addspace">
                    <button @click="toggleSeen" value="Add to Watchlist" id="add" class="uk-align-right uk-width-2-3 uk-margin-large-right uk-button uk-button-secondary">{{ button.text }}</button>
                    
                    <!-- <router-link v-bind:to="'/movieplay/'+moviedetail.id_v">
                        <button id="dt1" class="uk-button uk-button-default uk-margin-large-left uk-align-left uk-width-1-3" style="border-color: transparent;color:white; background-image: linear-gradient(to right, #f5920b, #dc3267);">Resume</button>
                    </router-link> -->
                    <router-link v-bind:to="'/movies/'+title+'/'+moviedetail.id_v+'/watch'">
                        <button id="new" class="uk-align-right uk-width-2-3 uk-margin-large-right uk-button "  style="border-color: transparent;background-color:  #daa520;color:white;">Watch Now</button>
                    </router-link>
                </div>
                <br id="addspace"><br ><br >
                 <br v-if="tags.tags==''" id="addspacem"><br v-if="tags.tags==''" id="addspacem">
                <p style="color:white;">{{length}} mins</p>
                
                <p style="color:white;" class="uk-text-capitalize">{{tags.tags}}</p>
                <br v-if="tags.tags==''" id="addspacem">
                <p style="color:white;">{{language}} {{release_year}}</p>
                <div v-if="moviedetail.rating==null" id="addspacem" style="margin-bottom:50px"></div>
                <div v-if="moviedetail.rating!=null">
                    <div v-if="moviedetail.rating=='5.00'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='4.50'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star-half-alt" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='4.00'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='3.50'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star-half-alt" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='3.00'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='2.50'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star-half-alt" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='2.00'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='1.50'">
                        <i class="fas fa-star" style="color: red;"></i>
                        <i class="fas fa-star-half-alt" style="color: red;"></i>
                        <i class="far fa-star" style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='1.00'">
                        <i class="fas fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                    </div>
                    <div v-if="moviedetail.rating=='0.50'">
                        <i class="fas fa-star-half-alt"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                        <i class="far fa-star"  style="color: red;"></i>
                    </div>
                </div>
            </div>
            <br><br><br>
            <!-- <h4 style="color:white;" id="fonttitle" class="uk-margin-large-left uk-margin-top"> SYNOPSIS </h4> -->
            <p style="color:white;" id="fonttitle"  class="uk-margin-large-left uk-margin-large-right">{{des}}</p>
             <p style="color:white;" id="fonttitle"  class="uk-margin-large-left uk-margin-large-right">{{dir}}</p>


            <!-- </p>
            <br> -->
            <p style="color:white;padding-bottom:20px;font-size:20px;cursor:pointer;" id="pplr"  class="uk-margin-large-top uk-margin-large-left">CAST AND CREW</p>
            <p style="color:white;font-size:35px;background-color:#525252;padding-left:4%" id="pplrm"   class="">CAST AND CREW</p>

                  <div id="pplr"  class="uk-container uk-container-large uk-margin-top uk-margin-bottom">
                    <div class="uk-child-width-1-6" uk-grid >
                        <div v-for="cast in casting" :key="cast.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/cast/'+cast.name+'/'+cast.id">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="cast.image" alt="" style="height:160px;width:160px;">
                                    </div>
                                </router-link>
                                <p class="uk-margin-top" style="color:white">{{ cast.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

                <div id="pplrm"  class="uk-container uk-container-large uk-margin-large-top uk-margin-bottom">
                    <div uk-grid >
                        <div v-for="cast in casting" :key="cast.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/cast/'+cast.name+'/'+cast.id">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" style="width:250px;height:300px" :src="cast.image" alt="" >
                                    </div>
                                </router-link>
                                <p class="uk-margin-top" id="font" style="color:white">{{ cast.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>



            <!-- <p style="color:white;padding-left:10px;;padding-top:20px;padding-bottom:20px;">SIMILAR MOVIES ></p> -->
            <router-link v-bind:to="'/category/similar'">
                <div  id="fonttitle" v-if="similarmovies.length != 0" style="padding-top:2%;color:white;text-decoration:inherit">
                    <p  id="pplr" class="uk-align-left " style="font-size:20px;margin-left:4%"> SIMILAR MOVIES</p>
                    <p  id="pplr" class="uk-align-right" style="font-size:20px;margin-right:4%">VIEW ALL</p>
                    <!-- <div  style="background-color:#525252"> -->
                        <p  id="pplrm" style="color:white;font-size:35px;background-color:#525252;padding-left:4%"  class="">SIMILAR MOVIES</p>
                        <!-- <p  id="pplrm" class="uk-align-right" style="margin-right:1%;;background-color:#525252;">VIEW ALL</p> -->
                    <!-- </div> -->
                </div>
            </router-link>
      

             <div id="pplr"  class="uk-container uk-container-large uk-margin-large-top uk-margin-large-bottom">
                    <div class="uk-child-width-1-6" uk-grid >
                        <div v-for="movie in similarmovies.slice(0, 6)" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.name+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.poster" alt="">
                                        <div class="middle">
                                        
                                            <button class="uk-button uk-button-default uk-button-small text" style="background:rgb(205, 116, 0);border:none!important;color:white;">Play now</button>
                                        </div>
                                    </div>
                                </router-link>
                                <p v-if="movie.name!=null" class="uk-margin-top" style="color:white">{{ movie.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>

              <div id="pplrm" class="uk-container uk-container-large uk-margin-large-top uk-margin-large-bottom">
                    <div class="uk-child-width-1-3" uk-grid style="display:inline-flex;">
                        <div v-for="movie in similarmovies.slice(0, 3)" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.name+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img style="width:250px" class="uk-transition-scale-up uk-transition-opaque image" :src="movie.poster" alt="">
                                        <!-- <div class="middle">
                                            <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
                                            <div v-if="movie.rating!=null" class="text">Rating: {{movie.rating}}/5</div> -->
                                        <!-- </div> -->
                                    </div>
                                </router-link>
                                <p v-if="movie.name!=null" id="font" class="uk-margin-top" style="color:white">{{ movie.name }}</p>                 
                            </div> 
                        </div>               
                    </div>
                </div>


            <div id="modal-center" class="uk-flex-top" uk-modal>
                <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    <p class="uk-text-center">Please login to continue</p>
                    <hr>
                    <div class="uk-align-left">
                        <p>Sign in using Facebook</p>
                        <button @click="FBLogin()" class="uk-button uk-button-primary" style="background-color: transparent;width:120px;background-color: #3a5695;"><i class="fab fa-facebook-f" ></i></button>
                    </div>
                    <!-- <hr class="uk-divider-vertical"> -->
                    <div class="uk-align-right">
                    
                    <p style="margin-right:15px;" >Sign in using Google</p>
                    <div   id="google-signin-btn" class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" ></div>
                   </div>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
                </div>
            </div>
            <!-- <button>ha</button> -->

             <router-link v-bind:to="'/movies/'+title+'/'+moviedetail.id_v+'/watch'" id="pplrm">
                        <button  class=" uk-width-1-1 uk-button "  style="position: sticky;left: 0;bottom: 0;height:100px;font-size:60px;border-color: transparent;z-index:+1;;background-color: orangered;color:white;">Watch Now</button>
                    </router-link>

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
    </html>
</template>
<script>
import UIkit from 'uikit'
import JQuery from 'jquery'
let $ = JQuery
export default {
  data(){
    return {
        name: "",
        email: "",
        srch: "",
        description: "",
        moviedetail: "",
        length: "",
        title: "",
        searchResults: [],
        hrs: "",
        noResults: "",
        tags: "",
        skills: {},
        similarmovies: [],
        categories: "Comedy, Adventure",
        language : "",
        release_year : "1987",
        id: this.$route.params.id,
        casting: [],
        dir: "",
        des: "",
        release_year: "",
        button: {
            text: 'Add to Watchlist'
        },
        seen: true,
        sub:{
            bookmark_id: ""
        },
        subr: {
            grant_type: "refresh_token",
            client_id: "",
            refresh_token: ""
        },
        subl: {
                grant_type: "convert_token",    
                backend: "", 
                client_id: "QvkFkTpUdh3tOu7MjIPm0V5XDrn2tTxIoe0Qk4c7", 
                token: ""
        },
        accessToken: "",
        user_type: "",
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
    var self = this;
    this.getDetail();
   // this.tokenrefresh();
    this.loader();
    self.name =  localStorage.getItem('Name');
          self.email =  localStorage.getItem('Email');
    
     gapi.signin2.render('google-signin-btn', { // this is the button "id"
            onsuccess: this.onSignIn // note, no "()" here
        })
        $('#signinButton').click(function() {
            auth2.grantOfflineAccess().then(signInCallback);
        });
  },
watch: {
    // call again the method if the route changes
    '$route': 'getDetail',
    
     //id: this.$route.params.id,
  },
  methods: {
        loader(){
            $('#load').show(1).delay(1000).hide(1);
        },
      movieplay(){
           var name =  localStorage.getItem('Name');
           var server_access_token = localStorage.getItem('server_access_token');
           ////console.log(server_access_token);
           self.$router.push('/movies/'+self.title+'/'+self.moviedetail.id_v+'/watch'); 
            // if(name != 'Guest'){
            //     axios.get('https://app.sainavideo.com/vdocipher/api/me/',{
            //     headers: {'Authorization': 'Bearer '+server_access_token},
            //     })
            //     .then(function(response){
            //         ////console.log(response.data); 
            //         self.me = response.data.me;
            //         self.user_type = response.data.me.user_type;
            //     //   ////console.log(response.data.me.user_plan);
            //     })
            //     .catch(function (error) {
            //         ////console.log('An Error occured',  error);
            //     });
            //     if( self.user_type == 'premium' ){
            //         self.$router.push('/movies/'+self.title+'/'+self.moviedetail.id_v+'/watch'); 
            //     }

               
            // }
            // else{
            //     var self = this;
            //     self.$router.push('/movies/'+self.title+'/'+self.moviedetail.id_v+'/watch'); 
            // }
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
    onSignIn(googleUser) {
            $('#modal-center').trigger('click'); 
             var profile = googleUser.getBasicProfile();
             ////console.log(profile);
            var self = this;
            localStorage.setItem('Name', profile.getGivenName() );
            localStorage.setItem('Email', profile.getEmail());
            self.name =  localStorage.getItem('Name');
            var GoogleAuth = gapi.auth2.getAuthInstance();
            var access_token = GoogleAuth.currentUser.Ab.Zi.access_token;
            localStorage.setItem('access_token', access_token );
            localStorage.setItem('backend', 'google-oauth2' );
            // console.log(localStorage.getItem("SignedIn"));
            if (localStorage.getItem("SignedIn") === null) {
            self.convert();
            }
            else{
            localStorage.setItem('SignedIn', '1' );
            }
             
    },
    convert(){
        var self = this;
        var access_token = localStorage.getItem('access_token');
        var backend = localStorage.getItem('backend');
        self.sub.backend = backend;
         self.subl.token = access_token;
         //console.log(self.subl);
              axios.post('https://app.sainavideo.com/auth/convert-token/',self.subl)
                .then(function(response){

                
                        localStorage.setItem('server_access_token', response.data.access_token);
                        localStorage.setItem('refresh_token', response.data.refresh_token);
                })
                .catch(function (error) {
                    ////console.log('An Error occured',  error);
                });
    },
    back(){
        var self = this;
        self.$router.replace ({ name: "home"});
    },
      FBLogin(){
            var self = this;
            FB.login(function(response) {
                if (response.authResponse) {
                ////console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                ////console.log('Good to see you, ' + response.name + '.');
                ////console.log(response);
                self.accessToken = FB.getAuthResponse().accessToken;
                ////console.log(self.accessToken);
                self.sub.token = self.accessToken;
                ////console.log(self.sub);
                    axios.post('https://app.sainavideo.com/auth/convert-token/',self.subl)
                    .then(function(response){

                        ////console.log(response.data);  
                         self.$router.replace({ name: "movie" });                               
                    })
                    .catch(function (error) {
                        ////console.log('An Error occured',  error);
                    });
                });
                } else {
                ////console.log('User cancelled login or did not fully authorize.');
                }
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
                     //   console.log(response.data);
                    
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
    toggleSeen() {
        var self = this;
        var name =  localStorage.getItem('Name');
        if(name != 'Guest'){
            ////console.log(self.button.text);
            self.seen = !self.seen;
            self.button.text = self.seen ? 'Add to Watchlist' : ' ✓ Added to Watchlist';
            var server_access_token = localStorage.getItem('server_access_token');
            ////console.log(server_access_token);
            if(self.button.text == ' ✓ Added to Watchlist')
            {
                axios.post('https://app.sainavideo.com/vdocipher/api/addwatchlist',self.sub,{
                    headers: {'Authorization': 'Bearer '+server_access_token}
                })
                .then(function(response){
                    ////console.log(response.data);               
                })
                .catch(function (error) {
                if (error.response.status === 401) {
                    self.tokenrefresh();
                    self.toggleSeen();
                }
                    ////console.log('An Error occured',  error);
                });
            }
            else{
                axios.post('https://app.sainavideo.com/vdocipher/api/deletewatchlist',self.sub,{
                headers: {'Authorization': 'Bearer '+server_access_token}
                })
                .then(function(response){
                    ////console.log(response.data);           
                })
                .catch(function (error) {
                if (error.response.status === 401) {
                    self.tokenrefresh();
                    self.toggleSeen();
                }
                    ////console.log('An Error occured',  error);
                });
            }

        }
        else{
                var modal = UIkit.modal("#modal-center");
                modal.show(); 
            //alert('Please login to add to watchlist');
        }
    },
    logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
    },
    
    getDetail(){
        window.scrollTo(0, 0);
        var self = this;          
        this.id = self.$route.params.id2  ;
        localStorage.setItem('MovieID',this.id);
        ////console.log(this.id);
        axios.get('https://app.sainavideo.com//vdocipher/api/movie/'+this.id+'/',{
        })
        .then(function(response){
             console.log(response.data);  
            self.moviedetail = response.data.movie_detail;
            // console.log( self.moviedetail);
            self.similarmovies = response.data.movie_detail.similar_list;
            //console.log(self.similarmovies);
            self.description = response.data.movie_detail.description;
            //var someString = "A04.3  A new Code";
            var index = self.description.indexOf("Director");  // Gets the first index where a space occours
            self.des = self.description.substr(0, index-1); // Gets the first part
            self.dir = self.description.substr(index);
           // console.log(self.des);  // Gets the text part
           // console.log(self.director);
            self.title = response.data.movie_detail.title;
            self.length = response.data.movie_detail.length;
            self.language = response.data.movie_detail.language;
            self.release_year = response.data.movie_detail.release_year;
            self.tags = response.data.movie_detail.skills;
            self.casting = response.data.movie_detail.casting;
            self.length = self.length.split(":"); 
            self.hrs =  Number(self.length[0]*60);  
            self.length = Number(self.hrs)+Number(self.length[1]);
            self.release_year = self.release_year.split("-");       
            self.release_year = self.release_year[0];
            for(var i=0;i<response.data.movie_detail.casting.length;i++){
                ////console.log(self.casting[i]);          
            }   
            self.sub.bookmark_id = response.data.movie_detail.id;
            ////console.log(self.casting);
        })
        .catch(function (error) {
            console.log('An Error occured',  error);
  });
      }
    } 
}
</script>

<style scoped>


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
  /* padding: 14px 26px; */
}
#fas{
        color: red;
}

@media (max-width: 818px) {
    /* #wl{
        display: none;
    } */
    /* #dt2{
        margin-left:0px;
        margin-right:0px;
    } */
    #dt1{
        margin-left:0px;
        margin-right:0px;
    }
    #thumb{
        display: none;
    }

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
        display:none;
    }
    #font{
        font-size:35px!important;
    }
    #fontcinema{
        font-size:35px!important;
        padding-left:50%!important;
    }
        #sfont{
        font-size:20px!important;
    }
    #category{
        margin-top:50px;
    }
    #nav{
        height:139px!important;
        display:none;
    }
    #navfont{
        font-size:60px!important;
    
    }
    #imgmobile{
        opacity:0.5;
    }
    #navimg{
        display:none;
    }
    #navname{
        font-size:30px!important;
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
          font-size:40px!important;
    }
    #drop-down{
        display: none;
    }
    #addspace{
        display:none;
    }
    #ft{
        display:none;
    }
    #top{
        position: absolute;
        top: 5%;
        left: 1%;
        color: white;
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

}
@media screen and (min-width: 981px) {

  #pplrm{
        display:none;
    }
     #addspacem{
        display:none;
    }
    #top{
        display: none;
    }

}
img:hover {
    cursor: pointer;
}
a {
    text-decoration: none;
    }


#load{
    width:100%;
    height:100%;
    position:fixed;
    z-index:9999;
    background:url("../assets/images/803 (4).gif") no-repeat center center;
}

svg{
    width:50px !important;
    height:50px !important;
}
#drop-down{
    top: 50px !important;
    text-align: center;
}
p{
    transition: 1s!important;
}

p:hover {
  color: darkorange!important;
 
}
</style>
