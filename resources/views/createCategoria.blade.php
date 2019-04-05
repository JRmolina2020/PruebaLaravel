<form @submit.prevent="Guardar(form.id)" autocomplete="off">
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5  class="modal-title"><p id="textR">Registrar Categoria</p></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <div class="form-group ">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control"
                        v-model.trim="form.nombre" id="nombre" name="nombre"
                        :class="{ error: $v.form.nombre.$invalid }" @input="$v.form.nombre.$touch()">
                        <div class="mensaggeError">
                        <small  v-if="!$v.form.nombre.required">El nombre es obligatorio  <i class="fa fa-close"></i> </small>
                        <small  v-if="!$v.form.nombre.alpha">No se aceptan valores numericos  <i class="fa fa-close"></i>  </small>
                        <small  v-if="!$v.form.nombre.minLength" >Minimo @{{$v.form.nombre.$params.minLength.min}} Caracteres <i class="fa fa-close"></i></small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="cancelar" class="btn btn-danger btn-sm" data-dismiss="modal">salir</button>
                    <button :disabled="$v.form.$invalid" type="submit" class="btn btn-primary btn-sm"><p id="textG">Guardar</p></button>
                </div>
            </div>
        </div>
    </div>
</form>