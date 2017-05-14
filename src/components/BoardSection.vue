<template lang="jade">
Card
  p(slot="title") {{ title }}
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="stylus">
</style>
