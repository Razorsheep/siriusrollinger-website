import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

// Navigation types for the new structure
export interface NavigationItem {
    label: string;
    href: string;
    type: string;
}

export interface NavigationGroup {
    label: string;
    type: string;
    items: NavigationItem[];
}

export type NavigationData = NavigationItem | NavigationGroup;

export interface TiptapContent {
    type: string;
    content?: TiptapContent[];
    text?: string;
    marks?: Array<{ type: string }>;
    attrs?: Record<string, any>;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface BlogEntry {
    id: number;
    title: string;
    slug: string;
    content: TiptapContent | string;
    excerpt?: string;
    tags: Tag[];
    author: {
        name: string;
        avatar?: string;
    };
    date: string;
    featured_image?: string;
    featured_image_preview?: string;
    read_time?: number;
    status: string;
    updated_at: string;
    created_at: string;
}

export interface ServicePage {
    id: number;
    title: string;
    slug: string;
    content: TiptapContent | string;
    page_type: string;
    status: string;
    next_event?: {
        title: string;
        date: string;
        time: string;
        location: string;
        description: string;
        registration_link?: string;
    };
    images?: MediaResource[];
    contact_info?: {
        phone?: string;
        email?: string;
        website?: string;
    };
}

export interface MediaResource {
    id: number;
    url: string;
    preview_url: string;
    type: string;
    name: string;
    size: number;
    mime_type: string;
    created_at: string;
    updated_at: string;
}

export interface SEO {
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    og_title: string;
    og_description: string;
    og_type: string;
    og_image: string;
    twitter_card: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    author: string;
    publisher: string;
    category: string;
    geo_region: string;
    geo_placename: string;
    robots_index: boolean;
    robots_follow: boolean;
    canonical_url: string;
    [key: string]: unknown;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    blogEntries?: BlogEntry[];
    blogEntry?: BlogEntry;
    tags?: Tag[];
    navigationItems?: NavigationData[];
    settings?: any;
    seo?: SEO;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    admin: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
