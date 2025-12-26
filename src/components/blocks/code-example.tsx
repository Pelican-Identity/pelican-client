"use client";

const CodeExample = () => {
  return (
    <div className="hidden md:block">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-2">
          <span className="text-xs font-medium text-gray-600">
            Code Example
          </span>
        </div>
        <div className="overflow-hidden rounded-b-xl bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
            <span className="text-xs font-medium text-gray-300">
              TypeScript
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `import { PelicanAuth } from "@pelican-identity/react";

<PelicanAuth
  publicKey="pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  projectId="pi_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  authType="login"
  onError={(error) => console.log(error)}
  onSuccess={(identity) => {
    sendToBackend(identity);
  }}
/>`,
                );
              }}
              className="text-xs text-gray-400 hover:text-gray-200"
            >
              Copy
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="text-gray-300">
              <span className="text-purple-400">import</span>{" "}
              <span className="text-yellow-300">{"{ PelicanAuth }"}</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">"@pelican-identity/react"</span>
              <span className="text-gray-500">;</span>
              {"\n\n"}
              <span className="text-blue-400">{"<PelicanAuth"}</span>
              {"\n  "}
              <span className="text-cyan-300">publicKey</span>
              <span className="text-gray-500">=</span>
              <span className="text-green-400">
                "pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              </span>
              {"\n  "}
              <span className="text-cyan-300">projectId</span>
              <span className="text-gray-500">=</span>
              <span className="text-green-400">
                "pi_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              </span>
              {"\n  "}
              <span className="text-cyan-300">authType</span>
              <span className="text-gray-500">=</span>
              <span className="text-green-400">"login"</span>
              {"\n  "}
              <span className="text-cyan-300">onError</span>
              <span className="text-gray-500">=</span>
              <span className="text-yellow-300">{"{"}</span>
              <span className="text-gray-500">(</span>
              <span className="text-orange-300">error</span>
              <span className="text-gray-500">)</span>{" "}
              <span className="text-purple-400">={">"}</span>{" "}
              <span className="text-blue-300">console</span>
              <span className="text-gray-500">.</span>
              <span className="text-yellow-300">log</span>
              <span className="text-gray-500">(</span>
              <span className="text-orange-300">error</span>
              <span className="text-gray-500">)</span>
              <span className="text-yellow-300">{"}"}</span>
              {"\n  "}
              <span className="text-cyan-300">onSuccess</span>
              <span className="text-gray-500">=</span>
              <span className="text-yellow-300">{"{"}</span>
              <span className="text-gray-500">(</span>
              <span className="text-orange-300">identity</span>
              <span className="text-gray-500">)</span>{" "}
              <span className="text-purple-400">={">"}</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
              {"\n    "}
              <span className="text-yellow-300">sendToBackend</span>
              <span className="text-gray-500">(</span>
              <span className="text-orange-300">identity</span>
              <span className="text-gray-500">)</span>
              <span className="text-gray-500">;</span>
              {"\n  "}
              <span className="text-yellow-300">{"}"}</span>
              <span className="text-yellow-300">{"}"}</span>
              {"\n"}
              <span className="text-blue-400">{"/>"}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeExample;
