import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../app/App';
describe('profile dashboard', () => { it('renders the professional identity', async () => { render(<App />); expect(await screen.findByText('Everton Silva')).toBeInTheDocument(); expect(screen.getByText(/Transformo complexidade/)).toBeInTheDocument(); }); });