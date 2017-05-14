<template lang="jade">
  #board
    h1 KamVan Board

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
