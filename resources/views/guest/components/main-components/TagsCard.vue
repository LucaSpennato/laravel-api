<template>
  <div class="row">
    <div class="col-6 offset-3">
        <div class="text-center fs-1 text-danger">
            {{ tag.name }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['tag'],
}
</script>

<style>

</style>