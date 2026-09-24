import { ImageResponse } from "next/og";

// Home-screen icon for iPhones — same mark as icon.svg, full-bleed because
// iOS rounds the corners itself. Rendered once at build time.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2e2a24",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="#d4af6a"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 30 32 13l21 17" />
            <path d="M18 25v25h28V25" />
            <path d="M26.5 50v-8.5a5.5 5.5 0 0 1 11 0V50" />
          </g>
        </svg>
      </div>
    ),
    size
  );
}
