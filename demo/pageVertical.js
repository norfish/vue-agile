import Vue from 'vue'
import AppSlide from './AppSlide.vue'
import Agile from '../src'
import CodePen from './components/CodePen'

Vue.config.productionTip = false

Vue.use(Agile)
Vue.component('code-pen', CodePen)

new Vue({
	render: h => h(AppSlide)
}).$mount('#app')
