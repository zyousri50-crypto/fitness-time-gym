let currentLang = localStorage.getItem('ft-lang') || 'ar';
let currentTheme = localStorage.getItem('ft-theme') || 'dark';

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBzH3-ZhXverJStvg_xiGeViofBmJp9WnE",
  authDomain: "fitness-time-gym-158dd.firebaseapp.com",
  projectId: "fitness-time-gym-158dd",
  storageBucket: "fitness-time-gym-158dd.firebasestorage.app",
  messagingSenderId: "878846128512",
  appId: "1:878846128512:web:eaacf82cc45a8e34d59165",
  measurementId: "G-YGL0ZYS8H5"
};
let db;
try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} catch(e) {}

const langData = {
  ar: {
    // Nav
    navHome:'الرئيسية',navAbout:'عن الجيم',navServices:'الخدمات',navPricing:'الأسعار',navTrainers:'الكباتن',navSchedule:'المواعيد',navPrograms:'البرامج',navGallery:'معرض الصور',navContact:'اتصل بنا',navLang:'English',navCta:'احجز جلسة',
    // Footer
    footerAbout:'عن الجيم',footerAboutT:'Fitness Time Gym صالتك الرياضية الأولى في منوف منذ 2018.',footerFB:'تابعنا على فيسبوك',footerLinks:'روابط سريعة',footerContact:'اتصل بنا',footerContactT:'تواصل معنا عبر:',footerAddr:'منوف - شارع الجيش - مول ستي استارز',footerHours:'8 م - 3 ص',footerCopy:'جميع الحقوق محفوظة',
    // Top bar
    topAddr:'منوف - مول ستي استارز',topHours:'8 م - 3 ص',
    // Home
    heroSub:'منوف',heroTag:'قوتك تبدأ من هنا 💪',st1:'افتتاح الجيم',st2:'عميل',st3:'كباتن محترفين',st4:'جهاز حديث',heroCta1:'احجز جلسة',heroCta2:'اعرف أكثر',
    qsT:'خدماتنا',qs1:'الحديد',qs2:'الكارديو',qs3:'النادي الصحي',qs4:'الرقص واللياقة',qs5:'تدريب شخصي',qs6:'مساج',
    apT:'Fitness Time Gym - منوف',ap1:'افتتحنا من 2018 وبقالنا سنين بنقدم أفضل خدمات الرياضة في منوف. أحدث الأجهزة، النادي الصحي، وأجواء رياضية للرجال والسيدات.',ap2:'نوفرلك أجواء نظيفة ومريحة مع أحدث الأجهزة المستوردة، وفريق تدريب محترف تحت إشراف نخبة من الكباتن المعتمدين.',apBtn:'اقرأ المزيد',
    // About
    abtTitle:'عن Fitness Time Gym',abtSub:'تعرف على قصتنا ورؤيتنا',abtIntro:'Fitness Time Gym هو صالتك الرياضية الأولى في منوف. افتتحنا أبوابنا في 2018 ومن ساعتها واحنا بنقدم أفضل خدمات الرياضة في المدينة. بنتميز بالأجهزة الحديثة، النظافة التامة، والكباتن المحترفين.',
    vm1:'رؤيتنا',vm1d:'إننا نكون أفضل صالة رياضية في منوف والمنوفية، ونوفر بيئة رياضية متكاملة.',vm2:'رسالتنا',vm2d:'تقديم خدمات رياضية احترافية بأعلى معايير الجودة والنظافة.',
    statsT:'إحصائياتنا',st5:'سنين خبرة',st6:'نظافة',
    // Services
    svTitle:'خدمات الجيم',svSub:'كل ما تحتاجه في مكان واحد',sv1:'النادي الصحي',sv2:'الحديد',sv3:'الكارديو',sv4:'الرقص واللياقة',sv5:'التدريب الشخصي',
    s1t:'جاكوزي',s1d:'جاكوزي فاخر للاسترخاء بعد التمرين',s2t:'ساونا',s2d:'ساونا جافة لتنقية الجسم',s4t:'مساج',s4d:'جلسات مساج احترافية',
    i1t:'الأوزان الحرة',i1d:'دامبلز وبارات بجميع الأوزان',i2t:'الأجهزة الحديثة',i2d:'أحدث أجهزة التضخيم والتنشيف',i3t:'قاعة التدريب',i3d:'مساحة مجهزة بأحدث المعدات',
    c1t:'مشاية كهربائية',c1d:'Treadmill بأحدث المواصفات',c2t:'عجلة رياضية',c2d:'Spin bike لحرق الدهون',c3t:'أجهزة متعددة',c3d:'Elliptical - Rowing - Climbing',
    d1t:'رقص شرقي',d1d:'تدريب رقص شرقي للسيدات',d1tag:'للسيدات فقط',d2t:'زومبا',d2d:'رقص إيقاعي لحرق السعرات',d2tag:'للسيدات فقط',d3t:'أيروبكس',d3d:'تمارين أيروبكس للياقة',d3tag:'للسيدات فقط',
    pt1t:'تدريب شخصي',pt1d:'برنامج تدريب مخصص حسب هدفك',pt2t:'تدريب جماعي',pt2d:'جروبات صغيرة تحت إشراف كابتن',pt3t:'استشارات تغذية',pt3d:'خطط غذائية مرفقة مع التدريب',
    // Pricing
    prTitle:'الأسعار',prSub:'خطط تناسب الجميع',prTab1:'جلسات',prTab2:'اشتراك شهري',prTab3:'أكثر من شهر',
    p1t:'جلسة',p1n:'حديد',p2t:'جلسة',p2n:'حديد + كارديو',p3t:'جلسة',p3n:'النادي الصحي (سبا)',
    p4t:'شهري',p4n:'شامل بدون سبا',p4d:'حديد + كارديو + أيروبكس',p5t:'شهري',p5n:'شامل بالسبا',p5d:'حديد + كارديو + سبا + رقص',
    p6t:'شهرين',p6n:'بدون سبا',p7t:'شهرين',p7n:'شامل بالسبا',p8t:'3 شهور',p8n:'بدون سبا',p9t:'3 شهور',p9n:'شامل بالسبا',
    p10t:'4 شهور',p10n:'اشتراك 4 شهور',p11t:'6 شهور',p11n:'اشتراك 6 شهور',p12t:'سنوي',p12n:'اشتراك سنوي',
    egp:'ج.م',cmpT:'مقارنة الباقات',cmpF:'الميزة',cmpB:'بدون سبا',cmpS:'بالسبا',
    cmp1:'الحديد',cmp2:'الكارديو',cmp3:'أيروبكس',cmp4:'رقص / زومبا',cmp5:'جاكوزي',cmp6:'ساونا',cmp7:'بخار',cmp8:'مساج',
    // Trainers
    trTitle:'الكباتن',trSub:'نخبة من المدربين المعتمدين',trIntro:'فريق تدريبنا مكون من نخبة من الكباتن المعتمدين بسنوات خبرة طويلة في مجال التدريب الرياضي.',
    c1n:'كابتن خالد',c1role:'مدرب رئيسي',c1spec1:'تضخيم',c1spec2:'بناء أجسام',c1spec3:'قوة',c1exp:'خبرة 3 سنين',
    c2n:'كابتن أميرة',c2role:'مدربة سيدات',c2spec1:'برامج سيدات',c2spec2:'تنشيف',c2spec3:'رقص',c2exp:'خبرة 10 سنين',
    c3n:'كابتن شهد',c3role:'مدربة سيدات',c3spec1:'لياقة',c3spec2:'زومبا',c3spec3:'أيروبكس',c3exp:'خبرة 3 سنين',
    testT:'تقييمات العملاء',addRevT:'أضف تقييمك',revNameP:'اسمك',revTextP:'اكتب تقييمك',revBtn:'إرسال التقييم',revAlert:'اكتب اسمك وتقييمك واختار عدد النجوم',test1:'"أفضل جيم في منوف. أجهزة حديثة ونظافة تامة والكباتن محترفين جداً."',test1a:'— أحمد',
    test2:'"النادي الصحي تحفة. الجاكوزي والساونا بعد التمرين حاجة تانية."',test2a:'— مريم',
    test3:'"دخلت في تحدي التضخيم مع كابتن خالد والنتيجة كانت مذهلة في 3 شهور."',test3a:'— عمر',
    test4:'"جيم نظيف وجميل جدا والمدربين متعاونين. أنصح الكل يجرب."',test4a:'— سارة',
    test5:'"قسم السيدات رائع ومدربة أميرة محترفة جدا. النادي الصحي تحفة."',test5a:'— نورة',
    test6:'"برامج التخسيس مع كابتن أميرة غيرت حياتي. نزلت 12 كيلو في 3 شهور."',test6a:'— هند',
    // Schedule
    schTitle:'المواعيد',schSub:'جدول التمرين الأسبوعي',schTab1:'👩 البنات',schTab2:'💪 الشباب',
    schW1:'مواعيد البنات - السبت / الاثنين / الأربعاء من 3:30 م لـ 8:00 م، والأحد / الثلاثاء / الخميس من 9:00 ص لـ 11:30 ص. الجمعة إجازة.',
    schM1:'مواعيد الشباب يومياً من 8:00 م لـ 2:00 ص. يوم الجمعة من 2:00 م لـ 2:00 ص.',
    tDay:'اليوم',tTimeW:'الموعد',tDay2:'اليوم',tTimeM:'الموعد',off:'✖ إجازة',
    dSat:'السبت',dSun:'الأحد',dMon:'الاثنين',dTue:'الثلاثاء',dWed:'الأربعاء',dThu:'الخميس',dFri:'الجمعة',
    dSat2:'السبت',dSun2:'الأحد',dMon2:'الاثنين',dTue2:'الثلاثاء',dWed2:'الأربعاء',dThu2:'الخميس',dFri2:'الجمعة',
    noteT:'ملاحظات مهمة',note1:'⚠️ الجمعة إجازة رسمية للبنات.',note2:'💪 مواعيد الشباب تشمل جميع أيام الأسبوع.',note3:'🧖 النادي الصحي يعمل بنفس مواعيد الجيم.',note4:'📞 للحجز والاستفسار اتصل على 01224262481.',
    // Programs
    progTitle:'البرامج التدريبية',progSub:'برامج مخصصة حسب هدفك',progTab1:'تضخيم',progTab2:'تنشيف',progTab3:'تخسيس',progTab4:'لياقة',progTab5:'سيدات',
    prog1t:'برنامج التضخيم',prog1d:'برنامج مكثف لزيادة الكتلة العضلية باستخدام الأوزان الحرة والأجهزة.',prog1m1:'3 - 6 شهور',prog1m2:'مستوى: جميع',prog1m3:'كابتن خالد',
    prog2t:'برنامج القوة',prog2d:'زيادة القوة البدنية والقدرة على التحمل.',prog2m1:'شهرين',prog2m2:'متوسط',prog2m3:'كابتن خالد',
    prog3t:'برنامج التنشيف',prog3d:'حرق الدهون مع الحفاظ على الكتلة العضلية.',prog3m1:'2 - 4 شهور',prog3m2:'جميع المستويات',prog3m3:'جميع الكباتن',
    prog4t:'برنامج التخسيس',prog4d:'برنامج متكامل لإنقاص الوزن مع متابعة تغذية.',prog4m1:'شهرين+',prog4m2:'مبتدئين',prog4m3:'كابتن أميرة',
    prog5t:'برنامج اللياقة',prog5d:'تحسين اللياقة البدنية العامة والمرونة.',prog5m1:'شهري',prog5m2:'جميع المستويات',prog5m3:'جميع الكباتن',
    prog6t:'برنامج السيدات',prog6d:'برامج مخصصة للسيدات: رقص - زومبا - أيروبكس.',prog6m1:'شهري',prog6m2:'للسيدات فقط',prog6m3:'كابتن أميرة وشهد',
    prog7t:'زومبا وأيروبكس',prog7d:'تمارين إيقاعية لحرق السعرات وتحسين اللياقة.',prog7m1:'شهري',prog7m2:'للسيدات',prog7m3:'كابتن شهد',
    progCta:'احجز الآن',
    // Gallery
    galTitle:'معرض الصور',galSub:'صور الجيم والأقسام',galTab1:'الجيم',galTab2:'النادي الصحي',
    // Contact
    conTitle:'اتصل بنا',conSub:'نحن في خدمتك دائماً',
    conPhone:'الهاتف',conAddr:'العنوان',conAddrD:'منوف - شارع الجيش\nمول ستي استارز - الدور الرابع',conHours:'مواعيد العمل',conHoursD:'يومياً 8 م - 3 ص\nالجمعة 2 م - 3 ص',conWhatsapp:'واتساب',
    conFormName:'الاسم',conFormPhone:'رقم الهاتف',conFormSubject:'الموضوع',conFormMsg:'الرسالة',conFormBtn:'إرسال الرسالة',
    conOpt1:'استفسار عن الأسعار',conOpt2:'حجز جلسة',conOpt3:'استفسار عن الاشتراكات',conOpt4:'شكوى أو اقتراح',
    // Chatbot
    chatTitle:'💬 Fitness Time',chatWelcome:'مرحباً! أنا مساعد Fitness Time. اختر من الأسئلة أدناه:',
    q1:'💰 الأسعار',q2:'🕐 المواعيد',q3:'📍 العنوان',q4:'📞 التواصل',q5:'🏋️ البرامج',q6:'🔧 الخدمات',
    a1:'الأسعار:\n• جلسة حديد: 35 ج.م\n• جلسة حديد+كارديو: 50 ج.م\n• جلسة سبا: 250 ج.م\n• شهري بدون سبا: 300 ج.م\n• شهري بالسبا: 450 ج.م\n• شهرين بدون سبا: 550 ج.م\n• شهرين بالسبا: 750 ج.م\n• 3 شهور بدون سبا: 800 ج.م\n• 3 شهور بالسبا: 1100 ج.م\n• 4 شهور: 1100 ج.م\n• 6 شهور: 1800 ج.م\n• سنوي: 2000 ج.م',
    a2:'المواعيد:\n👩 البنات:\n• سبت/اثنين/أربع: 3:30 م - 8:00 م\n• أحد/ثلاثاء/خميس: 9:00 ص - 11:30 ص\n• الجمعة إجازة\n\n💪 الشباب:\n• يومياً: 8:00 م - 2:00 ص\n• الجمعة: 2:00 م - 2:00 ص',
    a3:'📍 العنوان:\nمنوف - شارع الجيش\nمول ستي استارز - الدور الرابع',
    a4:'📞 التواصل:\n• 01224262481\n• 01032415327\n• واتساب: 01224262481',
    a5:'🏋️ البرامج:\n• تضخيم (3-6 شهور)\n• تنشيف (2-4 شهور)\n• تخسيس (شهرين+)\n• لياقة (شهري)\n• سيدات (شهري)\n• زومبا وأيروبكس (شهري)\n\nكلمنا عالواتساب عشان تفاصيل أكثر.',
    a6:'🔧 الخدمات:\n• النادي الصحي (جاكوزي-ساونا-بخار-مساج)\n• الحديد والأوزان الحرة\n• الكارديو (مشاية-عجلة-أجهزة)\n• الرقص واللياقة (شرقي-زومبا-أيروبكس)\n• التدريب الشخصي والجماعي\n• استشارات تغذية',
    chatReset:'🔄 اسأل سؤال آخر',
  },
  en: {
    navHome:'Home',navAbout:'About',navServices:'Services',navPricing:'Pricing',navTrainers:'Coaches',navSchedule:'Schedule',navPrograms:'Programs',navGallery:'Gallery',navContact:'Contact',navLang:'عربي',navCta:'Book Now',
    footerAbout:'About',footerAboutT:'Fitness Time Gym is your #1 fitness destination in Menouf since 2018.',footerFB:'Follow us on Facebook',footerLinks:'Quick Links',footerContact:'Contact',footerContactT:'Get in touch:',footerAddr:'Menouf - Al-Geish St. - City Stars Mall',footerHours:'8 PM - 3 AM',footerCopy:'All rights reserved',
    topAddr:'Menouf - City Stars Mall',topHours:'8 PM - 3 AM',
    heroSub:'Menouf',heroTag:'Your strength starts here 💪',st1:'Opened',st2:'Clients',st3:'Pro Coaches',st4:'Modern Machines',heroCta1:'Book Now',heroCta2:'Learn More',
    qsT:'Our Services',qs1:'Weights',qs2:'Cardio',qs3:'Health Club',qs4:'Dance & Fitness',qs5:'Personal Training',qs6:'Massage',
    apT:'Fitness Time Gym - Menouf',ap1:'We opened in 2018 and have been providing the best fitness services in Menouf. Latest equipment, health club, and a great atmosphere for men and women.',ap2:'We offer clean and comfortable facilities with the latest imported equipment and a professional training team.',apBtn:'Read More',
    abtTitle:'About Fitness Time Gym',abtSub:'Our story and vision',abtIntro:'Fitness Time Gym is your #1 fitness destination in Menouf. We opened in 2018 and have been providing the best sports services in the city. Modern equipment, complete cleanliness, and professional coaches.',
    vm1:'Our Vision',vm1d:'To be the best gym in Menouf and provide a complete sports environment for everyone.',vm2:'Our Mission',vm2d:'Providing professional sports services with the highest quality and cleanliness standards.',
    statsT:'Statistics',st5:'Years Experience',st6:'Cleanliness',
    svTitle:'Our Services',svSub:'Everything you need in one place',sv1:'Health Club',sv2:'Weights',sv3:'Cardio',sv4:'Dance & Fitness',sv5:'Personal Training',
    s1t:'Jacuzzi',s1d:'Luxury jacuzzi for post-workout relaxation',s2t:'Sauna',s2d:'Dry sauna for detox & relaxation',s4t:'Massage',s4d:'Professional massage sessions',
    i1t:'Free Weights',i1d:'Dumbbells & bars in all weights',i2t:'Modern Machines',i2d:'Latest bulking & cutting machines',i3t:'Training Hall',i3d:'Fully equipped training area',
    c1t:'Treadmill',c1d:'Latest treadmills',c2t:'Spin Bike',c2d:'Spin bike for fat burning',c3t:'Multi Machines',c3d:'Elliptical - Rowing - Climbing',
    d1t:'Oriental Dance',d1d:'Oriental dance training for women',d1tag:'Women only',d2t:'Zumba',d2d:'Rhythmic dance for calories',d2tag:'Women only',d3t:'Aerobics',d3d:'Aerobics for fitness',d3tag:'Women only',
    pt1t:'Personal Training',pt1d:'Custom training program for your goals',pt2t:'Group Training',pt2d:'Small groups under coach supervision',pt3t:'Nutrition Advice',pt3d:'Diet plans with training',
    prTitle:'Pricing',prSub:'Plans for everyone',prTab1:'Sessions',prTab2:'Monthly',prTab3:'Long-term',
    p1t:'Session',p1n:'Weights',p2t:'Session',p2n:'Weights + Cardio',p3t:'Session',p3n:'Health Club (Spa)',
    p4t:'Monthly',p4n:'All-in (no spa)',p4d:'Weights + Cardio + Aerobics',p5t:'Monthly',p5n:'All-in (with spa)',p5d:'Weights + Cardio + Spa + Dance',
    p6t:'2 Months',p6n:'No spa',p7t:'2 Months',p7n:'With spa',p8t:'3 Months',p8n:'No spa',p9t:'3 Months',p9n:'With spa',
    p10t:'4 Months',p10n:'4 Months',p11t:'6 Months',p11n:'6 Months',p12t:'Yearly',p12n:'Yearly',
    egp:'EGP',cmpT:'Comparison',cmpF:'Feature',cmpB:'No Spa',cmpS:'With Spa',
    cmp1:'Weights',cmp2:'Cardio',cmp3:'Aerobics',cmp4:'Dance / Zumba',cmp5:'Jacuzzi',cmp6:'Sauna',cmp7:'Steam',cmp8:'Massage',
    trTitle:'Our Coaches',trSub:'Elite certified trainers',trIntro:'Our training team consists of elite certified coaches with years of experience in sports training.',
    c1n:'Captain Khaled',c1role:'Head Coach',c1spec1:'Bulking',c1spec2:'Bodybuilding',c1spec3:'Strength',c1exp:'3 years exp.',
    c2n:'Captain Amira',c2role:"Women's Coach",c2spec1:"Women's Programs",c2spec2:'Cutting',c2spec3:'Dance',c2exp:'10 years exp.',
    c3n:'Captain Shahd',c3role:"Women's Coach",c3spec1:'Fitness',c3spec2:'Zumba',c3spec3:'Aerobics',c3exp:'3 years exp.',
    testT:'Client Reviews',addRevT:'Add Your Review',revNameP:'Your name',revTextP:'Write your review',revBtn:'Submit Review',revAlert:'Enter your name, review & select stars',test1:'"Best gym in Menouf. Modern equipment, clean, and professional coaches."',test1a:'— Ahmed',
    test2:'"The health club is amazing. Jacuzzi and sauna after workout are incredible."',test2a:'— Mariam',
    test3:'"I joined Khaled bulking challenge and got amazing results in 3 months."',test3a:'— Omar',
    test4:'"Very clean and beautiful gym with helpful coaches. I recommend everyone try it."',test4a:'— Sarah',
    test5:'"The women\'s section is amazing and Coach Amira is very professional. The health club is a masterpiece."',test5a:'— Noura',
    test6:'"The weight loss program with Coach Amira changed my life. Lost 12 kg in 3 months."',test6a:'— Hend',
    schTitle:'Schedule',schSub:'Weekly training timetable',schTab1:"👩 Women's",schTab2:"💪 Men's",
    schW1:"Women's schedule: Sat/Mon/Wed 3:30 PM - 8:00 PM, Sun/Tue/Thu 9:00 AM - 11:30 AM. Friday off.",
    schM1:"Men's schedule: Daily 8:00 PM - 2:00 AM. Friday 2:00 PM - 2:00 AM.",
    tDay:'Day',tTimeW:'Time',tDay2:'Day',tTimeM:'Time',off:'✖ Off',
    dSat:'Sat',dSun:'Sun',dMon:'Mon',dTue:'Tue',dWed:'Wed',dThu:'Thu',dFri:'Fri',
    dSat2:'Sat',dSun2:'Sun',dMon2:'Mon',dTue2:'Tue',dWed2:'Wed',dThu2:'Thu',dFri2:'Fri',
    noteT:'Important Notes',note1:'⚠️ Friday is off for women.',note2:'💪 Men\'s schedule includes all days.',note3:'🧖 Health club follows gym hours.',note4:'📞 Call 01224262481 for inquiries.',
    progTitle:'Programs',progSub:'Programs tailored to your goal',progTab1:'Bulking',progTab2:'Cutting',progTab3:'Weight Loss',progTab4:'Fitness',progTab5:'Women',
    prog1t:'Bulking Program',prog1d:'Intensive program to increase muscle mass using free weights and machines.',prog1m1:'3-6 months',prog1m2:'All levels',prog1m3:'Capt. Khaled',
    prog2t:'Strength Program',prog2d:'Increase physical strength and endurance.',prog2m1:'2 months',prog2m2:'Intermediate',prog2m3:'Capt. Khaled',
    prog3t:'Cutting Program',prog3d:'Burn fat while maintaining muscle mass.',prog3m1:'2-4 months',prog3m2:'All levels',prog3m3:'All coaches',
    prog4t:'Weight Loss',prog4d:'Complete weight loss program with nutrition tracking.',prog4m1:'2 months+',prog4m2:'Beginners',prog4m3:'Capt. Amira',
    prog5t:'Fitness Program',prog5d:'Improve general fitness and flexibility.',prog5m1:'Monthly',prog5m2:'All levels',prog5m3:'All coaches',
    prog6t:"Women's Program",prog6d:"Women's programs: dance - Zumba - aerobics.",prog6m1:'Monthly',prog6m2:'Women only',prog6m3:'Capt. Amira & Shahd',
    prog7t:'Zumba & Aerobics',prog7d:'Rhythmic exercises for calorie burning and fitness.',prog7m1:'Monthly',prog7m2:'Women',prog7m3:'Capt. Shahd',
    progCta:'Book Now',
    galTitle:'Gallery',galSub:'Gym photos',galTab1:'Gym',galTab2:'Health Club',
    conTitle:'Contact Us',conSub:'We are always at your service',
    conPhone:'Phone',conAddr:'Address',conAddrD:'Menouf - Al-Geish St.\nCity Stars Mall - 4th Floor',conHours:'Working Hours',conHoursD:'Daily 8 PM - 3 AM\nFriday 2 PM - 3 AM',conWhatsapp:'WhatsApp',
    conFormName:'Name',conFormPhone:'Phone',conFormSubject:'Subject',conFormMsg:'Message',conFormBtn:'Send Message',
    conOpt1:'Pricing inquiry',conOpt2:'Book a session',conOpt3:'Membership inquiry',conOpt4:'Complaint or suggestion',
    // Chatbot
    chatTitle:'💬 Fitness Time',chatWelcome:'Hello! I am the Fitness Time assistant. Choose a question below:',
    q1:'💰 Pricing',q2:'🕐 Schedule',q3:'📍 Location',q4:'📞 Contact',q5:'🏋️ Programs',q6:'🔧 Services',
    a1:'Pricing:\n• Iron session: 35 EGP\n• Iron+Cardio session: 50 EGP\n• Spa session: 250 EGP\n• Monthly (no spa): 300 EGP\n• Monthly (with spa): 450 EGP\n• 2 Months (no spa): 550 EGP\n• 2 Months (with spa): 750 EGP\n• 3 Months (no spa): 800 EGP\n• 3 Months (with spa): 1100 EGP\n• 4 Months: 1100 EGP\n• 6 Months: 1800 EGP\n• Yearly: 2000 EGP',
    a2:'Schedule:\n👩 Women:\n• Sat/Mon/Wed: 3:30 PM - 8:00 PM\n• Sun/Tue/Thu: 9:00 AM - 11:30 AM\n• Friday off\n\n💪 Men:\n• Daily: 8:00 PM - 2:00 AM\n• Friday: 2:00 PM - 2:00 AM',
    a3:'📍 Address:\nMenouf - Al-Geish St.\nCity Stars Mall - 4th Floor',
    a4:'📞 Contact:\n• 01224262481\n• 01032415327\n• WhatsApp: 01224262481',
    a5:'🏋️ Programs:\n• Bulking (3-6 months)\n• Cutting (2-4 months)\n• Weight Loss (2 months+)\n• Fitness (monthly)\n• Women (monthly)\n• Zumba & Aerobics (monthly)\n\nContact us on WhatsApp for details.',
    a6:'🔧 Services:\n• Health Club (Jacuzzi-Sauna-Steam-Massage)\n• Weights & Free Weights\n• Cardio (Treadmill-Bike-Multi)\n• Dance & Fitness (Oriental-Zumba-Aerobics)\n• Personal & Group Training\n• Nutrition Consultancy',
    chatReset:'🔄 Ask another question',
  }
};

function applyLang() {
  const d = langData[currentLang];
  document.documentElement.lang = currentLang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (d[key]) el.innerHTML = d[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (d[key]) el.placeholder = d[key];
  });
  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.textContent = d.navLang;
  localStorage.setItem('ft-lang', currentLang);
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLang();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('light', currentTheme === 'light');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('ft-theme', currentTheme);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Apply saved theme & language immediately
if (localStorage.getItem('ft-theme') === 'light') {
  document.body.classList.add('light');
}
applyLang();

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// Tab system
function switchTab(group, idx) {
  const container = document.getElementById(group + 'Tabs').closest('section') || document;
  const tabs = container.querySelectorAll('[data-tab="' + group + '"]');
  const contents = container.querySelectorAll('[data-tabc="' + group + '"]');
  tabs.forEach((tb, i) => tb.classList.toggle('active', i === idx));
  contents.forEach((c, i) => c.classList.toggle('active', i === idx));
}

// Star rating
document.addEventListener('click', e => {
  const star = e.target.closest('.star-rating .star');
  if (!star) return;
  const container = star.closest('.star-rating');
  const val = parseInt(star.dataset.val);
  container.querySelectorAll('.star').forEach(s => s.classList.toggle('active', parseInt(s.dataset.val) <= val));
});

// Submit review
function submitReview() {
  const name = document.getElementById('revName').value.trim();
  const text = document.getElementById('revText').value.trim();
  const activeStars = document.querySelector('.star-rating')?.querySelectorAll('.star.active');
  const d = langData[currentLang];
  const msg = d.revAlert || (currentLang === 'ar' ? 'اكتب اسمك وتقييمك واختار عدد النجوم' : 'Enter your name, review & select stars');
  if (!name || !text || !activeStars?.length) { alert(msg); return; }
  const rating = activeStars.length;
  const starsStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  const btn = document.querySelector('.review-form .btn');
  btn.disabled = true; btn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
  db.collection('reviews').add({ name, text, rating: starsStr, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
    .then(() => {
      document.getElementById('revName').value = '';
      document.getElementById('revText').value = '';
      document.querySelectorAll('.star-rating .star').forEach(s => s.classList.remove('active'));
      btn.disabled = false; btn.textContent = d.revBtn || 'إرسال التقييم';
    })
    .catch(err => {
      alert('Error: ' + err.message);
      btn.disabled = false; btn.textContent = d.revBtn || 'إرسال التقييم';
    });
}

function displayReviews() {
  const grid = document.querySelector('.test-grid');
  if (!grid || !db) return;
  grid.querySelectorAll('.user-review').forEach(el => el.remove());
  db.collection('reviews').orderBy('createdAt', 'desc').onSnapshot(snap => {
    grid.querySelectorAll('.user-review').forEach(el => el.remove());
    const d = langData[currentLang];
    snap.forEach(doc => {
      const r = doc.data();
      const dateStr = r.createdAt ? r.createdAt.toDate().toLocaleDateString('en-CA') : '';
      const div = document.createElement('div');
      div.className = 'test-c user-review';
      div.innerHTML = '<div class="stars">' + r.rating + '</div><p>"' + r.text + '"</p><div class="author">— ' + r.name + '</div><div class="date" style="font-size:.75em;color:var(--text4)">' + (currentLang === 'ar' ? 'أضيف في ' : 'Added on ') + dateStr + '</div>';
      grid.appendChild(div);
    });
  });
}

document.addEventListener('DOMContentLoaded', displayReviews);

// Chatbot
function toggleChat() {
  document.getElementById('chatWindow').classList.toggle('open');
}

function chatAnswer(topic) {
  const d = langData[currentLang];
  const body = document.getElementById('chatBody');
  const qs = document.getElementById('chatQs');
  qs.style.display = 'none';
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = d['q' + ({pricing:1,schedule:2,location:3,contact:4,programs:5,services:6}[topic])];
  body.appendChild(userMsg);
  const botMsg = document.createElement('div');
  botMsg.className = 'chat-msg bot';
  botMsg.textContent = d['a' + ({pricing:1,schedule:2,location:3,contact:4,programs:5,services:6}[topic])];
  body.appendChild(botMsg);
  const resetBtn = document.createElement('button');
  resetBtn.className = 'chat-back';
  resetBtn.textContent = d.chatReset;
  resetBtn.onclick = resetChat;
  body.appendChild(resetBtn);
  body.scrollTop = body.scrollHeight;
}

function resetChat() {
  const d = langData[currentLang];
  const body = document.getElementById('chatBody');
  const qs = document.getElementById('chatQs');
  body.innerHTML = '<div class="chat-msg bot">' + d.chatWelcome + '</div>';
  qs.style.display = 'flex';
}

// Apply chatbot translations on lang change
const origApplyLang = applyLang;
applyLang = function() {
  origApplyLang();
  const d = langData[currentLang];
  const welcome = document.querySelector('#chatBody .chat-msg.bot');
  if (welcome && !welcome.querySelector('button')) welcome.textContent = d.chatWelcome;
  const btns = document.querySelectorAll('#chatQs button');
  btns.forEach(b => { const k = b.dataset.i18n; if (d[k]) b.textContent = d[k]; });
  const backBtns = document.querySelectorAll('.chat-back');
  backBtns.forEach(b => b.textContent = d.chatReset);
};
