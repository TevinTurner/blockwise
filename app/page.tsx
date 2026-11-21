import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="w-full px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <Image
            src="/logo.png"
            alt="Blockwise"
            width={360}
            height={128}
            className="h-auto w-[180px]"
            priority
          />
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <Image
          src="/pip/pip-hero.png"
          alt="Pip, your Blockwise learning companion"
          width={280}
          height={389}
          className="mb-7 h-auto w-[220px] sm:w-[280px]"
          priority
        />
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Applied AI, block by block.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed sm:text-xl">
          Interview prep for Applied AI engineering that teaches hands-on and
          adapts to how you learn.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full bg-coral px-8 py-3 text-lg font-extrabold text-white transition-colors hover:bg-coral-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-deep"
        >
          Start learning
        </button>
      </main>
    </div>
  );
}
