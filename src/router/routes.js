import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import vendorLayout from "@/layout/dashboard/vendorLayout.vue";

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import home from '@/pages/home.vue'
import homeProduct from '@/pages/homeProduct'
import uniqueProduct from '@/components/home/uniqueProduct'

// Admin pages
import Dashboard from "@/pages/AdminPages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/AdminPages/Notifications.vue";
import products from "@/pages/AdminPages/products.vue";
import orders from "@/pages/AdminPages/orders.vue";
import users from "@/pages/AdminPages/users.vue";
import vendors from "@/pages/AdminPages/Vendors.vue";
import uniqueVendor from "@/pages/AdminPages/uniqueVendor"


// vendor pages
import vendorDashboard from '@/pages/VendorPages/vendorDashboard'
import profile from '@/pages/VendorPages/profile'
import VendorProduct from '@/pages/VendorPages/VendorProducts'
import VendorAdd from '@/pages/VendorPages/VendorAdd'

const routes = [
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/admin/stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "/admin/notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "/admin/products",
        name: "products",
        component: products
      },
      {
        path: "/admin/orders",
        name: "orders",
        component: orders
      },
      {
        path: "/admin/users",
        name: "users",
        component: users
      },
      {
        path: "/admin/vendors",
        name: "vendors",
        component: vendors
      },
      {
        path: "/admin/vendors",
        name: "vendors",
        component: vendors
      },
      {
        path: "/admin/vendor",
        name: "uniqueVendor",
        component: uniqueVendor
      },
      
    ]
  },
  {
    path: "/vendor",
    component: vendorLayout,
    redirect: "/vendor/dashboard",
    children: [
      {
        path: "/vendor/dashboard",
        name: "vendorDashboard",
        component: vendorDashboard
      },
      {
        path: "/vendor/profile",
        name: "profile",
        component: profile
      },
      {
        path: "/vendor/products",
        name: "VendorProduct",
        component: VendorProduct
      },
      {
        path: "/vendor/addproduct",
        name: "VendorAdd",
        component: VendorAdd
      },
    ]
  },
  { path: "*", component: NotFound },
  {
    path:'/',
    name:'home',
    component:home
  },
  {
    path:'/product',
    name:'homeProduct',
    component:homeProduct
  },
  {
    path:'/uniqueProduct',
    name:'uniqueProduct',
    component:uniqueProduct
  }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
