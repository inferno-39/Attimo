export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6">
      <div className="h-px w-24 bg-line animate-pulse" aria-hidden />
      <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Загрузка</p>
    </div>
  );
}
