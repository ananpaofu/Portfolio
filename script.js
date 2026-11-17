/* ============================================================
   简易作品集 · 所有内容保存在浏览器本地存储 (localStorage)
   可通过「编辑」面板直接修改，无需改动代码
   ============================================================ */

const STORAGE_KEY = 'my_portfolio_data_v1';
const LINK_MIGRATION_KEY = 'my_portfolio_link_migration_v1';
const NAME_MIGRATION_KEY = 'my_portfolio_name_migration_v1';
const RESUME_MIGRATION_KEY = 'my_portfolio_resume_migration_v1';
const IMAGE_MIGRATION_KEY = 'my_portfolio_image_migration_v1';
const THUMB_MIGRATION_KEY = 'my_portfolio_thumb_migration_v1';
const GITHUB_LINK_MIGRATION_KEY = 'my_portfolio_github_link_migration_v1';
const NEW_PROJECTS_MIGRATION_KEY = 'my_portfolio_new_projects_migration_v1';
const DETAIL_MIGRATION_KEY = 'my_portfolio_detail_migration_v1';
const SERIES_MIGRATION_KEY = 'my_portfolio_series_migration_v1';
const POLISH_MIGRATION_KEY = 'my_portfolio_polish_migration_v1';

const DEFAULT_DATA = {
  profile: {
    eyebrow: '视觉设计 · 交互可视化 · AIGC 创作',
    name: '泡芙',
    tagline: '用设计讲述故事，让文化被看见。',
    location: '湖北 · 武汉 / 宜昌',
    availability: '可接受合作 / 实习机会',
    intro: '湖北美术学院艺术与科技专业本科在读，专注视觉设计、交互可视化与 AIGC 创作。擅长把研究、叙事与视觉语言结合，做出有温度、能被人记住的作品。',
    focus: '视觉设计 / 交互可视化 / AIGC 创作',
    skills: 'Photoshop · Illustrator · SketchUp · AutoCAD · Midjourney · Stable Diffusion · ComfyUI · Lora 模型训练 · 开源编程',
    education: '湖北美术学院 · 艺术与科技 · 本科在读（2024.09—2026.07）',
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
      desc: '基于 Mapbox GL JS 的三维交互式地图，可视化湖北省非遗工艺的地理分布、级别与历史脉络。设计全景巡航、线路导览、分级筛选等交互，让分散的非遗数据变成一段可以被「走过」的空间叙事。',
      image: 'assets/p1.jpg',
      link: 'index2.html',
      tags: ['信息可视化', '地图', 'Web', 'Mapbox', '非遗']
    },
    {
      id: 'p2',
      title: '二十四节气 · 视觉插画',
      category: '插画',
      year: '2025',
      desc: '以中国传统二十四节气为母题创作的系列视觉插画，将节气物候、花卉意象与东方色彩体系结合。柔和的粉紫调与装饰性纹样，试图让传统时间美学在当代插画语言里重新被看见。',
      image: 'assets/p2.jpg',
      link: '',
      tags: ['插画', '传统文化', '节气', '国风', '系列作品']
    },
    {
      id: 'p3',
      title: '龙园水世界 · 视觉方案',
      category: '视觉设计',
      year: '2026',
      desc: '文旅项目的视觉框架与提案设计，涵盖主视觉、导视系统与宣传物料的规划。以「工业遗产 × 自然共生 × 文化新生」为主题，建立从店铺主页到文创周边的统一视觉语言。',
      image: 'assets/p3.jpg',
      link: '',
      tags: ['品牌', '文旅', '提案', '视觉系统']
    },
    {
      id: 'p4',
      title: '睡眠之困与陪伴之缺',
      category: '信息设计',
      year: '2025',
      desc: '围绕当代年轻人睡眠议题的调研与数据呈现项目。通过访谈提炼出「睡眠之困」与「陪伴之缺」两条线索，将定性材料转化为可阅读的信息图表与叙事版面，让数据背后的人被看见。',
      image: 'assets/p4.jpg',
      link: '',
      tags: ['调研', '数据', '叙事', '信息设计']
    },
    {
      id: 'p5',
      title: '电商详情页视觉框架',
      category: '视觉设计',
      year: '2025',
      desc: '以用户体验为核心的电商详情页视觉框架，围绕养生壶产品构建从卖点提炼、场景摄影到信息分层的完整页面。兼顾促销转化与品牌调性，形成可复用的模板系统。',
      image: 'assets/p5.jpg',
      link: '',
      tags: ['电商', 'UI', '版式', '产品视觉', '模板']
    },
    {
      id: 'p6',
      title: '物理与硬件互动基础 · 课程作业',
      category: '交互装置',
      year: '2024',
      desc: '结合 ESP32 控制板、点阵屏与触摸传感器的实验性交互装置。「点阵屏情绪」把对植物的触碰转译成可视表情，探索物理世界与数字反馈之间的情感连接，并附完整的接线与代码说明。',
      image: 'assets/p6.jpg',
      link: '',
      tags: ['交互', '装置', '创意编程', 'ESP32', '硬件']
    },
    {
      id: 'p7',
      title: '文字过家家 · 展览视觉设计',
      category: '展览设计',
      year: '2025',
      desc: '参与「文字过家家」展览的策划、后期制作、宣传与平面设计，并用三维建模可视化展陈思路。项目获学院《优秀作品证书》。',
      image: 'assets/p7.jpg',
      link: '',
      tags: ['展览', '平面', '三维建模', '优秀作品']
    },
    {
      id: 'p8',
      title: 'AIGC 新媒体设计 · 结业项目',
      category: 'AIGC',
      year: '2026',
      desc: '系统学习 AIGC 新媒体设计方向，围绕海报、商品详情页、展板与 IP 形象展开系列实践。使用 Midjourney、Stable Diffusion 与 ComfyUI 完成从概念到成稿的完整流程，获机构结业认证。',
      image: 'assets/p8.jpg',
      link: '',
      tags: ['AIGC', '海报', 'IP', '商品视觉', '结业认证']
    },
    {
      id: 'p9',
      title: 'Chill More · 护肤产品海报',
      category: 'AIGC',
      year: '2026',
      desc: '围绕护肤与洗护产品展开的 AIGC 商业海报练习，以「自然植萃、纯净配方」为概念，用湿润岩石、蕨类与柔和光线构建产品场景，探索 AI 生成图像在商业产品视觉中的质感表现。',
      image: 'assets/chill-0.jpg',
      link: '',
      tags: ['AIGC', '产品海报', '商业视觉', '护肤'],
      detail: {
        lead: '围绕「自然植萃、纯净配方」展开的 AIGC 护肤洗护系列海报，用自然场景与柔和光线构建产品质感，探索 AI 生成图像在商业产品视觉中的表现力。',
        sections: [
          { h: '01 · 概念', p: '以「始于自然，归于自然」为核心，为洗发水、身体乳、护手霜三款产品分别设定植物、水波、岩石等自然场景，统一在清新的绿色调里。' },
          { h: '02 · 生成', p: '借助 Midjourney 与 Stable Diffusion，反复调整产品摆放、光影与材质细节，让 AI 生成的自然场景与真实产品包装自然融合。最终在 Photoshop 中进行后期加工，统一色调、修正细节并完成排版落地。' },
          { h: '03 · 成稿', p: '形成三张风格统一、各有侧重的系列海报，从控油蓬松到四季润养，完整呈现一组可落地的护肤洗护商业视觉。' }
        ],
        images: [
          { src: 'assets/chill-0.jpg', cap: '控油蓬松去屑洗发水' },
          { src: 'assets/chill-1.jpg', cap: '四季清香润养身体乳' },
          { src: 'assets/chill-2.jpg', cap: '轻柔润养香氛护手霜' }
        ],
        note: '产品文案与视觉均为 AIGC 商业海报练习，呈现完整的系列化思路。'
      }
    },
    {
      id: 'p10',
      title: '好利来 · 半熟芝士 AIGC 海报',
      category: 'AIGC',
      year: '2025',
      desc: '以「超级芝士 超级发布」为主题的限定蛋糕视觉提案。通过高饱和的粉蓝对比、奇幻城堡与爱心元素，把产品包装成一场梦境般的发布事件，完成从概念到成稿的系列海报。',
      image: 'assets/haoli-0.jpg',
      link: '',
      tags: ['AIGC', '商业海报', '甜品', '系列作品'],
      detail: {
        lead: '以「超级芝士 超级发布」为主题的限定蛋糕视觉提案，把产品包装成一场梦境般的发布事件。',
        sections: [
          { h: '01 · 概念', p: '围绕「半熟芝士」的绵密口感与甜品特质，确立高饱和粉蓝对比的视觉基调，用奇幻城堡与爱心元素构建童话般的发布氛围。' },
          { h: '02 · 生成', p: '借助 Midjourney 与 Stable Diffusion 反复迭代，调整配色、材质与构图，让产品的诱人质感与梦幻场景自然融合。最终在 Photoshop 中进行后期加工，统一色调、修正细节并完成排版落地。' },
          { h: '03 · 成稿', p: '完成三张系列海报，统一视觉语言又各有侧重，形成一组可直接用于商业发布的甜品视觉。' }
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
      desc: '夏日主题活动的主视觉延展，围绕户外、露营与玩水的场景意象，完成多尺寸的系列画面设计，保持标题字体、色彩与版式在不同投放场景中的一致性。',
      image: 'assets/p11.jpg',
      link: '',
      tags: ['活动视觉', '海报', '系列', '夏日']
    },
    {
      id: 'p12',
      title: '游戏活动视觉 · 夜明之前 / 圣诞奇幻之舞',
      category: '游戏 UI',
      year: '2025',
      desc: '游戏内活动 Banner 与弹窗视觉设计。分别围绕角色叙事与节日限定活动，完成主视觉、信息层级与按钮引导的整合，兼顾氛围感与转化率。',
      image: 'assets/p12.jpg',
      link: '',
      tags: ['游戏 UI', 'Banner', '活动弹窗', '视觉设计']
    },
    {
      id: 'p13',
      title: '饿了么 × 良品铺子 · 零食季 H5',
      category: '电商设计',
      year: '2025',
      desc: '以「饿了么零食节 · 假享_time 零食鲜送」为主题的长页 H5 视觉。整合头图、优惠券区、商品分层陈列与会员权益，用统一的红色促销语言串联从领券到下单的完整路径。',
      image: 'assets/p13.jpg',
      link: '',
      tags: ['H5', '电商', '促销视觉', '长图']
    },
    {
      id: 'p14',
      title: '齐天流韵 · 孙悟空形象谱系可视化',
      category: '信息设计',
      year: '2026',
      desc: '以孙悟空为线索，梳理其从神话文本到当代跨媒介形象的演变谱系。把文学、戏曲、影视与游戏里的形象数据整理成可读的信息图解，探索传统 IP 在视觉叙事中的当代表达。',
      image: 'assets/qitian-0.jpg',
      link: '',
      tags: ['信息可视化', 'IP 研究', '数据叙事', '传统文化'],
      detail: {
        lead: '从「齐天大圣」到「斗战胜佛」，一个形象如何在不同媒介里被不断重写？这个项目把孙悟空的形象谱系做成一张可以被阅读的信息图解。',
        sections: [
          { h: '01 · 谱系梳理', p: '从《西游记》原著出发，横向比对戏曲、动画、影视与游戏中的孙悟空形象，归纳出血缘、法宝、称号与性格几条核心线索。' },
          { h: '02 · 数据可视化', p: '把分散的形象资料整理成结构化数据，再用信息图形语言表达时间脉络、媒介分布与形象差异，让研究过程本身成为视觉的一部分。' },
          { h: '03 · 版式与呈现', p: '以长图形式组织信息层级，控制阅读节奏：从总览到分表，从数据到图像，层层递进。最终形成一张兼具学术性与观赏性的作品。' }
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
      title: '醒图拟人 IP · 醒小图',
      category: 'IP 设计',
      year: '2026',
      desc: '为「醒图」创作的拟人化品牌 IP——醒小图。围绕角色的性格设定、视觉规范与多场景延展，完成从概念草图到系列造型的完整设计，让工具品牌拥有可被记住的人格温度。',
      image: 'assets/xingtu-2.jpg',
      link: '',
      tags: ['IP 形象', '角色设计', '品牌视觉', '系列延展'],
      detail: {
        lead: '一个修图工具如果变成人，会是什么样子？「醒小图」把醒图的品牌气质转译成一个有性格、有表情、能适应多种场景的角色。',
        sections: [
          { h: '01 · 角色设定', p: '从品牌调性出发，确立醒小图的性格、色彩与造型语言，建立角色档案与视觉规范，让形象有一致的气质基础。' },
          { h: '02 · 形象延展', p: '围绕同一角色，延伸出医生、咖啡师、宇航员、消防员、赛车手等多套职业造型，检验 IP 在不同语境下的适应力与辨识度。' },
          { h: '03 · 视觉落地', p: '完成表情、动作与场景海报的系列化设计，形成可复用的角色素材库，为后续的运营与传播提供统一的视觉资产。' }
        ],
        images: [
          { src: 'assets/xingtu-0.jpg', cap: 'IP 档案 · 角色设定与品牌规范' },
          { src: 'assets/xingtu-1.jpg', cap: '角色设计草图与探索' },
          { src: 'assets/xingtu-2.jpg', cap: '八款职业造型系列' },
          { src: 'assets/xingtu-3.jpg', cap: '造型延展与场景应用' }
        ],
        note: '从概念设定到系列造型，完整呈现一个品牌 IP 的诞生过程。'
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
  intro: '关于我（正文）',
  focus: '专注方向',
  skills: '技能工具',
  education: '教育背景',
  worksIntro: '作品区说明',
  contactText: '联系区说明',
  footerNote: '页脚文字',
  email: '联系邮箱'
};

let data = loadData();
let activeFilter = '全部';

/* ---------- 数据读写 ---------- */
function loadData() {
  let loaded;
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
    if (!localStorage.getItem(LINK_MIGRATION_KEY)) {
      loaded.projects.forEach(p => {
        if (p.title && p.title.includes('非遗工艺小镇') && !(p.link || '').trim()) {
          p.link = '../index2.html';
        }
      });
      localStorage.setItem(LINK_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移链接数据失败', e); }

  try {
    if (!localStorage.getItem(NAME_MIGRATION_KEY)) {
      if (loaded.profile.name === '易千惠') loaded.profile.name = '泡芙';
      localStorage.setItem(NAME_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移名称数据失败', e); }

  try {
    if (!localStorage.getItem(RESUME_MIGRATION_KEY)) {
      const resumeFields = ['eyebrow', 'location', 'intro', 'focus', 'skills', 'education', 'worksIntro', 'contactText', 'email'];
      resumeFields.forEach(k => { loaded.profile[k] = DEFAULT_DATA.profile[k]; });
      ['p7', 'p8'].forEach(id => {
        const np = DEFAULT_DATA.projects.find(p => p.id === id);
        if (np && !loaded.projects.some(p => p.id === id)) loaded.projects.push(clone(np));
      });
      localStorage.setItem(RESUME_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移简历数据失败', e); }

  try {
    if (!localStorage.getItem(IMAGE_MIGRATION_KEY)) {
      loaded.projects.forEach(p => {
        const fresh = DEFAULT_DATA.projects.find(d => d.id === p.id);
        if (!fresh) return;
        if (!p.image) p.image = fresh.image;
        p.desc = fresh.desc;
        p.tags = clone(fresh.tags);
      });
      localStorage.setItem(IMAGE_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移作品图片与内容失败', e); }

  try {
    if (!localStorage.getItem(THUMB_MIGRATION_KEY)) {
      loaded.projects.forEach(p => {
        const fresh = DEFAULT_DATA.projects.find(d => d.id === p.id);
        if (fresh) p.image = fresh.image;
      });
      localStorage.setItem(THUMB_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移作品缩略图失败', e); }

  try {
    if (!localStorage.getItem(GITHUB_LINK_MIGRATION_KEY)) {
      loaded.projects.forEach(p => {
        if (p.link === '../index2.html') p.link = 'index2.html';
      });
      localStorage.setItem(GITHUB_LINK_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移项目链接失败', e); }

  try {
    if (!localStorage.getItem(NEW_PROJECTS_MIGRATION_KEY)) {
      DEFAULT_DATA.projects.forEach(np => {
        if (!loaded.projects.some(p => p.id === np.id)) loaded.projects.push(clone(np));
      });
      localStorage.setItem(NEW_PROJECTS_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移新增作品失败', e); }

  try {
    if (!localStorage.getItem(DETAIL_MIGRATION_KEY)) {
      DEFAULT_DATA.projects.forEach(fresh => {
        let old = loaded.projects.find(p => p.id === fresh.id);
        if (!old) { loaded.projects.push(clone(fresh)); return; }
        if (fresh.detail) old.detail = clone(fresh.detail);
        if (['p1', 'p2', 'p13'].indexOf(fresh.id) !== -1) old.image = fresh.image;
        old.title = fresh.title;
        old.desc = fresh.desc;
        old.category = fresh.category;
        old.year = fresh.year;
        old.tags = clone(fresh.tags);
      });
      localStorage.setItem(DETAIL_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移项目详情失败', e); }

  try {
    if (!localStorage.getItem(SERIES_MIGRATION_KEY)) {
      DEFAULT_DATA.projects.forEach(fresh => {
        const old = loaded.projects.find(p => p.id === fresh.id);
        if (!old) return;
        if (fresh.detail) old.detail = clone(fresh.detail);
        else delete old.detail;
        if (['p9', 'p10'].indexOf(fresh.id) !== -1) old.image = fresh.image;
      });
      localStorage.setItem(SERIES_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移系列图失败', e); }

  try {
    if (!localStorage.getItem(POLISH_MIGRATION_KEY)) {
      DEFAULT_DATA.projects.forEach(fresh => {
        const old = loaded.projects.find(p => p.id === fresh.id);
        if (old && fresh.detail) old.detail = clone(fresh.detail);
      });
      localStorage.setItem(POLISH_MIGRATION_KEY, '1');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
  } catch (e) { console.warn('迁移项目文案失败', e); }

  return loaded;
}

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    toast('保存失败：浏览器存储空间可能已满');
    return false;
  }
}

/* ---------- 渲染 ---------- */
function renderProfile() {
  document.querySelectorAll('[data-profile-field]').forEach(el => {
    const key = el.dataset.profileField;
    if (key in data.profile && el.textContent !== data.profile[key]) {
      el.textContent = data.profile[key];
    }
  });
  const mail = document.getElementById('contactMail');
  const email = data.profile.email || 'hello@example.com';
  mail.href = 'mailto:' + email;
  mail.childNodes[0].textContent = email + ' ';

  const portrait = document.getElementById('aboutPortrait');
  if (data.profile.photo && data.profile.photo.trim()) {
    portrait.innerHTML = `<img src="${escapeAttr(data.profile.photo.trim())}" alt="个人照片">`;
    portrait.querySelector('img').addEventListener('error', () => {
      portrait.innerHTML = '<div class="portrait-placeholder">PHOTO</div>';
    });
  } else {
    portrait.innerHTML = '<div class="portrait-placeholder">PHOTO</div>';
  }
}

function renderFilters() {
  const cats = ['全部', ...new Set(data.projects.map(p => p.category || '其他'))];
  if (!cats.includes(activeFilter)) activeFilter = '全部';
  const box = document.getElementById('filters');
  box.innerHTML = cats.map(c =>
    `<button class="filter-btn ${c === activeFilter ? 'active' : ''}" data-cat="${escapeAttr(c)}">${escapeHtml(c)}</button>`
  ).join('');
  box.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => { activeFilter = btn.dataset.cat; renderFilters(); renderProjects(); });
  });
}

function placeholderMedia(project) {
  const ch = (project.title || '?').trim().charAt(0);
  return `<div class="media-placeholder">${escapeHtml(ch)}</div>`;
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  const list = (activeFilter === '全部'
    ? data.projects.slice()
    : data.projects.filter(p => (p.category || '其他') === activeFilter))
    .sort((a, b) => String(a.title || '').localeCompare(String(b.title || ''), 'zh-Hans-CN'));
  currentGallery = list;
  document.getElementById('emptyState').hidden = list.length > 0;
  const coverIds = new Set(['p3', 'p13']);
  grid.innerHTML = list.map((p, i) => {
    const media = p.image && p.image.trim()
      ? `<img src="${escapeAttr(p.image.trim())}" alt="${escapeAttr(p.title)}" loading="lazy" decoding="async" draggable="false" data-fallback="${escapeAttr((p.title || '?').trim().charAt(0))}">`
      : `<div class="work-placeholder">${escapeHtml((p.title || '?').trim().charAt(0))}</div>`;
    const tags = (p.tags || []).filter(Boolean).map(t => `<span class="work-tag">${escapeHtml(t)}</span>`).join('');
    let action;
    if (p.link && p.link.trim()) {
      action = `<a class="work-open" href="${escapeAttr(p.link.trim())}" target="_blank" rel="noopener noreferrer" data-stoplb>查看项目 ↗</a>`;
    } else {
      const label = p.detail ? '查看项目详情 ↗' : '查看高清图 ↗';
      action = `<button class="work-open" type="button" data-action="${p.detail ? 'detail' : 'image'}" data-lb="${i}">${label}</button>`;
    }
    const inner = `
      <div class="work-media${coverIds.has(p.id) ? ' cover-only' : ''}">${media}</div>
      <div class="work-body">
        <h3 class="work-title">${escapeHtml(p.title || '未命名作品')}</h3>
        <span class="work-cat">${escapeHtml(p.category || '其他')} · ${escapeHtml(p.year || '')}</span>
        <p class="work-desc">${escapeHtml(p.desc || '')}</p>
        ${tags ? `<div class="work-tags">${tags}</div>` : ''}
        ${action}
      </div>`;
    return `<article class="work-item" role="button" tabindex="0" aria-label="查看 ${escapeAttr(p.title || '作品')}">${inner}</article>`;
  }).join('');
  grid.querySelectorAll('.work-media img').forEach(img => {
    img.addEventListener('error', () => {
      img.parentElement.innerHTML = `<div class="work-placeholder">${escapeHtml(img.dataset.fallback || '?')}</div>`;
    });
  });
  grid.querySelectorAll('.work-item').forEach(card => {
    const project = list.find(p => p.title === card.querySelector('.work-title').textContent);
    function activate(e) {
      if (e && e.target.closest('[data-stoplb]')) return;
      if (!project) return;
      if (project.detail) openDetail(project);
      else openLightbox(list.indexOf(project));
    }
    card.addEventListener('click', activate);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(e); }
    });
  });
  observeReveals();
}

/* ---------- 作品高清图灯箱 ---------- */
let currentGallery = [];
let lbIndex = 0;
const lb = document.getElementById('lightbox');

function renderLightbox() {
  const p = currentGallery[lbIndex];
  if (!p || !lb) return;
  const img = document.getElementById('lbImg');
  const src = p.image && p.image.trim() ? p.image.trim() : '';
  img.onerror = () => { img.style.visibility = 'hidden'; };
  if (src) { img.src = src; img.alt = p.title || ''; img.style.visibility = 'visible'; }
  else { img.removeAttribute('src'); img.alt = ''; img.style.visibility = 'hidden'; }
  img.onload = () => {
    const w = img.naturalWidth, h = img.naturalHeight;
    document.getElementById('lbCount').textContent = `${lbIndex + 1} / ${currentGallery.length} · 原图 ${w}×${h}`;
  };
  document.getElementById('lbCat').textContent = `${p.category || '其他'} · ${p.year || ''}`;
  document.getElementById('lbTitle').textContent = p.title || '未命名作品';
  document.getElementById('lbCount').textContent = `${lbIndex + 1} / ${currentGallery.length}`;
  if (src && img.complete && img.naturalWidth) {
    document.getElementById('lbCount').textContent = `${lbIndex + 1} / ${currentGallery.length} · 原图 ${img.naturalWidth}×${img.naturalHeight}`;
  }
  const many = currentGallery.length > 1;
  document.getElementById('lbPrev').hidden = !many;
  document.getElementById('lbNext').hidden = !many;
}
function openLightbox(i) {
  if (!lb) return;
  lbIndex = i;
  renderLightbox();
  lb.hidden = false;
  document.body.classList.add('pop-open');
}
function closeLightbox() {
  if (!lb || lb.hidden) return;
  lb.hidden = true;
  const card = document.getElementById('popCard');
  const detail = document.getElementById('detailCard');
  if ((!card || card.hidden) && (!detail || detail.hidden)) document.body.classList.remove('pop-open');
}
function stepLightbox(d) {
  if (!currentGallery.length) return;
  lbIndex = (lbIndex + d + currentGallery.length) % currentGallery.length;
  renderLightbox();
}
if (lb) {
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); stepLightbox(-1); });
  document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); stepLightbox(1); });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-figure')) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

/* ---------- 项目详情弹窗 ---------- */
const detailCard = document.getElementById('detailCard');
const detailOverlay = document.getElementById('detailOverlay');
const detailScroll = document.getElementById('detailScroll');

function openDetail(p) {
  if (!detailCard || !p || !p.detail) return;
  const d = p.detail;
  const sections = (d.sections || []).map(s => `
    <div class="detail-sec">
      <h4>${escapeHtml(s.h || '')}</h4>
      <p>${escapeHtml(s.p || '')}</p>
    </div>`).join('');
  const images = (d.images || []).map((im, i) => `
    <figure class="detail-figure">
      <img src="${escapeAttr(im.src)}" alt="${escapeAttr(im.cap || p.title)}" loading="lazy" decoding="async" data-detail-img="${i}">
      ${im.cap ? `<figcaption>${escapeHtml(im.cap)}</figcaption>` : ''}
    </figure>`).join('');
  detailScroll.innerHTML = `
    <header class="detail-head">
      <span class="detail-kicker">${escapeHtml(p.category || '项目')} · ${escapeHtml(p.year || '')}</span>
      <h2>${escapeHtml(p.title || '')}</h2>
      <p class="detail-lead">${escapeHtml(d.lead || p.desc || '')}</p>
    </header>
    <div class="detail-sections">${sections}</div>
    <div class="detail-gallery">${images}</div>
    ${d.note ? `<div class="detail-note">${escapeHtml(d.note)}</div>` : ''}`;
  detailScroll.querySelectorAll('[data-detail-img]').forEach(img => {
    img.addEventListener('click', () => {
      const imgs = (d.images || []).map(x => x.src);
      const gallery = imgs.map((src, i) => ({ image: src, title: (d.images[i].cap || p.title), category: '项目详情' }));
      currentGallery = gallery;
      openLightbox(Number(img.dataset.detailImg));
    });
  });
  detailScroll.scrollTop = 0;
  detailOverlay.hidden = false;
  detailCard.hidden = false;
  document.body.classList.add('pop-open');
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
    if (lb.hidden && document.getElementById('popCard').hidden) document.body.classList.remove('pop-open');
  }, 420);
}
if (detailCard) {
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  detailOverlay.addEventListener('click', closeDetail);
}

function renderSkills() {
  const box = document.getElementById('skillCloud');
  if (!box) return;
  const raw = data.profile.skills || '';
  const items = raw.split(/[·、,，\/|]/).map(s => s.trim()).filter(Boolean);
  const rots = [-4, 3, -2, 5, -3, 2, -5, 4];
  box.innerHTML = items.map((s, i) =>
    `<span class="skill-item" style="--r:${rots[i % rots.length]}deg">${escapeHtml(s)}</span>`
  ).join('');
}

function render() { renderProfile(); renderSkills(); renderFilters(); renderProjects(); }

/* ---------- 编辑面板 ---------- */
const panel = document.getElementById('editPanel');
const overlay = document.getElementById('overlay');

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
}
function closePanel() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  overlay.hidden = true;
}

function renderProfileFields() {
  const box = document.getElementById('profileFields');
  const textKeys = Object.keys(PROFILE_LABELS).filter(k => k !== 'email');
  box.innerHTML = `
    ${textKeys.map(k => `
      <div class="field-group">
        <label>${PROFILE_LABELS[k]}</label>
        ${k === 'intro' || k === 'contactText'
          ? `<textarea data-key="${k}" rows="3">${escapeHtml(data.profile[k] || '')}</textarea>`
          : `<input type="text" data-key="${k}" value="${escapeAttr(data.profile[k] || '')}">`}
      </div>`).join('')}
    <div class="field-group">
      <label>${PROFILE_LABELS.email}</label>
      <input type="text" id="profileEmail" value="${escapeAttr(data.profile.email || '')}">
    </div>`;
}

document.getElementById('saveProfile').addEventListener('click', () => {
  document.querySelectorAll('#profileFields [data-key]').forEach(input => {
    data.profile[input.dataset.key] = input.value;
  });
  data.profile.email = document.getElementById('profileEmail').value;
  data.profile.photo = document.getElementById('profilePhoto').value;
  if (saveData()) { render(); toast('资料已保存'); }
});

function renderEditorList() {
  const box = document.getElementById('projectEditorList');
  if (!data.projects.length) { box.innerHTML = '<p class="hint">暂无作品，点击上方按钮添加。</p>'; return; }
  box.innerHTML = data.projects.map((p, i) => `
    <div class="editor-item">
      <div>
        <div class="e-title">${escapeHtml(p.title || '未命名作品')}</div>
        <div class="e-meta">${escapeHtml(p.category || '其他')} · ${escapeHtml(p.year || '')}</div>
      </div>
      <div class="e-actions">
        <div class="updown">
          <button data-act="up" data-i="${i}" title="上移">▲</button>
          <button data-act="down" data-i="${i}" title="下移">▼</button>
        </div>
        <button class="mini-btn" data-act="edit" data-i="${i}">编辑</button>
        <button class="mini-btn del" data-act="del" data-i="${i}">删除</button>
      </div>
    </div>`).join('');
  box.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.i);
      const act = btn.dataset.act;
      if (act === 'edit') openModal(i);
      if (act === 'del') {
        if (confirm(`确定删除「${data.projects[i].title}」吗？`)) {
          data.projects.splice(i, 1); saveData(); render(); renderEditorList(); toast('已删除');
        }
      }
      if (act === 'up' && i > 0) { [data.projects[i - 1], data.projects[i]] = [data.projects[i], data.projects[i - 1]]; saveData(); render(); renderEditorList(); }
      if (act === 'down' && i < data.projects.length - 1) { [data.projects[i + 1], data.projects[i]] = [data.projects[i], data.projects[i + 1]]; saveData(); render(); renderEditorList(); }
    });
  });
}

/* ---------- 作品弹窗 ---------- */
const modal = document.getElementById('projectModal');
let editingIndex = -1;

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
}
function closeModal() { modal.hidden = true; }

document.getElementById('addProject').addEventListener('click', () => openModal());

document.getElementById('modalSave').addEventListener('click', () => {
  const title = document.getElementById('f-title').value.trim();
  if (!title) { alert('请填写作品标题'); return; }
  const project = {
    id: editingIndex >= 0 ? data.projects[editingIndex].id : 'p' + Date.now(),
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

/* ---------- 备份 / 恢复 ---------- */
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
  if (confirm('确定恢复默认示例数据吗？你当前的修改会被覆盖（建议先导出备份）。')) {
    data = clone(DEFAULT_DATA);
    saveData(); render(); openPanel(); renderProfileFields(); renderEditorList();
    toast('已恢复默认数据');
  }
});

/* ---------- 封面互动：我的世界风格方块猫 ---------- */
(function initVoxelCat() {
  const stage = document.getElementById('voxelStage');
  const cat = document.getElementById('cat3d');
  const bubble = document.getElementById('catBubble');
  const sparkles = document.getElementById('sparkles');
  if (!stage || !cat) return;

  const SKINS = {
    red:     { fur:'#cf8243', furTop:'#dc9457', cream:'#f1e2c2', pink:'#d98a96', eye:'#7fbf43', pupil:'#211d17', stripe:'rgba(122,66,24,.42)' },
    calico:  { fur:'#e6e0d5', furTop:'#fbf8f2', cream:'#faf7f0', pink:'#d98a96', eye:'#e0a83c', pupil:'#211d17', stripe:'rgba(70,55,45,.5)' },
    siamese: { fur:'#c3b7a4', furTop:'#e6dccd', cream:'#f0e9dd', pink:'#c98a94', eye:'#3d8fd4', pupil:'#141b26', stripe:'rgba(90,75,60,.32)' },
    ragdoll: { fur:'#ded8ce', furTop:'#f6f2ec', cream:'#fffdf8', pink:'#d194a0', eye:'#4a9ad8', pupil:'#1a2230', stripe:'rgba(120,105,90,.25)' },
    jellie:  { fur:'#8e8b87', furTop:'#a9a6a1', cream:'#dedbd5', pink:'#c07f8d', eye:'#9bb87a', pupil:'#1e241c', stripe:'rgba(40,40,40,.3)' },
    white:   { fur:'#f0efec', furTop:'#ffffff', cream:'#ffffff', pink:'#d98a96', eye:'#7ec8d8', pupil:'#211d17', stripe:'rgba(180,180,180,.2)' }
  };
  let skin = SKINS.red;

  // 每个方块：中心坐标 x/y/z + 长宽高（Y 向下，Z 朝向观众）
  const parts = [
    { x: 0,   y: 26,   z: -6,  w: 98,  h: 76, d: 102, role:'fur',    tex:'stripe' },
    { x: 0,   y: 34,   z: 46,  w: 56,  h: 54, d: 8,   role:'cream' },
    { x: 0,   y: -54,  z: 16,  w: 102, h: 84, d: 84,  role:'furTop', tex:'topStripe' },
    { x: 0,   y: -32,  z: 58,  w: 54,  h: 26, d: 8,   role:'cream' },
    { x: -32, y: -106, z: 16,  w: 28,  h: 38, d: 28,  role:'fur' },
    { x: 32,  y: -106, z: 16,  w: 28,  h: 38, d: 28,  role:'fur' },
    { x: -32, y: -106, z: 32,  w: 14,  h: 22, d: 3,   role:'pink' },
    { x: 32,  y: -106, z: 32,  w: 14,  h: 22, d: 3,   role:'pink' },
    { x: -20, y: -60,  z: 59,  w: 16,  h: 22, d: 4,   role:'eye',   cls:'voxel-eye' },
    { x: 20,  y: -60,  z: 59,  w: 16,  h: 22, d: 4,   role:'eye',   cls:'voxel-eye' },
    { x: -20, y: -60,  z: 62,  w: 5,   h: 16, d: 2,   role:'pupil', cls:'voxel-pupil' },
    { x: 20,  y: -60,  z: 62,  w: 5,   h: 16, d: 2,   role:'pupil', cls:'voxel-pupil' },
    { x: 0,   y: -40,  z: 64,  w: 12,  h: 8,  d: 4,   role:'pink' },
    { x: -30, y: 72,   z: 32,  w: 24,  h: 38, d: 24,  role:'fur' },
    { x: 30,  y: 72,   z: 32,  w: 24,  h: 38, d: 24,  role:'fur' },
    { x: -30, y: 72,   z: -42, w: 24,  h: 38, d: 24,  role:'fur' },
    { x: 30,  y: 72,   z: -42, w: 24,  h: 38, d: 24,  role:'fur' },
    { x: -30, y: 89,   z: 36,  w: 25,  h: 8,  d: 28,  role:'cream' },
    { x: 30,  y: 89,   z: 36,  w: 25,  h: 8,  d: 28,  role:'cream' },
    { x: -30, y: 89,   z: -40, w: 25,  h: 8,  d: 28,  role:'cream' },
    { x: 30,  y: 89,   z: -40, w: 25,  h: 8,  d: 28,  role:'cream' },
    { x: 0,   y: 32,   z: -68, w: 22,  h: 22, d: 28,  role:'fur' },
    { x: 12,  y: 8,    z: -80, w: 22,  h: 30, d: 22,  role:'furTop' },
    { x: 20,  y: -18,  z: -80, w: 22,  h: 32, d: 22,  role:'fur' },
    { x: 0,   y: 104,  z: -6,  w: 252, h: 20, d: 156, c:'#a9784f', cls:'perch-3d' }
  ];

  const faces = [
    ['f-front',  'var(--w)', 'var(--h)'],
    ['f-back',   'var(--w)', 'var(--h)'],
    ['f-right',  'var(--d)', 'var(--h)'],
    ['f-left',   'var(--d)', 'var(--h)'],
    ['f-top',    'var(--w)', 'var(--d)'],
    ['f-bottom', 'var(--w)', 'var(--d)']
  ];

  const pupils = [];
  const roleBoxes = [];
  const frag = document.createDocumentFragment();
  parts.forEach(p => {
    const box = document.createElement('div');
    box.className = 'voxel' + (p.cls ? ' ' + p.cls : '');
    box.style.cssText = `--w:${p.w}px;--h:${p.h}px;--d:${p.d}px;--c:${p.role ? skin[p.role] : p.c};transform:translate3d(${p.x}px,${p.y}px,${p.z}px)`;
    faces.forEach(([cls, w, h]) => {
      const face = document.createElement('div');
      face.className = 'face ' + cls;
      face.style.width = w;
      face.style.height = h;
      face.style.marginLeft = 'calc(' + w + ' / -2)';
      face.style.marginTop = 'calc(' + h + ' / -2)';
      const striped = (p.tex === 'stripe' && cls !== 'f-bottom') ||
                      (p.tex === 'topStripe' && cls === 'f-top');
      if (striped) face.classList.add('tex-stripe');
      box.appendChild(face);
    });
    if (p.role) roleBoxes.push({ el: box, role: p.role });
    if (p.cls === 'voxel-pupil') pupils.push({ el: box, x: p.x, y: p.y, z: p.z });
    frag.appendChild(box);
  });
  cat.appendChild(frag);

  function applySkin(name) {
    const s = SKINS[name];
    if (!s) return;
    skin = s;
    roleBoxes.forEach(item => item.el.style.setProperty('--c', s[item.role]));
    cat.style.setProperty('--stripe', s.stripe);
    document.querySelectorAll('.atlas-item').forEach(b => {
      b.classList.toggle('active', b.dataset.skin === name);
    });
  }
  document.querySelectorAll('.atlas-item').forEach(b => {
    b.addEventListener('click', () => applySkin(b.dataset.skin));
  });

  const small = window.innerWidth < 640;
  let rotY = -28, rotX = -12;
  let idleBase = -28, idlePhase = 0;
  let scale = small ? 0.8 : 1, targetScale = scale;
  let bob = 0, bobVel = 0;
  let dragging = false, moved = false, sx = 0, sy = 0, by = 0, bx = 0;
  let lastInteract = Date.now();
  let bubbleTimer;

  function apply() {
    cat.style.transform = 'translateY(' + bob.toFixed(2) + 'px) rotateX(' + rotX.toFixed(2) +
      'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')';
  }
  function mark() { lastInteract = Date.now(); idleBase = rotY; }

  const laser = document.getElementById('laserDot');
  let laserX = 200, laserY = 180, targetX = 200, targetY = 180, nextLaser = 0;

  function moveLaser(now) {
    if (now > nextLaser) {
      targetX = 105 + Math.random() * 190;
      targetY = 85 + Math.random() * 180;
      nextLaser = now + 1400 + Math.random() * 1600;
    }
    laserX += (targetX - laserX) * 0.04;
    laserY += (targetY - laserY) * 0.04;
    if (laser) {
      laser.style.left = laserX.toFixed(1) + 'px';
      laser.style.top = laserY.toFixed(1) + 'px';
    }
    const dx = (laserX - 200) / 200 * 3.2;
    const dy = (laserY - 200) / 200 * 2.4;
    pupils.forEach(p => {
      p.el.style.transform = 'translate3d(' + (p.x + dx).toFixed(2) + 'px,' +
        (p.y + dy).toFixed(2) + 'px,' + p.z + 'px)';
    });
  }

  function tick(now) {
    if (!dragging && Date.now() - lastInteract > 2200) {
      idlePhase += 0.02;
      rotY = idleBase + Math.sin(idlePhase) * 5;
    }
    bobVel += -bob * 0.16;
    bobVel *= 0.88;
    bob += bobVel;
    scale += (targetScale - scale) * 0.14;
    apply();
    moveLaser(now || Date.now());
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function emitSparkles(n) {
    if (!sparkles) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = ['✨', '🐾', '💛', '♥'][Math.floor(Math.random() * 4)];
      s.style.left = (30 + Math.random() * 50) + '%';
      s.style.top = (30 + Math.random() * 40) + '%';
      s.style.animationDelay = (Math.random() * .25) + 's';
      sparkles.appendChild(s);
      setTimeout(() => s.remove(), 1600);
    }
  }

  function petCat(e) {
    bobVel = -13;
    if (bubble) {
      if (e && typeof e.clientX === 'number') {
        const r = stage.getBoundingClientRect();
        bubble.style.left = (e.clientX - r.left).toFixed(0) + 'px';
        bubble.style.top = (e.clientY - r.top - 12).toFixed(0) + 'px';
      }
      bubble.textContent = ['喵呜~ ♥', '再来一下 🐾', '呼噜噜 ✨'][Math.floor(Math.random() * 3)];
      bubble.classList.add('show');
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 1600);
    }
    emitSparkles(8);
  }

  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('.voxel-btn')) return;
    dragging = true; moved = false;
    sx = e.clientX; sy = e.clientY;
    by = rotY; bx = rotX;
    mark();
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  });
  stage.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
    rotY = by + dx * 0.55;
    rotX = Math.max(-80, Math.min(80, bx - dy * 0.45));
    mark();
  });
  stage.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
    if (!moved) petCat(e);
    mark();
  });
  stage.addEventListener('pointercancel', () => { dragging = false; });
  stage.addEventListener('dblclick', () => {
    rotY = -28; rotX = -12;
    targetScale = window.innerWidth < 640 ? 0.8 : 1;
    mark();
  });

  function zoom(delta) {
    targetScale = Math.max(0.5, Math.min(2.2, targetScale + delta));
    mark();
  }
  stage.addEventListener('wheel', e => {
    e.preventDefault();
    zoom(e.deltaY < 0 ? 0.12 : -0.12);
  }, { passive: false });
  const btnIn = document.getElementById('catZoomIn');
  const btnOut = document.getElementById('catZoomOut');
  const btnReset = document.getElementById('catReset');
  if (btnIn) btnIn.addEventListener('click', () => zoom(0.22));
  if (btnOut) btnOut.addEventListener('click', () => zoom(-0.22));
  if (btnReset) btnReset.addEventListener('click', () => {
    rotY = -28; rotX = -12;
    targetScale = window.innerWidth < 640 ? 0.8 : 1;
    mark();
  });

  cat.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); petCat(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); rotY -= 12; mark(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); rotY += 12; mark(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); rotX = Math.max(-80, rotX - 10); mark(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); rotX = Math.min(80, rotX + 10); mark(); }
  });

  if (bubble) bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 3200);
})();

/* ---------- 昼夜切换 + 星空 ---------- */
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  const starsBox = document.getElementById('stars');
  const KEY = 'my_portfolio_theme_v1';
  let night = false;
  try { night = localStorage.getItem(KEY) === 'night'; } catch (_) {}

  if (starsBox) {
    let html = '';
    for (let i = 0; i < 90; i++) {
      const s = (Math.random() * 2 + 1).toFixed(1);
      html += '<i class="star" style="left:' + (Math.random() * 100).toFixed(2) +
        '%;top:' + (Math.random() * 100).toFixed(2) +
        '%;width:' + s + 'px;height:' + s + 'px;animation-delay:' +
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
    try { localStorage.setItem(KEY, night ? 'night' : 'day'); } catch (_) {}
  }
  if (btn) btn.addEventListener('click', () => { night = !night; apply(); });
  apply();
})();

/* ---------- 背景生态层 ---------- */
(function initEcoLayer() {
  const eco = document.getElementById('ecoLayer');
  if (!eco) return;
  const icons = ['🐾', '✧', '🐟', '〰', '♡', '·'];
  let html = '';
  for (let i = 0; i < 20; i++) {
    html += '<span class="eco-item" style="left:' + (Math.random() * 100).toFixed(2) +
      '%;--sz:' + Math.round(Math.random() * 12 + 8) +
      'px;--op:' + (Math.random() * .12 + .05).toFixed(2) +
      ';--dur:' + Math.round(Math.random() * 18 + 16) +
      's;--delay:' + (-Math.random() * 30).toFixed(1) +
      's;--drift:' + Math.round(Math.random() * 120 - 60) + 'px">' +
      icons[i % icons.length] + '</span>';
  }
  eco.innerHTML = html;
  document.addEventListener('pointermove', e => {
    const x = (e.clientX / window.innerWidth - .5) * 16;
    const y = (e.clientY / window.innerHeight - .5) * 12;
    eco.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
  }, { passive: true });
})();

/* ---------- 爪印导航路标 ---------- */
(function initPawNav() {
  const steps = Array.from(document.querySelectorAll('.paw-step'));
  if (!steps.length) return;
  function update() {
    const line = window.scrollY + window.innerHeight * 0.35;
    let current = steps[0].dataset.target;
    steps.forEach(s => {
      const el = document.getElementById(s.dataset.target);
      if (el && el.getBoundingClientRect().top + window.scrollY <= line) {
        current = s.dataset.target;
      }
    });
    steps.forEach(s => s.classList.toggle('active', s.dataset.target === current));
    document.querySelectorAll('.mnd-link').forEach(l => l.classList.toggle('active', l.dataset.target === current));
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ---------- 竖屏导航抽屉 ---------- */
(function initMobileNav() {
  const btn = document.getElementById('mobileNavBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const mask = document.getElementById('mobileNavMask');
  const close = document.getElementById('mobileNavClose');
  if (!btn || !drawer || !mask) return;

  function open() {
    requestAnimationFrame(() => mask.classList.add('show'));
    drawer.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
  }
  function shut() {
    mask.classList.remove('show');
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-nav-open');
  }
  btn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) shut(); else open();
  });
  if (close) close.addEventListener('click', shut);
  mask.addEventListener('click', shut);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) shut();
  });
  drawer.querySelectorAll('.mnd-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      shut();
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 260);
    });
  });
})();

/* ---------- 滚动进度 / 视差 / 入场 ---------- */
(function initScrollEffects() {
  const progress = document.getElementById('scrollProgress');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = Math.round(y / max * 100) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  const levels = document.querySelectorAll('.level');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: .18 });
    levels.forEach((el, i) => { el.style.transitionDelay = (i % 2 ? .08 : 0) + 's'; io.observe(el); });
  } else {
    levels.forEach(el => el.classList.add('in-view'));
  }
})();

/* ---------- 居中卡片弹窗 ---------- */
const popCard = document.getElementById('popCard');
const popOverlay = document.getElementById('popOverlay');
const VIEW_INFO = {
  about:   { kicker: 'YARN BALL · 毛线球', title: '关于我' },
  works:   { kicker: 'DRIED FISH · 小鱼干', title: '作品' },
  skills:  { kicker: 'FEATHER WAND · 逗猫棒', title: '技能' },
  cv:      { kicker: 'CATNIP MOUSE · 猫薄荷老鼠', title: '履历' },
  contact: { kicker: 'BOX · 纸箱', title: '联系' }
};
function openView(name) {
  const info = VIEW_INFO[name];
  if (!info) return;
  document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== 'view-' + name; });
  document.getElementById('popKicker').textContent = info.kicker;
  document.getElementById('popTitle').textContent = info.title;
  popOverlay.hidden = false;
  popCard.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    popOverlay.classList.add('show');
    popCard.classList.add('open');
  }));
}
function closeView() {
  popCard.classList.remove('open');
  popOverlay.classList.remove('show');
  setTimeout(() => { popCard.hidden = true; popOverlay.hidden = true; }, 420);
}
document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', () => {
    if (el.dataset.view === 'contact') {
      const box = el.querySelector('.cardboard-box');
      if (box) {
        box.classList.add('peek');
        setTimeout(() => box.classList.remove('peek'), 1900);
      }
      setTimeout(() => openView('contact'), 950);
    } else {
      openView(el.dataset.view);
    }
  });
});
document.getElementById('popClose').addEventListener('click', closeView);
popOverlay.addEventListener('click', closeView);

/* ---------- 创作者 / 访客区分 ----------
   只想让你自己能编辑：把下面的密码改成只有你知道的一串，
   访客点「创作者入口」输不对密码就看不到编辑功能。
   注意：这是纯静态网站，没有服务器，密码只是前端拦截，
   真正防不住懂代码的人；但它能挡住绝大多数普通访客。 */
const CREATOR_PASSWORD = 'paofu2026';
const CREATOR_KEY = 'my_portfolio_creator_v1';

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

  function openCreatorModal() {
    modalEl.hidden = false;
    if (pwd) { pwd.value = ''; setTimeout(() => pwd.focus(), 50); }
  }
  function closeCreatorModal() { modalEl.hidden = true; }

  entry.addEventListener('click', () => {
    if (unlocked) {
      apply(false);
      closePanel();
      toast('已退出创作模式');
    } else {
      openCreatorModal();
    }
  });

  document.getElementById('creatorClose').addEventListener('click', closeCreatorModal);
  document.getElementById('creatorCancel').addEventListener('click', closeCreatorModal);
  modalEl.addEventListener('click', e => { if (e.target === modalEl) closeCreatorModal(); });

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
  document.getElementById('creatorSubmit').addEventListener('click', verify);
  pwd.addEventListener('keydown', e => { if (e.key === 'Enter') verify(); });
})();

/* ---------- 事件绑定 ---------- */
document.getElementById('navEdit').addEventListener('click', openPanel);
document.getElementById('editClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lb && !lb.hidden) return;
  closeDetail(); closeView(); closePanel(); closeModal();
});
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});



/* ---------- 工具函数 ---------- */
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(str) { return escapeHtml(str); }

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- 滚动入场动画 ---------- */
let observer;
function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

/* ---------- 首页精选作品条 ---------- */
function renderFeatured() {
  const track = document.getElementById('featuredTrack');
  if (!track) return;
  // 全部作品都放进轨道才能左右滑动；卡片够大，一屏只看得到几张，更留白更高级
  const picks = data.projects;
  track.innerHTML = picks.map(p => {
    const media = p.image && p.image.trim()
      ? `<img src="${escapeAttr(p.image.trim())}" alt="${escapeAttr(p.title)}" loading="lazy" decoding="async">`
      : `<div class="work-placeholder">${escapeHtml((p.title || '?').trim().charAt(0))}</div>`;
    return `<div class="featured-card" data-title="${escapeAttr(p.title)}" role="button" tabindex="0">
      ${media}<span class="fc-mask"></span>
      <span class="fc-label">${escapeHtml(p.title)}<small>${escapeHtml(p.category || '其他')} · ${escapeHtml(p.year || '')}</small></span>
    </div>`;
  }).join('');
  track.querySelectorAll('.featured-card').forEach(card => {
    const open = () => {
      activeFilter = '全部';
      renderFilters();
      renderProjects();
      openView('works');
      const target = Array.from(document.querySelectorAll('#projectGrid .work-title'))
        .find(el => el.textContent === card.dataset.title);
      if (target) target.closest('.work-item').scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* ---------- 精选横条自动播放：逐帧匀速滚动，稳定可见 ---------- */
(function initFeaturedAutoplay() {
  const track = document.getElementById('featuredTrack');
  if (!track) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let paused = false;
  let pauseUntil = 0;
  let last = 0;
  const speed = 1.1;

  track.addEventListener('mouseenter', () => { paused = true; });
  track.addEventListener('mouseleave', () => { paused = false; pauseUntil = 0; });
  // 竖向滚轮转为横向滚动，鼠标按住拖动也能滑
  track.addEventListener('wheel', e => {
    pauseUntil = performance.now() + 2600;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  }, { passive: false });
  track.addEventListener('touchstart', () => { pauseUntil = performance.now() + 2600; }, { passive: true });

  let dragging = false, dragStartX = 0, dragStartLeft = 0, dragMoved = false;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch') return;
    paused = true;
    dragging = true; dragMoved = false;
    dragStartX = e.clientX; dragStartLeft = track.scrollLeft;
    pauseUntil = performance.now() + 2600;
  });
  window.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 4) dragMoved = true;
    track.scrollLeft = dragStartLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    pauseUntil = performance.now() + 1800;
  });
  track.addEventListener('click', e => { if (dragMoved) { e.stopPropagation(); e.preventDefault(); } }, true);
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, { threshold: 0 }).observe(track);
  }

  function tick(now) {
    const dt = last ? Math.min(3, (now - last) / 16.67) : 1;
    last = now;
    if (!paused && visible && now >= pauseUntil && !document.hidden) {
      const max = track.scrollWidth - track.clientWidth;
      if (max > 4) {
        let next = track.scrollLeft + speed * dt;
        if (next >= max) next = 0;
        track.scrollLeft = next;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ---------- 作品时间轴：滚轮转横向 + 拖拽浏览 ---------- */
(function initTimelineScroll() {
  const track = document.getElementById('projectGrid');
  if (!track) return;

  track.addEventListener('dragstart', e => { e.preventDefault(); });
  track.addEventListener('wheel', e => {
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 1) return;
    const atStart = track.scrollLeft <= 0 && delta < 0;
    const atEnd = track.scrollLeft >= max - 1 && delta > 0;
    if (atStart || atEnd) return;
    e.preventDefault();
    track.scrollLeft += delta;
  }, { passive: false });

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
  track.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); } }, true);

  const prev = document.getElementById('tlPrev');
  const next = document.getElementById('tlNext');
  function step(dir) {
    const card = track.querySelector('.work-item');
    const amount = card ? card.getBoundingClientRect().width + 24 : 300;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', () => step(-1));
  if (next) next.addEventListener('click', () => step(1));

  document.addEventListener('keydown', e => {
    const pop = document.getElementById('popCard');
    const lightbox = document.getElementById('lightbox');
    const detail = document.getElementById('detailCard');
    const tag = (e.target && e.target.tagName) || '';
    if (/INPUT|TEXTAREA|SELECT/.test(tag) || e.target.isContentEditable) return;
    if (!pop || pop.hidden || (lightbox && !lightbox.hidden) || (detail && !detail.hidden)) return;
    if (track.offsetParent === null) return;
    let dir = 0;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') dir = -1;
    else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') dir = 1;
    if (!dir) return;
    e.preventDefault();
    step(dir);
  });
})();

/* ---------- 喂猫计数 ---------- */
(function initFeed() {
  const btn = document.getElementById('catFeed');
  const counter = document.getElementById('feedCount');
  if (!btn || !counter) return;
  const KEY = 'my_portfolio_feed_count_v1';
  let count = 0;
  try { count = parseInt(localStorage.getItem(KEY), 10) || 0; } catch (_) {}
  counter.textContent = count;
  btn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    try { localStorage.setItem(KEY, String(count)); } catch (_) {}
    const box = document.getElementById('sparkles');
    if (box) {
      for (let i = 0; i < 3; i++) {
        const fish = document.createElement('span');
        fish.className = 'sparkle';
        fish.textContent = '🐟';
        fish.style.left = (35 + Math.random() * 30) + '%';
        fish.style.top = (40 + Math.random() * 20) + '%';
        box.appendChild(fish);
        setTimeout(() => fish.remove(), 1400);
      }
    }
  });
})();

/* ---------- 封面进入猫爬架 ---------- */
(function initGateway() {
  const btn = document.getElementById('heroGateway');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const tree = document.querySelector('.tree');
    if (tree) tree.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

/* ---------- 猫爬架两边的装饰猫：可旋转，无其他功能 ---------- */
(function initDecorCats() {
  const levels = Array.from(document.querySelectorAll('.level'));
  if (!levels.length) return;

  const SKINS = [
    { fur: '#cf8243', cream: '#f1e2c2', pink: '#d98a96', eye: '#7fbf43', stripe: 'rgba(122,66,24,.42)' },
    { fur: '#e6e0d5', cream: '#faf7f0', pink: '#d98a96', eye: '#e0a83c', stripe: 'rgba(70,55,45,.5)' },
    { fur: '#c3b7a4', cream: '#f0e9dd', pink: '#c98a94', eye: '#3d8fd4', stripe: 'rgba(90,75,60,.32)' },
    { fur: '#ded8ce', cream: '#fffdf8', pink: '#d194a0', eye: '#4a9ad8', stripe: 'rgba(120,105,90,.25)' },
    { fur: '#8e8b87', cream: '#dedbd5', pink: '#c07f8d', eye: '#9bb87a', stripe: 'rgba(40,40,40,.3)' }
  ];

  const parts = [
    { x: 0, y: 26, z: -6, w: 98, h: 76, d: 102, role: 'fur', tex: 'stripe' },
    { x: 0, y: 34, z: 46, w: 56, h: 54, d: 8, role: 'cream' },
    { x: 0, y: -54, z: 16, w: 102, h: 84, d: 84, role: 'fur', tex: 'stripe' },
    { x: -32, y: -106, z: 16, w: 28, h: 38, d: 28, role: 'fur' },
    { x: 32, y: -106, z: 16, w: 28, h: 38, d: 28, role: 'fur' },
    { x: -20, y: -60, z: 59, w: 16, h: 22, d: 4, role: 'eye' },
    { x: 20, y: -60, z: 59, w: 16, h: 22, d: 4, role: 'eye' },
    { x: 0, y: -40, z: 64, w: 12, h: 8, d: 4, role: 'pink' },
    { x: -30, y: 72, z: 32, w: 24, h: 38, d: 24, role: 'fur' },
    { x: 30, y: 72, z: 32, w: 24, h: 38, d: 24, role: 'fur' }
  ];
  const faces = [['f-front','var(--w)','var(--h)'],['f-back','var(--w)','var(--h)'],
    ['f-right','var(--d)','var(--h)'],['f-left','var(--d)','var(--h)'],
    ['f-top','var(--w)','var(--d)'],['f-bottom','var(--w)','var(--d)']];

  levels.forEach((level, i) => {
    const skin = SKINS[i % SKINS.length];
    const wrap = document.createElement('div');
    wrap.className = 'decor-cat';
    wrap.setAttribute('aria-hidden', 'true');
    const stage = document.createElement('div');
    stage.className = 'decor-stage';
    const cat = document.createElement('div');
    cat.className = 'decor-voxel';
    const frag = document.createDocumentFragment();
    parts.forEach(p => {
      const box = document.createElement('div');
      box.className = 'voxel';
      box.style.cssText = `--w:${p.w}px;--h:${p.h}px;--d:${p.d}px;--c:${skin[p.role]};transform:translate3d(${p.x * .5}px,${p.y * .5}px,${p.z * .5}px)`;
      faces.forEach(([cls, w, h]) => {
        const face = document.createElement('div');
        face.className = 'face ' + cls;
        face.style.width = w; face.style.height = h;
        face.style.marginLeft = 'calc(' + w + ' / -2)';
        face.style.marginTop = 'calc(' + h + ' / -2)';
        if (p.tex === 'stripe' && cls !== 'f-bottom') face.classList.add('tex-stripe');
        box.appendChild(face);
      });
      frag.appendChild(box);
    });
    cat.appendChild(frag);
    stage.appendChild(cat);
    wrap.appendChild(stage);
    level.appendChild(wrap);

    let rotY = -28, rotX = -10;
    let dragging = false, sx = 0, sy = 0, by = 0, bx = 0;
    function apply() {
      cat.style.transform = `rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale(.5)`;
    }
    apply();
    wrap.addEventListener('pointerdown', e => {
      dragging = true; sx = e.clientX; sy = e.clientY; by = rotY; bx = rotX;
      try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
      e.stopPropagation();
    });
    wrap.addEventListener('pointermove', e => {
      if (!dragging) return;
      rotY = by + (e.clientX - sx) * 0.5;
      rotX = Math.max(-60, Math.min(60, bx - (e.clientY - sy) * 0.4));
      apply();
    });
    const end = () => { dragging = false; };
    wrap.addEventListener('pointerup', end);
    wrap.addEventListener('pointercancel', end);
  });
})();

/* ---------- 留言板：通过 FormSubmit 发送到你邮箱，本地仅作即时回显 ---------- */
const GUESTBOOK_EMAIL = '3303076659@qq.com'; // ← 改成你想接收留言的邮箱
(function initGuestbook() {
  const form = document.getElementById('gbForm');
  const list = document.getElementById('gbList');
  const nameEl = document.getElementById('gbName');
  const textEl = document.getElementById('gbText');
  const counter = document.getElementById('gbCount');
  const submitBtn = form ? form.querySelector('.gb-submit') : null;
  if (!form || !list) return;
  const KEY = 'my_portfolio_guestbook_v1';
  let msgs = [];
  try { msgs = JSON.parse(localStorage.getItem(KEY)) || []; } catch (_) { msgs = []; }
  if (!Array.isArray(msgs)) msgs = [];

  function save() { try { localStorage.setItem(KEY, JSON.stringify(msgs)); } catch (_) {} }
  function render() {
    if (!msgs.length) { list.innerHTML = '<p class="gb-empty">还没有留言,来当第一个吧 🐾</p>'; return; }
    list.innerHTML = msgs.map((m, i) => `
      <div class="gb-item">
        <div class="gb-who">${escapeHtml(m.name || '匿名访客')} 🐾</div>
        <p class="gb-text">${escapeHtml(m.text || '')}</p>
        <time class="gb-time">${escapeHtml(m.time || '')}</time>
        <button class="gb-del" data-i="${i}" title="删除这条" aria-label="删除这条">✕</button>
      </div>`).join('');
    list.querySelectorAll('.gb-del').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('删除这条留言吗?')) { msgs.splice(Number(btn.dataset.i), 1); save(); render(); }
      });
    });
  }
  function updateCount() { if (counter) counter.textContent = `${(textEl.value || '').length} / 300`; }
  textEl.addEventListener('input', updateCount);
  updateCount();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = (textEl.value || '').trim();
    if (!text) { toast('先写点什么吧'); return; }
    const name = (nameEl.value || '').trim() || '匿名访客';
    const now = new Date();
    const time = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const subject = encodeURIComponent(`🐾 作品集新留言 · ${name}`);
    const body = encodeURIComponent(`留言人：${name}\n时间：${time}\n\n${text}\n\n—— 来自 CAT TREE PORTFOLIO 留言板`);
    const mailto = `mailto:${GUESTBOOK_EMAIL}?subject=${subject}&body=${body}`;

    msgs.unshift({ name, text, time });
    save(); render();
    textEl.value = ''; updateCount();
    toast('已打开邮件应用，点发送就能把留言寄给我 🐾');

    window.location.href = mailto;
  });
  render();
})();

/* ---------- 启动 ---------- */
render();
renderFeatured();

/* ---------- 滚动叙事增强：只读取滚动状态，不改原有锚点与交互 ---------- */
(function initScrollNarrative() {
  const root = document.documentElement;
  const body = document.body;
  const hero = document.querySelector('.hero');
  const levels = Array.from(document.querySelectorAll('.level'));
  const lights = Array.from(document.querySelectorAll('.spine-light'));
  const footer = document.querySelector('.site-footer');
  const chapters = [
    '02 / WORKS · 作品', '03 / SKILLS · 技能', '04 / ABOUT · 关于我',
    '05 / CV · 履历', '06 / CONTACT · 联系'
  ];
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const wide = window.innerWidth > 960;

    if (hero && wide) {
      const p = Math.min(1, Math.max(0, y / vh));
      root.style.setProperty('--hero-y', (p * -42).toFixed(1) + 'px');
      root.style.setProperty('--hero-o', (1 - p * .78).toFixed(3));
    }

    let active = -1;
    levels.forEach((lv, i) => {
      const r = lv.getBoundingClientRect();
      const dist = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
      if (wide) lv.style.setProperty('--toy-y', (dist * -18).toFixed(1) + 'px');
      if (r.top < vh * .55) active = i;
    });

    if (y > 60 && active >= 0) body.dataset.chapter = chapters[active];
    else body.removeAttribute('data-chapter');

    // 页脚进入视口时，把五行信息带（及章节指示）抬到页脚正上方
    let lift = 0;
    if (footer) {
      const fr = footer.getBoundingClientRect();
      if (fr.top < vh) lift = Math.max(0, Math.min(fr.height, vh - fr.top));
    }
    root.style.setProperty('--strip-bottom', lift.toFixed(1) + 'px');

    lights.forEach((l, i) => l.classList.toggle('lit', i <= active));
    ticking = false;
  }

  function request() {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
})();

/* ---------- 弹窗打开时锁定背景滚动：监听 class，不改原有开关函数 ---------- */
(function initPopScrollLock() {
  const card = document.getElementById('popCard');
  if (!card || !('MutationObserver' in window)) return;
  let locked = false;
  function sync() {
    const open = !card.hidden && card.classList.contains('open');
    if (open === locked) return;
    locked = open;
    if (open) {
      const gap = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = gap > 0 ? gap + 'px' : '';
      document.body.classList.add('pop-open');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('pop-open');
    }
  }
  new MutationObserver(sync).observe(card, { attributes: true, attributeFilter: ['class', 'hidden'] });
})();

/* ---------- 背景小方块拼成大猫头，随鼠标凸起、移开后自然陷回 ---------- */
(function initPixelCatHead() {
  if (window.matchMedia && window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;
  const layer = document.getElementById('pixelCat');
  if (!layer) return;
  layer.innerHTML = '';

  const GRID = 20;
  const SIZE = GRID - 3;
  const R = 165;
  const cells = new Map();
  let mx = -9999, my = -9999, pending = false, lastRun = 0;

  function inTri(x, y, x1, y1, x2, y2, x3, y3) {
    const s = (px, py, ax, ay, bx, by) => (px - bx) * (ay - by) - (ax - bx) * (py - by);
    const d1 = s(x, y, x1, y1, x2, y2), d2 = s(x, y, x2, y2, x3, y3), d3 = s(x, y, x3, y3, x1, y1);
    return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
  }
  function inHead(x, y) {
    if ((x * x) / (122 * 122) + (y * y) / (103 * 103) <= 1) return true;
    if (inTri(x, y, -118, -61, -88, -141, -42, -84)) return true;
    if (inTri(x, y, 118, -61, 88, -141, 42, -84)) return true;
    return false;
  }
  function update() {
    pending = false;
    const want = new Set();
    const fresh = [];
    const x0 = Math.floor((mx - R) / GRID), x1 = Math.ceil((mx + R) / GRID);
    const y0 = Math.floor((my - R) / GRID), y1 = Math.ceil((my + R) / GRID);

    for (let gx = x0; gx <= x1; gx++) {
      for (let gy = y0; gy <= y1; gy++) {
        const x = gx * GRID + GRID / 2 - mx;
        const y = gy * GRID + GRID / 2 - my;
        if (!inHead(x, y)) continue;

        const key = gx + ',' + gy;
        want.add(key);
        if (!cells.has(key)) {
          const el = document.createElement('div');
          el.className = 'pixel-pop lifted';
          el.style.left = (gx * GRID) + 'px';
          el.style.top = (gy * GRID) + 'px';
          el.style.width = SIZE + 'px';
          el.style.height = SIZE + 'px';
          el.style.setProperty('--op', (0.22 + Math.random() * 0.18).toFixed(2));
          fresh.push(el);
          cells.set(key, { el, timer: 0 });
        }
      }
    }

    if (fresh.length) {
      const frag = document.createDocumentFragment();
      fresh.forEach(el => frag.appendChild(el));
      layer.appendChild(frag);
    }
    cells.forEach((item, key) => {
      if (want.has(key)) {
        clearTimeout(item.timer);
        item.timer = 0;
      } else if (!item.timer) {
        item.el.classList.remove('lifted');
        item.timer = setTimeout(() => { item.el.remove(); cells.delete(key); }, 420);
      }
    });
  }

  document.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const now = performance.now();
    if (now - lastRun < 50) return;
    lastRun = now;
    mx = e.clientX; my = e.clientY;
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, { passive: true });
  function leave() {
    mx = -9999; my = -9999;
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }
  document.addEventListener('pointerleave', leave);
  window.addEventListener('blur', leave);
})();

(function initClickCats() {
  const SKIP = 'button,a,input,textarea,select,label,.voxel-stage,.voxel-controls,.cat-atlas,.paw-nav,.hero-strip,.toy-item,.pop-card,.pop-overlay,.edit-panel,.modal,.overlay,.toast,.lightbox,.filter-btn,.view-mode,.work-item,.skill-item,.cv-row,.contact-mail,.theme-fab,.edit-fab';
  const faces = ['🐱', '🐈', '😺', '😸', '😻', '😽'];
  document.addEventListener('click', e => {
    if (e.target.closest(SKIP)) return;
    const el = document.createElement('span');
    el.className = 'click-cat';
    el.textContent = faces[Math.floor(Math.random() * faces.length)];
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    el.style.setProperty('--r', (Math.random() * 36 - 18).toFixed(0) + 'deg');
    el.style.setProperty('--dx', (Math.random() * 46 - 23).toFixed(0) + 'px');
    el.style.setProperty('--sz', (46 + Math.random() * 20).toFixed(0) + 'px');
    el.style.setProperty('--dur', (1500 + Math.random() * 500).toFixed(0) + 'ms');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2100);
  });
})();

/* ---------- 轻音乐：Web Audio 实时合成，零音频文件 ---------- */
(function initMusic() {
  const btn = document.getElementById('musicToggle');
  if (!btn) return;
  let ctx = null, master = null, timer = null, playing = false, step = 0;
  // C 大调五声音阶（含高八度），单位 Hz，柔和音域
  const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
  const bass = [130.81, 164.81, 196.00, 174.61]; // C G F 的低音
  let idx = 2;

  function note(freq, when, dur, vol, type) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1600;
    osc.type = type || 'triangle';
    osc.frequency.setValueAtTime(freq, when);
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(vol, when + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(when);
    osc.stop(when + dur + 0.05);
  }

  function schedule() {
    if (!playing || !ctx) return;
    const now = ctx.currentTime;
    const beat = 0.62;
    // 主旋律：在五声音阶上做小步随机漫步
    idx += Math.floor(Math.random() * 3) - 1;
    if (idx < 0) idx = 1;
    if (idx >= scale.length) idx = scale.length - 2;
    const len = beat * (Math.random() < 0.3 ? 2.6 : 1.7);
    note(scale[idx], now + 0.05, len, 0.16, 'triangle');
    if (Math.random() < 0.35) note(scale[idx] * 2, now + 0.05, len * 0.7, 0.04, 'sine');
    // 每 4 拍铺一个柔和低音，营造和声底
    if (step % 4 === 0) note(bass[Math.floor(step / 4) % bass.length], now + 0.05, beat * 3.6, 0.1, 'sine');
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
    master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 1.2);
    btn.classList.add('playing');
    btn.setAttribute('aria-pressed', 'true');
    btn.title = '暂停轻音乐';
    btn.querySelector('.music-icon').textContent = '♫';
    schedule();
  }
  function stop() {
    playing = false;
    clearTimeout(timer);
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
    }
    btn.classList.remove('playing');
    btn.setAttribute('aria-pressed', 'false');
    btn.title = '播放轻音乐';
  }

  btn.addEventListener('click', () => { if (playing) stop(); else start(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && playing) stop(); });
})();
