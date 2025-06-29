import { useEffect, useState, useRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: 'center' | 'start' | 'end'
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string
    encryptedClassName?: string
    parentClassName?: string
    animateOn?: 'view' | 'hover'
    pauseBetweenAnimations?: number // in ms
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'view',
    pauseBetweenAnimations = 0,
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isScrambling, setIsScrambling] = useState<boolean>(false)
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
    const [isInView, setIsInView] = useState<boolean>(false)
    const containerRef = useRef<HTMLSpanElement>(null)

    // Observer for view-based animation
    useEffect(() => {
        if (animateOn !== 'view') return;
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        };
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [animateOn]);

    // Animation loop effect
    useEffect(() => {
        let interval: number | null = null;
        let timeout: number | null = null;
        let currentIteration = 0;
        let running = true;

        const getNextIndex = (revealedSet: Set<number>): number => {
            const textLength = text.length;
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size;
                case 'end':
                    return textLength - 1 - revealedSet.size;
                case 'center': {
                    const middle = Math.floor(textLength / 2);
                    const offset = Math.floor(revealedSet.size / 2);
                    const nextIndex =
                        revealedSet.size % 2 === 0
                            ? middle + offset
                            : middle - offset - 1;
                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex;
                    }
                    for (let i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i)) return i;
                    }
                    return 0;
                }
                default:
                    return revealedSet.size;
            }
        };

        const availableChars = useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
            : characters.split('');

        const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
            if (useOriginalCharsOnly) {
                const positions = originalText.split('').map((char, i) => ({
                    char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i),
                }));
                const nonSpaceChars = positions
                    .filter((p) => !p.isSpace && !p.isRevealed)
                    .map((p) => p.char);
                for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
                }
                let charIndex = 0;
                return positions
                    .map((p) => {
                        if (p.isSpace) return ' ';
                        if (p.isRevealed) return originalText[p.index];
                        return nonSpaceChars[charIndex++];
                    })
                    .join('');
            } else {
                return originalText
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' ';
                        if (currentRevealed.has(i)) return originalText[i];
                        return availableChars[Math.floor(Math.random() * availableChars.length)];
                    })
                    .join('');
            }
        };

        function clearTimers() {
            if (interval) clearInterval(interval);
            if (timeout) clearTimeout(timeout);
        }

        function startAnimationLoop() {
            clearTimers();
            setRevealedIndices(new Set());
            setIsScrambling(true);
            currentIteration = 0;
            interval = setInterval(() => {
                setRevealedIndices((prevRevealed) => {
                    if (sequential) {
                        if (prevRevealed.size < text.length) {
                            const nextIndex = getNextIndex(prevRevealed);
                            const newRevealed = new Set(prevRevealed);
                            newRevealed.add(nextIndex);
                            setDisplayText(shuffleText(text, newRevealed));
                            return newRevealed;
                        } else {
                            clearTimers();
                            setIsScrambling(false);
                            timeout = setTimeout(() => {
                                if (running) startAnimationLoop();
                            }, pauseBetweenAnimations);
                            return prevRevealed;
                        }
                    } else {
                        setDisplayText(shuffleText(text, prevRevealed));
                        currentIteration++;
                        if (currentIteration >= maxIterations) {
                            clearTimers();
                            setIsScrambling(false);
                            setDisplayText(text);
                            timeout = setTimeout(() => {
                                if (running) startAnimationLoop();
                            }, pauseBetweenAnimations);
                        }
                        return prevRevealed;
                    }
                });
            }, speed);
        }

        if ((animateOn === 'view' && isInView) || (animateOn === 'hover' && isScrambling)) {
            startAnimationLoop();
        } else {
            clearTimers();
            setDisplayText(text);
            setRevealedIndices(new Set());
            setIsScrambling(false);
        }

        return () => {
            running = false;
            clearTimers();
        };
    }, [
        isInView,
        animateOn,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        characters,
        useOriginalCharsOnly,
        pauseBetweenAnimations
    ]);

    // Hover logic for hover mode
    const hoverProps =
        animateOn === 'hover'
            ? {
                onMouseEnter: () => setIsScrambling(true),
                onMouseLeave: () => setIsScrambling(false),
            }
            : {};

    return (
        <motion.span
            ref={containerRef}
            className={`inline-block whitespace-pre-wrap ${parentClassName}`}
            {...hoverProps}
            {...props}
        >
            <span className="sr-only">{displayText}</span>
            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone =
                        revealedIndices.has(index) || !isScrambling
                    return (
                        <span
                            key={index}
                            className={isRevealedOrDone ? className : encryptedClassName}
                        >
                            {char}
                        </span>
                    )
                })}
            </span>
        </motion.span>
    )
} 