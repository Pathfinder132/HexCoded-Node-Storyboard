import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type SourceNodeType = Node<
  {
    title: string;
    tone: string;
    audience: string;
  },
  "source"
>;

export function SourceNode({ data, selected }: NodeProps<SourceNodeType>) {
  return (
    <div
      className={`relative w-[280px] rounded-xl border bg-white p-4 text-slate-800 shadow-sm transition-shadow ${
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
          Source
        </p>
      </div>

      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
        Product Title
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{data.title}</p>

      <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-slate-400">
        Tone
      </p>
      <p className="mt-1 text-sm text-slate-700">{data.tone}</p>

      <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-slate-400">
        Audience
      </p>
      <p className="mt-1 text-sm text-slate-700">{data.audience}</p>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-2.5 !w-2.5 !border-2 !border-white !bg-emerald-500"
      />
    </div>
  );
}
