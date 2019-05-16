<template>
    <div id="bg" class="uk-width-1-1@m" style="background-color:black;background-image:linear-gradient(to right, rgba(100,0,0,0), rgba(100,0,0,1));height:-webkit-fill-available;width:-webkit-fill-available;">
        <!-- <img src="../assets/images/dark.jpg" alt=""> -->
                <span id="load" ></span>
        <div id="contents">
        <div style="background: url(https://img.yts.am/assets/images/movies/the_predator_2018/background.jpg) no-repeat center center; background-size: cover; -webkit-background-size: cover;-moz-background-size: cover; -o-background-size: cover;">
                      <nav class="uk-navbar-container" id="nav" uk-navbar style="background:black;height:50px;">
                 
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                             <a id="pplr"><i class="fas fa-arrow-left fa-2x"  @click="back" style="margin-top:25px;margin-left:30px;color:white;"></i></a>
                                <a id="pplrm"><i class="fas fa-arrow-left fa-3x"  @click="back" style="margin-top:15px;margin-left:30px;color:white;"></i></a>
                        <li id="pplr" v-if="name!='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-push"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
                         <li id="pplr" v-if="name=='Guest'"><a id="navtoggle"  style="height:80px;width:100px" class="uk-navbar-toggle uk-hidden@l"  href="#" type="button" uk-toggle="target: #offcanvas-pushg"><i id="pplrm" class="fas fas fa-bars fa-3x"></i></a></li>
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
                        <li id="pplr">
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
        </div>
        </div>
        <div class="uk-padding-large uk-position-center" id="dt">
            <h3 style="color:white;" class="uk-text-bold">SAINA PREMIUM</h3>
            <h5 style="color:white;">All Malayalam movies and TV shows</h5>
            <button @click="myFunction1()" id="btn1" class="uk-button uk-button-default  uk-margin-large-top" style="width:400px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹10 per day</button>
            <br>
            <button @click="myFunction2()" id="btn2" class="uk-button uk-button-default  uk-margin-top" style="width:400px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹999 per year</button>
            <br>
            <button @click="myFunction3()" id="btn3" class="uk-button uk-button-default  uk-margin-top" style="width:400px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹199 per month</button>
            <br><br>
            <div id="myDIV" style="display:none;">
                <form  id="payment-form">
                    <div class="form-row">
                        <h5 style="color:white;">Credit or debit card</h5>
                        <div id="card-element" >
                        <!-- A Stripe Element will be inserted here. -->
                        </div>
                        <!-- Used to display form errors. -->
                        <div id="card-errors" role="alert"></div>
                    </div>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label style="color:white;"><input class="uk-checkbox" type="checkbox" style="color:white;" > I agree to terms and conditions</label>
                    </div>
                    <br>
                    <button  class="uk-button uk-button-default " style="color:white;background:rgb(93, 42, 33);border-color:transparent">Submit Payment</button>
                    
                </form>
            </div>
        </div>   
        <div class="uk-padding-large" style="padding-top:500px" id="dtm">
            <h3 style="color:white;"  id="fontl" class="uk-text-bold uk-text-center">SAINA PREMIUM</h3>
            <h5 style="color:white;" id="font" class=" uk-text-center">All Malayalam movies and TV shows</h5>
            <button @click="myFunction1()" id="btn1" class="uk-button uk-button-default  uk-align-center uk-margin-large-top" style="width:800px;height:100px;font-size:30px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹10 per day</button>
            <br>
            <button @click="myFunction2()" id="btn2" class="uk-button uk-button-default  uk-align-center uk-margin-top" style="width:800px;height:100px;font-size:30px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹999 per year</button>
            <br>
            <button @click="myFunction3()" id="btn3" class="uk-button uk-button-default  uk-align-center uk-margin-top" style="width:800px;height:100px;font-size:30px;color:white;background:rgb(93, 42, 33);border-color:transparent">₹199 per month</button>
            <br><br>
            <div id="myDIV" style="display:none;">
                <form  id="payment-form">
                    <div class="form-row">
                        <h5 style="color:white;">Credit or debit card</h5>
                        <div id="card-element" >
                        <!-- A Stripe Element will be inserted here. -->
                        </div>
                        <!-- Used to display form errors. -->
                        <div id="card-errors" role="alert"></div>
                    </div>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label style="color:white;"><input class="uk-checkbox" type="checkbox" style="color:white;" > I agree to terms and conditions</label>
                    </div>
                    <br>
                    <button  class="uk-button uk-button-default " style="color:white;background:rgb(93, 42, 33);border-color:transparent">Submit Payment</button>
                    
                </form>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            datas:[],
            searchResults: [],
            name: "",
            email: "",
            sub:{
                plan: "",
                token:""
            },
            subr: {
                grant_type: "refresh_token",
                client_id: "",
                refresh_token: ""
            },
            subup: {
                plan: ""
            },
            srch: "",
            searchvue: '',
            searchvuem: ''
        }
    },
    created(){
        this.search();
    },
    mounted(){
        this.getPaymentPlans();
    //    this.tokenrefresh();
        this.loader();
        this.name =  localStorage.getItem('Name');
        this.email =  localStorage.getItem('Email');
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
         loader(){
            $('#load').show(1).delay(1000).hide(1);
        },
        getPaymentPlans(){
            var self = this;
            // Create a Stripe client.
            var stripe = Stripe('pk_live_MvZ7ysXpsakYLR1LCLj9yNTK');
            
            // Create an instance of Elements.
            var elements = stripe.elements();
            
            // Custom styling can be passed to options when creating an Element.
            // (Note that this demo uses a wider set of styles than the guide below.)
            var style = {
                base: {
                    color: '#32325d',
                    lineHeight: '18px',
                    fontFamily: '"Raleway", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                    color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            };
        
            // Create an instance of the card Element.
            var card = elements.create('card', {
                style: style,
                hidePostalCode : true
            });
            
            // Add an instance of the card Element into the `card-element` <div>.
            card.mount('#card-element');
            
            // Handle real-time validation errors from the card Element.
            card.addEventListener('change', function(event) {
                var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });
        
            // Handle form submission.
            var form = document.getElementById('payment-form');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                stripe.createToken(card).then(function(result) {
                    if (result.error) {
                        // Inform the user if there was an error.
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    } else {
                        // Send the token to your server.
                        stripeTokenHandler(result.token);
                    }
                });
            });
        
            // Submit the form with the token ID.
            function stripeTokenHandler(token) {
                // Insert the token ID into the form so it gets submitted to the server
                var form = document.getElementById('payment-form');
                var hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', 'stripeToken');
                hiddenInput.setAttribute('value', token.id);
                form.appendChild(hiddenInput);
                
                self.sub.token = token.id;

                var server_access_token = localStorage.getItem('server_access_token');
                var product_id = localStorage.getItem('product_id');
                if(product_id== ''){
                    axios.post('https://app.sainavideo.com/vdocipher/api/subscribe/',self.sub,{
                        headers: {'Authorization': 'Bearer '+server_access_token},              
                    })
                    .then(function(response){
                        ////console.log(response.data);  
                        alert("Congratulations! You are now a premium member !");
                        self.$router.replace({ name: "movieplay" });              
                    })
                    .catch(function (error) {
                    if (error.response.status === 401) {
                        self.tokenrefresh();
                        self.stripeTokenHandler(token) ;
                    }
                        ////console.log('An Error occured',  error);
                    });
                }
                else{
                    var server_access_token = localStorage.getItem('server_access_token')
                    self.subup.plan = product_id;
                    axios.post('https://app.sainavideo.com/vdocipher/api/updatesub/',self.subup,{
                        headers: {'Authorization': 'Bearer '+server_access_token},
                    })
                    .then(function(response){
                        ////console.log(response.data);  
                        if(response.data.status == true){
                            alert("Payment updated");
                        }
                    })
                    .catch(function (error) {
                    if (error.response.status === 401) {
                        self.tokenrefresh();
                        self.stripeTokenHandler(token) ;
                    }
                        ////console.log('An Error occured',  error);
                    });
                }
                

            }
        },
        back(){
       //     console.log("hi");
            var self = this;
            self.$router.replace ({ name: "home"});
        },
        logout() {
            document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://sainavideo.com";
        },
        myFunction1() {
            var self = this;
            self.sub.plan = 'DAILYPLAN';
            var x = document.getElementById("myDIV");
            var property1 = document.getElementById("btn1");
            var property2 = document.getElementById("btn2");
            var property3 = document.getElementById("btn3");
            x.style.display = "block";
            property1.style.backgroundColor = "rgb(178, 134, 87)";
            property2.style.backgroundColor = "rgb(93, 42, 33)";
            property3.style.backgroundColor = "rgb(93, 42, 33)";
        },
        myFunction2() {
            var self = this;
            self.sub.plan = 'plan_DkNcPqPK9pJaRp';
            var x = document.getElementById("myDIV");
            var property1 = document.getElementById("btn1");
            var property2 = document.getElementById("btn2");
            var property3 = document.getElementById("btn3");
            x.style.display = "block";
            property1.style.backgroundColor = "rgb(93, 42, 33)";
            property2.style.backgroundColor = "rgb(178, 134, 87)";
            property3.style.backgroundColor = "rgb(93, 42, 33)";
        },
        myFunction3() {
            var self = this;
            self.sub.plan = 'plan_DkNb3kQwIDTiIe';
            var x = document.getElementById("myDIV");
            var property1 = document.getElementById("btn1");
            var property2 = document.getElementById("btn2");
            var property3 = document.getElementById("btn3");
            x.style.display = "block";
            property1.style.backgroundColor = "rgb(93, 42, 33)";
            property2.style.backgroundColor = "rgb(93, 42, 33)";
            property3.style.backgroundColor = "rgb(178, 134, 87)";
        }
    }
}

</script>

<style scoped>
.navbar-logo {
    width: 90px;
}

#drop-down{
    top: 50px !important;
    text-align: center;
}

.StripeElement {
    background-color: white;
    height: 18px;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #ccd0d2;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}

.StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
    border-color: #fa755a;
}

.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
}

#card-colors {
    color: #fa755a;
}

#load{
    width:100%;
    height:100%;
    position:fixed;
    z-index:9999;
    background:url("../assets/images/803 (4).gif") no-repeat center center;
}
img:hover {
    cursor: pointer;
}
@media (max-width: 980px) {
    #dt{
        display: none;
    }
    #bg{
        height:100%;
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
    #category{
        margin-top:50px;
    }
    #nav{
        height:139px!important;
    }
    #navfont{
        font-size:60px!important;
    
    }
        #sfont{
        font-size:20px!important;
    }
    #navimg{
        width:40px!important;
        display: none;
    }
    #navname{
        font-size:30px!important;
    }
    #fontl{
        font-size:50px;
    }
    #drop-down{
        display: none;
    }
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
    }
    #navfont{
        font-size:60px!important;
    
    }
    #navimg{
        width:40px!important;
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
          font-size:50px!important;
    }
    #drop-down{
        display: none;
    }
}

@media (min-width: 981px) {
    #dtm{
        display: none;
    }
    #bg{
        height: -webkit-fill-available;
    }
      #pplrm{
        display:none;
    }

}
#drop-down{
    top: 50px !important;
    text-align: center;
}
</style>