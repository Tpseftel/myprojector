import { createRouter, createWebHistory } from 'vue-router';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import('@/views/project/ProjectsBoard.vue'), // Lazy loading
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'), // Lazy loading
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use history mode (no # in URL)
  routes,
});

export default router;