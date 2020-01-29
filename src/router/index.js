import Vue from 'vue'
import VueRouter from 'vue-router'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Beranda from '../views/Beranda.vue'
import Footer from '../views/layout/Footer.vue'
import Navbar from '../views/layout/Navbar.vue'
import Sidebar from '../views/layout/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, footer: Footer, header: Navbar, sidebar: Sidebar}
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default: DataKantin, footer: Footer, header: Navbar, sidebar: Sidebar}
  },
  {
    path: '/datamakanan',
    name: 'datamakanan',
    components: {default: DataMakanan, footer: Footer, header: Navbar, sidebar: Sidebar}
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, footer: Footer, header: Navbar, sidebar: Sidebar}
  }

]

const router = new VueRouter({
  routes
})

export default router
