import { render, fireEvent, renderHook, act } from '@testing-library/react';

import useHover from './index';

describe('useHover hook test', () => {
  it('should be defined', () => {
    expect(useHover).toBeDefined();
  });

  it('should return true when mouse enter and false when mouse leave', () => {
    const { getByText } = render(<div>Hover</div>);

    const { result } = renderHook(() => useHover(getByText('Hover')));

    act(() => void fireEvent.mouseEnter(getByText('Hover')));
    expect(result.current).toBe(true);

    act(() => void fireEvent.mouseLeave(getByText('Hover')));
    expect(result.current).toBe(false);
  });

  it('should function as expected', () => {
    const { getByText } = render(<div>Hover</div>);

    let count = 0;
    let flag = false;

    const { result } = renderHook(() => {
      return useHover(getByText('Hover'), {
        onEnter: () => {
          count++;
        },
        onChange: (isHovered) => {
          flag = isHovered;
        },
        onLeave: () => {
          count--;
        },
      });
    });

    expect(result.current).toBe(false);

    act(() => void fireEvent.mouseEnter(getByText('Hover')));
    expect(result.current).toBe(true);
    expect(count).toBe(1);
    expect(flag).toBe(true);

    act(() => void fireEvent.mouseLeave(getByText('Hover')));
    expect(result.current).toBe(false);
    expect(count).toBe(0);
    expect(flag).toBe(false);
  });
});