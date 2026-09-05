import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { useState } from "react";

export type ScriptNodeType = Node<
  {
    hook: string;
    valueProp: string;
    cta: string;
  },
  "script"
>;

function ScriptField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <label className="flex flex-col gap-1">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <textarea
        value={fieldValue}
        onChange={(event) => setFieldValue(event.target.value)}
        onPointerDown={(event) => event.stopPropagation()}
        rows={2}
        className="nodrag nopan resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
      />
    </label>
  );
}

export function ScriptNode({ data, selected }: NodeProps<ScriptNodeType>) {
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
          Script
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <ScriptField label="Hook" value={data.hook} />
        <ScriptField label="Value Prop" value={data.valueProp} />
        <ScriptField label="CTA" value={data.cta} />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-2.5 !w-2.5 !border-2 !border-white !bg-emerald-500"
      />
    </div>
  );
}
