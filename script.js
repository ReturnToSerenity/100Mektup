document.addEventListener('DOMContentLoaded', () => {
  const mektuplar = [
    "❤️ “Güzelligimmm.. Orada ilk günlerindesin ve her şey yepyeni olduğu için biraz korkutucu olabilir ama ben senin cesaretine, gücüne hep hayrandım bilirsin... Korkacak bir şey yok çünkü ben herrrr zaman yanındayım. Hep bir telefon kadar uzağındayım. Seni çok seviyorum yavru kuşummmmm",
    "🌅 Bugün gün doğarken aklıma gelen ilk şey sensin... (Tabii ki sadece bugün değil her gün ilk düşüncem sensin..",
    "🌃​ Ne zormuş senden uzak kalmak.. Her saniye seni özlüyor senin hasretinle yanıp tutuşuyorum.. Hayattan artık tek dileğim bir daha asla bizi uzak koymasın birbirimizden.. Tabii ki birbirimizden uzak olmamız sevgimizden hiçbir şey azaltmaz güzelliğim.. Aramıza çok daha uzun süreli bir mesafe girseydi yine başarırdık bu seferkini atlatacağımız gibi.. Ancak yine de lütfen bir daha birbirimizden böyle uzak kalmayalım biricik sevdicegimmm",
    "🌙 Gece yıldızlara baktığımda hep seninle olmayı diliyorum biliyor musun...",
    "😍​Bugün ne kadar da güzelsin bebegim... (Tabii benim Zeynep'im her zaman benim için en nadide güzelliktir..",
    "🌻 Gün boyu gülümse bitanem.. Günün her anındaki o eşsiz gülümsemene ortak olacağım ben deee :)",
    "🍒Sen hep güzelliğini içinde taşırsın... Bu yüzdendir senin kalbinde olmaktan duyduğum mutluluk da..",
    "Zeynep kelimesinin benim için sözlük anlamı: Fiziksel olarak yakınımda olmasa bile kalbimi sımsıcak yapan, tüm ömrümü ellerine öylece teslim edeceğim kişi..",
    "Bana dönerli tost yedirdiğin gün geliverdi aklıma. Manisa'ya ayak basar basmaz tekrar gidelim birlikte. Hesabı öderken de DÖNERLİ TOST diye söyleyeceğim kızma diye.",
    "Bu notu okuduktan sonra açıver kameranı ve bana o güzeller güzeli gözlerinin resmini gönderrrr",
    "Sen kızlarla arkadas olcan ben erkeklerle! kimseler yanaşamaz karima hepsini bulur alırım ifadelerini!!",
    "Bana ilk defa ‘seni seviyorum’ dediğin an hâlâ kulaklarımda yankılanıyor biliyor musun.. Bir daha binlerce kez duymak istiyorum.",
    "Yanındayım bitanem.. Her zaman yanındayım.. Ve söz veriyorum her zaman da yanında olacağım asla yalnız yürümeyeceksin ben yaşadığım sürece. Seni çok seviyorummmmmm",
    "Başarıyorsun bitanemmmm başarıyorsunnn :) orada birsürü günü geride bıraktın ve günden güne bana sarılmaya daha da yaklaşıyorsunnn. Her şeyin üstesinden geleceğini biliyorum bebeğim çünkü biliyorum ki sen neye elini atsan güzelleştiriyorsunnn..",
    "Hadi yaptığım ilk eşşşekliklerden birine gidelim. HALA SANA PİKNİĞE GİDER GİBİ OLMUŞSUN DEDİĞİM İÇİN UTANIYORUM.. Ha tabii bi yandan da gülüyorum (gülmek zorundayım çünkü hayat boyu laf sokabileceğin bir eşşeklik ettim",
    "Ben burada suşisiz, dönerli tostsuz, dondurmalı suflesiz bir hayatta hayatta kalmaya çalışıyorum çok zor durumdayım (yazar burada sensiz hayatta kalmak çok zor demek istiyor tabii..",
    "Eğer oralarda birisi sana I like your smile cart curt bir seyler zırvalarsa yapıştır hemen HASSSİKTİR ORDANı (Öyle haşmetli bir söz ki Türkçe söylesen de İngilizcesi anlaşılır",
    "Merak etme senin sevgilin her sabah seni uzakta da olsa notlarıyla gülümsetmesini bilir :) HA tabii arada ucubece cringe notlar da yazıyorum ama napalım işte bu da benim tarzım (begenmek zorundasin",
    "Bu notu okurken kollarımda olmanın verdiği huzuru düşünmeni istiyorum cicek kokulum... Birlikte yatağa uzanmamızı, kokunu öylece içime çekişimi, kollarımın altına girip göğsümü yastık olarak kullanışını, gece susayıp uyandığında hemen kalkıp koşa koşa sana bir bardak su getirişimi, tuvalete seni kucağıma alıp götürüşümü, karnın ağrıdığında yatakta arkana geçip sana destek oluşumu sana yastık oluşumu sıcak pet şişeyi sabaha kadar karnında tutuşumu hatırla bitanem.. Birbirimize hikayeler anlatarak sohbetler ederek uykuya dalışımızı ve öpüşerek uyanmamızı hatırla.. Benim bir an olsun aklımdan çıkmıyor işte tüm bunlar güzeller güzeli Zeynepimmmm..",
    "Burası bir nevi günlük gibi ama içinde hep “Zeynep” geçen bir günlük... Benim kafamın içi de öyle bir şey zaten içinde hep Zeynep var.",
    "Ne güzel gülüyon sen öyle kız kurban olurum senin gülüşüne fistikkkkk",
    "Benim hanim öyle harbi bi kızdır ki hem elinden her iş gelir hem de kodummu otutturur (bana korku salmasını iyi bilir her an tetikte olmak lazım",
    "Seni hak edecek ne yaptım bilmiyorum ama iyi ki yapmışım iyi ki seninleyim iyi ki varsin bitanemmmm",
    "HEM COK GÜZELSİN HEM COK KOMİKSİN HEM DUDAKLARİN COK ÖPÜLESİ ÜSTÜNE ÜSTLÜK DE BENİ SEVİYOSUN COK GARİP AMA HARİKA BİSEY COK MUTLUYUM BEN YA",
    "Ömre Bedelsin",
    "Seni her saniye daha da çok özlüyorum.. Ve fark ediyorum ki… özlemek, seninle geçen her anın ne kadar kıymetli olduğunu anlamanın bir başka yoluymuş.. Zeynep, sen benim en değerli zamanım olmuşsun da benim haberim yokmuş.. Seni çok ama çoook seviyorummm",
    "Sana sarılmayı o kadar özledim ki... Yastığı alıp sana sarılır gibi sımsıkı sarılıyorum.. Ama yastıklar ne senin kadar yumuşak ne de senin gibi çiçek kokulu...",
    "Senin yanın öyyyle huzurlu ki sen fiziken yanımda olmadığın zamanlar bile o huzur bana sarılıp “sabret, dönecek” diyor..",
    "Sensiz her şey eksik her şey yarım hissettiriyor biliyor mmusun yavrum..",
    "BENDEN BASKA KİMSE KARİMA İLTİFAT FALAN EDEMEZ HA YOK KİBARLIKMIŞ YOK ŞUYMUŞ BUYMUŞ BEN ANLAMAM BEN BUYUM ANADOLULUYUM!!! KİMSE KARİMLA MUHABBETE GİRMESİN!",
    "Sana yazdığım bu 100 not aslında sadece bir bahaneydi fistigim.. Seni her gün sevdiğimi hem sana hem kendime tekrar tekrar anlatmak istedim... Yazdıkça daha çok seviyorum seni.. Okudukça daha çok seviyorsun beni..",
    "Bana ilk iş günün bittiği an koşa koşa ilk yazdığın o mesaj... Bana yazdın ki Elimize düzgün bir iş ve biraz birikim aldığımız an seninle evlenicem seni gözlerim dolacak kadar özlüyorum... KIYAMAM BEN SANAAA KUZUSUM BENİMMM inan bana ben de her saniye tıpkı senin gibi bunları düşünüyorum.. Seni her şeyden çok sevdiğimi biliyordum ben ve aniden sen de beni aslında ne kadar da çok sevdiğini anımsadın.. Bu mesajının sıcaklığı hep benimle olacak tıpkı hep senin o aşk dolu huzurlu sıcaklığını hissedişim gibi..",
    "Yanımda osurduğunda koşa koşa popişini koklamaya gelişimi havayı elimle kendime çekip gülüşmemizi özledim (evet ne kadar ucube anımız varsa hepsini özledim",
    "İnsan uzak kalınca normalde farkında olmadığı şeyleri bile özlüyormuş..",
    "El ele yürürken aniden elini kendi götüme değdirmeyi özledim EVET BEN BUYUM ÜZGÜNÜM (LÜTFEN UZAK DUR BENDEN DEME",
    "BİZ EVLENİCEZ HAA HABERİN OLSUN",
    "HEY KIDSSSSS İŞTE BABANIZ BANA İNTERNET SİTESİ YAPIP BU NOTLARI YAPMIŞTI (HEPSİNİ GÖSTEREMEYİZ ASKİM EL ELE YÜRÜRKEN ELİNİ GÖTÜME GÖTÜRÜŞÜMÜ BİLMEMELİLER",
    "Gözlerine bakarken gözlerim dolacak kadar çok seviyorum seni",
    "HATIRLATMA: Ben her zaman yanındayım bunu unutma bal böcegim",
    "Nasıl da peşinden Manisalara geldim HAH",
    "Gitmeden hemen önce seni 100 kere öpmüştüm.. Keşke 1000 kere öpseydim (yine yetmeyecekti ama en azından 900 kere daha öpmüş olacaktım..",
    "Senle evdeyken götü kollamam gerekse de seni çok özledim... (ne yalan söyleyeyim hoşuma da gidiyordu (HAYIR GEY DEĞİLİM",
    "Bugün sabah kakamızı aynı anda yapalım!!!",
    ""



    // … 6.-100. mektup
  ];
  const baslangicTarihi = new Date("2025-07-01");
  const specialDates = {
    "2025-09-25": "Sevgililik Yıldönümü",
    "2025-08-30": "Doğum Günü"
  };

  const todayStr = new Date().toISOString().slice(0,10);
  const fmt = d => d.toISOString().slice(0,10);

  const envelopesContainer = document.getElementById('envelopesContainer');
  const archiveContainer   = document.getElementById('archiveContainer');
  const toggleArchiveBtn   = document.getElementById('toggleArchiveButton');
  const modalOverlay       = document.getElementById('modalOverlay');
  const modalDate          = document.getElementById('modalDate');
  const modalText          = document.getElementById('modalText');
  const modalClose         = document.getElementById('modalClose');

  let opened = JSON.parse(localStorage.getItem('openedLetters') || '[]');
  opened.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.date} → ${item.text.slice(0,30)}...`;
    div.classList.add('archive-item');
    div.onclick = () => openLetter(item.date, item.text);
    archiveContainer.appendChild(div);
  });

  mektuplar.forEach((text,i) => {
    const date = new Date(baslangicTarihi.getTime() + i*86400000);
    const ds = fmt(date);
    const env = document.createElement('div');
    env.classList.add('envelope');
    if (specialDates[ds]) { env.classList.add('red'); env.title = specialDates[ds]; }
    if (opened.some(x=>x.date===ds))         env.classList.add('opened');
    else if (ds===todayStr)                    env.classList.add('today');
    else                                       env.classList.add('locked');
    env.onclick = () => {
      if (ds!==todayStr || opened.some(x=>x.date===ds)) return;
      openLetter(ds,text);
      env.classList.replace('today','opened');
      opened.push({date:ds,text});
      localStorage.setItem('openedLetters',JSON.stringify(opened));
      const div = document.createElement('div');
      div.textContent = `${ds} → ${text.slice(0,30)}...`;
      div.classList.add('archive-item');
      div.onclick = () => openLetter(ds,text);
      archiveContainer.appendChild(div);
    };
    envelopesContainer.appendChild(env);
  });

  toggleArchiveBtn.onclick = () => {
    archiveContainer.style.display = archiveContainer.style.display==='none' ? 'block' : 'none';
  };

  modalClose.onclick = () => modalOverlay.style.display = 'none';
  modalOverlay.onclick = e => { if (e.target === modalOverlay) modalOverlay.style.display = 'none'; };

  function openLetter(date,text) {
    modalDate.textContent = date;
    modalText.textContent = text;
    modalOverlay.style.display = 'flex';
  }
});