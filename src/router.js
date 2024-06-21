import { createRouter, createWebHistory } from 'vue-router';
import Users from './components/Users.vue';
import UserDetail from './components/UserDetail.vue';
import Albums from './components/Albums.vue';
import AlbumPhotos from './components/AlbumPhotos.vue';

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', name: 'Users', component: Users },
  { path: '/users/:userId', name: 'UserDetail', component: UserDetail },
  { path: '/albums', name: 'Albums', component: Albums },
  { path: '/albums/:albumId', name: 'AlbumPhotos', component: AlbumPhotos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
