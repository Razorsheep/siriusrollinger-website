<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Julie Pio Kragelund',
            'email' => 'julie@trailmom.dk',
            'password' => Hash::make('secret'),
            'admin' => true,
        ]);

        User::create([
            'name' => 'Ro Kleine Sonne',
            'email' => 'ro.sonne@gmail.com',
            'password' => Hash::make('secret'),
            'admin' => true,
        ]);
    }
}
