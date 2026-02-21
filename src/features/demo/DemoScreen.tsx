"use client";
import React, { useState } from "react";
import { AuthType, PelicanAuth } from "@pelican-identity/react";
import { Navbar } from "@/components/blocks/navbar";
import { ForDevelopers } from "@/components/blocks/for-developers";

const DemoScreen = ({
  public_key,
  project_id,
}: {
  public_key: string;
  project_id: string;
}) => {
  const [authType, setAuthType] = useState<AuthType>("login");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const handleSuccess = (data: any) => {
    setResult(data);
    setError(null);
  };

  const handleError = (err: any) => {
    setError(err);
    setResult(null);
  };

  const clearResults = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mt-20 flex w-full items-start justify-center px-4 py-8">
        <div className="w-full max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column - Auth Component */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Pelican Identity SDK Demo
                </h2>
                <p className="text-center text-xs text-gray-600">
                  Click the button below to initiate authentication
                </p>
                <PelicanAuth
                  key={authType}
                  projectId={project_id}
                  publicKey={public_key}
                  authType={authType}
                  onSuccess={handleSuccess}
                  onError={handleError}
                />
              </div>

              <div className="rounded-xl bg-white p-6">
                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                  Authentication Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setAuthType("login");
                      clearResults();
                    }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      authType === "login"
                        ? "bg-primary text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Authenticate
                  </button>
                  <button
                    onClick={() => {
                      setAuthType("signup");
                      clearResults();
                    }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      authType === "signup"
                        ? "bg-primary text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Onboarding
                  </button>
                  <button
                    onClick={() => {
                      setAuthType("id-verification");
                      clearResults();
                    }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      authType === "id-verification"
                        ? "bg-primary text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ID Verification
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-xs text-blue-900">
                  <strong>Note:</strong> The Pelican Vault app is required to
                  complete authentication.
                </p>
              </div>
            </div>

            {/* Right Column - Results Display */}
            <div className="flex max-w-[90svw] flex-col gap-4 lg:max-w-full">
              {result && (
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                        <svg
                          className="h-4 w-4 text-green-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Authentication Successful
                      </h3>
                    </div>
                    <button
                      onClick={clearResults}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gray-900">
                    <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
                      <span className="text-xs font-medium text-gray-300">
                        Response Data
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            JSON.stringify(result, null, 2),
                          );
                        }}
                        className="text-xs text-gray-400 hover:text-gray-200"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="max-h-[600px] overflow-auto p-4 text-xs text-green-400">
                      <code>{JSON.stringify(result, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                        <svg
                          className="h-4 w-4 text-red-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Authentication Failed
                      </h3>
                    </div>
                    <button
                      onClick={clearResults}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gray-900">
                    <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
                      <span className="text-xs font-medium text-gray-300">
                        Error Details
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            JSON.stringify(error, null, 2),
                          );
                        }}
                        className="text-xs text-gray-400 hover:text-gray-200"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="max-h-[600px] overflow-auto p-4 text-xs text-red-400">
                      <code>{JSON.stringify(error, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              )}

              {!result && !error && (
                <div className="rounded-xl bg-white p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      className="h-8 w-8 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-sm font-medium text-gray-900">
                    No results yet
                  </h3>
                  <p className="text-sm text-gray-500">
                    Complete authentication to see the response data here
                  </p>
                </div>
              )}
            </div>
          </div>
          <ForDevelopers />
        </div>
      </div>
    </div>
  );
};

export default DemoScreen;
