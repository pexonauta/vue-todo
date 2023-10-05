<template>
    <div>
        <drop-list
        :items="tasksComputeds" 
        @reorder="$event.apply(tasksComputeds)" >
            <template 
            v-slot:item="{item, reorder}"
            >
                <drag 
                :key="item.id"
                :data="item" 
                >
                    <Task 
                    style="background-color: white"
                    :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                    :tarefa="item"
                    
                    />
                    <v-divider/>
                </drag>
            </template>
            <template v-slot:feedback="{item}">
                <v-skeleton-loader
                type="list-item-avatar-three-line"
                :key="item.titulo"
                style="border-left: 2px solid #1976D2; margin-left: -2px;"
                />
            </template>
        </drop-list>
    </div>
</template>
<script>
import {Drag,DropList} from "vue-easy-dnd";

import Task from "./TaskComponent.vue";
export default {
    name: "App",
    components: {
        Drag,
        DropList,
        Task,
    },
    computed: {
        tasksComputeds() {
            return this.$store.state.tasks
        }
    },
}
</script>