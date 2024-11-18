//LIBS
import React from "react";
import * as io from "socket.io-client";
import { OrbitControls } from "@react-three/drei";

export const Layer3D = () => {
  return (
    <>
      <OrbitControls />
    </>
  );
};

export default Layer3D;
