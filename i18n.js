const i18n = {
  ko: {
    // Navigation
    navLotto: "로또 번호 생성",
    navPet: "반려동물 궁합",
    navAbout: "소개",
    navBlog: "블로그",
    navTerms: "이용약관",
    navPrivacy: "개인정보처리방침",
    navContact: "제휴문의",

    // Common
    themeDark: "🌙 Dark Mode",
    themeLight: "☀️ Light Mode",
    langToggle: "English",

    // Index (Lotto)
    lottoTitle: "명리 로또 번호 추천기",
    lottoSubtitle: "이름, 생년월일, 날짜를 입력하면<br>그날의 기운을 반영한 명리학 감성 로또 번호 5세트를 추천합니다.",
    labelName: "이름",
    namePlaceholder: "이름을 입력하세요",
    labelBirth: "생년월일",
    labelDate: "운세를 볼 날짜",
    generateBtn: "이름 반영 로또 번호 추천받기",
    lottoFooter: "이 페이지는 이름과 날짜를 숫자 흐름으로 변환해 명리학적 분위기를 더한 번호 추천 도구다. 실제 당첨 예측기가 아니라 재미와 개인화 요소를 결합한 형태로 보면 된다.",
    alertInput: "이름, 생년월일, 날짜를 모두 입력해 주세요.",
    setSuffix: "번 추천 세트",
    analysisTitle: "명리 해석 요약",
    analysisResult1: "이름 <strong>{name}</strong> 의 수리값 합은 <strong>{total}</strong>, 글자 수는 <strong>{length}</strong>로 반영되었다.",
    analysisResult2: "선택한 날짜 기준 오행 흐름은 목({wood}) · 화({fire}) · 토({earth}) · 금({metal}) · 수({water}) 로 계산되었다.",
    analysisResult3: "오늘의 중심 기운은 <strong>{element}</strong>이며, {text}",
    wood: "목", fire: "화", earth: "토", metal: "금", water: "수",
    woodText: "성장과 확장의 기운이 강하다. 새로운 선택과 넓혀가는 흐름이 강조되는 날이다.",
    fireText: "활동성과 추진력이 살아난다. 빠른 판단과 강한 실행력이 잘 맞는 흐름이다.",
    earthText: "균형과 안정의 기운이 중심이다. 무리한 승부보다 중심을 잡는 감각이 중요하다.",
    metalText: "정리와 선별의 기운이 강하다. 숫자를 압축하고 집중하는 흐름이 어울린다.",
    waterText: "직관과 유연함의 기운이 강하다. 감각적으로 흐름을 읽는 방향이 잘 맞는다.",

    // Pet Test
    petTitle: "반려동물 궁합 테스트",
    petSubtitle: "나와 우리 아이의 사진을 올려보세요.<br>오늘의 오행 기운으로 보는 특별한 교감 지수를 확인하세요.",
    labelPet: "우리 아이 (반려동물)",
    labelOwner: "나 (반려인)",
    petPlaceholder: "반려동물 사진 업로드",
    ownerPlaceholder: "내 사진 업로드",
    analyzeBtn: "궁합 분석하기",
    loadingText: "데이터를 분석 중입니다...",
    scoreLabel: "교감 지수",
    rcElementLabel: "핵심 원소",
    rcEnergyLabel: "에너지 흐름",
    rcKeywordLabel: "교감 키워드",
    rcTipLabel: "오늘의 팁",
    retryBtn: "다시 테스트하기",
    shareBtn: "결과 공유하기",
    alertUpload: "반려동물과 주인 사진을 모두 업로드해 주세요.",
    shareTitle: "반려동물 궁합 결과",
    shareText: "나와 우리 아이의 교감 지수는 {score}점! 지금 확인해보세요.",
    copyMsg: "결과 링크가 복사되었습니다.",

    // SEO Content - Lotto
    seoLottoTitle: "명리학과 숫자의 상관관계: 왜 이름과 생일인가?",
    seoLottoText: `
      <h2>명리학과 숫자의 상관관계</h2>
      <p>동양의 전통 철학인 명리학은 만물의 변화를 숫자의 흐름으로 해석하곤 합니다. 성명학에서는 이름의 획수를 통해 수리(數理)를 도출하며, 사주팔자에서는 태어난 연, 월, 일, 시를 간지로 변환하여 그 안에 담긴 오행의 균형을 분석합니다. '명리 로또 번호 추천기'는 이러한 전통적 접근 방식을 현대적인 번호 생성 알고리즘에 접목했습니다.</p>
      
      <h3>오행으로 보는 행운의 흐름</h3>
      <p>오행(목, 화, 토, 금, 수)은 각각 고유한 기운과 숫자를 상징합니다. 예를 들어, 목(木)의 기운은 성장과 시작을, 금(金)의 기운은 결실과 정리를 의미합니다. 사용자가 입력한 이름과 생년월일은 고유한 수리적 에너지로 변환되며, 선택한 특정 날짜의 천간지지와 결합하여 그날 가장 조화로운 숫자의 조합을 찾아냅니다.</p>

      <h3>데이터와 철학의 만남</h3>
      <p>우리는 단순한 난수 생성이 아닌, 사용자 개개인의 고유 정보를 기반으로 한 '퍼스널 번호'를 지향합니다. 이름의 울림과 태어난 날의 기운이 특정 숫자의 진동과 공명한다는 아이디어에서 출발했습니다. 비록 로또는 확률의 게임이지만, 나만의 의미 있는 숫자를 통해 그날의 행운을 점쳐보는 행위는 일상에 작은 즐거움과 희망을 선사합니다.</p>
      
      <h3>현명하게 즐기는 법</h3>
      <p>명리학적 번호 추천은 당첨을 보장하는 과학적 근거가 아닙니다. 하지만 자신의 기운을 살피고 그에 맞는 숫자를 선택하는 과정은 마음의 안정을 돕고 긍정적인 에너지를 불러일으킬 수 있습니다. 가벼운 마음으로 재미있게 서비스를 이용하시길 권장합니다.</p>
    `,

    // SEO Content - Pet
    seoPetTitle: "오행으로 보는 반려동물과의 특별한 인연",
    seoPetText: `
      <h2>오행으로 보는 반려동물과의 특별한 인연</h2>
      <p>반려동물은 단순한 동물이 아니라 우리 삶의 소중한 동반자입니다. 명리학의 오행(五行) 이론은 인간관계뿐만 아니라 사람과 동물 사이의 에너지 조화도 설명할 수 있습니다. 각 동물은 태생적으로 강한 오행의 기운을 가지고 있으며, 이는 주인의 기운과 만났을 때 서로 보완하거나 강화하는 작용을 합니다.</p>

      <h3>사진 분석과 에너지 교감</h3>
      <p>우리의 '반려동물 궁합 테스트'는 사진 데이터의 특징적 요소를 수치화하여 그 안에 담긴 시각적 기운을 오행의 알고리즘으로 해석합니다. 색상, 형태, 그리고 촬영된 날의 기운을 종합하여 오늘 두 존재 사이에 흐르는 교감 지수를 도출합니다. 이는 명리학에서 말하는 '상생(相生)'의 원리를 현대적으로 재해석한 것입니다.</p>

      <h3>교감을 깊게 만드는 팁</h3>
      <p>궁합 점수가 높다면 오늘 서로의 에너지가 아주 잘 맞는다는 뜻입니다. 반대로 점수가 기대보다 낮다면, 그것은 서로에게 더 세심한 배려가 필요한 시점임을 의미할 수 있습니다. 예를 들어, '수(水)'의 기운이 필요한 날에는 조용한 휴식을, '화(火)'의 기운이 넘치는 날에는 활발한 산책을 통해 부족한 기운을 채우고 조화를 이룰 수 있습니다.</p>

      <h3>함께 성장하는 관계</h3>
      <p>반려동물과의 인연은 고정된 것이 아니라 함께 시간을 보내며 만들어가는 것입니다. 오행의 흐름을 이해함으로써 우리는 반려동물의 상태를 더 깊이 이해하고, 더 건강하고 행복한 관계를 유지할 수 있는 지혜를 얻을 수 있습니다. 재미있는 테스트를 통해 오늘 하루 우리 아이에게 어떤 기운이 필요한지 살펴보세요.</p>
    `,

    // About Page
    aboutTitle: "사이트 소개",
    aboutContent: `
      <h2>명리 로또 & 반려동물 궁합: 전통과 현대의 조화</h2>
      <p>저희 사이트는 수천 년간 이어온 동양의 지혜인 '명리학(命理學)'을 현대인의 일상과 흥미에 맞게 재해석하여 제공하는 플랫폼입니다. 복잡하고 어렵게 느껴질 수 있는 전통 철학을 재미있는 도구와 결합하여 누구나 쉽게 자신의 기운을 살펴볼 수 있도록 기획되었습니다.</p>

      <h3>우리의 전문성</h3>
      <p>단순히 무작위로 숫자를 생성하거나 이미지를 분석하는 것이 아닙니다. 명리학의 핵심 원리인 '오행(五行)'과 '수리(數理)' 체계를 바탕으로 알고리즘을 설계했습니다. 사용자의 고유 정보(이름, 생일)와 사진 데이터를 기하학적, 수리적 특징으로 변환하여 실시간 에너지 흐름에 대입하는 방식을 사용합니다.</p>

      <h3>제공 서비스</h3>
      <ul>
        <li><strong>명리 로또 추천:</strong> 개인의 수리값과 특정 날짜의 운세를 결합하여 맞춤형 번호를 제안합니다.</li>
        <li><strong>반려동물 궁합:</strong> 사람과 동물의 시각적 데이터를 오행 에너지로 환산하여 그날의 교감 지수를 측정합니다.</li>
      </ul>

      <h3>미션과 비전</h3>
      <p>우리는 일상의 작은 선택들이 긍정적인 마음가짐에서 시작된다고 믿습니다. 명리학적 관점에서 행운의 흐름을 이해하는 것은 사용자에게 정서적 위안과 색다른 즐거움을 제공합니다. 앞으로도 더 정교한 알고리즘과 유익한 콘텐츠를 통해 사용자 여러분의 삶에 작은 행복을 더하는 서비스를 만들어 나가겠습니다.</p>
    `,

    // Blog Page
    blogTitle: "블로그",
    blogContent: `
      <div class="blog-grid">
        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">명리학 기초</span>
            <span class="blog-date">2025년 4월 15일</span>
          </div>
          <h2>오행(五行)이란? 목·화·토·금·수의 기운 완전 정리</h2>
          <p>동양 철학의 핵심인 오행(五行)은 목(木)·화(火)·토(土)·금(金)·수(水), 다섯 가지 기운이 자연과 인간의 모든 현상을 이루고 순환한다는 사상입니다. 수천 년간 동아시아 의학·철학·문화의 근간이 되어온 이 개념은 오늘날에도 명리학, 풍수, 한의학 등 다양한 분야에 살아 숨쉬고 있습니다.</p>
          <h3>다섯 기운의 특성</h3>
          <ul>
            <li><strong>목(木) — 나무:</strong> 성장, 확장, 시작의 기운. 봄처럼 위로 뻗어나가는 에너지로, 창의성과 도전 정신을 상징합니다.</li>
            <li><strong>화(火) — 불:</strong> 활동성, 열정, 추진력의 기운. 여름처럼 활활 타오르며 빠른 실행과 화려한 표현을 이끕니다.</li>
            <li><strong>토(土) — 흙:</strong> 균형, 안정, 신뢰의 기운. 사계절의 환절기처럼 중심을 잡고 조화를 만들어냅니다.</li>
            <li><strong>금(金) — 쇠:</strong> 정제, 선별, 집중의 기운. 가을처럼 불필요한 것을 걷어내고 본질을 드러냅니다.</li>
            <li><strong>수(水) — 물:</strong> 직관, 유연성, 지혜의 기운. 겨울처럼 고요히 흐르며 깊은 통찰을 가져옵니다.</li>
          </ul>
          <p>오행은 서로를 낳기도(상생, 相生)하고 제어하기도(상극, 相剋) 합니다. 이 순환의 흐름을 읽는 것이 바로 명리학의 출발점입니다. 저희 서비스는 날짜와 이름 데이터를 이 오행 체계에 대입하여 오늘의 흐름을 직관적으로 파악할 수 있게 도와드립니다.</p>
        </article>

        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">로또 활용법</span>
            <span class="blog-date">2025년 4월 8일</span>
          </div>
          <h2>명리 로또 번호, 어떻게 활용하면 가장 좋을까?</h2>
          <p>명리 로또 번호 추천기는 단순한 난수 생성기가 아닙니다. 이름의 수리값, 생년월일, 그리고 당일 오행의 흐름을 종합하여 <em>그날 당신에게 가장 어울리는</em> 번호 조합을 제안합니다. 더 풍부하게 활용하는 세 가지 팁을 소개합니다.</p>
          <h3>팁 1 — 오행 해석 요약을 꼭 읽어보세요</h3>
          <p>번호가 생성된 후 하단에 표시되는 '명리 해석 요약'에는 오늘의 중심 기운과 그 의미가 담겨 있습니다. 예를 들어 오늘이 '수(水)' 기운이 강한 날이라면 직관적 판단이 유리하다는 신호입니다. 번호를 고르는 기준으로 삼아보세요.</p>
          <h3>팁 2 — 꾸준히 같은 날짜에 시도해보세요</h3>
          <p>오행의 흐름은 날짜마다 달라집니다. 매주 구매일을 고정하고 그날의 번호를 받아보면, 날짜별 기운 변화를 자연스럽게 체감할 수 있습니다.</p>
          <h3>팁 3 — 즐거운 마음으로 접근하세요</h3>
          <p>이 서비스는 당첨을 보장하는 도구가 아닙니다. 명리학적 시각으로 오늘의 흐름을 읽고, 작은 기대감과 설렘을 더하는 것이 핵심입니다. 긍정적인 마음가짐이 하루를 더 풍요롭게 만듭니다.</p>
        </article>

        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">반려동물</span>
            <span class="blog-date">2025년 3월 28일</span>
          </div>
          <h2>반려동물도 오행 기운이 있다? 우리 아이와의 교감 지수 높이기</h2>
          <p>반려동물 궁합 테스트는 AI 이미지 분석과 오행 이론을 결합한 독특한 서비스입니다. 사진에서 추출한 색상·형태 데이터를 오행으로 환산한 뒤, 당일 기운과의 조화를 계산해 교감 지수를 산출합니다.</p>
          <h3>점수가 높다는 것은?</h3>
          <p>오늘 반려동물과 나의 오행 에너지가 잘 맞물린다는 뜻입니다. 함께 산책하거나 새로운 놀이를 시도하기 좋은 날입니다. 반대로 점수가 낮은 날은 조용히 옆에 앉아 있어 주는 것만으로도 충분한 교감이 됩니다.</p>
          <h3>매일 다른 점수의 의미</h3>
          <p>점수는 매일 달라집니다. 이는 어느 날의 관계가 더 좋거나 나쁘다는 뜻이 아니라, 그날의 흐름에 따라 어떤 방식의 교감이 가장 효과적인지를 알려주는 지표입니다. 꾸준히 기록해두면 반려동물과의 패턴을 발견하는 즐거움도 있습니다.</p>
        </article>
      </div>
    `,

    // Terms Page
    termsTitle: "이용약관",
    termsContent: `
      <h3>제1조 (목적)</h3>
      <p>본 약관은 '명리 로또 & 반려동물 궁합'(이하 "사이트")이 제공하는 모든 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
      <h3>제2조 (서비스의 성격)</h3>
      <p>사이트가 제공하는 번호 추천 및 궁합 분석 서비스는 명리학적 해석을 기반으로 한 오락용 콘텐츠입니다. 당첨 결과나 미래의 사건을 보장하거나 예측하지 않으며, 이용 결과에 대한 최종 책임은 사용자 본인에게 있습니다.</p>
      <h3>제3조 (개인정보 보호)</h3>
      <p>사이트는 사용자가 입력한 이름, 생년월일, 사진 등을 서비스 제공을 위한 수리적 계산 용도로만 사용하며, 서버에 별도로 저장하거나 제3자에게 제공하지 않습니다.</p>
      <h3>제4조 (이용자의 의무)</h3>
      <p>이용자는 본 서비스를 건전한 목적으로 이용해야 하며, 사이트의 운영을 방해하거나 타인에게 피해를 주는 행위를 해서는 안 됩니다.</p>
    `,

    // Privacy Page
    privacyTitle: "개인정보처리방침",
    privacyContent: `
      <p>본 사이트는 사용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.</p>
      <h3>1. 수집하는 개인정보 항목</h3>
      <p>서비스 이용 과정에서 이름, 생년월일, 반려동물 및 사용자의 사진 등이 입력될 수 있습니다.</p>
      <h3>2. 개인정보의 수집 및 이용 목적</h3>
      <p>입력된 정보는 오행 및 수리 계산 알고리즘을 통한 결과 도출을 위해 실시간으로 사용됩니다. 결과 도출 즉시 휘발되며 별도의 데이터베이스에 저장되지 않습니다.</p>
      <h3>3. 개인정보의 보유 및 이용 기간</h3>
      <p>사이트는 사용자의 개인정보를 서버에 저장하지 않으며, 입력된 모든 데이터는 브라우저 세션 내에서만 처리됩니다.</p>
      <h3>4. 제3자 제공 및 위탁</h3>
      <p>사이트는 원칙적으로 사용자의 개인정보를 외부에 제공하거나 저장하지 않습니다. 단, 아래 명시된 제3자 서비스 이용 과정에서 해당 서비스의 정책에 따라 일부 데이터가 처리될 수 있습니다.</p>

      <h2 style="margin-top:32px;">이용 중인 제3자 서비스</h2>
      <p>본 사이트는 서비스 품질 향상을 위해 아래의 외부 서비스를 이용합니다. 각 서비스가 무엇인지, 어떤 데이터를 처리하는지 안내드립니다.</p>

      <div class="third-party-grid">
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">📢</span>
            <span class="service-name">Google AdSense</span>
            <span class="service-tag">광고</span>
          </div>
          <p>구글이 운영하는 광고 네트워크 서비스입니다. 사용자의 관심사 및 브라우징 기록을 기반으로 맞춤형 광고를 표시하며, 이를 위해 쿠키와 유사 기술을 사용합니다. 광고 관련 데이터는 Google의 개인정보처리방침에 따라 처리됩니다. Google 광고 설정 페이지에서 맞춤 광고를 비활성화할 수 있습니다.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">✉️</span>
            <span class="service-name">Formspree</span>
            <span class="service-tag">폼 처리</span>
          </div>
          <p>웹사이트 문의 폼의 데이터 전송을 처리하는 서비스입니다. 제휴 문의 양식을 제출하면 입력하신 이름·이메일·메시지가 Formspree 서버를 경유하여 사이트 운영자에게 전달됩니다. 전송된 데이터는 Formspree의 개인정보처리방침에 따라 관리됩니다.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">💬</span>
            <span class="service-name">Disqus</span>
            <span class="service-tag">댓글</span>
          </div>
          <p>외부 댓글 시스템을 제공하는 서비스입니다. 댓글 작성 시 Disqus 계정 또는 소셜 로그인이 필요하며, 작성된 댓글과 관련 정보는 Disqus 서버에 저장됩니다. Disqus는 서비스 개선 및 광고 목적으로 쿠키와 사용자 행동 데이터를 수집할 수 있습니다.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">🤖</span>
            <span class="service-name">Google Teachable Machine</span>
            <span class="service-tag">AI 분석</span>
          </div>
          <p>구글이 제공하는 머신러닝 기반 이미지 분류 서비스입니다. 반려동물 궁합 테스트에서 업로드된 사진을 분석하는 데 활용됩니다. 이미지 처리는 사용자의 브라우저 내에서만 수행되며 외부 서버로 전송되지 않습니다. 단, AI 모델 파일은 Google 서버에서 불러옵니다.</p>
        </div>
      </div>
    `
  },
  en: {
    // Navigation
    navLotto: "Lotto Generator",
    navPet: "Pet Compatibility",
    navAbout: "About",
    navBlog: "Blog",
    navTerms: "Terms",
    navPrivacy: "Privacy",
    navContact: "Contact",

    // Common
    themeDark: "🌙 Dark Mode",
    themeLight: "☀️ Light Mode",
    langToggle: "한국어",

    // Index (Lotto)
    lottoTitle: "Myeongli Powerball Generator",
    lottoSubtitle: "Enter your name and dates to get 5 sets of Powerball numbers<br>based on Myeongli-hak (Asian astrology) fortune vibes.",
    labelName: "Name",
    namePlaceholder: "Enter your name",
    labelBirth: "Birth Date",
    labelDate: "Fortune Date",
    generateBtn: "Get Personalized Powerball Numbers",
    lottoFooter: "This page is a fun tool that converts names and dates into number flows with a Myeongli-hak vibe. It uses US Powerball rules (5/69 + 1/26) for English mode.",
    alertInput: "Please enter your name, birth date, and target date.",
    setSuffix: "Recommended Set #",
    analysisTitle: "Interpretation Summary",
    analysisResult1: "The numerical sum for <strong>{name}</strong> is <strong>{total}</strong>, with a length of <strong>{length}</strong>.",
    analysisResult2: "Five Element scores for the selected date: Wood({wood}) · Fire({fire}) · Earth({earth}) · Metal({metal}) · Water({water}).",
    analysisResult3: "The central energy is <strong>{element}</strong>: {text}",
    wood: "Wood", fire: "Fire", earth: "Earth", metal: "Metal", water: "Water",
    woodText: "Strong energy of growth and expansion. A day to embrace new choices and broad horizons.",
    fireText: "High activity and drive. Quick judgment and strong execution are favored.",
    earthText: "Energy of balance and stability. Focusing on stability is more important than taking risks.",
    metalText: "Strong energy of refinement and selection. Suitable for focusing and narrowing down numbers.",
    waterText: "Strong energy of intuition and flexibility. Trusting your gut feeling works best today.",

    // Pet Test
    petTitle: "Pet Compatibility Test",
    petSubtitle: "Upload photos of you and your pet.<br>Check your special connection score based on today's Five Element energy.",
    labelPet: "My Pet",
    labelOwner: "Me (Owner)",
    petPlaceholder: "Upload pet photo",
    ownerPlaceholder: "Upload your photo",
    analyzeBtn: "Analyze Compatibility",
    loadingText: "Analyzing data...",
    scoreLabel: "Bond Score",
    rcElementLabel: "Core Element",
    rcEnergyLabel: "Energy Flow",
    rcKeywordLabel: "Bond Keyword",
    rcTipLabel: "Today's Tip",
    retryBtn: "Try Again",
    shareBtn: "Share Result",
    alertUpload: "Please upload both pet and owner photos.",
    shareTitle: "Pet Compatibility Result",
    shareText: "Our bond score is {score}! Check it out now.",
    copyMsg: "Link copied to clipboard.",

    // SEO Content - Lotto
    seoLottoTitle: "Myeongli and Numbers: Why Name and Birthday?",
    seoLottoText: `
      <h2>The Correlation Between Myeongli and Numbers</h2>
      <p>Myeongli-hak, a traditional Eastern philosophy, often interprets the changes of all things as a flow of numbers. In Onomancy (the study of names), numerical principles are derived from the stroke counts of a name. In Saju (the Four Pillars of Destiny), the year, month, day, and time of birth are converted into sexagenary cycles to analyze the balance of the Five Elements (Wu Xing).</p>
      
      <h3>Fortune Flow Through Five Elements</h3>
      <p>The Five Elements (Wood, Fire, Earth, Metal, Water) each symbolize unique energies and numbers. For instance, Wood represents growth and beginnings, while Metal signifies harvest and refinement. 'Myeongli Powerball Generator' integrates these traditional approaches with modern number generation algorithms.</p>

      <h3>Where Data Meets Philosophy</h3>
      <p>We aim for 'Personal Numbers' based on each user's unique information, rather than simple random number generation. The idea is that the resonance of a name and the energy of a birth date harmonize with specific numerical vibrations. While Powerball is a game of probability, finding meaning in your own numbers adds a touch of joy and hope to daily life.</p>
      
      <h3>How to Enjoy Wisely</h3>
      <p>Myeongli-based number recommendations are not scientific evidence and do not guarantee a win. However, the process of observing one's energy and choosing numbers accordingly can help find peace of mind and invite positive energy. We encourage you to enjoy this service with a light heart.</p>
    `,

    // SEO Content - Pet
    seoPetTitle: "The Special Bond with Pets Through Five Elements",
    seoPetText: `
      <h2>The Special Bond with Pets Through Five Elements</h2>
      <p>Pets are not just animals; they are precious companions in our lives. The Five Element theory in Myeongli-hak can explain the energetic harmony not only between people but also between humans and animals. Each animal inherently possesses a strong energy of the Five Elements, which complements or strengthens the owner's energy.</p>

      <h3>Photo Analysis and Energy Connection</h3>
      <p>Our 'Pet Compatibility Test' quantifies characteristic elements of photo data and interprets the visual energy within through the Five Element algorithm. By combining color, form, and the energy of the day, we derive the 'Bond Score' flowing between the two beings. This is a modern reinterpretation of the 'Mutual Generation' (Sang-saeng) principle in Myeongli-hak.</p>

      <h3>Tips for a Deeper Connection</h3>
      <p>A high score means your energies are perfectly aligned today. Conversely, a lower score might suggest it's a time for more delicate care for each other. For example, on a day requiring 'Water' energy, quiet rest is ideal; on a day full of 'Fire' energy, an active walk can fill missing energies and achieve harmony.</p>

      <h3>Growing Together</h3>
      <p>The bond with a pet is not fixed but created over time. By understanding the flow of the Five Elements, we gain the wisdom to understand our pets' states more deeply and maintain a healthier, happier relationship. Use this fun test to see what kind of energy your furry friend needs today.</p>
    `,

    // About Page
    aboutTitle: "About Us",
    aboutContent: `
      <h2>Myeongli Lotto & Pet Compatibility: Harmony of Tradition and Modernity</h2>
      <p>Our site is a platform that reinterprets 'Myeongli-hak', the ancient Eastern wisdom spanning thousands of years, to suit the daily lives and interests of modern people. We've combined traditional philosophy, which can seem complex and difficult, with fun tools so anyone can easily check their energy.</p>

      <h3>Our Expertise</h3>
      <p>We don't just generate random numbers or analyze images. Our algorithms are designed based on the 'Five Elements' and 'Numerical Principles' (Su-ri), the core tenets of Myeongli-hak. We transform user's unique information (name, birthday) and photo data into geometric and numerical features, applying them to real-time energy flows.</p>

      <h3>Services Provided</h3>
      <ul>
        <li><strong>Myeongli Lotto Recommendation:</strong> Suggests personalized numbers by combining individual numerical values with the fortune of a specific date.</li>
        <li><strong>Pet Compatibility:</strong> Measures the bond score by converting visual data from people and animals into Five Element energy.</li>
      </ul>

      <h3>Mission and Vision</h3>
      <p>We believe small daily choices start with a positive mindset. Understanding the flow of fortune from a Myeongli-hak perspective provides users with emotional comfort and unique entertainment. We will continue to create services that add small happiness to your lives through more sophisticated algorithms and useful content.</p>
    `,

    // Blog Page
    blogTitle: "Blog",
    blogContent: `
      <div class="blog-grid">
        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">Basics</span>
            <span class="blog-date">April 15, 2025</span>
          </div>
          <h2>What Are the Five Elements? A Complete Guide to Wood, Fire, Earth, Metal & Water</h2>
          <p>The Five Elements (五行, Ohaeng) are the cornerstone of Eastern philosophy. They describe how five fundamental energies — Wood, Fire, Earth, Metal, and Water — form and cycle through all natural phenomena and human experience. For thousands of years, this framework has underpinned East Asian medicine, philosophy, and culture, and it remains alive today in fields like Myeongli-hak, feng shui, and traditional medicine.</p>
          <h3>The Five Energies</h3>
          <ul>
            <li><strong>Wood (木):</strong> Growth, expansion, new beginnings. Like spring reaching upward, it symbolizes creativity and ambition.</li>
            <li><strong>Fire (火):</strong> Action, passion, drive. Like a summer blaze, it fuels rapid execution and vibrant expression.</li>
            <li><strong>Earth (土):</strong> Balance, stability, trust. Like the transition between seasons, it holds the center and creates harmony.</li>
            <li><strong>Metal (金):</strong> Refinement, focus, clarity. Like autumn stripping away leaves, it reveals the essential.</li>
            <li><strong>Water (水):</strong> Intuition, flexibility, wisdom. Like a quiet winter river, it flows deep with insight.</li>
          </ul>
          <p>The Five Elements cycle through two key relationships — generation (相生) and restraint (相剋). Reading this flow is the starting point of Myeongli-hak. Our service maps your name and date data onto this framework so you can intuitively grasp today's energetic current.</p>
        </article>

        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">Lotto Tips</span>
            <span class="blog-date">April 8, 2025</span>
          </div>
          <h2>How to Get the Most Out of the Myeongli Lotto Generator</h2>
          <p>The Myeongli Lotto Generator is more than a random number picker. It synthesizes the numerical value of your name, your birth date, and the day's Five Element flow to suggest number combinations that resonate with <em>you, today</em>. Here are three tips to use it more meaningfully.</p>
          <h3>Tip 1 — Read the Interpretation Summary</h3>
          <p>After your numbers are generated, the "Interpretation Summary" below explains the dominant energy of the day. If today's central element is Water, for instance, it signals that intuitive judgment is your strongest tool. Let that context guide how you feel about the numbers.</p>
          <h3>Tip 2 — Pick a Consistent Day of the Week</h3>
          <p>Five Element flows shift daily. If you fix one day as your regular draw day and request numbers on that day each week, you'll naturally start to sense how the energy varies and what patterns feel right for you.</p>
          <h3>Tip 3 — Bring a Playful Mindset</h3>
          <p>This tool is not a guarantee of winning — it's a way to add a layer of personal meaning and light anticipation to the ritual. A positive, open attitude is ultimately the best luck charm of all.</p>
        </article>

        <article class="blog-card">
          <div class="blog-card-header">
            <span class="blog-tag">Pets</span>
            <span class="blog-date">March 28, 2025</span>
          </div>
          <h2>Do Pets Have Five Element Energy Too? Deepening Your Bond</h2>
          <p>The Pet Compatibility Test combines AI image analysis with Five Element theory. It extracts color and shape data from uploaded photos, converts that data into Five Element scores, then measures how well those scores harmonize with the day's energy to produce a bond index.</p>
          <h3>What Does a High Score Mean?</h3>
          <p>A high score means your Five Element energy and your pet's are well-aligned today. It's a great day for a walk, introducing a new toy, or trying something active together. On lower-score days, simply sitting quietly beside your pet can be the deepest form of connection.</p>
          <h3>Why the Score Changes Every Day</h3>
          <p>Scores vary daily — not because the relationship is better or worse, but because different days call for different styles of connection. Track the scores over time and you may discover interesting patterns in how you and your pet sync up throughout the week.</p>
        </article>
      </div>
    `,

    // Terms Page
    termsTitle: "Terms of Service",
    termsContent: `
      <h3>Article 1 (Purpose)</h3>
      <p>These terms aim to regulate the conditions and procedures for using all services provided by 'Myeongli Lotto & Pet Compatibility' (hereinafter "the Site").</p>
      <h3>Article 2 (Nature of Service)</h3>
      <p>The number recommendation and compatibility analysis services provided by the Site are entertainment content based on Myeongli-hak interpretation. They do not guarantee or predict winning results or future events, and the final responsibility for the results of use lies with the user.</p>
      <h3>Article 3 (Privacy Protection)</h3>
      <p>The Site uses names, birth dates, photos, etc., entered by the user only for numerical calculation purposes to provide the service, and does not store them separately on the server or provide them to third parties.</p>
      <h3>Article 4 (User Obligations)</h3>
      <p>Users must use this service for healthy purposes and must not interfere with the operation of the Site or cause harm to others.</p>
    `,

    // Privacy Page
    privacyTitle: "Privacy Policy",
    privacyContent: `
      <p>This Site values your personal information and complies with relevant laws.</p>
      <h3>1. Items of Personal Information Collected</h3>
      <p>Names, birth dates, photos of pets and users, etc., may be entered during the service use process.</p>
      <h3>2. Purpose of Collection and Use</h3>
      <p>The entered information is used in real-time to derive results through Five Element and numerical calculation algorithms. It is discarded immediately after the result is generated and is not stored in a separate database.</p>
      <h3>3. Retention Period</h3>
      <p>This Site does not store personal information on its servers. All entered data is processed only within the browser session.</p>
      <h3>4. Third-Party Provision and Entrustment</h3>
      <p>In principle, the Site does not provide or store user's personal information externally. However, data may be processed according to the policies of the third-party services listed below.</p>

      <h2 style="margin-top:32px;">Third-Party Services in Use</h2>
      <p>This Site uses the following external services to enhance service quality. Below is an explanation of each service and what data it processes.</p>

      <div class="third-party-grid">
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">📢</span>
            <span class="service-name">Google AdSense</span>
            <span class="service-tag">Ads</span>
          </div>
          <p>An advertising network service operated by Google. It displays personalized ads based on user interests and browsing history, using cookies and similar technologies for this purpose. Ad-related data is processed under Google's Privacy Policy. You can disable personalized ads on the Google Ads settings page.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">✉️</span>
            <span class="service-name">Formspree</span>
            <span class="service-tag">Form</span>
          </div>
          <p>A service that handles form submission data from websites. When you submit a partnership inquiry form, your name, email, and message are relayed to the site operator via Formspree's servers. Submitted data is managed under Formspree's Privacy Policy.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">💬</span>
            <span class="service-name">Disqus</span>
            <span class="service-tag">Comments</span>
          </div>
          <p>A third-party comment system service. Leaving a comment requires a Disqus account or social login, and all comment data is stored on Disqus servers. Disqus may collect cookies and user behavior data for service improvement and advertising purposes.</p>
        </div>
        <div class="third-party-card">
          <div class="service-header">
            <span class="service-icon">🤖</span>
            <span class="service-name">Google Teachable Machine</span>
            <span class="service-tag">AI</span>
          </div>
          <p>A machine learning-based image classification service provided by Google. It is used to analyze uploaded photos in the Pet Compatibility Test. Image processing is performed entirely within the user's browser and is not transmitted to external servers. The AI model file itself is loaded from Google's servers.</p>
        </div>
      </div>
    `
  }
};
