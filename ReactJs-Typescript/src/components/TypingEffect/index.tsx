import { useEffect, useRef, useState, useTransition } from "react";

export default function TypingEffect({
  text = "I'm Frontend Developer !",
  delay = 100,
}) {
  const [displayText, setDisplayText] = useState("");
  const velocityText = useRef({ speed: 1, endIndex: 0 });
  const [isPending, startTransition] = useTransition();
  let timer: ReturnType<typeof setInterval> | null = null;

  useEffect(() => {
    timer = setInterval(() => {
      if (velocityText.current.endIndex === text.length) {
        velocityText.current.speed = -1;
      }
      if (velocityText.current.endIndex === 0) {
        velocityText.current.speed = 1;
      }

      velocityText.current.endIndex += velocityText.current.speed;
      startTransition(() => {
        setDisplayText(text.slice(0, velocityText.current.endIndex));
      });
    }, delay);

    return () => {
      timer && clearInterval(timer);
    };
  }, [delay, text]);

  return (
    <h2 className="mt-10 text-3xl font-bold tracking-widest text-center">
      {displayText}
    </h2>
  );
}
