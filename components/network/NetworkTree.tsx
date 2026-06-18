

"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbzarpqRQb7wchRh9H0RQ697PM090Ar51mp5uCpgwiOAVRE42GPU-c1YizIOb8fVNmqt_Q/exec";

type Node = {
  businessId: string;
  displayName: string;
  status: string;
  leftCount: number;
  rightCount: number;
};

const DEFAULT_TREE: Node[] = [
  {
    businessId: "100001",
    displayName: "👑 ID-1",
    status: "ACTIVE",
    leftCount: 0,
    rightCount: 0,
  },
  {
    businessId: "100002",
    displayName: "⬅️ ID-2",
    status: "ACTIVE",
    leftCount: 0,
    rightCount: 0,
  },
  {
    businessId: "100003",
    displayName: "➡️ ID-3",
    status: "ACTIVE",
    leftCount: 0,
    rightCount: 0,
  },
];

export default function NetworkTree() {
  const [nodes, setNodes] = useState<Node[]>(DEFAULT_TREE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTree() {
      try {
        const res = await fetch(
          `${API_BASE}?action=network`,
          { cache: "no-store" }
        );

        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setNodes(json.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTree();
  }, []);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          🌳 CTM Network
        </h2>

        <span className="text-sm text-slate-500">
          {loading ? "Loading..." : "Live"}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {nodes.map((node) => (
          <div
            key={node.businessId}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">
                  {node.displayName}
                </div>

                <div className="text-sm text-slate-500">
                  Business ID: {node.businessId}
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {node.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-3 text-center">
                <div className="text-sm text-slate-500">
                  Left Team
                </div>

                <div className="text-2xl font-bold">
                  {node.leftCount}
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 text-center">
                <div className="text-sm text-slate-500">
                  Right Team
                </div>

                <div className="text-2xl font-bold">
                  {node.rightCount}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

