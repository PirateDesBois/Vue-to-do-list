<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        My Todo List
      </v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-card>
        <v-card-title>
          Add Task
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="newTask" label="Task Name"></v-text-field>
            <v-btn color="primary" @click="addTask">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

      <v-divider class="my-4"></v-divider>

      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item-title>{{ task }}</v-list-item-title>
          <v-list-item-action>
            <v-icon color="red" @click="deleteTask(index)">mdi-delete</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask)
      this.newTask = ''
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>
