import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (<>
    <Canvas flat camera={{ fov: 35 }}>
      {/* <OrbitControls /> */}
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={4.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive/>
      </EffectComposer>
    </Canvas>
    <div className="desc">
      this is my portfolio
    </div>
    </>
  );
};

export default App;
