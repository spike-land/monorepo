import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatInterface from '../ChatInterface';

// Mock the ChatFC component
jest.mock('../ChatDrawer', () => ({
  ChatFC: ({ handleSendMessage, input, setInput }) => (
    <div>
      <input
        data-testid="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleSendMessage(input)}>Send</button>
    </div>
  ),
}));

describe('ChatInterface', () => {
  const mockOnCodeUpdate = jest.fn();
  const mockOnClose = jest.fn();

  it('renders without crashing', () => {
    const { getByTestId } = render(
      <ChatInterface onCodeUpdate={mockOnCodeUpdate} isOpen={true} onClose={mockOnClose} />
    );
    expect(getByTestId('chat-input')).toBeInTheDocument();
  });

  it('handles sending a message', async () => {
    const { getByTestId, getByText } = render(
      <ChatInterface onCodeUpdate={mockOnCodeUpdate} isOpen={true} onClose={mockOnClose} />
    );

    const input = getByTestId('chat-input');
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(getByText('Send'));

    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  it('closes when isOpen is false', () => {
    const { queryByTestId } = render(
      <ChatInterface onCodeUpdate={mockOnCodeUpdate} isOpen={false} onClose={mockOnClose} />
    );
    expect(queryByTestId('chat-input')).not.toBeInTheDocument();
  });

  // Add more tests as needed for other functionalities
});
