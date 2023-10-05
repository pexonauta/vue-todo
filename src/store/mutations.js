import db from '../services/localbase.js'

export default {
    searchTasks(state) {
        db.collection('tasks').get().then(tasks => {
          state.tasks = tasks
        })
    },
    newTask(state, titulo) {
        db.collection('tasks').add({
            id: new Date().getTime(),
            titulo, 
            feito:false
        })
    },
}