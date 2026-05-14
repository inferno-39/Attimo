import { Container } from "@/components/layout/container";

function Pulse({ className }: { className?: string }) {
  return <div className={["animate-pulse rounded-sm bg-mist/75", className].filter(Boolean).join(" ")} />;
}

export default function RootLoading() {
  return (
    <div className="min-h-[60vh] bg-canvas">
      <Container size="wide" className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl space-y-8">
          <Pulse className="h-3 w-24" />
          <Pulse className="h-10 w-full max-w-md" />
          <div className="space-y-3">
            <Pulse className="h-3 w-full" />
            <Pulse className="h-3 w-full" />
            <Pulse className="h-3 w-2/3" />
          </div>
          <Pulse className="aspect-[16/9] w-full max-w-lg" />
        </div>
      </Container>
    </div>
  );
}
