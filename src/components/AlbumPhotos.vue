<template>
  <div>
    <h1>Album Photos</h1>
    <ul class="photo-list">
      <li v-for="photo in photos" :key="photo.id" class="photo-item">
        <img :src="photo.thumbnailUrl" :alt="photo.title" class="photo-img" />
        <p class="photo-title">{{ photo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const photos = ref([]);
const route = useRoute();
const albumId = route.params.albumId;

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  photos.value = await response.json();
});
</script>

<style scoped>
.photo-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.photo-item {
  background-color: #f8f9fa;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.photo-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  margin-bottom: 10px;
}

.photo-title {
  font-size: 14px;
  text-align: center;
  margin: 0;
}

</style>
