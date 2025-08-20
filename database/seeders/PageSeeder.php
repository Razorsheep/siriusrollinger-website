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
                'content' => '<h2>Førstehjælpskurser til din hund</h2>

<p>Vil du være forberedt på at håndtere nødsituationer med din hund? Vores praktiske førstehjælpskurser giver dig de vigtigste færdigheder og viden til at redde liv, når det betyder mest.</p>

<h3>Hvad lærer du på kurset?</h3>

<ul>
<li><strong>Grundlæggende førstehjælp:</strong> ABC-principperne (Airway, Breathing, Circulation) for hunde</li>
<li><strong>Hjertemassage og kunstig åndedræt:</strong> Teknikker til at genoplive din hund</li>
<li><strong>Forbandning og blødningskontrol:</strong> Håndtering af sår og blødninger</li>
<li><strong>Chok og bevidstløshed:</strong> Genkendelse og behandling</li>
<li><strong>Forgiftning:</strong> Symptomer og førstehjælp ved forgiftning</li>
<li><strong>Brændsår og varmeskader:</strong> Akut behandling</li>
<li><strong>Frostskader:</strong> Håndtering i kolde omgivelser</li>
</ul>

<h3>Kursusformat</h3>

<p>Vores kurser afholdes i små grupper (maks. 8 deltagere) for at sikre personlig opmærksomhed og praktisk øvelse. Hvert kursus varer 4 timer og inkluderer:</p>

<ul>
<li>Teoretisk undervisning med visuelle materialer</li>
<li>Praktiske øvelser på hundedukker</li>
<li>Case-studier fra virkelige situationer</li>
<li>Kursusmateriale og certifikat</li>
<li>Kaffe og kage undervejs</li>
</ul>

<h3>Praktisk information</h3>

<p><strong>Pris:</strong> 795 kr. per person<br>
<strong>Varighed:</strong> 4 timer<br>
<strong>Sted:</strong> Vores kursuslokale i [by] eller hos dig (for grupper på 6+ personer)<br>
<strong>Datoer:</strong> Se vores kalender for kommende kurser</p>

<h3>Book dit kursus</h3>

<p>Kontakt os for at booke plads på et af vores kommende kurser eller for at arrangere et privat kursus for din familie eller vennegruppe.</p>

<p><em>Husk: Den bedste førstehjælp er den, du aldrig behøver at bruge. Men når du har brug for det, er det uundværligt at vide, hvad du skal gøre.</em></p>',
            ],
            [
                'title' => 'Kurser for Dyrlæger',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'content' => '<h2>Førstehjælpskurser til din hund</h2>

<p>Vil du være forberedt på at håndtere nødsituationer med din hund? Vores praktiske førstehjælpskurser giver dig de vigtigste færdigheder og viden til at redde liv, når det betyder mest.</p>

<h3>Hvad lærer du på kurset?</h3>

<ul>
<li><strong>Grundlæggende førstehjælp:</strong> ABC-principperne (Airway, Breathing, Circulation) for hunde</li>
<li><strong>Hjertemassage og kunstig åndedræt:</strong> Teknikker til at genoplive din hund</li>
<li><strong>Forbandning og blødningskontrol:</strong> Håndtering af sår og blødninger</li>
<li><strong>Chok og bevidstløshed:</strong> Genkendelse og behandling</li>
<li><strong>Forgiftning:</strong> Symptomer og førstehjælp ved forgiftning</li>
<li><strong>Brændsår og varmeskader:</strong> Akut behandling</li>
<li><strong>Frostskader:</strong> Håndtering i kolde omgivelser</li>
</ul>

<h3>Kursusformat</h3>

<p>Vores kurser afholdes i små grupper (maks. 8 deltagere) for at sikre personlig opmærksomhed og praktisk øvelse. Hvert kursus varer 4 timer og inkluderer:</p>

<ul>
<li>Teoretisk undervisning med visuelle materialer</li>
<li>Praktiske øvelser på hundedukker</li>
<li>Case-studier fra virkelige situationer</li>
<li>Kursusmateriale og certifikat</li>
<li>Kaffe og kage undervejs</li>
</ul>

<h3>Praktisk information</h3>

<p><strong>Pris:</strong> 795 kr. per person<br>
<strong>Varighed:</strong> 4 timer<br>
<strong>Sted:</strong> Vores kursuslokale i [by] eller hos dig (for grupper på 6+ personer)<br>
<strong>Datoer:</strong> Se vores kalender for kommende kurser</p>

<h3>Book dit kursus</h3>

<p>Kontakt os for at booke plads på et af vores kommende kurser eller for at arrangere et privat kursus for din familie eller vennegruppe.</p>

<p><em>Husk: Den bedste førstehjælp er den, du aldrig behøver at bruge. Men når du har brug for det, er det uundværligt at vide, hvad du skal gøre.</em></p>',
            ],
            [
                'title' => 'Foredrag',
                'slug' => 'foredrag',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'content' => '<h2>Engagerende foredrag om hundesikkerhed</h2>

<p>Vil du lære mere om, hvordan du kan beskytte din hund mod almindelige farer og nødsituationer? Vores foredrag giver dig værdifuld viden på en underholdende og letforståelig måde.</p>

<h3>Populære foredragstemaer</h3>

<h4>1. "Sikker sommer med din hund"</h4>
<p>Lær om de skjulte farer om sommeren: hedebølger, giftige planter, insektstik og strandliv. Få praktiske tips til at holde din hund sikker og sund i varmen.</p>

<h4>2. "Julen - en magisk men farlig tid"</h4>
<p>Opdag hvorfor julen kan være risikabelt for hunde: chokolade, juletræer, lys og dekorationer. Lær at skabe en hundesikker juleatmosfære.</p>

<h4>3. "Førstehjælp i hjemmet"</h4>
<p>Hvad skal du have i din førstehjælpskasse? Hvordan håndterer du almindelige hjemmeulykker? Få praktiske råd til at forberede dig på det uventede.</p>

<h4>4. "Hundesikker have og terrasse"</h4>
<p>Gør din have til et sikkert paradis for din hund. Lær om giftige planter, sikre hegn og andre vigtige sikkerhedsforanstaltninger.</p>

<h3>Foredrag for forskellige målgrupper</h3>

<ul>
<li><strong>Hundeejere:</strong> Praktiske råd og tips til daglig brug</li>
<li><strong>Familier med børn:</strong> Særlige overvejelser når børn og hunde lever sammen</li>
<li><strong>Seniorhundeejere:</strong> Tilpasninger for ældre hunde</li>
<li><strong>Nye hundeejere:</strong> Grundlæggende sikkerhed og forberedelse</li>
</ul>

<h3>Booking af foredrag</h3>

<p>Vi kan afholde foredrag på:</p>

<ul>
<li>Hundeklubber og foreninger</li>
<li>Dyrlægeklinikker</li>
<li>Pet shops og hundebutikker</li>
<li>Private arrangementer</li>
<li>Virksomhedsarrangementer</li>
<li>Skoler og daginstitutioner</li>
</ul>

<h3>Praktisk information</h3>

<p><strong>Varighed:</strong> 45-90 minutter (tilpasses efter behov)<br>
<strong>Pris:</strong> Fra 1.500 kr. (afhænger af lokation og antal deltagere)<br>
<strong>Udstyr:</strong> Vi medbringer alt nødvendigt udstyr og materialer<br>
<strong>Gruppestørrelse:</strong> 5-100 deltagere</p>

<h3>Kontakt os</h3>

<p>Kontakt os for at diskutere dit foredrag og få et tilbud tilpasset dine behov og budget.</p>

<p><em>Vores foredrag er ikke kun informative - de er også underholdende og inspirerende. Du går hjem med ny viden og motivation til at gøre din hunde tilværelse sikrere.</em></p>',
            ],
            [
                'title' => 'Førstehjælpsgrej',
                'slug' => 'forestehjaelpsgrej',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'content' => '<h2>Førstehjælpsgrej - Vær forberedt på alt</h2>

<p>En veludstyret førstehjælpskasse kan være forskellen mellem liv og død for din hund. Vi tilbyder professionelle førstehjælpskasser og enkeltstående produkter, der er udvalgt med omhu til at håndtere de mest almindelige nødsituationer.</p>

<h3>Komplette førstehjælpskasser</h3>

<h4>Basis førstehjælpskasse - 495 kr.</h4>
<p>Perfekt til små hunde og nye hundeejere. Indeholder de mest essentielle produkter:</p>
<ul>
<li>Sterile kompresser og bandager</li>
<li>Antiseptisk rengøringsmiddel</li>
<li>Gummihandsker og saks</li>
<li>Pincet og termometer</li>
<li>Førstehjælpsmanual</li>
<li>Kontaktoplysninger til dyrlæge</li>
</ul>

<h4>Professionel førstehjælpskasse - 895 kr.</h4>
<p>Omfattende udstyr til store hunde og erfarne hundeejere:</p>
<ul>
<li>Alt fra basis-kassen</li>
<li>Ekstra bandagematerialer</li>
<li>Blødningskontrolprodukter</li>
<li>Kunstig åndedrætsmaske</li>
<li>Hjertemassage-podning</li>
<li>Førstehjælpsapp</li>
<li>Portabel bærepose</li>
</ul>

<h4>Premium førstehjælpskasse - 1.295 kr.</h4>
<p>Komplet udstyr til professionelle og meget aktive hundeejere:</p>
<ul>
<li>Alt fra professionel-kassen</li>
<li>Defibrillator (AED) til hunde</li>
<li>Sauerstoffbehandling</li>
<li>Avancerede bandageringsteknikker</li>
<li>Komplet sæt til genoplivning</li>
<li>Online kursus inkluderet</li>
</ul>

<h3>Enkeltstående produkter</h3>

<h4>Bandagematerialer</h4>
<ul>
<li>Sterile kompresser (25 kr.)</li>
<li>Elastiske bandager (45 kr.)</li>
<li>Selvhæftende bandager (35 kr.)</li>
<li>Gaze (30 kr.)</li>
<li>Tejp (40 kr.)</li>
</ul>

<h4>Rengøring og desinfektion</h4>
<ul>
<li>Antiseptisk rengøringsmiddel (55 kr.)</li>
<li>Sterile vådservietter (25 kr.)</li>
<li>Jodopløsning (65 kr.)</li>
<li>Salineopløsning (35 kr.)</li>
</ul>

<h4>Værktøjer og udstyr</h4>
<ul>
<li>Førstehjælpssaks (75 kr.)</li>
<li>Pincet (45 kr.)</li>
<li>Digital termometer (120 kr.)</li>
<li>Gummihandsker (15 kr./par)</li>
<li>Førstehjælpsmanual (95 kr.)</li>
</ul>

<h3>Specialprodukter</h3>

<h4>Hjertemassage-podning</h4>
<p>Specialsnydt til hjertemassage på hunde. Giver den rette dybde og frekvens. Pris: 180 kr.</p>

<h4>Kunstig åndedrætsmaske</h4>
<p>Hygiejnisk maske til mund-til-næse genoplivning. Pris: 65 kr.</p>

<h4>Blødningskontrolprodukter</h4>
<p>Hæmostatiske produkter til hurtig blødningskontrol. Pris: 95 kr.</p>

<h4>Portabel bærepose</h4>
<p>Letvægts bærepose til transport af skadede hunde. Pris: 145 kr.</p>

<h3>Bestilling og levering</h3>

<p>Alle produkter kan bestilles online eller telefonisk. Vi tilbyder:</p>
<ul>
<li>Gratis levering ved køb over 500 kr.</li>
<li>Levering inden for 1-3 hverdage</li>
<li>30 dages returret</li>
<li>Gratis rådgivning ved køb</li>
</ul>

<h3>Kurser i brug af udstyr</h3>

<p>Køber du en af vores førstehjælpskasser, får du gratis adgang til et 30-minutters online kursus om, hvordan du bruger udstyret korrekt.</p>

<h3>Kontakt os</h3>

<p>Har du spørgsmål til vores produkter eller har brug for hjælp til at vælge den rigtige førstehjælpskasse? Kontakt os for personlig rådgivning.</p>

<p><em>Husk: Det bedste udstyr er det, du ved, hvordan du bruger. Invester i både udstyr og viden.</em></p>',
            ],
            [
                'title' => 'Guides og gode råd',
                'slug' => 'guides-og-gode-raad',
                'author_id' => 1,
                'status' => 'published',
                'page_type' => 'service',
                'content' => '<h2>Guides og gode råd til hundesikkerhed</h2>

<p>Vil du lære mere om, hvordan du kan beskytte din hund og håndtere almindelige situationer? Her finder du praktiske guides og råd, der kan hjælpe dig med at skabe en sikker tilværelse for din firbenede ven.</p>

<h3>Årshjul - Sikkerhed gennem året</h3>

<h4>Forår</h4>
<ul>
<li><strong>Giftige planter:</strong> Lær at genkende de farligste forårsplanter</li>
<li><strong>Påske:</strong> Hold chokolade og påskeæg væk fra din hund</li>
<li><strong>Fodring:</strong> Sæsonens første græs kan skjule farer</li>
<li><strong>Vand:</strong> Smeltevand kan være koldt og farligt</li>
</ul>

<h4>Sommer</h4>
<ul>
<li><strong>Hedebølger:</strong> Tegn på overophedning og hvad du skal gøre</li>
<li><strong>Strandliv:</strong> Saltvand, sand og sol kan skade din hund</li>
<li><strong>Insekter:</strong> Bier, hvepse og myg - hvad gør du ved stik?</li>
<li><strong>Grillning:</strong> Hold din hund væk fra grill og varm mad</li>
</ul>

<h4>Efterår</h4>
<ul>
<li><strong>Løv:</strong> Faldne blade kan skjule farer</li>
<li><strong>Regn:</strong> Våde forhold og køligere vejr</li>
<li><strong>Svampe:</strong> Giftige svampe kan vokse i haven</li>
<li><strong>Mørke:</strong> Synlighed og reflekser bliver vigtige</li>
</ul>

<h4>Vinter</h4>
<ul>
<li><strong>Kulde:</strong> Frostskader og underkøling</li>
<li><strong>Salt:</strong> Vejsalt kan skade poterne</li>
<li><strong>Is:</strong> Farlige isflager og glatte overflader</li>
<li><strong>Mørke:</strong> Ekstra opmærksomhed på trafik</li>
</ul>

<h3>Almindelige nødsituationer og hvad du skal gøre</h3>

<h4>Din hund har spist noget giftigt</h4>
<p><strong>Symptomer:</strong> Kvalme, opkast, diarré, sløvhed, rysten<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Kald straks din dyrlæge</li>
<li>Prøv at identificere, hvad hunden har spist</li>
<li>Indfør ikke opkastning (medmindre dyrlægen siger det)</li>
<li>Tag hunden til dyrlægen hurtigst muligt</li>
</ol>

<h4>Din hund er blevet bidt af en anden hund</h4>
<p><strong>Symptomer:</strong> Sår, blødning, smerter, hævelse<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Kontroller om hunden er i fare</li>
<li>Rengør sår med rent vand</li>
<li>Dæk sår med sterilt materiale</li>
<li>Kontakt dyrlæge for vurdering</li>
</ol>

<h4>Din hund er faldet og kan ikke rejse sig</h4>
<p><strong>Symptomer:</strong> Kan ikke bevæge sig, smerter, angst<br>
<strong>Hvad du skal gøre:</strong></p>
<ol>
<li>Rør ikke ved hunden (kan forværre skaden)</li>
<li>Kald straks dyrlæge</li>
<li>Hvis hunden er i fare, bær den forsigtigt</li>
<li>Hold hunden varm og rolig</li>
</ol>

<h3>Forebyggelse - Bedre end behandling</h3>

<h4>Hjemmesikkerhed</h4>
<ul>
<li><strong>Køkken:</strong> Hold giftige fødevarer væk</li>
<li><strong>Badeværelse:</strong> Lås medicin og rengøringsmidler væk</li>
<li><strong>Stue:</strong> Sikre kabler og farlige genstande</li>
<li><strong>Have:</strong> Plant ikke giftige planter</li>
</ul>

<h4>Transport og rejser</h4>
<ul>
<li><strong>Bil:</strong> Brug altid sikkerhedssele eller transportboks</li>
<li><strong>Gåture:</strong> Hold hunden i snor nær trafik</li>
<li><strong>Offentlig transport:</strong> Tjek regler før rejse</li>
<li><strong>Ferie:</strong> Planlæg for hundesikkerhed</li>
</ul>

<h4>Socialisering og træning</h4>
<ul>
<li><strong>Puppy:</strong> Start tidligt med grundlæggende kommandoer</li>
<li><strong>Voksen:</strong> Oprethold træning gennem hele livet</li>
<li><strong>Ældre:</strong> Tilpas træning til alder og evner</li>
<li><strong>Reaktivitet:</strong> Arbejd med professionel træner</li>
</ul>

<h3>Nødkontakter - Gem dem et sikkert sted</h3>

<p><strong>Din dyrlæge:</strong> [Indsæt nummer]<br>
<strong>Nøddyrlæge:</strong> [Indsæt nummer]<br>
<strong>Dyreværnet:</strong> [Indsæt nummer]<br>
<strong>Giftinformationscenter:</strong> [Indsæt nummer]</p>

<h3>Førstehjælpskasse - Hvad skal du have?</h3>

<p>En grundlæggende førstehjælpskasse bør indeholde:</p>
<ul>
<li>Sterile kompresser og bandager</li>
<li>Antiseptisk rengøringsmiddel</li>
<li>Gummihandsker og saks</li>
<li>Pincet og termometer</li>
<li>Førstehjælpsmanual</li>
<li>Kontaktoplysninger</li>
</ul>

<h3>Kontakt os</h3>

<p>Har du spørgsmål til vores guides eller har brug for personlig rådgivning? Kontakt os - vi er her for at hjælpe dig med at holde din hund sikker og sund.</p>

<p><em>Husk: Den bedste førstehjælp er den, du aldrig behøver at bruge. Men når du har brug for det, er det uundværligt at vide, hvad du skal gøre.</em></p>',
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
