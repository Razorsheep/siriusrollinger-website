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
                'title' => 'Førstehjælpskurser',
                'slug' => 'forestehjaelpskurser',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'next_event_title' => 'Grundlæggende førstehjælp til hund',
                'next_event_date' => '15. september 2025',
                'next_event_time' => '09:00 - 13:00',
                'next_event_location' => 'Bagsværd Hundetræningscenter',
                'next_event_description' => '4-timers kursus med teori og praktiske øvelser. Maks 12 deltagere.',
                'next_event_registration_link' => 'mailto:info@firstaiddog.dk?subject=Tilmelding til førstehjælpskursus',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'info@firstaiddog.dk',
                'content' => '<h1>Kurser i førstehjælp til private, virksomheder og foreninger</h1>

Grundlæggende førstehjælp til hund
Har du oplevet, at din hund har flækket en klo, skåret en trædepude, været halt efter en lang dag efter en tur eller at den har haft sår og skrammer? Eller måske har den kastet op eller haft tynd mave? Og har du været i tvivl om, hvad du skulle gøre, og hvornår det er så alvorligt, at du skal kontakte dyrlæge?

Så er et kursus i grundlæggende førstehjælpskursus for hunde noget for dig.

Førstehjælpskurset bliver afholdt på små hold med fokus på teori der omsættes i praksis med øvelser og træning på egne hunde. Kurset er både til privatpersoner der træner hund, foreninger med hundetræning, jagt, canicross eller lignende, samt virksomheder med arbejdshunde.

<h2>Hvad lærer du på kurset</h2>
<ul>
<li>Hvordan du håndterer en skadet hund og sikrer dig selv</li>
<li>Funktionel anatomi og hvordan du kender og tjekker din egen hunds normale værdier: puls, vejrtrækning, temperatur, slimhindevurdering og hvad du kan bruge de normale værdier til</li>
<li>Hvordan du systematisk og effektivt kan gennemgå din hund for skader</li>
<li>Hvordan du vurderer og håndterer mindre og større skader, herunder diarré, sårrens og forbindinger</li>
<li>Grundlæggende ide om hvilke skadestyper du selv kan håndtere og hvilke der kræver dyrlægebesøg</li>
<li>Hvordan du yder livreddende førstehjælp til din hund – og hvad der adskiller sig fra førstehjælp til mennesker</li>
<li>Hvad du skal have med i din førstehjælpstaske og i dit hjemmeapotek til hund</li>
</ul>

<p>Kurset varer 4 timer, og der er praktiske øvelser indlagt.</p>

<p>Med kurset får du også et aktionskort, som indeholder den vigtigste viden i komprimeret form og vejrbestandigt format.</p>

<p>Der er mulighed for at tilkøbe det førstehjælpskit der bliver anvendt i undervisningen.</p>

<p>Deltagerantal er 12 for at optimere forhold til feedback og øvelser.</p>

<p>Max. én hund pr. to kursister til øvelserne. Hunden skal være omgængelig og vaccineret efter de gældende regler.</p>

<p><strong>Kurset er ikke en erstatning for et dyrlægebesøg.</strong></p>

<h2>Hvad koster det?</h2>
<p>Pris for kurset (ikke pr. deltager): <strong>10.500 kr.</strong></p>

<p>Dertil kommer transport fra Bagsværd efter statens transporttakster.</p>

<h2>Hvordan booker jeg?</h2>
<p>Kontakt Julie for mere information eller bookning af kursus.</p>'
            ],
            [
                'title' => 'Kurser for Dyrlæger',
                'slug' => 'kurser-for-dyrlaeger',
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
                'content' => '<h1>Kurser til dyrlæger og veterinærsygeplejersker</h1>

<h2>Den Akutte patient & Genoplivning</h2>
<p><strong>DAGSKURSER AFHOLDT PÅ JERES KLINIK FOR PRAKTISK LÆRING FOR HELE KLINIKKEN, SOM I KAN ANVENDE DIREKTE I HVERDAGEN</strong></p>

<h3>DEN AKUTTE PATIENT</h3>

<p>Hvad gør I når en trafikskadet hund kommer ind på klinikken? Eller når du som vagtdyrlæge eller VSP modtager en hund med blokerede luftveje? Har I en akutkasse med organisering efter akutte lidelser og lige præcis den medicin og det udstyr I skal bruge?</p>

<p>Med den simple systematiske algoritme C-ABcDE bliver I på dette kursus forberedt optimalt på at kunne håndtere akutte og livstruende lidelser i klinikken.</p>

<p>I bliver i stand til trygt at håndtere den akutte patient på systematisk vis. Det forbedrer behandlingen, prognosen og reducerer stress for både patient og personale.</p>

<p>Vi gennemgår patienter og tilgangen lige fra triage i telefonen og venteværelset til vurdering og behandling af de mest relevante akutte lidelser og skader.</p>

<p>I får handouts med de forskellige trin i C-ABcDE med hjem, så du med det samme kan bruge din viden hjemme på klinikken.</p>

<p>Kurset varer som udgangspunkt 7 timer, men kan justeres efter jeres behov – kontakt mig for en snak om muligheder.</p>

<h3>PRAKTISK WORKSHOP I GENOPLIVNING</h3>

<p>Med en workshop i genoplivning, får alle på klinikken praktisk øvet og arbejdet med de nyeste internationale retningslinjer fra RECOVER (Reassessment Campaign on Veterinary Resuscitation).</p>

<p>Efter den teoretiske gennemgang af genoplivning (HLR) med Basal Life Support (BSL) og Advanced Life Support (ALS) fortsætter vi i workshops med med praktiske relevante teambaserede øvelser og cases, hvor alle i klinikken deltager, og afprøver forskellige roller.</p>

<p>I forbindelse med workshoppen udleveres handouts og flowcharts til brug undervejs og efterfølgende i klinikken.</p>

<p>Workshoppen varer 3-4 timer afhængigt af deltagerantal.</p>

<h2>HVORDAN BOOKER DU?</h2>
<p>Ring til 42203870 eller send en mail til kontakt@førstehjælphund.dk for mere information eller bookning af kursus.</p>'
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
                'next_event_registration_link' => 'mailto:info@firstaiddog.dk?subject=Tilmelding til foredrag',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'info@firstaiddog.dk',
                'content' => '<h1>Foredrag og oplæg</h1>

<h2>Dyrlæge i sne og sand - fra Arktis til Afghanistan</h2>
<p>Kom med på en fantastisk rejse fra Arktis til Afghanistan, hvor dyrlæge og major Julie Pio Kragelund fortæller om sit enestående arbejde med de militære arbejdshunde i det danske forsvar.</p>

<p>Hundesnuden overgås ikke af noget teknisk, og er stadig den bedste detektor der findes til at snuse sprængstof, narko og meget andet. De militære arbejdshunde og deres hundeførere sendes i mission afsides steder i verden, hvor der i bedste fald er en telefonlinje hjem, og i værste fald ingenting.</p>

<p>Militære arbejdshunde redder mænd og liv, og selvfølgelig skal vi derfor også kunne behandle og hjælpe hundene hvis og når de kommer til skade langt væk hjemmefra.</p>

<p>Julie fortæller levende og engageret om alt fra forberedelse af hunde og mænd til de ukendte farer, og det livreddende præhospitale taktisk førstehjælp som foregår i felten inden en skadet hund faktisk kommer til dyrlæge.</p>

<p>Med billeder, videoer og mere end 12 års erfaring og 18 rejser til Nordøstgrønland giver Julie jer en unik indsigt i et fascinerende arbejde.</p>

<p>Julie er Danmarks første NATOuddannede instruktør i taktisk førstehjælp for militær arbejdshunde.</p>

<p>Hun har undervist i førstehjælp på hund for Slædepatruljen Sirius, Jægerskorpset, Frømandskorpset samt på den internationale medicuddannelse for specialoperationssoldater NNSOCM.</p>'
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
                'next_event_registration_link' => 'mailto:info@firstaiddog.dk?subject=Tilmelding til workshop',
                'photos' => [
                    '/images/logo.png',
                    '/images/logo.png'
                ],
                'contact_phone' => '+45 42 20 38 70',
                'contact_email' => 'info@firstaiddog.dk',
                'content' => '<h1>Førstehjælpsgrej – hvad skal du bruge?</h1>

<h2>Hvilket udstyr og medicin skal du bruge?</h2>
<p>Det er en rigtig god ide at have et hjemmeapotek med førstehjælpsgrej, du kan bruge til at hjælpe din hund, hvis uheldet er ude.</p>

<p>Det kan være alt fra behandling af tynd mave, rense ører, begrænse og behandle et sår og tage temperaturen.</p>

<p>Du må ikke selv behandle med receptpligtig medicin, men der er en masse medicin i håndkøb og førstehjælpsgrej i fri handel, som du kan bruge. På den måde giver du både dig selv og din hund de bedste forudsætninger, hvis den bliver syg.</p>

<p>Du kan selvfølgelig ikke behandle alt selv, men efter et kursus i grundlæggende førstehjælp hos mig, er du bedre i stand til at vurdere, hvornår og til hvad du behøver dyrlægehjælp, samt skelne hvad du selv kan håndtere og ikke mindst hvordan du gør det.</p>

<p>Hvis du er aktiv med din hund fx på jagt, til canicross eller på vandreture, er det en rigtig god ide at have både et hjemmeapotek og en mindre førstehjælpstaske, som du har med, når I er ude.</p>

<h2>Hvad skal være i dit førstehjælpskit?</h2>
<ul>
<li><strong>Forbindsstoffer:</strong> Gaze, bandager, tape, saks</li>
<li><strong>Rensemidler:</strong> Desinfektionsmiddel, saltvand</li>
<li><strong>Værktøj:</strong> Pincet, termometer, pincet</li>
<li><strong>Medicin:</strong> Aktivt kul, øredråber, øjensalve</li>
<li><strong>Dokumentation:</strong> Din hunds journal, dyrlægens nummer</li>
</ul>

<h2>Hvorfor er det vigtigt?</h2>
<p>Et veludstyret førstehjælpskit kan være forskellen på liv og død i en akut situation. Det giver dig ro og mulighed for at handle hurtigt og effektivt, når din hund har brug for hjælp.</p>'
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
                'contact_email' => 'info@firstaiddog.dk',
                'content' => '<h1>Gode råd, guides og links</h1>

<p>Vil du lære mere om, hvordan du kan beskytte din hund og håndtere almindelige situationer? Her finder du praktiske guides og råd, der kan hjælpe dig med at skabe en sikker tilværelse for din firbenede ven.</p>

<h2>Årshjul - Sikkerhed gennem året</h2>

<h3>Forår</h3>
<ul>
<li><strong>Giftige planter:</strong> Lær at genkende de farligste forårsplanter</li>
<li><strong>Påske:</strong> Hold chokolade og påskeæg væk fra din hund</li>
<li><strong>Fodring:</strong> Sæsonens første græs kan skjule farer</li>
<li><strong>Vand:</strong> Smeltevand kan være koldt og farligt</li>
</ul>

<h3>Sommer</h3>
<ul>
<li><strong>Hedebølger:</strong> Tegn på overophedning og hvad du skal gøre</li>
<li><strong>Strandliv:</strong> Saltvand, sand og sol kan skade din hund</li>
<li><strong>Insekter:</strong> Bier, hvepse og myg - hvad gør du ved stik?</li>
<li><strong>Grillning:</strong> Hold din hund væk fra grill og varm mad</li>
</ul>

<h3>Efterår</h3>
<ul>
<li><strong>Løv:</strong> Faldne blade kan skjule farer</li>
<li><strong>Regn:</strong> Våde forhold og køligere vejr</li>
<li><strong>Svampe:</strong> Giftige svampe kan vokse i haven</li>
<li><strong>Mørke:</strong> Synlighed og reflekser bliver vigtige</li>
</ul>

<h3>Vinter</h3>
<ul>
<li><strong>Kulde:</strong> Frostskader og underkøling</li>
<li><strong>Salt:</strong> Vejsalt kan skade poterne</li>
<li><strong>Is:</strong> Farlige isflager og glatte overflader</li>
<li><strong>Mørke:</strong> Ekstra opmærksomhed på trafik</li>
</ul>

<h2>Almindelige nødsituationer og hvad du skal gøre</h2>

<h3>Din hund har spist noget giftigt</h3>
<p><strong>Symptomer:</strong> Kvalme, opkast, diarré, sløvhed, rysten<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Kald straks din dyrlæge</li>
<li>Prøv at identificere, hvad hunden har spist</li>
<li>Indfør ikke opkastning (medmindre dyrlægen siger det)</li>
<li>Tag hunden til dyrlægen hurtigst muligt</li>
</ol>

<h3>Din hund er blevet bidt</h3>
<p><strong>Symptomer:</strong> Sår, hævelse, smerter, rødme<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Rens såret grundigt med saltvand</li>
<li>Dæk såret med en ren bandage</li>
<li>Kontakt din dyrlæge</li>
<li>Hold øje med tegn på infektion</li>
</ol>

<h3>Din hund er halt</h3>
<p><strong>Symptomer:</strong> Humper, holder poten oppe, smerter<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Undersøg poten for synlige skader</li>
<li>Giv hunden ro</li>
<li>Kontakt dyrlægen hvis problemet varer</li>
<li>Undgå at lade hunden løbe eller lege</li>
</ol>

<h2>Præventive foranstaltninger</h2>
<p>Den bedste måde at beskytte din hund på er at være proaktiv:</p>
<ul>
<li>Hold din hund vaccineret og behandlet mod parasitter</li>
<li>Træn grundlæggende kommandoer</li>
<li>Brug sele og snor i trafikerede områder</li>
<li>Hold giftige stoffer væk fra din hund</li>
<li>Undersøg din hund regelmæssigt for skader eller ændringer</li>
</ul>

<p>Har du spørgsmål til vores guides eller har brug for personlig rådgivning? Kontakt os - vi er her for at hjælpe dig med at holde din hund sikker og sund.</p>'
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
