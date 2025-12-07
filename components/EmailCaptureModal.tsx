import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';
import { CheckCircle2, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle?: string;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose, resourceTitle }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setEmail('');
      setError('');
    }
  }, [isOpen]);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError(t.modal.errorEmail);
      return;
    }

    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              {t.modal.successTitle}
            </h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
              {t.modal.successDesc}
            </p>
            <Button onClick={onClose} fullWidth>
              {t.modal.closeBtn}
            </Button>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 bg-brand-sky text-brand-blue rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              {t.modal.title}
            </h3>
            {resourceTitle && (
              <p className="text-sm font-medium text-brand-blue mb-2">
                "{resourceTitle}"
              </p>
            )}
            <p className="text-gray-600 mb-6">
              {t.modal.desc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.modal.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={t.modal.emailPlaceholder}
                  className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all ${
                    error ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                  autoFocus
                />
                {error && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">
                    {error}
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={status === 'submitting'}
                  className="w-full flex justify-center"
                >
                  {status === 'submitting' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    t.modal.submitBtn
                  )}
                </Button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-sm text-gray-500 hover:text-gray-800 py-2 transition-colors font-medium"
                >
                  {t.modal.cancelBtn}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EmailCaptureModal;