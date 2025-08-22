<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10|max:2000',
            'preferred_contact' => 'required|in:email,phone,both',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Navn er påkrævet',
            'name.max' => 'Navn må ikke være længere end 255 tegn',

            'email.required' => 'Email er påkrævet',
            'email.email' => 'Ugyldig email adresse',
            'email.max' => 'Email må ikke være længere end 255 tegn',

            'phone.max' => 'Telefonnummer må ikke være længere end 20 tegn',

            'subject.required' => 'Emne er påkrævet',
            'subject.max' => 'Emne må ikke være længere end 255 tegn',

            'message.required' => 'Besked er påkrævet',
            'message.min' => 'Besked skal være mindst 10 tegn',
            'message.max' => 'Besked må ikke være længere end 2000 tegn',

            'preferred_contact.required' => 'Vælg venligst en foretrukken kontaktmetode',
            'preferred_contact.in' => 'Ugyldig kontaktmetode valgt',
        ];
    }
}
