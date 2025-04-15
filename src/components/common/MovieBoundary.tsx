'use client';

import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { ReactNode } from 'react';

const MovieBoundary = ({ fallback, children }: { fallback: ReactNode; children: ReactNode }) => {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
};

export default MovieBoundary;
