<template lang="jade">
  #board
    Row(type="flex", justify="space-between", align="middle")
      Col
        h1 KamVan Board
      Col
        Button(type="primary", @click="newTaskModal = true") New Task

    FormNewTask(:show="newTaskModal", @close="newTaskModal = false")

    Row(v-bind:gutter="16")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Un-Assigned Task", :tasks="tasks")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="To-Do", :tasks="tasks")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Doing", :tasks="tasks")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Done", :tasks="tasks")

</template>

<script>
import BoardSection from './BoardSection'
import FormNewTask from './FormNewTask'
export default {
  components: {
    BoardSection,
    FormNewTask
  },
  data () {
    return {
      newTaskModal: false,
      tasks: [
        {
          title: 'Task title 1',
          desc: 'Task Description 1',
          point: 10,
          assignedTo: 'someone'
        },
        {
          title: 'Task title 2',
          desc: 'Task Description 2',
          point: 10,
          assignedTo: 'someone'
        },
        {
          title: 'Task title 2',
          desc: 'Task Description 2',
          point: 10,
          assignedTo: 'someone'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#board
  width: 90%
  margin: auto
h1
  margin: 14px 0
</style>
