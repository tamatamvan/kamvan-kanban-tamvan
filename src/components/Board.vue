<template lang="jade">
  #board
    Row(type="flex", justify="space-between", align="middle")
      Col
        h1 KamVan Board
      Col
        Button(type="primary", @click="newTaskModal = true") New Task

    Modal(v-model="newTaskModal",
      title="New Task",
      okText="Save",
      cancelText="Cancel",
      @on-ok="ok",
      @on-cancel="cancel")

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
export default {
  components: {
    BoardSection
  },
  data () {
    return {
      newTaskModal: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('Ok!')
    },
    cancel () {
      this.$Message.info('Bye!')
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
