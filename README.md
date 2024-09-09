# 하이라이톡 HIGHLIGHTALK

> **AI가 보는 우리 톡방은 어떨까?**
>
> <strong>Chat-GPT API를 활용한 카카오톡 채팅방 AI 분석 서비스</strong>

<img src="https://media.discordapp.net/attachments/1265960001546096725/1278044560622096575/image.png?ex=66cf5f40&is=66ce0dc0&hm=38395335c441f893782e129178e6b262dcef0f105bef503899005ec7dd40cde4&=&format=webp&quality=lossless&width=1172&height=979">

**[서비스 바로가기]**

> \*\* vercel용 배포

🔗 https://highligh-talk-cghb.vercel.app/

> \*\* aws용 배포

🔗 https://www.highlightalk.site/

**[테스트용 계정]**

```수정하기
ID: tmuchtalker@gmail.com
PW: 11111111
```

## 1. 프로젝트 소개

### 1-1. 프로젝트 정보

> ✏️ AI가 보는 우리 톡방은 어떨까? <br/> **하이라이톡 서비스로 카카오톡 대화를 AI로 분석해보세요!** 대화방에서 나눈 이야기들을 **GPT-4omini** 모델을 통해 정밀하게 분석해드립니다.

<br/>

| INFO       |                                                                                |
| ---------- | ------------------------------------------------------------------------------ |
| 서비스 URL | https://www.highlightalk.site/                                                 |
| GitHub URL | https://github.com/FRONTENDSCHOOLPLUS2/HighlighTalk                            |
| 개발 기간  | - 기획: 24.07.28 ~ 24.08.11 (약 2주) <br/> - 개발: 24.08.11 ~ 24.08.27(약 2주) |
| 팀 구성    | FE개발자 3인 (김설하, 윤우중, 여다희)                                          |

<br/>

### 1-2. 주요 기능 소개

- **🤖 Chat GPT가 대화 내용을 분석해드려요**
  ‘우리는 어떻게 대화하고 있을까?’, ‘어떤 단어를 가장 많이 사용할까?’ 카카오톡 대화 내역을 바탕으로 우리의 대화 방식을 분석해 시각적으로 정보를 제공해요.
- **📂 .csv 파일을 편집 없이 업로드하세요**
  카카오톡 내보내기 파일을 업로드 하기만 하세요! 최근 대화 내용을 기준으로 하이라이톡이 똑똑하게 분석해드릴게요. **대화 내용은 저장하거나 AI 학습에 활용하지 않고, 분석 후 곧바로 파기됩니다.**
- 🔗 **분석한 결과를 친구에게 공유하세요**
  분석한 결과를 친구에게 바로 공유해보세요. 클립보드에 URL을 복사하거나, 카카오톡 메시지를 바로 전송할 수 있어요.
- 💰 **코인을 충전해 더 재밌는 유료 컨텐츠를 즐겨보세요**
  카카오페이 및 KG이니시스 일반 결제를 지원합니다. 회원가입 시 100 보너스 코인을 선물로 드려요! 보너스 코인으로 유료 컨텐츠를 즐겨보세요. _(현재 결제 기능은 테스트중으로, 결제된 금액은 당일 자정에 환불됩니다.)_

## 2. 팀 소개

### 2-1. Team 티머치토커

- 우리가 협업하는 규칙
  - 커밋 컨벤션 : GitHub Wiki 참고
  - 브랜치 컨벤션 : GitHub Wiki 참고
  - 코드 컨벤션 : GitHub Wiki 참고

### 2-2. 팀원 소개 및 역할 분담

<table width="70%" stlye="">
<thead>
<th width="30%" style="text-align: center; vertical-align: middle;">프론트엔드,팀장</th>
<th width="30%" style="text-align: center; vertical-align: middle;">프론트엔드</th>
<th width="30%" style="text-align: center; vertical-align: middle;">프론트엔드</th>
</thead>
<tr>
<td style="text-align: center; vertical-align: middle;">

<img width="45" alt="프사1" src="https://github.com/user-attachments/assets/62f4a12d-4242-4e7c-b9a9-c583c06c0c02">

</td>
<td style="text-align: center; vertical-align: middle;">

<img width="45" alt="프사2" src="https://github.com/user-attachments/assets/393ee171-1410-4aa8-965c-49d0faf18637" style="text-align: center; vertical-align: middle;">

</td>
<td style="text-align: center; vertical-align: middle;">

<img width="45" alt="프사3" src="https://github.com/user-attachments/assets/8212a3ae-83dc-454e-a46b-b4cae3f59b9c" style="text-align: center; vertical-align: middle;">

</td>

</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">

[김설하](https://github.com/zldnlto)

</td>
<td style="text-align: center; vertical-align: middle;">

[윤우중](https://github.com/woojoung1217)

</td>
<td style="text-align: center; vertical-align: middle;">

[여다희](https://github.com/yeodahui)

</td>
</tr>
</table>

###

<img src="https://github.com/user-attachments/assets/c0a63f68-e24d-439e-aad3-b19444512b70" alt="" width="" />

## 3. 기술 및 개발환경

### 3-1. 기술 스택

- **개발 환경**
  - 개발 언어: `TypeScript`
  - 패키지 매니저: `pnpm`
  - 린팅 & 포맷팅: `ESLint`, `Prettier`
  - 부트스트랩: `create-next-app`
  - API Client: `Bruno`
- **클라이언트**
  - 프레임워크: `Next.js v.14`
  - 상태관리: `Zustand`
  - 스타일링: `SCSS(Module)`
- **백엔드**
  - API 서버: `Node.js + Express`
- **인프라**
  - 데이터베이스: `MongoDB Atlas`
  - 배포: `AWS EC2`

### 3-2. 디렉토리 구조

```txt
├── 📁public
│   ├── 📁image # 이미지 파일 관리
│   └── 📁static # font등 정적 파일 관리
├── 📁src
│   ├── 📁app
│	│	├── 📁(home) # 메인 페이지
│   │   ├── 📁(tests) # 분석 관련 페이지
│   │   ├── 📁(user) # 마이페이지, 로그인
│   │   ├── 📁api # Data Fetching
│   │   ├── 📁posts # 게시판
│   │   ├── 📜error.tsx
│   │   ├── 📜layout.tsx
│   │   ├── 📜loading.tsx
│   │   ├── 📜not-found.tsx
│   │   └── 📜providers.tsx
│   ├── 📜auth.ts
│   ├── 📁components # 공통 컴포넌트
│   ├── 📁data # 더미데이터
│   ├── 📁hooks # 커스텀 훅
│   ├── 📜middleware.ts
│   ├── 📁serverActions # 서버 액션
│   ├── 📁store # 전역 상태
│   ├── 📁styles # 공통 스타일 및 mixin
│   ├── 📁types # 재사용되는 타입
│   └── 📁utils # 유틸 함수
└── 📜tsconfig.json
```

### 3-3. 실행 or 기여하기

> 원활한 실행을 위해서는 환경변수 파일(.env)이 필요합니다. 개발자에게 .env 파일을 요청하세요.

1. Repository 로컬에 복제하기

먼저 Repository를 Clone하고 패키지를 다운로드합니다.
패키지매니저 pnpm이 필요합니다.([Link: pnpm Installation](https://pnpm.io/installation)]

```bash
git clone https://github.com/FRONTENDSCHOOLPLUS2/HighlighTalk.git
pnpm install
```

2. 패키지 설치가 완료되면 다음 명령어로 서버를 실행합니다:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. 이후 브라우저에서 [http://localhost:3000](http://localhost:3000)를 엽니다.

## 4. 유저 플로우 및 DEMO

### 4-1. 유저 플로우

<img src="https://github.com/user-attachments/assets/866cf082-cd2d-4d37-ace2-8d2c3ab16812" alt="하이라이톡 유저플로우" />

### 4-2. DEMO

Link: [https://www.highlightalk.site](https://www.highlightalk.site)

## 5. Trouble Shooting💥

### 5-1. ChatGPT 토큰 수 제한에 맞춘 데이터 가공 및 프롬프팅 방법

카카오톡 대화 내용을 CSV 파일로 내보내면, 오랜 기간 축적된 대화의 양이 많아져 모델이 수용할 수 있는 텍스트 양을 초과하는 문제가 발생했습니다.
CSV 데이터를 확인해보면, 말한 날짜, 시간, 이름, 대화 내용 등이 포함되는데, 이 데이터를 그대로 업로드하면 텍스트 양이 초과됩니다.

예를 들어, 카톡 메시지 한 건이 다음과 같은 형식으로 제공됩니다:

<img src="https://media.discordapp.net/attachments/1265960001546096725/1277981220197761065/image.png?ex=66cf2442&is=66cdd2c2&hm=ca7f1b9d8daeb0670be2e964b6882ad7b04add3a8ac14a951718105e7e8de610&=&format=webp&quality=lossless&width=1195&height=806">

{”Time”:”2024-07-13 20:36:51 "User":"승혁🐵","Message":"잘자라"} 이처럼 불필요한 데이터가 포함된 상태에서는 모델의 입력 한도를 초과하기 쉽습니다.

API가 처리 할 수 있는 데이터 용량을 계산한 결과, 한글 문장으로 약 600~700문장을 처리할 수 있다고 판단했습니다. 따라서 시간 정보나 공백과 같은 불필요한 데이터를 제거하면, 더 많은 대화를 불러와 분석할 수 있다 결론 지었습니다.

이를 위해 CSV 파일을 업로드할 때, 자동으로 불필요한 데이터를 제거하는 가공 과정을 구현했습니다.

다양한 대화 내용에서 불필요한 정보를 가장 빠르게 제거하기 위해, 복잡한 조건 없이 사용할 수 있는 정규 표현식을 사용 했습니다.

```jsx
// CSV 파일 내 필요없는 문자는 제거하는 정규표현식 함수
const removeDateTimeAndUserKey = (text: string): string => {
  const dateTimeRegex = /"Date":"\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}",?/g;
  const cleanedText = text.replace(dateTimeRegex, '').trim();
  return cleanedText.replace(/,}/g, '}').replace(/,]/g, ']').trim();
};

export default removeDateTimeAndUserKey;
```

이 함수는 CSV 파일에서 파싱된 텍스트를 받아 처리하도록 설계되었습니다. 데이터 구조는 대화 내용이 어떤 경우에도 동일하기 때문에, `"Date":"YYYY-MM-DD HH:MM:SS"` 형식의 시간을 찾아 제거하고, `trim()` 메서드를 사용해 양쪽의 공백을 제거합니다.

함수를 사용한 결과, 다음과 같이 대화 내용이 간소화됩니다:

```jsx
// string 형태
{ "Time": "2024-07-13 20:36:51", "User": "승혁🐵", "Message": "잘자라" }
{ "User": "승혁🐵", "Message": "잘자라" }
```

하나의 대화에서는 그 차이가 크지 않지만, 많은 대화 내용 속에서 중복된 데이터를 제거하면, 더 많은 대화를 분석할 수 있습니다.

예를 들어, 아래와 같은 결과를 얻을 수 있습니다:

| 제거 전 1 | 제거 후 2 |
| --------- | --------- |

|
![image.png](https://file.notion.so/f/f/f3dc146f-186e-4b34-ab82-a0bcf1b1ef3f/0b9e7adf-5cae-4392-bf73-3c0528e2ab9c/image.png?table=block&id=4646bda9-1ea6-435b-bd19-678562263b2d&spaceId=f3dc146f-186e-4b34-ab82-a0bcf1b1ef3f&expirationTimestamp=1724853600000&signature=dVeRvWWgeClIBC1_3KzGaaJ55TzRVSPlPxdalAYexTk&downloadName=image.png) | ![image.png](https://file.notion.so/f/f/f3dc146f-186e-4b34-ab82-a0bcf1b1ef3f/dd6ddec0-d1c8-42d3-b59f-cccf63eae4cd/image.png?table=block&id=a240861c-ccba-4205-82fb-21495d224266&spaceId=f3dc146f-186e-4b34-ab82-a0bcf1b1ef3f&expirationTimestamp=1724853600000&signature=90qlgMFyQPOgfP4PeGHFlpF4N3TO7-ZwEj3rDGh5tUI&downloadName=image.png)|

전체적으로 사용하던 토큰의 수가 같은 톡방의 경우 19,000토큰에서 5,700토큰으로

감소 비율 = (

19,000 - 13,000
​
) × 100 ≈ 약 70%를 감소 시켰고 같은 대화방 내용을 더 많은 분량으로 분석할 수 있게 되어, 결과적으로 분석의 정확성을 높이고 더욱 효율적인 결과를 얻을 수 있었습니다.

### 5-2. 소셜 로그인

### 5-3. HTTPS 배포 실패, 유효하지 않은 인증서

AWS EC2를 통해, HTTP로 클라이언트 앱을 배포하였습니다. 그러나 HTTP 환경은 검색 엔진 우선순위 배정에 불이익이 있고, Clipboard API 사용이 불가능한 문제가 발생하여 배포 서버에 SSL 인증서를 적용하고자 하였습니다.

이를 위해 AWS Certification Manager를 통해 SSL 인증서를 발급받아 로드밸런싱을 적용했으나, 이후 https://highlightalk.site에 접근했을 때 _"이 사이트는 보안 연결(HTTPS)이 사용되지 않았습니다"_ 경고가 발생하며 웹사이트에 접근이 불가능하다는 문제가 발생했습니다.
![https 연결 실패](https://media.discordapp.net/attachments/1265960001546096725/1277983156041158717/image.png?ex=66cf2610&is=66cdd490&hm=44c828ae15dcb5dea0b1685e18c9822e7b64a369f7bf817c157eb0a3f097a677&=&format=webp&quality=lossless&width=782&height=700)

브라우저 경고에서 "인증서가 올바르지 않음"이라는 경고를 발견하고, 인증서가 잘 발급되었는지 ACM 대시보드를 재확인 하였습니다. 그 결과 인증서 발급 시 도메인 이름을 '\*.highlightalk.site'으로 지정했기 때문에 **서브도메인이 포함되지 않은 URL에서는 인증서가 유효하지 않다는 문제**를 발견했습니다.

이후 Route53을 통해 www.highlightalk.site에 대한 호스팅 영역 레코드를 생성해줌으로써 인증서가 유효한 URL로 사용자가 접근 가능하도록 조치하였습니다.

### 5-4. 프롬프팅 데이터 생성 후 결과를 서버에 저장해야 하는 이슈

문제 : 대화 내용이 민감한 정보를 포함할 수 있기 때문에, 이를 클라이언트에서 안전하게 전송하고 저장하는 과정에서 보안적인 이슈가 발생 했습니다.

과정은 이렇습니다.

- **CSV 파일 업로드 및 데이터 처리**: 트러블(5-1) 내용
  - CSV 파일을 최적화 후, 파일의 데이터를 사용하여 GPT API와 (POST,GET) 통신할 필요가 있었습니다.
- **API 선택 및 확장**:
  - 요구되는 동작을 제공하는 API 리소스가 없어, 기존의 `posts API`를 사용해야 했습니다.
  - 이 API에서 사용할 수 있는 필드를 확인하는 과정에서 `extra`라는 속성을 발견했습니다.
  - `extra` 필드는 원하는 값을 저장할 수 있었으나, 결과 페이지에서 데이터를 조회해 결과를 생성해야 했기 때문에, GPT가 전송하는 값이 문자 형태가 아닌 JSON 형태로 파싱하여 서버에 전송하는 방법을 채택했습니다.
- **동적 경로 처리**:
  - **문제점**: AI 프롬프트가 `pathname`에 따라 다르게 동작하도록 설계했으나, 클라이언트 컴포넌트에서 URL의 `pathname`을 가져오는 데 어려움이 있었습니다.
  - **해결 방법**: 이 문제를 해결하기 위해 **라우트 핸들러**를 사용하여 경로를 생성했습니다. 클라이언트 측에서는 `pathname`, 대화 내용, 프롬프트를 함께 라우트 핸들러 경로로 `POST` 요청을 통해 전송했습니다. 서버에서는 이 데이터를 수신하여 필요한 처리를 한 후 데이터베이스에 저장했습니다. 이를 통해 데이터가 적절히 분류되고 보안 문제가 해결되었습니다.
- **테스트 결과 분류**:
  - 테스트 결과를 추후 쉽게 분리하기 위해, 테스트의 종류(`freetest`, `lovetest`)를 `type` 필드로 지정하여 전달했습니다.
  - GPT와의 통신 결과를 `extra` 필드에 포함시키고, 동적으로 생성된 `type` 필드도 함께 서버로 전송했습니다. 이를 통해 서버 측에서 테스트 결과를 효과적으로 분류하고 관리할 수 있도록 했습니다.
- **보안 고려**:
  - 대화 내용에는 민감한 정보가 포함될 수 있기 때문에 보안에 신경을 써야 했습니다.
  - 이 과정을 위해 **라우트 핸들러**를 사용하여 클라이언트 측에서 `POST` 요청을 통해 데이터를 서버로 전송하는 방식을 구현했습니다.
- **결과 페이지**
  - 이 후 서버에 게시물에 extra 속성으로 조회를 해서 원하는 결과 값을 가지고 화면을 표시 할 수 있게 됐습니다.

## 6. 프로젝트 회고

### 6-1. Special Point

- PR 후 적극적인 코드리뷰

  - 코드리뷰 예시1 https://github.com/FRONTENDSCHOOLPLUS2/HighlighTalk/pull/95
  - 코드리뷰 예시2 https://github.com/FRONTENDSCHOOLPLUS2/HighlighTalk/pull/111
  - 코드리뷰 예시3 https://github.com/FRONTENDSCHOOLPLUS2/HighlighTalk/pull/66

- 실무와 유사한 개발 환경 조성을 위해 많은 시도

  - 프로젝트 관리: GitHub 프로젝트와 마일스톤을 활용해 체계적인 개발 프로세스 관리.
  - 문서화: Notion과 기술 노트뿐만 아니라 Figma, FigJam을 활용해 시각적인 자료와 함께 소통.

- 효율적인 협업을 위한 데일리 스크럼

  - 효율적인 회의: 데일리 스크럼을 통해 문제를 빠르게 해결하고, 컴팩트한 회의 진행.
  - 템플릿 활용: Notion 템플릿을 사용해 회의 내용을 신속하게 작성하고 공유.
  - 문제 해결 접근법: 스크럼 후 추가적인 논의로 어려운 이슈 해결.

- 기술적인 도전과 성과
  - 기술 학습: 공식 문서를 기반으로 AI, AWS, NEXT 등 새로운 기술들을 학습하고 도전.
  - 비즈니스적 고민: UI 구현을 넘어 토큰 사용 최적화 등 비즈니스적인 측면에서의 고민도 함께 수행.
  - 컨벤션 준수: 프로젝트 전반에서 코드 및 문서화 컨벤션을 철저하게 준수.

### 6-2. 향후 개발 목표

> 향후 버전 업데이트의 우선순위이며 에러가 발생하거나 추가해야 할 기능이 있을 경우 자율적으로 버전 업데이트 / 리팩터링을 진행합니다.

- 숨겨진 `any` 타입 잡아서 타입 커버리지 100% 달성
- 모바일 반응형 뷰 구현 미흡한 부분 수정
- 다양한 테마 상품을 구현 해볼 예정
- 정보 활용에 대해 유저가 이해할 수 있도록, 서비스에 대한 자세한 설명 추가
  - 업로드된 파일의 분석 기준 안내
  - 개인정보는 어떻게 활용되는지에 관한 내용
- 개발의 우선순위로 인해 넣지 않았던 기능들 추가
- 분석 테마 추가 확장
- EC2 t2.small → t2.micro 마이그레이션 위한 빌드최적화

### 6-3. 후기!

- **다희**: 현재 가지고 있는 AI 리소스 내에서 기획한 기능을 과정이 힘들기도 하면서, 수수께끼를 푸는 기분이 들어서 재미있는 경험이었습니다. 개인적으로 프론트엔드 영역에서의 과제 뿐 아니라 더 다양한 문제를 해결해보고자 하는 목표가 있었는데, 이번 프로젝트를 통해 클라우드 인프라를 어떻게 구성할 것인지에 관해 고민하고 학습해볼 수 있었습니다.

- **설하**: GPT와 토큰 사용에 관하여 기획을 하면서 현실적인 부분들을 많이 고려할 수밖에 없었던 프로젝트지 않나 싶습니다. 기획의 결과 기능부터 구현하고 스타일을 입히는 방식이어서 다들 불안함이 많았을텐데, 아직 개선할 부분이 남아있다곤 하나 데모데이 기준 만족할 만한 결과물이 나와 기쁩니다. 로그인, 회원가입, 결제 등 유저와 관련한 파트를 일임해서 진행하였는데 처음에는 익숙하지 않은 영역이었지만 탄탄한 코드의 중요성과 그 역할을 깊이 이해하게 되었습니다.

- **우중**: 이번 프로젝트를 통해 프론트엔드 개발의 범주를 넘어 기획과 디자인 등 다양한 분야를 경험할 수 있었습니다. 처음에는익숙하지 않은 영역이었지만, 점차 각 분야의 중요성과 그 역할을 깊이 이해하게 되었습니다. 프론트엔드 개발자로서 코드 구현에 집중하는 것뿐만 아니라, 전체적인 사용자 경험을 완성하는 데 기여할 수 있는 방안을 고민하게 되었습니다. 다양한 도전 과제를 해결하면서 성장할 수 있었지만, 여전히 부족한 부분도 많다는 것을 느낍니다. 예를 들어, 더 효율적인 협업 방법이나 코드 최적화에 대한 깊은 이해가 필요하다는 것을 깨달았습니다.





<hr/>

# 7. 리팩토링 (우중 2024.0902~)

## 메인페이지 리팩토링 이전 성능

![image](https://github.com/user-attachments/assets/01a17d99-67af-4a29-bfe3-b611b225dae9)


## 문제점

- 메인에서 너무 다양한 요소를 보여주고 swiper 사용 등으로 성능이 안 좋은 것으로 판단
- 이미지가 서버에서 생성 되는데 너무 오랜 시간 소요 최초 로딩 속도와 성능이 매우 안 좋음

## 해결방법

```jsx
<main className="MainPage">
      <div className="main_service">
        <MainSlide /> => priority={true} 로 우선 로딩 되도록 
        <MainItems /> => 최적화 할 내용 없음
      </div>
	      <MainNotice /> => 이미지 로딩을 Lazy로 변경 
      <MainCommPreview /> => 불 필요한 랜더링을 조건부로 제거 
      <MainSeverNotice /> => cache를 force-cache로 변경 
      <WelcomeCoinModal isNewUser={isNewUser?.name} /> 
</main>
```

## 메인 페이지 최적화 이후 성능

![image](https://github.com/user-attachments/assets/1c88c301-f11d-4289-b5f0-a14a065226a9)


## 무료 테스트 인트로 페이지  최적화 이전 성능

![image](https://github.com/user-attachments/assets/90745e22-9e5d-4a16-844a-b225c67a0bdf)


## 무료 테스트 인트로 페이지 최적화 전 코드

```jsx
'use client';

import { useState } from 'react';
import './_FreeTestPage.scss';
import FileUpLoader from '@/components/FileUpload/FileUploader';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { shareURL } from '@/utils/shareURL';

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
        <>
          {/* 현재 로그인 안 한  사용자만 잡는중  */}
          <ProtectedRoute setCurrentStep={setCurrentStep}>
            {/* 인증된 사용자만 이 부분이 렌더링됨 */}
            <FileUpLoader />
          </ProtectedRoute>
        </>
      )}
    </div>
  );
}

export default FreeTestContainer;

```

## 문제점

- funnel 형태로 코드를 구현하다 보니 최초의 한번 로딩 될 때 너무 무거운 코드를 한번에 가져와서 성능적으로 많이 느려지고 사용자가 비교적 오랜 시간 화면이 로딩 되기 까지 기다려야함

![image](https://github.com/user-attachments/assets/343db272-1211-4452-a01c-41af4d102e01)


## 해결방법

- 화면 최초 로딩 시 보여줄 필요가 없는 요소들을  실제 화면에 나타나기전엔 import 하지 않도록 변경
    - react.lazy 로 동적 import 를 사용해 요소들이 필요할 때 동적 렌더링이 되도록
- 사용성을 고려해 Suspense로 요소를 감싸고 요소가 렌더링 되는 동안 로딩을 보여주도록 변경

## 변경된 코드

```jsx
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

```

## 무료 테스트 인트로 페이지 최적화 이후 성능

![image](https://github.com/user-attachments/assets/2375b854-7b25-4c16-a310-83220787cfcf)


- 크롬 라이트하우스 기준 34점 성능 개선 훨씬 사용성이 올라간 것을 체감 할 수 있었음

## 연애 테스트 인트로 페이지 최적화 이전 성능

![image](https://github.com/user-attachments/assets/8d36e933-ed3e-4c3c-8199-60c228d894a9)

## 문제점

- 무료 테스트와 마찬가지로 funnel 방식으로 한번에 방대한 양이 import 됨

## 해결방법

- 화면 최초 로딩 시 보여줄 필요가 없는 요소들을  실제 화면에 나타나기전엔 import 하지 않도록 변경
    - react.lazy 로 동적 import 를 사용해 요소들이 필요할 때 동적 렌더링이 되도록
    - 연애 테스트 페이지에선 결제 모듈로 인해 lazy가 훨씬 효율적으로 동적함

## 변경된 코드

```jsx
'use client';

import { useState, lazy, Suspense } from 'react';
import { shareURL } from '@/utils/shareURL';
import { useSession } from '@/app/providers';
import { useModalStore } from '@/store/ModalStore';
import { TEST_PRODUCT } from '@/data/TEST_PRODUCT';
import { updateCoinData } from '@/serverActions/coinAction';
import './_loveTestPage.scss';
import { createOrderData, updateUserOrderList } from '@/serverActions/orderAction';
import { OrderInfoType } from '@/types/order';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/Spinner/Spinner';

const FileUpLoader = lazy(() => import('@/components/FileUpload/FileUploader'));
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute/ProtectedRoute'));
const PayModal = lazy(() => import('@/components/Modal/PayModal/PayModal'));
const ProductPayModalContents = lazy(
  () => import('@/components/Modal/PayModal/PayModalContents/ProductPayModalContents')
);
const GuestPayModalContents = lazy(
  () => import('@/components/Modal/PayModal/PayModalContents/GuestPayModalContents')
);
const Modal = lazy(() => import('@/components/Modal/Modal'));

function LoveTestContainer({ totalCount }: { totalCount: number }) {
  const session = useSession();
  const [currentStep, setCurrentStep] = useState(1);
  const { isOpen, openModal, closeModal } = useModalStore();
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);

  const TEST_INFO = TEST_PRODUCT.lovetest;
  const userCoin = session?.user?.coin || 0;
  const userId = session?.user?.id!;
  const router = useRouter();

  const handleStartBtnClick = () => {
    const hasPurchased = session?.user?.orderList?.includes(TEST_INFO.code);
    if (hasPurchased) {
      setCurrentStep(2);
    } else {
      openModal();
    }
  };

  const handlePayButton = async () => {
    try {
      await updateCoinData(userId, userCoin - TEST_INFO.price);
      await updateUserOrderList(TEST_INFO.code);

      const orderData: OrderInfoType = {
        order_type: 'pay',
        amount: 0,
        coin_amount: TEST_INFO.price,
        payment_method: TEST_INFO.title,
        extra: {
          balance_before: userCoin,
          balance_after: userCoin - TEST_INFO.price,
        },
      };

      await createOrderData('pay', orderData);
      closeModal();

      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleCloseGuestModal = () => {
    setGuestModalOpen(false);
  };

  const handleGoLoginButton = () => {
    closeModal();
    router.push('/login');
  };

  return (
    <>
      <div className="loveTestContainer">
        <div className="test-page-cover">
          {currentStep === 1 && (
            <>
              <div className="test-page-container">
                <h1 className="page-header">사랑하는 사람과 나의 톡방 AI 분석</h1>
                <section className="test-page-content">
                  <h2 className="page-headerSub">
                    지금 까지 <span className="page-title-count">❤️{totalCount + 120}❤️</span>번의
                    테스트가 진행 되었어요!
                  </h2>
                  <p className="sub-p">하이라이톡에서 대화내용을 업로드 해 AI분석을 시작 하세요!</p>
                  <div className="test-page-action">
                    <button
                      onClick={() => shareURL('🤖하이라이톡에서 테스트 해보세요!')}
                      className="btn n1"
                    >
                      공유하기
                    </button>
                    <button onClick={() => handleStartBtnClick()} className="btn n2">
                      시작하기
                    </button>
                  </div>
                  <div className="page-mokup"></div>
                </section>
              </div>

              <section className="freetest-description">
                <div className="des-header">
                  <h1 className="header-title">많이 표현한 감정을 토대로</h1>
                  <h1 className="header-title">좋아하는 사람과의 관계를 예측하고</h1>
                  <p className="header-sub">
                    다양한 그래프로 사랑하는 사람의 감정을 파악 할 수 있어요
                  </p>
                </div>
                <div className="des-image n1"></div>
                <div className="des-image n2"></div>
              </section>
            </>
          )}
        </div>
        {currentStep === 2 && (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute setCurrentStep={setCurrentStep}>
              <FileUpLoader />
            </ProtectedRoute>
          </Suspense>
        )}
      </div>
      {isOpen && session?.user && (
        <Suspense fallback={<LoadingSpinner />}>
          <PayModal
            isOpen={isOpen}
            onClose={closeModal}
            title="결제를 진행합니다."
            amount={100}
            session={session}
            content=""
          >
            <ProductPayModalContents
              test={TEST_PRODUCT.lovetest}
              coin={session?.user?.coin}
              closeModal={closeModal}
              handlePayButton={handlePayButton}
            />
          </PayModal>
        </Suspense>
      )}

      {isGuestModalOpen && (
        <Suspense fallback={<LoadingSpinner />}>
          <Modal
            isOpen={isGuestModalOpen}
            onClose={handleCloseGuestModal}
            title="회원 전용 콘텐츠입니다."
            content="로그인 후 이용해주세요!"
            buttons={[]}
          >
            <GuestPayModalContents
              isOpen={isOpen}
              handleCloseModal={handleCloseGuestModal}
              handleGoLoginButton={handleGoLoginButton}
            />
          </Modal>
        </Suspense>
      )}
    </>
  );
}

export default LoveTestContainer;

```

## 연애 테스트 페이지 최적화 이후 성능

![image](https://github.com/user-attachments/assets/2d68f171-1e3c-4698-a24d-b9724bdfcfe2)

