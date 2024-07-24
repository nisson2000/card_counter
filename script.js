// 定義 Hero 類別
class Hero {
    constructor(name, image, rarity) {
        this.name = name;
        this.image = image;
        this.rarity = rarity; // 新增稀有度屬性
        this.origin = 'catalog'; // 記錄英雄的初始位置，'catalog' 或 'deck'
        this.isDiscarded = false; // 記錄英雄是否在棄牌堆中
        this.isLocked = false; // 記錄英雄是否鎖定
    }

    // 生成英雄的 HTML 元素
    createHTMLElement(onClick) {
        const div = document.createElement('div');
        div.className = 'hero';
        div.innerHTML = `<img src="${this.image}" alt="${this.name}">`;
        if (this.isDiscarded || this.isLocked) {
            div.classList.add('grayscale');
            div.onclick = null; // 禁止選取
        } else {
            div.onclick = onClick;
        }
        return div;
    }
}

// 使用 heroData.js 中的數據初始化所有英雄列表
const allHeroes = heroImages.map(data => new Hero(data.name, data.image, data.rarity));

let deck = [];
let discardPile = [];
let selectedHeroes = [];
let availableHeroes = [...allHeroes];
let isCatalogLocked = false; // 记录图鉴是否被锁定
let currentFilter = 0; // 当前筛选条件，0 表示不过滤

// 初始化遊戲狀態
function initializeGame() {
    deck = [];
    discardPile = [];
    selectedHeroes = [];
    availableHeroes = [...allHeroes];

    // 按稀有度排序
    availableHeroes.sort((a, b) => b.rarity - a.rarity);

    isCatalogLocked = false; // 初始化时解除锁定
    currentFilter = 0; // 重置筛选条件
    renderHeroCatalog();
    updateUI();
}

// 渲染英雄圖鑑
function renderHeroCatalog() {
    const catalog = document.getElementById('hero-catalog');
    catalog.innerHTML = '';
    let filteredHeroes = availableHeroes;
    if (currentFilter !== 0) {
        filteredHeroes = availableHeroes.filter(hero => hero.rarity === currentFilter);
    }
    filteredHeroes.forEach(hero => {
        catalog.appendChild(hero.createHTMLElement(() => selectHero(hero)));
    });
}

// 選取英雄並添加到本回合選取列表中
function selectHero(hero) {
    if (selectedHeroes.length < 3 && !selectedHeroes.includes(hero) && !isCatalogLocked) {
        hero.origin = 'catalog';
        selectedHeroes.push(hero);
        availableHeroes = availableHeroes.filter(h => h !== hero);
        updateUI();
    }
}

// 取消選取英雄並將其返回到原來的位置（圖鑑或牌組）
function deselectHero(hero) {
    selectedHeroes = selectedHeroes.filter(h => h !== hero);
    if (hero.origin === 'catalog') {
        insertInOrder(availableHeroes, hero);
    } else if (hero.origin === 'deck') {
        insertInOrder(deck, hero);
    }
    updateUI();
}

// 確認回合，將選取的英雄從圖鑑移到牌組
function playRound() {
    if (selectedHeroes.length !== 3) {
        alert("Please select exactly 3 heroes.");
        return;
    }
    selectedHeroes.forEach(hero => {
        if (!deck.includes(hero)) {
            insertInOrder(deck, hero);
        }
        hero.isDiscarded = true; // 標記英雄為棄牌狀態
        discardPile.push(hero);
    });

    // 如果棄牌堆中的英雄數量大於7個，清空棄牌堆並解除棄牌狀態
    if (discardPile.length > 7) {
        discardPile.forEach(hero => {
            hero.isDiscarded = false; // 解除棄牌狀態
        });
        discardPile = [];
    }

    // 如果牌組中有13個英雄，鎖定圖鑑中的所有英雄
    if (deck.length > 13) {
        isCatalogLocked = true;
        availableHeroes.forEach(hero => {
            hero.isLocked = true;
        });
    }

    selectedHeroes = [];
    updateUI();
}

// 更新UI，顯示對手的牌組、本回合選取的英雄和英雄圖鑑
function updateUI() {
    // 更新牌組顯示
    const deckElement = document.getElementById("deck");
    deckElement.innerHTML = '';
    const nonDiscardedHeroes = deck.filter(hero => !hero.isDiscarded);
    const discardedHeroes = deck.filter(hero => hero.isDiscarded);
    const sortedDeck = [...nonDiscardedHeroes, ...discardedHeroes];
    sortedDeck.forEach(hero => {
        const heroElement = hero.createHTMLElement(() => selectHeroFromDeck(hero));
        deckElement.appendChild(heroElement);
    });

    // 更新本回合選取的英雄顯示
    const selectedHeroesElement = document.getElementById("selected-heroes");
    selectedHeroesElement.innerHTML = '';
    selectedHeroes.forEach(hero => {
        const heroElement = hero.createHTMLElement(() => deselectHero(hero));
        heroElement.classList.add('selected');
        selectedHeroesElement.appendChild(heroElement);
    });

    // 更新英雄圖鑑顯示
    renderHeroCatalog();
}

// 從牌組中選取英雄
function selectHeroFromDeck(hero) {
    if (selectedHeroes.length < 3 && !selectedHeroes.includes(hero)) {
        hero.origin = 'deck';
        selectedHeroes.push(hero);
        deck = deck.filter(h => h !== hero);
        updateUI();
    }
}

// 重置遊戲，還原到初始狀態
function resetGame() {
    allHeroes.forEach(hero => {
        hero.isDiscarded = false; // 重置所有英雄的棄牌狀態
        hero.isLocked = false; // 重置所有英雄的鎖定狀態
    });
    initializeGame();
}

// 按稀有度插入英雄，保持排序
function insertInOrder(array, hero) {
    array.push(hero);
    array.sort((a, b) => b.rarity - a.rarity); // 稀有度从高到低排序
}

// 篩選英雄
function filterHeroes(rarity) {
    if (currentFilter === rarity) {
        currentFilter = 0; // 如果再次點擊相同稀有度按鈕，則取消篩選
    } else {
        currentFilter = rarity;
    }
    document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.classList.remove('active');
    });
    if (currentFilter !== 0) {
        document.querySelector(`.filter-buttons button[data-rarity='${currentFilter}']`).classList.add('active');
    }
    renderHeroCatalog();
}

// 在頁面加載時初始化遊戲
initializeGame();
