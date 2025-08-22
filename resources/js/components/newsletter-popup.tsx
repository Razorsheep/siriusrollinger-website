import { useState, useEffect, useRef } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

interface NewsletterPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    // Focus email input when popup opens
    useEffect(() => {
        if (isOpen && emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        setError('');
        
        try {
            const response = await fetch('/api/newsletter/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    handleClose();
                    setIsSubmitted(false);
                    setEmail('');
                }, 2000);
            } else {
                setError(data.message || 'Der opstod en fejl ved tilmelding');
            }
        } catch (error) {
            console.error('Newsletter signup failed:', error);
            setError('Der opstod en fejl ved tilmelding. Prøv venligst igen.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (dontShowAgain) {
            localStorage.setItem('newsletter-popup-dismissed', 'true');
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div 
                ref={popupRef}
                className="relative w-full max-w-md bg-white rounded-[var(--radius-2xl)] shadow-2xl p-[var(--spacing-xl)] animate-in fade-in-0 zoom-in-95 duration-300"
                role="dialog"
                aria-labelledby="newsletter-title"
                aria-describedby="newsletter-description"
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                    aria-label="Luk nyhedsbrev popup"
                >
                    <X className="h-5 w-5" />
                </button>

                {!isSubmitted ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-[var(--spacing-lg)]">
                            <div className="w-16 h-16 bg-[var(--color-red-100)] rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-md)]">
                                <Mail className="h-8 w-8 text-[var(--color-red-600)]" />
                            </div>
                            <h3 id="newsletter-title" className="text-2xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                            Følg med her og få mine bedste tips til hundeførstehjælp
                            
                            </h3>
                            <p id="newsletter-description" className="text-[var(--color-red-700)] leading-relaxed">
                            Når du skriver dig op får du en video med førstehjælpstips direkte i postkassen.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-[var(--spacing-md)]">
                            <div>
                                <label htmlFor="newsletter-email" className="block text-sm font-medium text-[var(--color-red-900)] mb-[var(--spacing-xs)]">
                                    Din email adresse
                                </label>
                                <input
                                    ref={emailInputRef}
                                    id="newsletter-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="din@email.dk"
                                    required
                                    className="w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--color-red-200)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--color-red-500)] focus:border-transparent transition-colors"
                                    disabled={isSubmitting}
                                    aria-describedby={error ? "newsletter-error" : undefined}
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <div id="newsletter-error" className="text-red-600 text-sm bg-red-50 p-[var(--spacing-sm)] rounded-[var(--radius-md)] border border-red-200" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <button
                                type="submit"
                                disabled={isSubmitting || !email}
                                className="w-full bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] disabled:bg-[var(--color-red-300)] text-white font-semibold py-[var(--spacing-md)] px-[var(--spacing-lg)] rounded-[var(--radius-lg)] transition-colors disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Tilmelder...' : 'Tilmeld dig nyhedsbrev'}
                            </button>
                        </form>

                        {/* Don't show again checkbox */}
                        <div className="flex items-center justify-center mt-[var(--spacing-md)]">
                            <label className="flex items-center space-x-[var(--spacing-xs)] text-sm text-[var(--color-red-600)] cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={dontShowAgain}
                                    onChange={(e) => setDontShowAgain(e.target.checked)}
                                    className="rounded border-[var(--color-red-300)] text-[var(--color-red-600)] focus:ring-[var(--color-red-500)]"
                                />
                                <span>Vis ikke igen</span>
                            </label>
                        </div>

                        {/* Benefits */}
                        <div className="mt-[var(--spacing-lg)] pt-[var(--spacing-lg)] border-t border-[var(--color-red-100)]">
                            <h4 className="text-sm font-semibold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                Hvad får du?
                            </h4>
                            <ul className="space-y-[var(--spacing-xs)] text-sm text-[var(--color-red-700)]">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-[var(--color-red-600)] mr-[var(--spacing-xs)]" />
                                    Eksklusive hundeførstehjælp tips
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-[var(--color-red-600)] mr-[var(--spacing-xs)]" />
                                    Nyheder om kurser og events
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-[var(--color-red-600)] mr-[var(--spacing-xs)]" />
                                    Første adgang til nyt førstehjælpsgrej
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    /* Success state */
                    <div className="text-center py-[var(--spacing-lg)]">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-md)]">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-900 mb-[var(--spacing-sm)]">
                            Tak for tilmeldingen!
                        </h3>
                        <p className="text-green-700">
                            Du vil snart modtage vores nyhedsbrev med eksklusive tips om hundesikkerhed.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
