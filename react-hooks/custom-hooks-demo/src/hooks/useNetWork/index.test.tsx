import { renderHook, act } from '@testing-library/react';

import { useNetwork } from '../index';

describe('useNetwork', () => {
  it('should be defined', () => {
    expect(useNetwork).toBeDefined();
  });

  it('should update the online state when the network status changes', () => {
    const { result } = renderHook(() => useNetwork());

    expect(result.current.online).toBe(true); // initial value should be true

    act(() => {
      window.dispatchEvent(new Event('offline')); // simulate offline event
    });

    expect(result.current.online).toBe(false); // online state should be false

    act(() => {
      window.dispatchEvent(new Event('online')); // simulate online event
    });

    expect(result.current.online).toBe(true); // online state should be true
  });
});
