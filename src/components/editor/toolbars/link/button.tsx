"use client";

import { Link } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useToolbar } from "@/components/editor/toolbars/toolbar-provider";
import { useEditorState } from "@tiptap/react";

const LinkToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { editor } = useToolbar();
    const state = useEditorState({
      editor,
      selector: (ctx) => ({
        active: ctx.editor.isActive("link"),
        disabled: !ctx.editor.can().setLink({ href: "" }),
      }),
    });
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              editor?.isActive("link") && "bg-accent",
              className
            )}
            onClick={(e) => {
              editor.commands.startEditLink();
              onClick?.(e);
            }}
            disabled={state.disabled}
            ref={ref}
            {...props}
          >
            {children || <Link className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Link</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

LinkToolbar.displayName = "LinkToolbar";

export { LinkToolbar };
