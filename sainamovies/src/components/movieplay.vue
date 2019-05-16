<template>
    <div style="background:black; width:100%;height:100%">
      <div id="embedBox" style="width:82%;max-width:100%;height:auto;" class="uk-align-center"></div>
      <br>
    </div>
</template>

<script>
      
export default {
  data(){
    return{
        movieOTP: "",
        moviePlay: "",
        id: this.$route.params.id
    }
  },
  mounted(){
    this.getPlay();
  },
  methods: {
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
 
      this.id = self.$route.params.id2  ;
     
      var name = localStorage.getItem('Name');
      if(name != 'Guest'){
        var access_token = localStorage.getItem('access_token');
        axios.get('https://app.sainavideo.com/vdocipher/api/play/'+this.id+'/',{
              headers: {'Authorization': 'Bearer'+access_token},
        })
        .then(function(response){
        
          if(!response.data.message){
            self.movieOTP = response.data.video_credentials.otp;
            self.moviePlay = response.data.video_credentials.playbackInfo;
           
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
      }
      else{
        axios.get('https://app.sainavideo.com/vdocipher/api/play/'+this.id+'/')
        .then(function(response){
         
          if(!response.data.message){
            self.movieOTP = response.data.video_credentials.otp;
            self.moviePlay = response.data.video_credentials.playbackInfo;
          
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
      }
    },
    getPlayer(){
      var self = this;
    
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
</style>