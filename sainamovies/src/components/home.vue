<template>
    <html>
        <span id="load" ></span>
        <div id="contents">
        <div id="custom-background" >
            <nav class="uk-navbar-container" id="nav" uk-navbar>                
                <div class="nav-overlay uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li v-if="name!='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-push"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                         <li v-if="name=='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-pushg"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                        <li><router-link v-bind:to="'/movies'">
                            <img id="pplr" src="../assets/images/sainalogin1.png" style="width: 15px;margin-right:10px;margin-left:30px;">
                                <a id="pplr"  style="color:darkorange;font-size:30px;text-decoration:none" class="uk-text-capitalize"> Saina</a>  
                                 <a id="pplrm"  style="color:white;font-size:40px;text-decoration:none;font-weight:450;" class="uk-text-capitalize uk-margin-large-left">SAINA</a>  
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="name!='Guest'" id="offcanvas-push" uk-offcanvas="mode: slide; overlay: true" >
                    <div class="uk-offcanvas-bar uk-flex uk-flex-column" style="min-width: 85%;">
                        <button class="uk-offcanvas-close" type="button" style="background:transparent;border-color:transparent"><i class="fas fa-times fa-6x" style="color:#757575"></i></button>
                        <ul class="uk-nav uk-nav-primary uk-nav-left " uk-nav="multiple: true">                 
                            <router-link v-bind:to="'/profile'">
                            <img class="uk-border-circle" width="120" height="120" src="../assets/images/a1.png">
                            </router-link>
                            <li  style="font-size:60px;!important" class="uk-nav-header uk-text-capitalize uk-text-large" onTranslate="global.menu.title">{{ name }}</li>
                              <li uk-toggle="target: #my-id"  class="uk-align-right" style=""><i class="fas fa-sort-down fa-3x"></i></li>
                            <li  style="font-size:40px;!important"  class=" uk-text-lowercase" onTranslate="global.menu.subtitle">{{ email }}</li>
                          
                         
                            <div id="my-id">
                                      <li class="uk-divider-icon uk-margin-remove-bottom"></li> 
                            <li> 
                                <a style="font-size:50px;!important;padding:40px;"><router-link v-bind:to="'/profile'"><i class="fas fa-user-circle" style="padding-right:40px;"></i> My Account</router-link></a>
                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;" class="uk-nav-header uk-text-capitalize" href="/category/watchlist"><i class="fas fa-bookmark" style="padding-right:40px;"></i> My Watchlist</a>

                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;padding-left:30px;" class="uk-nav-header uk-text-capitalize" href="#"><i class="fas fa-question-circle" style="padding-right:40px;"></i> Help</a>

                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;padding-left:45px;" class="uk-nav-header uk-text-capitalize" href="/terms-of-use"><i class="fas fa-info" style="padding-right:50px;"></i> Terms of Use</a>

                            </li>

                            <li>
                                <a style="font-size:50px;!important;padding:40px;padding-left:35px;" class="uk-nav-header uk-text-capitalize" href='/privacy-policy'><i class="fas fa-bars" style="padding-right:40px;"></i> Privacy Policy</a>
                            </li>
                            <li>
                                <a style="font-size:50px;!important;padding:40px;" class="uk-nav-header uk-text-capitalize" @click="logout()"><i class="fas fa-sign-out-alt" style="padding-right:40px;"></i> Log Out</a>
                            </li>
                    </div>
                    <div id="my-id" hidden >
                      
                        <li>
                              
                            <img  style="padding-top:70px;" class="uk-border-circle uk-align-left" width="80" height="80" src="../assets/images/a1.png">
                            <p style="padding-top:70px;font-size:50px;color:red;width:70%;" class="uk-align-right">{{ email }}</p></li>
                               <!-- <li class="uk-divider-icon uk-margin-remove-bottom"></li>  -->
                    </div>
                            <hr class="uk-nav-divider">
                        </ul>
                    </div>
                </div>


                <div v-if="name=='Guest'" id="offcanvas-pushg" uk-offcanvas="mode: slide; overlay: true" >
                    <div class="uk-offcanvas-bar uk-flex uk-flex-column" style="min-width: 85%;">
                        <button class="uk-offcanvas-close" type="button" style="background:transparent;border-color:transparent"><i class="fas fa-times fa-6x" style="color:#757575"></i></button>
                        <ul class="uk-nav uk-nav-primary uk-nav-left " uk-nav="multiple: true">                 
                            <router-link v-bind:to="'/profile'">
                            <img class="uk-border-circle" width="120" height="120" src="../assets/images/a1.png">
                            </router-link>
                            <li  style="font-size:60px;!important" class="uk-nav-header uk-text-capitalize uk-text-large" onTranslate="global.menu.title">{{ name }}</li>
                              <!-- <li uk-toggle="target: #my-id"  class="uk-align-right" style=""><i class="fas fa-sort-down fa-3x"></i></li> -->
                            <li  style="font-size:40px;!important"  class=" uk-text-lowercase" onTranslate="global.menu.subtitle">{{ email }}</li>
                          
                         
                            <div id="my-id">
                                      <li class="uk-divider-icon uk-margin-remove-bottom"></li> 
                            <!-- <li> 
                                <a style="font-size:50px;!important;padding:40px;"><router-link v-bind:to="'/profile'"><i class="fas fa-user-circle" style="padding-right:40px;"></i> My Account</router-link></a>
                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;" class="uk-nav-header uk-text-capitalize" href="/category/watchlist"><i class="fas fa-bookmark" style="padding-right:40px;"></i> My Watchlist</a>

                            </li> -->
                            
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;padding-left:30px;" class="uk-nav-header uk-text-capitalize" href="/"><i class="fas fa-sign-in-alt" style="padding-right:40px;"></i> Sign In</a>

                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;padding-left:30px;" class="uk-nav-header uk-text-capitalize" href="#"><i class="fas fa-question-circle" style="padding-right:40px;"></i> Help</a>

                            </li>
                            <li class="uk-parent">
                                <a style="font-size:50px;!important;padding:40px;padding-left:45px;" class="uk-nav-header uk-text-capitalize" href="/terms-of-use"><i class="fas fa-info" style="padding-right:50px;"></i> Terms of Use</a>

                            </li>

                            <li>
                                <a style="font-size:50px;!important;padding:40px;padding-left:35px;" class="uk-nav-header uk-text-capitalize" href='/privacy-policy'><i class="fas fa-bars" style="padding-right:40px;"></i> Privacy Policy</a>
                            </li>
                            <!-- <li>
                                <a style="font-size:50px;!important;padding:40px;" class="uk-nav-header uk-text-capitalize" @click="logout()"><i class="fas fa-sign-out-alt" style="padding-right:40px;"></i> Log Out</a>
                            </li> -->
                    </div>
       
                            <hr class="uk-nav-divider">
                        </ul>
                    </div>
                </div>


                <!-- <div v-if="name=='Guest'" id="offcanvas-pushg" uk-offcanvas="mode: push; overlay: true">
                    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                        <button class="uk-offcanvas-close" type="button" uk-close></button>
                        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" uk-nav="multiple: true">
                            
                            <img class="uk-border-circle" width="80" height="80" src="../assets/images/a1.png">
                           
                        <li id="font" class="uk-nav-header uk-text-capitalize uk-text-large" onTranslate="global.menu.title">{{ name }}</li>
                        <li id="sfont" class=" uk-text-lowercase " onTranslate="global.menu.subtitle">{{ email }}</li>
                        <li class="uk-divider-icon uk-margin-remove-bottom"></li>
                        <li>
                            <a id="font"><router-link v-bind:to="'/login'"><span uk-icon="user"></span> Sign In</router-link></a>
                        </li>
            
                
                        <hr class="uk-nav-divider">
                        </ul>
                    </div>
                </div> -->

  
                <div class="uk-navbar-right" >
                    <ul class="uk-navbar-nav" >
                        <li>
                            <a class="uk-navbar-toggle" id="dropd"><i class="fas fa-search " ></i></a>
                            <div class="uk-drop"  uk-drop="mode: click; pos: left-center; offset: 0">
                                <form class="uk-search uk-search-navbar ">
                                    <!-- <input style="color:white;" v-on:input="search" v-on:focus="search" v-model="srch" class="uk-search-input" type="search" placeholder="Search..." autofocus>
                                    <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000" v-if="srch!= ''"  style="background:black;margin-top:0px;">
                                        <ul v-for="searchResult in searchResults"  :key="searchResult.id" v-if="!noResults" class="uk-nav uk-dropdown-nav" >
                                            <li  class="uk-active">
                                                <a style="color:white;" href="#">{{ searchResult.title }}</a>
                                            
                                            </li>
                                        </ul>
                                        <ul v-if="noResults" class="uk-nav uk-dropdown-nav">
                                            <li>
                                                <a style="color:white;" href="#">No Results found</a>
                                            </li>
                                        </ul>
                                    </div> -->
                                    <input type="text" v-model="searchvue" id="srchinput"  v-on:input="search" v-on:focus="search" class="uk-search-input"  placeholder="Search..." autofocus />
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
                        <!-- <li>
                            <a class="uk-navbar-toggle" ><i class="fas fa-search fa-3x"></i></a>
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
                        </li> -->
                    </ul>
                </div>

                    <div class="nav-overlay uk-navbar-right" id="pplrm">

                            <a class="uk-navbar-toggle" uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"><i class="fas fa-search fa-3x"></i></a>

                        </div>

                        <div class="nav-overlay uk-navbar-left uk-flex-1" id="pplrm" hidden>

                            <div class="uk-navbar-item uk-width-expand">
                                <form class="uk-search uk-search-navbar uk-width-1-1">
                                    <a class="uk-navbar-toggle uk-align-left"  uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#" style="margin-bottom:0px;margin-top:41px;"><i class="fas fa-arrow-left fa-3x" ></i></a>
                                    <!-- <a><i class="fas fa-arrow-left fa-2x "   style="margin-top:25px;margin-left:30px;color:white;width:10%"></i></a> -->
                                   <input type="text" style="width: 80%;font-size: 57px;margin-top: 25px;height: 70px;margin-left: 76px;color:white" v-model="searchvue"  class="uk-search-input"  placeholder="Search..." autofocus />
                                    <div uk-dropdown  style="background:black;display:block;margin-left:133px;width:80%">
                                        <ul v-for="movie in filteredMovies"  :key="movie.id" class="uk-nav uk-dropdown-nav"  style="">
                                            <li class="uk-active">
                                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                                    <a style="color:white;font-size:45px">{{ movie.title }}</a>
                                                </router-link>
                                            </li>
                                            <li style="border-top: 1px solid #3a3a3a" class="uk-nav-divider"></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>

                            <a class="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

                        </div>





            </nav>
            <div id="slideshow" uk-slideshow="animation: push;min-height: 300; max-height: 400;autoplay: true" >
                <div class="uk-position-relative uk-visible-toggle uk-light">
                    <ul class="uk-slideshow-items" >
                        <li v-for="movie in banner1" :key="movie.id" >
                            <router-link v-bind:to="'/movies/'+movie.title.title+'/'+movie.title.id_v" >
                                <div class="uk-position-cover  uk-animation-reverse uk-transform-origin-center-left" >
                                    <img :src="movie.image" alt="" uk-cover >
                                </div>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">{{movie.title.title}}</h3>                        
                                </div>
                            </router-link>
                        </li>
                        <!-- <li v-for="feature in slider" :key="feature.id">
                            <router-link v-bind:to="'/movies/'+feature.title+'/'+feature.id_v">
                                <div class="uk-position-cover  uk-animation-reverse uk-transform-origin-center-left">
                                    <img :src="feature.poster_image" alt="" uk-cover >
                                </div>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">{{feature.title}}</h3>                        
                                </div>
                            </router-link>
                        </li> -->
                    </ul>
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                    <a   class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                </div>
                <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
            <div id="pplrm" uk-slideshow="animation: push;min-height: 1100; max-height: 1200;autoplay: true" >
                <div class="uk-position-relative uk-visible-toggle uk-light">
                    <ul class="uk-slideshow-items" >
                        <li v-for="movie in banners" :key="movie.id" >
                            <router-link v-bind:to="'/movies/'+movie.title.title+'/'+movie.title.id_v" >
                                <div class="uk-position-cover  " >
                                    <img class="hero-image" :src="movie.image" alt="" uk-cover >
                                </div>
                            </router-link>
                             <router-link v-bind:to="'/movies/'+movie.title.title+'/'+movie.title.id_v+'/watch'">
                                <button class="uk-button uk-button-large uk-position-bottom uk-text-lead " style="padding-left:8%;padding-right:8%;font-size:50px;left:37%;bottom:15%;background-color: orangered;border:none!important;color:white;">Play</button>
                            </router-link>
                            <!-- <router-link v-bind:to="'/category/watchli'"> -->
                                <button class="uk-button uk-button-large uk-position-bottom uk-text-lead " @click="toggleSeen()" value="Add to Watchlist" style="padding-left:8%;padding-right:8%;font-size:50px;left:18%;bottom:5%;background-color:  #daa520;border:none!important;color:white;">{{ button.text }}</button>
                            <!-- </router-link> -->
                            <!-- <router-link v-bind:to="'/movies/'+movie.title.title+'/'+movie.title.id_v+'/watch'"> -->
                                
                            <!-- </router-link> -->
                        </li>
                    </ul>
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                    <a   class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                  <ul style="color:red;" class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
                </div>
              
            </div>

            <router-link id="pplr" v-bind:to="'/category/new'">
                <div id="category"  style="padding-top:2%;color:white;text-decoration:inherit"><p id="font" class="uk-align-left uk-text-uppercase" style="margin-left:4%;font-size:20px">NEW RELEASES </p><p id="font" class="uk-align-right uk-text-uppercase" style="margin-right:4%;font-size:20px">VIEW ALL</p></div>
            </router-link>
            <router-link id="pplrm" v-bind:to="'/category/new'">
                <div   style="color:white;text-decoration:inherit"><p id="font" style="font-weight:451;margin-bottom:18px" class="uk-align-left uk-margin-left uk-text-uppercase">NEW RELEASE</p><p id="font" class="uk-align-right uk-text-uppercase uk-margin-right" style="margin-bottom:18px;font-weight:451;">VIEW ALL ></p></div>
            </router-link>
        <div id="pplr"  class="uk-container uk-container-large uk-margin-large-top uk-margin-bottom">
                    <div class="uk-child-width-1-6" uk-grid >
                        <div v-for="movie in newmovies.slice(0, 6)" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.thumbnail_image_path" alt="">
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

            <div id="pplrm" class="uk-position-relative uk-visible-toggle uk-light" uk-slider style="margin-top:100px;padding-left:36px;padding-right:15px;">

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid" >
                    <li v-for="movie in newmovies" :key="movie.id" style="padding-left:15px;">
                        <div class="uk-text-center">
                         <div class="uk-panel" style="padding-left:0px;padding-right:0px;">
                              <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <img class="uk-transition-scale-up uk-transition-opaque image" style="width:300px" :src="movie.thumbnail_image_path" alt="">
                              </router-link>
                         </div>
                          <p v-if="movie.title!=null" class="uk-margin-top uk-text-large uk-text-uppercase" style="color:white;margin-bottom:40px;font-size:28px;line-height: 20pt;font-weight: 600;">{{ movie.title }}</p>                 
                       </div>
                    </li>
                </ul>
            </div>

            <router-link id="pplr" v-bind:to="'/category/popular'">
                <div id="category"  style="padding-top:2%;color:white;text-decoration:inherit"><p id="font" class="uk-align-left uk-text-uppercase " style="margin-left:4%;font-size:20px"> POPULAR MOVIES</p><p id="font" class="uk-align-right uk-text-uppercase "  style="margin-right:4%;font-size:20px">VIEW ALL</p></div>
            </router-link>
            <router-link id="pplrm" v-bind:to="'/category/popular'">
                <div   style="color:white;text-decoration:inherit"><p id="font" style="font-weight:451;margin-bottom:18px" class="uk-align-left uk-margin-left uk-text-uppercase"> POPULAR MOVIES</p><p id="font" class="uk-align-right uk-text-uppercase uk-margin-right" style="margin-bottom:18px;font-weight:451;">VIEW ALL ></p></div>
            </router-link>
            <div id="pplr"  class="uk-container uk-container-large uk-margin-large-top uk-margin-bottom">
                <div class="uk-child-width-1-6" uk-grid >
                    <div v-for="movie in popularmovies.slice(0, 6)" :key="movie.id">
                        <div class="uk-text-center">
                            <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                    <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.thumbnail_image_path" alt="">
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

            <!-- <div id="pplrm"  class="uk-container uk-container-large uk-margin">
                <div class="uk-child-width-1-3" uk-grid style="display:inline-flex;padding-left:15px">
                    <div v-for="movie in popularmovies.slice(0, 3)" :key="movie.id" style="padding-left:15px">
                        <div class="uk-text-center">
                            <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                    <img class="uk-transition-scale-up uk-transition-opaque image" style="width:300px" :src="movie.thumbnail_image_path" alt="">
                                    <div class="middle">
                                        <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
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
                            <p v-if="movie.title!=null" class="uk-margin-top uk-text-large uk-text-uppercase" style="color:white;font-size:28px;line-height: 20pt;font-weight: 600;">{{ movie.title }}</p>                 
                        </div> 
                    </div>               
                </div>
            </div> -->

            <div id="pplrm" class="uk-position-relative uk-visible-toggle uk-light" uk-slider style="margin-top:80px;padding-left:34px;padding-right:15px;">

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-6@m uk-grid" >
                    <li v-for="movie in popularmovies" :key="movie.id" style="padding-left:17px;">
                        <div class="uk-text-center">
                         <div class="uk-panel" style="padding-left:0px;padding-right:0px;">
                              <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <img class="uk-transition-scale-up uk-transition-opaque image" style="width:300px" :src="movie.thumbnail_image_path" alt="">
                              </router-link>
                         </div>
                          <p v-if="movie.title!=null" class="uk-margin-top uk-text-large uk-text-uppercase" style="margin-bottom:30px;color:white;font-size:28px;line-height: 20pt;font-weight: 600;">{{ movie.title }}</p>                 
                       </div>
                    </li>
                </ul>
            </div>


            <router-link id="pplr" v-bind:to="'/category/trending'">
                <div id="category"  style="padding-top:1%;color:white;;text-decoration:inherit"><p id="font" class="uk-align-left uk-text-uppercase" style="margin-left:4%;font-size:20px">TRENDING</p><p id="font" class="uk-align-right uk-text-uppercase"  style="margin-right:4%;font-size:20px">VIEW ALL</p></div>
            </router-link>
             <router-link id="pplrm" v-bind:to="'/category/trending'">
                <div   style="color:white;text-decoration:inherit"><p id="font" style="font-weight:451;margin-bottom:18px;" class="uk-align-left uk-margin-left uk-text-uppercase">TRENDING</p><p id="font" class="uk-align-right uk-text-uppercase uk-margin-right" style="margin-bottom:18px;font-weight:451;">VIEW ALL ></p></div>
            </router-link>
            <div id="pplr"  class="uk-container uk-container-large uk-margin-large-top uk-margin-bottom">
                    <div class="uk-child-width-1-6" uk-grid >
                        <div v-for="movie in trendingmovies.slice(0, 6)" :key="movie.id">
                            <div class="uk-text-center">
                                <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                    <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                        <img class="uk-transition-scale-up uk-transition-opaque image" :src="movie.thumbnail_image_path" alt="">
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

            <!-- <div id="pplrm"  class="uk-container uk-container-large uk-margin">
                <div class="uk-child-width-1-3" uk-grid style="display:inline-flex;padding-left:15px">
                    <div v-for="movie in trendingmovies.slice(0, 3)" :key="movie.id" style="padding-left:15px">
                        <div class="uk-text-center">
                            <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <div class="uk-inline-clip uk-transition-toggle container" tabindex="0">                            
                                    <img class="uk-transition-scale-up uk-transition-opaque image" style="width:300px" :src="movie.thumbnail_image_path" alt="">
                                    <div class="middle">
                                        <div v-if="movie.skills.tags!=''" class="text uk-text-capitalize">{{movie.skills.tags}}</div>
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
                            <p v-if="movie.title!=null" class="uk-margin-top uk-text-large uk-text-uppercase" style="color:white;font-size:28px;line-height: 20pt;font-weight: 600;">{{ movie.title }}</p>                 
                        </div> 
                    </div>               
                </div>
            </div> -->

            <div id="pplrm" class="uk-position-relative uk-visible-toggle uk-light" uk-slider style="margin-top:80px;padding-left:42px;padding-right:15px;">

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-grid" >
                    <li v-for="movie in trendingmovies" :key="movie.id" style="padding-left:9px;">
                        <div class="uk-text-center">
                         <div class="uk-panel" style="padding-left:0px;padding-right:0px;">
                              <router-link v-bind:to="'/movies/'+movie.title+'/'+movie.id_v">
                                <img class="uk-transition-scale-up uk-transition-opaque image" style="width:300px" :src="movie.thumbnail_image_path" alt="">
                              </router-link>
                         </div>
                          <p v-if="movie.title!=null" class="uk-margin-top uk-text-large uk-text-uppercase" style="color:white;font-size:28px;line-height: 20pt;font-weight: 600;">{{ movie.title }}</p>                 
                       </div>
                    </li>
                </ul>
            </div>
            <!-- <router-link v-bind:to="'/category/new'">
                <p style="color:white;padding-left:10px;;padding-top:20px;padding-bottom:20px;text-decoration:inherit">NEW RELEASES ></p>
            </router-link> -->
            


            <nav id="ft" class="uk-navbar-container " uk-navbar style="background:rgb(122, 134, 139);height:100%;">
                <div class="uk-navbar-left uk-padding-small">
                    <ul class="uk-navbar-nav uk-margin-large-left">
                        <li id="font" class="uk-text-small" style="color:white;"><a href="#" class="uk-text-capitalize" style="min-height: 0px;color:white;padding-right:30px;"> Saina Movies © All Rights Reserved</a></li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-margin-left">
                     
                        <li id="font" class="uk-text-small" style="color:white"><router-link v-bind:to="'/terms-of-use'" class="uk-text-capitalize" style="min-height: 0px;color:white">Terms of use</router-link></li>
                        <li id="font" class="uk-text-small" style="color:white"><a href="#" class="uk-text-capitalize" style="min-height: 0px;color:white;">Help</a></li>
                        <li id="font" class="uk-text-small" style="color:white"><router-link v-bind:to="'/privacy-policy'" class="uk-text-capitalize" style="min-height: 0px;color:white;">Privacy Policy</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    </html>
</template>

<script>
import Vue from 'vue';
import qs from 'qs';
var querystring = require('querystring');
export default {
    data(){
        return{
            srch: "",
            name: "",
            email: "",
            banners: [],
            popularmovies: [],
            searchResults: [],
            trendingmovies: [],
            newmovies: [],
            noResults: "",
            slide: 0,
            rating: "",
            sliding: null,
            accessToken: "",
            searchvue: '',
            searchvuem: '',
            banner1: '',
            sub: {
                'grant_type': 'convert_token',    
                'backend': '', 
                'client_id': 'QvkFkTpUdh3tOu7MjIPm0V5XDrn2tTxIoe0Qk4c7', 
                'token': ''
            },
            subr: {
                grant_type: "refresh_token",
                client_id: "",
                refresh_token: ""
            },
              button: {
            text: 'Add to Watchlist'
        },
        seen: true,
        }
    },
    mounted(){
        var self = this;
        this.gethome();
       //this.tokenrefresh();
        this.slider();
       // if (localStorage.getItem("SignedIn") === null) {
            this.convert();
       // }
        //else{
        //    localStorage.setItem('SignedIn', '1' );
        //}
        // this.convert();
        self.name =  localStorage.getItem('Name');
        self.email =  localStorage.getItem('Email');
        this.loader();
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
                      //  console.log(response.data);
                    
                        localStorage.setItem('server_access_token', response.data.access_token);       
                    })
                    .catch(function (error) {
                        //console.log('An Error occured',  error);
                    });
                }
            }
             else {
                localStorage['started'] = Date.now();
            }
                  
        },
        search(){
            var self = this;
          
            axios.get('https://app.sainavideo.com/vdocipher/api/search/?keyword='+self.srch,{
            })
            .then(function(response){

                // console.log(self.searchResults);
                   
                self.searchResults = response.data.results;
               
                self.noResults = self.searchResults.length === 0;                       
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });
        },
        onSlideStart (slide) {
        this.sliding = true
        },
        slider(){
            var self = this;
            axios.get('https://app.sainavideo.com/vdocipher/api/webhome/',{
            })
                .then(function(response){
                    console.log(response.data);
                    self.features1 = response.data.feature;
                   
                    self.slider = self.features1[2].movie;
                    self.banner1 = response.data.banner;
                  
                })
                .catch(function (error) {
                    ////console.log('An Error occured',  error);
                });
        },
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        convert(){
            var name = localStorage.getItem('Name');
            if(name!='Guest'){
            var self = this;
            var access_token = localStorage.getItem('access_token');
            var backend = localStorage.getItem('backend');
            self.sub.backend = backend;
            self.sub.token = access_token;


            axios.post('https://app.sainavideo.com/auth/convert-token/',self.sub)
            .then(function(response){

              
                    localStorage.setItem('server_access_token', response.data.access_token);
                    localStorage.setItem('refresh_token', response.data.refresh_token);
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });
            }
        },
    toggleSeen() {
        var self = this;
        var name =  localStorage.getItem('Name');
        if(name != 'Guest'){
            ////console.log(self.button.text);
            self.seen = !self.seen;
            self.button.text = self.seen ? 'Add to Watchlist' : ' ✓ Added to Watchlist';
            // alert("Added to Watchlist");
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
                // if (error.response.status === 401) {
                //     self.tokenrefresh();
                //     self.toggleSeen();
                // }
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
                // if (error.response.status === 401) {
                //     self.tokenrefresh();
                //     self.toggleSeen();
                // }
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
        gethome(){
            var self = this;      
            axios.get('https://app.sainavideo.com//vdocipher/api/home/')
            .then(function(response){

              //  console.log(response.data);
              
                self.banners = response.data.banner;
                self.features = response.data.feature;
               
                self.newmovies = self.features[0].movie;
                self.popularmovies = self.features[1].movie;
                self.trendingmovies = self.features[2].movie;     
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });        
        },
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    } 
}
</script>



<style scoped>


/* .hero-image{
     height: 200px;
} */


</style>