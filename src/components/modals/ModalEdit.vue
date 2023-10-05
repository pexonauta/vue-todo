<template>
    <div>
        <v-dialog
        v-model="dialog"
        persistent
        width="300"
        >
            <v-card>
                <v-card-title class="text-h5">
                Editar
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>Informe um novo título</v-card-text>
                <v-text-field class="px-3" 
                clearable label="Título" 
                variant="outlined"
                v-model="titulo"
                ></v-text-field>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red-darken-2"
                    variant="text"
                    @click="this.$emit('fecharModal')"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="blue-darken-2"
                    variant="text"
                    @click="handleEdit()"
                >
                    Editar
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
    </div>
</template>
<script>
  export default {
    props: ['tarefa'],
    data () {
      return {
        titulo: null,
        dialog: true,
      }
    },
    mounted() {
        this.titulo = this.tarefa.titulo
    },      
    methods: {
        handleEdit() {
            let newTask = {
                titulo: this.titulo,
                id: this.tarefa.id
            }
            this.$store.dispatch('editTask', newTask)
            this.$emit('fecharModal')
        }
    },
  }
</script>