import { renderHook, act } from '@testing-library/react';

import { useInViewport} from '../index';

describe('test useInViewport', () => {
  it('should be defined', () => {
    expect(useInViewport).toBeDefined();
  });

  let container: HTMLDivElement;
  let mockIntersectionObserver: jest.Mock<any, any>;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return inViewport and ratio', () => {
    const { result } = renderHook(() => useInViewport(container));

    const calls = mockIntersectionObserver.mock.calls;

    const [onChange] = calls[calls.length - 1];

    act(() => {
      onChange([
        {
          container,
          isIntersecting: true,
          intersectionRatio: 0.5,
        },
      ]);
    });

    const [inViewport, ratio] = result.current;

    expect(inViewport).toBeTruthy();
    expect(ratio).toBe(0.5);
  });

  it('should work with options', () => {
    const { result } = renderHook(() =>
      useInViewport(container, {
        root: container,
      })
    );

    const calls = mockIntersectionObserver.mock.calls;

    const [onChange] = calls[calls.length - 1];

    act(() => {
      onChange([
        {
          container,
          isIntersecting: true,
        },
      ]);
    });

    const [inViewport] = result.current;
    expect(inViewport).toBeTruthy();
  });
});