import Reveal from "./Reveal";
import type { ReactNode } from "react";

type Props = {
  num: string;
  children: ReactNode;
};

export default function SectionHeader({ num, children }: Props) {
  return (
    <Reveal className="section-header">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{children}</h2>
    </Reveal>
  );
}
