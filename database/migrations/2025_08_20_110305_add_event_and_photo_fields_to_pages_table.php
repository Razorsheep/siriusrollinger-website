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
        Schema::table('pages', function (Blueprint $table) {
            // Next event fields
            $table->string('next_event_title')->nullable();
            $table->string('next_event_date')->nullable();
            $table->string('next_event_time')->nullable();
            $table->string('next_event_location')->nullable();
            $table->text('next_event_description')->nullable();
            $table->string('next_event_registration_link')->nullable();

            // Photos field (JSON array)
            $table->json('photos')->nullable();

            // Contact information fields
            $table->string('contact_phone')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_website')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->dropColumn([
                'next_event_title',
                'next_event_date',
                'next_event_time',
                'next_event_location',
                'next_event_description',
                'next_event_registration_link',
                'photos',
                'contact_phone',
                'contact_email',
                'contact_website',
            ]);
        });
    }
};
