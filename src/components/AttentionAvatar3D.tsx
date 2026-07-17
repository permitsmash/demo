"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { TrafficLight3D } from "@/components/TrafficLight3D";

function TrafficLightScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight
        castShadow
        intensity={1.25}
        position={[4, 8, 6]}
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight intensity={0.3} position={[-5, 4, -3]} color="#ffd6d6" />

      <Float speed={1.2} rotationIntensity={0.04} floatIntensity={0.18}>
        <TrafficLight3D />
      </Float>

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.45}
        scale={8}
        blur={2.6}
        far={4}
        color="#000000"
      />
      <Environment preset="city" />
    </>
  );
}

function AvatarFallback() {
  return (
    <div className="flex h-[360px] w-full max-w-[320px] items-center justify-center rounded-2xl bg-on-primary/10">
      <div className="flex flex-col items-center gap-sm text-on-primary/70">
        <span className="material-symbols-outlined animate-pulse text-[40px]">traffic</span>
        <span className="font-body-sm text-body-sm">Loading…</span>
      </div>
    </div>
  );
}

function AvatarCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.35, 3.6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <TrafficLightScene />
      </Suspense>
    </Canvas>
  );
}

export function AttentionAvatar3D() {
  return (
    <div
      className="attention-avatar-3d relative mx-auto h-[360px] w-full max-w-[320px] shrink-0 md:max-w-[340px]"
      aria-hidden="true"
    >
      <AvatarCanvas />
    </div>
  );
}

export { AvatarFallback };
