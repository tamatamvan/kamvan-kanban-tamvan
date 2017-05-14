<template lang="jade">
  Card(:class="task.status")
    p(slot="title") {{ task.title }}
    p Point: {{ task.point }}
    p Assigned To: {{ task.assignedTo }}
</template>

<script>
export default {
  props: ['task']
}
</script>

<style lang="stylus" scoped>
.ivu-card
  margin: 8px 0
</style>
