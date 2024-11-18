import React, { useState } from "react";
import { useOSC } from "../utils/useOSC";

export const TestComponent = () => {
  const [testText, setTestText] = useState<string>();
  const note1Handler = useOSC("note1", () => setTestText("note1"));
  note1Handler();
  const note2Handler = useOSC("note3", () => setTestText("note3"));
  note2Handler();
  return <h1>{testText}</h1>;
};
