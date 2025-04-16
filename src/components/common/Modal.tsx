'use client';

import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleModalOnClose = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if ((e.target as any).nodeName === 'DIALOG') {
      router.back();
    }
  };

  return createPortal(
    <div>
      <dialog
        className="container mx-auto px-10 pt-8 max-w-[750px] min-h-screen bg-black/40 backdrop-blur-md"
        onClick={handleModalOnClose}
        onClose={() => router.back()}
        ref={dialogRef}
      >
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
