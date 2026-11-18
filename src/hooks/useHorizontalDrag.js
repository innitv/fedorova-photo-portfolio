import { useCallback, useEffect, useRef, useState } from 'react';

export function useHorizontalDrag(totalFrames) {
  const trackRef = useRef(null);
  const frameRefs = useRef([]);

  const [progressPct, setProgressPct] = useState(12);
  const [activeFrame, setActiveFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [badge, setBadge] = useState({ visible: false, pressed: false, x: 0, y: 0 });

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      setProgressPct(100);
      return;
    }
    const ratio = track.scrollLeft / maxScroll;
    setProgressPct(Math.min(100, Math.max(12, 12 + ratio * 88)));
  }, []);

  const jumpToFrame = useCallback((idx) => {
    const track = trackRef.current;
    const frame = frameRefs.current[idx];
    if (!track || !frame) return;
    setActiveFrame(idx);
    track.scrollTo({
      left: frame.offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = 0;
    setActiveFrame(0);
    updateProgress();

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    const onMouseEnter = () => {
      if (window.matchMedia('(pointer: fine)').matches) {
        setBadge((b) => ({ ...b, visible: true }));
      }
    };

    const onMouseLeave = () => {
      isDown = false;
      setIsDragging(false);
      setBadge((b) => ({ ...b, visible: false, pressed: false }));
    };

    const onMouseMove = (e) => {
      setBadge((b) => ({ ...b, x: e.clientX, y: e.clientY }));
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.35;
      track.scrollLeft = scrollStart - walk;
    };

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX;
      scrollStart = track.scrollLeft;
      setIsDragging(true);
      setBadge((b) => ({ ...b, pressed: true }));
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      setIsDragging(false);
      setBadge((b) => ({ ...b, pressed: false }));
    };

    track.addEventListener('wheel', onWheel, { passive: false });
    track.addEventListener('scroll', updateProgress);
    track.addEventListener('mouseenter', onMouseEnter);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mousemove', onMouseMove);
    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      track.removeEventListener('wheel', onWheel);
      track.removeEventListener('scroll', updateProgress);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mousemove', onMouseMove);
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [totalFrames, updateProgress]);

  return {
    trackRef,
    frameRefs,
    progressPct,
    activeFrame,
    isDragging,
    badge,
    jumpToFrame,
  };
}
