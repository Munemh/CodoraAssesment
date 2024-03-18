import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

// Define your component
export function MyComponent(props) {
  return <Text>{props.text}</Text>;
}

// Write your tests using describe() and it()
describe('MyComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MyComponent text="Hello, world!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const tree = renderer.create(<MyComponent text="Hello, world!" />);
    const text = tree.root.findByType(Text);
    expect(text.props.children).toBe('Hello, world!');
  });
});
