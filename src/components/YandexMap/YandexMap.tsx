import React, { useRef, useEffect, useCallback } from 'react';
import type { YandexMapProps } from './YandexMap.props';

const YandexMap: React.FC<YandexMapProps> = React.memo(({ center, zoom }) => {
	const mapRef = useRef<HTMLDivElement>(null);

	console.log('Яндекс карта зарендерилась ')

	const loadMap = useCallback(() => {
		ymaps.ready(() => {
			const map = new ymaps.Map(mapRef.current, {
				center: center,
				zoom: zoom,
				controls: ['zoomControl', 'fullscreenControl'],
			});

			const placemark = new ymaps.Placemark(center, {
				balloonContent: `
          <div class="balloon__address">Тут никита бармин живет</div>
        `,
			});

			map.geoObjects.add(placemark);

			// Сохраняем экземпляр карты
			if (mapRef.current) {
				mapRef.current.instance = map;
			}
		});
	}, [center, zoom]);

	useEffect(() => {
		loadMap();

		return () => {
			if (mapRef.current && mapRef.current.instance) {
				// Уничтожаем экземпляр карты
				mapRef.current.instance.destroy();
			}
		};
	}, [loadMap]);

	return (
		<div
			id="map"
			style={{
				width: '50%', height: '350px', background: '#626262'
			}}
			ref={mapRef}
		></div >
	);
});

export default YandexMap;