import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#f5f5f5',
          color: '#1f2937',
          padding: '16px 22px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: `
  0 4px 6px rgba(0, 0, 0, 0.08),
  0 10px 20px rgba(0, 0, 0, 0.03)
`,
          fontWeight: 500,
          fontSize: '15px',
          minWidth: '260px',
          maxWidth: '300px',
          transition: 'all 0.3s ease',
          animation: 'fadeInUp 0.4s ease-out',
        },
        iconTheme: {
          primary: '#10b981',
          secondary: '#d1fae5',
        },
      }}
    />
  );
};

export default ToastContainer;
