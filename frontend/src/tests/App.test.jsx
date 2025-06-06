import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import React from 'react';

describe('App Component', () => {
  it('renders correctly', () => {
    render(<App />);
    
    expect(screen.getByText(/Loading tasks.../i)).toBeDefined();
  });
});
