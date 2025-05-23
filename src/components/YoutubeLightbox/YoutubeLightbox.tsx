/* import React, { useEffect, useRef } from 'react';
import './YoutubeLightbox.css'; // Если у тебя есть CSS для этого

interface YoutubeLightboxProps {
  linksBtnsSelector?: string;
}

const YoutubeLightbox: React.FC<YoutubeLightboxProps> = ({ linksBtnsSelector = 'a[data-youtubeLightbox]' }) => {
	const youtubelightboxRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<unknown>(null);

	useEffect(() => {
    interface MyWindow extends Window {
      YT?: any;
      onYouTubeIframeAPIReady?: () => void;
    }

    const win = window as MyWindow;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Проверяем, что window.YT существует, прежде чем пытаться что-то с ним делать
    const intervalId = setInterval(() => {
    	if (typeof win.YT !== 'undefined' && win.YT.Player) {
    		clearInterval(intervalId); // Очищаем интервал, когда YT загрузился

    		win.onYouTubeIframeAPIReady = () => {
    			createLightbox();
    		};
    	}
    }, 50);

    function getYoutubeId(link: string): string {
    	const youtubeidreg =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    	const match = youtubeidreg.exec(link);
    	return match ? match[1] : '';
    }

    function createYouTubePlayer(videoId: string): void {
    	playerRef.current = new win.YT.Player('youtubelightboxPlayer', {
    		videoId: videoId,
    		playerVars: { autoplay: 1 }
    	});
    }

    function createLightbox(): void {
    	const targetLinks = document.querySelectorAll(linksBtnsSelector);

    	targetLinks.forEach((link: Element) => {
    		link.addEventListener('click', (e) => {
    			e.preventDefault();
    			if (youtubelightboxRef.current) {
    				youtubelightboxRef.current.style.display = 'block';
    			}

    			if (!playerRef.current) {
    				createYouTubePlayer(getYoutubeId((link as HTMLAnchorElement).href));
    			} else {
    				(playerRef.current as any).loadVideoById(getYoutubeId((link as HTMLAnchorElement).href));
    			}
    		});
    	});
    }

    // Cleanup
    return () => {
    	clearInterval(intervalId);
    	if (youtubelightboxRef.current) {
    		youtubelightboxRef.current.removeEventListener('click', () => {});
    	}
    };
	}, [linksBtnsSelector]);

	return (
		<div id="youtubelightbox" ref={youtubelightboxRef} style={{ display: 'none' }}>
			<div className="youtubelightbox__centeredchild">
				<div id="youtubelightboxPlayer"></div>
			</div>
		</div>
	);
};

export default YoutubeLightbox; */