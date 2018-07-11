<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue'

import AdminArea from './_area/Admin'
import DashboardArea from './_area/Dashboard'
import SupervisedArea from './_area/Supervised'
import SupervisorArea from './_area/Supervisor'
import UserArea from './_area/User'

Vue.component(AdminArea.name, AdminArea)
Vue.component(DashboardArea.name, DashboardArea)
Vue.component(SupervisedArea.name, SupervisedArea)
Vue.component(SupervisorArea.name, SupervisorArea)
Vue.component(UserArea.name, UserArea)

export default {
  name: 'AreaRouter',
  props: {
    area: {
      default: null,
      validator (val) {
        return val === null || typeof val === 'string'
      }
    }
  },
  // computed: {
  //   areaComponent () {
  //     return this.area + 'Area'
  //   }
  // },
  // methods: {
  //   handleAreaChange (val) {
  //     if (this.area === null) {
  //       this.$router.push('user')
  //     }
  //   }
  // },
  // watch: {
  //   area: {
  //     handler: 'handleAreaChange',
  //     immediate: true
  //   }
  // }
}
</script>

