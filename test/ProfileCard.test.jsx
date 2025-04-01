import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileCard from '../components/ProfileCard';
import { UserContext } from '../context/UserContext';

const mockUser = {
  name: 'Daniel Hernández',
  photo: '/avatar.jpg',
  position: 'Frontend Developer',
  company: 'Nova Talent',
};

const renderWithUser = () =>
  render(
    <UserContext.Provider value={{ mockUser }}>
      <ProfileCard />
    </UserContext.Provider>
  );

describe('ProfileCard', () => {
  test('renders user info correctly', () => {
    renderWithUser();

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockUser.position} at ${mockUser.company}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();
  });

  test('renders Connect and Message buttons', () => {
    renderWithUser();

    expect(
      screen.getByRole('button', { name: /connect/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /message/i })
    ).toBeInTheDocument();
  });
});
