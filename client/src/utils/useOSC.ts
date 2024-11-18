import * as io from "socket.io-client";

type OSCMessage =
  | "note1"
  | "note2"
  | "note3"
  | "note4"
  | "contour1"
  | "contour2"
  | "contour3";

type UseOSC = (subscribeTo: OSCMessage, callback: () => void) => () => void;

const socket = io.connect("http://localhost:3001");
socket.connect();

//this function needs to allow socket.on's to be attached to any components that call it
//to-do eventually be good for this hook to be able to take an array of events
export const useOSC: UseOSC = (subscribeTo, callback) => {
  return () => {
    socket.on(subscribeTo, () => {
      callback();
    });
  };
};
