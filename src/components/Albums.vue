<template>
  <div>
    <h1>All Albums</h1>
    <ul class="album-list">
      <li v-for="album in albums" :key="album.id" class="album-item">
        {{ album.title }}
        <button class="view-photos-btn" @click="viewPhotos(album.id)">View Photos</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const albums = ref([]);
const router = useRouter();

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  albums.value = await response.json();
});

const viewPhotos = (albumId) => {
  router.push({ name: 'AlbumPhotos', params: { albumId } });
};
</script>

<style scoped>
.album-list {
  list-style-type: none;
  padding: 0;
}

.album-item {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.view-photos-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.view-photos-btn:hover {
  background-color: #0056b3;
}
</style>
