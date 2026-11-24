/* 作品集 · 本地数据驱动脚本 */

const STORAGE_KEY = 'my_portfolio_data_v1';
const NAME_MIGRATION_KEY = 'my_portfolio_name_migration_v1';
const FORMAL_REDESIGN_KEY = 'my_portfolio_formal_redesign_v1';
const CREATOR_KEY = 'my_portfolio_creator_v1';
const THEME_KEY = 'my_portfolio_theme_v1';
const GUESTBOOK_KEY = 'my_portfolio_guestbook_v1';
const CREATOR_PASSWORD = 'paofu2026';

const DEFAULT_DATA = {
  profile: {
    eyebrow: '视觉设计 · 交互可视化 · AIGC 创作',
    name: '泡芙',
    tagline: '用设计讲述故事，让文化被看见。',
    location: '湖北 · 武汉 / 宜昌',
    availability: '可接受合作 / 实习机会',
    intro: '湖北美术学院艺术与科技专业本科在读，专注视觉设计、交互可视化与 AIGC 创作。擅长把研究、叙事与视觉语言结合，做出有温度、能被人记住的作品。',
    focus: '视觉设计 / 交互可视化 / AIGC 创作',
    skills: 'Photoshop · Illustrator · SketchUp · AutoCAD · Midjourney · Stable Diffusion · ComfyUI · LoRA 模型训练 · 开源编程',
    education: '湖北美术学院 · 艺术与科技 · 本科在读',
    worksIntro: '课程作业、项目实践与探索性创作。',
    contactText: '有合作、交流或任何想法，欢迎随时联系我。',
    footerNote: 'Made with care & a little bit of catnip.',
    email: '3303076659@qq.com',
    photo: ''
  },
  projects: [
    {
      id: 'p1',
      title: '湖北非遗工艺小镇地图',
      category: '交互设计',
      year: '2026',
      desc: '基于 Mapbox GL JS 的三维交互式地图，可视化湖北省非遗工艺的地理分布、级别与历史脉络。',
      image: 'assets/p1.jpg',
      link: 'index2.html',
      tags: ['信息可视化', '地图', 'Web', 'Mapbox', '非遗']
    },
    {
      id: 'p2',
      title: '二十四节气 · 视觉插画',
      category: '插画',
      year: '2025',
      desc: '以中国传统二十四节气为母题创作的系列视觉插画，将节气物候与东方色彩体系结合。',
      image: 'assets/p2.jpg',
      link: '',
      tags: ['插画', '传统文化', '节气', '国风', '系列作品']
    },
    {
      id: 'p3',
      title: '龙园水世界 · 视觉方案',
      category: '视觉设计',
      year: '2026',
      desc: '文旅项目的视觉框架与提案设计，涵盖主视觉、导视系统与宣传物料的规划。',
      image: 'assets/p3.jpg',
      link: '',
      tags: ['品牌', '文旅', '提案', '视觉系统']
    },
    {
      id: 'p4',
      title: '睡眠之困与陪伴之缺',
      category: '信息设计',
      year: '2025',
      desc: '围绕当代年轻人睡眠议题的调研与数据呈现项目，把定性材料转化为可阅读的信息图表。',
      image: 'assets/p4.jpg',
      link: '',
      tags: ['调研', '数据', '叙事', '信息设计']
    },
    {
      id: 'p5',
      title: '电商详情页视觉框架',
      category: '视觉设计',
      year: '2025',
      desc: '围绕养生壶产品构建从卖点提炼、场景摄影到信息分层的完整页面视觉框架。',
      image: 'assets/p5.jpg',
      link: '',
      tags: ['电商', 'UI', '版式', '产品视觉', '模板']
    },
    {
      id: 'p6',
      title: '物理与硬件互动基础 · 课程作业',
      category: '交互装置',
      year: '2024',
      desc: '结合 ESP32 控制板、点阵屏与触摸传感器的实验性交互装置。',
      image: 'assets/p6.jpg',
      link: '',
      tags: ['交互', '装置', '创意编程', 'ESP32', '硬件']
    },
    {
      id: 'p7',
      title: '文字过家家 · 展览视觉设计',
      category: '展览设计',
      year: '2025',
      desc: '参与展览策划、后期制作、宣传与平面设计，并用三维建模可视化展陈思路。',
      image: 'assets/p7.jpg',
      link: '',
      tags: ['展览', '平面', '三维建模', '优秀作品']
    },
    {
      id: 'p8',
      title: 'AIGC 新媒体设计 · 结业项目',
      category: 'AIGC',
      year: '2026',
      desc: '围绕海报、商品详情页、展板与 IP 形象展开系列实践，完成从概念到成稿的完整流程。',
      image: 'assets/p8.jpg',
      link: '',
      tags: ['AIGC', '海报', 'IP', '商品视觉', '结业认证']
    },
    {
      id: 'p9',
      title: 'Chill More · 护肤产品海报',
      category: 'AIGC',
      year: '2026',
      desc: '以「自然植萃、纯净配方」为概念，用湿润岩石、蕨类与柔和光线构建产品场景。',
      image: 'assets/chill-0.jpg',
      link: '',
      tags: ['AIGC', '产品海报', '商业视觉', '护肤'],
      detail: {
        lead: '围绕「自然植萃、纯净配方」展开的 AIGC 护肤洗护系列海报，用自然场景与柔和光线构建产品质感。',
        sections: [
          { h: '01 · 概念', p: '为洗发水、身体乳、护手霜分别设定植物、水波、岩石等自然场景，统一在清新的绿色调里。' },
          { h: '02 · 生成', p: '借助 Midjourney 与 Stable Diffusion 调整产品摆放、光影与材质细节，最终在 Photoshop 中完成后期与排版。' },
          { h: '03 · 成稿', p: '形成三张风格统一、各有侧重的系列海报，呈现一组可落地的护肤洗护商业视觉。' }
        ],
        images: [
          { src: 'assets/chill-0.jpg', cap: '控油蓬松去屑洗发水' },
          { src: 'assets/chill-1.jpg', cap: '四季清香润养身体乳' },
          { src: 'assets/chill-2.jpg', cap: '轻柔润养香氛护手霜' }
        ],
        note: '产品文案与视觉均为 AIGC 商业海报练习。'
      }
    },
    {
      id: 'p10',
      title: '好利来 · 半熟芝士 AIGC 海报',
      category: 'AIGC',
      year: '2025',
      desc: '以「超级芝士 超级发布」为主题的限定蛋糕视觉提案，把产品包装成一场梦境般的发布事件。',
      image: 'assets/haoli-0.jpg',
      link: '',
      tags: ['AIGC', '商业海报', '甜品', '系列作品'],
      detail: {
        lead: '以「超级芝士 超级发布」为主题的限定蛋糕视觉提案，把产品包装成一场梦境般的发布事件。',
        sections: [
          { h: '01 · 概念', p: '确立高饱和粉蓝对比的视觉基调，用奇幻城堡与爱心元素构建童话般的发布氛围。' },
          { h: '02 · 生成', p: '反复迭代配色、材质与构图，让产品的诱人质感与梦幻场景自然融合。' },
          { h: '03 · 成稿', p: '完成三张系列海报，统一视觉语言又各有侧重。' }
        ],
        images: [
          { src: 'assets/haoli-0.jpg', cap: '系列海报 · 其一' },
          { src: 'assets/haoli-1.jpg', cap: '系列海报 · 其二' },
          { src: 'assets/haoli-2.jpg', cap: '系列海报 · 其三' }
        ],
        note: '完整呈现从概念设定到三张成稿的系列海报。'
      }
    },
    {
      id: 'p11',
      title: '夏天就要玩野 · 活动视觉',
      category: '视觉设计',
      year: '2025',
      desc: '夏日主题活动的主视觉延展，围绕户外、露营与玩水的场景意象完成多尺寸系列画面。',
      image: 'assets/p11.jpg',
      link: '',
      tags: ['活动视觉', '海报', '系列', '夏日']
    },
    {
      id: 'p12',
      title: '游戏活动视觉 · 夜明之前 / 圣诞奇幻之舞',
      category: '游戏 UI',
      year: '2025',
      desc: '游戏内活动 Banner 与弹窗视觉设计，分别围绕角色叙事与节日限定活动展开。',
      image: 'assets/p12.jpg',
      link: '',
      tags: ['游戏 UI', 'Banner', '活动弹窗', '视觉设计']
    },
    {
      id: 'p13',
      title: '饿了么 × 良品铺子 · 零食季 H5',
      category: '电商设计',
      year: '2025',
      desc: '以「零食鲜送」为主题的长页 H5 视觉，串联头图、优惠券区、商品陈列与会员权益。',
      image: 'assets/p13.jpg',
      link: '',
      tags: ['H5', '电商', '促销视觉', '长图']
    },
    {
      id: 'p14',
      title: '齐天流韵 · 孙悟空形象谱系可视化',
      category: '信息设计',
      year: '2026',
      desc: '以孙悟空为线索，梳理其从神话文本到当代跨媒介形象的演变谱系。',
      image: 'assets/qitian-0.jpg',
      link: '',
      tags: ['信息可视化', 'IP 研究', '数据叙事', '传统文化'],
      detail: {
        lead: '从「齐天大圣」到「斗战胜佛」，一个形象如何在不同媒介里被不断重写？',
        sections: [
          { h: '01 · 谱系梳理', p: '从《西游记》原著出发，横向比对戏曲、动画、影视与游戏中的孙悟空形象。' },
          { h: '02 · 数据可视化', p: '把分散的形象资料整理成结构化数据，再用信息图形语言表达时间脉络与形象差异。' },
          { h: '03 · 版式与呈现', p: '以长图形式组织信息层级，从总览到分表，从数据到图像，层层递进。' }
        ],
        images: [
          { src: 'assets/qitian-0.jpg', cap: '最终成品 · 孙悟空形象谱系信息图解' },
          { src: 'assets/qitian-1.jpg', cap: '数据与图谱草图' },
          { src: 'assets/qitian-2.jpg', cap: '形象谱系整理过程' },
          { src: 'assets/qitian-3.jpg', cap: '版式结构与视觉实验' }
        ],
        note: '作品涵盖资料研究、数据整理、可视化设计与版式落地的完整流程。'
      }
    },
    {
      id: 'p15',
      title: '醒图拟人 IP · 醒小图 / 绒绒星球',
      category: 'IP 设计',
      year: '2026',
      desc: '为「醒图」创作的品牌 IP 与系列海报，从角色设定、职业造型到场景延展，让工具品牌拥有可被记住的人格温度。',
      image: 'assets/poster-fluffy-planet.png',
      link: '',
      tags: ['IP 形象', '角色设计', '品牌视觉', '海报'],
      detail: {
        lead: '一个修图工具如果变成人，会是什么样子？「醒小图」把醒图的品牌气质转译成有性格、有表情的角色。',
        sections: [
          { h: '01 · 角色设定', p: '从品牌调性出发，确立醒小图的性格、色彩与造型语言，建立角色档案与视觉规范。' },
          { h: '02 · 形象延展', p: '延伸出医生、咖啡师、宇航员、消防员、赛车手等多套职业造型，检验 IP 的适应力与辨识度。' },
          { h: '03 · 海报落地', p: '完成「绒绒星球」与雨林场景海报，把角色放进完整叙事场景，形成可复用的视觉资产。' }
        ],
        images: [
          { src: 'assets/poster-fluffy-planet.png', cap: '绒绒星球 · 醒图 IP 海报' },
          { src: 'assets/poster-raincoat.png', cap: '醒小图 · 雨林场景海报' },
          { src: 'assets/xingtu-0.jpg', cap: 'IP 档案 · 角色设定与品牌规范' },
          { src: 'assets/xingtu-1.jpg', cap: '角色设计草图与探索' },
          { src: 'assets/xingtu-2.jpg', cap: '八款职业造型系列' },
          { src: 'assets/xingtu-3.jpg', cap: '造型延展与场景应用' }
        ],
        note: '从概念设定到系列海报，完整呈现一个品牌 IP 的诞生过程。'
      }
    }
  ]
};

const PROFILE_LABELS = {
  eyebrow: '顶部标语',
  name: '姓名 / 昵称',
  tagline: '一句话简介',
  location: '所在地',
  availability: '当前状态',
  intro: '个人简介（正文）',
  focus: '专注方向',
  skills: '技能工具',
  education: '教育背景',
  worksIntro: '作品区说明',
  contactText: '联系区说明',
  footerNote: '页脚文字'
};

const FEATURED_IDS = ['p14', 'p9', 'p15', 'p10', 'p1', 'p4', 'p7', 'p13', 'p11', 'p12', 'p2', 'p3', 'p5', 'p6', 'p8'];
const VIEW_INFO = {
  about: { kicker: 'PROFILE · 个人简介', title: '关于我' },
  works: { kicker: 'SELECTED WORKS · 作品', title: '全部作品' },
  skills: { kicker: 'TOOLBOX · 工具', title: '技能与工具' },
  cv: { kicker: 'JOURNEY · 履历', title: '教育与经历' },
  contact: { kicker: 'SAY HELLO · 联系', title: '联系我' }
};

let data = loadData();
let activeFilter = '全部';
let mainGallery = [];
let popupGallery = [];
let currentGallery = [];
let lbIndex = 0;
let editingIndex = -1;
let revealObserver = null;
let viewHideTimer = 0;
let toastTimer = 0;

const lb = document.getElementById('lightbox');
const popCard = document.getElementById('popCard');
const popOverlay = document.getElementById('popOverlay');
const detailCard = document.getElementById('detailCard');
const detailOverlay = document.getElementById('detailOverlay');
const detailScroll = document.getElementById('detailScroll');
const panel = document.getElementById('editPanel');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('projectModal');

/* ---------- 数据 ---------- */
function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function loadData() {
  let loaded = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      loaded = {
        profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
        projects: Array.isArray(parsed.projects) ? parsed.projects : clone(DEFAULT_DATA.projects)
      };
    }
  } catch (e) { console.warn('读取本地数据失败', e); }
  if (!loaded) loaded = clone(DEFAULT_DATA);

  try {
    if (!localStorage.getItem(NAME_MIGRATION_KEY)) {
      if (loaded.profile.name === '易千惠') loaded.profile.name = '泡芙';
      localStorage.setItem(NAME_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移昵称失败', e); }

  DEFAULT_DATA.projects.forEach(fresh => {
    if (!loaded.projects.some(p => p.id === fresh.id)) loaded.projects.push(clone(fresh));
  });

  try {
    if (!localStorage.getItem(FORMAL_REDESIGN_KEY)) {
      const fresh = DEFAULT_DATA.projects.find(p => p.id === 'p15');
      const old = loaded.projects.find(p => p.id === 'p15');
      if (fresh && old) {
        old.title = fresh.title;
        old.desc = fresh.desc;
        old.image = fresh.image;
        old.tags = clone(fresh.tags);
        old.detail = clone(fresh.detail);
      }
      localStorage.setItem(FORMAL_REDESIGN_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移正式版作品数据失败', e); }

  return loaded;
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    toast('保存失败：浏览器存储空间可能已满');
    return false;
  }
}

/* ---------- 工具 ---------- */
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(str) { return escapeHtml(str); }
function splitSkills(raw) {
  return String(raw || '').split(/[·、,，/|]/).map(s => s.trim()).filter(Boolean);
}
function initialOf(project) {
  return (project && project.title || '?').trim().charAt(0) || '?';
}
function syncBodyLock() {
  const any = (popCard && !popCard.hidden) || (detailCard && !detailCard.hidden) || (lb && !lb.hidden) ||
    (panel && panel.classList.contains('open')) || (modal && !modal.hidden);
  document.body.classList.toggle('pop-open', Boolean(any));
}
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- 渲染 ---------- */
function renderProfile() {
  document.querySelectorAll('[data-profile-field]').forEach(el => {
    const key = el.dataset.profileField;
    if (key in data.profile && el.textContent !== data.profile[key]) el.textContent = data.profile[key];
  });

  const email = data.profile.email || 'hello@example.com';
  ['mainMail', 'contactMail'].forEach(id => {
    const a = document.getElementById(id);
    if (!a) return;
    a.href = 'mailto:' + email;
    a.innerHTML = escapeHtml(email) + ' <span aria-hidden="true">↗</span>';
  });

  const portrait = document.getElementById('aboutPortrait');
  if (!portrait) return;
  const photo = (data.profile.photo || '').trim();
  if (photo) {
    portrait.innerHTML = '<img src="' + escapeAttr(photo) + '" alt="个人照片">';
    const img = portrait.querySelector('img');
    img.addEventListener('error', () => { portrait.innerHTML = '<div class="portrait-placeholder">PHOTO</div>'; });
  } else {
    portrait.innerHTML = '<div class="portrait-placeholder">PHOTO</div>';
  }
}

function renderSkills() {
  const items = splitSkills(data.profile.skills);
  const main = document.getElementById('mainSkills');
  if (main) main.innerHTML = items.map(s => '<span>' + escapeHtml(s) + '</span>').join('');

  const cloud = document.getElementById('skillCloud');
  if (!cloud) return;
  const rots = [-4, 3, -2, 5, -3, 2, -5, 4];
  cloud.innerHTML = items.map((s, i) =>
    '<span class="skill-item" style="--r:' + rots[i % rots.length] + 'deg">' + escapeHtml(s) + '</span>'
  ).join('');
}

function mediaMarkup(project, className) {
  const src = (project.image || '').trim();
  if (src) {
    return '<img src="' + escapeAttr(src) + '" alt="' + escapeAttr(project.title || '作品') +
      '" loading="lazy" decoding="async" draggable="false" data-fallback="' + escapeAttr(initialOf(project)) + '">';
  }
  return '<span class="' + (className || 'ph') + '">' + escapeHtml(initialOf(project)) + '</span>';
}

function bindImageFallbacks(root) {
  root.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      const box = img.parentElement;
      if (box) box.innerHTML = '<span class="ph">' + escapeHtml(img.dataset.fallback || '?') + '</span>';
    });
  });
}

function orderedMainProjects() {
  const byId = new Map(data.projects.map(p => [p.id, p]));
  const list = [];
  FEATURED_IDS.forEach(id => { if (byId.has(id)) list.push(byId.get(id)); });
  data.projects.forEach(p => { if (!list.includes(p)) list.push(p); });
  return list;
}

function renderMainWorks() {
  const grid = document.getElementById('mainWorks');
  if (!grid) return;
  mainGallery = orderedMainProjects();
  grid.innerHTML = mainGallery.map((p, i) => {
    const tags = (p.tags || []).filter(Boolean).slice(0, 3)
      .map(t => '<span>' + escapeHtml(t) + '</span>').join('');
    const action = (p.link || '').trim()
      ? '<a class="frame-link" href="' + escapeAttr(p.link.trim()) + '" target="_blank" rel="noopener noreferrer" data-stoplb>打开项目 ↗</a>'
      : '<button class="frame-link" type="button" data-stoplb>' + (p.detail ? '阅读项目故事 ↗' : '查看高清图 ↗') + '</button>';
    return '<article class="work-frame reveal" data-index="' + i + '" tabindex="0" role="button" aria-label="查看 ' + escapeAttr(p.title || '作品') + '">' +
      '<div class="frame-media">' + mediaMarkup(p, 'ph') + '</div>' +
      '<div class="frame-info">' +
        '<div class="frame-meta"><span>' + escapeHtml(p.category || '作品') + '</span><span>' + escapeHtml(p.year || '') + '</span></div>' +
        '<h3 class="frame-title">' + escapeHtml(p.title || '未命名作品') + '</h3>' +
        '<p class="frame-desc">' + escapeHtml(p.desc || '') + '</p>' +
        (tags ? '<div class="frame-tags">' + tags + '</div>' : '') +
        action +
      '</div>' +
    '</article>';
  }).join('');

  bindImageFallbacks(grid);
  grid.querySelectorAll('.work-frame').forEach(card => {
    const open = () => openProject(mainGallery, Number(card.dataset.index));
    card.addEventListener('click', e => { if (!e.target.closest('[data-stoplb]')) open(); });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
  observeReveals();
}

function renderFilters() {
  const box = document.getElementById('filters');
  if (!box) return;
  const cats = ['全部', ...new Set(data.projects.map(p => p.category || '其他'))];
  if (!cats.includes(activeFilter)) activeFilter = '全部';
  box.innerHTML = cats.map(c =>
    '<button class="filter-btn ' + (c === activeFilter ? 'active' : '') + '" data-cat="' + escapeAttr(c) + '">' + escapeHtml(c) + '</button>'
  ).join('');
  box.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.cat;
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  popupGallery = (activeFilter === '全部' ? data.projects.slice() : data.projects.filter(p => (p.category || '其他') === activeFilter))
    .sort((a, b) => String(a.title || '').localeCompare(String(b.title || ''), 'zh-Hans-CN'));

  const empty = document.getElementById('emptyState');
  if (empty) empty.hidden = popupGallery.length > 0;

  grid.innerHTML = popupGallery.map((p, i) => {
    const tags = (p.tags || []).filter(Boolean).slice(0, 3)
      .map(t => '<span class="work-tag">' + escapeHtml(t) + '</span>').join('');
    const action = (p.link || '').trim()
      ? '<a class="work-open" href="' + escapeAttr(p.link.trim()) + '" target="_blank" rel="noopener noreferrer" data-stoplb>查看项目 ↗</a>'
      : '<button class="work-open" type="button" data-stoplb>' + (p.detail ? '项目详情 ↗' : '高清图 ↗') + '</button>';
    return '<article class="work-item" data-index="' + i + '" tabindex="0" role="button" aria-label="查看 ' + escapeAttr(p.title || '作品') + '">' +
      '<div class="work-media">' + mediaMarkup(p, 'work-placeholder') + '</div>' +
      '<div class="work-body">' +
        '<h3 class="work-title">' + escapeHtml(p.title || '未命名作品') + '</h3>' +
        '<span class="work-cat">' + escapeHtml(p.category || '其他') + ' · ' + escapeHtml(p.year || '') + '</span>' +
        '<p class="work-desc">' + escapeHtml(p.desc || '') + '</p>' +
        (tags ? '<div class="work-tags">' + tags + '</div>' : '') +
        action +
      '</div>' +
    '</article>';
  }).join('');

  bindImageFallbacks(grid);
  grid.querySelectorAll('.work-item').forEach(card => {
    const open = () => openProject(popupGallery, Number(card.dataset.index));
    card.addEventListener('click', e => { if (!e.target.closest('[data-stoplb]')) open(); });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

function render() {
  renderProfile();
  renderSkills();
  renderMainWorks();
  renderFilters();
  renderProjects();
}

function observeReveals() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  items.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 3, 2) * 70 + 'ms';
    revealObserver.observe(el);
  });
}

/* ---------- 作品查看 ---------- */
function openProject(gallery, index) {
  currentGallery = gallery;
  const p = gallery[index];
  if (!p) return;
  if (p.detail) openDetail(p);
  else openLightbox(index);
}

function renderLightbox() {
  const p = currentGallery[lbIndex];
  if (!p || !lb) return;
  const img = document.getElementById('lbImg');
  const src = (p.image || '').trim();
  img.onload = () => {
    document.getElementById('lbCount').textContent =
      (lbIndex + 1) + ' / ' + currentGallery.length + ' · 原图 ' + img.naturalWidth + '×' + img.naturalHeight;
  };
  img.onerror = () => { img.style.visibility = 'hidden'; };
  if (src) {
    img.src = src;
    img.alt = p.title || '';
    img.style.visibility = 'visible';
  } else {
    img.removeAttribute('src');
    img.alt = '';
    img.style.visibility = 'hidden';
  }
  document.getElementById('lbCat').textContent = (p.category || '作品') + ' · ' + (p.year || '');
  document.getElementById('lbTitle').textContent = p.title || '未命名作品';
  document.getElementById('lbCount').textContent = (lbIndex + 1) + ' / ' + currentGallery.length;
  if (src && img.complete && img.naturalWidth) {
    document.getElementById('lbCount').textContent =
      (lbIndex + 1) + ' / ' + currentGallery.length + ' · 原图 ' + img.naturalWidth + '×' + img.naturalHeight;
  }
  const many = currentGallery.length > 1;
  document.getElementById('lbPrev').hidden = !many;
  document.getElementById('lbNext').hidden = !many;
}

function openLightbox(index) {
  if (!lb) return;
  lbIndex = index;
  renderLightbox();
  lb.hidden = false;
  syncBodyLock();
}

function closeLightbox() {
  if (!lb || lb.hidden) return;
  lb.hidden = true;
  syncBodyLock();
}

function stepLightbox(step) {
  if (!currentGallery.length) return;
  lbIndex = (lbIndex + step + currentGallery.length) % currentGallery.length;
  renderLightbox();
}

function openDetail(project) {
  if (!detailCard || !project || !project.detail) return;
  const d = project.detail;
  const sections = (d.sections || []).map(s =>
    '<div class="detail-sec"><h4>' + escapeHtml(s.h || '') + '</h4><p>' + escapeHtml(s.p || '') + '</p></div>'
  ).join('');
  const images = (d.images || []).map((im, i) =>
    '<figure class="detail-figure"><img src="' + escapeAttr(im.src) + '" alt="' + escapeAttr(im.cap || project.title) +
    '" loading="lazy" decoding="async" data-detail-img="' + i + '">' +
    (im.cap ? '<figcaption>' + escapeHtml(im.cap) + '</figcaption>' : '') + '</figure>'
  ).join('');

  detailScroll.innerHTML =
    '<header class="detail-head">' +
      '<span class="detail-kicker">' + escapeHtml(project.category || '项目') + ' · ' + escapeHtml(project.year || '') + '</span>' +
      '<h2>' + escapeHtml(project.title || '') + '</h2>' +
      '<p class="detail-lead">' + escapeHtml(d.lead || project.desc || '') + '</p>' +
    '</header>' +
    '<div class="detail-sections">' + sections + '</div>' +
    '<div class="detail-gallery">' + images + '</div>' +
    (d.note ? '<div class="detail-note">' + escapeHtml(d.note) + '</div>' : '');

  detailScroll.querySelectorAll('[data-detail-img]').forEach(img => {
    img.addEventListener('click', () => {
      currentGallery = (d.images || []).map((im, i) => ({
        image: im.src,
        title: im.cap || project.title,
        category: '项目详情',
        year: String(i + 1)
      }));
      openLightbox(Number(img.dataset.detailImg));
    });
  });

  detailScroll.scrollTop = 0;
  detailOverlay.hidden = false;
  detailCard.hidden = false;
  syncBodyLock();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    detailOverlay.classList.add('show');
    detailCard.classList.add('open');
  }));
}

function closeDetail() {
  if (!detailCard || detailCard.hidden) return;
  detailCard.classList.remove('open');
  detailOverlay.classList.remove('show');
  setTimeout(() => {
    detailCard.hidden = true;
    detailOverlay.hidden = true;
    syncBodyLock();
  }, 420);
}

/* ---------- 中央视图 ---------- */
function openView(name) {
  const info = VIEW_INFO[name];
  if (!info || !popCard) return;
  clearTimeout(viewHideTimer);
  document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== 'view-' + name; });
  document.getElementById('popKicker').textContent = info.kicker;
  document.getElementById('popTitle').textContent = info.title;
  if (name === 'works') { renderFilters(); renderProjects(); }
  popOverlay.hidden = false;
  popCard.hidden = false;
  syncBodyLock();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    popOverlay.classList.add('show');
    popCard.classList.add('open');
  }));
}

function closeView() {
  if (!popCard || popCard.hidden) return;
  popCard.classList.remove('open');
  popOverlay.classList.remove('show');
  clearTimeout(viewHideTimer);
  viewHideTimer = setTimeout(() => {
    popCard.hidden = true;
    popOverlay.hidden = true;
    syncBodyLock();
  }, 420);
}

/* ---------- 编辑面板 ---------- */
function openPanel() {
  if (typeof window.isCreator === 'function' && !window.isCreator()) {
    toast('仅创作者可编辑内容');
    return;
  }
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  overlay.hidden = false;
  renderProfileFields();
  renderEditorList();
  document.getElementById('profilePhoto').value = data.profile.photo || '';
  syncBodyLock();
}

function closePanel() {
  if (!panel) return;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  overlay.hidden = true;
  syncBodyLock();
}

function renderProfileFields() {
  const box = document.getElementById('profileFields');
  const keys = Object.keys(PROFILE_LABELS);
  box.innerHTML = keys.map(k =>
    '<div class="field-group"><label>' + PROFILE_LABELS[k] + '</label>' +
    (k === 'intro' || k === 'contactText'
      ? '<textarea data-key="' + k + '" rows="3">' + escapeHtml(data.profile[k] || '') + '</textarea>'
      : '<input type="text" data-key="' + k + '" value="' + escapeAttr(data.profile[k] || '') + '">') +
    '</div>'
  ).join('') +
  '<div class="field-group"><label>联系邮箱</label><input type="text" id="profileEmail" value="' + escapeAttr(data.profile.email || '') + '"></div>';
}

function renderEditorList() {
  const box = document.getElementById('projectEditorList');
  if (!data.projects.length) {
    box.innerHTML = '<p class="hint">暂无作品，点击上方按钮添加。</p>';
    return;
  }
  box.innerHTML = data.projects.map((p, i) =>
    '<div class="editor-item"><div>' +
      '<div class="e-title">' + escapeHtml(p.title || '未命名作品') + '</div>' +
      '<div class="e-meta">' + escapeHtml(p.category || '其他') + ' · ' + escapeHtml(p.year || '') + '</div>' +
    '</div><div class="e-actions">' +
      '<div class="updown"><button data-act="up" data-i="' + i + '" title="上移">▲</button><button data-act="down" data-i="' + i + '" title="下移">▼</button></div>' +
      '<button class="mini-btn" data-act="edit" data-i="' + i + '">编辑</button>' +
      '<button class="mini-btn del" data-act="del" data-i="' + i + '">删除</button>' +
    '</div></div>'
  ).join('');

  box.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.i);
      const act = btn.dataset.act;
      if (act === 'edit') { openModal(i); return; }
      if (act === 'del') {
        if (confirm('确定删除「' + data.projects[i].title + '」吗？')) {
          data.projects.splice(i, 1);
          saveData(); render(); renderEditorList(); toast('已删除');
        }
        return;
      }
      if (act === 'up' && i > 0) [data.projects[i - 1], data.projects[i]] = [data.projects[i], data.projects[i - 1]];
      if (act === 'down' && i < data.projects.length - 1) [data.projects[i + 1], data.projects[i]] = [data.projects[i], data.projects[i + 1]];
      saveData(); render(); renderEditorList();
    });
  });
}

function openModal(index = -1) {
  editingIndex = index;
  const p = index >= 0 ? data.projects[index] : {};
  document.getElementById('modalTitle').textContent = index >= 0 ? '编辑作品' : '添加新作品';
  document.getElementById('f-title').value = p.title || '';
  document.getElementById('f-category').value = p.category || '';
  document.getElementById('f-year').value = p.year || '';
  document.getElementById('f-desc').value = p.desc || '';
  document.getElementById('f-image').value = p.image || '';
  document.getElementById('f-link').value = p.link || '';
  document.getElementById('f-tags').value = (p.tags || []).join(', ');
  modal.hidden = false;
  syncBodyLock();
}

function closeModal() {
  modal.hidden = true;
  syncBodyLock();
}

/* ---------- 背景与界面 ---------- */
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  const starsBox = document.getElementById('stars');
  let night = false;
  try { night = localStorage.getItem(THEME_KEY) === 'night'; } catch (_) {}

  if (starsBox) {
    let html = '';
    for (let i = 0; i < 80; i++) {
      const s = (Math.random() * 2 + 1).toFixed(1);
      html += '<i class="star" style="left:' + (Math.random() * 100).toFixed(2) + '%;top:' +
        (Math.random() * 100).toFixed(2) + '%;width:' + s + 'px;height:' + s + 'px;animation-delay:' +
        (Math.random() * 4).toFixed(2) + 's;opacity:' + (Math.random() * .6 + .3).toFixed(2) + '"></i>';
    }
    starsBox.innerHTML = html;
  }

  function apply() {
    document.body.classList.toggle('night', night);
    if (btn) {
      btn.querySelector('.theme-icon').textContent = night ? '☀' : '☾';
      btn.title = night ? '切换到白天' : '切换到夜晚';
    }
    try { localStorage.setItem(THEME_KEY, night ? 'night' : 'day'); } catch (_) {}
  }
  if (btn) btn.addEventListener('click', () => { night = !night; apply(); });
  apply();
})();

(function initEcoLayer() {
  const eco = document.getElementById('ecoLayer');
  if (!eco) return;
  const icons = ['🐾', '✧', '〰', '♡', '·'];
  let html = '';
  for (let i = 0; i < 18; i++) {
    html += '<span class="eco-item" style="left:' + (Math.random() * 100).toFixed(2) +
      '%;--sz:' + Math.round(Math.random() * 9 + 7) +
      'px;--op:' + (Math.random() * .08 + .03).toFixed(2) +
      ';--dur:' + Math.round(Math.random() * 18 + 22) +
      's;--delay:' + (-Math.random() * 30).toFixed(1) +
      's;--drift:' + Math.round(Math.random() * 100 - 50) + 'px">' + icons[i % icons.length] + '</span>';
  }
  eco.innerHTML = html;
  document.addEventListener('pointermove', e => {
    const x = (e.clientX / window.innerWidth - .5) * 12;
    const y = (e.clientY / window.innerHeight - .5) * 9;
    eco.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
  }, { passive: true });
})();

(function initScrollUI() {
  const progress = document.getElementById('scrollProgress');
  const sections = ['home', 'works', 'journey', 'about', 'contact', 'guestbook'];
  const links = Array.from(document.querySelectorAll('.nav a'));
  let ticking = false;

  function update() {
    ticking = false;
    const y = window.scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = Math.round(y / max * 100) + '%';

    const line = y + window.innerHeight * .32;
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + y <= line) current = id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

(function initTimelineScroll() {
  const track = document.getElementById('projectGrid');
  if (!track) return;
  track.addEventListener('dragstart', e => e.preventDefault());

  let dragging = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch' || e.target.closest('.work-open')) return;
    dragging = true; moved = false;
    startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => { dragging = false; });
  track.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);

  const prev = document.getElementById('tlPrev');
  const next = document.getElementById('tlNext');
  function step(dir) {
    const card = track.querySelector('.work-item');
    const amount = card ? card.getBoundingClientRect().width + 18 : 280;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', () => step(-1));
  if (next) next.addEventListener('click', () => step(1));

  document.addEventListener('keydown', e => {
    const tag = (e.target && e.target.tagName) || '';
    if (/INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable)) return;
    if (!popCard || popCard.hidden || !lb || !lb.hidden || !detailCard || !detailCard.hidden) return;
    if (track.offsetParent === null) return;
    let dir = 0;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') dir = -1;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') dir = 1;
    if (!dir) return;
    e.preventDefault();
    step(dir);
  });
})();

/* ---------- 留言板 ---------- */
(function initGuestbook() {
  const form = document.getElementById('gbForm');
  const list = document.getElementById('gbList');
  const nameEl = document.getElementById('gbName');
  const textEl = document.getElementById('gbText');
  const counter = document.getElementById('gbCount');
  if (!form || !list || !textEl) return;

  let msgs = [];
  try { msgs = JSON.parse(localStorage.getItem(GUESTBOOK_KEY)) || []; } catch (_) { msgs = []; }
  if (!Array.isArray(msgs)) msgs = [];

  function save() { try { localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(msgs)); } catch (_) {} }
  function render() {
    if (!msgs.length) {
      list.innerHTML = '<p class="gb-empty">还没有留言，来当第一个吧。</p>';
      return;
    }
    list.innerHTML = msgs.map((m, i) =>
      '<div class="gb-item"><div class="gb-who">' + escapeHtml(m.name || '匿名访客') + ' 🐾</div>' +
      '<p class="gb-text">' + escapeHtml(m.text || '') + '</p>' +
      '<time class="gb-time">' + escapeHtml(m.time || '') + '</time>' +
      '<button class="gb-del" data-i="' + i + '" title="删除这条" aria-label="删除这条">✕</button></div>'
    ).join('');
    list.querySelectorAll('.gb-del').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('删除这条留言吗？')) {
          msgs.splice(Number(btn.dataset.i), 1);
          save(); render();
        }
      });
    });
  }
  function updateCount() { if (counter) counter.textContent = (textEl.value || '').length + ' / 300'; }
  textEl.addEventListener('input', updateCount);
  updateCount();
  render();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = (textEl.value || '').trim();
    if (!text) { toast('先写点什么吧'); return; }
    const name = (nameEl.value || '').trim() || '匿名访客';
    const now = new Date();
    const time = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');
    const email = data.profile.email || '3303076659@qq.com';
    const subject = encodeURIComponent('作品集新留言 · ' + name);
    const body = encodeURIComponent('留言人：' + name + '\n时间：' + time + '\n\n' + text);

    msgs.unshift({ name, text, time });
    save(); render();
    textEl.value = ''; updateCount();
    toast('已打开邮件应用，点发送即可寄出');
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  });
})();

/* ---------- 创作者模式 ---------- */
(function initCreatorMode() {
  const entry = document.getElementById('creatorEntry');
  const modalEl = document.getElementById('creatorModal');
  const pwd = document.getElementById('creatorPwd');
  if (!entry || !modalEl) {
    window.isCreator = () => false;
    return;
  }

  let unlocked = false;
  try { unlocked = sessionStorage.getItem(CREATOR_KEY) === '1'; } catch (_) {}

  function apply(on) {
    unlocked = on;
    document.body.classList.toggle('creator-mode', on);
    entry.textContent = on ? '🔓 退出创作模式' : '🔒 创作者入口';
    entry.title = on ? '点击退出创作模式' : '创作者入口';
    try {
      if (on) sessionStorage.setItem(CREATOR_KEY, '1');
      else sessionStorage.removeItem(CREATOR_KEY);
    } catch (_) {}
  }
  apply(unlocked);
  window.isCreator = () => unlocked;

  function closeCreatorModal() {
    modalEl.hidden = true;
    syncBodyLock();
  }
  function verify() {
    if ((pwd.value || '').trim() === CREATOR_PASSWORD) {
      apply(true);
      closeCreatorModal();
      toast('已进入创作模式');
    } else {
      toast('密码不正确，请重试');
      pwd.value = '';
      pwd.focus();
    }
  }

  entry.addEventListener('click', () => {
    if (unlocked) {
      apply(false);
      closePanel();
      toast('已退出创作模式');
    } else {
      modalEl.hidden = false;
      syncBodyLock();
      pwd.value = '';
      setTimeout(() => pwd.focus(), 50);
    }
  });
  document.getElementById('creatorClose').addEventListener('click', closeCreatorModal);
  document.getElementById('creatorCancel').addEventListener('click', closeCreatorModal);
  modalEl.addEventListener('click', e => { if (e.target === modalEl) closeCreatorModal(); });
  document.getElementById('creatorSubmit').addEventListener('click', verify);
  pwd.addEventListener('keydown', e => { if (e.key === 'Enter') verify(); });
})();

/* ---------- 轻音乐 ---------- */
(function initMusic() {
  const btn = document.getElementById('musicToggle');
  if (!btn) return;
  let ctx = null, master = null, timer = null, playing = false, step = 0, idx = 2;
  const scale = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880];
  const bass = [130.81, 164.81, 196, 174.61];

  function note(freq, when, dur, vol, type) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1500;
    osc.type = type || 'triangle';
    osc.frequency.setValueAtTime(freq, when);
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(vol, when + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(filter); filter.connect(gain); gain.connect(master);
    osc.start(when); osc.stop(when + dur + 0.05);
  }

  function schedule() {
    if (!playing || !ctx) return;
    const now = ctx.currentTime;
    const beat = 0.68;
    idx += Math.floor(Math.random() * 3) - 1;
    if (idx < 0) idx = 1;
    if (idx >= scale.length) idx = scale.length - 2;
    const len = beat * (Math.random() < .3 ? 2.6 : 1.7);
    note(scale[idx], now + .05, len, .14, 'triangle');
    if (Math.random() < .3) note(scale[idx] * 2, now + .05, len * .7, .035, 'sine');
    if (step % 4 === 0) note(bass[Math.floor(step / 4) % bass.length], now + .05, beat * 3.6, .085, 'sine');
    step++;
    timer = setTimeout(schedule, beat * 950);
  }

  function start() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { toast('当前浏览器不支持音乐播放'); return; }
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    playing = true;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(.45, ctx.currentTime + 1.1);
    btn.classList.add('playing');
    btn.setAttribute('aria-pressed', 'true');
    btn.title = '暂停轻音乐';
    schedule();
  }

  function stop() {
    playing = false;
    clearTimeout(timer);
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + .55);
    }
    btn.classList.remove('playing');
    btn.setAttribute('aria-pressed', 'false');
    btn.title = '播放轻音乐';
  }

  btn.addEventListener('click', () => { if (playing) stop(); else start(); });
})();

/* ---------- 事件绑定 ---------- */
document.getElementById('navEdit').addEventListener('click', openPanel);
document.getElementById('editClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

document.getElementById('saveProfile').addEventListener('click', () => {
  document.querySelectorAll('#profileFields [data-key]').forEach(input => {
    data.profile[input.dataset.key] = input.value;
  });
  const emailEl = document.getElementById('profileEmail');
  if (emailEl) data.profile.email = emailEl.value.trim();
  data.profile.photo = document.getElementById('profilePhoto').value.trim();
  if (saveData()) { render(); toast('资料已保存'); }
});

document.getElementById('addProject').addEventListener('click', () => openModal());
document.getElementById('modalSave').addEventListener('click', () => {
  const title = document.getElementById('f-title').value.trim();
  if (!title) { alert('请填写作品标题'); return; }
  const old = editingIndex >= 0 ? data.projects[editingIndex] : null;
  const project = {
    ...(old || {}),
    id: old ? old.id : 'p' + Date.now(),
    title,
    category: document.getElementById('f-category').value.trim() || '其他',
    year: document.getElementById('f-year').value.trim(),
    desc: document.getElementById('f-desc').value.trim(),
    image: document.getElementById('f-image').value.trim(),
    link: document.getElementById('f-link').value.trim(),
    tags: document.getElementById('f-tags').value.split(/[,，]/).map(s => s.trim()).filter(Boolean)
  };
  if (editingIndex >= 0) data.projects[editingIndex] = project;
  else data.projects.unshift(project);
  if (saveData()) { render(); renderEditorList(); closeModal(); toast('作品已保存'); }
});
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.getElementById('exportData').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  toast('备份已下载');
});
document.getElementById('importData').addEventListener('click', () => document.getElementById('importFile').click());
document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const parsed = JSON.parse(ev.target.result);
      if (!parsed.profile || !Array.isArray(parsed.projects)) throw new Error('格式不正确');
      data = { profile: { ...DEFAULT_DATA.profile, ...parsed.profile }, projects: parsed.projects };
      saveData(); render(); openPanel();
      document.querySelector('[data-tab="profile"]').click();
      renderProfileFields(); renderEditorList();
      toast('导入成功');
    } catch (err) { alert('导入失败：' + err.message); }
  };
  reader.readAsText(file);
  e.target.value = '';
});
document.getElementById('resetData').addEventListener('click', () => {
  if (confirm('确定恢复默认数据吗？当前修改会被覆盖，建议先导出备份。')) {
    data = clone(DEFAULT_DATA);
    saveData(); render(); openPanel(); renderProfileFields(); renderEditorList();
    toast('已恢复默认数据');
  }
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

const openAllWorks = document.getElementById('openAllWorks');
if (openAllWorks) openAllWorks.addEventListener('click', () => {
  activeFilter = '全部';
  renderFilters(); renderProjects();
  openView('works');
});

document.getElementById('popClose').addEventListener('click', closeView);
popOverlay.addEventListener('click', closeView);
document.getElementById('detailClose').addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', closeDetail);

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); stepLightbox(-1); });
document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); stepLightbox(1); });
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-figure')) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lb && !lb.hidden) { closeLightbox(); return; }
  closeDetail(); closeView(); closePanel(); closeModal();
});
document.addEventListener('keydown', e => {
  if (!lb || lb.hidden) return;
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
});

/* ---------- 启动 ---------- */
render();
