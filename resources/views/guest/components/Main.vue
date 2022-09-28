<template>
  <main>
    <div class="container">
        <div class="row">
            <card v-for="post in posts" :key="post.id" :post="post"/>
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
      currentPage: 10,
      nextPage: '',
      previousPage: '',
    }
  },

  methods:{
    getPosts(currentPage){
      axios.get('http://127.0.0.1:8000/api/posts?', {
        params:{
          page : this.currentPage
          }
        })
      .then((response) => {
        console.warn(response.data.results.data);
        this.posts = response.data.results.data;
      }).catch((error) =>{
        console.error(error);
      })
    }
  },

  created(){
    this.getPosts();
    console.log(this.posts);
  },
}
</script>

<style lang="scss">

</style>