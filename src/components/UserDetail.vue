<template>
  <div>
    <h1>User Todos</h1>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
       {{ todo.title }} - <strong :style="{ color: todo.completed ? '#28a745' : '#dc3545' }">{{ todo.completed ? 'Completed' : 'Pending' }}</strong>
      </li>
    </ul>
    <router-link class="view-albums-link" to="/albums">View Albums</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const todos = ref([]);
const route = useRoute();
const userId = route.params.userId;

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  todos.value = await response.json();
});
</script>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-item strong {
  color: #28a745; /* Green color for completed todos */
}

.view-albums-link {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.view-albums-link:hover {
  background-color: #0056b3;
}
</style>
