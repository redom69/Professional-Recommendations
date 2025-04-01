import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import RecommendationForm from '../components/RecommendationForm';
import { RecommendationProvider } from '../context/RecommendationContext';
import { UserProvider } from '../context/UserContext';

function renderWithProviders(ui) {
  return render(
    <UserProvider>
      <RecommendationProvider>{ui}</RecommendationProvider>
    </UserProvider>
  );
}

describe('RecommendationForm', () => {
  test('disables submit button if input is less than 50 characters', async () => {
    renderWithProviders(<RecommendationForm />);
    const textarea = screen.getByPlaceholderText(
      /write your recommendation here/i
    );
    const submitButton = screen.getByRole('button', {
      name: /submit recommendation/i,
    });
    fireEvent.change(textarea, { target: { value: 'Too short' } });
    fireEvent.click(submitButton);

    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'Too short' } });
      fireEvent.click(submitButton);
    });

    expect(
      screen.getByText(/recommendation must be at least 50 characters/i)
    ).toBeInTheDocument();
  });

  test('shows success message on valid submission', async () => {
    renderWithProviders(<RecommendationForm />);
    const textarea = screen.getByPlaceholderText(
      /write your recommendation here/i
    );
    const submitButton = screen.getByRole('button', {
      name: /submit recommendation/i,
    });
    fireEvent.change(textarea, {
      target: {
        value:
          'This is a valid recommendation with more than 50 characters. It is testable.',
      },
    });

    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/recommendation submitted successfully/i)
    ).toBeInTheDocument();
  });
});
