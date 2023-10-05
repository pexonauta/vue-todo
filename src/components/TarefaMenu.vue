<template>
    <div>
        <v-menu left>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                @click="item.click()"
              >
                
                <v-list-item-title><v-icon left>{{ item.icon }}</v-icon>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
         <ModalEdit v-if="items[0].modal"
         @fecharModal="items[0].modal = false"
         :tarefa="tarefa"
         />
         <ModalDelete v-if="items[1].modal"
         @fecharModal="items[1].modal = false"
         :tarefa="tarefa"
         />
    </div>
</template>

<script>
import ModalEdit from './modals/ModalEdit'
import ModalDelete from './modals/ModalDelete'
export default {
    props: ['tarefa'],
    components: {
        ModalEdit,
        ModalDelete,
    },
    data: () => ({
      items: [
        { 
            icon: 'mdi-pencil',
            title: 'Editar',
            modal: false, 
            click() {
                this.modal = true
            }
         },
        { 
            icon: 'mdi-delete-circle',
            title: 'Excluir',
            modal: false,
            click() {
                this.modal = true
            } 
        },
      ],
    }),
  }
</script>