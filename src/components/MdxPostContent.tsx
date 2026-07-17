"use client";

import { useMemo } from "react";
import { runSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

type Props = {
  source: string;
};

export default function MdxPostContent({ source }: Props) {
  const Component = useMemo(() => {
    const compiledModule = runSync(source, {
      ...runtime,
      baseUrl: import.meta.url,
    });
    return compiledModule.default;
  }, [source]);

  return <Component />;
}
