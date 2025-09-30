<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

uses(RefreshDatabase::class);

it('displays contact page', function () {
    $response = $this->get('/contact');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page->component('contact'));
});

it('submits contact form successfully', function () {
    // Mock Mail facade
    Mail::shouldReceive('to->send')->once();

    // Mock Log facade to allow any calls
    Log::shouldReceive('info')->andReturn(true);
    Log::shouldReceive('warning')->andReturn(true);
    Log::shouldReceive('error')->andReturn(true);

    $contactData = [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'phone' => '+4512345678',
        'subject' => 'Test Subject',
        'preferred_contact' => 'email',
        'message' => 'This is a test message that meets the minimum length requirement.',
    ];

    $response = $this->post('/contact', $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('success', 'Tak for din besked! Vi vender tilbage hurtigst muligt.');
});

it('validates required fields', function () {
    $response = $this->post('/contact', []);

    $response->assertSessionHasErrors(['name', 'email', 'subject', 'message', 'preferred_contact']);
});

it('validates email format', function () {
    $contactData = [
        'name' => 'Test User',
        'email' => 'invalid-email',
        'subject' => 'Test Subject',
        'preferred_contact' => 'email',
        'message' => 'This is a test message that meets the minimum length requirement.',
    ];

    $response = $this->post('/contact', $contactData);

    $response->assertSessionHasErrors(['email']);
});

it('handles email failure gracefully', function () {
    // Mock Mail facade to fail
    Mail::shouldReceive('to->send')
        ->once()
        ->andThrow(new \Exception('Email sending failed'));

    // Mock Log facade to allow any calls
    Log::shouldReceive('info')->andReturn(true);
    Log::shouldReceive('warning')->andReturn(true);
    Log::shouldReceive('error')->andReturn(true);

    $contactData = [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'subject' => 'Test Subject',
        'preferred_contact' => 'email',
        'message' => 'This is a test message that meets the minimum length requirement.',
    ];

    $response = $this->post('/contact', $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('error', 'Der opstod en fejl. Prøv venligst igen.');
});
