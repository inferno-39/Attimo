import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/common/fade-in";
import { SITE_TAGLINE } from "@/constants/site";

export const metadata: Metadata = {
  title: "О бренде",
  description: "Философия Attimo: память, эмоция и ручная работа.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-line/60 bg-ivory/30">
        <Container size="wide" className="max-w-4xl py-14 sm:py-20 lg:py-28">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">О бренде</p>
          <h1 className="mt-4 font-serif text-display-xl text-graphite text-balance sm:mt-6">Мы ловим Attimo</h1>
          <p className="mt-6 font-serif text-serif-lead text-stone sm:mt-8">{SITE_TAGLINE}</p>
        </Container>
      </div>
      <Container size="wide" className="max-w-3xl space-y-12 py-14 sm:space-y-16 sm:py-20 lg:py-24">
        <FadeIn>
          <h2 className="mb-6 font-serif text-display-lg text-graphite sm:mb-8">Ювелирное слово малой громкости</h2>
          <div className="space-y-5 font-sans text-body-readable text-stone">
            <p>
              Attimo — не про «набор SKU». Это авторская практика, где металл дышит сдержаннее рынка, а клиентская
              история задаёт главный вопрос перед верстаком: какой именно ваш момент вы хотели бы носить?
            </p>
            <p>
              Никаких громогласных SALE, никакой гонки за «товар месяца». Мы сохраняем скорость близкой к книжному
              издательству: издание малой тирации, редакция времени между коллекциями и уважение к чувственной памяти
              тела и кольца как следу на пальце.
            </p>
            <p>
              Роскошь здесь — в тишине геометрии, точности финишей и возможности быть незаметным в толпе, но узнаваемым
              себе любимому человеку. Ручное золото, иногда платина или палладированные сплавы, камень без крика если
              вы так решите — и пространство для гравировки, которую не видят чужие.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="grid gap-8 sm:grid-cols-3 border-y border-line/70 py-12">
          {[
            { k: "Серии", v: "4–11 изделий" },
            { k: "Срок", v: "8–26 недель" },
            { k: "Приватность", v: "студия только по записи" },
          ].map((row) => (
            <div key={row.k} className="space-y-2">
              <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">{row.k}</p>
              <p className="font-serif text-2xl text-graphite">{row.v}</p>
            </div>
          ))}
        </FadeIn>
      </Container>
    </div>
  );
}
