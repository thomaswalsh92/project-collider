/* eslint-disable */
//LIBRARIES
import * as THREE from "three";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";

//LAYER COMPONENTS
import { Layer3D } from "./components/Layer3D";

export default function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#0A0908"]} />
        <Layer3D />
      </Canvas>
    </>
  );
}
