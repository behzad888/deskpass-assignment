import {render, screen, fireEvent} from '@testing-library/react';
import Tooltip from './Tooltip';

//Some simple tests
describe('Tooltip component', () => {
  test('renders tooltip', () => {
    render(
      <Tooltip title="This is a tooltip">
        <button data-testid="target">Simple Button</button>
      </Tooltip>
    );
    const element = screen.getByTestId('target');
    fireEvent.mouseOver(element);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAccessibleName('This is a tooltip');
  });
  test('renders exotic title', () => {
    render(
      <Tooltip title={<div>This is a tooltip</div>}>
        <button data-testid="target">Simple Button</button>
      </Tooltip>
    );
    const element = screen.getByTestId('target');
    fireEvent.mouseOver(element);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAccessibleName('This is a tooltip');
  });
});
