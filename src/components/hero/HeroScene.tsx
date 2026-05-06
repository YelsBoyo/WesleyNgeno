"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function Knot() {
  const material = useMemo(
    () => ({
      color: "#ffffff",
      roughness: 0.25,
      metalness: 0.2,
      transparent: true,
      opacity: 0.9,
    }),
    [],
  );

  return (
    <mesh>
      <torusKnotGeometry args={[0.6, 0.22, 180, 24]} />
      <meshStandardMaterial {...material} />
    </mesh>
  );
}

export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 sm:h-72">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[var(--accent)] blur-3xl" />
        <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-[var(--accent-2)] blur-3xl" />
      </div>

      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.1, 2.6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 3]} intensity={1.1} />
        <directionalLight position={[-2, -1, 2]} intensity={0.55} />

        {reducedMotion ? (
          <group rotation={[0.2, 0.25, 0]}>
            <Knot />
          </group>
        ) : (
          <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.9}>
            <group rotation={[0.2, 0.25, 0]}>
              <Knot />
            </group>
          </Float>
        )}
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

