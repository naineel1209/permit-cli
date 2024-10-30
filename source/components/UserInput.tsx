import React, { useState } from 'react';
import { useInput, Box, Text } from 'ink'

export default function UserInput(
  {
    title,
    description,
    onSubmit,
  }: {
    title: string,
    description: string,
    onSubmit: (name: string) => void
  }
) {
  const [userInput, setUserInput] = useState('');

  useInput((input, key) => {
    // Handle Input
    if (key.return) {
      onSubmit(userInput);
    } else if (key.backspace) { // Handle Backspaces
      setUserInput(userInput.slice(0, userInput.length - 1));
    }

    // Update User Input
    if (input && input !== '\r') {
      setUserInput(userInput + input);
    }
  });

  return (
    <Box flexDirection="column">
      <Text
        underline
        bold
        color="green"
      >{title}</Text>
      <Text
        italic
        color="gray"
      >{description}</Text>
      <Box flexDirection="row">
        <Text
          bold
          color="green"
        >
          {'>'}
        </Text>
        <Text>
          {userInput}
        </Text>
      </Box>
    </Box>
  );
}