<?php

use Illuminate\Database\Seeder;
use App\Categoria;

class CategoriaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     factory(Categoria::class,20)->create();

    }
}