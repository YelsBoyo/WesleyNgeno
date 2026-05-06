import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(900px 600px at 15% 10%, rgba(94,234,212,0.20), transparent 60%), radial-gradient(800px 520px at 85% 25%, rgba(167,139,250,0.18), transparent 55%), #070A12",
          color: "#EAF0FF",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          Wesley Ngeno Kiplang’at
        </div>
        <div style={{ marginTop: 18, fontSize: 32, opacity: 0.88 }}>
          Systems Engineer · Portfolio
        </div>
        <div style={{ marginTop: 22, fontSize: 22, opacity: 0.72, maxWidth: 920, lineHeight: 1.35 }}>
          Systems that remove manual work — outcomes, architecture, and operational reality.
        </div>
        <div style={{ marginTop: 32, fontSize: 18, opacity: 0.7 }}>wesley.dev</div>
      </div>
    ),
    size,
  );
}

