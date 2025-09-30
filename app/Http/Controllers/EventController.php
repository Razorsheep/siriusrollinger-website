<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::where('status', 'published')->get();

        return Inertia::render('events/index', [
            'events' => EventResource::collection($events)->resolve(),
        ]);
    }

    public function show(Event $event)
    {
        if ($event->status !== 'published') {
            abort(404);
        }

        return Inertia::render('events/show', [
            'event' => new EventResource($event)->resolve(),
        ]);
    }
}
