<template>
    <div class="card col-2 m-2">
        <img :src="post.post_image" class="card-img-top" :alt="post.user.author + '\'s image'">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'], 
}
</script>

<style>

</style>