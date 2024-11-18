//LIBS
import React from "react";
import * as io from "socket.io-client";
import { OrbitControls } from "@react-three/drei";
import { TestComponent } from "./TestComponent";

const socket = io.connect("http://localhost:3001");
socket.connect();

export const AppInner = () => {
  //to-do figure out how to get discrete data through the WS to get a contour

  return (
    <>
      <OrbitControls />
    </>
  );
};

export default AppInner;
