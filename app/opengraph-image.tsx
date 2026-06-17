import { ImageResponse } from "next/og";
import { salonInfo } from "@/data/salon";

export const runtime = "edge";
export const alt = `${salonInfo.name} - Peluquería de lujo`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c9a962, transparent)",
          }}
        />
        <p
          style={{
            fontSize: 24,
            letterSpacing: 8,
            color: "#c9a962",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Palermo · Buenos Aires
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: "#f5f0e8",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {salonInfo.name}
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#a39e94",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          {salonInfo.tagline}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c9a962, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
