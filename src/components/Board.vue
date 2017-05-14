<template lang="jade">
  #board
    Row(type="flex", justify="space-between", align="middle")
      Col
        h1 KamVan Board
      Col
        Button(type="primary", @click="newTaskModal = true") New Task

    FormNewTask(:show="newTaskModal", @close="newTaskModal = false")

    Row(v-bind:gutter="16")
      Col(span=6)
        BoardSection(title="Un-Assigned Task")
      Col(span=6)
        BoardSection(title="To-Do")
      Col(span=6)
        BoardSection(title="Doing")
      Col(span=6)
        BoardSection(title="Done")

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
      newTaskModal: false
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
