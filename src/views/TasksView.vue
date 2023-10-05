<template>
    <div class="mt-2">
        
        <ListTasks />
        <div v-if="!$store.state.tasks.length" class="mt-10 animate__animated animate__bounce">
        <center>
            <v-icon
            size="100"
            color="primary"
            >
                mdi-check
            </v-icon>
            <div class="text-h5  primary--text">
                Nenhuma Tarefa
            </div>
        </center>
            
        </div>  
    </div>
</template>

<script>
import ListTasks from '../components/ListTasks.vue'
export default {
    name: 'TaskPage',
    components: {
        ListTasks,
    },
    data:() => ({
        campoInput: null,
    }),
    mounted() {
        this.$store.commit('searchTasks')
    },
    methods: {
        handleAddTask() {
            // this.$store.commit('newTask', this.campoInput)
            this.$store.dispatch('newTask', this.campoInput)
            this.campoInput = null
        },
    }
}
</script>