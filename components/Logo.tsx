import Image from 'next/image';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/tevexxo-logo.svg"
        alt="Tevexxo logo"
        width={compact ? 34 : 48}
        height={compact ? 34 : 48}
        priority
        className="block h-[34px] w-[34px] shrink-0 md:h-[38px] md:w-[38px]"
      />
      <span className="font-display text-xl font-bold tracking-tight text-current">tevexxo</span>
    </span>
  );
}
