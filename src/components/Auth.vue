<template lang="pug">
  div(id="sign-in-up")
    h1 KAMVAN - The Simple Kanban Tamvan!
    Row(type="flex", justify="center", align="middle")
      Col(span="8")
        Card
          Tabs(value="sign-in")
            Tab-pane(label="Sign In", name="sign-in")
              FormSignIn

            Tab-pane(label="Sign Up", name="sign-up")
              FormSignUp
</template>

<script>
import FormSignUp from './FormSignUp'
import FormSignIn from './FormSignIn'
export default {
  components: {
    FormSignUp,
    FormSignIn
  }
}
</script>

<style lang="stylus">
#sign-in-up
  background-color: #eee
  height: 100vh
  padding-top: 200px
  text-align: center

  h1
    margin: 24px 0
</style>
