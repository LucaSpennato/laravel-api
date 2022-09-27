<template>
  <main>
    <div class="container">
        <div class="row">
            <card />
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import card from './main-components/card.vue';

export default {
    components:{
        card,
    },

    data: function(){
    return{
      posts: [],
      currentPage: 1,
      nextPage: '',
      previousPage: '',
    }
  },

  methods:{
    getPosts(currentPage){
      axios.get('/api/posts', {page: currentPage })
      .then((response) => {
        console.warn(response.data.results.data);
      }).catch((error) =>{
        console.error(error);
      })
    }
  },

  created(){
    this.getPosts();
  },
}
</script>

<style lang="scss">

</style>