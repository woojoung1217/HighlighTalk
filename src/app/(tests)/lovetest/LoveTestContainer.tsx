'use client';

import { useState } from 'react';
import './_loveTestPage.scss';
import FileUpLoader from '@/components/FileUpload/FileUploader';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { shareURL } from '@/utils/shareURL';

function LoveTestContainer({ totalCount }: { totalCount: number }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="loveTestContainer">
      <div className="test-page-cover">
        {currentStep === 1 && (
          <>
            <div className="test-page-container">
              <h1 className="page-header">사랑하는 사람과 나의 톡방 AI 분석</h1>
              <section className="test-page-content">
                <h2 className="page-headerSub">
                  지금 까지 <span className="page-title-count">❤️{totalCount + 500}❤️</span>번의
                  테스트가 진행 됐어요!
                </h2>
                <p className="sub-p">하이라이톡에서 대화내용을 업로드 해 AI분석을 시작 하세요!</p>
                <div className="test-page-action">
                  <button
                    onClick={() => shareURL('🤖하이라이톡에서 테스트 해보세요!')}
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
          </>
        )}

        {currentStep === 2 && (
          <>
            <ProtectedRoute setCurrentStep={setCurrentStep}>
              {/* 인증된 사용자만 이 부분이 렌더링됨 */}
              <FileUpLoader />
            </ProtectedRoute>
          </>
        )}
      </div>
    </div>
  );
}

export default LoveTestContainer;