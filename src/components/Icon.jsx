import * as Lucide from "lucide-react";

export default function Icon({ name, ...props }) {
  const Cmp = Lucide[name];
  return Cmp ? <Cmp {...props} /> : null;
}
