<template>



  <div>

  
  <div v-for="searchResult in searchResults" :key="searchResult.id">
     <p>{{searchResult.casting}}</p>
     <p>{{searchResult.skills}}</p>
     <p>{{searchResult.title}}</p>
  </div>


  </div>
</template>


<script>
export default {
  data(){
    return{
        searchResults:[],
        
    }
  },
  mounted(){
    this.getSearchDetails();
  },
  methods: {
    getSearchDetails(){
      var self = this;
      axios.get('https://app.sainavideo.com/vdocipher/api/search/?keyword=nara',{
          })
            .then(function(response){

                ////console.log(response.data);  
                self.searchResults = response.data.results;
            
                        
            })
            .catch(function (error) {
                ////console.log('An Error occured',  error);
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