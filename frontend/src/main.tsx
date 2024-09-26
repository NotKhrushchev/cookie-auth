import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/app/styles/index.css';
import AppRouter from './app/providers/ui/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);
