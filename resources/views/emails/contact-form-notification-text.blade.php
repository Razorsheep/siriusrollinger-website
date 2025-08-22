FØRSTEHJÆLP TIL HUNDE - NY KONTAKTFORMULAR
================================================

Ny besked modtaget fra hjemmesiden:

NAVN: {{ $contactData['name'] }}
EMAIL: {{ $contactData['email'] }}
@if($contactData['phone'])
TELEFON: {{ $contactData['phone'] }}
@endif
EMNE: {{ $contactData['subject'] }}

FORETRUKKEN KONTAKTMETODE: 
@switch($contactData['preferred_contact'])
    @case('email')
Email
    @break
    @case('phone')
Telefon
    @break
    @case('both')
Email og telefon
    @break
    @default
{{ $contactData['preferred_contact'] }}
@endswitch

BESKED:
------------------------------------------------
{{ $contactData['message'] }}
------------------------------------------------

HURTIG HANDLING:
- Svar inden for 24 timer på hverdage
- Brug den foretrukne kontaktmetode angivet ovenfor
- Denne email kan besvares direkte til {{ $contactData['name'] }}

================================================
Førstehjælp til Hunde
Modtaget: {{ now()->format('d/m/Y \k\l. H:i') }}

Denne email blev sendt automatisk fra kontaktformularen.
