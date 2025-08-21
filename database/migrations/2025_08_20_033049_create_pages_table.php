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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('slug');
            $table->text('excerpt')->nullable();
            $table->json('content');
            $table->string('image')->nullable();
            $table->foreignId('author_id')->references('id')->on('users');
            $table->string('status')->default('draft');
            $table->string('page_type')->default('page');

            $table->unsignedInteger('order_column')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
