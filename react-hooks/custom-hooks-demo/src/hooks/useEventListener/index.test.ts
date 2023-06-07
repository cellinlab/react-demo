import { renderHook } from '@testing-library/react';

import useEventListener from './index';

describe('useEventListener hook test', () => {
  it('should be defined', () => {
    expect(useEventListener).toBeDefined();
  });
  
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should add event listener', () => {
    let count: number = 0;
    const onClick = () => {
      count++;
    };

    const {
      rerender,
      unmount,
    } = renderHook(() => useEventListener('click', onClick, container));

    document.body.click();
    expect(count).toBe(0);

    container.click();
    expect(count).toBe(1);

    rerender();

    container.click();
    expect(count).toBe(2);

    unmount();

    container.click();
    expect(count).toBe(2);
  });
});
