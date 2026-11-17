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
      image: 'assets/p9.jpg',
      link: '',
      tags: ['AIGC', '产品海报', '商业视觉', '护肤']
    },
    {
      id: 'p10',
      title: '好利来 · 半熟芝士 AIGC 海报',
      category: 'AIGC',
      year: '2025',
      desc: '以「超级芝士 超级发布」为主题的限定蛋糕视觉提案。通过高饱和的粉蓝对比、奇幻城堡与爱心元素，把产品包装成一场梦境般的发布事件，完成从概念到成稿的系列海报。',
      image: 'assets/p10.jpg',
      link: '',
      tags: ['AIGC', '商业海报', '甜品', '系列作品']
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
  const list = activeFilter === '全部'
    ? data.projects
    : data.projects.filter(p => (p.category || '其他') === activeFilter);
  document.getElementById('emptyState').hidden = list.length > 0;
  grid.innerHTML = list.map(p => {
    const media = p.image && p.image.trim()
      ? `<img src="${escapeAttr(p.image.trim())}" alt="${escapeAttr(p.title)}" loading="lazy" decoding="async" data-fallback="${escapeAttr((p.title || '?').trim().charAt(0))}">`
      : `<div class="work-placeholder">${escapeHtml((p.title || '?').trim().charAt(0))}</div>`;
    const tags = (p.tags || []).filter(Boolean).map(t => `<span class="work-tag">${escapeHtml(t)}</span>`).join('');
    const inner = `
      <div class="work-media">${media}</div>
      <div class="work-body">
        <span class="work-cat">${escapeHtml(p.category || '其他')} · ${escapeHtml(p.year || '')}</span>
        <h3 class="work-title">${escapeHtml(p.title || '未命名作品')}</h3>
        <p class="work-desc">${escapeHtml(p.desc || '')}</p>
        ${tags ? `<div class="work-tags">${tags}</div>` : ''}
        ${p.link && p.link.trim() ? '<span class="work-open">查看项目 ↗</span>' : ''}
      </div>`;
    return p.link && p.link.trim()
      ? `<a class="work-item" href="${escapeAttr(p.link.trim())}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<article class="work-item">${inner}</article>`;
  }).join('');
  grid.querySelectorAll('.work-media img').forEach(img => {
    img.addEventListener('error', () => {
      img.parentElement.innerHTML = `<div class="work-placeholder">${escapeHtml(img.dataset.fallback || '?')}</div>`;
    });
  });
  observeReveals();
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
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
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
  if (e.key === 'Escape') { closeView(); closePanel(); closeModal(); }
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
  track.addEventListener('wheel', () => { pauseUntil = performance.now() + 2200; }, { passive: true });
  track.addEventListener('touchstart', () => { pauseUntil = performance.now() + 2600; }, { passive: true });
  track.addEventListener('pointerdown', () => { pauseUntil = performance.now() + 2200; }, { passive: true });
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  function tick(now) {
    const dt = last ? Math.min(3, (now - last) / 16.67) : 1;
    last = now;
    if (!paused && now >= pauseUntil && !document.hidden) {
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

/* ---------- 作品视图切换：卡片 / 详细，不影响原有筛选与渲染 ---------- */
(function initWorkViewModes() {
  const grid = document.getElementById('projectGrid');
  const tools = document.querySelector('.view-tools');
  if (!grid || !tools) return;
  const KEY = 'my_portfolio_work_view_v1';
  let mode = 'card';
  try { mode = localStorage.getItem(KEY) === 'detail' ? 'detail' : 'card'; } catch (_) {}

  function apply(next) {
    mode = next === 'detail' ? 'detail' : 'card';
    grid.classList.toggle('detail-mode', mode === 'detail');
    tools.querySelectorAll('.view-mode').forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });
    try { localStorage.setItem(KEY, mode); } catch (_) {}
  }

  tools.querySelectorAll('.view-mode').forEach(b => {
    b.addEventListener('click', () => apply(b.dataset.mode));
  });
  apply(mode);
})();

/* ---------- 点击空白处冒出猫猫头：不干扰任何原有交互 ---------- */
(function initClickCats() {
  const SKIP = 'button,a,input,textarea,select,label,.voxel-stage,.voxel-controls,.cat-atlas,.paw-nav,.hero-strip,.toy-item,.pop-card,.pop-overlay,.edit-panel,.modal,.overlay,.toast,.filter-btn,.view-mode,.work-item,.skill-item,.cv-row,.contact-mail,.theme-fab,.edit-fab';
  const faces = ['🐱', '🐈', '😺', '😸', '🙀', '😽'];
  document.addEventListener('click', e => {
    if (e.target.closest(SKIP)) return;
    const el = document.createElement('span');
    el.className = 'click-cat';
    el.textContent = faces[Math.floor(Math.random() * faces.length)];
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    el.style.setProperty('--r', (Math.random() * 40 - 20).toFixed(0) + 'deg');
    el.style.setProperty('--dx', (Math.random() * 40 - 20).toFixed(0) + 'px');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1150);
  });
})();
