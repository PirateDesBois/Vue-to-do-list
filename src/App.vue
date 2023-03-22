<style scoped>
#app{
  background-image: url('./assets/body.png') !important;
  background-repeat: no-repeat !important;
  background-size:cover;
}

.glass{
/* From https://css.glass */
background: rgba(221, 205, 206, 0.123);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
}
.waitlist{
/* From https://css.glass */
background: rgba(233, 73, 61, 0.589);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
}
.progress{
/* From https://css.glass */
background: rgba(233, 193, 61, 0.651);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
}

.done{
/* From https://css.glass */
background: rgba(35, 194, 83, 0.616);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
}
</style>

<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        My Todo List
        
      </v-toolbar-title>
      <v-btn color="orange"  @click="clearHistory()">Clear</v-btn>
    </v-app-bar>

    <v-container class="my-15">
      <v-card>
        <v-card-title>
          New Task
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="newTask" label="Task Name"></v-text-field>
            <v-text-field v-model="newTaskDescription" label="Task Description"></v-text-field>
            <v-btn color="primary" @click="addTask">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="4" class="waitlist">
          <div class="font-weight-bold text-subtitle-1 text-white text-center">
            <v-icon color="white" class="mx-2">mdi-progress-check</v-icon>
            Waitlist</div>
          </v-col>
          <v-col cols="4" class="progress">
          <div class="font-weight-bold text-subtitle-1 text-white text-center">
            <v-icon color="white" class="mx-2">mdi-progress-check</v-icon>
            Progress</div>
          </v-col>
          <v-col cols="4" class="done">
          <div class="font-weight-bold text-subtitle-1 text-white text-center">
            <v-icon color="white" class="mx-2">mdi-progress-check</v-icon>
            Done</div>
          </v-col>
      </v-row>
      <v-row>
      
        
        <v-col cols="4" class="glass">
        <v-col v-for="(task, index) in taskList" :key="index">
            <div v-if="task.status === 'to do'" >
                <v-card class="rounded-shaped" :style="{ backgroundColor: task.color }">
                <v-card-title>
                  <!-- Task date and time -->
                  <v-list-item v-if="task.date && task.time" class="text-subtitle-1"><v-icon color="primary mx-2">mdi-clock-time-eight-outline</v-icon>{{ task.date }} {{ task.time }}</v-list-item>
                  <!-- Task date and time -->
                  <v-divider :thickness="2"></v-divider>
                  <br>
                  <!-- Task title -->
                  <v-list-item v-if="!task.editable">{{ task.title }}</v-list-item>
                  <v-text-field v-model="task.title" v-else label="Task Name"></v-text-field>
                  <!-- Task title -->

                  <!-- Task description -->
                  <v-list-item class="text-subtitle-1" v-if="!task.editable">{{ task.description }}</v-list-item>
                  <v-text-field v-model="task.description" v-else label="Task Description"></v-text-field>
                  <!-- Task description -->

                  <template v-if="task.editable">
                    <v-radio-group v-model="task.status">
                      <v-radio label="waitlist" value="to do"></v-radio>
                      <v-radio label="Progress" value="progress"></v-radio>
                      <v-radio label="Done" value="done"></v-radio>
                    </v-radio-group>
                  </template>
                  
                </v-card-title>

                <v-card-actions class="justify-end text-right">
                  <!-- Actions -->
                  <v-icon color="red" @click="deleteTask(index)">mdi-delete</v-icon>
                  <v-icon color="primary" v-if="!task.editable" @click="editTask(index)">mdi-pencil</v-icon>
                  <v-icon color="primary" v-else @click="updateTask(index)">mdi-check</v-icon>
                  <!-- Actions -->

                  <!-- Color changer dialog component -->
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
                        <v-btn color="primary" block @click="task.colorPickerDialog = false, updateTask(index)">Save
                          changes</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
                <!-- Color changer dialog component -->

              </v-card>
            </div>
          </v-col>
        </v-col>


        
        <v-col cols="4" class="glass">
          <v-col v-for="(task, index) in taskList" :key="index">
            <div v-if="task.status === 'progress'" >
                <v-card class="rounded-shaped" :style="{ backgroundColor: task.color }">
                <v-card-title>
                  <!-- Task date and time -->
                  <v-list-item v-if="task.date && task.time" class="text-subtitle-1"><v-icon color="primary mx-2">mdi-clock-time-eight-outline</v-icon>{{ task.date }} {{ task.time }}</v-list-item>
                  <!-- Task date and time -->
                  <v-divider :thickness="2"></v-divider>
                  <br>
                  <!-- Task title -->
                  <v-list-item v-if="!task.editable">{{ task.title }}</v-list-item>
                  <v-text-field v-model="task.title" v-else label="Task Name"></v-text-field>
                  <!-- Task title -->

                  <!-- Task description -->
                  <v-list-item class="text-subtitle-1" v-if="!task.editable">{{ task.description }}</v-list-item>
                  <v-text-field v-model="task.description" v-else label="Task Description"></v-text-field>
                  <!-- Task description -->

                  <template v-if="task.editable">
                    <v-radio-group v-model="task.status">
                      <v-radio label="To Do" value="to do"></v-radio>
                      <v-radio label="Progress" value="progress"></v-radio>
                      <v-radio label="Done" value="done"></v-radio>
                    </v-radio-group>
                  </template>

                </v-card-title>

                <v-card-actions class="justify-end text-right">
                  <!-- Actions -->
                  <v-icon color="red" @click="deleteTask(index)">mdi-delete</v-icon>
                  <v-icon color="primary" v-if="!task.editable" @click="editTask(index)">mdi-pencil</v-icon>
                  <v-icon color="primary" v-else @click="updateTask(index)">mdi-check</v-icon>
                  <!-- Actions -->

                  <!-- Color changer dialog component -->
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
                        <v-btn color="primary" block @click="task.colorPickerDialog = false, updateTask(index)">Save
                          changes</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
                <!-- Color changer dialog component -->

              </v-card>
            </div>
          </v-col>
        </v-col>

        <v-col cols="4" class="glass">
          <v-col v-for="(task, index) in taskList" :key="index">
            <div v-if="task.status === 'done'" >
                <v-card class="rounded-shaped" :style="{ backgroundColor: task.color }">
                <v-card-title>
                  <!-- Task date and time -->
                  <v-list-item v-if="task.date && task.time" class="text-subtitle-1"><v-icon color="primary mx-2">mdi-clock-time-eight-outline</v-icon>{{ task.date }} {{ task.time }}</v-list-item>
                  <!-- Task date and time -->
                  <v-divider :thickness="2"></v-divider>
                  <br>
                  <!-- Task title -->
                  <v-list-item v-if="!task.editable">{{ task.title }}</v-list-item>
                  <v-text-field v-model="task.title" v-else label="Task Name"></v-text-field>
                  <!-- Task title -->

                  <!-- Task description -->
                  <v-list-item class="text-subtitle-1" v-if="!task.editable">{{ task.description }}</v-list-item>
                  <v-text-field v-model="task.description" v-else label="Task Description"></v-text-field>
                  <!-- Task description -->

                  <template v-if="task.editable">
                    <v-radio-group v-model="task.status">
                      <v-radio label="To Do" value="to do"></v-radio>
                      <v-radio label="Progress" value="progress"></v-radio>
                      <v-radio label="Done" value="done"></v-radio>
                    </v-radio-group>
                  </template>

                </v-card-title>

                <v-card-actions class="justify-end text-right">
                  <!-- Actions -->
                  <v-icon color="red" @click="deleteTask(index)">mdi-delete</v-icon>
                  <v-icon color="primary" v-if="!task.editable" @click="editTask(index)">mdi-pencil</v-icon>
                  <v-icon color="primary" v-else @click="updateTask(index)">mdi-check</v-icon>
                  <!-- Actions -->

                  <!-- Color changer dialog component -->
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
                        <v-btn color="primary" block @click="task.colorPickerDialog = false, updateTask(index)">Save
                          changes</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
                <!-- Color changer dialog component -->

              </v-card>
            </div>
          </v-col>
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
      newTaskDescription: '',
      tasks: [],
      dialog: false,
    };
  },
  methods: {
    clearHistory() {
      // Réinitialiser le LocalStorage
    localStorage.clear();
    // Refresh page
    location.reload();
    },
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
        const currentDate = new Date(); //Retrieves the current date and time
        console.log(currentDate);
        this.taskList.push({ title: this.newTask,
                              description: this.newTaskDescription,
                              done: false,
                              color: "#ffffff",
                              colorPickerDialog: false,
                              status: "to do", // status propriety 
                              date: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`, // get dateformat dd-m-yy
                              time: `${currentDate.getHours()}:${currentDate.getMinutes()}` // get time format o:m
                            });
        this.newTask = '';
        this.newTaskDescription = '';
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
      // this.taskList[index].status = this.taskList[index].status;
      this.saveData(this.taskList);
    },
    toggleTask(index) {
      this.taskList[index].done = !this.taskList[index].done;
      this.saveData(this.taskList);
    }
  }
};
</script>
