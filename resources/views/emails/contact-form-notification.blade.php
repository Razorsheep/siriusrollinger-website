<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ny kontaktformular</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #dc2626;
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
            margin: -30px -30px 30px -30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 4px solid #dc2626;
            border-radius: 5px;
        }
        .field-label {
            font-weight: bold;
            color: #dc2626;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
        }
        .message-field {
            background-color: #fff5f5;
            border: 2px solid #dc2626;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .contact-info {
            background-color: #f0f9ff;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🐕 Førstehjælp til Hunde</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Ny kontaktformular modtaget</p>
        </div>

        <div class="field">
            <div class="field-label">Navn</div>
            <div class="field-value">{{ $contactData['name'] }}</div>
        </div>

        <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
                <a href="mailto:{{ $contactData['email'] }}" style="color: #dc2626; text-decoration: none;">
                    {{ $contactData['email'] }}
                </a>
            </div>
        </div>

        @if($contactData['phone'])
        <div class="field">
            <div class="field-label">Telefon</div>
            <div class="field-value">
                <a href="tel:{{ $contactData['phone'] }}" style="color: #dc2626; text-decoration: none;">
                    {{ $contactData['phone'] }}
                </a>
            </div>
        </div>
        @endif

        <div class="field">
            <div class="field-label">Emne</div>
            <div class="field-value">{{ $contactData['subject'] }}</div>
        </div>

        <div class="field">
            <div class="field-label">Foretrukken kontaktmetode</div>
            <div class="field-value">
                @switch($contactData['preferred_contact'])
                    @case('email')
                        📧 Email
                        @break
                    @case('phone')
                        📞 Telefon
                        @break
                    @case('both')
                        📧📞 Email og telefon
                        @break
                    @default
                        {{ $contactData['preferred_contact'] }}
                @endswitch
            </div>
        </div>

        <div class="message-field">
            <div class="field-label">Besked</div>
            <div class="field-value" style="white-space: pre-line; line-height: 1.6;">{{ $contactData['message'] }}</div>
        </div>

        <div class="contact-info">
            <h3 style="margin-top: 0; color: #dc2626;">💡 Hurtig handling</h3>
            <p style="margin: 10px 0;">
                <strong>Svar direkte:</strong> Denne email er sat op til at svare direkte til {{ $contactData['name'] }}<br>
                <strong>Forventet svartid:</strong> Inden for 24 timer på hverdage<br>
                <strong>Kontaktmetode:</strong> Brug den foretrukne kontaktmetode angivet ovenfor
            </p>
        </div>

        <div class="footer">
            <p><strong>Førstehjælp til Hunde</strong></p>
            <p>Denne email blev sendt automatisk fra kontaktformularen på hjemmesiden.</p>
            <p style="color: #999; font-size: 12px;">
                Modtaget: {{ now()->format('d/m/Y \k\l. H:i') }}
            </p>
        </div>
    </div>
</body>
</html>
