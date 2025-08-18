import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/images/pbailogo.svg"
          alt="Palm Beaches AI Logo"
          width={300}
          height={300}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-center">
          The Palm Beaches AI website will be coming soon!
        </h1>
      </main>
    </div>
  );
}
