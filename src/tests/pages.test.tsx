import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../app/App';
describe('dashboard routes', () => { it('renders projects route', async () => { window.history.pushState({}, '', '/projects'); render(<App />); expect(await screen.findByText('Projetos em movimento')).toBeInTheDocument(); }); it('renders stack route', async () => { window.history.pushState({}, '', '/stack'); render(<App />); expect(await screen.findByText('Stack & princípios')).toBeInTheDocument(); }); });