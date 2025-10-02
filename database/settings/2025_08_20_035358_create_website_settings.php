<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('website.phone_number', '+45 42 20 38 70');
        $this->migrator->add('website.email', 'kontakt@siriusrollinger.dk');
        $this->migrator->add('website.footer_text', 'Mental og fysisk trivsel for børn og unge gennem fællesskab og natur. | Julie Pio Kragelund og Rasmus Beck');
        $this->migrator->add('website.hero_images', []);
        $this->migrator->add('website.hero_title', 'Sirius');
        $this->migrator->add('website.hero_text', 'Mental og fysisk trivsel for børn og unge gennem fællesskab og natur');
        $this->migrator->add('website.about_title', 'Om Sirius Rollinger');

        $this->migrator->add('website.about_text', [
            'type' => 'doc',
            'content' => [
                [
                    'type' => 'heading',
                    'attrs' => ['level' => 2],
                    'content' => [
                        ['type' => 'text', 'text' => 'Om Siriusrollinger og Sirius Juniordag'],
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'content' => [
                        ['type' => 'text', 'text' => 'Foreningen Siriusrollinger og Sirius Juniordagene blev skabt af Julie Pio Kragelund og Rasmus Beck.'],
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'content' => [
                        ['type' => 'text', 'text' => 'Julie har været dyrlæge for Slædepatruljen Sirius siden 2012 og kender patruljen rigtig godt. Julie er mor til Konrad, Mads og Svend.'],
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'content' => [
                        ['type' => 'text', 'text' => 'Rasmus er IT-chef og er, og har i mange år været, meget engageret i spejderlivet. Rasmus er far til Molly og Wilfred.'],
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'content' => [
                        ['type' => 'text', 'text' => 'Julie og Rasmus deltager alle Sirius Juniordagene, og hver gang deltager der også to tidligere Fupper (som betyder slædepatruljefolk).'],
                    ],
                ],
            ],
        ]);
    }
};
