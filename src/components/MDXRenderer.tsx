"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  source: MDXRemoteSerializeResult;
};

const MDXRenderer: React.FC<Props> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MDXRenderer;
