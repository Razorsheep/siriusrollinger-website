<?php

namespace App\Services;

class SeoService
{
    /**
     * Generate SEO data for a course page
     */
    public static function forCourse(array $course): array
    {
        $title = $course['title'] ?? '';
        $subtitle = $course['subtitle'] ?? '';
        $description = is_array($course['description']) ? self::extractTextFromJson($course['description']) : ($course['description'] ?? '');
        
        return [
            'meta_title' => self::generateMetaTitle($title, $subtitle),
            'meta_description' => self::generateMetaDescription($description, $subtitle),
            'meta_keywords' => self::generateKeywords($course),
            'og_title' => self::generateOgTitle($title, $subtitle),
            'og_description' => self::generateOgDescription($description, $subtitle),
            'og_type' => 'course',
            'og_image' => self::getCourseImage($course),
            'twitter_card' => 'summary_large_image',
            'twitter_title' => self::generateTwitterTitle($title, $subtitle),
            'twitter_description' => self::generateTwitterDescription($description, $subtitle),
            'twitter_image' => self::getCourseImage($course),
            'author' => 'Fjeldgruppen',
            'publisher' => 'Fjeldgruppen',
            'category' => 'Outdoor Education',
            'geo_region' => 'DK',
            'geo_placename' => 'Denmark',
            'robots_index' => true,
            'robots_follow' => true,
            'canonical_url' => request()->url(),
        ];
    }

    /**
     * Generate structured data (Schema.org) for a course
     */
    public static function generateStructuredData(array $course): array
    {
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'Course',
            'name' => $course['title'] ?? '',
            'description' => is_array($course['description']) ? self::extractTextFromJson($course['description']) : ($course['description'] ?? ''),
            'provider' => [
                '@type' => 'Organization',
                'name' => 'Fjeldgruppen',
                'url' => config('app.url'),
            ],
            'educationalLevel' => ucfirst($course['level'] ?? 'beginner'),
            'timeRequired' => self::calculateCourseDuration($course),
            'coursePrerequisites' => self::extractPrerequisites($course),
        ];

        // Add instructor if available
        if (isset($course['owner']) && $course['owner']) {
            $structuredData['instructor'] = [
                '@type' => 'Person',
                'name' => $course['owner']['name'] ?? 'Fjeldgruppen Instructor',
            ];
        }

        // Add course subjects if available
        if (isset($course['course_subjects']) && is_array($course['course_subjects']) && !empty($course['course_subjects'])) {
            $structuredData['about'] = self::extractTextFromJson($course['course_subjects']);
        }

        // Add pricing information
        if (isset($course['price']) && $course['price'] > 0) {
            $structuredData['offers'] = [
                '@type' => 'Offer',
                'price' => $course['price'],
                'priceCurrency' => $course['currency'] ?? 'DKK',
                'availability' => 'https://schema.org/InStock',
            ];
        }

        // Add upcoming events if available
        if (isset($course['events']['data']) && !empty($course['events']['data'])) {
            $structuredData['hasCourseInstance'] = collect($course['events']['data'])->map(function ($event) {
                return [
                    '@type' => 'CourseInstance',
                    'name' => $event['title'] ?? '',
                    'startDate' => $event['start_time'] ?? '',
                    'endDate' => $event['end_time'] ?? '',
                    'location' => [
                        '@type' => 'Place',
                        'name' => $event['start_location']['name'] ?? 'Fjeldgruppen Location',
                    ],
                ];
            })->toArray();
        }

        return $structuredData;
    }

    /**
     * Calculate course duration in ISO 8601 format
     */
    private static function calculateCourseDuration(array $course): string
    {
        if (!isset($course['booking_start_date']) || !isset($course['booking_end_date'])) {
            return 'P1D'; // Default to 1 day
        }

        $start = \Carbon\Carbon::parse($course['booking_start_date']);
        $end = \Carbon\Carbon::parse($course['booking_end_date']);
        $diff = $start->diff($end);
        
        if ($diff->days > 0) {
            return 'P' . $diff->days . 'D';
        } elseif ($diff->h > 0) {
            return 'PT' . $diff->h . 'H';
        } else {
            return 'PT1H'; // Default to 1 hour
        }
    }

    /**
     * Extract prerequisites from course data
     */
    private static function extractPrerequisites(array $course): string
    {
        if (isset($course['participant_requirements']) && is_array($course['participant_requirements'])) {
            return self::extractTextFromJson($course['participant_requirements']);
        }
        
        return $course['participant_requirements'] ?? 'Basic fitness level required';
    }

    /**
     * Generate SEO data for a general page
     */
    public static function forPage(string $title, string $description, array $options = []): array
    {
        $defaults = [
            'meta_title' => self::generateMetaTitle($title),
            'meta_description' => self::generateMetaDescription($description),
            'meta_keywords' => $options['keywords'] ?? 'fjeldgruppen, outdoor, mountain, wilderness, courses, denmark',
            'og_title' => self::generateOgTitle($title),
            'og_description' => self::generateOgDescription($description),
            'og_type' => 'website',
            'og_image' => $options['og_image'] ?? '/images/fjeldgruppen-logo.jpg',
            'twitter_card' => 'summary_large_image',
            'twitter_title' => self::generateTwitterTitle($title),
            'twitter_description' => self::generateTwitterDescription($description),
            'twitter_image' => $options['twitter_image'] ?? '/images/fjeldgruppen-logo.jpg',
            'author' => 'Fjeldgruppen',
            'publisher' => 'Fjeldgruppen',
            'category' => 'Outdoor Education',
            'geo_region' => 'DK',
            'geo_placename' => 'Denmark',
            'robots_index' => $options['robots_index'] ?? true,
            'robots_follow' => $options['robots_follow'] ?? true,
            'canonical_url' => $options['canonical_url'] ?? request()->url(),
        ];

        return array_merge($defaults, $options);
    }

    /**
     * Generate SEO data for the home page
     */
    public static function forHome(): array
    {
        return self::forPage(
            'Fjeldgruppen - Outdoor Education & Mountain Courses',
            'Fjeldgruppen tilbyder kvalificerede kurser i fjeld og vildmark. Lær at færdes sikkert i naturen med vores erfarne instruktører.',
            [
                'keywords' => 'fjeldgruppen, outdoor, mountain, wilderness, courses, denmark, hiking, camping, survival, first aid',
                'og_image' => '/images/fjeldgruppen-logo.jpg',
            ]
        );
    }

    /**
     * Generate SEO data for courses listing page
     */
    public static function forCoursesIndex(): array
    {
        return self::forPage(
            'Kurser - Fjeldgruppen',
            'Udforsk vores udvalg af outdoor kurser. Fra begyndere til avancerede, vi har kurser til alle niveauer.',
            [
                'keywords' => 'outdoor kurser, fjeldkurser, vandrekurser, vinterfjeld, sommerfjeld, førstehjælp, denmark',
                'og_image' => '/images/fjeldgruppen-logo.jpg',
            ]
        );
    }

    /**
     * Generate SEO data for stories listing page
     */
    public static function forStoriesIndex(): array
    {
        return self::forPage(
            'Historier & Artikler - Fjeldgruppen',
            'Læs om outdoor oplevelser, sikkerhedstips og vandreture fra Fjeldgruppen. Få inspiration til dine egne eventyr i naturen.',
            [
                'keywords' => 'outdoor historier, vandretur artikler, fjeldoplevelser, sikkerhedstips, naturen, denmark, fjeldgruppen',
                'og_image' => '/images/fjeldgruppen-logo.jpg',
            ]
        );
    }

    /**
     * Generate SEO data for a story page
     */
    public static function forStory(array $story): array
    {
        $title = $story['title'] ?? '';
        $excerpt = $story['excerpt'] ?? '';
        $tags = $story['tags'] ?? [];
        
        // Extract tag names for keywords
        $tagNames = collect($tags)->pluck('name')->toArray();
        
        return [
            'meta_title' => self::generateMetaTitle($title),
            'meta_description' => self::generateMetaDescription($excerpt),
            'meta_keywords' => self::generateStoryKeywords($title, $excerpt, $tagNames),
            'og_title' => self::generateOgTitle($title),
            'og_description' => self::generateOgDescription($excerpt),
            'og_type' => 'article',
            'og_image' => self::getStoryImage($story),
            'twitter_card' => 'summary_large_image',
            'twitter_title' => self::generateTwitterTitle($title),
            'twitter_description' => self::generateTwitterDescription($excerpt),
            'twitter_image' => self::getStoryImage($story),
            'author' => $story['author'] ?? 'Fjeldgruppen',
            'publisher' => 'Fjeldgruppen',
            'category' => 'Outdoor Education',
            'geo_region' => 'DK',
            'geo_placename' => 'Denmark',
            'robots_index' => true,
            'robots_follow' => true,
            'canonical_url' => request()->url(),
            'article_published_time' => $story['published_at'] ?? null,
            'article_modified_time' => $story['updated_at'] ?? null,
            'article_author' => $story['author'] ?? 'Fjeldgruppen',
            'article_section' => $story['category'] ?? 'Outdoor Education',
        ];
    }

    /**
     * Generate structured data (Schema.org) for a story
     */
    public static function generateStoryStructuredData(array $story): array
    {
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => $story['title'] ?? '',
            'description' => $story['excerpt'] ?? '',
            'author' => [
                '@type' => 'Person',
                'name' => $story['author'] ?? 'Fjeldgruppen',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'Fjeldgruppen',
                'url' => config('app.url'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => config('app.url') . '/images/fjeldgruppen-logo.jpg',
                ],
            ],
            'datePublished' => $story['published_at'] ?? null,
            'dateModified' => $story['updated_at'] ?? null,
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => request()->url(),
            ],
        ];

        // Add image if available
        if (isset($story['featured_image']) && $story['featured_image']) {
            $structuredData['image'] = [
                '@type' => 'ImageObject',
                'url' => $story['featured_image'],
                'alt' => $story['featured_image_alt'] ?? $story['title'] ?? '',
            ];
        }

        // Add tags as keywords
        if (isset($story['tags']) && is_array($story['tags']) && !empty($story['tags'])) {
            $keywords = collect($story['tags'])->pluck('name')->toArray();
            $structuredData['keywords'] = implode(', ', $keywords);
        }

        // Add category
        if (isset($story['category']) && $story['category']) {
            $structuredData['articleSection'] = $story['category'];
        }

        return $structuredData;
    }

    /**
     * Generate a meta title
     */
    private static function generateMetaTitle(string $title, string $subtitle = ''): string
    {
        $base = $title;
        if ($subtitle) {
            $base .= ' - ' . $subtitle;
        }
        
        // Limit to 60 characters for optimal SEO
        if (strlen($base) > 60) {
            $base = substr($base, 0, 57) . '...';
        }
        
        return $base;
    }

    /**
     * Generate a meta description
     */
    private static function generateMetaDescription(string $description, string $subtitle = ''): string
    {
        $text = $subtitle ?: $description;
        
        // Limit to 160 characters for optimal SEO
        if (strlen($text) > 160) {
            $text = substr($text, 0, 157) . '...';
        }
        
        return $text;
    }

    /**
     * Generate keywords for a course
     */
    private static function generateKeywords(array $course): string
    {
        $keywords = ['fjeldgruppen', 'outdoor', 'mountain', 'wilderness'];
        
        // Add level-specific keywords
        if (isset($course['level'])) {
            $keywords[] = $course['level'];
        }
        
        // Add season-specific keywords
        if (isset($course['season'])) {
            $keywords[] = $course['season'];
        }
        
        // Add course subjects
        if (isset($course['course_subjects']) && is_array($course['course_subjects'])) {
            $subjects = self::extractTextFromJson($course['course_subjects']);
            $keywords = array_merge($keywords, explode(', ', $subjects));
        }
        
        return implode(', ', array_unique($keywords));
    }

    /**
     * Generate Open Graph title
     */
    private static function generateOgTitle(string $title, string $subtitle = ''): string
    {
        return self::generateMetaTitle($title, $subtitle);
    }

    /**
     * Generate Open Graph description
     */
    private static function generateOgDescription(string $description, string $subtitle = ''): string
    {
        return self::generateMetaDescription($description, $subtitle);
    }

    /**
     * Generate Twitter title
     */
    private static function generateTwitterTitle(string $title, string $subtitle = ''): string
    {
        return self::generateMetaTitle($title, $subtitle);
    }

    /**
     * Generate Twitter description
     */
    private static function generateTwitterDescription(string $description, string $subtitle = ''): string
    {
        return self::generateMetaDescription($description, $subtitle);
    }

    /**
     * Get course image for social media
     */
    private static function getCourseImage(array $course): string
    {
        // Check if course has photos
        if (isset($course['photos']['data']) && !empty($course['photos']['data'])) {
            return $course['photos']['data'][0]['preview_url'];
        }
        
        // Fallback to logo
        return '/images/fjeldgruppen-logo.jpg';
    }

    /**
     * Get story image for social media
     */
    private static function getStoryImage(array $story): string
    {
        // Check if story has featured image
        if (isset($story['featured_image']) && $story['featured_image']) {
            return $story['featured_image'];
        }
        
        // Fallback to logo
        return '/images/fjeldgruppen-logo.jpg';
    }

    /**
     * Generate keywords for a story
     */
    private static function generateStoryKeywords(string $title, string $excerpt, array $tagNames): string
    {
        $keywords = ['fjeldgruppen', 'outdoor', 'mountain', 'wilderness'];
        
        // Add title keywords
        $keywords = array_merge($keywords, explode(' ', $title));
        
        // Add excerpt keywords
        $keywords = array_merge($keywords, explode(' ', $excerpt));
        
        // Add tag keywords
        $keywords = array_merge($keywords, $tagNames);
        
        return implode(', ', array_unique($keywords));
    }

    /**
     * Extract plain text from JSON content (for TipTap editor content)
     */
    private static function extractTextFromJson($jsonContent): string
    {
        if (is_string($jsonContent)) {
            $jsonContent = json_decode($jsonContent, true);
        }
        
        if (!is_array($jsonContent)) {
            return '';
        }
        
        $text = '';
        
        if (isset($jsonContent['content'])) {
            foreach ($jsonContent['content'] as $block) {
                if (isset($block['content'])) {
                    foreach ($block['content'] as $content) {
                        if (isset($content['text'])) {
                            $text .= $content['text'] . ' ';
                        }
                    }
                }
            }
        }
        
        return trim($text);
    }
}
