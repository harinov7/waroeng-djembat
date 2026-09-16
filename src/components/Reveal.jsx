import useReveal from '../hooks/useReveal';

/**
 * Wrap any block of content to fade + slide it in the first time it
 * scrolls into view. Pass `delay` (ms) to stagger multiple Reveals
 * inside the same section.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
