/* hua_venue_layer.js — แถบโรงแรม + bipartite บนพีระมิด/ดอก ใน prototype_hua_fallen
 * กดโรงแรม → ไฮไลต์จุด + สมุดแขก + เส้นกล่าวหา · ไม่พึ่ง story scrolly
 */
(function(){
  var DATA = {"venues": [{"id": "krungsri", "name": "กรุงศรีริเวอร์", "place": "อยุธยา", "when": "24–25 มิ.ย.67", "kind": "ศูนย์ทำโพย"}, {"id": "thara", "name": "ธาราแกรนด์", "place": "ปทุมธานี", "when": "24 มิ.ย.67", "kind": "ประชุมทำโพย"}, {"id": "pullman", "name": "พูลแมน", "place": "รางน้ำ", "when": "ก.ค.67", "kind": "รวมตัวหลังเลือก"}, {"id": "maruay", "name": "มารวยการ์เด็น", "place": "กทม.", "when": "ก่อนเลือก", "kind": "ที่พัก/จ่ายค่าห้อง"}], "links": [{"venue_id": "thara", "name": "สมเกียรติ เลียงประสิทธิ์", "role": "ผู้คุมห้องประชุม", "tier": "direct", "src": "S065", "al": "A003", "claim": "นั่งคุมการซักซ้อม สั่งให้ผู้สมัครจดโพย 3 ใบลงเอกสาร สว.3 และกล่าวอ้างคำสั่งจากเบื้องบนให้เครือข่ายสกัดอีกฝ่าย", "person_id": "P1588", "case_person_id": ""}, {"venue_id": "krungsri", "name": "ศุภชัย โพธิ์สุ", "role": "ผู้ตั้งวอร์รูม", "tier": "direct", "src": "S065", "al": "A004", "claim": "ตั้งวอร์รูมวางแผนและสั่งการการลงคะแนนที่ รร.กรุงศรีริเวอร์ อยุธยา มีผู้สมัครรวมตัวราว 20 คน", "person_id": "P733", "case_person_id": ""}, {"venue_id": "krungsri", "name": "สิทธิกร ธงยศ", "role": "สว.นครพนม — ผู้ซื้อตั๋ว/ปรากฏที่ศูนย์โพย", "tier": "hearsay", "src": "S101", "al": "A046", "claim": "ซื้อตั๋วเครื่องบินให้ตน+ผู้สมัคร สว. 7 คน ผ่านนครพนมแทรเวลเซ็นเตอร์ 21 มิ.ย.67 รวม ~31,000 (~5 วันก่อนเลือกระดับประเทศ) · พยานอ้างเห็นที่ศูนย์โพย รร.กรุงศรีริเว", "person_id": "", "case_person_id": ""}, {"venue_id": "krungsri", "name": "นภินทร ศรีสรรพางค์", "role": "ผู้ถูกตั้งกระทู้ (เรียกผู้สมัครเซ็นใบลาออกล่วงหน้า)", "tier": "hearsay", "src": "S119", "al": "A060", "claim": "พริษฐ์ตั้งกระทู้สดกล่าวหาว่านภินทร (รมต.ประจำสำนักนายกฯ) เรียกผู้สมัคร สว.เข้าคุยและให้เซ็นใบลาออกล่วงหน้า ตั้งแต่เป็น รมช.พาณิชย์ — นภินทรไม่มาตอบกระทู้เอง อ้า", "person_id": "", "case_person_id": ""}, {"venue_id": "thara", "name": "วงศกร ชนะกิจ", "role": "ผู้จัดประชุมทำโพย (ทีมภูเก็ต/พังงา/กระบี่)", "tier": "hearsay", "src": "S141", "al": "A061", "claim": "พยาน(พ.ต.อ.สมยศ สีหาบัว)ให้การว่าทีมงานวงศกรจัดให้ผู้สมัคร สว.3 จังหวัด(ภูเก็ต/พังงา/กระบี่)เดินทางเข้ากรุงเทพฯ 23 มิ.ย.67 ล่องเรือเจ้าพระยา แล้วพาไปประชุมทำโพย", "person_id": "", "case_person_id": "H008"}, {"venue_id": "thara", "name": "วงศกร ชนะกิจ", "role": "ผู้รับโอนเงิน", "tier": "document", "src": "S143", "al": "A075", "claim": "รับโอนจากวรพจน์(H009)10รายการรวม636,405บาท(15พ.ค.-21มิ.ย.67 คาบเกี่ยวรับสมัคร-เลือกทุกระดับ)", "person_id": "", "case_person_id": "H008"}, {"venue_id": "maruay", "name": "นิทัศน์ อารีย์วงศ์สกุล", "role": "ผู้ต้องหาลำดับ69/เครือข่ายจ้างงานตระกูลปริศนานันทกุล", "tier": "document", "src": "S145", "al": "A078", "claim": "ผู้ต้องหาลำดับ69ในคดีโกงเลือก สว. · เป็นผจก.ทั่วไปสโมสรอ่างทองเอฟซี12ปี(สโมสรก่อตั้ง2553 ประธานคือสมศักดิ์ ปริศนานันทกุล(P219) บิดาภราดร/กรวีร์ สส.ภท.; กรวีร์(P", "person_id": "P1599", "case_person_id": ""}, {"venue_id": "krungsri", "name": "สมเจตน์ ลิมปะพันธุ์", "role": "ผู้สัญญาตำแหน่ง สว.แลกเซ็นใบลาออกล่วงหน้า (ที่กรุงศรีริเวอร์)", "tier": "direct", "src": "S156", "al": "A109", "claim": "พยาน สมนึก สุชัยธนาวนิช (ผู้สมัคร สว.กลุ่ม4 สุโขทัย) ให้การว่าที่ล็อบบี้ รร.กรุงศรีริเวอร์ 24 มิ.ย.67 พบ 'อดีตที่ปรึกษา รมว.มหาดไทย' ซึ่ง iLaw ระบุชื่อ = สมเจตน", "person_id": "P560", "case_person_id": ""}, {"venue_id": "krungsri", "name": "ประพนธ์ ตั้งศรีเกียรติกุล", "role": "ผู้ติดต่อ/ประสานให้ไปศูนย์ทำโพย", "tier": "hearsay", "src": "S156", "al": "A110", "claim": "พยานระบุ ประพนธ์ (ผู้สมัคร สว.กลุ่ม4 บุรีรัมย์ อดีตที่ปรึกษา รมว.สธ.) เป็นผู้ติดต่อให้ผู้สมัครเดินทางไป รร.กรุงศรีริเวอร์ = 'บุคคลที่1 (ที่ปรึกษา สธ.)' ในเคสสุโ", "person_id": "P1567", "case_person_id": ""}, {"venue_id": "krungsri", "name": "นภินทร ศรีสรรพางค์", "role": "ผู้เรียกผู้สมัคร สว.ไปดูตัว+เซ็นใบลาออกล่วงหน้า (ที่กระทรวงพาณิชย์)", "tier": "document", "src": "S162", "al": "A111", "claim": "ความเห็นเลขาธิการ กกต. (ครรชิต ปฏิบัติแทนแสวง, เอกสาร 15 ก.ย.68) เสนอ 'สั่งฟ้อง' นภินทร: พยานผู้สมัคร สว.ให้การว่ามีทีมงานพาไปกระทรวงพาณิชย์ก่อนวันเลือกระดับประ", "person_id": "", "case_person_id": ""}, {"venue_id": "pullman", "name": "นภินทร ศรีสรรพางค์", "role": "ผู้ถูกกล่าวหาเพิ่มเติม (หลักฐานพิกัดโทรศัพท์)", "tier": "hearsay", "src": "S176", "al": "A135", "claim": "พริษฐ์แถลง 29ส.ค.69 เสริม A111: พบพิกัดการใช้งานโทรศัพท์ของผู้ได้รับเลือกเป็น สว.ราชบุรี+เพชรบุรี ที่กระทรวงพาณิชย์ วันเดียวกับเหตุการณ์ในห้องทำงานนภินทร (ตามข้", "person_id": "", "case_person_id": ""}, {"venue_id": "pullman", "name": "อนุทิน ชาญวีรกูล", "role": "ผู้ถูกอ้างว่าปรากฏตัวที่โรงแรม (พร้อม สว. ~100 คน)", "tier": "hearsay", "src": "S053", "al": "A016", "claim": "พยานอ้างพบที่โรงแรมพร้อมผู้ที่ต่อมาได้เป็น สว. กว่า 100 คน (21 ก.ค.67) · โน้ต H009 ระบุพูลแมน คิงพาวเวอร์ ก.ค.67 พร้อมเนวิน+วรพจน์", "person_id": "P949", "case_person_id": ""}, {"venue_id": "pullman", "name": "วรพจน์ ตั้งพันธุ์เพียร", "role": "ตัวกลาง/ท่อเงิน", "tier": "note", "src": "S142", "al": "", "claim": "ชื่อเล่น \"เม้ง\" · ผู้ต้องหาที่ 1 ฐานฟอกเงิน-อั้งยี่ในคดีโกงเลือก สว.2567 · กก.ผจก. บ.เวลล์เนสส์ ออฟ เดอะ เวิลด์ จำกัด (โรงแรม/รีสอร์ท) · ข้อมูลคดีระบุเคยเป็นผู้", "person_id": "", "case_person_id": "H009"}, {"venue_id": "maruay", "name": "สุเทพ สังข์วิเศษ", "role": "ผู้สมัคร", "tier": "note", "src": "S142", "al": "", "claim": "สว.2567 กลุ่ม3(การศึกษา) อ่างทอง อดีต ผอ.ร.ร.ปาโมกข์วิทยาภูมิ · ผู้ต้องหาลำดับ18 ให้การยอมรับไปร่วมกิจกรรมแนะนำตัวที่ รร.วังยาวริเวอร์ไซด์ นครนายก 24มิ.ย.67(จอง", "person_id": "", "case_person_id": "H025"}, {"venue_id": "krungsri", "name": "เกื้อกูล ด่านชัยวิจิตร", "role": "ผู้เกี่ยวข้องอื่น", "tier": "note", "src": "S156", "al": "", "claim": "เจ้าของ/ผู้ถือหุ้นใหญ่ รร.กรุงศรีริเวอร์ (บ.ก.พัชรศักดิ์) · อดีต รมช.คมนาคม (รบ.อภิสิทธิ์) อดีตรองหัวหน้าพรรค ภท. อดีต สส.อยุธยา เขต1 ภท.(2562) · บทบาท=เจ้าของส", "person_id": "", "case_person_id": "H044"}, {"venue_id": "krungsri", "name": "ธารินทร์ พันธุมัย", "role": "พยาน/ผู้เปิดโปง", "tier": "note", "src": "S156", "al": "", "claim": "ผู้สมัคร สว.กลุ่ม11 นครพนม · พยาน: ถูกชวนไปกรุงศรีริเวอร์ พบคณะศุภชัย โพธิ์สุ ~20 คน, ผู้ประสานงานบอก 'คณะท่านอนุทินกำลังมา', พบวอร์รูมสั่งเลือก — ปฏิเสธเข้าร่ว", "person_id": "", "case_person_id": "H046"}, {"venue_id": "krungsri", "name": "ปกรกานต์ รัชกิจประการ", "role": "ผู้เกี่ยวข้องอื่น", "tier": "note", "src": "S164", "al": "", "claim": "พยาน(เวทีวิปฝ่ายค้าน 26ก.ค.69)ยืนยันว่าเป็นผู้อยู่ในห้องประชุมทำโพยที่ รร.กรุงศรีริเวอร์/พูลแมนคิงเพาเวอร์รางน้ำ — ระบุว่าเป็น'ลูกสาวของนาที รัชกิจประการ' · ยัง", "person_id": "", "case_person_id": "H063"}, {"venue_id": "pullman", "name": "ปกรกานต์ รัชกิจประการ", "role": "ผู้เกี่ยวข้องอื่น", "tier": "note", "src": "S164", "al": "", "claim": "พยาน(เวทีวิปฝ่ายค้าน 26ก.ค.69)ยืนยันว่าเป็นผู้อยู่ในห้องประชุมทำโพยที่ รร.กรุงศรีริเวอร์/พูลแมนคิงเพาเวอร์รางน้ำ — ระบุว่าเป็น'ลูกสาวของนาที รัชกิจประการ' · ยัง", "person_id": "", "case_person_id": "H063"}], "sources": {"S065": {"id": "S065", "author": "iLaw", "title": "iLaw, \"สว.2567: ปากคำพยาน 4 ปาก แฉขั้นตอนเชิงลึก เมื่อเครือข่ายพรรคภูมิใจไทยวางระบบโกงเลือกสว.\" (เสว", "url": "https://ilaw.or.th/articles/58683"}, "S101": {"id": "S101", "author": "พริษฐ์ วัชรสินธุ", "title": "พริษฐ์ วัชรสินธุ (เวทีวิปฝ่ายค้าน 'เจาะคดีโกง สว. ภาค 4') — เส้นเงิน 6 จังหวัด (14 ส.ค.69)", "url": ""}, "S119": {"id": "S119", "author": "พริษฐ์ วัชรสินธุ", "title": "พริษฐ์ วัชรสินธุ แถลง/ตั้งกระทู้สด ที่รัฐสภา 27 ส.ค.69 — กกต.ควรฟ้องฮั้ว 229 ทั้งหมด · ผู้สมัครขาดคุ", "url": ""}, "S141": {"id": "S141", "author": "iLaw", "title": "iLaw — สว. 2567: เปิดคำบอกเล่าพยานคดีโกงเลือก สว. ภาค 2 ระบุมีนัดประชุมทำโพย-ให้เซ็นใบลาออกล่วงหน้า", "url": "https://ilaw.or.th/articles/58889"}, "S142": {"id": "S142", "author": "iLaw", "title": "iLaw — แจกแจง 229 รายชื่อผู้ถูกกล่าวหาในคดี \"โกงเลือกสว.\" พบ 138 สว. 13 รัฐมนตรี 17 สส.พรรคภูมิใจไทย", "url": "https://ilaw.or.th/articles/59107"}, "S143": {"id": "S143", "author": "iLaw", "title": "iLaw — เปิดเส้นเงินโกงเลือก สว. ภาคใต้ 2.17 ล้าน โยงผู้สมัคร – สส. ภูมิใจไทยและ สว. สีน้ำเงิน", "url": "https://ilaw.or.th/articles/59145"}, "S145": {"id": "S145", "author": "iLaw", "title": "iLaw — อ่างทองมีอะไร!! จังหวัดเล็กๆ แห่งบ้านใหญ่ปริศนานันทกุล ที่มีผู้สมัครสว. มาก และกวาดไป 6 ที่นั", "url": "https://ilaw.or.th/articles/59166"}, "S156": {"id": "S156", "author": "iLaw", "title": "iLaw — เปิดข้อมูลโรงแรมกรุงศรีริเวอร์ อยุธยา 'ศูนย์ทำโพย' ขนาดใหญ่ก่อนวันเลือก สว.ระดับประเทศ", "url": "https://ilaw.or.th/articles/59104"}, "S162": {"id": "S162", "author": "iLaw", "title": "iLaw — เปิดความเห็นเลขาฯ กกต.คดีโกงเลือก สว. สั่งฟ้อง 136 สว. ยกคำร้องอนุทินและ กก.บห.พรรค", "url": "https://ilaw.or.th/articles/59265"}, "S164": {"id": "S164", "author": "iLaw", "title": "iLaw — สว. 2567: เปิด 5 ฉาก ขบวนการโกงเลือกสว. พบเส้นทางการเงินเกี่ยว สส.ภูมิใจไทย", "url": "https://ilaw.or.th/articles/58847"}, "S176": {"id": "S176", "author": "The Standard", "title": "The Standard — ไอติม-พนิดา ชี้หลักฐานฮั้ว สว.แน่นพอสั่งฟ้อง จี้ กกต.อย่าใช้มาตรฐานศาล เปิดสลิปจ่ายเง", "url": ""}}, "exhibit": {"krungsri": {"n": "01", "quote": "ถูกชี้เป็นศูนย์ทำโพย · มีผู้สมัครรวมตัว · มีการอ้างสั่งการและใบลาออกล่วงหน้า", "stamp": "document", "sid": "S156", "al": "A109"}, "thara": {"n": "02", "quote": "พยานเล่าว่าทีมงานพาผู้สมัคร 3 จังหวัดเข้าห้องประชุมทำโพย และเก็บโทรศัพท์", "stamp": "hearsay", "sid": "S141", "al": "A061"}, "pullman": {"n": "03", "quote": "ถูกเอ่ยในโน้ตคนนอกดอก — รวมตัว สว. · คนละชั้นเวลากับศูนย์อยุธยา", "stamp": "note", "sid": "S164", "al": ""}, "maruay": {"n": "04", "quote": "ที่พัก/จ่ายค่าห้องโยงเครือข่ายจ้างงาน — ปรากฏในข้อกล่าวหาและโน้ตคนนอกดอก", "stamp": "document", "sid": "S145", "al": "A078"}}};
  var VCOLOR={krungsri:'#B3261E',thara:'#1a5f6a',pullman:'#4a3f7a',maruay:'#8a6a2a'};
  var venueFocus=null;
  var venueClaim=null;
  var nameIndex=null;

  /* ดอก+พีระมิด = จุดน้ำหวานบนวงนอก · lerp ตอน morph · หลบช่อ CHO */
  var VSHORT={krungsri:'กรุงศรี',thara:'ธารา',pullman:'พูลแมน',maruay:'มารวย'};
  function isFlowerPhase(){
    try{ if(typeof morphT==='function') return morphT()<0.42; }catch(e){}
    return !document.documentElement.classList.contains('morph-on');
  }
  function morphEase(){
    var t=0;
    try{ if(typeof morphT==='function') t=+morphT()||0; }catch(e){}
    if(t<0) t=0; if(t>1) t=1;
    return t*t*(3-2*t);
  }
  function flowerCenter(svg){
    return {
      cx:+(svg && svg.getAttribute('data-cx'))||620,
      cy:+(svg && svg.getAttribute('data-cy'))||618
    };
  }
  /* ang0=ดอก · ang1=พีระมิด · หลบ CHO: อำนาจ16–52 / บุรีรัมย์95–131 / สุราษฎร์200–236 / สงขลา290–326
   * + หลบป้ายชั้นข้อกล่าวหา (แกน/วอร์รูม/สว/ผู้สมัคร) · lerp มุม+R ให้เห็นตอน morph
   * มารวยเคย 250° ชิดป้าย สว. */
  var VENUE_LAYOUT={
    krungsri:{ang0:-30, ang1:-22, r0:650, r1:710},
    thara:   {ang0:58,  ang1:68,  r0:650, r1:710},
    pullman: {ang0:86, ang1:90, r0:660, r1:720},
    maruay:  {ang0:268, ang1:242, r0:750, r1:850}
  };
  /* A1+B1 mock (?slots=a1): หนึ่งโรงต่อช่อง · lerp ระยะสั้นไม่ข้ามกลีบ · R ให้ y อยู่ในกล้อง */
  var VENUE_GAPS={
    krungsri:{a0:326, a1:16,  lab:'เหนือ · หลังสงขลา'},
    thara:   {a0:52,  a1:95,  lab:'ออก · ก่อนบุรีรัมย์'},
    pullman: {a0:131, a1:200, lab:'ตอ.ใต้ · หลังบุรีรัมย์'},
    maruay:  {a0:236, a1:290, lab:'ตก · หลังสุราษฎร์'}
  };
  var LAYOUT_A1B1={
    krungsri:{ang0:-8,  ang1:8,   r0:510, r1:560},
    thara:   {ang0:72,  ang1:80,  r0:620, r1:680},
    pullman: {ang0:144, ang1:154, r0:580, r1:620},
    maruay:  {ang0:254, ang1:246, r0:640, r1:690}
  };
  function qparam(k){
    try{ return new URLSearchParams(location.search).get(k); }catch(e){ return null; }
  }
  function useSlotA1(){ return qparam('slots')==='a1'; }
  function slotUi(){
    var v=(qparam('slotui')||'A').toUpperCase();
    return v==='B'||v==='C'?v:'A';
  }
  /* D3+E1: มุมโรงแรมแบบเดิม (พูลแมน SE) · ไม่ใช้ 4 ทิศ A1 */
  var LAYOUT_D3={
    krungsri:{ang0:-30, ang1:-22, r0:640, r1:680},
    thara:   {ang0:58,  ang1:68,  r0:640, r1:680},
    pullman: {ang0:150, ang1:158, r0:620, r1:660},
    maruay:  {ang0:268, ang1:255, r0:660, r1:700}
  };
  function useE1(){ return qparam('captions')==='e1' || qparam('layout')==='d3'; }
  function e1Park(){
    var v=(qparam('e1park')||'A').toUpperCase();
    return v==='B'||v==='C'?v:'A';
  }
  if(useE1()) VENUE_LAYOUT=LAYOUT_D3;
  else if(useSlotA1()) VENUE_LAYOUT=LAYOUT_A1B1;
  function lerpAng(a0, a1, e){
    var d=a1-a0;
    while(d>180) d-=360;
    while(d<-180) d+=360;
    return a0+d*e;
  }
  function polarXY(cx, cy, r, deg){
    var rad=(deg-90)*Math.PI/180;
    return [cx+Math.cos(rad)*r, cy+Math.sin(rad)*r];
  }
  function venueAnchors(){
    var svg=document.querySelector('.wrap svg') || document.querySelector('svg');
    var c=flowerCenter(svg);
    var e=morphEase();
    var out={};
    var rSum=0, n=0;
    DATA.venues.forEach(function(ven){
      var L=VENUE_LAYOUT[ven.id]||{ang0:0, ang1:0, r0:640, r1:680};
      var deg=lerpAng(L.ang0, L.ang1, e);
      var R=L.r0+(L.r1-L.r0)*e;
      var rad=(deg-90)*Math.PI/180;
      out[ven.id]={
        x:c.cx+Math.cos(rad)*R,
        y:c.cy+Math.sin(rad)*R,
        ang:deg, cx:c.cx, cy:c.cy, R:R, mode:'ring'
      };
      rSum+=R; n++;
    });
    out._ringR=n?rSum/n:640;
    out._cx=c.cx; out._cy=c.cy;
    return out;
  }

  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function ensureLayer(){
    var svg=document.querySelector('.wrap svg') || document.querySelector('svg');
    if(!svg) return null;
    var g=svg.querySelector('#venueLayer');
    if(!g){
      g=document.createElementNS('http://www.w3.org/2000/svg','g');
      g.setAttribute('id','venueLayer');
      g.setAttribute('pointer-events','none');
    }
    /* บังคับท้ายสุด — กลีบจว./ช่อต้องไม่วาดทับเส้นโรงแรม */
    if(g.parentNode!==svg || svg.lastElementChild!==g) svg.appendChild(g);
    return g;
  }
  function strokeOver(sel, d, col, w, op, halo){
    sel.append('path').attr('d',d).attr('fill','none')
      .attr('stroke',col).attr('stroke-width',w)
      .attr('opacity',op).attr('stroke-linecap','round')
      .attr('vector-effect','non-scaling-stroke')
      .attr('pointer-events','none');
  }
  function buildNameIndex(){
    if(nameIndex) return nameIndex;
    nameIndex={};
    if(typeof HUA229!=='undefined'){
      HUA229.forEach(function(p,i){ if(p&&p.name) nameIndex[p.name]=i; });
    }
    return nameIndex;
  }
  function posOfName(name){
    var idx=buildNameIndex()[name];
    if(idx==null) return null;
    var id=(typeof PEOPLE!=='undefined')?PEOPLE[idx]:null;
    if(id && typeof morphPos==='function' && typeof morphT==='function'){
      try{ return morphPos(id, morphT()); }catch(e){}
    }
    var el=document.querySelector('.dot[data-i="'+idx+'"]');
    if(el) return [+el.getAttribute('cx'), +el.getAttribute('cy')];
    return null;
  }
  function nameSeed(s){
    var h=0, i;
    s=s||'';
    for(i=0;i<s.length;i++) h=((h<<5)-h)+s.charCodeAt(i)|0;
    return ((h%1000)+1000)%1000/1000;
  }
  function egoGuestName(){
    try{
      var id=typeof liveEgo==='function'?liveEgo():null;
      if(!id || typeof idxOfPid!=='function' || typeof HUA229==='undefined') return null;
      var i=idxOfPid(id);
      if(i==null || !HUA229[i]) return null;
      return HUA229[i].name||null;
    }catch(e){ return null; }
  }
  function curve(x1,y1,x2,y2){
    var mx=(x1+x2)/2, my=(y1+y2)/2, dx=x2-x1, dy=y2-y1;
    return 'M'+x1+','+y1+' Q'+(mx-dy*0.12)+','+(my+dx*0.08)+' '+x2+','+y2;
  }
  function uniqueGuests(vid){
    var seen={}, people=[];
    DATA.links.forEach(function(L){
      if(L.venue_id!==vid) return;
      if(seen[L.name]){ seen[L.name].push(L); return; }
      seen[L.name]=[L]; people.push(L.name);
    });
    return {seen:seen, people:people};
  }
  function srcOf(sid){ return (DATA.sources&&DATA.sources[sid])||{id:sid,title:'',url:'',author:''}; }

  function isEmbed(){
    return document.documentElement.classList.contains('v-embed');
  }
  /* แถบสถานที่โชว์ทั้งหน้าเต็มและ embed · สมุดแขกใน embed ส่ง story-card */
  function venueChromeAllowed(){
    return true;
  }
  function venueAllowed(){ return venueChromeAllowed(); }

  function paintBar(){
    var bar=document.getElementById('venue-bar');
    if(!bar) return;
    bar.querySelectorAll('button[data-venue]').forEach(function(b){
      var id=b.getAttribute('data-venue');
      b.classList.toggle('on', id ? id===venueFocus : !venueFocus);
    });
  }

  function stampOf(tier, fallback){
    var lab = window.HuaCaseCards && window.HuaCaseCards.stampLabel;
    if (lab) return lab(tier || fallback || 'note');
    var t=(tier||'').toLowerCase();
    if(t==='direct'||t==='document') return 'เอกสาร';
    if(t==='hearsay') return 'พยาน';
    if(t==='note') return 'หมายเหตุ';
    return 'หมายเหตุ';
  }
  function shortUrl(u){
    return (u||'').replace(/^https?:\/\//,'').slice(0,32)||'—';
  }

  function buildVenueStoryHtml(vid){
    var v=DATA.venues.find(function(x){return x.id===vid;});
    if(!v) return '';
    var ug=uniqueGuests(vid);
    var ex=DATA.exhibit[vid]||{};
    var src=srcOf(ex.sid);
    var href=src.url||'';
    var st=stampOf(ex.stamp,'document');
    var h='<header class="pc-head">แฟ้ม · สถานที่ · '+esc(ex.n||'—')+' · '+ug.people.length+' คน</header>';
    h+='<div class="pc-body"><span class="pc-rail" aria-hidden="true">สถานที่</span><div class="pc-main">';
    h+='<h2 class="pc-name">'+esc(v.name)+'</h2>';
    h+='<div class="pc-badges"><span class="badge">'+esc(v.place)+'</span>';
    h+='<span class="badge">'+esc(v.when)+'</span>';
    h+='<span class="badge">'+esc(v.kind||'')+'</span></div>';
    h+='<p class="pc-claim">'+esc(ex.quote||v.kind)+'</p>';
    h+='<div class="pc-meta">';
    if(ex.sid) h+='<span class="chip src-chip" data-sid="'+esc(ex.sid)+'" title="'+esc(src.title||'')+'">'+esc(ex.sid)+(ex.al?' · '+esc(ex.al):'')+'</span>';
    if(src.author) h+='<span>โดย: '+esc(src.author)+'</span>';
    h+='</div>';
    if(href) h+='<div class="sc-links" style="margin:.45rem 0"><a class="sc-go" href="'+esc(href)+'" target="_blank" rel="noopener">เปิดบทความ</a></div>';
    h+='<div class="pc-sec-lab">กล่าวว่าอยู่ที่นี่ · '+ug.people.length+' คน</div>';
    ug.people.forEach(function(name){
      var Ls=ug.seen[name], L=Ls[0];
      var gst=stampOf(L.tier,'note');
      h+='<button type="button" class="chip src-chip" data-vname="'+esc(name)+'" style="display:block;width:100%;text-align:left;margin:0 0 6px;padding:8px 10px;cursor:pointer">';
      h+='<b>'+esc(gst)+'</b> · '+esc(name)+'<br><small style="opacity:.75">'+esc((L.role||'').split('—')[0])+' · '+esc(Ls.map(function(x){return x.src;}).join(' · '))+'</small>';
      h+='</button>';
    });
    h+='<div class="pc-al-foot"><span class="pc-stamp">'+esc(st)+'</span></div>';
    h+='</div></div>';
    return h;
  }

  function relayVenueToStory(){
    var relay=window.HuaCaseCards && window.HuaCaseCards.relayToStory;
    if(!relay) return;
    if(!venueFocus){
      relay('close','',{});
      return;
    }
    var v=DATA.venues.find(function(x){return x.id===venueFocus;});
    relay('venue', buildVenueStoryHtml(venueFocus), {
      eb: 'สถานที่',
      title: v ? v.name : venueFocus
    });
  }

  function paintGuest(){
    if(isEmbed()){
      relayVenueToStory();
      return;
    }
    var panel=document.getElementById('venue-guest');
    if(!panel) return;
    if(!venueFocus){
      panel.classList.remove('open','has-claim');
      panel.innerHTML='';
      return;
    }
    var v=DATA.venues.find(function(x){return x.id===venueFocus;});
    var ug=uniqueGuests(venueFocus);
    var ex=DATA.exhibit[venueFocus]||{};
    var src=srcOf(ex.sid);
    var href=src.url||'';
    var col=VCOLOR[v.id]||'#1a5f6a';
    panel.style.setProperty('--vg-place', col);
    var h='<header class="vg-exhead">แฟ้ม · สถานที่ '+esc(ex.n||'—')+' · '+ug.people.length+' คน</header>';
    h+='<div class="vg-place-body">';
    h+='<span class="vg-rail vg-rail-place" aria-hidden="true">สถานที่</span>';
    h+='<div class="vg-place-main">';
    h+='<h2 class="vg-place-name">'+esc(v.name)+'</h2>';
    h+='<div class="vg-city">'+esc(v.place)+' · '+esc(v.when)+'</div>';
    h+='<p class="vg-quote">'+esc(ex.quote||v.kind)+'</p>';
    h+='<div class="vg-src-block">';
    h+='<span class="vg-sid">'+esc(ex.sid||'')+(ex.al?' · '+esc(ex.al):'')+'</span>';
    if(src.author) h+='<span class="vg-outlet">'+esc(src.author)+'</span>';
    if(src.title) h+='<span class="vg-cite">'+esc((src.title||'').slice(0,100))+'</span>';
    if(href) h+='<a class="vg-go" href="'+esc(href)+'" target="_blank" rel="noopener">เปิดบทความ</a>';
    h+='</div>';
    h+='<footer class="vg-foot"><span>'+esc(shortUrl(href))+'</span>';
    h+='<span class="vg-stamp">'+esc(stampOf(ex.stamp,'document'))+'</span></footer>';
    h+='</div></div>';
    h+='<div class="vg-list">';
    h+='<div class="vg-gb"><span class="vg-rail vg-rail-guest" aria-hidden="true">แขก</span><span class="vg-gb-lab">กล่าวว่าอยู่ที่นี่</span></div>';
    ug.people.forEach(function(name){
      var Ls=ug.seen[name], L=Ls[0];
      var onGraph=posOfName(name)!=null;
      var st=stampOf(L.tier, 'note');
      h+='<button type="button" class="vg-person'+(venueClaim&&venueClaim.name===name?' on':'')+'" data-name="'+esc(name)+'">';
      h+='<span class="vg-person-stamp">'+esc(st)+'</span>';
      h+='<span class="vg-person-body">';
      h+='<span class="vg-person-name">'+esc(name)+(onGraph?'':' <i class="off">นอกจุด</i>')+'</span>';
      h+='<small>'+esc((L.role||'').split('—')[0])+' · '+esc(Ls.map(function(x){return x.src;}).join(' · '))+'</small>';
      h+='</span></button>';
    });
    h+='</div><div class="vg-dock" id="venueDock"></div>';
    panel.innerHTML=h;
    panel.classList.add('open');
    panel.classList.toggle('has-claim', !!venueClaim);
    panel.querySelectorAll('.vg-person').forEach(function(btn){
      btn.addEventListener('click',function(){
        var name=btn.getAttribute('data-name');
        var L=uniqueGuests(venueFocus).seen[name][0];
        openVenueClaim(L);
      });
    });
    fillDock(venueClaim);
  }

  function fillDock(L){
    var dock=document.getElementById('venueDock');
    if(!dock) return;
    if(!L){
      dock.innerHTML=
        '<span class="vg-rail vg-rail-file" aria-hidden="true">แฟ้ม</span>'+
        '<p class="vg-ph">กดชื่อในสมุดแขก — เปิดข้อกล่าวหา + ที่มา</p>';
      return;
    }
    var src=srcOf(L.src);
    var href=src.url||'';
    var st=stampOf(L.tier, 'note');
    dock.innerHTML=
      '<span class="vg-rail vg-rail-file" aria-hidden="true">ชื่อคน</span>'+
      '<div class="vg-file-main">'+
        '<div class="vg-k">'+esc(L.al||'—')+' · '+esc(st)+'</div>'+
        '<h3 class="vg-file-name">'+esc(L.name)+'</h3>'+
        '<div class="vg-role">'+esc(L.role||'')+'</div>'+
        '<p class="vg-claim">'+esc(L.claim||'')+'</p>'+
        '<div class="vg-src-block">'+
          '<span class="vg-sid">'+esc(L.src||'')+(L.al?' · '+esc(L.al):'')+'</span>'+
          (src.author?'<span class="vg-outlet">'+esc(src.author)+'</span>':'')+
          (src.title?'<span class="vg-cite">'+esc((src.title||'').slice(0,100))+'</span>':'')+
          (href?'<a class="vg-go" href="'+esc(href)+'" target="_blank" rel="noopener">เปิดบทความ</a>':'')+
        '</div>'+
        '<footer class="vg-foot"><span>'+esc(shortUrl(href))+'</span>'+
        '<span class="vg-stamp vg-stamp-person">'+esc(st)+'</span></footer>'+
      '</div>';
  }

  function openVenueClaim(L){
    venueClaim=L;
    paintGuest();
    drawVenue();
    /* แฟ้มในสมุดแขก = การ์ดข้อกล่าวหา · ไม่ซ้อน ov คน (กดจุดบนกราฟได้ตามเดิม) */
    if(typeof closeCard==='function') try{ closeCard(); }catch(e){}
  }

  function dimDotsForVenue(){
    var hot={};
    if(venueFocus){
      uniqueGuests(venueFocus).people.forEach(function(name){
        var i=buildNameIndex()[name];
        if(i!=null) hot[i]=1;
      });
    }
    document.querySelectorAll('.dot[data-i]').forEach(function(el){
      el.classList.remove('venue-hot','venue-dim');
      if(!venueFocus) return;
      var i=+el.getAttribute('data-i');
      if(hot[i]) el.classList.add('venue-hot');
      else el.classList.add('venue-dim');
    });
  }

  function portOf(ven, anchors){
    var a=(anchors||venueAnchors())[ven.id];
    return {x:a.x, y:a.y, col:VCOLOR[ven.id], mode:'ring'};
  }

  function bindVenueHit(g, ven){
    g.attr('role','button').attr('tabindex','0').style('cursor','pointer').style('outline','none')
      .on('click', function(ev){
        if(ev && ev.stopPropagation) ev.stopPropagation();
        setVenue(ven.id, {toggle:true});
        try{ if(this.blur) this.blur(); }catch(e){}
      })
      .on('keydown', function(ev){
        if(ev.key==='Enter' || ev.key===' '){
          if(ev.preventDefault) ev.preventDefault();
          setVenue(ven.id, {toggle:true});
        }
      });
  }

  /* วงนอกน้ำหวาน — มุมเดิมทั้งดอก/พีระมิด */
  function drawOuterRing(petalsG, anchors){
    var cx=anchors._cx, cy=anchors._cy, R=anchors._ringR;
    if(cx==null) return;
    petalsG.append('circle')
      .attr('cx', cx).attr('cy', cy).attr('r', R)
      .attr('fill','none').attr('stroke','#1B2430')
      .attr('stroke-width',1.1).attr('opacity',0.14)
      .attr('stroke-dasharray','5 7')
      .attr('pointer-events','none');
  }
  function drawGapGuides(petalsG, anchors){
    var cx=anchors._cx, cy=anchors._cy;
    if(cx==null) return;
    DATA.venues.forEach(function(ven){
      var G=VENUE_GAPS[ven.id]; if(!G) return;
      var a0=G.a0, a1=G.a1; if(a1<a0) a1+=360;
      var r0=470, r1=620, n=12, d='', i, a, p;
      for(i=0;i<=n;i++){
        a=a0+(a1-a0)*i/n;
        p=polarXY(cx,cy,r1,a);
        d+=(i?'L':'M')+p[0].toFixed(1)+','+p[1].toFixed(1);
      }
      for(i=n;i>=0;i--){
        a=a0+(a1-a0)*i/n;
        p=polarXY(cx,cy,r0,a);
        d+='L'+p[0].toFixed(1)+','+p[1].toFixed(1);
      }
      d+='Z';
      petalsG.append('path').attr('d',d)
        .attr('fill', VCOLOR[ven.id]).attr('fill-opacity',0.07)
        .attr('stroke', VCOLOR[ven.id]).attr('stroke-opacity',0.45)
        .attr('stroke-width',1.1).attr('stroke-dasharray','5 4')
        .attr('pointer-events','none');
      var mid=(a0+a1)/2;
      var lp=polarXY(cx,cy,(r0+r1)/2, mid);
      petalsG.append('text')
        .attr('x', lp[0]).attr('y', lp[1])
        .attr('text-anchor','middle')
        .attr('fill', VCOLOR[ven.id])
        .attr('stroke','#FFFEF9').attr('stroke-width',3).attr('paint-order','stroke')
        .style('font','700 11px Sarabun,sans-serif')
        .text('ช่อง '+ (VSHORT[ven.id]||ven.name));
    });
  }

  function drawNectarTip(sel, ven, on, anchors, petalsG){
    var a=anchors[ven.id];
    var col=VCOLOR[ven.id];
    var n=uniqueGuests(ven.id).people.length;
    var deg=a.ang;
    var rad=(deg-90)*Math.PI/180;
    /* เกสรสั้นชิดจุด — ห้ามลากจากชั้นผู้สมัครทะลุป้ายในดอก */
    var tick=useE1()?34:90;
    var innerR=Math.max(a.R-tick, 0);
    var tipD='M'+(a.cx+Math.cos(rad)*innerR)+','+(a.cy+Math.sin(rad)*innerR)+
      ' L'+a.x+','+a.y;
    strokeOver(petalsG, tipD, col, on?1.05:0.55, on?0.55:(!venueFocus?0.22:0.08));

    /* ป้ายอยู่ในวง — ชิดจุดด้านในรัศมี (ไม่โผล่นอกกลีบทับการ์ด/กันทับชื่ออื่น) */
    var low=a.y>1020;
    var lx, ly1, ly2, anchor;
    var stagger={krungsri:-6, thara:10, pullman:-4, maruay:8}[ven.id]||0;
    if(low){
      lx=a.x; ly1=a.y+18; ly2=a.y+32; anchor='middle';
    }else{
      var labR=Math.max(a.R-(useE1()?52:60), a.R*0.82);
      var labP=polarXY(a.cx, a.cy, labR, a.ang);
      lx=labP[0]; ly1=labP[1]-2+stagger; ly2=labP[1]+14+stagger;
      /* ป้ายอยู่ด้านในจุด → anchor หันเข้าจุด */
      anchor=(labP[0]<a.x)?'end':(labP[0]>a.x)?'start':'middle';
    }
    var g=sel.append('g').attr('class','venue-key').attr('data-venue',ven.id)
      .attr('opacity', (!venueFocus || on)?1:0.32);
    bindVenueHit(g, ven);
    var a1=useSlotA1();
    var e1=useE1();
    g.append('circle').attr('cx',a.x).attr('cy',a.y).attr('r', on?7:5.6)
      .attr('fill', col)
      .attr('stroke', '#FFFEF9').attr('stroke-width', on?1.6:1.2)
      .attr('opacity', on?1:(!venueFocus?0.92:0.4));
    g.append('circle').attr('cx',a.x).attr('cy',a.y).attr('r', on?2.2:1.8)
      .attr('fill', '#FFFEF9').attr('opacity', 0.95)
      .attr('pointer-events','none');
    g.append('text')
      .attr('x', lx).attr('y', ly1)
      .attr('text-anchor', anchor)
      .attr('fill', on?'#1B2430':'#2a3340')
      .attr('stroke','#FFFEF9').attr('stroke-width',4).attr('paint-order','stroke')
      .style('font', (a1||e1)?'700 16px Sarabun,sans-serif':'700 14px Sarabun,sans-serif')
      .text(VSHORT[ven.id]||ven.name);
    g.append('text')
      .attr('x', lx).attr('y', ly2)
      .attr('text-anchor', anchor)
      .attr('fill','#5C6672')
      .attr('stroke','#FFFEF9').attr('stroke-width',3).attr('paint-order','stroke')
      .style('font','600 11px ui-monospace,Menlo,monospace')
      .attr('opacity', (!venueFocus || on)?1:0.35)
      .text(n+' คน');
    if(useSlotA1() && slotUi()==='C'){
      var tw=72, th=28;
      var tx=a.x-tw/2, ty=low?a.y-48:a.y-36;
      g.append('rect').attr('x',tx).attr('y',ty).attr('width',tw).attr('height',th)
        .attr('rx',2).attr('fill','#FFFEF9').attr('stroke',col).attr('stroke-width',1.6)
        .attr('pointer-events','none');
      g.append('text').attr('x',a.x).attr('y',ty+18)
        .attr('text-anchor','middle').attr('fill',col)
        .style('font','700 13px Sarabun,sans-serif')
        .attr('pointer-events','none')
        .text(VSHORT[ven.id]||ven.name);
    }
    return portOf(ven, anchors);
  }

  /* เส้นโรงแรม↔คน — เส้นใยเชิงขั้วรอบแกนดอก (ชุดเดียวกับเส้นสำนวน) */
  function curveInward(x1,y1,x2,y2, cx, seed){
    var cy=(typeof CY==='number')?CY:618;
    if(typeof window.huaPolarFilament==='function')
      return window.huaPolarFilament([x1,y1],[x2,y2], cx, cy, seed==null?0.37:seed);
    var dx=x2-x1, dy=y2-y1;
    var len=Math.hypot(dx,dy)||1;
    var px=-dy/len, py=dx/len;
    var u=seed==null?0.37:seed;
    var bulge=(0.36+0.24*Math.sin(u*6.2))*Math.min(200, len*0.62);
    if(u>0.5) bulge=-bulge;
    var c1x=x1+dx*0.24+px*bulge, c1y=y1+dy*0.24+py*bulge;
    var c2x=x1+dx*0.76-px*bulge*1.05, c2y=y1+dy*0.76-py*bulge*1.05;
    return 'M'+x1.toFixed(1)+','+y1.toFixed(1)+
      ' C'+c1x.toFixed(1)+','+c1y.toFixed(1)+' '+c2x.toFixed(1)+','+c2y.toFixed(1)+
      ' '+x2.toFixed(1)+','+y2.toFixed(1);
  }

  function captionBoxPos(ven, a, vb, i){
    var x0=vb[0]||0, y0=vb[1]||0, vw=vb[2]||1660, vh=vb[3]||1920;
    var bw=168, bh=52, p=22, bottom=110;
    var park=e1Park();
    if(park==='B'){
      return {x:x0+vw-bw-p, y:y0+p+i*60, bw:bw, bh:bh};
    }
    if(park==='C'){
      var p2=polarXY(a.cx, a.cy, a.R+96, a.ang);
      var x=p2[0]-bw/2, y=p2[1]-bh/2;
      x=Math.max(x0+p, Math.min(x0+vw-bw-p, x));
      y=Math.max(y0+p, Math.min(y0+vh-bh-bottom, y));
      return {x:x, y:y, bw:bw, bh:bh};
    }
    var corner={krungsri:'nw', thara:'ne', pullman:'se', maruay:'sw'}[ven.id]||'se';
    if(corner==='ne') return {x:x0+vw-bw-p, y:y0+p, bw:bw, bh:bh};
    if(corner==='se') return {x:x0+vw-bw-p, y:y0+vh-bh-bottom, bw:bw, bh:bh};
    if(corner==='sw') return {x:x0+p, y:y0+vh-bh-bottom, bw:bw, bh:bh};
    return {x:x0+p, y:y0+p, bw:bw, bh:bh};
  }
  function drawCallouts(sel, petalsG, anchors, vb){
    DATA.venues.forEach(function(ven, i){
      var a=anchors[ven.id]; if(!a) return;
      var col=VCOLOR[ven.id];
      var on=venueFocus===ven.id;
      var idle=!venueFocus;
      var dim=!!venueFocus && !on;
      var box=captionBoxPos(ven, a, vb, i);
      var mx=box.x+box.bw/2, my=box.y+box.bh/2;
      var lead='M'+a.x+','+a.y+' L'+mx+','+my;
      strokeOver(petalsG, lead, col, on?1.5:1.05, dim?0.12:(on?0.85:0.5));
      var g=sel.append('g').attr('class','venue-callout').attr('data-venue',ven.id)
        .attr('opacity', dim?0.22:1);
      bindVenueHit(g, ven);
      g.append('rect').attr('x',box.x).attr('y',box.y).attr('width',box.bw).attr('height',box.bh)
        .attr('rx',2).attr('fill','#FFFEF9').attr('stroke',col).attr('stroke-width', on?2:1.4);
      g.append('text').attr('x',box.x+10).attr('y',box.y+20)
        .attr('fill','#1B2430').style('font','700 14px Sarabun,sans-serif')
        .text(VSHORT[ven.id]||ven.name);
      g.append('text').attr('x',box.x+10).attr('y',box.y+38)
        .attr('fill','#5C6672').style('font','600 11px Sarabun,sans-serif')
        .text((ven.kind||'')+' · '+uniqueGuests(ven.id).people.length+' คน');
    });
  }

  function drawVenue(){
    var g=ensureLayer();
    if(!g || typeof d3==='undefined') return;
    var sel=d3.select(g);
    sel.selectAll('*').remove();
    /* embed ก็วาดจุดน้ำหวาน — คลิกแล้วส่งแฟ้มไป story-card */
    g.setAttribute('pointer-events','all');

    var flower=isFlowerPhase();
    var anchors=venueAnchors();
    var svg=document.querySelector('.wrap svg') || document.querySelector('svg');
    var vb=(svg && svg.getAttribute('viewBox') || '0 -40 1660 1920').split(/[\s,]+/).map(Number);

    /* ไม่โชว์หัวข้อวงน้ำหวาน — แย่งที่ป้ายโรงแรม */
    var ringCx=(anchors.krungsri&&anchors.krungsri.cx)||620;

    var petals=sel.append('g').attr('class','venue-petals').attr('pointer-events','none');
    var edgeHost=document.getElementById('venueEdgeLayer');
    if(edgeHost){
      while(edgeHost.firstChild) edgeHost.removeChild(edgeHost.firstChild);
    }
    var edges=edgeHost
      ? d3.select(edgeHost).append('g').attr('class','venue-edges').attr('pointer-events','none')
      : sel.append('g').attr('class','venue-edges').attr('pointer-events','none');
    var orphans=sel.append('g').attr('class','venue-orphans').attr('pointer-events','none');
    var cards=sel.append('g').attr('class','venue-cards');
    var marks=sel.append('g').attr('class','venue-marks').attr('pointer-events','none');

    drawOuterRing(petals, anchors);
    if(useSlotA1() && slotUi()==='B') drawGapGuides(petals, anchors);

    var ports={};
    DATA.venues.forEach(function(ven){
      ports[ven.id]=drawNectarTip(cards, ven, venueFocus===ven.id, anchors, petals);
    });

    var guestName=egoGuestName();
    var idleOp=flower?0.22:0.08;
    var orphanCount={};
    DATA.venues.forEach(function(ven){
      var port=ports[ven.id];
      var focused=venueFocus===ven.id;
      var idle=!venueFocus;
      var ug=uniqueGuests(ven.id);
      if(!orphanCount[ven.id]) orphanCount[ven.id]=0;
      var venA=anchors[ven.id];
      var radA=((((venA&&venA.ang)||0)-90)*Math.PI/180);
      var tx=-Math.sin(radA), ty=Math.cos(radA);
      ug.people.forEach(function(name){
        var L=ug.seen[name][0];
        var inGraph=posOfName(name);
        var p=inGraph;
        var personHot=!!guestName && guestName===name;
        if(!p){
          if(!focused) return;
          var slot=orphanCount[ven.id]++;
          var nOr=Math.max(1, ug.people.filter(function(nm){ return !posOfName(nm); }).length);
          var along=(slot-(nOr-1)/2)*16;
          p=[
            port.x+tx*along+Math.cos(radA)*14,
            port.y+ty*along+Math.sin(radA)*14
          ];
          orphans.append('circle').attr('cx',p[0]).attr('cy',p[1]).attr('r',3.2)
            .attr('fill',port.col).attr('stroke','#1B2430').attr('stroke-width',0.8)
            .attr('opacity', 0.9);
          orphans.append('text')
            .attr('x', p[0]+(port.x>=ringCx?7:-7)).attr('y', p[1]+3)
            .attr('text-anchor', port.x>=ringCx?'start':'end')
            .attr('fill','#1B2430')
            .attr('stroke','#FFFEF9').attr('stroke-width',3).attr('paint-order','stroke')
            .style('font','600 11px Sarabun,sans-serif')
            .text(name.split(/\s+/)[0]);
          return;
        }
        var personDim=focused && venueClaim && venueClaim.name!==name;
        var edgeOp=focused?(personDim?0.12:0.78):(personHot?0.72:(idle?idleOp:0.04));
        if(edgeOp<0.12) return;
        var edgeW=focused?(personDim?0.7:1.05):(personHot?0.95:0.55);
        var edgeD=curveInward(port.x, port.y, p[0], p[1], ringCx, nameSeed(ven.id+'|'+name));
        strokeOver(edges, edgeD, port.col, edgeW, edgeOp, focused||personHot);
        if(focused && !personDim && L.src){
          edges.append('text')
            .attr('x',(port.x+p[0])/2).attr('y',(port.y+p[1])/2-3)
            .attr('text-anchor','middle').attr('fill','#1B2430')
            .attr('stroke','#F6F4EE').attr('stroke-width',3).attr('paint-order','stroke')
            .style('font','700 9.5px ui-monospace,Menlo,monospace')
            .text(L.src);
        }
        if(!flower && focused && !personDim && posOfName(name)){
          marks.append('circle').attr('cx',p[0]).attr('cy',p[1]).attr('r',10)
            .attr('fill','none').attr('stroke',port.col)
            .attr('stroke-width',1.4).attr('opacity',0.75);
        }
      });
    });
    dimDotsForVenue();
    try{
      window.__venueSlots={
        a1: useSlotA1(), e1: useE1(), park: e1Park(), ui: slotUi(),
        pullman: anchors.pullman && {x:+anchors.pullman.x.toFixed(0), y:+anchors.pullman.y.toFixed(0), ang:+anchors.pullman.ang.toFixed(1), R:+anchors.pullman.R.toFixed(0)},
        thara: anchors.thara && {ang:+anchors.thara.ang.toFixed(1)},
        vb: vb
      };
    }catch(e){}
  }

  function setVenue(id, opts){
    opts=opts||{};
    if(opts.toggle && venueFocus===id) venueFocus=null;
    else venueFocus=id||null;
    venueClaim=null;
    if(typeof closeCard==='function' && !venueFocus) try{closeCard();}catch(e){}
    paintBar();
    paintGuest();
    drawVenue();
  }
  window.setHuaVenue=function(id){ setVenue(id, {toggle:false}); };
  window.clearHuaVenue=function(){ setVenue(null); };

  
  function injectVenueCSS(){
    if(document.getElementById('venue-layer-css')) return;
    var s=document.createElement('style');
    s.id='venue-layer-css';
    s.textContent=`
.dot.venue-dim{opacity:.1 !important}
.dot.venue-hot{opacity:1 !important;stroke:#B3261E;stroke-width:2.8}
.venue-key,.venue-key:focus,.venue-key:focus-visible{outline:none !important}
html.morph-on .dot.venue-hot{filter:drop-shadow(0 0 3px rgba(179,38,30,.55))}
#venue-bar{display:none;position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:99;
  align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;max-width:min(96vw,920px);
  background:rgba(27,36,48,.88);color:#F6F4EE;padding:5px 8px;font:500 10.5px ui-monospace,Menlo,monospace;
  border:1px solid rgba(27,36,48,.5)}
html.v-morph #venue-bar{display:flex}
html.v-embed #venue-guest{display:none !important}
html.v-embed #venue-bar{display:flex;bottom:8px}
#venue-bar .venue-lab-bar{opacity:.65;padding:0 6px;letter-spacing:.04em}
#venue-bar button{background:transparent;color:#E8E5DC;border:1px solid rgba(232,229,220,.28);
  border-radius:2px;padding:5px 9px;cursor:pointer;font:600 11px Sarabun,sans-serif;min-height:32px}
#venue-bar button::before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;
  background:var(--vc,#949CA8);margin-right:5px;vertical-align:middle}
#venue-bar button[data-venue=""]::before{display:none}
#venue-bar button:focus-visible{outline:2px solid #F2D024;outline-offset:1px}
#venue-bar button i{display:none}
#venue-bar button.on{background:#F2D024;color:#1c1814;border-color:#F2D024}
/* สมุดแขก = ผนังหลักฐานสถานที่ (teal) · แฟ้มรายคน = ข้อกล่าวหา (แดง) · ลายเซ็น = แสตมป์ตะแคง + รางหัวข้อ */
#venue-guest{display:none;position:fixed;top:52px;right:10px;width:min(352px,calc(100vw - 20px));max-height:calc(100vh - 150px);
  overflow:hidden;z-index:100;background:#FFFEF9;border:1.5px solid #1B2430;border-left:3px solid var(--vg-place,#1a5f6a);
  color:#1B2430;box-shadow:4px 4px 0 rgba(27,36,48,.14);font:400 14px/1.45 Sarabun,sans-serif}
#venue-guest.open{display:flex;flex-direction:column}
html.theme-dark #venue-guest{background:#161a1f;color:#E8E5DC;border-color:#949CA8;border-left-color:var(--vg-place,#7bab9f)}
#venue-guest .vg-exhead{padding:.55rem .75rem;background:#1B2430;color:#F6F4EE;
  font:600 10.5px/1.3 ui-monospace,Menlo,monospace;letter-spacing:.04em;flex:0 0 auto}
html.theme-dark #venue-guest .vg-exhead{background:#0e1014}
#venue-guest .vg-place-body{display:grid;grid-template-columns:22px 1fr;gap:0;padding:.75rem .75rem .65rem;
  background:#F3F7F6;border-bottom:1px solid rgba(27,36,48,.12);flex:0 0 auto}
html.theme-dark #venue-guest .vg-place-body{background:#12181a;border-color:rgba(232,229,220,.12)}
#venue-guest .vg-rail{display:flex;align-items:center;justify-content:center;writing-mode:vertical-rl;
  transform:rotate(180deg);font:700 10px ui-monospace,Menlo,monospace;letter-spacing:.14em;line-height:1;
  user-select:none;opacity:.9}
#venue-guest .vg-rail-place{color:var(--vg-place,#1a5f6a)}
#venue-guest .vg-rail-guest{color:#8a6a2a;margin-right:6px}
#venue-guest .vg-rail-file{color:#B3261E}
#venue-guest .vg-place-name{font:700 1.35rem/1.1 'Noto Serif Thai',serif;margin:0 0 .1rem;
  text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1.5px}
#venue-guest .vg-city{font:500 11px ui-monospace,Menlo,monospace;color:#5C6672;margin-bottom:.55rem}
html.theme-dark #venue-guest .vg-city{color:#9aa3ad}
#venue-guest .vg-quote{font:500 .95rem/1.4 Sarabun,sans-serif;border-top:1px solid rgba(27,36,48,.18);
  padding-top:.55rem;margin:0 0 .55rem}
#venue-guest .vg-quote::before{content:"“";color:#B3261E;font-family:'Noto Serif Thai',serif;font-size:1.25rem;line-height:0;margin-right:2px}
#venue-guest .vg-src-block{padding-top:.5rem;border-top:1px dashed rgba(27,36,48,.22);font-size:.8rem;line-height:1.35}
#venue-guest .vg-sid{font:600 10.5px ui-monospace,Menlo,monospace;color:#B98B00;display:block}
#venue-guest .vg-outlet{font:700 12px Sarabun,sans-serif;display:block;margin:.15rem 0}
#venue-guest .vg-cite{color:#5C6672;font-size:.78rem;display:block}
html.theme-dark #venue-guest .vg-cite{color:#9aa3ad}
#venue-guest .vg-go{display:inline-block;margin-top:.4rem;padding:5px 9px;border:1px solid #1B2430;
  background:#FFFEF9;color:#1B2430;text-decoration:none;font:700 11.5px Sarabun,sans-serif}
#venue-guest .vg-go:hover,#venue-guest .vg-go:focus-visible{background:#1B2430;color:#F6F4EE}
html.theme-dark #venue-guest .vg-go{border-color:#E8E5DC;background:#1a1d22;color:#E8E5DC}
html.theme-dark #venue-guest .vg-go:hover{background:#E8E5DC;color:#1a1d22}
#venue-guest .vg-foot{margin-top:.55rem;display:flex;justify-content:space-between;align-items:flex-end;
  font:600 10.5px ui-monospace,Menlo,monospace;color:#5C6672;gap:6px;flex-wrap:wrap}
#venue-guest .vg-stamp{border:2px solid #B3261E;color:#B3261E;padding:2px 7px;
  transform:rotate(-7deg);font:700 11px Sarabun,sans-serif;letter-spacing:.02em;flex-shrink:0}
#venue-guest .vg-stamp-person{border-color:#8B1E18;color:#8B1E18}
#venue-guest .vg-list{padding:.45rem .55rem .55rem;display:flex;flex-direction:column;gap:5px;overflow:auto;flex:1;min-height:0;
  background:#FFFEF9}
html.theme-dark #venue-guest .vg-list{background:#161a1f}
#venue-guest .vg-gb{display:flex;align-items:center;gap:2px;margin:.05rem 0 .25rem;min-height:28px}
#venue-guest .vg-gb-lab{font:600 10px ui-monospace,Menlo,monospace;color:#8a6a2a;letter-spacing:.06em}
#venue-guest .vg-person{display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:center;text-align:left;
  border:1px solid rgba(27,36,48,.18);background:#FFFEF9;padding:7px 8px;cursor:pointer;color:inherit;min-height:46px}
html.theme-dark #venue-guest .vg-person{border-color:rgba(232,229,220,.18);background:#1a1d22}
#venue-guest .vg-person:hover{border-color:#1B2430;background:#fff}
html.theme-dark #venue-guest .vg-person:hover{border-color:#E8E5DC;background:#252830}
#venue-guest .vg-person:focus-visible{outline:2px solid #F2D024;outline-offset:1px}
#venue-guest .vg-person.on{background:#2A1514;color:#F6F4EE;border-color:#B3261E}
#venue-guest .vg-person-stamp{border:1.5px solid #B3261E;color:#B3261E;padding:3px 5px;
  transform:rotate(-8deg);font:700 10px Sarabun,sans-serif;letter-spacing:.02em;line-height:1.1;flex-shrink:0}
#venue-guest .vg-person.on .vg-person-stamp{border-color:#F2D024;color:#F2D024}
#venue-guest .vg-person-name{display:block;font:700 13px/1.25 'Noto Serif Thai',serif;
  text-decoration:underline;text-underline-offset:2px;text-decoration-thickness:1px}
#venue-guest .vg-person small{display:block;font:500 11px ui-monospace,Menlo,monospace;opacity:.7;margin-top:2px}
#venue-guest .vg-person .off{font:600 10px ui-monospace,Menlo,monospace;color:#B98B00;font-style:normal;text-decoration:none}
#venue-guest .vg-dock{border-top:2px solid #B3261E;padding:.7rem .75rem .8rem;background:#FBF3F0;
  display:grid;grid-template-columns:22px 1fr;gap:0;flex:0 0 auto}
html.theme-dark #venue-guest .vg-dock{background:#1c1414;border-color:#B3261E}
#venue-guest .vg-file-main{min-width:0}
#venue-guest .vg-k{font:600 10px ui-monospace,Menlo,monospace;color:#B98B00;letter-spacing:.05em}
#venue-guest .vg-file-name{font:700 1.1rem/1.15 'Noto Serif Thai',serif;margin:.15rem 0 .2rem;
  text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1.5px}
#venue-guest .vg-role{font-size:12px;color:#5C6672;margin-bottom:.35rem}
html.theme-dark #venue-guest .vg-role{color:#9aa3ad}
#venue-guest .vg-claim{font-size:.9rem;margin:0 0 .45rem;border-top:1px solid rgba(179,38,30,.2);padding-top:.45rem}
#venue-guest .vg-claim::before{content:"“";color:#B3261E;font-family:'Noto Serif Thai',serif;font-size:1.15rem;line-height:0;margin-right:2px}
#venue-guest .vg-ph{opacity:.7;font-size:.9rem;margin:.35rem 0;grid-column:2}
/* เปิดแฟ้มคน — พับ quote/ที่มาของสถานที่ · เหลือรายชื่อเลื่อนได้ · แฟ้มเลื่อนเอง */
#venue-guest.has-claim .vg-quote,
#venue-guest.has-claim .vg-place-body .vg-src-block,
#venue-guest.has-claim .vg-place-body .vg-foot{display:none}
#venue-guest.has-claim .vg-place-body{padding:.55rem .75rem .45rem}
#venue-guest.has-claim .vg-list{min-height:132px;flex:1 1 140px}
#venue-guest.has-claim .vg-dock{max-height:42%;overflow:auto;min-height:0}
@media(prefers-reduced-motion:reduce){#venue-guest .vg-stamp,#venue-guest .vg-person-stamp{transform:none}}
`;
    document.head.appendChild(s);
  }

  function mount(){
    injectVenueCSS();
    if(document.getElementById('venue-bar')) return;
    var nav=document.createElement('nav');
    nav.id='venue-bar';
    nav.setAttribute('aria-label','สถานที่ในคดี');
    var html='<span class="venue-lab-bar">สถานที่</span>';
    html+='<button type="button" data-venue="">ทั้งหมด</button>';
    DATA.venues.forEach(function(v){
      var n=uniqueGuests(v.id).people.length;
      html+='<button type="button" data-venue="'+v.id+'" style="--vc:'+VCOLOR[v.id]+'">'+v.name+' · '+n+'</button>';
    });
    nav.innerHTML=html;
    document.body.appendChild(nav);
    nav.querySelectorAll('button[data-venue]').forEach(function(b){
      b.addEventListener('click',function(){
        var id=b.getAttribute('data-venue');
        if(!id){ window.clearHuaVenue(); return; }
        setVenue(id, {toggle:true});
      });
    });

    var panel=document.createElement('aside');
    panel.id='venue-guest';
    panel.setAttribute('aria-live','polite');
    document.body.appendChild(panel);

    ensureLayer();
    var _apply=window.applyT;
    if(typeof _apply==='function'){
      window.applyT=function(){
        _apply.apply(this, arguments);
        drawVenue();
      };
    }
    paintBar();
    var q=new URLSearchParams(location.search).get('venue');
    if(q && VCOLOR[q]) setTimeout(function(){ setVenue(q, {toggle:false}); }, 420);
    else setTimeout(drawVenue, 420);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
