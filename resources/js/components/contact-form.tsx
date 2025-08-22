import { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    preferred_contact: string;
    message: string;
    [key: string]: string; // Index signature for Inertia compatibility
}

interface PageProps {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    [key: string]: any; // Index signature for Inertia compatibility
}

export function ContactForm() {
    const { flash, errors } = usePage<PageProps>().props;
    
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        preferred_contact: 'email',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Reset form on successful submission
    useEffect(() => {
        if (flash?.success) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                preferred_contact: 'email',
                message: ''
            });
            setShowSuccess(true);
            
            // Auto-hide success message after 8 seconds
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 8000);
            
            return () => clearTimeout(timer);
        }
    }, [flash?.success]);

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await router.post('/contact', formData);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[var(--color-white)] rounded-[var(--radius-2xl)] shadow-xl p-[var(--spacing-xl)]">
            <div className="text-center mb-[var(--spacing-xl)]">
                <h2 className="text-3xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">Send os en besked</h2>
                <p className="text-[var(--color-red-700)] text-lg">
                    Vi vil elske at høre fra dig. Send os en besked, og vi vender tilbage hurtigst muligt.
                </p>
            </div>

            {/* Success Message */}
            {flash?.success && showSuccess && (
                <Alert className="mb-[var(--spacing-lg)] border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm animate-in slide-in-from-top-2 duration-500 relative">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-green-800 font-medium text-base">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="mr-2">🎉</span>
                                {flash.success}
                            </div>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="ml-4 text-green-600 hover:text-green-800 transition-colors"
                                aria-label="Luk besked"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </AlertDescription>
                </Alert>
            )}

            {/* Error Message */}
            {flash?.error && (
                <Alert className="mb-[var(--spacing-lg)] border-red-300 bg-gradient-to-r from-red-50 to-rose-50 shadow-sm animate-in slide-in-from-top-2 duration-500">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-red-800 font-medium text-base">
                        <div className="flex items-center">
                            <span className="mr-2">⚠️</span>
                            {flash.error}
                        </div>
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-[var(--spacing-lg)]">
                <div className="grid md:grid-cols-2 gap-[var(--spacing-lg)]">
                    <div>
                        <Label htmlFor="name" className="text-[var(--color-red-900)] font-medium">
                            Navn *
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
                            className="mt-[var(--spacing-sm)]"
                            required
                        />
                        {errors?.name && (
                            <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-[var(--color-red-900)] font-medium">
                            Email *
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
                            className="mt-[var(--spacing-sm)]"
                            required
                        />
                        {errors?.email && (
                            <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[var(--spacing-lg)]">
                    <div>
                        <Label htmlFor="phone" className="text-[var(--color-red-900)] font-medium">
                            Telefon
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('phone', e.target.value)}
                            className="mt-[var(--spacing-sm)]"
                        />
                        {errors?.phone && (
                            <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.phone}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="subject" className="text-[var(--color-red-900)] font-medium">
                            Emne *
                        </Label>
                        <Input
                            id="subject"
                            type="text"
                            value={formData.subject}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('subject', e.target.value)}
                            className="mt-[var(--spacing-sm)]"
                            required
                        />
                        {errors?.subject && (
                            <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.subject}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="preferred_contact" className="text-[var(--color-red-900)] font-medium">
                        Foretrukken kontaktmetode
                    </Label>
                    <Select value={formData.preferred_contact} onValueChange={(value) => setFormData(prev => ({ ...prev, preferred_contact: value }))}>
                        <SelectTrigger className="mt-[var(--spacing-sm)]">
                            <SelectValue placeholder="Vælg kontaktmetode" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Telefon</SelectItem>
                            <SelectItem value="both">Email og telefon</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors?.preferred_contact && (
                        <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.preferred_contact}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="message" className="text-[var(--color-red-900)] font-medium">
                        Besked *
                    </Label>
                    <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('message', e.target.value)}
                        rows={5}
                        className="mt-[var(--spacing-sm)]"
                        required
                    />
                    {errors?.message && (
                        <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">{errors.message}</p>
                    )}
                </div>

                <div className="text-center">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] px-[var(--spacing-xl)] py-[var(--spacing-sm)] text-lg font-semibold rounded-[var(--radius-lg)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-5 w-5 mr-[var(--spacing-sm)] animate-spin" />
                                Sender...
                            </>
                        ) : (
                            <>
                                <Send className="h-5 w-5 mr-[var(--spacing-sm)]" />
                                Send besked
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
