/**
 * Petits drapeaux en SVG (rendu identique sur tous les OS, contrairement aux emojis).
 * bf = Burkina Faso, ma = Maroc.
 */
export function Flag({ code, className }: { code: "bf" | "ma"; className?: string }) {
  if (code === "bf") {
    return (
      <svg
        viewBox="0 0 3 2"
        preserveAspectRatio="xMidYMid slice"
        className={className}
        role="img"
        aria-label="Drapeau du Burkina Faso"
      >
        <rect width="3" height="1" fill="#EF2B2D" />
        <rect y="1" width="3" height="1" fill="#009E49" />
        <path
          d="M1.5 0.6 L1.594 0.871 L1.880 0.876 L1.652 1.049 L1.735 1.324 L1.5 1.16 L1.265 1.324 L1.348 1.049 L1.120 0.876 L1.406 0.871 Z"
          fill="#FCD116"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 3 2"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Drapeau du Maroc"
    >
      <rect width="3" height="2" fill="#C1272D" />
      <path
        d="M1.5 0.6 L1.735 1.324 L1.120 0.876 L1.880 0.876 L1.265 1.324 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="0.085"
        strokeLinejoin="round"
      />
    </svg>
  );
}
