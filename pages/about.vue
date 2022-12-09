<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut labore magnam, nam pariatur laudantium! Assumenda, expedita maxime! Reprehenderit voluptatum aspernatur ipsa excepturi nulla corrupti nostrum necessitatibus suscipit, sequi sint.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut labore magnam, nam pariatur laudantium! Assumenda, expedita maxime! Reprehenderit voluptatum aspernatur ipsa excepturi nulla corrupti nostrum necessitatibus suscipit, sequi sint.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/mario')
</script>

<style scoped>
  h2 {
      margin-bottom: 20px;
      font-size: 36px;
  }
  p {
      margin: 20px 0;
  }
</style>