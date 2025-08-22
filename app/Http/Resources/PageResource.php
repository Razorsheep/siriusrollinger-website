<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => $this->content,
            'page_type' => $this->page_type,
            'status' => $this->status,
            'next_event' => [
                'title' => $this->next_event_title,
                'date' => $this->next_event_date,
                'time' => $this->next_event_time,
                'location' => $this->next_event_location,
                'description' => $this->next_event_description,
                'registration_link' => $this->next_event_registration_link,
            ],
            'images' => MediaResource::collection($this->getMedia('images'))->resolve(),
            'contact_info' => [
                'phone' => $this->contact_phone,
                'email' => $this->contact_email,
                'website' => $this->contact_website,
            ],
        ];

    }
}
