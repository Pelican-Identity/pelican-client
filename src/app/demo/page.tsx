"use client";
import React from "react";
import { PelicanAuth } from "@pelican-identity/react";
import { Navbar } from "@/components/blocks/navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-full items-center justify-center">
        <PelicanAuth
          projectId="pi_x9q3z2thk2yn6jgHmUjWAsQ4EiEM7gK7S5UvojqeemDIpDlf"
          publicKey="pk_P7ZP9LpvzHL5B1z4b7OAiX3oZw7NqYRenjGlk232Ug5vnY6U"
          authType="login"
          onSuccess={(data) => {
            console.log("Authentication successful:", data);
          }}
          onError={(error) => {
            console.error("Authentication failed:", error);
          }}
        />
      </div>
    </div>
  );
};

export default page;
