type ClearHistoryButtonProps = {
  onClear: () => void;
};

export default function ClearHistoryButton({
  onClear,
}: ClearHistoryButtonProps) {
  return (
    <button
      onClick={onClear}
      className="inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
    >
      Clear History
    </button>
  );
}
