declare global {
  interface Window {
    ymaps?: unknown;
  }
  // Глобальный объект ymaps, предоставляемый Яндекс.Картами
  declare const ymaps: unknown;
}
export {};