declare global {
  interface Window {
    ymaps?: typeof ymaps; // Используем typeof для ссылки на глобальный объект ymaps
  }

  const ymaps: typeof ymaps;  // Объявляем глобальную переменную ymaps
}