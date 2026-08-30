/* แฟ้มคดี — คน / แหล่ง
   กราฟเต็ม → #ov · embed=1 → postMessage ไป story-card (parent)
   พึ่ง globals: esc, ZTH, DSI6, SOURCES, LAB, srcHost, srcSiteName */
(function (global) {
  'use strict';

  var MSG_SOURCE = 'hua-case';

  function isStoryEmbed() {
    try {
      return new URLSearchParams(location.search).get('embed') === '1';
    } catch (e) {
      return false;
    }
  }

  function _esc(s) {
    return typeof esc === 'function' ? esc(s) : String(s == null ? '' : s);
  }

  function setCardKind(kind) {
    var c = document.querySelector('#ov .card');
    if (!c) return;
    c.classList.remove('card-person', 'card-source', 'card-event');
    if (kind) c.classList.add(kind);
  }

  /* คีย์อังกฤษคงที่ · ฉลากตาม locale (ไทยก่อน · สลับ STAMP_LOCALE ทีหลัง) */
  var STAMP_LOCALE = 'th';
  var STAMP = {
    th: {
      document: 'เอกสาร',
      hearsay: 'พยาน',
      cite: 'อ้างอิง',
      note: 'หมายเหตุ',
      claim: 'สันนิษฐาน',
      timeline: 'เหตุการณ์'
    },
    en: {
      document: 'DOCUMENT',
      hearsay: 'HEARSAY',
      cite: 'CITE',
      note: 'NOTE',
      claim: 'CLAIM',
      timeline: 'TIMELINE'
    }
  };

  function stampKey(raw) {
    var t = String(raw || '').toLowerCase();
    if (/เอกสาร|ตรง|document|direct|source|\bdoc\b|pdf|ราชกิจจา|กกต/.test(t)) return 'document';
    if (/พยาน|บอกเล่า|hearsay/.test(t)) return 'hearsay';
    if (/อ้างอิง|อ้าง|cite|news|ข่าว|article|บทความ/.test(t)) return 'cite';
    if (/หมายเหตุ|โน้ต|note|social|โพสต์/.test(t)) return 'note';
    if (/เหตุการณ์|เส้นเวลา|timeline/.test(t)) return 'timeline';
    if (/สันนิษฐาน|อนุมาน|claim/.test(t)) return 'claim';
    return 'claim';
  }

  function stampLabel(raw) {
    var pack = STAMP[STAMP_LOCALE] || STAMP.th;
    return pack[stampKey(raw)] || pack.claim;
  }

  function stampFromTier(t) { return stampLabel(t); }
  function stampFromSrcType(t) { return stampLabel(t || 'document'); }

  function relayToStory(kind, html, meta) {
    meta = meta || {};
    try {
      if (!window.parent || window.parent === window) return false;
      window.parent.postMessage({
        source: MSG_SOURCE,
        kind: kind,
        html: html,
        eb: meta.eb || '',
        title: meta.title || ''
      }, '*');
      return true;
    } catch (e) {
      return false;
    }
  }

  function showInOverlay(kindClass, html) {
    setCardKind(kindClass);
    var body = document.getElementById('cardbody');
    var ov = document.getElementById('ov');
    if (!body || !ov) return;
    body.innerHTML = html;
    ov.classList.add('on');
  }

  function present(kind, kindClass, html, meta) {
    if (isStoryEmbed()) {
      relayToStory(kind, html, meta);
      return;
    }
    showInOverlay(kindClass, html);
  }

  function buildPersonHtml(p) {
    if (!p) return '';
    var zth = typeof ZTH !== 'undefined' ? ZTH : {};
    var nAl = (p.allegations && p.allegations.length) || 0;
    var h = '<header class="pc-head">แฟ้ม · คน · ' + (nAl ? nAl + ' ข้อกล่าวหา' : 'ยังไม่มีข้อกล่าวหาเจาะจง') + '</header>';
    h += '<div class="pc-body"><span class="pc-rail" aria-hidden="true">ชื่อคน</span><div class="pc-main">';
    h += '<h2 class="pc-name">' + _esc(p.name) + '</h2>';
    h += '<div class="pc-badges">';
    h += '<span class="badge">' + _esc(zth[p.zone] || p.zone || '') + '</span>';
    h += '<span class="badge r">กกต.ชุด 26 กล่าวหา</span>';
    if (p.red9) h += '<span class="badge ilaw">iLaw ยื่นตรง · 21 ก.ค.69 [S053]</span>';
    if (typeof DSI6 !== 'undefined' && DSI6[p.name]) h += '<span class="badge">DSI หมายเรียกชุดแรก · 9 พ.ค.68 [S057]</span>';
    if (p.red9label) h += '<span class="badge r">' + _esc(p.red9label) + '</span>';
    h += '</div>';
    h += '<div class="pc-pos">' + _esc(p.pos || '') + '</div>';
    if (nAl) {
      h += '<div class="pc-sec-lab">ข้อกล่าวหา · ' + nAl + ' รายการ</div>';
      var anyLeaked = false;
      p.allegations.forEach(function (a, i) {
        if (a.leaked) anyLeaked = true;
        var st = stampFromTier(a.tier);
        h += '<article class="pc-al">';
        h += '<div class="pc-k">' + (a.id ? _esc(a.id) + ' · ' : '') + _esc(st) + (a.leaked ? ' · *' : '') + '</div>';
        h += '<h3 class="pc-role">' + _esc(a.role || ('ข้อกล่าวหา ' + (i + 1))) + (a.leaked ? ' <span class="star">*</span>' : '') + '</h3>';
        if (a.claim) h += '<p class="pc-claim">' + _esc(a.claim) + '</p>';
        h += '<div class="pc-meta">';
        if (a.tier) h += '<span>หลักฐาน: ' + _esc(a.tier) + '</span>';
        if (a.stage) h += '<span>ขั้น: ' + _esc(a.stage) + (a.date ? ' (' + _esc(a.date) + ')' : '') + '</span>';
        if (a.auth) h += '<span>โดย: ' + _esc(a.auth) + '</span>';
        h += '</div>';
        if (a.src && a.src.length) {
          h += '<div>';
          a.src.forEach(function (s) {
            h += '<span class="chip src-chip" data-sid="' + _esc(s.id) + '" title="' + _esc(s.cite) + '">' + _esc(s.id) + ' · ' + _esc(s.cite) + '</span>';
          });
          h += '</div>';
        }
        if (a.response) h += '<div class="pc-rsp">คำชี้แจง: ' + _esc(a.response) + '</div>';
        h += '<div class="pc-al-foot"><span class="pc-stamp">' + _esc(st) + '</span></div>';
        h += '</article>';
      });
      if (anyLeaked) h += '<div class="foot"><span class="star">*</span> จากเอกสารความเห็นภายใน กกต.ที่<b>รั่วไหล</b> (รองเลขาฯ) — ยังไม่ใช่มติ กกต.ชุดใหญ่ · DSI แจ้งความหาคนทำเอกสารหลุด</div>';
    } else {
      h += '<div class="none">ถูกระบุชื่อในลิสต์ผู้ถูกกล่าวหา แต่<b>ยังไม่มีบทบาทคดีเจาะจง</b>ในสำนวนที่เปิดเผย · สถานะในฐานข้อมูล: ' + _esc(p.status || '—') + '</div>';
    }
    h += '</div></div>';
    return h;
  }

  function thaiDate(iso) {
    var M = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
             'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
    return m ? (+m[3]) + ' ' + M[+m[2] - 1] + ' ' + m[1] : String(iso || '');
  }

  function buildEventHtml(d) {
    if (!d) return '';
    var STANCE = { '▲': 'รุกไล่ / หนุนสอบ', '▼': 'ตั้งรับ / โต้กลับ', '●': 'กระบวนการ' };
    var nSrc = (d.src && d.src.length) || 0;
    var h = '<header class="pc-head">' + _esc(d.head || ('เหตุการณ์ · ' + (d.date || ''))) + '</header>';
    h += '<div class="pc-body"><span class="pc-rail" aria-hidden="true">' +
         _esc(d.rail || 'เหตุการณ์') + '</span><div class="pc-main">';
    h += '<h2 class="pc-name">' + _esc(d.short || '') + '</h2>';
    h += '<div class="pc-badges">';
    if (d.party) h += '<span class="badge"' + (d.color ? ' style="background:' + _esc(d.color) + ';color:#fff;border-color:transparent"' : '') + '>' + _esc(d.party) + '</span>';
    if (d.stance) h += '<span class="badge">' + _esc(d.stance) + ' ' + _esc(STANCE[d.stance] || '') + '</span>';
    h += '</div>';
    h += '<div class="pc-pos">' + _esc(thaiDate(d.date)) + (d.group ? ' · ' + _esc(d.group) : '') + '</div>';
    if (d.detail) h += '<article class="pc-al"><p class="pc-claim">' + _esc(d.detail) + '</p>';
    if (nSrc) {
      h += '<div class="pc-sec-lab">แหล่ง · ' + nSrc + ' รายการ</div><div>';
      d.src.forEach(function (s) {
        h += '<span class="chip src-chip" data-sid="' + _esc(s.id) + '" title="' + _esc(s.cite) + '">' +
             _esc(s.id) + ' · ' + _esc(s.cite) + '</span>';
      });
      h += '</div>';
    }
    if (d.detail) h += '<div class="pc-al-foot"><span class="pc-stamp">' + _esc(d.stamp || stampLabel('timeline')) + '</span></div></article>';
    h += '<div class="none">' + (d.foot ||
         'เหตุการณ์ในไทม์ไลน์การเมืองรอบคดี · <b>ข้อกล่าวหาไม่ใช่คำพิพากษา</b>') + '</div>';
    h += '</div></div>';
    return h;
  }

  function buildSourceHtml(sid, edge, hint) {
    var sources = typeof SOURCES !== 'undefined' ? SOURCES : {};
    var lab = typeof LAB !== 'undefined' ? LAB : {};
    var hostFn = typeof srcHost === 'function' ? srcHost : function () { return ''; };
    var siteFn = typeof srcSiteName === 'function' ? srcSiteName : function (h, a) { return a || h || 'แหล่งในฐาน'; };
    var s = sources[sid];
    if (!s) {
      var cite = (hint && (hint.cite || hint.label)) || '';
      s = { id: sid, title: cite || ('แหล่ง ' + sid + ' — ยังไม่โหลดในแผนที่นี้'), author: '', year: '', type: '', urls: [] };
    }
    var host0 = (s.urls && s.urls[0]) ? hostFn(s.urls[0]) : '';
    var site = siteFn(host0, s.author);
    var st = stampFromSrcType(s.type || site);
    var h = '<header class="sc-head">คลิป · แหล่ง · ' + _esc(s.id) + '</header>';
    h += '<div class="sc-body"><span class="sc-rail" aria-hidden="true">แหล่ง</span><div class="sc-main">';
    h += '<div class="sc-id">' + _esc(s.id) + '</div>';
    h += '<h2 class="sc-title">' + _esc(s.title || '—') + '</h2>';
    h += '<div class="sc-badges">';
    if (site) h += '<span class="badge amber">' + _esc(site) + '</span>';
    if (s.year) h += '<span class="badge">' + _esc(s.year) + '</span>';
    if (s.type) h += '<span class="badge">' + _esc(s.type) + '</span>';
    if (s.author && s.author !== site) h += '<span class="badge">' + _esc(s.author) + '</span>';
    h += '</div>';
    if (edge && edge.note) {
      h += '<div class="sc-edge">เส้นนี้: <b>' + _esc(lab[edge.a] || edge.a) + '</b> — <b>' + _esc(lab[edge.b] || edge.b) + '</b> · ' + _esc(edge.note) + '</div>';
    }
    h += '<div class="sc-sec">เปิดหน้าเว็บที่ดึงมา</div>';
    if (s.urls && s.urls.length) {
      h += '<div class="sc-links">';
      s.urls.forEach(function (u, i) {
        var labU = siteFn(hostFn(u), s.author);
        var n = s.urls.length > 1 ? ' · ' + (i + 1) : '';
        h += '<a class="sc-go" href="' + _esc(u) + '" target="_blank" rel="noopener">เปิด ' + _esc(labU) + n + '</a>';
      });
      h += '</div>';
    } else {
      h += '<div class="none">ไม่มี URL สาธารณะในทะเบียนแหล่ง' + (s.author ? (' — ' + _esc(s.author)) : '') + '</div>';
    }
    h += '<div class="sc-foot"><span>จากทะเบียน 00_sources · ข้อกล่าวหาไม่ใช่คำพิพากษา</span><span class="sc-stamp">' + _esc(st) + '</span></div>';
    h += '</div></div>';
    return h;
  }

  function openCard(p) {
    if (!p) return;
    present('person', 'card-person', buildPersonHtml(p), {
      eb: 'แฟ้มคน',
      title: p.name || ''
    });
  }

  function openEventCard(d) {
    if (!d) return;
    present('event', 'card-event', buildEventHtml(d), {
      eb: 'เหตุการณ์',
      title: d.short || ''
    });
    if (!isStoryEmbed()) bindSrcChips();
  }

  function openSrcCard(sid, edge, hint) {
    present('source', 'card-source', buildSourceHtml(sid, edge, hint), {
      eb: 'แหล่ง ' + (sid || ''),
      title: sid || ''
    });
  }

  function closeCard() {
    if (isStoryEmbed()) {
      relayToStory('close', '', {});
      return;
    }
    var ov = document.getElementById('ov');
    if (ov) ov.classList.remove('on');
    setCardKind(null);
  }

  function bindSrcChips() {
    var ov = document.getElementById('ov');
    if (!ov || ov._huaCaseSrcBound) return;
    ov._huaCaseSrcBound = true;
    ov.addEventListener('click', function (e) {
      var el = e.target.closest('[data-sid]');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      openSrcCard(el.getAttribute('data-sid'), null, {
        cite: el.getAttribute('title') || '',
        label: (el.textContent || '').replace(/^S\d+\s*[·•]\s*/, '')
      });
    });
  }

  global.HuaCaseCards = {
    MSG_SOURCE: MSG_SOURCE,
    isStoryEmbed: isStoryEmbed,
    setCardKind: setCardKind,
    stampKey: stampKey,
    stampLabel: stampLabel,
    stampFromTier: stampFromTier,
    stampFromSrcType: stampFromSrcType,
    buildPersonHtml: buildPersonHtml,
    buildSourceHtml: buildSourceHtml,
    buildEventHtml: buildEventHtml,
    relayToStory: relayToStory,
    openCard: openCard,
    openEventCard: openEventCard,
    openSrcCard: openSrcCard,
    closeCard: closeCard,
    bindSrcChips: bindSrcChips
  };
  global.openCard = openCard;
  global.openEventCard = openEventCard;
  global.openSrcCard = openSrcCard;
  global.closeCard = closeCard;
  global.setCardKind = setCardKind;
  global.stampKey = stampKey;
  global.stampLabel = stampLabel;
  global.stampFromTier = stampFromTier;
  global.stampFromSrcType = stampFromSrcType;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSrcChips);
  } else {
    bindSrcChips();
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCard();
  });
})(typeof window !== 'undefined' ? window : this);
