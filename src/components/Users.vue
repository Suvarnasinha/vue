<template>
  <div>
    <h1>Users</h1>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button class="view-todos-btn" @click="viewTodos(user.id)">View Todos</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const users = ref([]);
const router = useRouter();

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await response.json();
});

const viewTodos = (userId) => {
  router.push({ name: 'UserDetail', params: { userId } });
};
</script>

<style scoped>
.user-list {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.view-todos-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.view-todos-btn:hover {
  background-color: #0056b3;
}
</style>
