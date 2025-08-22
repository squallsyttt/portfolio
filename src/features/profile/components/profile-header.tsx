import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

// import { PronounceMyName } from "./pronounce-my-name"; // 语音发音功能已禁用
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 select-none max-sm:hidden">
            <div className="animate-pulse font-mono text-xs tracking-widest uppercase">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                FULL
              </span>
              <span className="mx-1 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">
                STACK
              </span>
              <span className="text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
                DEVELOPER
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
            </SimpleTooltip>
            {/* 语音发音功能已禁用 */}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
