<template lang="pug">
  Form(ref="formSignIn", :model="formSignIn", :rules="ruleSignIn")
    Form-item(prop="email")
      Input(v-model="formSignIn.email" type="text" placeholder="Your Email Address")
        span(slot="prepend")
          Icon(type="at")

    Form-item(prop="password")
      Input(v-model="formSignIn.password" type="password" placeholder="Your password")
        span(slot="prepend")
          Icon(type="locked")

    Button(type="primary" @click="handleSubmit('formSignIn')") Sign In
    Button(type="ghost" @click="handleReset('formSignIn')") Cancel
</template>

<script>
export default {
  data () {
    const RXPEmail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validatePassSignIn = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Password must be provided!'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Email must be provided!'))
      } else if (!RXPEmail.test(value)) {
        callback(new Error('Your email not valid!'))
      } else {
        callback()
      }
    }
    return {
      formSignIn: {
        email: '',
        password: ''
      },
      ruleSignIn: {
        email: [{
          validator: validateEmail,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePassSignIn,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Sign In success!')
        } else {
          this.$Message.error('Please check your form input!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang="css">
</style>
