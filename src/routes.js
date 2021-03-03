import Search from './components/Search'
//import About from '@/components/About.vue'
import TrackDetail from './components/TrackDetail'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/track/:id', component: TrackDetail, name: 'track' }
]

export default routes
