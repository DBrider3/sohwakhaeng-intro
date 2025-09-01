import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "소확행💘 - 소소하지만 확실한, 행복한 만남 💕",
  description: "2025년 9월 초특가 이벤트 진행 중!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
