import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroBanner from '../components/HeroBanner';

describe('HeroBanner component', () => {
  it('renders correctly', () => {
    render(<HeroBanner />);
    expect(screen.getByText('Welcome to SpaceX Capsules Database.')).toBeInTheDocument();
    expect(screen.getByAltText('SpaceX hero banner')).toBeInTheDocument();
  });
});