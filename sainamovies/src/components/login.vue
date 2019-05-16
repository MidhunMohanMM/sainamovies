<template>
    <div id="bg" class="uk-width-1-1@m" style="background-color:black;background-image:linear-gradient(to right, rgba(100,0,0,0), rgba(100,0,0,1));width:-webkit-fill-available;">

        <div id="dt" class="uk-position-center" >
            <img src="../assets/images/sainalogin_50.png" alt="" class="uk-align-center uk-margin-large-bottom" style="width: 135px;" id="lmi">
            <button id="lmf" @click="FBLogin()" class="uk-button uk-button-primary" style="background-color: transparent;width:100%;background-color: #3a5695;"><i class="fab fa-facebook-f" style="margin-right:8%;"></i> Login with facebook</button>
            <br><br>
            <div id="google-signin-btn" data-width="300"  data-longtitle="true" class="g-signin2 lmg" data-onsuccess="onSignIn" data-theme="dark" ></div>
            <br><br><br><br> 
            <router-link v-bind:to="'/movies'">
                <button class="uk-button uk-button-default" @click="guest()" style="background-color:#7a868b;width:100%; height: 39px;color:white;margin-top:30px;border-color:transparent">SKIP</button>
            </router-link>
            <br>
        </div>
        <div id="dtm" class="uk-padding-large" style="padding-top:40%">
            <img src="../assets/images/sainalogin_50.png" alt="" class="uk-align-center uk-margin-large-bottom" style="width: 40%;" id="lmi">
            <button id="lmf" @click="FBLogin()" class="uk-button uk-button-primary" style="margin-bottom:4%;background-color: transparent;width:68%;font-size:200%;height:3em;margin-left:18%;background-color: #3a5695;"><i class="fab fa-facebook-f" style="margin-right:8%;"></i> facebook</button>
            <br><br>
            <div style="margin-left:18%" id="google-signin-btn" data-width="620%" data-height="95%" data-longtitle="true" class="g-signin2 lmg" data-onsuccess="onSignIn" data-theme="dark"  ></div>
            <br><br><br><br> 
            <router-link v-bind:to="'/movies'">
                <button id="lmg" class="uk-button uk-button-default" @click="guest()" style="margin-bottom:100%;background-color:#7a868b;font-size:200%;height:3em;width:68%;margin-left:18%; color:white;margin-top:30px;border-color:transparent">SKIP</button>
            </router-link>
            <br>
        </div>

    </div>
</template>

<script>

import Vue from 'vue'
import facebookLogin from 'facebook-login-vuejs';

export default {
    data(){
        return {
            name: "",
            banners: [],
            popularmovies: [],
            trendingmovies: [],
            newmovies: [],
            slide: 0,
            rating: "",
            sliding: null,
            payload: "",
            ID : "",
            accessToken: "",
            sub: {
                grant_type: "convert_token",    
                backend: "", 
                client_id: "QvkFkTpUdh3tOu7MjIPm0V5XDrn2tTxIoe0Qk4c7", 
                token: ""
            }
        }
    },
    components: {
        facebookLogin
    },
    mounted(){
        this.gethome();
        gapi.signin2.render('google-signin-btn', { // this is the button "id"
            onsuccess: this.onSignIn // note, no "()" here
        })
        $('#signinButton').click(function() {
            auth2.grantOfflineAccess().then(signInCallback);
        });
    },
    methods:{
        guest(){
            var self = this;
            localStorage.setItem('Name', 'Guest' );
            self.$router.replace({ name: "home" });
        },
        gethome(){
            var self = this;
            axios.get('https://app.sainavideo.com//vdocipher/api/home/',{
            })
            .then(function(response){
                //console.log(response.data);  
                self.banners = response.data.banner;
                self.features = response.data.feature;

                for(var i=0;i<response.data.feature.length;i++){
                //console.log(self.features[i].movie);
                }   

                self.newmovies = self.features[0].movie;
                self.popularmovies = self.features[1].movie;
                self.trendingmovies = self.features[2].movie;
                
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
            });
        },
        onSignIn(googleUser) {
            var self = this;
             var profile = googleUser.getBasicProfile();

            localStorage.setItem('Name', profile.getGivenName());
            localStorage.setItem('Email', profile.getEmail());
            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            var token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
            var GoogleAuth = gapi.auth2.getAuthInstance();
            
            var access_token = GoogleAuth.currentUser.Ab.Zi.access_token
            localStorage.setItem('access_token', access_token );
           // google-oauth2
            localStorage.setItem('backend', 'google-oauth2' );
            localStorage.setItem('SignedIn', '1' );
            //console.log("hi");
              if( window.localStorage )
                {
                    if( !localStorage.getItem( 'firstLoad' ) )
                    {
                    localStorage[ 'firstLoad' ] = true;
                    window.location.reload();
                    }  

                    else
                    localStorage.removeItem( 'firstLoad' );
                }
                alert("hi");
            self.$router.replace({ name: "home" });
        },
        FBLogin(){
            var self = this;
            FB.login(function(response) {
                if (response.authResponse) {
                ////console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                ////console.log('Good to see you, ' + response.name + '.');
                console.log(response);
                console.log(FB.getAuthResponse());
                console.log(response.email)
                localStorage.setItem('Name', response.name);
                localStorage.setItem('Email', response.email);
                self.accessToken = FB.getAuthResponse().accessToken;
                localStorage.setItem('access_token', self.accessToken );
                ////console.log(self.accessToken);
                self.sub.token = self.accessToken;
                self.sub.backend = "facebook";
                localStorage.setItem('backend', 'facebook' );
                self.$router.replace({ name: "home" });
                ////console.log(self.sub);
                self.convert();
                    // axios.post('https://app.sainavideo.com/auth/convert-token/',self.sub)
                    // .then(function(response){

                    //     ////console.log(response.data);  
                    //      self.$router.replace({ name: "home" });                               
                    // })
                    // .catch(function (error) {
                    //     ////console.log('An Error occured',  error);
                    // });
                });
                } else {
                ////console.log('User cancelled login or did not fully authorize.');
                }
            }, { 
                scope: 'email',
                return_scopes: true
            });
        },
        convert(){
            var self = this;    
            self.sub.token = self.accessToken;
            ////console.log(self.sub);
                axios.post('https://app.sainavideo.com/auth/convert-token',self.sub)
                .then(function(response){
                    ////console.log(response.data);                            
                })
                .catch(function (error) {
                    ////console.log('An Error occured',  error);
                });
        },
    }
}
</script>
<style scoped>
@media (max-width: 980px) {
    #dt{
        display: none;
    }
    #bg{
        height:100%;
    }
}

@media (min-width: 981px) {
    #dtm{
        display: none;
    }
    #bg{
        height: -webkit-fill-available;
    }
}

</style>
