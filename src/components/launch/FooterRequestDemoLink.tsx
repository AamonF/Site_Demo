"use client";

import { useDemoRequest } from "@/components/launch/DemoRequestProvider";

export function FooterRequestDemoLink() {
  const { open } = useDemoRequest();
  return (
    <li>
      <button
        type="button"
        onClick={open}
        className="text-sm text-zinc-400 hover:text-white transition-colors text-left w-full"
      >
        Request a demo
      </button>
    </li>
  );
}
