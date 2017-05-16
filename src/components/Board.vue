<template lang="jade">
  #board
    Row(type="flex", justify="space-between", align="middle")
      Col
        h1 KamVan Board
      Col
        Button(type="primary", @click="newTaskModal = true") New Task

    FormNewTask(:show="newTaskModal", @close="newTaskModal = false", @submitTask="submitTask")

    Modal(v-model="detailTaskModal",
      cancelText="Close",
      @on-cancel="detailTaskModal = false")
      p(slot="header", style="text-align:center; font-size:14px")
        Icon(type="information-circled")
        span Detail Task: {{ currentTask.title }} for {{ currentTask.assignedTo }}
      h3 Task Description :
      p {{ currentTask.desc }}
      br

      h3 Point :
      p {{ currentTask.point }}
      br

      h3 Status :
      p {{ currentStatusText }}
      br

      div(slot="footer")
        Row(type="flex", justify="space-between", align="middle")
          Col
            Poptip(v-if="currentTask.status != 0",
            confirm,
            title="Are you sure want to set this task as 'Doing'?",
            okText="Yes I'm sure!",
            cancelText="No, cancel!",
            @on-ok="prev",
            @on-cancel="closeDetailTaskModal"
            )
              Button(type="warning" size="large" long) Prev
          Col
            Poptip(confirm,
            title="Are you sure want to delete this task?",
            okText="Yes I'm sure!",
            cancelText="No, cancel!",
            @on-ok="deleteTask",
            @on-cancel="closeDetailTaskModal"
            )
              Button(type="error" size="large" long) Delete
          Col
            Poptip(v-if="currentTask.status != 3",
            confirm,
            title="Are you sure want to set this task as 'To-Do'?",
            okText="Yes I'm sure!",
            cancelText="No, cancel!",
            @on-ok="next",
            @on-cancel="closeDetailTaskModal"
            )
              Button(type="success" size="large" long) Next

    Row(v-bind:gutter="16")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Back-Log", :tasks="backlog" @showDetail="showDetail")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="To-Do", :tasks="todo" @showDetail="showDetail")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Doing", :tasks="doing" @showDetail="showDetail")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Done", :tasks="done" @showDetail="showDetail")
</template>

<script>
import BoardSection from './BoardSection'
import FormNewTask from './FormNewTask'
import * as firebase from 'firebase'

const config = {
  databaseURL: 'https://kamvan-6aa69.firebaseio.com',
  projectId: 'kamvan-6aa69'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const tasksRef = db.ref('tasks')
export default {
  components: {
    BoardSection,
    FormNewTask
  },
  firebase: {
    tasks: tasksRef
  },
  data () {
    return {
      newTaskModal: false,
      detailTaskModal: false,
      currentTask: {
        title: null,
        desc: null,
        point: null,
        assignedTo: null,
        status: null
      }
    }
  },
  computed: {
    backlog () {
      return this.tasks.filter((task) => task.status === 0)
    },
    todo () {
      return this.tasks.filter((task) => task.status === 1)
    },
    doing () {
      return this.tasks.filter((task) => task.status === 2)
    },
    done () {
      return this.tasks.filter((task) => task.status === 3)
    },
    currentStatusText () {
      switch (this.currentTask.status) {
        case 0:
          return 'Back Log'
        case 1:
          return 'To Do'
        case 2:
          return 'Doing'
        case 3:
          return 'Done'
        default:
          return 'Back Log'
      }
    },
    prevText () {
      switch (this.currentTask.status) {
        case 1:
          return 'Back Log'
        case 2:
          return 'To Do'
        case 3:
          return 'Doing'
        default:
          return 'Back log'
      }
    },
    nextText () {
      switch (this.currentTask.status) {
        case 0:
          return 'To Do'
        case 1:
          return 'Doing'
        case 2:
          return 'Done'
        default:
          return 'Done'
      }
    }
  },
  methods: {
    submitTask (data) {
      tasksRef.push(data)
      this.$Message.success('New task has been added!')
    },
    showDetail (task) {
      this.currentTask = task
      this.detailTaskModal = true
    },
    next () {
      const newStatus = this.currentTask.status + 1
      console.log('newStatus ', newStatus)
      tasksRef.child(this.currentTask['.key'])
      .child('status')
      .set(newStatus)
      this.closeDetailTaskModal()
    },
    prev () {
      const newStatus = this.currentTask.status - 1
      tasksRef.child(this.currentTask['.key'])
      .child('status')
      .set(newStatus)
      this.closeDetailTaskModal()
    },
    deleteTask () {
      tasksRef.child(this.currentTask['.key']).remove()
      this.detailTaskModal = false
      this.closeDetailTaskModal()
    },
    closeDetailTaskModal () {
      this.detailTaskModal = false
      this.clearCurrentTask()
    },
    clearCurrentTask () {
      this.currentTask = {
        title: null,
        desc: null,
        point: null,
        assignedTo: null,
        status: null
      }
    }
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
