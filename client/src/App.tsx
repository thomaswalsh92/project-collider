/* eslint-disable */
//LIBRARIES
import * as THREE from "three";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";

//COMPONENTS
import AppInner from "./components/AppInner";
import { TestComponent } from "./components/TestComponent";

export default function App() {
  return (
    <>
      <TestComponent />
      <Canvas>
        <color attach="background" args={["#0A0908"]} />
        <AppInner />
      </Canvas>
    </>
  );
}
