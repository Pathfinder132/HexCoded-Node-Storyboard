"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Connection,
  type Edge,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { RouterNode, type RouterNodeType } from "@/components/nodes/RouterNode";
import { ScriptNode, type ScriptNodeType } from "@/components/nodes/ScriptNode";
import { SourceNode, type SourceNodeType } from "@/components/nodes/SourceNode";
import { VisualNode, type VisualNodeType } from "@/components/nodes/VisualNode";

const NODE_SPACING_X = 350;

const nodeTypes = {
  source: SourceNode,
  script: ScriptNode,
  visual: VisualNode,
  router: RouterNode,
} satisfies NodeTypes;

type StoryboardNode =
  | SourceNodeType
  | ScriptNodeType
  | VisualNodeType
  | RouterNodeType;

type PipelineNode = {
  type: StoryboardNode["type"];
  data: StoryboardNode["data"];
};

function StoryboardCanvas() {
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<StoryboardNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((current) =>
        addEdge(
          {
            ...connection,
            animated: true,
            style: { stroke: "#10B981", strokeWidth: 2 },
          },
          current,
        ),
      );
    },
    [setEdges],
  );

  const generateStoryboard = useCallback(async () => {
    if (!url.trim()) {
      setError("Paste a product URL to generate a storyboard.");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-storyboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate storyboard");
      }

      const pipeline = (await response.json()) as PipelineNode[];

      const nextNodes: StoryboardNode[] = pipeline.map((item, index) => ({
        id: `${item.type}-${index}`,
        type: item.type,
        position: { x: index * NODE_SPACING_X, y: 80 },
        data: item.data,
      })) as StoryboardNode[];

      let nextEdges: Edge[] = [];

      for (let index = 0; index < nextNodes.length - 1; index += 1) {
        nextEdges = addEdge(
          {
            id: `e-${nextNodes[index].id}-${nextNodes[index + 1].id}`,
            source: nextNodes[index].id,
            target: nextNodes[index + 1].id,
            animated: true,
            style: { stroke: "#10B981", strokeWidth: 2 },
          },
          nextEdges,
        );
      }

      setNodes(nextNodes);
      setEdges(nextEdges);

      requestAnimationFrame(() => {
        fitView({ padding: 0.2, duration: 400 });
      });
    } catch {
      setError("Could not generate the storyboard. Try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [fitView, setEdges, setNodes, url]);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-slate-50 text-slate-900">
      <header className="z-10 flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-3 shadow-sm">
        <div className="shrink-0">
          <p className="text-base font-extrabold tracking-tight text-slate-900">
            HEX<span className="text-emerald-600">CODED</span>
          </p>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
            AI Creative Studio
          </p>
        </div>

        <div className="ml-auto flex w-full max-w-3xl items-center justify-end gap-2">
          <input
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") generateStoryboard();
            }}
            placeholder="Paste a product URL"
            className="h-10 min-w-0 flex-1 max-w-lg rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />

          <button
            type="button"
            onClick={generateStoryboard}
            disabled={isGenerating}
            className="h-10 shrink-0 rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isGenerating ? "Generating…" : "Generate Storyboard"}
            {!isGenerating && <span className="ml-2">→</span>}
          </button>
        </div>
      </header>

      {error ? (
        <p className="border-b border-red-100 bg-red-50 px-5 py-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      <div className="relative min-h-0 flex-1 overflow-hidden bg-slate-50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          colorMode="light"
          fitView
          defaultEdgeOptions={{
            animated: true,
            style: { stroke: "#10B981", strokeWidth: 2 },
          }}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#CBD5E1" gap={24} size={1.2} />
          <Controls className="!overflow-hidden !rounded-xl !border !border-slate-200 !bg-white !shadow-sm" />
        </ReactFlow>

        {nodes.length === 0 ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Build your creative pipeline
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Paste a product URL above and generate a storyboard.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full flex-1 bg-slate-50" />;
  }

  return (
    <ReactFlowProvider>
      <StoryboardCanvas />
    </ReactFlowProvider>
  );
}