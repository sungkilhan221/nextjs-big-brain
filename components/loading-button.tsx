import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function LoadingButton({
  isLoading,
  children,
  loadingText,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
}) {
  return (
    <Button
      className="flex gap-1 items-center"
      disabled={isLoading}
      type="submit"
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}