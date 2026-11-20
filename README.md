# TOSO 土小

뿌리에서 출발한 작은 물건들 — From roots to small goods.

한국 전통 유물에서 영감을 얻은 토소의 브랜드 랜딩페이지.
HTML/CSS/JavaScript로 제작한 정적 웹사이트이며 별도 빌드와 백엔드가 필요하지 않습니다.

## 로컬 실행

```sh
python3 -m http.server 4173
```

브라우저에서 http://localhost:4173 을 엽니다.

## Cloudflare Pages

- Framework preset: None
- Build command: 비워두기
- Build output directory: `.`
- Production branch: `main`

## 카페24 연결

`app.js`의 `SHOP_URL`에 실제 쇼핑몰 주소를 입력합니다.
각 제품의 `url`에 해당 상품 페이지를 지정할 수 있습니다.
주소가 비어 있으면 준비 중 안내가 표시됩니다. API 키는 필요하지 않습니다.

## 이미지와 모델

- 로고: 제공된 `toso_bi.ai`에서 렌더링한 이미지
- 붓다메이커: 제공된 실제 제품 사진
- 사자연적: 제공된 STL 형상의 경량 3D 미리보기. 색상과 재질은 시안입니다.
- 발굴터: AI 생성 연출 이미지. 창업자나 실제 제품을 촬영한 사진이 아닙니다.

모바일과 데스크톱에서 발굴 이미지는 크롭하지 않고 전체를 표시합니다.
모션 감소 설정에서는 제품 반짝임 애니메이션이 정지됩니다.
