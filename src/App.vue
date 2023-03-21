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
        <v-list-item v-for="(task, index) in taskList" :key="index">
          <v-list-item-title>{{ task.title }}</v-list-item-title>
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
      taskList: this.getData(),
      newTask: '',
      tasks: []
    };
  },
  methods: {
    // Initialisation of data
    getData() {
      const data = localStorage.getItem('todoList');
      return JSON.parse(data) || [];
    },
    // Saving data list on LocalStorage
    saveData(data) {
      localStorage.setItem('todoList', JSON.stringify(data));
    },
    // Adding tasks to the list
    // If task is empty, return alert with message "Please write a task"
    addTask() {
      if (this.newTask != "") {
        this.taskList.push({ title: this.newTask, done: false });
        this.newTask = '';
        this.saveData(this.taskList);
      }else {
        alert('Please write a task')
      }
    },
    // Deleting tasks from the list and from de LocalStorage
    deleteTask(index) {
      this.taskList.splice(index, 1);
      this.saveData(this.taskList);
    },
    toggleTask(index) {
      this.taskList[index].done = !this.taskList[index].done;
      this.saveData(this.taskList);
    }
  }
};
</script>
