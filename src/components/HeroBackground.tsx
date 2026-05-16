import Image from "next/image";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/lyonsdetailinghero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative">{children}</div>
    </div>
  );
}
