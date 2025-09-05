import { render, screen } from '@testing-library/react';
import { Providers } from '@/lib/providers';
import { MotionProvider } from '@/lib/motion-provider';

// Test wrapper for components that need providers
export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <Providers>
      <MotionProvider>
        {ui}
      </MotionProvider>
    </Providers>
  );
}

// Mock framer-motion for tests
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    article: 'article',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    a: 'a',
    button: 'button',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useReducedMotion: () => false,
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

export * from '@testing-library/react';