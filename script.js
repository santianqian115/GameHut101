// GameHut JavaScript - 主要功能模块

// 游戏数据
const gamesData = {
    1: {
        id: 1,
        title: "Öoo Demo",
        image: "https://img.itch.zone/aW1nLzIxNTM5MzY4LmdpZg==/360x286%23cm/GFv9YY.gif",
        iframe: "https://itch.io/embed/3493917",
        category: "puzzle",
        tags: ["益智", "冒险", "热门"],
        rating: 4.5,
        description: "一款充满创意的解谜冒险游戏，独特的视觉风格和引人入胜的故事情节将带您进入一个神秘的世界。在这个充满谜题的世界中，您需要运用智慧和创造力来解决各种挑战。",
        longDescription: "Öoo Demo是一款极具创新性的解谜冒险游戏，由知名独立游戏开发者NamaTakahashi精心打造。游戏采用独特的视觉艺术风格，将简约美学与复杂谜题完美结合。\n\n在游戏中，玩家将扮演一位神秘的旅行者，探索一个充满未知的世界。每个关卡都经过精心设计，需要玩家运用逻辑思维、空间想象力和创造力来解决各种谜题。\n\n游戏特色：\n• 独特的视觉艺术风格\n• 精心设计的谜题系统\n• 引人入胜的故事情节\n• 流畅的游戏体验\n• 支持多平台游玩"
    },
    2: {
        id: 2,
        title: "Serpentes: 10th Anniversary Edition",
        image: "https://img.itch.zone/aW1nLzIxNDMzNTg3LmdpZg==/360x286%23c/kLCmSj.gif",
        iframe: "https://itch.io/embed/3597671",
        category: "arcade",
        tags: ["经典", "休闲", "怀旧"],
        rating: 4.0,
        description: "经典贪吃蛇游戏的十周年纪念版，全新的视觉效果和游戏机制，让您重新体验这款经典游戏的魅力。",
        longDescription: "Serpentes: 10th Anniversary Edition是对经典贪吃蛇游戏的完美致敬和重新诠释。这款游戏保留了原版的核心玩法，同时加入了现代化的视觉效果和创新的游戏机制。\n\n游戏特色：\n• 经典贪吃蛇玩法\n• 现代化的视觉效果\n• 多种游戏模式\n• 成就系统\n• 排行榜功能\n• 自定义皮肤\n• 音效和背景音乐"
    },
    3: {
        id: 3,
        title: "Tiny Racing",
        image: "https://img.itch.zone/aW1nLzE2NDkyNTkucG5n/360x286%23c/MXTkn2.png",
        iframe: "https://itch.io/embed/3638229",
        category: "racing",
        tags: ["赛车", "竞技", "迷你"],
        rating: 4.8,
        description: "迷你赛车游戏，简单易上手但充满挑战性，在紧凑的赛道上展现您的驾驶技巧，成为最快的赛车手！",
        longDescription: "Tiny Racing是一款精心设计的迷你赛车游戏，虽然体积小巧，但游戏内容丰富且充满挑战。游戏采用俯视角设计，让玩家能够更好地观察赛道和对手。\n\n游戏特色：\n• 紧凑的赛道设计\n• 多种赛车选择\n• 升级系统\n• 多人竞技模式\n• 时间挑战模式\n• 成就解锁系统\n• 流畅的物理引擎"
    },
    4: {
        id: 4,
        title: "Easy Delivery Co.",
        image: "https://img.itch.zone/aW1nLzIwODcwODYwLnBuZw==/360x286%23c/Ui8PFK.png",
        iframe: "https://itch.io/embed/2813321",
        category: "simulation",
        tags: ["经营", "模拟"],
        rating: 4.2,
        description: "经营您的快递公司，管理车队，完成各种配送任务，成为最成功的快递大亨！",
        longDescription: "Easy Delivery Co.是一款充满乐趣的经营模拟游戏，让您体验经营快递公司的挑战和乐趣。从一个小型配送站开始，逐步发展成为覆盖全城的快递帝国。\n\n游戏特色：\n• 真实的经营模拟\n• 车队管理系统\n• 员工招聘和培训\n• 路线优化\n• 客户满意度系统\n• 市场竞争机制\n• 多种配送模式"
    },
    5: {
        id: 5,
        title: "Unreal Racing",
        image: "https://img.itch.zone/aW1nLzEwMDk0NjI3LnBuZw==/360x286%23c/of8Ghb.png",
        iframe: "https://itch.io/embed/1120412",
        category: "racing",
        tags: ["赛车", "3D"],
        rating: 4.6,
        description: "虚幻引擎打造的赛车游戏，逼真的物理效果和精美的画面，带来极致的赛车体验。",
        longDescription: "Unreal Racing是一款采用虚幻引擎开发的3D赛车游戏，拥有逼真的物理效果和精美的画面表现。游戏提供了多种赛车和赛道选择，让玩家体验不同风格的赛车竞技。\n\n游戏特色：\n• 虚幻引擎4开发\n• 逼真的物理效果\n• 精美的3D画面\n• 多种赛车选择\n• 丰富的赛道\n• 天气系统\n• 多人竞技模式"
    },
    6: {
        id: 6,
        title: "Turbo OutRun Reimagined",
        image: "https://img.itch.zone/aW1nLzIwMTYzNzA5LnBuZw==/360x286%23c/pGVZVV.png",
        iframe: "https://itch.io/embed/1921840",
        category: "racing",
        tags: ["经典", "重制"],
        rating: 4.3,
        description: "经典OutRun游戏的重制版，保留原版精髓的同时加入现代元素，重温80年代的赛车经典。",
        longDescription: "Turbo OutRun Reimagined是对经典街机游戏OutRun的现代重制版本。游戏保留了原版的核心玩法和经典元素，同时加入了现代化的视觉效果和游戏机制。\n\n游戏特色：\n• 经典OutRun玩法\n• 现代化视觉效果\n• 经典音乐重制\n• 多种赛车选择\n• 分支路线系统\n• 时间挑战模式\n• 成就系统"
    },
    7: {
        id: 7,
        title: "Pet Rock Simulator",
        image: "https://img.itch.zone/aW1nLzQyNjA2MjUucG5n/360x286%23c/FqkHoc.png",
        iframe: "https://itch.io/embed/761786",
        category: "simulation",
        tags: ["模拟", "休闲"],
        rating: 4.1,
        description: "独特的宠物石头模拟器，照顾您的石头宠物，给它起名字，装饰它的家，体验不一样的宠物养成。",
        longDescription: "Pet Rock Simulator是一款独特的模拟游戏，让您体验照顾宠物石头的乐趣。虽然听起来很奇特，但这款游戏充满了创意和幽默元素。\n\n游戏特色：\n• 独特的宠物养成\n• 个性化定制\n• 装饰系统\n• 互动玩法\n• 成就解锁\n• 幽默元素\n• 放松体验"
    },
    8: {
        id: 8,
        title: "Neon Tail",
        image: "https://img.itch.zone/aW1nLzE2MDA5MDEucG5n/360x286%23c/ZiSW7B.png",
        iframe: "https://itch.io/embed/324045",
        category: "action",
        tags: ["跑酷", "霓虹"],
        rating: 4.4,
        description: "霓虹风格的跑酷游戏，在充满未来感的城市中奔跑，收集能量，躲避障碍，挑战最高分。",
        longDescription: "Neon Tail是一款充满未来感的霓虹风格跑酷游戏。在赛博朋克风格的城市中，玩家需要控制角色进行高速奔跑，收集能量，躲避各种障碍物。\n\n游戏特色：\n• 霓虹视觉风格\n• 流畅的跑酷体验\n• 多种角色选择\n• 能量收集系统\n• 障碍物躲避\n• 分数排行榜\n• 成就系统"
    }
};

// 多语言支持
const translations = {
    'zh-CN': {
        search: '搜索游戏...',
        playNow: '立即试玩',
        categories: '游戏分类',
        leaderboard: '排行榜',
        about: '关于我们',
        home: '首页',
        featured: '热门推荐',
        latest: '最新游戏',
        rating: '评分',
        tags: '标签',
        description: '游戏介绍',
        instructions: '游戏说明',
        startGame: '开始游戏',
        pauseGame: '暂停游戏',
        restartGame: '重新开始',
        settings: '设置',
        filter: '筛选',
        sort: '排序',
        newest: '最新',
        popular: '最热',
        rating: '评分',
        all: '全部',
        action: '动作游戏',
        racing: '赛车游戏',
        puzzle: '益智游戏',
        adventure: '冒险游戏',
        simulation: '模拟游戏',
        arcade: '街机游戏'
    },
    'en': {
        search: 'Search games...',
        playNow: 'Play Now',
        categories: 'Categories',
        leaderboard: 'Leaderboard',
        about: 'About',
        home: 'Home',
        featured: 'Featured',
        latest: 'Latest',
        rating: 'Rating',
        tags: 'Tags',
        description: 'Description',
        instructions: 'Instructions',
        startGame: 'Start Game',
        pauseGame: 'Pause Game',
        restartGame: 'Restart',
        settings: 'Settings',
        filter: 'Filter',
        sort: 'Sort',
        newest: 'Newest',
        popular: 'Popular',
        rating: 'Rating',
        all: 'All',
        action: 'Action',
        racing: 'Racing',
        puzzle: 'Puzzle',
        adventure: 'Adventure',
        simulation: 'Simulation',
        arcade: 'Arcade'
    },
    'ja': {
        search: 'ゲームを検索...',
        playNow: '今すぐプレイ',
        categories: 'カテゴリー',
        leaderboard: 'ランキング',
        about: '私たちについて',
        home: 'ホーム',
        featured: 'おすすめ',
        latest: '最新',
        rating: '評価',
        tags: 'タグ',
        description: '説明',
        instructions: '操作方法',
        startGame: 'ゲーム開始',
        pauseGame: '一時停止',
        restartGame: 'リスタート',
        settings: '設定',
        filter: 'フィルター',
        sort: '並び替え',
        newest: '最新',
        popular: '人気',
        rating: '評価',
        all: 'すべて',
        action: 'アクション',
        racing: 'レーシング',
        puzzle: 'パズル',
        adventure: 'アドベンチャー',
        simulation: 'シミュレーション',
        arcade: 'アーケード'
    },
    'ko': {
        search: '게임 검색...',
        playNow: '지금 플레이',
        categories: '카테고리',
        leaderboard: '리더보드',
        about: '소개',
        home: '홈',
        featured: '추천',
        latest: '최신',
        rating: '평점',
        tags: '태그',
        description: '설명',
        instructions: '조작법',
        startGame: '게임 시작',
        pauseGame: '일시정지',
        restartGame: '다시 시작',
        settings: '설정',
        filter: '필터',
        sort: '정렬',
        newest: '최신',
        popular: '인기',
        rating: '평점',
        all: '전체',
        action: '액션',
        racing: '레이싱',
        puzzle: '퍼즐',
        adventure: '어드벤처',
        simulation: '시뮬레이션',
        arcade: '아케이드'
    },
    'es': {
        search: 'Buscar juegos...',
        playNow: 'Jugar Ahora',
        categories: 'Categorías',
        leaderboard: 'Clasificación',
        about: 'Acerca de',
        home: 'Inicio',
        featured: 'Destacados',
        latest: 'Últimos',
        rating: 'Calificación',
        tags: 'Etiquetas',
        description: 'Descripción',
        instructions: 'Instrucciones',
        startGame: 'Iniciar Juego',
        pauseGame: 'Pausar Juego',
        restartGame: 'Reiniciar',
        settings: 'Configuración',
        filter: 'Filtrar',
        sort: 'Ordenar',
        newest: 'Más Nuevos',
        popular: 'Más Populares',
        rating: 'Calificación',
        all: 'Todos',
        action: 'Acción',
        racing: 'Carreras',
        puzzle: 'Puzzle',
        adventure: 'Aventura',
        simulation: 'Simulación',
        arcade: 'Arcade'
    },
    'de': {
        search: 'Spiele suchen...',
        playNow: 'Jetzt Spielen',
        categories: 'Kategorien',
        leaderboard: 'Rangliste',
        about: 'Über uns',
        home: 'Startseite',
        featured: 'Empfohlen',
        latest: 'Neueste',
        rating: 'Bewertung',
        tags: 'Tags',
        description: 'Beschreibung',
        instructions: 'Anleitung',
        startGame: 'Spiel Starten',
        pauseGame: 'Spiel Pausieren',
        restartGame: 'Neustart',
        settings: 'Einstellungen',
        filter: 'Filter',
        sort: 'Sortieren',
        newest: 'Neueste',
        popular: 'Beliebt',
        rating: 'Bewertung',
        all: 'Alle',
        action: 'Action',
        racing: 'Rennsport',
        puzzle: 'Puzzle',
        adventure: 'Abenteuer',
        simulation: 'Simulation',
        arcade: 'Arcade'
    },
    'ru': {
        search: 'Поиск игр...',
        playNow: 'Играть Сейчас',
        categories: 'Категории',
        leaderboard: 'Рейтинг',
        about: 'О нас',
        home: 'Главная',
        featured: 'Рекомендуемые',
        latest: 'Новые',
        rating: 'Рейтинг',
        tags: 'Теги',
        description: 'Описание',
        instructions: 'Инструкции',
        startGame: 'Начать Игру',
        pauseGame: 'Пауза',
        restartGame: 'Перезапуск',
        settings: 'Настройки',
        filter: 'Фильтр',
        sort: 'Сортировка',
        newest: 'Новые',
        popular: 'Популярные',
        rating: 'Рейтинг',
        all: 'Все',
        action: 'Экшен',
        racing: 'Гонки',
        puzzle: 'Головоломка',
        adventure: 'Приключения',
        simulation: 'Симулятор',
        arcade: 'Аркада'
    }
};

// 当前语言
let currentLanguage = 'zh-CN';

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    setupMobileMenu();
    setupSearch();
    setupLanguageSelector();
    setupAnimations();
    setupGameCards();
    loadUserPreferences();
}

// 移动端菜单
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // 点击外部关闭菜单
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // 搜索按钮点击事件
        searchBtn.addEventListener('click', performSearch);
        
        // 回车键搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // 实时搜索（防抖）
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(performSearch, 300);
        });
    }
}

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length === 0) {
        // 如果搜索框为空，显示所有游戏
        showAllGames();
        return;
    }
    
    // 搜索游戏
    const filteredGames = Object.values(gamesData).filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    // 显示搜索结果
    displaySearchResults(filteredGames, query);
}

// 显示搜索结果
function displaySearchResults(games, query) {
    const gamesGrid = document.querySelector('.games-grid');
    if (!gamesGrid) return;
    
    if (games.length === 0) {
        gamesGrid.innerHTML = `
            <div class="no-results">
                <h3>未找到相关游戏</h3>
                <p>没有找到包含 "${query}" 的游戏，请尝试其他关键词。</p>
            </div>
        `;
        return;
    }
    
    const gamesHTML = games.map(game => createGameCardHTML(game)).join('');
    gamesGrid.innerHTML = gamesHTML;
    
    // 添加搜索结果提示
    const resultsInfo = document.createElement('div');
    resultsInfo.className = 'search-results-info';
    resultsInfo.innerHTML = `<p>找到 ${games.length} 个相关游戏</p>`;
    gamesGrid.parentNode.insertBefore(resultsInfo, gamesGrid);
}

// 显示所有游戏
function showAllGames() {
    const gamesGrid = document.querySelector('.games-grid');
    if (!gamesGrid) return;
    
    // 移除搜索结果提示
    const resultsInfo = document.querySelector('.search-results-info');
    if (resultsInfo) {
        resultsInfo.remove();
    }
    
    // 重新加载页面内容或显示默认游戏列表
    location.reload();
}

// 语言选择器
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        
        languageSelect.addEventListener('change', function() {
            const newLanguage = this.value;
            changeLanguage(newLanguage);
        });
    }
}

// 切换语言
function changeLanguage(language) {
    currentLanguage = language;
    
    // 更新页面文本
    updatePageText();
    
    // 保存用户偏好
    localStorage.setItem('preferredLanguage', language);
    
    // 更新搜索框占位符
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[language].search;
    }
}

// 更新页面文本
function updatePageText() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// 动画效果
function setupAnimations() {
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in, .game-card, .category-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 游戏卡片交互
function setupGameCards() {
    // 游戏卡片点击事件
    document.addEventListener('click', function(e) {
        const gameCard = e.target.closest('.game-card');
        if (gameCard) {
            const gameId = gameCard.dataset.gameId;
            if (gameId) {
                window.location.href = `game-detail.html?id=${gameId}`;
            }
        }
    });
    
    // 播放按钮点击事件
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('play-btn')) {
            e.preventDefault();
            const gameId = e.target.closest('.game-card').dataset.gameId;
            if (gameId) {
                window.location.href = `game-detail.html?id=${gameId}`;
            }
        }
    });
}

// 创建游戏卡片HTML
function createGameCardHTML(game) {
    return `
        <div class="game-card" data-game-id="${game.id}">
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-overlay">
                    <a href="game-detail.html?id=${game.id}" class="play-btn">立即试玩</a>
                </div>
            </div>
            <div class="game-info">
                <h3><a href="game-detail.html?id=${game.id}">${game.title}</a></h3>
                <p>${game.description}</p>
                <div class="game-tags">
                    ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="game-rating">
                    <div class="stars">
                        ${generateStarsHTML(game.rating)}
                    </div>
                    <span class="rating-text">${game.rating}/5</span>
                </div>
            </div>
        </div>
    `;
}

// 生成星级HTML
function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // 满星
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // 半星
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // 空星
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// 加载用户偏好
function loadUserPreferences() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 页面可见性API
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时的处理
        console.log('页面隐藏');
    } else {
        // 页面显示时的处理
        console.log('页面显示');
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('JavaScript错误:', e.error);
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// 导出函数供其他页面使用
window.GameHut = {
    gamesData,
    translations,
    changeLanguage,
    createGameCardHTML,
    generateStarsHTML,
    debounce,
    throttle
}; 