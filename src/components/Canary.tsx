"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";

export const Canary: FC = () => {
  const segments = useSelectedLayoutSegment();
  return <code>{JSON.stringify(segments)}</code>;
};
