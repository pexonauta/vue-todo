<template>
    <div>
    <v-list-item 
    :value="tarefa.titulo"
    :class="{'bg-blue-lighten-4':tarefa.feito}"
    @click="$store.dispatch('completedTask', tarefa)"
    >
    
    
        <template v-slot:prepend="{}">
          <v-list-item-action start >
            <v-checkbox-btn color="blue" :model-value="tarefa.feito"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title
        :class="{'text-decoration-line-through': tarefa.feito}"
        >{{ tarefa.titulo }}</v-list-item-title>

        <template v-slot:append>
          <TarefaMenu :tarefa="tarefa"/>
        </template>
      </v-list-item>
    </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue'
export default {
    components: {
        TarefaMenu,
    },
    name: 'TaskComponent',
    props: ['tarefa'],
    methods: {
        changeTask() {
            this.tarefaUp.feito = !this.tarefaUp.feito
        },
        handleRemoveTask(id) {
            this.$store.commit('removeTask', id)
        },
    }
}
</script>