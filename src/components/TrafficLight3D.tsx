"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Group, MeshStandardMaterial, PointLight } from "three";

const HOUSING = "#1a1a1a";
const POLE = "#4a5568";
const RED = "#e53935";
const YELLOW = "#fdd835";
const GREEN = "#43a047";

const GREEN_ON = 4;
const YELLOW_ON = 2;
const RED_ON = 4;
const CYCLE = GREEN_ON + YELLOW_ON + RED_ON;

const DIM = 0.07;
const ON = 1;

function TrafficLightLamp({
  color,
  emissive,
  position,
  materialRef,
}: {
  color: string;
  emissive: string;
  position: [number, number, number];
  materialRef: React.RefObject<MeshStandardMaterial | null>;
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[0.24, 32]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.05]} castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          emissive={emissive}
          emissiveIntensity={DIM}
          roughness={0.15}
          metalness={0.05}
        />
      </mesh>
    </group>
  );
}

function setLamp(
  material: MeshStandardMaterial | null,
  point: PointLight | null,
  active: boolean,
  litColor: string,
  dimColor: string,
  lightColor: string,
) {
  if (material) {
    material.emissiveIntensity = active ? ON : DIM;
    material.color.set(active ? litColor : dimColor);
    material.emissive.set(active ? lightColor : dimColor);
  }
  if (point) {
    point.intensity = active ? 1.6 : 0;
  }
}

export function TrafficLight3D() {
  const groupRef = useRef<Group>(null);
  const redMat = useRef<MeshStandardMaterial>(null);
  const yellowMat = useRef<MeshStandardMaterial>(null);
  const greenMat = useRef<MeshStandardMaterial>(null);
  const redLight = useRef<PointLight>(null);
  const yellowLight = useRef<PointLight>(null);
  const greenLight = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const phase = t % CYCLE;

    let active: "green" | "yellow" | "red";
    if (phase < GREEN_ON) {
      active = "green";
    } else if (phase < GREEN_ON + YELLOW_ON) {
      active = "yellow";
    } else {
      active = "red";
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.45) * 0.08;
    }

    setLamp(greenMat.current, greenLight.current, active === "green", GREEN, "#1b5e20", GREEN);
    setLamp(yellowMat.current, yellowLight.current, active === "yellow", YELLOW, "#5d4e06", YELLOW);
    setLamp(redMat.current, redLight.current, active === "red", RED, "#4a1212", RED);
  });

  return (
    <group ref={groupRef} position={[0, -0.55, 0]}>
      <mesh position={[0, -0.95, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.1, 1.9, 24]} />
        <meshStandardMaterial color={POLE} roughness={0.45} metalness={0.55} />
      </mesh>

      <mesh position={[0, -1.92, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.32, 0.36, 0.14, 24]} />
        <meshStandardMaterial color={POLE} roughness={0.5} metalness={0.45} />
      </mesh>

      <RoundedBox
        args={[0.72, 1.85, 0.45]}
        radius={0.1}
        smoothness={4}
        position={[0, 0.55, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={HOUSING} roughness={0.35} metalness={0.25} />
      </RoundedBox>

      <mesh position={[0, 0.55, -0.18]} castShadow>
        <boxGeometry args={[0.78, 1.92, 0.18]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.3} />
      </mesh>

      <group position={[0, 0.55, 0.24]}>
        <group position={[0, 0.52, 0]}>
          <TrafficLightLamp color={RED} emissive={RED} position={[0, 0, 0]} materialRef={redMat} />
          <pointLight ref={redLight} position={[0, 0, 0.3]} color={RED} intensity={0} distance={3} decay={2} />
        </group>
        <group position={[0, 0, 0]}>
          <TrafficLightLamp color={YELLOW} emissive={YELLOW} position={[0, 0, 0]} materialRef={yellowMat} />
          <pointLight ref={yellowLight} position={[0, 0, 0.3]} color={YELLOW} intensity={0} distance={3} decay={2} />
        </group>
        <group position={[0, -0.52, 0]}>
          <TrafficLightLamp color={GREEN} emissive={GREEN} position={[0, 0, 0]} materialRef={greenMat} />
          <pointLight ref={greenLight} position={[0, 0, 0.3]} color={GREEN} intensity={0} distance={3} decay={2} />
        </group>
      </group>
    </group>
  );
}
