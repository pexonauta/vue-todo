<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :width="250" >
    
    
      <v-img 
      src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg"
      gradient="to left top, rgba(19,84,122,.4), rgba(128,208,199,.5)"
      
      
      theme="dark"
      class="text-center "
      >
      <div class="pt-5">
        <v-avatar
        size="100"
        >
          <v-img
            src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="John"
          ></v-img>
        </v-avatar>
        <v-list-item class="text-white" title="Lista de Tarefas" subtitle="Vuetify" ></v-list-item>
        </div>
      </v-img>
      
        <v-divider></v-divider>
        <v-list-item link to="/" prepend-icon="mdi-view-dashboard" title="Tarefas" value="tasks"></v-list-item>
        <v-list-item link to="/sobre" prepend-icon="mdi-forum" title="Sobre" value="about"></v-list-item>
      
    </v-navigation-drawer>

    <v-app-bar
        color="teal-darken-4"
        image="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg"
        density="prominent"
        height="130"
      >
        <template v-slot:image>
          <v-img
            gradient="to left top, rgba(19,84,122,.4), rgba(128,208,199,.5)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
         
          <v-app-bar-title >
            <center>
              <InputTask />
            </center>
            
            
          </v-app-bar-title>
        

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
import InputTask from './components/InputTask.vue'
export default {
  components: {
    InputTask,
  },  
  data: () => ({ drawer: null }),
}
</script>