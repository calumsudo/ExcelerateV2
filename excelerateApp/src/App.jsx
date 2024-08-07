import React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function App() {
  return (
    <NextUIProvider>
    <div className="min-h-screen max-h-full bg-zinc-950">
      <div className="font-bold text-white">Testing ww</div>
    </div>
    </NextUIProvider>
  );
}