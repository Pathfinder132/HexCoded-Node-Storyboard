import { useState } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type VisualNodeType = Node<
  {
    scene1Prompt: string;
    scene2Prompt: string;
    scene3Prompt: string;
  },
  "visual"
>;

function PromptBlock({
  label,
  prompt,
}: {
  label: string;
  prompt: string;
}) {
  const [value, setValue] = useState(prompt);

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onPointerDown={(event) => event.stopPropagation()}
        rows={3}
        className="nodrag nopan resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
      />
    </label>
  );
}

export function VisualNode({ data, selected }: NodeProps<VisualNodeType>) {
  return (
    <div
      className={`relative w-[300px] rounded-xl border bg-white p-4 text-slate-800 shadow-sm transition-shadow ${
        selected
          ? "border-emerald-500 shadow-md shadow-emerald-500/10"
          : "border-slate-200"
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-2.5 !w-2.5 !border-2 !border-white !bg-emerald-500"
      />

      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
          Visual Prompts
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <PromptBlock label="Scene 1" prompt={data.scene1Prompt} />
        <PromptBlock label="Scene 2" prompt={data.scene2Prompt} />
        <PromptBlock label="Scene 3" prompt={data.scene3Prompt} />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-2.5 !w-2.5 !border-2 !border-white !bg-emerald-500"
      />
    </div>
  );
}
