import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBirthdayCake, faEnvelope, faPen, faSchool } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faTwitter, faBirthdayCake, faSchool, faPen, faEnvelope)
Vue.use(BootstrapVue)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
