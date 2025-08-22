<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogEntryResource;
use App\Http\Resources\TagResource;
use App\Services\SeoService;
use App\Settings\WebsiteSettings;
use App\Models\BlogEntry;
use App\Models\Page;
use Spatie\Tags\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogEntries = BlogEntry::where('status', 'published')->get();
        $tags = TagResource::collection(Tag::all())->resolve();
        
        return Inertia::render('blog/index', [
            'blogEntries' => BlogEntryResource::collection($blogEntries)->resolve(),
            'tags' => $tags,
            'seo' => SeoService::forStoriesIndex(),
        ]);
    }

    public function show(BlogEntry $blogEntry)
    {
        if($blogEntry->status != 'published')
            abort(404);

        return Inertia::render('blog/show', [
            'blogEntry' => new BlogEntryResource($blogEntry)->resolve(),
            'seo' => SeoService::forBlog($blogEntry->toArray()),
        ]);
    }
}
