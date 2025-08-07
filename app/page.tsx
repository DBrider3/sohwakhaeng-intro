import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, CheckCircle, Heart, Users, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="relative">
          <Image 
            src="/sohwakhaeng-main.png" 
            alt="소확행 소개" 
            width={450} 
            height={340} 
            className="mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            NEW
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight">
            소확행💘
          </h1>
          <p className="text-2xl font-medium text-emerald-800 opacity-90">
            소소하지만 확실한, 행복한 만남 💕
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
            <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
            2025년 8월 한정 초특가 이벤트!
          </div>
        </div>
        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border-0 overflow-hidden">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                첫 매칭 50% 할인!
              </h2>
              <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
            </div>
            
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-2xl border border-emerald-200">
              <p className="text-emerald-800 font-medium text-center">
                ※ 매칭(쌍방 수락 후 연결) 후 연락처 교환 시에만 결제
              </p>
            </div>

            <div className="grid gap-4 text-left">
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-800">성비 철저 관리</span>
                  <span className="text-blue-700"> + 얼굴 / 전신 / 명함 사진 통한 신원 인증</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-green-800">매칭 확정 후 결제</span>
                  <span className="text-green-700">로 불필요한 비용 부담 없음</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-purple-800">전문직 회원 다수</span>
                  <span className="text-purple-700">: 의사, 변호사, 대기업, 아나운서 등</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                <Sparkles className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="text-amber-800">
                  <span className="font-bold">결혼정보회사보다 합리적</span> – 1회 매칭 2만원 → 
                  <span className="font-bold text-red-600 ml-1">이벤트! 최초 1회 50% 할인!</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
                <Heart className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-teal-800">전문 매칭 매니저</span>
                  <span className="text-teal-700"> → 수천건의 소개팅을 성사시킨 경험</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100">
                <Users className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-rose-800">최초 15건 프로필 제공!</span>
                  <span className="text-rose-700"> 이후 매주 1회, 2건 이상의 프로필 정기 제공</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-200 to-teal-200 p-6 rounded-2xl border border-emerald-300 shadow-lg">
              <p className="text-emerald-900 font-bold text-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3" /> 
                이벤트 기간: 2025년 8월 1일 ~ 8월 31일
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0 p-6">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
              📷 등록 전 준비물
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0 flex-shrink-0" />
                <div className="text-emerald-800">
                  <span className="font-semibold">본인 얼굴 사진 2장 이상</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0 flex-shrink-0" />
                <div className="text-teal-800">
                  <span className="font-semibold">전신 사진 2장 이상</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0 flex-shrink-0" />
                <div className="text-blue-800">
                  <span className="font-semibold">명함 사진 1장</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0 p-6">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
              👩‍⚕️👨‍💼 활동 중인 회원
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["의사", "변호사", "회계사", "대기업", "스튜어디스", "아나운서", "무용과", "필라테스 강사"].map((job, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-lg text-center font-medium text-purple-800 border border-purple-200">
                  {job}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <a href="https://m.site.naver.com/1JTHq" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Sparkles className="mr-3 w-6 h-6 animate-pulse" /> 
              지금 바로 등록하기
            </Button>
          </a>
          <br></br>
          <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg inline-block">
            <p className="text-emerald-800 font-medium">
              ⏱️ 3분이면 등록 끝! 소확행에서 새로운 인연을 만나보세요 🌿
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
