import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-green-100 py-12 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Image src="/sohwakhaeng-main.png" alt="소확행 소개" width={400} height={300} className="mx-auto rounded-xl mb-4" />
        <br></br>
        <h1 className="text-4xl font-bold text-green-700">[소확행💘] 소소하지만 확실한, 행복한 만남 💕</h1>
        <p className="text-lg text-green-800">2025년 7월 한정 초특가 이벤트 진행 중!</p>
        <Card className="bg-white shadow-xl rounded-2xl border-0">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">🎉 첫 매칭 무료!</h2>
            <p className="text-green-700">※ 매칭(쌍방 수락 후 연결) 후 연락처 교환 시에만 결제</p>
            <ul className="text-left list-disc list-inside space-y-2">
              <li><b>성비 철저 관리</b> + 얼굴 / 전신 / 명함 사진 통한 신원 인증</li>
              <li><b>매칭 확정 후 결제</b>로 불필요한 비용 부담 없음</li>
              <li><b>전문직 회원 다수</b>: 의사, 변호사, 대기업, 아나운서 등</li>
              <li><b>결혼정보회사보다 합리적</b> – 1회 매칭 2만원 → <b>이벤트! 최초 1회 무료!</b></li>
              <li><b>전문 매칭 매니저</b> → 수천건의 소개팅을 성사시킨 경험</li>
              <li><b>최초 15건 프로필 제공!</b> 이후 매주 1회, 2건의 프로필 정기 제공</li>
            </ul>

            <div className="bg-green-200 p-4 rounded-xl">
              <p className="text-green-800 font-medium flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" /> 이벤트 기간: 2025년 7월 1일 ~ 7월 31일
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-600 mb-2">📷 등록 전 준비물</h3>
          <ul className="text-green-800 space-y-1">
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> 본인 얼굴 사진 2장 이상 (상대방이 직접 보고 결정하는 것이니 매력있는 사진으로 부탁드립니다)</li>
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> 전신 사진 2장 이상 (상대방이 직접 보고 결정하는 것이니 매력있는 사진으로 부탁드립니다)</li>
            <li><CheckCircle className="inline w-4 h-4 text-green-600 mr-2" /> 명함 사진 1장</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-600 mb-2">👩‍⚕️👨‍💼 활동 중인 회원</h3>
          <p className="text-green-800">의사 · 변호사 · 회계사 · 대기업 · 스튜어디스 · 아나운서 · 무용과 · 필라테스 강사 등</p>
        </div>

        <div className="mt-10">
          <a href="https://m.site.naver.com/1JTHq" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl">
              <Sparkles className="mr-2 w-5 h-5" /> 지금 바로 등록하기
            </Button>
          </a>
          <p className="mt-2 text-sm text-green-700">3분이면 등록 끝! 소확행에서 새로운 인연을 만나보세요 🌿</p>
        </div>
      </div>
    </div>
  );
}
