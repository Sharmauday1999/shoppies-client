import React, { useState } from "react";

import { useAppContext } from "../libs/contextLib";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        
        <h1>Shoppies Nominations</h1>
        <p className="text-muted">Log in to nominate movies</p>
      </div>
    </div>
  );
}