import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { CartProvider } from './context/CartContext';

describe('App', () => {
    it('renders without crashing', () => {
        render(
            <CartProvider>
                <App />
            </CartProvider>
        );
    });
});
