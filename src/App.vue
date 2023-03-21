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

      <v-row>
        <v-col v-for="(task, index) in taskList" :key="index" cols="12" sm="6" md="4">
          <v-card class="ma-2 rounded-shaped" :style="{ backgroundColor: task.color }">
            <v-card-title>
              <v-list-item v-if="!task.editable">{{ task.title }}</v-list-item>
              <v-text-field v-model="task.title" v-else label="Task Name"></v-text-field>
            </v-card-title>
            <v-card-actions class="justify-end text-right">
              <v-icon color="red" @click="deleteTask(index)">mdi-delete</v-icon>
              <v-icon color="primary" v-if="!task.editable" @click="editTask(index)">mdi-pencil</v-icon>
              <v-icon color="primary" v-else @click="updateTask(index)">mdi-check</v-icon>
              <!-- Color changer in a dialog component -->
              <v-dialog v-model="task.colorPickerDialog" width="auto">
                <template v-slot:activator="{ props }">
                  <v-card-actions color="primary px-0" v-bind="props" @click="task.colorPickerDialog = true">
                    <v-icon color="orange-darken-2 " size="25">mdi-palette</v-icon>
                  </v-card-actions>
                </template>

                <v-card>
                  <v-card-text>
                    <v-color-picker v-model="task.color"></v-color-picker>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" block @click="task.colorPickerDialog = false, updateTask(index)">Save changes</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-card-actions>
          </v-card>

        </v-col>

      </v-row>

    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      taskList: this.getData(),
      newTask: '',
      tasks: [],
      dialog: false,
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
        this.taskList.push({ title: this.newTask, done: false, color: "#ffffff", colorPickerDialog: false });
        this.newTask = '';
        this.saveData(this.taskList);
      } else {
        alert('Please write a task')
      }
    },
    // Deleting tasks from the list and from de LocalStorage
    deleteTask(index) {
      this.taskList.splice(index, 1);
      this.saveData(this.taskList);
    },
    // Editing task 
    editTask(index) {
      this.taskList[index].editable = true;
    },
    // Uptdating task
    updateTask(index) {
      this.taskList[index].editable = false;
      this.saveData(this.taskList);
    },
    toggleTask(index) {
      this.taskList[index].done = !this.taskList[index].done;
      this.saveData(this.taskList);
    }
  }
};
</script>
