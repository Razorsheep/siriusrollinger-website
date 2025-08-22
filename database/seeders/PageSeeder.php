<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'title' => 'Kurser i Førstehjælp',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Grundlæggende førstehjælp til hund',
                'next_event_date' => '15. september 2025',
                'next_event_time' => '09:00 - 13:00',
                'next_event_location' => 'Bagsværd Hundetræningscenter',
                'next_event_description' => '4-timers kursus med teori og praktiske øvelser. Maks 12 deltagere.',
                'next_event_registration_link' => 'mailto:kontakt@firstaiddog.dk?subject=Tilmelding til førstehjælpskursus',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'kontakt@firstaiddog.dk',
                'content' => [
                    'type' => 'doc',
                    'content' => [
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 1],
                            'content' => [
                                ['type' => 'text', 'text' => 'Kurser i førstehjælp til private, virksomheder og foreninger']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Grundlæggende førstehjælp til hund']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Har du oplevet, at din hund har flækket en klo, skåret en trædepude, været halt efter en lang dag efter en tur eller at den har haft sår og skrammer? Eller måske har den kastet op eller haft tynd mave? Og har du været i tvivl om, hvad du skulle gøre, og hvornår det er så alvorligt, at du skal kontakte dyrlæge?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Så er et kursus i grundlæggende førstehjælpskursus for hunde noget for dig.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Førstehjælpskurset bliver afholdt på små hold med fokus på teori der omsættes i praksis med øvelser og træning på egne hunde. Kurset er både til privatpersoner der træner hund, foreninger med hundetræning, jagt, canicross eller lignende, samt virksomheder med arbejdshunde.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad lærer du på kurset']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hvordan du håndterer en skadet hund og sikrer dig selv']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Funktionel anatomi og hvordan du kender og tjekker din egen hunds normale værdier: puls, vejrtrækning, temperatur, slimhindevurdering og hvad du kan bruge de normale værdier til']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hvordan du systematisk og effektivt kan gennemgå din hund for skader']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hvordan du vurderer og håndterer mindre og større skader, herunder diarré, sårrens og forbindinger']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Grundlæggende ide om hvilke skadestyper du selv kan håndtere og hvilke der kræver dyrlægebesøg']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hvordan du yder livreddende førstehjælp til din hund – og hvad der adskiller sig fra førstehjælp til mennesker']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hvad du skal have med i din førstehjælpstaske og i dit hjemmeapotek til hund']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Kurset varer 4 timer, og der er praktiske øvelser indlagt.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Med kurset får du også et aktionskort, som indeholder den vigtigste viden i komprimeret form og vejrbestandigt format.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Der er mulighed for at tilkøbe det førstehjælpskit der bliver anvendt i undervisningen.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Deltagerantal er 12 for at optimere forhold til feedback og øvelser.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Max. én hund pr. to kursister til øvelserne. Hunden skal være omgængelig og vaccineret efter de gældende regler.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Kurset er ikke en erstatning for et dyrlægebesøg.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad koster det?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Pris for kurset (ikke pr. deltager): '],
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => '10.500 kr.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Dertil kommer transport fra Bagsværd efter statens transporttakster.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvordan booker jeg?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Kontakt Julie for mere information eller bookning af kursus.']
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'Kurser for Dyrlæger',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Den Akutte Patient & Genoplivning',
                'next_event_date' => '20. oktober 2025',
                'next_event_time' => '08:00 - 16:00',
                'next_event_location' => 'På jeres klinik',
                'next_event_description' => 'Dagskursus afholdt på jeres klinik for praktisk læring for hele klinikken.',
                'next_event_registration_link' => 'mailto:kontakt@førstehjælphund.dk?subject=Tilmelding til dyrlægekursus',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'kontakt@førstehjælphund.dk',
                'content' => [
                    'type' => 'doc',
                    'content' => [
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 1],
                            'content' => [
                                ['type' => 'text', 'text' => 'Kurser til dyrlæger og veterinærsygeplejersker']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Den Akutte patient & Genoplivning']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'DAGSKURSER AFHOLDT PÅ JERES KLINIK FOR PRAKTISK LÆRING FOR HELE KLINIKKEN, SOM I KAN ANVENDE DIREKTE I HVERDAGEN']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'DEN AKUTTE PATIENT']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad gør I når en trafikskadet hund kommer ind på klinikken? Eller når du som vagtdyrlæge eller VSP modtager en hund med blokerede luftveje? Har I en akutkasse med organisering efter akutte lidelser og lige præcis den medicin og det udstyr I skal bruge?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Med den simple systematiske algoritme C-ABcDE bliver I på dette kursus forberedt optimalt på at kunne håndtere akutte og livstruende lidelser i klinikken.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'I bliver i stand til trygt at håndtere den akutte patient på systematisk vis. Det forbedrer behandlingen, prognosen og reducerer stress for både patient og personale.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Vi gennemgår patienter og tilgangen lige fra triage i telefonen og venteværelset til vurdering og behandling af de mest relevante akutte lidelser og skader.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'I får handouts med de forskellige trin i C-ABcDE med hjem, så du med det samme kan bruge din viden hjemme på klinikken.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Kurset varer som udgangspunkt 7 timer, men kan justeres efter jeres behov – kontakt mig for en snak om muligheder.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'PRAKTISK WORKSHOP I GENOPLIVNING']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Med en workshop i genoplivning, får alle på klinikken praktisk øvet og arbejdet med de nyeste internationale retningslinjer fra RECOVER (Reassessment Campaign on Veterinary Resuscitation).']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Efter den teoretiske gennemgang af genoplivning (HLR) med Basal Life Support (BSL) og Advanced Life Support (ALS) fortsætter vi i workshops med med praktiske relevante teambaserede øvelser og cases, hvor alle i klinikken deltager, og afprøver forskellige roller.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'I forbindelse med workshoppen udleveres handouts og flowcharts til brug undervejs og efterfølgende i klinikken.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Workshoppen varer 3-4 timer afhængigt af deltagerantal.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'HVORDAN BOOKER DU?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Ring til 42203870 eller send en mail til kontakt@førstehjælphund.dk for mere information eller bookning af kursus.']
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'Foredrag',
                'slug' => 'foredrag',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Dyrlæge i sne og sand - fra Arktis til Afghanistan',
                'next_event_date' => '25. november 2025',
                'next_event_time' => '19:00 - 21:00',
                'next_event_location' => 'Københavns Dyrlægeforening',
                'next_event_description' => 'Kom med på en fantastisk rejse fra Arktis til Afghanistan med dyrlæge og major Julie Pio Kragelund.',
                'next_event_registration_link' => 'mailto:kontakt@firstaiddog.dk?subject=Tilmelding til foredrag',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'kontakt@firstaiddog.dk',
                'content' => [
                    'type' => 'doc',
                    'content' => [
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 1],
                            'content' => [
                                ['type' => 'text', 'text' => 'Foredrag og oplæg']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Dyrlæge i sne og sand - fra Arktis til Afghanistan']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Kom med på en fantastisk rejse fra Arktis til Afghanistan, hvor dyrlæge og major Julie Pio Kragelund fortæller om sit enestående arbejde med de militære arbejdshunde i det danske forsvar.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hundesnuden overgås ikke af noget teknisk, og er stadig den bedste detektor der findes til at snuse sprængstof, narko og meget andet. De militære arbejdshunde og deres hundeførere sendes i mission afsides steder i verden, hvor der i bedste fald er en telefonlinje hjem, og i værste fald ingenting.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Militære arbejdshunde redder mænd og liv, og selvfølgelig skal vi derfor også kunne behandle og hjælpe hundene hvis og når de kommer til skade langt væk hjemmefra.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Julie fortæller levende og engageret om alt fra forberedelse af hunde og mænd til de ukendte farer, og det livreddende præhospitale taktisk førstehjælp som foregår i felten inden en skadet hund faktisk kommer til dyrlæge.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Med billeder, videoer og mere end 12 års erfaring og 18 rejser til Nordøstgrønland giver Julie jer en unik indsigt i et fascinerende arbejde.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Julie er Danmarks første NATOuddannede instruktør i taktisk førstehjælp for militær arbejdshunde.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hun har undervist i førstehjælp på hund for Slædepatruljen Sirius, Jægerskorpset, Frømandskorpset samt på den internationale medicuddannelse for specialoperationssoldater NNSOCM.']
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'Førstehjælpsgrej',
                'slug' => 'forestehjaelpsgrej',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Workshop: Byg dit eget førstehjælpskit',
                'next_event_date' => '10. december 2025',
                'next_event_time' => '14:00 - 16:00',
                'next_event_location' => 'Online via Zoom',
                'next_event_description' => 'Lær at sammensætte det perfekte førstehjælpskit til din hund. Gratis workshop.',
                'next_event_registration_link' => 'mailto:kontakt@firstaiddog.dk?subject=Tilmelding til workshop',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'kontakt@firstaiddog.dk',
                'content' => [
                    'type' => 'doc',
                    'content' => [
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 1],
                            'content' => [
                                ['type' => 'text', 'text' => 'Førstehjælpsgrej – hvad skal du bruge?']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvilket udstyr og medicin skal du bruge?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Det er en rigtig god ide at have et hjemmeapotek med førstehjælpsgrej, du kan bruge til at hjælpe din hund, hvis uheldet er ude.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Det kan være alt fra behandling af tynd mave, rense ører, begrænse og behandle et sår og tage temperaturen.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Du må ikke selv behandle med receptpligtig medicin, men der er en masse medicin i håndkøb og førstehjælpsgrej i fri handel, som du kan bruge. På den måde giver du både dig selv og din hund de bedste forudsætninger, hvis den bliver syg.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Du kan selvfølgelig ikke behandle alt selv, men efter et kursus i grundlæggende førstehjælp hos mig, er du bedre i stand til at vurdere, hvornår og til hvad du behøver dyrlægehjælp, samt skelne hvad du selv kan håndtere og ikke mindst hvordan du gør det.']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvis du er aktiv med din hund fx på jagt, til canicross eller på vandreture, er det en rigtig god ide at have både et hjemmeapotek og en mindre førstehjælpstaske, som du har med, når I er ude.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad skal være i dit førstehjælpskit?']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Forbindsstoffer: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Gaze, bandager, tape, saks']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Rensemidler: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Desinfektionsmiddel, saltvand']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Værktøj: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Pincet, termometer, pincet']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Medicin: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Aktivt kul, øredråber, øjensalve']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Dokumentation: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Din hunds journal, dyrlægens nummer']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvorfor er det vigtigt?']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Et veludstyret førstehjælpskit kan være forskellen på liv og død i en akut situation. Det giver dig ro og mulighed for at handle hurtigt og effektivt, når din hund har brug for hjælp.']
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'Guides og gode råd',
                'slug' => 'guides-og-gode-raad',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Årshjul - Sikkerhed gennem året',
                'next_event_date' => '1. januar 2026',
                'next_event_time' => '10:00 - 11:00',
                'next_event_location' => 'Online via Facebook Live',
                'next_event_description' => 'Gratis online session om sikkerhed for din hund gennem året.',
                'next_event_registration_link' => null,
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'kontakt@firstaiddog.dk',
                'content' => [
                    'type' => 'doc',
                    'content' => [
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 1],
                            'content' => [
                                ['type' => 'text', 'text' => 'Gode råd, guides og links']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Vil du lære mere om, hvordan du kan beskytte din hund og håndtere almindelige situationer? Her finder du praktiske guides og råd, der kan hjælpe dig med at skabe en sikker tilværelse for din firbenede ven.']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Årshjul - Sikkerhed gennem året']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Forår']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Giftige planter: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Lær at genkende de farligste forårsplanter']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Påske: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Hold chokolade og påskeæg væk fra din hund']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Fodring: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Sæsonens første græs kan skjule farer']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Vand: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Smeltevand kan være koldt og farligt']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Sommer']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hedebølger: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Tegn på overophedning og hvad du skal gøre']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Strandliv: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Saltvand, sand og sol kan skade din hund']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Insekter: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Bier, hvepse og myg - hvad gør du ved stik?']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Grillning: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Hold din hund væk fra grill og varm mad']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Efterår']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Løv: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Faldne blade kan skjule farer']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Regn: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Våde forhold og køligere vejr']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Svampe: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Giftige svampe kan vokse i haven']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Mørke: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Synlighed og reflekser bliver vigtige']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Vinter']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Kulde: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Frostskader og underkøling']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Salt: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Vejsalt kan skade poterne']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Is: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Farlige isflager og glatte overflader']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Mørke: '],
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Ekstra opmærksomhed på trafik']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Almindelige nødsituationer og hvad du skal gøre']
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Din hund har spist noget giftigt']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Symptomer: '],
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Kvalme, opkast, diarré, sløvhed, rysten']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad du skal gøre:']
                            ]
                        ],
                        [
                            'type' => 'orderedList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Kald straks din dyrlæge']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Prøv at identificere, hvad hunden har spist']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Indfør ikke opkastning (medmindre dyrlægen siger det)']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Tag hunden til dyrlægen hurtigst muligt']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Din hund er blevet bidt']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Symptomer: '],
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Sår, hævelse, smerter, rødme']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad du skal gøre:']
                            ]
                        ],
                        [
                            'type' => 'orderedList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Rens såret grundigt med saltvand']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Dæk såret med en ren bandage']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Kontakt din dyrlæge']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hold øje med tegn på infektion']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 3],
                            'content' => [
                                ['type' => 'text', 'text' => 'Din hund er halt']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Symptomer: '],
                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Humper, holder poten oppe, smerter']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Hvad du skal gøre:']
                            ]
                        ],
                        [
                            'type' => 'orderedList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Undersøg poten for synlige skader']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Giv hunden ro']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Kontakt dyrlægen hvis problemet varer']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Undgå at lade hunden løbe eller lege']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'heading',
                            'attrs' => ['level' => 2],
                            'content' => [
                                ['type' => 'text', 'text' => 'Præventive foranstaltninger']
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Den bedste måde at beskytte din hund på er at være proaktiv:']
                            ]
                        ],
                        [
                            'type' => 'bulletList',
                            'content' => [
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Hold din hund vaccineret og behandlet mod parasitter']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Træn grundlæggende kommandoer']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Brug sele og snor i trafikerede områder']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'marks' => [['type' => 'strong']], 'text' => 'Hold giftige stoffer væk fra din hund']
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    'type' => 'listItem',
                                    'content' => [
                                        [
                                            'type' => 'paragraph',
                                            'content' => [
                                                ['type' => 'text', 'text' => 'Undersøg din hund regelmæssigt for skader eller ændringer']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            'type' => 'paragraph',
                            'content' => [
                                ['type' => 'text', 'text' => 'Har du spørgsmål til vores guides eller har brug for personlig rådgivning? Kontakt os - vi er her for at hjælpe dig med at holde din hund sikker og sund.']
                            ]
                        ]
                    ]
                ]
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
