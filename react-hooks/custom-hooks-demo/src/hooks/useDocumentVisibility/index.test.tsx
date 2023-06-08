import { renderHook, act } from '@testing-library/react';

import useDocumentVisibility from './index';

const mockIsBrowser = jest.fn();
const mockVisibilityState = jest.spyOn(document, 'visibilityState', 'get');

jest.mock('../utils/isBrowser.ts', () => {
  return {
    __esModule: true,
    get default() {
      return mockIsBrowser();
    }
  };
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('useDocumentVisibility hook test', () => {
  it('should be defined', () => {
    expect(useDocumentVisibility).toBeDefined();
  });

  it('should return visible when brower is not defined', () => {
    mockVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(false);

    const { result } = renderHook(() => useDocumentVisibility());

    expect(result.current).toBe('visible');
  });

  it('should return visible when visibilityState is visible and return hidden when visibilityState is hidden', () => {
    mockVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(true);
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toBe('hidden');

    mockVisibilityState.mockReturnValue('visible');
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
    });
    expect(result.current).toBe('visible');
  });
  
});
