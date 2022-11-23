import 'jest-preset-angular/setup-jest';

const localStorageMock = (function () {
  let storage: any = {};

  return {
    getItem(key: string): string | null {
      return storage[key] || null;
    },
    setItem(key: string, value: string): void {
      storage[key] = value;
    },
    removeItem(key: string) {
      delete storage[key];
    },
    clear(): void {
      storage = {};
    }
  }
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});


