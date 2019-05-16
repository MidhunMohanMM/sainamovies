<template>
      <div id="bg" style="background-color:black;height:100%;width:100%">
        <a id="pplr"><i class="fas fa-arrow-left fa-2x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
        <a id="pplrm"><i class="fas fa-arrow-left fa-5x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
     <button id="pplrm" @click="back" type="button" style="background:transparent;border-color:transparent" class="uk-align-right uk-margin uk-margin-large-right"><i class="fas fa-times fa-6x" style="color:white"></i></button>
          <button id="pplr" @click="back" type="button" style="background:transparent;border-color:transparent" class="uk-align-right uk-margin uk-margin-large-right"><i class="fas fa-times fa-2x" style="color:#757575"></i></button>
                               
       <div id="embedBox" style="height:auto;"  ></div>    

       <div id="modal-center" class="uk-flex-top" uk-modal>
                <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                    <button class="uk-modal-close-default" type="button" @click="close()" uk-close></button>
                    <!-- <button  type="button"  @click="close()" ><i class="fas fa-times fa-6x" ></i></button> -->
                        
                    <p class="uk-text-center">Please login to continue</p>
                    <hr>
                    <div class="uk-align-left">
                        <p >Sign in using Facebook</p>
                        <button @click="FBLogin()" class="uk-button uk-button-primary" style="background-color: transparent;width:120px;background-color: #3a5695;"><i class="fab fa-facebook-f" ></i></button>
                    </div>
                    <!-- <hr class="uk-divider-vertical"> -->
                    <div class="uk-align-right">
                    
                    <p class="uk-text-center">Sign in using Google</p>
                    <div  id="google-signin-btn" class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" ></div>
                   </div>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
                </div>
            </div>


   </div>
</template>

<script>

import UIkit from 'uikit'
import JQuery from 'jquery'
let $ = JQuery

export default {
  data(){
    return{
        movieOTP: "",
        moviePlay: "",
        user_type: "",
        server_access_token: "",
        id: this.$route.params.id,
        subr: {
              grant_type: "refresh_token",
              client_id: "",
              refresh_token: ""
        },
        sub: {
                'grant_type': 'convert_token',    
                'backend': '', 
                'client_id': 'QvkFkTpUdh3tOu7MjIPm0V5XDrn2tTxIoe0Qk4c7', 
                'token': ''
            },
    }
  },
  mounted(){
    var timeout = null;
  //  this.tokenrefresh();
    this.getPlay();
     $('#embedBox').mousemove(function(){
        $('#sidebar').show();
        $('#sidebar1').show();
    });

    $(document).on('mousemove', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $('#sidebar').hide();
            $('#sidebar1').hide();
        }, 2000);
    });
     gapi.signin2.render('google-signin-btn', { // this is the button "id"
            onsuccess: this.onSignIn // note, no "()" here
        })
        $('#signinButton').click(function() {
            auth2.grantOfflineAccess().then(signInCallback);
        });
},
  methods: {
      close(){
          var self = this;
          self.$router.replace({ name: "movie" });
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
                   //     console.log(response.data);
                    
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
        onSignIn(googleUser) {
            var self = this;
            var modal = UIkit.modal("#modal-center");
            modal.hide(); 
            var profile = googleUser.getBasicProfile();
            localStorage.setItem('Name', profile.getGivenName() );
            localStorage.setItem('Email', profile.getEmail());
            var GoogleAuth = gapi.auth2.getAuthInstance();
            var access_token = GoogleAuth.currentUser.Ab.Zi.access_token
            localStorage.setItem('access_token', access_token );
            localStorage.setItem('backend', 'google-oauth2' );
            if (localStorage.getItem("SignedIn") === null) {
            self.convert();
            }
            else{
            localStorage.setItem('SignedIn', '1' );
            }
        },
         convert(){
            var name = localStorage.getItem('Name');
            if(name!='Guest'){
            var self = this;
            var access_token = localStorage.getItem('access_token');
            var backend = localStorage.getItem('backend');
            self.sub.backend = backend;
            self.sub.token = access_token;
            // console.log(self.sub);
            axios.post('https://app.sainavideo.com/auth/convert-token/',self.sub)
            .then(function(response){

                ////console.log(response.data);  
                    localStorage.setItem('server_access_token', response.data.access_token);
                    localStorage.setItem('refresh_token', response.data.refresh_token);
                    self.server_access_token =  response.data.access_token;
                    var server_access_token = localStorage.getItem('server_access_token');
                    self.id = self.$route.params.id2;
                     axios.get('https://app.sainavideo.com/vdocipher/api/play/'+self.id+'/',{
                            headers: {'Authorization': 'Bearer '+response.data.access_token},
                      })
                      .then(function(response){
                        ////console.log(response.data);  
                        if(!response.data.message){
                          self.movieOTP = response.data.video_credentials.otp;
                          self.moviePlay = response.data.video_credentials.playbackInfo;
                          ////console.log(self.movieOTP);
                          
                        }
                        else{
                          //alert("Premium Movie not allowed for Guest Users");

                          self.$router.replace({ name: "paymentplans" });
                        }
                        
                        self.getPlayer();
                        
                      })
                      .catch(function (error) {
                          ////console.log('An Error occured',  error);
                      });
     
           
            
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });
            }
        },
    getPlay(){
      var self = this;
     // var movie = {};
      // var getMovieDetails = async (movieid) => {
      //   let rsp = await axios.get(`https://app.sainavideo.com/vdocipher/api/play/${movieid}`);
      //   movie.otp = rsp.data.video_credentials.otp;
      //   movie.play = rsp.data.video_credentials.playbackInfo;
     //   return movie?Promise.resolve(movie):Promise.reject('movie');
      // }
      // getMovieDetails('d058222c01934351a2e28c37840651f0')
      console.log(navigator.userAgent);
       if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    //   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    //   console.log(isMobile);
    //     if (isMobile) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.saina&hl=en';
        }
        else{
                this.id = self.$route.params.id2;
                ////console.log(this.id);
                var name = localStorage.getItem('Name');
                if(name != 'Guest'){
                    var server_access_token = localStorage.getItem('server_access_token');
                    axios.get('https://app.sainavideo.com/vdocipher/api/play/'+this.id+'/',{
                        headers: {'Authorization': 'Bearer '+server_access_token},
                    })
                    .then(function(response){
                    ////console.log(response.data);  
                    if(!response.data.message){
                        self.movieOTP = response.data.video_credentials.otp;
                        self.moviePlay = response.data.video_credentials.playbackInfo;
                        ////console.log(self.movieOTP);
                        
                    }
                    else{
                        //alert("Premium Movie not allowed for Guest Users");

                        self.$router.replace({ name: "paymentplans" });
                    }
                    
                    self.getPlayer();
                    
                    })
                    .catch(function (error) {
                    });
            
      }
      else{
        axios.get('https://app.sainavideo.com/vdocipher/api/play/'+this.id+'/')
        .then(function(response){
          ////console.log(response.data);  
          if(!response.data.message){
            self.movieOTP = response.data.video_credentials.otp;
            self.moviePlay = response.data.video_credentials.playbackInfo;
            ////console.log(self.movieOTP);
          }
          else{
              //alert("Premium Movie not allowed for Guest Users");
               var modal = UIkit.modal("#modal-center");
                modal.show(); 
            // self.$router.replace({ name: "paymentplans" });
          }
          self.getPlayer();
        })
        .catch(function (error) {
            ////console.log('An Error occured',  error);
        });
      }
    }
    },
    back(){
        var self = this;
        self.$router.replace ({ name: "movie"});
    },
    getPlayer(){
      var self = this;
      ////console.log(self.movieOTP);
      vdo.add({
        otp: self.movieOTP,
        playbackInfo: self.moviePlay,
        theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
        container: document.querySelector( "#embedBox" ),        
      });

    }
  }
      
}
</script>
<style scoped>
.navbar-logo {
  width: 90px;
}
#embedBox{
width:82%;
max-width:100%;
height:auto;
}
.uk-align-center:hover .uk-button:hover{
    display: block;
}
img:hover {
    cursor: pointer;
}

@media screen and (max-width: 980px) {

  #embedBox{
        width:-webkit-fill-available;
        padding-top:200px;
        /* margin-bottom:100px; */

    }
    #bg{
         height:-webkit-fill-available!important;
        /* width:-webkit-fill-available!important;
        height:-webkit-fill-available!important;
        background-color:black; */
    }
      #pplr{
        display: none;
    }
}



@media screen and (min-width: 981px) {

  #embedBox{
        width:78%;
        /* padding-top:9%; */
        padding-left:11%;
        padding-bottom:9%;
    }
    #pplrm{
        display: none;
    }
}
</style>