<template lang="jade">
  #board
    h1 KamVan Board

    Row(:gutter="16")
      Col(span=6)
        Card
          p(slot="title") Un-Assigned Task
      Col(span=6)
        Card
          p(slot="title") To-Do
      Col(span=6)
        Card
          p(slot="title") Doing
      Col(span=6)
        Card
          p(slot="title") Done
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
#board
  width: 90%
  margin: auto
h1
  margin: 14px 0
</style>
