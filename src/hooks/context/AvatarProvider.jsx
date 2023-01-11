import { useEffect, useMemo, useState } from "react";
import { AvatarContext } from "./AvatarContext";

export default function AvatarProvider({ children }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [hat, setHat] = useState();
  const [eyewear, setEyewear] = useState();
  const [face, setFace] = useState();
  const [body, setBody] = useState();

  return (
    <AvatarContext.Provider value={{ hat, eyewear, face, body, setHat, setEyewear, setFace, setBody }}>
      {children}
    </AvatarContext.Provider>
  );
}
