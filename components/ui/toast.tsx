'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-bottom-5',
        type === 'success' && 'border-green-500/50 bg-green-50 dark:bg-green-950',
        type === 'error' && 'border-red-500/50 bg-red-50 dark:bg-red-950'
      )}
    >
      {type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-600" />}
      {type === 'error' && <X className="h-5 w-5 text-red-600" />}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto rounded-md p-1 hover:bg-background/50"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

let toastQueue: Array<{ id: number; message: string; type?: 'success' | 'error' }> = [];
let toastId = 0;
let listeners: Array<() => void> = [];

export function showToast(message: string, type: 'success' | 'error' = 'success') {
  const id = toastId++;
  toastQueue.push({ id, message, type });
  listeners.forEach((listener) => listener());
}

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type?: 'success' | 'error' }>>([]);

  useEffect(() => {
    const listener = () => {
      setToasts([...toastQueue]);
    };
    listeners.push(listener);
    listener();

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const removeToast = (id: number) => {
    toastQueue = toastQueue.filter((t) => t.id !== id);
    listeners.forEach((listener) => listener());
  };

  return { toasts, removeToast };
}

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
}

