import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Indtast venligst en gyldig email adresse');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            // Mailchimp signup endpoint - you'll need to create this in your Laravel backend
            const response = await fetch('/api/newsletter/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Tak! Du er nu tilmeldt vores nyhedsbrev.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Der opstod en fejl. Prøv venligst igen.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Der opstod en fejl. Prøv venligst igen.');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit(e as any);
        }
    };

    return (
        <section className="py-16 bg-red-600">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                    Få de seneste tips direkte i din indbakke
                </h3>
                <p className="text-xl text-red-100 mb-8">
                    Tilmeld dig vores nyhedsbrev og få eksklusive råd om hundesikkerhed og førstehjælp
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Din email adresse"
                            className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 focus:bg-white/20 transition-all duration-200"
                            disabled={status === 'loading'}
                        />
                        <button 
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-white text-red-600 hover:bg-red-50 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {status === 'loading' ? (
                                <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                            ) : (
                                'Tilmeld'
                            )}
                        </button>
                    </div>
                    
                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="flex items-center justify-center space-x-2 text-green-200 bg-green-900/20 rounded-lg p-3 mb-4">
                            <CheckCircle className="h-5 w-5" />
                            <span>{message}</span>
                        </div>
                    )}
                    
                    {status === 'error' && (
                        <div className="flex items-center justify-center space-x-2 text-red-200 bg-red-900/20 rounded-lg p-3 mb-4">
                            <AlertCircle className="h-5 w-5" />
                            <span>{message}</span>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}