"use client";
import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "@/app/Routes/HomePage";
import Provider from "./Context/provider"
export default function Home() {
  return (
    <React.StrictMode>
    <NextUIProvider>
      <Provider>
      <HomePage/>
      </Provider>
    </NextUIProvider>
    </React.StrictMode>
  );
}
