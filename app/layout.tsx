import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "소확행 - 소개팅 서비스",
  description: "2025년 8월 한정 초특가 이벤트 진행 중!",
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
