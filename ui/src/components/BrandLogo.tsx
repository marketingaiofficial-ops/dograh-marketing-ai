import { cn } from "@/lib/utils";

// YourVoiceOS brand lockup: the app icon plus the "YourVoiceOS" wordmark in the
// mono font, matching the original YourVoiceOS app. `mark` renders the icon only
// (collapsed sidebar). `inverse` is kept for callers that sit on an always-dark
// surface; the lockup reads on both themes, so it only forces light text.
// Height is controlled by the caller via className (e.g. "h-7").
export function BrandLogo({
  className,
  inverse = false,
  mark = false,
}: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  const icon = <img src="/yourvoiceos-icon.png" alt="YourVoiceOS" className={cn("w-auto shrink-0 select-none rounded-md object-contain", className)} />;
  if (mark) {
    return icon;
  }
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-mono font-medium", inverse && "text-white")}>
      {icon}
      <span>YourVoiceOS</span>
    </span>
  );
}
