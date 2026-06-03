import { ImageResponse } from "next/og";

export const alt =
  "Card Saints — an investment firm focused on the trading card market.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f7f5ee",
          color: "#2f3a4a",
          padding: "100px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          Card Saints
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 40,
            lineHeight: 1.4,
            maxWidth: 880,
            color: "#3a4453",
          }}
        >
          An investment firm focused on the trading card market.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
