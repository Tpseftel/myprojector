import { createRouter, createWebHistory } from 'vue-router';

// Define routes
const routes = [

  {
    path: '/about/',
    name: 'About',
    component: () => import('@/components/views/AboutView.vue'), // Lazy loading
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use history mode (no # in URL)
  routes,
});

export default router;