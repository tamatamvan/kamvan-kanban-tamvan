<template lang="pug">
Card(:class="classSection")
  p(slot="title") {{ title }}
  //- draggable(class="dragArea", v-model="tasks", :options="{group:'taskList'}")
  BoardCard(v-for="(task, index) in tasks", :task="task", :key="index", @showDetail="showDetail")
</template>

<script>
import BoardCard from './BoardCard'
import draggable from 'vuedraggable'
export default {
  props: ['title', 'tasks'],
  components: {
    BoardCard,
    draggable
  },
  computed: {
    classSection () {
      switch (this.title) {
        case 'Back Log':
          return 'back-log'
        case 'To-Do':
          return 'to-do'
        case 'Doing':
          return 'doing'
        case 'Done':
          return 'done'
        default:
          return 'back-log'
      }
    },
    tasksSection () {
      return this.tasks
    }
  },
  methods: {
    showDetail (task) {
      this.$emit('showDetail', task)
    }
  }
}
</script>

<style lang="stylus">
.ivu-card-head
  border-radius: 4px 4px 0px 0px
.back-log > .ivu-card-head
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
.dragArea
  min-height: 16px;
</style>
