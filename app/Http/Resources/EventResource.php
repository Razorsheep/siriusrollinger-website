<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
            'start_time' => $this->start_time,
            'end_time' => $this->end_time,
            'location_name' => $this->location_name,
            'location_description' => $this->location_description,
            'image' => config('app.url').'/'.$this->image,
            'status' => $this->status,
            'min_participants' => $this->min_participants,
            'max_participants' => $this->max_participants,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

    }
}
