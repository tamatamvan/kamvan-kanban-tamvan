<template lang="jade">
  Card(:class="task.status")
    p(slot="title") {{ task.title }}
    p Point: {{ task.point }}
    p Assigned To: {{ task.assignedTo }}
    Button(type="primary", @click="showDetail") Show Detail
</template>

<script>
export default {
  props: ['task'],
  methods: {
    showDetail () {
      this.$emit('showDetail', this.task)
    }
  }
}
</script>

<style lang="stylus" scoped>
.ivu-card
  margin: 8px 0
</style>
