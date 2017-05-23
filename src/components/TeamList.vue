<template lang="pug">
  #team-list
    Row(type="flex" justify="space-between")
      Col
        h1 KamVan Board - Team List
      Col
        Button(type="primary") New Team

    Row(type="flex" justify="space-between")
      Col.team-item(span="24")
        Card
          p(slot="title") Team 1
      Col.team-item(span="24")
        Card
          p(slot="title") Team 1
</template>

<script>
export default {
}
</script>

<style lang="stylus">
#team-list
  width: 90%
  margin: 16px auto
.team-item
  margin: 16px 0
</style>
