<template>
    <div>
        <v-dialog
        v-model="dialog"
        persistent
        width="300"
        >
            <v-card>
                <v-card-title class="text-h5">
                Excluir
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>Tem Certeza que Deseja Excluir a tarefa?</v-card-text>
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
                    @click="handleDelete()"
                >
                    Excluir
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
        dialog: true,
      }
    },
    mounted() {
        this.titulo = this.tarefa.titulo
    },      
    methods: {
        handleDelete() {
            this.$store.dispatch('removeTask', this.tarefa.id)
            this.$emit('fecharModal')
        }
    },
  }
</script>