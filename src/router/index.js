import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";



// Define routes
const routes = [
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/project/ProjectsBoard.vue"), // Lazy loading
    children: [
      {
        name: "ProjectEdit",
        path: ":projectId/edit",
        component: () => import("@/views/project/ProjectEditView.vue"),
        props: true,
        beforeEnter: (to, from, next) => {
          const authUser = useUserStore();
          const isAdmin = authUser.isAdmin/* logic to determine if user is admin */;
          if (isAdmin) {
            next();
          } else {
            next({ name: "Login" });
          }
        },
      },
      {
        name: "ProjectDetails",
        path: ":projectId/details",
        component: () => import("@/views/project/ProjectDetailsView.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"), // Lazy loading
  },

  {
    path: '/:pathMatch(.*)*', // This matches any route
    name: 'not-found',
    component: () => import("@/views/NotFoundView.vue"), // Lazy loading  
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
