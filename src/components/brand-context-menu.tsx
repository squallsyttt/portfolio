"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { ChanhDaiMark, getMarkSVG } from "./chanhdai-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG();
            copyText(svg);
            toast.success("Copied Mark as SVG");
          }}
        >
          <ChanhDaiMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            toast.info("Wordmark not available yet.");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="#">
            <TriangleDashedIcon />
            Brand Guidelines
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="#" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
