<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nesciunt sint quisquam necessitatibus ducimus, mollitia quibusdam quidem iusto totam voluptas.</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>

<style scoped>

</style>