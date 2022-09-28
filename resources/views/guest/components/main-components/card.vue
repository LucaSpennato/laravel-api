<template>
    <div class="row">
        <div class="card col-2 m-2">
            <img :src="post.post_image" class="card-img-top" :alt="post.user.author + '\'s image'">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <h5 class="card-title">Scritto da: {{ post.user.name }}</h5>
                <p class="card-text">{{ post.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'], 
}
</script>

<style lang="scss">

</style>