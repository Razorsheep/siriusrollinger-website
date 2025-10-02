<?php

namespace Database\Seeders;

use App\Models\BlogEntry;
use Illuminate\Database\Seeder;
use Spatie\Tags\Tag;

class BlogEntrySeeder extends Seeder
{
    public function run(): void
    {
        // Create or find tags
        $siriusRollingerTag = Tag::findOrCreate('Sirius Rollinger');
        $siriusJuniordageTag = Tag::findOrCreate('Sirius Juniordage');
        $equipmentTag = Tag::findOrCreate('Udstyr');

        $blogEntry1 = BlogEntry::create([
            'title' => 'Sirius Juniordag 2023',
            'slug' => 'sirius-juniordag-2023',
            'content' => [
                'type' => 'doc',
                'content' => [
                    [
                        'type' => 'heading',
                        'attrs' => ['level' => 2],
                        'content' => [
                            ['type' => 'text', 'text' => 'Sirius Juniordag 2023.'],
                        ],
                    ],
                    [
                        'type' => 'paragraph',
                        'content' => [
                            ['type' => 'text', 'text' => 'Sirius Juniordag 2023 var en uforglemmelig dag fyldt med fællesskab, leg og læring i naturen. Børn og unge samledes for at styrke både deres mentale og fysiske trivsel gennem sjove aktiviteter og inspirerende workshops. Dagen bød på alt fra samarbejdslege i skoven til kreative udfordringer, hvor alle kunne deltage uanset alder og erfaring.'],
                        ],
                    ],
                    [
                        'type' => 'paragraph',
                        'content' => [
                            ['type' => 'text', 'text' => 'Arrangementet blev afholdt i smukke omgivelser, hvor naturen dannede rammen om nye venskaber og masser af grin. Vores dygtige instruktører sørgede for, at alle følte sig velkomne og trygge, og der var fokus på at skabe et inkluderende miljø, hvor alle kunne være med.'],
                        ],
                    ],
                    [
                        'type' => 'paragraph',
                        'content' => [
                            ['type' => 'text', 'text' => 'Tak til alle deltagere, frivillige og samarbejdspartnere for at gøre Sirius Juniordag 2023 til en stor succes! Vi glæder os allerede til næste år, hvor vi igen samles om fællesskab og oplevelser i naturen.'],
                        ],
                    ],
                ],
            ],
            'author_id' => 1,
            'date' => '2025-08-20',
            'image' => '/images/logo.png',
            'status' => 'published',
            'read_time' => 8,
        ]);
        $blogEntry1->syncTags([$siriusRollingerTag, $siriusJuniordageTag]);
    }
}
