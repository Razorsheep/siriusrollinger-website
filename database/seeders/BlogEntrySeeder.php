<?php

namespace Database\Seeders;

use App\Models\BlogEntry;
use Spatie\Tags\Tag;
use Illuminate\Database\Seeder;

class BlogEntrySeeder extends Seeder
{
    public function run(): void
    {
        // Create or find tags
        $firstAidTag = Tag::findOrCreate('Førstehjælp');
        $equipmentTag = Tag::findOrCreate('Udstyr');
        $workingDogTag = Tag::findOrCreate('Arbejdshunde');
        $safetyTag = Tag::findOrCreate('Sikkerhed');
        $healthTag = Tag::findOrCreate('Sundhed');

        $blogEntry1 = BlogEntry::create([
            'title' => 'Førstehjælp til hunde - hvad du skal vide',
            'slug' => 'forstehjalp-til-hunde-hvad-du-skal-vide',
            'content' => 'Førstehjælp til hunde kan være afgørende i en nødsituation. Det er vigtigt at være forberedt og vide, hvad du skal gøre, når din hund har brug for hjælp.

Her er de grundlæggende principper for førstehjælp til hunde:

1. Vurder situationen
- Er der fare for dig selv?
- Er hunden ved bevidsthed?
- Er der åbenlyse skader?

2. Kontakt dyrlæge
- Ring altid til en dyrlæge først
- Følg deres rådgivning
- Vær klar til at transportére hunden

3. Grundlæggende førstehjælp
- Hold hunden rolig og varm
- Undgå at give mad eller vand
- Hvis hunden er bevidstløs, tjek vejrtrækning

Husk: Den bedste førstehjælp er at forhindre ulykker. Hold din hund under opsyn og fjern potentielle farer fra din hverdag.',
            'author_id' => 1,
            'date' => '2025-08-20',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 8
        ]);
        $blogEntry1->syncTags([$firstAidTag, $healthTag]);

        $blogEntry2 = BlogEntry::create([
            'title' => 'Hvordan håndterer du en hund i chok?',
            'slug' => 'hvordan-handterer-du-en-hund-i-chok',
            'content' => 'Chok er en livstruende tilstand, der kan opstå hos hunde som følge af alvorlig skade, sygdom eller blodtab. Det er afgørende at kunne genkende tegnene og vide, hvad du skal gøre.

Tegn på chok inkluderer:
- Hurtig, overfladisk vejrtrækning
- Svag, hurtig puls
- Bleg eller blålig gumme
- Kold, klam hud
- Svaghed og lethargi
- Bevidstløshed

Hvis du mistænker chok, skal du:
1. Kontakt øjeblikkeligt en dyrlæge
2. Hold hunden varm og rolig
3. Løft hunden forsigtigt hvis muligt
4. Undgå at give mad eller vand
5. Transportér til dyrlæge så hurtigt som muligt

Husk: Chok er en nødsituation der kræver øjeblikkelig professionel hjælp.',
            'author_id' => 1,
            'date' => '2025-08-19',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 5
        ]);
        $blogEntry2->syncTags([$firstAidTag, $healthTag]);

        $blogEntry3 = BlogEntry::create([
            'title' => 'Førstehjælpskassen til din hund - hvad skal der være i?',
            'slug' => 'forstehjalpskassen-til-din-hund',
            'content' => 'En veludstyret førstehjælpskasse kan være afgørende i en nødsituation. Her er hvad din hunds førstehjælpskasse skal indeholde:

Grundlæggende udstyr:
- Sterile bandager og kompresser
- Sårrens og antiseptisk creme
- Plaster og tape
- Saks og pincet
- Digital termometer
- Latexhandsker

Medicin:
- Øjenskyl
- Smerte- og febermedicin (kun efter dyrlægeanbefaling)
- Antihistaminer mod allergiske reaktioner

Dokumentation:
- Din hunds vaccinationsbog
- Dyrlægens kontaktoplysninger
- Liste over eventuelle allergier

Opbevar kassen på et køligt, tørt sted og tjek indholdet regelmæssigt for udløbsdatoer.',
            'author_id' => 1,
            'date' => '2025-08-18',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 6
        ]);
        $blogEntry3->syncTags([$firstAidTag, $equipmentTag]);

        $blogEntry4 = BlogEntry::create([
            'title' => 'Almindelige skader hos arbejdshunde',
            'slug' => 'almindelige-skader-hos-arbejdshunde',
            'content' => 'Arbejdshunde er særligt udsatte for visse typer skader på grund af deres intense træning og arbejde. Her er de mest almindelige skader og hvordan du kan forebygge dem:

Pote- og klosår:
- Hold kløer korte og trimmede
- Undersøg poter efter hver træning
- Brug beskyttelsessko hvis nødvendigt

Muskel- og ledskader:
- Opvarmning og nedkøling er afgørende
- Gradvis opbygning af træningsintensitet
- Regelmæssig massage og stretching

Varme- og koldeskader:
- Undgå træning i ekstreme temperaturer
- Sørg for tilstrækkelig vand og skygge
- Brug beskyttelsestøj i koldt vejr

Husk at arbejdshunde ofte ignorerer smerter, så det er dit ansvar at være opmærksom på tegn på skade.',
            'author_id' => 1,
            'date' => '2025-08-17',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 7
        ]);
        $blogEntry4->syncTags([$workingDogTag, $healthTag]);

        $blogEntry5 = BlogEntry::create([
            'title' => 'Sikkerhed i hjemmet - hvordan beskytter du din hund?',
            'slug' => 'sikkerhed-i-hjemmet-hvordan-beskytter-du-din-hund',
            'content' => 'Dit hjem kan indeholde mange skjulte farer for din hund. Her er hvordan du kan gøre det sikkert:

Køkken:
- Hold rengøringsmidler væk fra hunde
- Lås skabe med farlige stoffer
- Undgå at lade mad stå fremme

Stue:
- Skjul elektriske ledninger
- Fjern små genstande der kan sluges
- Sørg for at planter ikke er giftige

Have:
- Tjek hegn for huller
- Undgå giftige planter
- Hold kemikalier væk fra hunde

Badeværelse:
- Lås medicinskab
- Hold toiletsæde lukket
- Fjern rengøringsmidler

Husk: Det er bedre at være for sikker end for usikker når det gælder din hunds sikkerhed.',
            'author_id' => 1,
            'date' => '2025-08-16',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 5
        ]);
        $blogEntry5->syncTags([$safetyTag, $healthTag]);
    }
}
