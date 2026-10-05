export default function Avatar({ size = 48, color = "#9aa5b1", label = "", square = false, src }) {
  const style = { width: size, height: size, borderRadius: square ? 4 : "50%", fontSize: size * 0.38 };
  if (src) return <img className="avatar" src={src} alt={label} style={style} />;
  const initials = label.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return <div className="avatar" style={{ ...style, background: color }}>{initials}</div>;
}
