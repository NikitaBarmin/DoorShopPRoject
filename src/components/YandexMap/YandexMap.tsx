import React, { useRef, useEffect, useCallback } from 'react';
import type { YandexMapProps } from './YandexMap.props';

const YandexMap: React.FC<YandexMapProps> = React.memo(({ center, zoom }) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstance = useRef<unknown>(null);

	const loadMap = useCallback(() => {
		if (typeof ymaps === 'undefined') return;
		(ymaps as unknown as { ready: (cb: () => void) => void }).ready(() => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const map = new (ymaps as any).Map(mapRef.current, {
				center: center,
				zoom: zoom,
				controls: ['zoomControl', 'fullscreenControl']
			});

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const placemark = new (ymaps as any).Placemark(center, {
				balloonContent: `
          <div class="balloon__address">Тут никита бармин живет</div>
        `
			});

			map.geoObjects.add(placemark);

			// Сохраняем экземпляр карты
			mapInstance.current = map;
		});
	}, [center, zoom]);

	useEffect(() => {
		loadMap();

		return () => {
			if (mapInstance.current) {
				(mapInstance.current as { destroy: () => void }).destroy();
				mapInstance.current = null;
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