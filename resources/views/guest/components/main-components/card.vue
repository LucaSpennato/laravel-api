<template>
  <div>
    <ul>
        <li>
            {{ post.user.name }}
        </li>
        <li>
           {{ post.id }} - {{ post.title }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['post'], 
}
</script>

<style>

</style>