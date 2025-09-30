<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blog_entries', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('excerpt')->nullable();
            $table->string('slug');
            $table->text('content');
            $table->string('image')->nullable();
            $table->foreignId('author_id')->references('id')->on('users');
            $table->string('category')->nullable();
            $table->string('read_time')->nullable();
            $table->string('date')->nullable();
            $table->string('status')->default('draft');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_entries');
    }
};
