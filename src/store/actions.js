import db from '../services/localbase.js'

export default {
    async newTask({commit}, titulo) {
        await commit('newTask', titulo)
        await commit('searchTasks')
    },
    editTask({commit}, newTask) {
        db.collection('tasks').doc({ id: newTask.id }).update({
            titulo: newTask.titulo
        }).then(() => {
            commit('searchTasks')
        })
    },
    completedTask({commit}, newTask) {
        db.collection('tasks').doc({ id: newTask.id }).update({
            feito: !newTask.feito
        }).then(() => {
            commit('searchTasks')
        })
    },
    removeTask({commit}, id) {
        db.collection('tasks').doc({id}).delete().then(() => {
            commit('searchTasks')
        })
    }
}