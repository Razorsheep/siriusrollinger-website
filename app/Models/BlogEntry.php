<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BlogEntry extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\BlogEntryFactory> */
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'category',
        'author_id',
        'date',
        'read_time',
        'status',
    ];

    protected $casts = [
        'content' => 'array',
    ];

    public static $statuses = [
        'draft' => 'Kladde',
        'published' => 'Udgivet',
    ];

    public $with = ['author'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('featured_image')
            ->singleFile();
        $this->addMediaCollection('images');
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('preview')
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getImageUrlAttribute()
    {
        return Storage::url($this->image);
    }

    public function getExcerptAttribute()
    {
        // Handle Tiptap content by extracting text from all nodes
        if (is_array($this->content)) {
            $text = '';
            
            // Helper function to recursively extract text from Tiptap nodes
            $extractText = function($node) use (&$extractText) {
                if (is_string($node)) return $node;
                if (isset($node['text'])) return $node['text'];
                if (isset($node['content']) && is_array($node['content'])) {
                    return implode(' ', array_map($extractText, $node['content']));
                }
                return '';
            };
            
            if (isset($this->content['content']) && is_array($this->content['content'])) {
                $text = implode(' ', array_map($extractText, $this->content['content']));
            }
            
            return Str::limit(strip_tags($text), 150);
        }
        
        // Handle string content
        if (is_string($this->content)) {
            return Str::limit(strip_tags($this->content), 150);
        }

        return '';
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
