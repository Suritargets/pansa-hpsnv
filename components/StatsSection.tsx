"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Project Success", target: 753 },
  { label: "Our Equipments", target: 579 },
  { label: "Satisfied Clients", target: 342 },
  { label: "Industry Expertise", target: 231 },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += increment;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, 33);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center py-6 px-4"
            style={{
              borderRight: i < stats.length - 1 ? "1px solid #e5e7eb" : "none",
            }}
          >
            <div
              className="text-4xl md:text-5xl font-extrabold mb-1"
              style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
            >
              <Counter target={stat.target} />
              <sup className="text-2xl ml-1">+</sup>
            </div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
