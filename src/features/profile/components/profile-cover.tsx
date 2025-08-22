import { BrandContextMenu } from "@/components/brand-context-menu";
import { WEBSITE_INFO } from "@/config/personal";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "relative flex items-center justify-center overflow-hidden",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px"
        )}
      >
        {/* 背景图片或渐变 */}
        <div
          className={cn(
            "absolute inset-0",
            WEBSITE_INFO.coverImage
              ? "bg-cover bg-center bg-no-repeat"
              : "bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"
          )}
          style={
            WEBSITE_INFO.coverImage
              ? {
                  backgroundImage: `url(${WEBSITE_INFO.coverImage})`,
                }
              : undefined
          }
        />

        {/* 可选的遮罩层，让文字更清晰 */}
        {WEBSITE_INFO.coverImage && (
          <div className="absolute inset-0 bg-black/30" />
        )}

        {/* 内容区域 */}
        <div className="relative z-10">
          {/* 这里可以放你想要的内容，现在暂时留空 */}
        </div>
      </div>
    </BrandContextMenu>
  );
}
