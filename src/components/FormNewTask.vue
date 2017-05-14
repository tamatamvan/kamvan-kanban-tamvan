<template lang="jade">
Modal(v-model="showModal",
  title="New Task",
  okText="Save",
  cancelText="Cancel",
  @on-ok="handleSubmit('formNewTask')",
  @on-cancel="handleCancel('formNewTask')")
  Form(ref="formNewTask", :model="formNewTask", :rules="ruleNewTask")
    Form-item(label="Title", prop="title")
      Input(v-model="formNewTask.title" type="text" placeholder="Task Title")

    Form-item(label="Description", prop="desc")
      Input(v-model="formNewTask.desc" type="textarea" placeholder="Task Short Description")

    Form-item(label="Point", prop="point")
      Input(v-model="formNewTask.point" type="text" placeholder="Task Point")

    Form-item(label="Assigned To" prop="assignedTo")
      Input(v-model="formNewTask.assignedTo" type="text" placeholder="Assigned To")
</template>

<script>
export default {
  props: ['show'],
  data () {
    const validateTitle = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Title must be provided!'))
      } else {
        callback()
      }
    }
    const validatePoint = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Point must be provided!'))
      } else {
        if (isNaN(value)) {
          callback(new Error('Point must be a number!'))
        } else {
          callback()
        }
      }
    }
    return {
      formNewTask: {
        title: '',
        desc: '',
        point: 0,
        assignedTo: ''
      },
      ruleNewTask: {
        title: [{
          validator: validateTitle,
          trigger: 'blur'
        }],
        point: [{
          validator: validatePoint,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    showModal () {
      return this.show
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('New task has been added!')
        } else {
          this.$Message.error('Please check your form input!')
        }
      })
      this.emitClose()
    },
    handleCancel (name) {
      this.$refs[name].resetFields()
      this.$Message.success('Bye!')
      this.emitClose()
    },
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
</style>
