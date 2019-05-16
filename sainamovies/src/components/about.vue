<template>
      <div id="bg" class="uk-width-1-1@m">
           <router-link v-bind:to="'/movies'" >
            <img id="navimg" src="../assets/images/sainalogin1.png"  >
            <br>
               
        </router-link>
        
         <p id="navfont"  class="uk-text-capitalize "> Saina</p>  
            <hr class="uk-divider-icon uk-margin-large-left uk-margin-large-right">
             <div class="uk-container uk-container-medium uk-padding-large uk-position-bottom uk-margin-large-bottom" id="pplr" >
                 <p>Email Address - aashiq.saina@gmail.com</p>
                 <p>Contact number - +91 8075033233/7676066716</p>
                 <p>Address -Gandhibazar,PP Road, Perumbavoor</p>
             </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
#navfont{
    color:darkorange;
    font-size:40px;
    text-decoration:none;
    margin-left:47%;
}

#bg{
    background-color:black;
    width:-webkit-fill-available;
    height:-webkit-fill-available;
}
#navimg{
    width: 60px;
    margin-left:48%;
    margin-top:10%
}
#pplr{
    background:#fbfbfb;
}
</style>

