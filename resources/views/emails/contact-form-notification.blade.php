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
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            color: white;
            padding: 30px 30px 25px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 8px 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header-subtitle {
            margin: 0;
            font-size: 18px;
            opacity: 0.95;
            font-weight: 400;
        }
        .content {
            padding: 30px;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }
        .contact-item {
            background-color: #f8fafc;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #dc2626;
        }
        .contact-item.full-width {
            grid-column: 1 / -1;
        }
        .field-label {
            font-weight: 600;
            color: #dc2626;
            margin-bottom: 8px;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #1f2937;
            font-weight: 500;
        }
        .field-value a {
            color: #dc2626;
            text-decoration: none;
            font-weight: 600;
        }
        .field-value a:hover {
            text-decoration: underline;
        }
        .message-section {
            background-color: #fef2f2;
            border: 2px solid #fecaca;
            padding: 25px;
            border-radius: 10px;
            margin: 25px 0;
        }
        .message-section .field-label {
            color: #dc2626;
            font-size: 14px;
            margin-bottom: 12px;
        }
        .message-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #fecaca;
            white-space: pre-line;
            line-height: 1.7;
            font-size: 15px;
            color: #374151;
        }
        .action-section {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 25px;
            border-radius: 10px;
            margin: 25px 0;
            border: 1px solid #bae6fd;
        }
        .action-section h3 {
            margin: 0 0 15px 0;
            color: #0369a1;
            font-size: 18px;
        }
        .action-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .action-list li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        .action-list li:before {
            content: "•";
            color: #0369a1;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .footer {
            background-color: #f8fafc;
            padding: 25px 30px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }
        .footer-title {
            font-weight: 600;
            color: #374151;
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .footer-text {
            color: #6b7280;
            font-size: 14px;
            margin: 5px 0;
        }
        .timestamp {
            color: #9ca3af;
            font-size: 12px;
            margin: 15px 0 0 0;
            font-style: italic;
        }
        @media (max-width: 600px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }
            .content, .header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🐕 Førstehjælp til Hunde</h1>
            <p class="header-subtitle">Ny kontaktformular modtaget</p>
        </div>

        <div class="content">
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="field-label">Navn</div>
                    <div class="field-value">{{ $contactData['name'] }}</div>
                </div>
                
                <div class="contact-item">
                    <div class="field-label">Email</div>
                    <div class="field-value">
                        <a href="mailto:{{ $contactData['email'] }}">
                            {{ $contactData['email'] }}
                        </a>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="field-label">Telefon</div>
                    <div class="field-value">
                        @if($contactData['phone'])
                            <a href="tel:{{ $contactData['phone'] }}">
                                {{ $contactData['phone'] }}
                            </a>
                        @else
                            <span style="color: #9ca3af;">Ikke angivet</span>
                        @endif
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="field-label">Emne</div>
                    <div class="field-value">{{ $contactData['subject'] }}</div>
                </div>
                
                <div class="contact-item full-width">
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
            </div>

            <div class="message-section">
                <div class="field-label">Besked</div>
                <div class="message-content">{{ $contactData['message'] }}</div>
            </div>

            <div class="action-section">
                <h3>💡 Hurtig handling</h3>
                <ul class="action-list">
                    <li><strong>Svar direkte:</strong> Denne email er sat op til at svare direkte til {{ $contactData['name'] }}</li>
                    <li><strong>Forventet svartid:</strong> Inden for 24 timer på hverdage</li>
                    <li><strong>Kontaktmetode:</strong> Brug den foretrukne kontaktmetode angivet ovenfor</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p class="footer-title">Førstehjælp til Hunde</p>
            <p class="footer-text">Din partner i hundesikkerhed</p>
            <p class="footer-text">Denne email blev sendt automatisk fra kontaktformularen på hjemmesiden.</p>
            <p class="timestamp">Modtaget: {{ now()->format('d/m/Y \k\l. H:i') }}</p>
        </div>
    </div>
</body>
</html>
