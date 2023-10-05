<template>
    <div class="mt-5">
        <v-col cols="12" sm="6">
         <v-text-field 
         clearable 
         label="Qual sua Tarefa ?" 
         variant="outlined" 
         v-model="campoInput"
         @keyup.enter="handleAddTask"
         >
         </v-text-field>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'TaskPage',
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