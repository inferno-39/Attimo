import { Container } from "@/components/layout/container";

function Block({ className }: { className?: string }) {
  return <div className={cnBase(className)} />;
}

function cnBase(extra?: string) {
  return ["animate-pulse rounded-sm bg-mist/70", extra].filter(Boolean).join(" ");
}

export default function ProductLoading() {
  return (
    <div className="bg-canvas min-h-screen">
      <Container size="wide" className="pt-10 pb-section">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)]">
          <div className="space-y-4">
            <Block className="aspect-[3/4] min-h-[min(58vh,620px)] w-full lg:min-h-[min(72vh,800px)]" />
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Block key={i} className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
              ))}
            </div>
          </div>
          <div className="space-y-8 pt-2 lg:pt-8">
            <Block className="h-3 w-20" />
            <Block className="h-10 w-full max-w-md" />
            <Block className="h-4 w-48" />
            <div className="space-y-3 max-w-lg">
              <Block className="h-3 w-full" />
              <Block className="h-3 w-full" />
              <Block className="h-3 w-2/3" />
            </div>
            <Block className="h-8 w-40" />
            <div className="flex gap-3 pt-4">
              <Block className="h-11 w-44 rounded-full" />
              <Block className="h-11 w-44 rounded-full" />
            </div>
          </div>
        </div>
      </Container>
      <Container size="wide" className="border-t border-line/40 py-16">
        <div className="flex gap-2 pb-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Block key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Block key={i} className="h-12 w-full" />
          ))}
        </div>
      </Container>
    </div>
  );
}
