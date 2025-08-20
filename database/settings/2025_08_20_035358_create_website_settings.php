<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('website.phone_number', '+45 42 20 38 70');
        $this->migrator->add('website.email', 'kontakt@firstaiddog.dk');
        $this->migrator->add('website.footer_text', 'Din pålidelige partner i hundesikkerhed og førstehjælp. | Julie Pio Kragelund');
    }
};
