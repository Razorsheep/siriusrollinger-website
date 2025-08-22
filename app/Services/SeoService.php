<?php

namespace App\Services;

class SeoService
{
    /**
     * Generate SEO data for a blog entry page
     */
    public static function forBlogEntry(array $blogEntry): array
    {

        $title = $blogEntry['title'] ?? '';
        $excerpt = $blogEntry['excerpt'] ?? '';
        $content = isset($blogEntry['content']) && is_array($blogEntry['content']) ? self::extractTextFromJson($blogEntry['content']) : ($blogEntry['content'] ?? '');
        $description = $excerpt ?: $content;
        $author = $blogEntry['author']['name'] ?? 'Førstehjælp til Hunde';
        
        // Extract tags for category and keywords
        $tags = $blogEntry['tags'] ?? [];
        $tagNames = collect($tags)->pluck('name')->toArray();
        $category = !empty($tagNames) ? $tagNames[0] : 'Hundesikkerhed';
        
        return [
            'meta_title' => self::generateMetaTitle($title),
            'meta_description' => self::generateMetaDescription($description),
            'meta_keywords' => self::generateBlogKeywords($blogEntry),
            'og_title' => self::generateOgTitle($title),
            'og_description' => self::generateOgDescription($description),
            'og_type' => 'article',
            'og_image' => self::getBlogImage($blogEntry),
            'twitter_card' => 'summary_large_image',
            'twitter_title' => self::generateTwitterTitle($title),
            'twitter_description' => self::generateTwitterDescription($description),
            'twitter_image' => self::getBlogImage($blogEntry),
            'author' => $author,
            'publisher' => 'Førstehjælp til Hunde',
            'category' => $category,
            'geo_region' => 'DK',
            'geo_placename' => 'Denmark',
            'robots_index' => true,
            'robots_follow' => true,
            'canonical_url' => request()->url(),
            'article_published_time' => $blogEntry['created_at'] ?? null,
            'article_modified_time' => $blogEntry['updated_at'] ?? null,
            'article_author' => $author,
            'article_section' => $category,
        ];
    }

    /**
     * Generate structured data (Schema.org) for a course
     */
    // public static function generateStructuredData(array $course): array
    // {
    //     $structuredData = [
    //         '@context' => 'https://schema.org',
    //         '@type' => 'Course',
    //         'name' => $course['title'] ?? '',
    //         'description' => is_array($course['description']) ? self::extractTextFromJson($course['description']) : ($course['description'] ?? ''),
    //         'provider' => [
    //             '@type' => 'Organization',
    //             'name' => 'Førstehjælp til Hunde',
    //             'url' => config('app.url'),
    //         ],
    //         'educationalLevel' => ucfirst($course['level'] ?? 'beginner'),
    //         'timeRequired' => self::calculateCourseDuration($course),
    //         'coursePrerequisites' => self::extractPrerequisites($course),
    //     ];

    //     // Add instructor if available
    //     if (isset($course['owner']) && $course['owner']) {
    //         $structuredData['instructor'] = [
    //             '@type' => 'Person',
    //             'name' => $course['owner']['name'] ?? 'Førstehjælp til Hunde Instructor',
    //         ];
    //     }

    //     // Add course subjects if available
    //     if (isset($course['course_subjects']) && is_array($course['course_subjects']) && !empty($course['course_subjects'])) {
    //         $structuredData['about'] = self::extractTextFromJson($course['course_subjects']);
    //     }

    //     // Add pricing information
    //     if (isset($course['price']) && $course['price'] > 0) {
    //         $structuredData['offers'] = [
    //             '@type' => 'Offer',
    //             'price' => $course['price'],
    //             'priceCurrency' => $course['currency'] ?? 'DKK',
    //             'availability' => 'https://schema.org/InStock',
    //         ];
    //     }

        // Add upcoming events if available
    //     if (isset($course['events']['data']) && !empty($course['events']['data'])) {
    //         $structuredData['hasCourseInstance'] = collect($course['events']['data'])->map(function ($event) {
    //             return [
    //                 '@type' => 'CourseInstance',
    //                 'name' => $event['title'] ?? '',
    //                 'startDate' => $event['start_time'] ?? '',
    //                 'endDate' => $event['end_time'] ?? '',
    //                 'location' => [
    //                     '@type' => 'Place',
    //                     'name' => $event['start_location']['name'] ?? 'Førstehjælp til Hunde Location',
    //                 ],
    //             ];
    //         })->toArray();
    //     }

    //     return $structuredData;
    // }

    // /**
    //  * Calculate course duration in ISO 8601 format
    //  */
    // private static function calculateCourseDuration(array $course): string
    // {
    //     if (!isset($course['booking_start_date']) || !isset($course['booking_end_date'])) {
    //         return 'P1D'; // Default to 1 day
    //     }

    //     $start = \Carbon\Carbon::parse($course['booking_start_date']);
    //     $end = \Carbon\Carbon::parse($course['booking_end_date']);
    //     $diff = $start->diff($end);
        
    //     if ($diff->days > 0) {
    //         return 'P' . $diff->days . 'D';
    //     } elseif ($diff->h > 0) {
    //         return 'PT' . $diff->h . 'H';
    //     } else {
    //         return 'PT1H'; // Default to 1 hour
    //     }
    // }

    // /**
    //  * Extract prerequisites from course data
    //  */
    // private static function extractPrerequisites(array $course): string
    // {
    //     if (isset($course['participant_requirements']) && is_array($course['participant_requirements'])) {
    //         return self::extractTextFromJson($course['participant_requirements']);
    //     }
        
    //     return $course['participant_requirements'] ?? 'Basic fitness level required';
    // }

    /**
     * Generate SEO data for a general page
     */
    public static function forPage(string $title, string $description, array $options = []): array
    {
        $defaults = [
            'meta_title' => self::generateMetaTitle($title),
            'meta_description' => self::generateMetaDescription($description),
            'meta_keywords' => $options['keywords'] ?? 'førstehjælp til hunde, hundesikkerhed, hundeførstehjælp, denmark',
            'og_title' => self::generateOgTitle($title),
            'og_description' => self::generateOgDescription($description),
            'og_type' => 'website',
            'og_image' => $options['og_image'] ?? '/images/logo.png',
            'twitter_card' => 'summary_large_image',
            'twitter_title' => self::generateTwitterTitle($title),
            'twitter_description' => self::generateTwitterDescription($description),
            'twitter_image' => $options['twitter_image'] ?? '/images/logo.png',
            'author' => 'Førstehjælp til Hunde',
            'publisher' => 'Førstehjælp til Hunde',
            'category' => 'Hundesikkerhed',
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
            'Førstehjælp til Hunde - Din Hunds Sikkerhed Kommer Først',
            'Førstehjælp til Hunde tilbyder kvalificeret rådgivning og kurser i hundesikkerhed og førstehjælp. Lær at beskytte din hund i enhver situation.',
            [
                'keywords' => 'førstehjælp til hunde, hundesikkerhed, hundeførstehjælp, denmark, hundekurser, hundesikkerhedstips',
                'og_image' => '/images/logo.png',
            ]
        );
    }

    /**
     * Generate SEO data for courses listing page
     */
    // public static function forCoursesIndex(): array
    // {
    //     return self::forPage(
    //         'Kurser - Førstehjælp til Hunde',
    //         'Udforsk vores udvalg af hundesikkerhedskurser. Fra begyndere til avancerede, vi har kurser til alle niveauer.',
    //         [
    //             'keywords' => 'hundekurser, hundesikkerhedskurser, hundeførstehjælp, denmark, hundesikkerhed, førstehjælp',
    //             'og_image' => '/images/logo.png',
    //         ]
    //     );
    // }

    /**
     * Generate SEO data for stories listing page
     */
    public static function forBlogIndex(): array
    {
        return self::forPage(
            'Blog & Artikler - Førstehjælp til Hunde',
            'Læs om hundesikkerhed, førstehjælpstips og hundepleje fra Førstehjælp til Hunde. Få inspiration til at beskytte din hund.',
            [
                'keywords' => 'hundeblog, hundesikkerhedsartikler, hundeførstehjælp, hundepleje, denmark, førstehjælp til hunde',
                'og_image' => '/images/logo.png',
            ]
        );
    }

    /**
     * Generate SEO data for a story page
     */
    // public static function forStory(array $story): array
    // {
    //     $title = $story['title'] ?? '';
    //     $excerpt = $story['excerpt'] ?? '';
    //     $tags = $story['tags'] ?? [];
        
    //     // Extract tag names for keywords
    //     $tagNames = collect($tags)->pluck('name')->toArray();
        
    //     return [
    //         'meta_title' => self::generateMetaTitle($title),
    //         'meta_description' => self::generateMetaDescription($excerpt),
    //         'meta_keywords' => self::generateStoryKeywords($title, $excerpt, $tagNames),
    //         'og_title' => self::generateOgTitle($title),
    //         'og_description' => self::generateOgDescription($excerpt),
    //         'og_type' => 'article',
    //         'og_image' => self::getStoryImage($story),
    //         'twitter_card' => 'summary_large_image',
    //         'twitter_title' => self::generateTwitterTitle($title),
    //         'twitter_description' => self::generateTwitterDescription($excerpt),
    //         'twitter_image' => self::getStoryImage($story),
    //         'author' => $story['author'] ?? 'Førstehjælp til Hunde',
    //         'publisher' => 'Førstehjælp til Hunde',
    //         'category' => 'Hundesikkerhed',
    //         'geo_region' => 'DK',
    //         'geo_placename' => 'Denmark',
    //         'robots_index' => true,
    //         'robots_follow' => true,
    //         'canonical_url' => request()->url(),
    //         'article_published_time' => $story['published_at'] ?? null,
    //         'article_modified_time' => $story['updated_at'] ?? null,
    //         'article_author' => $story['author'] ?? 'Førstehjælp til Hunde',
    //         'article_section' => $story['category'] ?? 'Hundesikkerhed',
    //     ];
    // }

    /**
     * Generate structured data (Schema.org) for a story
     */
    // public static function generateStoryStructuredData(array $story): array
    // {
    //     $structuredData = [
    //         '@context' => 'https://schema.org',
    //         '@type' => 'Article',
    //         'headline' => $story['title'] ?? '',
    //         'description' => $story['excerpt'] ?? '',
    //         'author' => [
    //             '@type' => 'Person',
    //             'name' => $story['author'] ?? 'Fjeldgruppen',
    //         ],
    //         'publisher' => [
    //             '@type' => 'Organization',
    //             'name' => 'Førstehjælp til Hunde',
    //             'url' => config('app.url'),
    //             'logo' => [
    //                 '@type' => 'ImageObject',
    //                 'url' => config('app.url') . '/images/logo.png',
    //             ],
    //         ],
    //         'datePublished' => $story['published_at'] ?? null,
    //         'dateModified' => $story['updated_at'] ?? null,
    //         'mainEntityOfPage' => [
    //             '@type' => 'WebPage',
    //             '@id' => request()->url(),
    //         ],
    //     ];

    //     // Add image if available
    //     if (isset($story['featured_image']) && $story['featured_image']) {
    //         $structuredData['image'] = [
    //             '@type' => 'ImageObject',
    //             'url' => $story['featured_image'],
    //             'alt' => $story['featured_image_alt'] ?? $story['title'] ?? '',
    //         ];
    //     }

    //     // Add tags as keywords
    //     if (isset($story['tags']) && is_array($story['tags']) && !empty($story['tags'])) {
    //         $keywords = collect($story['tags'])->pluck('name')->toArray();
    //         $structuredData['keywords'] = implode(', ', $keywords);
    //     }

    //     // Add category
    //     if (isset($story['category']) && $story['category']) {
    //         $structuredData['articleSection'] = $story['category'];
    //     }

    //     return $structuredData;
    // }

    /**
     * Generate structured data (Schema.org) for a blog entry
     */
    public static function generateBlogStructuredData(array $blogEntry): array
    {
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'BlogPosting',
            'headline' => $blogEntry['title'] ?? '',
            'description' => $blogEntry['excerpt'] ?? '',
            'author' => [
                '@type' => 'Person',
                'name' => $blogEntry['author']['name'] ?? 'Førstehjælp til Hunde',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'Førstehjælp til Hunde',
                'url' => config('app.url'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => config('app.url') . '/images/logo.png',
                ],
            ],
            'datePublished' => $blogEntry['created_at'] ?? null,
            'dateModified' => $blogEntry['updated_at'] ?? null,
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => request()->url(),
            ],
            'articleSection' => $blogEntry['category'] ?? 'Hundesikkerhed',
        ];

        // Add image if available
        if (isset($blogEntry['image']) && $blogEntry['image']) {
            $structuredData['image'] = [
                '@type' => 'ImageObject',
                'url' => $blogEntry['image'],
                'alt' => $blogEntry['title'] ?? '',
            ];
        }

        // Add read time if available
        if (isset($blogEntry['read_time']) && $blogEntry['read_time']) {
            $structuredData['timeRequired'] = 'PT' . $blogEntry['read_time'] . 'M';
        }

        // Add category
        if (isset($blogEntry['category']) && $blogEntry['category']) {
            $structuredData['keywords'] = $blogEntry['category'];
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
        $keywords = ['førstehjælp til hunde', 'hundesikkerhed', 'hundeførstehjælp', 'denmark'];
        
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
        return '/images/logo.png';
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
        return '/images/logo.png';
    }

    /**
     * Get blog entry image for social media
     */
    private static function getBlogImage(array $blogEntry): string
    {
        // Check if blog entry has an image
        if (isset($blogEntry['image']) && $blogEntry['image']) {
            return $blogEntry['image'];
        }
        
        // Check if blog entry has media
        if (isset($blogEntry['media']) && !empty($blogEntry['media'])) {
            return $blogEntry['media'][0]['original_url'] ?? '/images/logo.png';
        }
        
        // Fallback to logo
        return '/images/logo.png';
    }

    /**
     * Generate keywords for a story
     */
    private static function generateStoryKeywords(string $title, string $excerpt, array $tagNames): string
    {
        $keywords = ['førstehjælp til hunde', 'hundesikkerhed', 'hundeførstehjælp', 'denmark'];
        
        // Add title keywords
        $keywords = array_merge($keywords, explode(' ', $title));
        
        // Add excerpt keywords
        $keywords = array_merge($keywords, explode(' ', $excerpt));
        
        // Add tag keywords
        $keywords = array_merge($keywords, $tagNames);
        
        return implode(', ', array_unique($keywords));
    }

    /**
     * Generate keywords for a blog entry
     */
    private static function generateBlogKeywords(array $blogEntry): string
    {
        $keywords = ['førstehjælp til hunde', 'hundesikkerhed', 'hundeførstehjælp', 'denmark'];
        
        $title = $blogEntry['title'] ?? '';
        $excerpt = $blogEntry['excerpt'] ?? '';
        
        // Extract tags for keywords
        $tags = $blogEntry['tags'];
        $tagNames = collect($tags)->pluck('name')->toArray();
        
        // Add title keywords
        if ($title) {
            $keywords = array_merge($keywords, explode(' ', strtolower($title)));
        }
        
        // Add excerpt keywords
        if ($excerpt) {
            $keywords = array_merge($keywords, explode(' ', strtolower($excerpt)));
        }
        
        // Add tag keywords
        if (!empty($tagNames)) {
            $keywords = array_merge($keywords, array_map('strtolower', $tagNames));
        }
        
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
