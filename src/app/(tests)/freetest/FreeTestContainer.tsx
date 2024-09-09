'use client';
import React, { lazy, Suspense, useState } from 'react';
import './_FreeTestPage.scss';
import { shareURL } from '@/utils/shareURL';
import { LoadingSpinner } from '@/components/Spinner/Spinner';

const FileUpLoader = lazy(() => import('@/components/FileUpload/FileUploader'));
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute/ProtectedRoute'));

function FreeTestContainer({ totalCount }: { totalCount: number }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="test-page-cover">
      {currentStep === 1 && (
        <>
          <div className="test-page-container">
            <h1 className="page-header">우리 톡방의 AI 분석</h1>
            <section className="test-page-content">
              <h2 className="page-headerSub">
                지금 까지 <span>⭐️{totalCount + 1000}⭐️</span>번의 테스트가 진행 됐어요!
              </h2>
              <p className="sub-p">하이라이톡에서 대화내용을 업로드 해 AI분석을 시작 하세요!</p>
              <div className="test-page-action">
                <button
                  onClick={() => {
                    shareURL('🤖하이라이톡에서 테스트 해보세요!');
                  }}
                  className="btn n1"
                >
                  공유하기
                </button>
                <button onClick={() => setCurrentStep(2)} className="btn n2">
                  시작하기
                </button>
              </div>
              <div className="page-mokup"></div>
            </section>
          </div>

          <section className="freetest-description">
            <div className="des-header">
              <h1 className="header-title">대화 내용 뿐만 아니라</h1>
              <h1 className="header-title">나와 대화하는 친구들의 성향까지</h1>
              <p className="header-sub">함께 대화한 친구들의 MBTI를 예측 해 볼 수 있어요</p>
            </div>
            <div className="des-image"></div>
          </section>

          <section className="freetest-card">
            <h1 className="card-title">어떤 분석을 해주나요?</h1>
            <div className="card-img n1"></div>
            <div className="card-img n2"></div>
            <div className="card-img n3"></div>
            <div className="card-img n4"></div>
          </section>
        </>
      )}

      {currentStep === 2 && (
        <Suspense fallback={<LoadingSpinner />}>
          <ProtectedRoute setCurrentStep={setCurrentStep}>
            <FileUpLoader />
          </ProtectedRoute>
        </Suspense>
      )}
    </div>
  );
}

export default FreeTestContainer;
