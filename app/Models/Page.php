<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Page extends Model implements HasMedia
{
    use HasSlug, InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'author_id',
        'status',
        'page_type',
        'order_column',

        'next_event_title',
        'next_event_date',
        'next_event_time',
        'next_event_location',
        'next_event_description',
        'next_event_registration_link',

        'photos',
        'contact_phone',
        'contact_email',
        'contact_website',
    ];

    protected $casts = [
        'content' => 'array',
        'photos' => 'array',
    ];

    public static $statuses = [
        'draft' => 'Kladde',
        'published' => 'Udgivet',
    ];

    public static $types = [
        'default' => 'Standard Side',
        'service' => 'Ydelse',
    ];

    public $with = ['media'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images');
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('preview')
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get the next event information as a structured array
     */
    public function getNextEventAttribute()
    {
        if (! $this->next_event_title) {
            return null;
        }

        return [
            'title' => $this->next_event_title,
            'date' => $this->next_event_date,
            'time' => $this->next_event_time,
            'location' => $this->next_event_location,
            'description' => $this->next_event_description,
            'registration_link' => $this->next_event_registration_link,
        ];
    }

    /**
     * Get the contact information as a structured array
     */
    public function getContactInfoAttribute()
    {
        if (! $this->contact_phone && ! $this->contact_email && ! $this->contact_website) {
            return null;
        }

        return [
            'phone' => $this->contact_phone,
            'email' => $this->contact_email,
            'website' => $this->contact_website,
        ];
    }
}
