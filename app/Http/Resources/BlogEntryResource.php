<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogEntryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
            [
                'id' => $this->id,
                'title' => $this->title,
                'slug' => $this->slug,
                'content' => $this->content,
                'excerpt' => $this->excerpt,
                'tags' => TagResource::collection($this->tags)->resolve(),
                // 'tags' => $this->tags->map(function ($tag) {
                //     return [
                //         'id' => $tag->id,
                //         'name' => $tag->name,
                //         'slug' => $tag->slug,
                //     ];
                // }),

                'date' => $this->date,
                'read_time' => $this->calculateReadTime(),
                'status' => $this->status,
                'author' => [
                    'name' => $this->author->name,
                    'avatar' => $this->author->avatar ?? null,
                ],
                'featured_image' => $this->getFirstMediaUrl('featured_image'),
                'featured_image_preview' => $this->getFirstMediaUrl('featured_image', 'preview'),
                'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
                'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            ];

    }
}
