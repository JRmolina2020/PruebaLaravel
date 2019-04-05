
Vue.use(vuelidate.default)

let App = new Vue({
el:'#Appv',
data:{
Categorias:[],
form:{
id:null,
nombre:null
},
errors:[]
},
created:function() {
this.Listado();
},

validations: {
  form: {
    nombre: {
      required: validators.required,
      minLength: validators.minLength(4),
      alpha:validators.alpha
    }
  }
},
methods: {
Guardar:function(id){
 if (id==null) {
  if(!this.$v.form.$invalid) {
    let Url='Categoria';
    axios.post(Url,{
    nombre:this.form.nombre
    }).then(response=>{
    this.Listado();
    this.form.nombre='';
    this.errors=[];
    $('#modelId').modal('hide');
    //mensaje exitoso
    Swal.fire(
      'Transaccion exitosa.!',
      'El registro se ha agregado!',
      'success'
    )
    //
    }).catch(error=>{
      this.errors=error.response.data
    });
   } else {
     console.log('❌ Invalid form')
   }
 } else {
//METODO EDITAR
let Url='Categoria/'+id;
axios.put(Url,this.form).then(response=>{
this.Listado();
this.form={id:null,nombre:null};
$('#modelId').modal('hide');
Swal.fire(
  'Editar!',
  'Editado con exito!',
  'success'
)
})
}
},
Listado:function(){
var Url='Categoria';
axios.get(Url).then(response=>{
this.Categorias=response.data
});
},
Mostrar:function(item){
this.form.id=item.id;
this.form.nombre=item.nombre;
$("#textR").text('Editar Categoria');//title modal
$("#textG").text('Editar');//text button guardar a editar
$('#modelId').modal('show');
},
eliminar:function(id){
    var Url='Categoria/'+id;
    Swal.fire({
        title: 'Esta seguro?',
        text: "Una vez eliminado el registro no se podra recuperar!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'Transaccion exitosa.',
            'success'
          )
          axios.delete(Url).then(response=>{
            this.Listado();
            });
        }
      })
},
cancelar:function(){
this.form={id:null,nombre:null};
}
}
});


