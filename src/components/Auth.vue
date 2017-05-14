<template lang="html">
  <div id="sign-in-up">
    <h1>KAMVAN - The Simple Kanban Tamvan!</h1>
    <Row type="flex" justify="center" align="middle">
      <Col span="8">
        <Card>
          <Tabs value="sign-in">
            <Tab-pane label="Sign In" name="sign-in">
              <FormSignIn></formSignIn>
            </Tab-pane>

            <Tab-pane label="Sign Up" name="sign-up">
              <FormSignUp></FormSignUp>
            </Tab-pane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  </div>
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

<style lang="css">
#sign-in-up {
  background-color: #eee;
  height: 100vh;
  padding-top: 200px;
  text-align: center;
}
#sign-in-up h1{
  margin: 24px 0;
}
</style>
