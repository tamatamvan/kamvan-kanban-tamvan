<template lang="jade">
Card(:class="classSection")
  p(slot="title") {{ title }}
  BoardCard(v-for="(task, index) in tasks", :task="task", :key="index")
</template>

<script>
import BoardCard from './BoardCard'
export default {
  props: ['title', 'tasks'],
  components: {
    BoardCard
  },
  computed: {
    classSection () {
      switch (this.title) {
        case 'Un-Assigned Task':
          return 'unassigned'
        case 'To-Do':
          return 'to-do'
        case 'Doing':
          return 'doing'
        case 'Done':
          return 'done'
        default:
          return 'unassigned'
      }
    }
  }
}
</script>

<style lang="stylus">
.unassigned > .ivu-card-head
    background-color: #ff3300
    p
      color: #fff
.to-do > .ivu-card-head
    background-color: #ff9900
    p
      color: #fff
.doing > .ivu-card-head
    background-color: #3399ff
    p
      color: #fff
.done > .ivu-card-head
    background-color: #00cc66
    p
      color: #fff
</style>
