<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Page extends Model
{
    use HasSlug;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'image',
        'author_id',
        'menu_title',
        'status',
        'page_type',
        'order_column',
    ];

    public static $statuses = [
        'draft' => 'Kladde',
        'published' => 'Udgivet',
    ];

    public static $types = [
        'page' => 'Side',
        'service' => 'Ydelse',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
