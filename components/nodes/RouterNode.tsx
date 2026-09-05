import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type RouterNodeType = Node<
  {
    recommendedVideoModel: string;
    avatarModel: string;
    motionScale: string;
  },
  "router"
>;

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2.5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

export function RouterNode({ data, selected }: NodeProps<RouterNodeType>) {
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
          Model Router
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <SettingRow
          label="Recommended Video Model"
          value={data.recommendedVideoModel}
        />
        <SettingRow label="Avatar Model" value={data.avatarModel} />
        <SettingRow label="Motion Scale" value={data.motionScale} />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-2.5 !w-2.5 !border-2 !border-white !bg-emerald-500"
      />
    </div>
  );
}
