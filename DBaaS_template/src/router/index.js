import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";

import ClusterCreate from "../views/UserDashboard/Clusterinfo.vue";
import ClusterSetting from "../views/UserDashboard/ClusterSetting.vue";
import Clusterss from "../views/UserDashboard/Clusters.vue";
import Projectss from "../views/UserDashboard/Projects.vue";
import Providers from "../views/UserDashboard/Providers.vue";
import UserDashboard from "../views/UserDashboard/UserDashboard.vue";


import ClustersManagement from "../views/Clusters.vue";
import ProjectManagement from "../views/Projects.vue";
import UserManagement from "../views/UserMgmt.vue";
import Signin from "../views/Signin.vue";
import Backup from "../views/Backup.vue";
import BackupForm from "../views/BackupForm.vue";
import RestoreBackup from "../views/RestoreBackup.vue";
import BackupDetails from "../views/BackupDetails.vue";

import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },

  // Admin route
  {
    path: "/admin-dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin-backup",
    name: "Backup",
    component: Backup,
  },
  {
    path: "/admin-backup/form",
    name: "Create Backup",
    component: BackupForm,
  },
  {
    path: "/admin-backup/restore-backup",
    name: "Restore Backup",
    component: RestoreBackup,
  },
  {
    path: "/backup-details",
    name: "Backup Details",
    component: BackupDetails,
  },
  {
    path: "/User-dashboard",
    name: "UserDashboard",
    component: UserDashboard,
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },

  {
    path: "/Clusters-Management",
    name: "Clusters-Management",
    component: ClustersManagement,
  },

  {
    path: "/Cluster-Setting",
    name: "Cluster-Setting",
    component: ClusterSetting,
  },

  // User Route
  {
    path: "/Clusters",
    name: "Clusters",
    component: Clusterss,
  },
  {
    path: "/Cluster-Create",
    name: "Cluster-Create",
    component: ClusterCreate,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projectss,
  },

  {
    path: "/Providers",
    name: "Providers",
    component: Providers,
  },
  {
    path: "/User-Management",
    name: "User-Management",
    component: UserManagement,
  },
  {
    path: "/Project-Management",
    name: "Project-Management",
    component: ProjectManagement,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
