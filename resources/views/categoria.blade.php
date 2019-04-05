@extends('app')
@section('contenido')

<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modelId">
  Categoria
</button>
<br><br>
<table class="table">
    <thead>
        <tr>
            <th>nombre</th>
            <th>Opciones</th>
        </tr>
    </thead>
    <tbody>
            <tr  v-for="(item, index) in Categorias " :key="index">
            <td>@{{item.nombre}}</td>
            <td>
            <button type="button" v-on:click.prevent="Mostrar(item)" class="btn btn-primary">Editar</button>
            <button type="button" v-on:click.prevent="eliminar(item.id)" class="btn btn-danger">Eliminar</button>
            </td>
    </tbody>
</table>
{{--  END TABLE  --}}
@include('createCategoria')
@endsection