<template lang="jade">
  #board
    Row(type="flex", justify="space-between", align="middle")
      Col
        h1 KamVan Board
      Col
        Button(type="primary", @click="newTaskModal = true") New Task

    FormNewTask(:show="newTaskModal", @close="newTaskModal = false")

    Row(v-bind:gutter="16")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Un-Assigned Task", :tasks="unassigned")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="To-Do", :tasks="todo")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Doing", :tasks="doing")
      Col(:xs="24", :sm="24", :md="6", :lg="6")
        BoardSection(title="Done", :tasks="done")
</template>

<script>
import BoardSection from './BoardSection'
import FormNewTask from './FormNewTask'
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDOdqkhCFuTjkA6evws6sTZfVq1RVDSygk',
  authDomain: 'kamvan-6aa69.firebaseapp.com',
  databaseURL: 'https://kamvan-6aa69.firebaseio.com',
  projectId: 'kamvan-6aa69',
  storageBucket: 'kamvan-6aa69.appspot.com',
  messagingSenderId: '1033001407327'
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
      newTaskModal: false
    }
  },
  computed: {
    unassigned () {
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
