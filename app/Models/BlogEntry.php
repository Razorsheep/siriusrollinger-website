<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class BlogEntry extends Model
{
    /** @use HasFactory<\Database\Factories\BlogEntryFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'category',
        'author_id',
        'date',
        'image',
        'read_time',
        'status',
    ];

    public static $statuses = [
        'draft' => 'Kladde',
        'published' => 'Udgivet',
    ];

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
        return Str::limit(strip_tags($this->content), 100);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
