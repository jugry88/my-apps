# 내 앱 모음 (my-apps)

직접 만든 웹앱들을 한곳에 모아 관리하는 저장소예요.

## 구조

```
my-apps/
├─ index.html      ← 앱 모음 첫 화면 (앱 목록)
├─ README.md       ← 지금 이 파일
├─ picket/         ← 앱 1: 모션 피켓
│  ├─ index.html
│  └─ README.md
└─ service/        ← 앱 2: 봉사 보고
   ├─ index.html, sw.js, manifest.webmanifest, 아이콘
   └─ README.md
```

- 앱 하나 = 폴더 하나. 새 앱은 새 폴더로 추가해요.
- 새 앱을 추가하면 첫 화면 `index.html`의 `APPS` 목록에도 한 묶음을 추가해요.
- 앱마다 폴더 안 `README.md`에 무엇을 하는 앱인지, 무엇을 고쳤는지 기록해요.

## 공개 주소

| 앱 | 주소 | 넷리파이 설정 |
|---|---|---|
| 앱 모음 첫 화면 | https://jugry88-apps.netlify.app | 기본 폴더: (비움) |
| 모션 피켓 | https://motion-picket.netlify.app | 기본 폴더: `picket` |
| 봉사 보고 | https://jugry88-apps.netlify.app/service/ | (앱 모음 사이트 안) |

## 수정 방법

1. 이 저장소의 파일을 고쳐서 저장(커밋)해요.
2. 넷리파이가 자동으로 새 버전을 올려요. 링크는 그대로예요.
