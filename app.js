const app = new Vue({
    el: '#app',

    data: {
        titulo: 'Registro de Usuarios',
        subtitulo: 'Datos de Usuarios',
        mensaje: 'Por favor llene todos los campos',
        validado: false,
        tareas: [],
        nuevatarea: ''
    },
    methods:{
        // Función para agregar usuarios
        agregarTarea(){
            if(this.nombre && this.apellido && this.codigo){
                this.tareas.push({
                    nombre: this.nombre, apellido: this.apellido, codigo: this.codigo,
                    estado: false
                });
                console.log(this.tareas);
                this.nombre = '';
                this.apellido = '';
                this.codigo = '';
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
                this.validado = false;
            } else {
                this.validado = true;
            }
        },
        // Función para editar el estado del usuario
        editarTarea(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminar(index){
            // Función para eliminar un elemento de un arreglo
            this.tareas.splice(index, 1);
            console.log("Eliminado");
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    }, 
    created(){
        var datosBD = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosBD === null){
            this.tareas = [];
        } else {
            this.tareas = datosBD;
        }
    }
});