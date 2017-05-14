<template lang="jade">
  Form(v-bind:model="formSignUp" v-bind:rules="ruleSignUp" ref="formSignUp")
    Form-item(prop="name")
      Input(v-model="formSignUp.name" type="text" placeholder="Your Full Name")
          span(slot="prepend")
            Icon(type="person")

    Form-item(prop="email")
      Input(v-model="formSignUp.email" type="text" placeholder="Your Email Address")
        span(slot="prepend")
          Icon(type="at")

    Form-item(prop="password")
      Input(v-model="formSignUp.password" type="password" placeholder="Your password")
        span(slot="prepend")
          Icon(type="locked")

    Form-item(prop="passwordCheck")
      Input(v-model="formSignUp.passwordCheck" type="password" placeholder="Enter Your Password confirmation")
          span(slot="prepend")
            Icon(type="locked")

    Button(type="primary" @click="handleSubmit('formSignUp')") Sign Up
    Button(type="ghost" @click="handleReset('formSignUp')") Cancel
</template>

<script>
export default {
  data () {
    const RXPEmail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Name must be provided!'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Password must be provided!'))
      } else {
        if (this.formSignUp.passwordCheck !== '') {
          this.$refs.formSignUp.validateField('passwordCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Password confirmation must be provided!'))
      } else if (value !== this.formSignUp.password) {
        callback(new Error('Your password comfirmation should be the same with your password!'))
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
      formSignUp: {
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
      },
      ruleSignUp: {
        name: [{
          validator: validateName,
          trigger: 'blur'
        }],
        email: [{
          validator: validateEmail,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        passwordCheck: [{
          validator: validatePassCheck,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Registration success!')
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
