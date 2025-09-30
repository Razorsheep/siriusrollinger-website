<?php

namespace Database\Factories;

use App\Models\BlogEntry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Spatie\Tags\Tag;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BlogEntry>
 */
class BlogEntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(6),
            'slug' => fake()->slug(),
            'content' => [
                'type' => 'doc',
                'content' => [
                    [
                        'type' => 'paragraph',
                        'content' => [
                            [
                                'type' => 'text',
                                'text' => fake()->paragraphs(3, true),
                            ],
                        ],
                    ],
                ],
            ],
            'excerpt' => fake()->paragraph(),
            'author_id' => User::factory(),
            'date' => fake()->date(),
            'read_time' => fake()->numberBetween(3, 15),
            'status' => fake()->randomElement(['draft', 'published']),
        ];
    }

    /**
     * Indicate that the blog entry is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
        ]);
    }

    /**
     * Attach random tags to the blog entry.
     */
    public function withTags(): static
    {
        return $this->afterCreating(function (BlogEntry $blogEntry) {
            $tags = Tag::inRandomOrder()->limit(fake()->numberBetween(1, 3))->get();
            $blogEntry->syncTags($tags);
        });
    }
}
