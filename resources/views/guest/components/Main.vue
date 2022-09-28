<template>
  <main>
    <div class="container">
      <div class="row">

        <div class="col-4">
          <label for="call">Select the call</label>
          <select class="form-select" id="call" v-model="topic" @change="modify()">
            <option>posts</option>
            <option>tags</option>
          </select>
        </div>
      </div>

        <div v-if="arePosts">
          <h1>
            Posts:
          </h1>
            <card v-for="(post, index) in gettedElements" :key="index" :post="post"/>
        </div>
        <div class="row" v-else>
          <h1>
            Tags:
          </h1>
          <TagsCard v-for="tag in gettedElements" :key="tag.id" :tag="tag"/>
        </div>
    </div>

  </main>
</template>

<script>
import axios from 'axios';
import card from './main-components/card.vue';
import TagsCard from './main-components/TagsCard.vue';

export default {
    components:{
        card,
        TagsCard,
    },

    computed: {
       arePosts: function(){
        if(this.topic === "posts"){
          return true;
        }else{
          return false;
        }
      },
    },

    data: function(){
    return{
      gettedElements: [],
      url: 'http://127.0.0.1:8000/api/',
      topic : '',
      currentPage: 1,
      nextPage: '',
      previousPage: '',
      isLoaded: false,
    }
  },

  methods:{

    modify(){
      if(this.arePosts === true){
        this.getPosts();
      }else{
        this.getTags();
      }
    },
   
    getTags(){
      axios.get(this.url + this.topic,
      )
      .then((response) => {
        console.log(this.topic);
        console.warn(response.data);

        this.gettedElements = response.data.results;
        
      }).catch((error) =>{
        console.error(error);
      })
    },
    getPosts(){
      axios.get(this.url + this.topic,
      )
      .then((response) => {
         console.log(this.topic);
        console.warn(response.data.results.data);
        this.gettedElements = response.data.results.data;

      }).catch((error) =>{
        console.error(error);
      })
    },

    
  },

  created(){
    // this.getPosts();
    // this.getTags();
  },
}
</script>

<style lang="scss">

</style>