import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Send } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    preferred_contact: string;
    message: string;
}

interface ContactFormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        preferred_contact: 'email',
        message: ''
    });

    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field as keyof ContactFormErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await router.post('/contact', formData as Record<string, any>);
            // Form will be handled by the backend, errors will come back if validation fails
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
                        {errors.name && (
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
                        {errors.email && (
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
                        {errors.subject && (
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
                        </SelectContent>
                    </Select>
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
                    {errors.message && (
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
