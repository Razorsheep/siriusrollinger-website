<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'content' => [
                'type' => 'doc',
                'content' => [
                    [
                        'type' => 'paragraph',
                        'content' => [
                            [
                                'type' => 'text',
                                'text' => $this->faker->paragraph,
                            ],
                        ],
                    ],
                ],
            ],
            'start_time' => $this->faker->dateTime,
            'end_time' => $this->faker->dateTime,
            'location_name' => $this->faker->company,
            'location_description' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl,
            'status' => $this->faker->randomElement(Event::$statuses),
            'min_participants' => $this->faker->numberBetween(1, 10),
            'max_participants' => $this->faker->numberBetween(1, 10),
        ];
    }
}
