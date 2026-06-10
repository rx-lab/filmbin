$(document).ready(function () {

    // ============================================
    // 1. Main Slider Functionality
    // ============================================
    const slides = [
        { img: "img/slider/1.webp", title: "The Batman Part II", desc: "شوالیه تاریکی بازمی‌گردد" },
        { img: "img/slider/2.webp", title: "Punisher", desc: "تریلر معمایی پرتنش و غافلگیرکننده" },
        { img: "img/slider/3.webp", title: "Rick And Morty", desc: "ماجراجویی خارق‌العاده در ابعاد مختلف" }
    ];



    let currentIndex = 0;

    function updateSlider(index) {
        const data = slides[index];
        $("#sliderImage").attr("src", data.img);
        $("#slideTitle").text(data.title);
        $("#slideDesc").text(data.desc);
    }

    $("#nextSlide").click(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    });

    $("#prevSlide").click(function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
    });

    updateSlider(0);

    // ============================================
    // 2. Movies Horizontal Scroll - FIX: RTL direction
    // در RTL باید جهت scroll معکوس بشه
    // ============================================
    function scrollSection(id, dir) {
        const el = document.getElementById(id);
        const amount = dir * 280;
        el.scrollBy({ left: amount, behavior: 'smooth' });
    }

    $(".movie-next-first").click(function () { scrollSection("movieScroll1", -1); });
    $(".movie-prev-first").click(function () { scrollSection("movieScroll1", 1); });

    $(".movie-next-second").click(function () { scrollSection("movieScroll2", -1); });
    $(".movie-prev-second").click(function () { scrollSection("movieScroll2", 1); });

    $(".movie-next-third").click(function () { scrollSection("movieScroll3", -1); });
    $(".movie-prev-third").click(function () { scrollSection("movieScroll3", 1); });

    // ============================================
    // 3. Blogs Slider - FIX: RTL direction
    // ============================================
    $(".blog-next").click(function () {
        document.querySelector(".blogs").scrollBy({ left: -300, behavior: 'smooth' });
    });
    $(".blog-prev").click(function () {
        document.querySelector(".blogs").scrollBy({ left: 300, behavior: 'smooth' });
    });

    // ============================================
    // 4. Dropdown Menu - دسکتاپ
    // ============================================
    $("nav ul li.dropdown").mouseenter(function () {
        $(this).find(".category-slide").stop(true, true).slideDown(200);
    });
    $("nav ul li.dropdown").mouseleave(function () {
        $(this).find(".category-slide").stop(true, true).slideUp(200);
    });

    // ============================================
    // 5. Ham Menu - FIX: toggle + قفل scroll صفحه
    // ============================================
    $(".ham-menu").click(function () {
        const isOpen = $("nav ul li.login-btn").is(":visible");
        $("nav ul li:not(.ham-menu), nav .search-box").slideToggle(200);

        if (!isOpen) {
            // منو داره باز می‌شه: scroll صفحه رو قفل کن
            $("body").css("overflow", "hidden");
        } else {
            // منو داره بسته می‌شه: scroll رو برگردون
            $("body").css("overflow", "");
        }
    });

    // جلوگیری از رسیدن touch/scroll به body وقتی روی nav هستیم
    document.querySelector("nav").addEventListener("touchmove", function (e) {
        e.stopPropagation();
    }, { passive: true });

    // اگر بیرون از nav کلیک شد، منو رو ببند — فقط در موبایل
    $(document).on("click touchstart", function (e) {
        if ($(window).width() > 1200) return;
        if (!$(e.target).closest("nav").length) {
            if ($("nav ul li.login-btn").is(":visible")) {
                $("nav ul li:not(.ham-menu), nav .search-box").slideUp(200);
                $("body").css("overflow", "");
            }
        }
    });

    // ============================================
    // 6. Dropdown در موبایل با کلیک
    // ============================================
    $("nav ul li.dropdown > a").click(function (e) {
        if ($(window).width() <= 1200) {
            e.preventDefault();
            $(this).siblings(".category-slide").slideToggle(200);
        }
    });

    // ============================================
// دیتای فیلم‌ها
// ============================================
const moviesData = {
    "افسانه پادشاه": {
        title: "King's Legend",
        titleFa: "افسانه پادشاه",
        poster: "img/slider1/8.webp",
        year: "2024",
        duration: "۲ ساعت ۱۸ دقیقه",
        country: "آمریکا",
        lang: "انگلیسی",
        director: "Ridley Scott",
        writer: "David Franzoni",
        studio: "Warner Bros",
        genres: ["اکشن", "حماسی", "ماجراجویی"],
        quality: "4K HDR",
        imdb: "8.6",
        rt: "89%",
        usersScore: "4.4",
        desc: "داستانی حماسی از شجاعت و افتخار که در دل قرون وسطی جریان دارد. یک جنگجوی افسانه‌ای برای آزادی مردمش در برابر ظلم و ستم می‌ایستد.",
        story: "در قرن دوازدهم میلادی، یک جنگجوی تنها که از خاندان سلطنتی سقوط کرده، برای بازپس‌گیری تخت و تاج پدری‌اش قیام می‌کند. او باید از دشمنان بی‌شمار، خیانت‌های دربار و توطئه‌های پنهان عبور کند تا به افسانه‌ای جاودان تبدیل شود. این فیلم تصویری باشکوه از دوستی، عشق، فداکاری و اراده انسانی در برابر تاریکی را ارائه می‌دهد.",
        cast: [
            { name: "Henry Cavill", role: "شاه آرتور", img: "https://i.pravatar.cc/150?img=11" },
            { name: "Cate Blanchett", role: "ملکه ایزابل", img: "https://i.pravatar.cc/150?img=47" },
            { name: "Oscar Isaac", role: "سرلشکر ادریان", img: "https://i.pravatar.cc/150?img=12" },
            { name: "Idris Elba", role: "مشاور ارشد", img: "https://i.pravatar.cc/150?img=13" },
            { name: "Florence Pugh", role: "لیدی آنا", img: "https://i.pravatar.cc/150?img=48" },
            { name: "Tom Hardy", role: "ژنرال دشمن", img: "https://i.pravatar.cc/150?img=14" },
        ],
        related: ["شهر خاموش", "فرشته انتقام", "مردان سایه"],
        comments: [
            { user: "علیرضا", rating: 5, text: "یکی از بهترین فیلم‌های حماسی که دیدم! صحنه‌های نبرد فوق‌العاده بود.", date: "۱۴۰۳/۰۲/۱۵", likes: 24 },
            { user: "مریم", rating: 4, text: "داستان خوبی داشت، بازی‌ها عالی بود ولی کمی طولانی بود.", date: "۱۴۰۳/۰۳/۰۸", likes: 11 },
            { user: "رضا", rating: 5, text: "هنری کاویل در این نقش درخشید. موسیقی متن هم شاهکار بود.", date: "۱۴۰۳/۰۴/۲۰", likes: 18 },
        ]
    },
    "شهر خاموش": {
        title: "Silent City",
        titleFa: "شهر خاموش",
        poster: "img/slider1/p1.webp",
        year: "2024",
        duration: "۱ ساعت ۵۴ دقیقه",
        country: "آمریکا، فرانسه",
        lang: "انگلیسی",
        director: "Denis Villeneuve",
        writer: "Aaron Guzikowski",
        studio: "A24",
        genres: ["ترسناک", "معمایی", "هیجان‌انگیز"],
        quality: "1080p",
        imdb: "7.9",
        rt: "84%",
        usersScore: "4.1",
        desc: "ترس و رمز و راز در یک شهر متروک. یک بازرس جوان برای تحقیق درباره ناپدید شدن ساکنین یک شهر کوچک اعزام می‌شود.",
        story: "بازرس سارا چن به شهری کوچک در شمال کانادا می‌رود که تمام ساکنانش بدون هیچ اثری ناپدید شده‌اند. همه چیز سر جای خودش است — غذا روی میز، ماشین‌ها در پارکینگ — اما انگار مردم فقط هوا شده‌اند. با ادامه تحقیقات، سارا متوجه می‌شود که این شهر راز وحشتناکی دارد که ارتباطی به ماوراءالطبیعه دارد.",
        cast: [
            { name: "Emily Blunt", role: "بازرس سارا چن", img: "https://i.pravatar.cc/150?img=49" },
            { name: "Jake Gyllenhaal", role: "کارآگاه مارکوس", img: "https://i.pravatar.cc/150?img=15" },
            { name: "Toni Collette", role: "شهردار پیشین", img: "https://i.pravatar.cc/150?img=50" },
            { name: "Michael Shannon", role: "کشیش روستا", img: "https://i.pravatar.cc/150?img=16" },
        ],
        related: ["آخرین نفس", "مردان سایه", "افسانه پادشاه"],
        comments: [
            { user: "نیلوفر", rating: 4, text: "فضاسازی عالی بود. تا آخر ترسیدم!", date: "۱۴۰۳/۰۱/۱۰", likes: 15 },
            { user: "امیر", rating: 3, text: "پایان فیلم کمی گیج‌کننده بود ولی کلاً خوب بود.", date: "۱۴۰۳/۰۲/۲۵", likes: 7 },
        ]
    },
    "آخرین نفس": {
        title: "Last Breath",
        titleFa: "آخرین نفس",
        poster: "img/slider1/p2.webp",
        year: "2024",
        duration: "۲ ساعت ۵ دقیقه",
        country: "آمریکا",
        lang: "انگلیسی",
        director: "Chad Stahelski",
        writer: "Shay Hatten",
        studio: "Lionsgate",
        genres: ["اکشن", "هیجان‌انگیز", "جنایی"],
        quality: "4K",
        imdb: "8.1",
        rt: "91%",
        usersScore: "4.5",
        desc: "اکشن مهیج و تعقیب و گریز نفس‌گیر. یک مأمور سابق که زندگی آرامی دارد مجبور می‌شود برای نجات خانواده‌اش دوباره وارد میدان شود.",
        story: "مارکوس ریوس، مأمور سابق سازمان اطلاعاتی، حالا در یک شهر کوچک زندگی می‌کند. اما وقتی پسرش توسط یک کارتل بین‌المللی ربوده می‌شود، او مجبور است به دنیای خطرناک گذشته‌اش برگردد. تنها ۴۸ ساعت دارد.",
        cast: [
            { name: "Chris Hemsworth", role: "مارکوس ریوس", img: "https://i.pravatar.cc/150?img=17" },
            { name: "Ana de Armas", role: "آژنت لئون", img: "https://i.pravatar.cc/150?img=51" },
            { name: "John David Washington", role: "همتیم قدیمی", img: "https://i.pravatar.cc/150?img=18" },
            { name: "Pedro Pascal", role: "رئیس کارتل", img: "https://i.pravatar.cc/150?img=19" },
            { name: "Zoe Saldana", role: "افسر اطلاعاتی", img: "https://i.pravatar.cc/150?img=52" },
        ],
        related: ["افسانه پادشاه", "فرشته انتقام", "شهر خاموش"],
        comments: [
            { user: "پارسا", rating: 5, text: "بهترین اکشن امسال! کریس همسورث بی‌نظیر بود.", date: "۱۴۰۳/۰۵/۱۲", likes: 32 },
            { user: "سحر", rating: 4, text: "صحنه‌های اکشن حرف نداشت. داستان هم جذاب بود.", date: "۱۴۰۳/۰۶/۰۳", likes: 19 },
            { user: "کامران", rating: 5, text: "از اول تا آخر هیجان داشت. آنا دی آرماس هم عالی بود.", date: "۱۴۰۳/۰۶/۱۸", likes: 27 },
        ]
    },
    "رؤیای نیمه شب": {
        title: "Midnight Dream",
        titleFa: "رؤیای نیمه شب",
        poster: "img/slider1/3.webp",
        year: "2023",
        duration: "۱ ساعت ۴۸ دقیقه",
        country: "فرانسه، ایتالیا",
        lang: "فرانسوی",
        director: "Luca Guadagnino",
        writer: "Sayombhu Mukdeeprom",
        studio: "Canal+",
        genres: ["عاشقانه", "درام", "هنری"],
        quality: "1080p",
        imdb: "7.7",
        rt: "87%",
        usersScore: "4.2",
        desc: "عاشقانه‌ای شاعرانه در دل پاریس. دو روح سرگردان در خیابان‌های پاریس به هم می‌رسند.",
        story: "آدریان، نقاش جوانی که در جستجوی الهام به پاریس آمده، با سوفی — ویولنیستی که از عشق گذشته‌اش می‌گریزد — آشنا می‌شود. در شب‌های پاریس، کنار سن، در کافه‌های قدیمی، آن‌ها عاشقانه‌ای می‌سازند که می‌دانند موقت است. اما آیا می‌توانند از این زیبایی گذرا بگریزند؟",
        cast: [
            { name: "Timothée Chalamet", role: "آدریان", img: "https://i.pravatar.cc/150?img=20" },
            { name: "Zendaya", role: "سوفی", img: "https://i.pravatar.cc/150?img=53" },
            { name: "Léa Seydoux", role: "کلمانس", img: "https://i.pravatar.cc/150?img=54" },
        ],
        related: ["انیمیشن فراموشی", "شهر خاموش", "عصر یخبندان نو"],
        comments: [
            { user: "دانا", rating: 5, text: "یکی از زیباترین فیلم‌های عاشقانه‌ای که دیدم. موسیقی فوق‌العاده!", date: "۱۴۰۲/۱۱/۰۵", likes: 41 },
            { user: "بهروز", rating: 4, text: "تصویربرداری شاهکار بود. پاریس در این فیلم جادویی به نظر می‌رسه.", date: "۱۴۰۲/۱۲/۱۰", likes: 22 },
        ]
    },
    "مردان سایه": {
        title: "Shadow Men",
        titleFa: "مردان سایه",
        poster: "img/slider1/5.webp",
        year: "2024",
        duration: "۲ ساعت ۱۲ دقیقه",
        country: "آمریکا، انگلیس",
        lang: "انگلیسی",
        director: "David Fincher",
        writer: "Eric Roth",
        studio: "Netflix",
        genres: ["جنایی", "معمایی", "هیجان‌انگیز"],
        quality: "4K",
        imdb: "8.3",
        rt: "93%",
        usersScore: "4.6",
        desc: "جنایی معمایی با پیچش داستانی. یک کارآگاه که دوران بازنشستگی را پشت سر می‌گذارد با پرونده‌ای روبرو می‌شود که سی سال پیش نتوانسته بود آن را حل کند.",
        story: "کارآگاه بازنشسته فرانک لوکاس تصور می‌کرد مرموزترین پرونده حرفه‌اش را برای همیشه بسته. اما وقتی یک سری قتل جدید دقیقاً همان الگوی قدیمی را دنبال می‌کند، او باید به ماجرا برگردد. این بار دشمن یک قدم جلوتر است.",
        cast: [
            { name: "Denzel Washington", role: "فرانک لوکاس", img: "https://i.pravatar.cc/150?img=21" },
            { name: "Rami Malek", role: "شریک جوان", img: "https://i.pravatar.cc/150?img=22" },
            { name: "Cate Blanchett", role: "روانپزشک", img: "https://i.pravatar.cc/150?img=47" },
            { name: "Javier Bardem", role: "مظنون اصلی", img: "https://i.pravatar.cc/150?img=23" },
            { name: "Viola Davis", role: "رئیس پلیس", img: "https://i.pravatar.cc/150?img=55" },
        ],
        related: ["شهر خاموش", "آخرین نفس", "فرشته انتقام"],
        comments: [
            { user: "صادق", rating: 5, text: "دیوید فینچر دوباره شاهکار ساخت. دنزل واشینگتن بی‌نظیر!", date: "۱۴۰۳/۰۷/۰۲", likes: 47 },
            { user: "ناهید", rating: 5, text: "پیچش پایان کاملاً غیرمنتظره بود. باید دو بار ببینیش!", date: "۱۴۰۳/۰۷/۱۵", likes: 38 },
        ]
    },
    "فرشته انتقام": {
        title: "Angel of Vengeance",
        titleFa: "فرشته انتقام",
        poster: "img/slider1/6.webp",
        year: "2024",
        duration: "۲ ساعت ۲۲ دقیقه",
        country: "آمریکا",
        lang: "انگلیسی",
        director: "George Miller",
        writer: "Nico Lathouris",
        studio: "Universal",
        genres: ["اکشن", "علمی‌تخیلی", "هیجان‌انگیز"],
        quality: "4K HDR",
        imdb: "8.7",
        rt: "97%",
        usersScore: "4.8",
        desc: "اکشن و هیجان با صحنه‌های فوق‌العاده. در دنیایی پس از فروپاشی تمدن، یک زن بازگشته از مرگ برای انتقام می‌جنگد.",
        story: "فورزیوسا پس از سال‌ها اسارت، بالاخره راهی برای فرار پیدا می‌کند. اما آزادی قیمتی دارد: او باید با قدرتمندترین اربابان بیابان روبرو شود. این داستان خلق یک افسانه است — داستان کسی که از قربانی به انتقام‌گیر تبدیل می‌شود.",
        cast: [
            { name: "Anya Taylor-Joy", role: "فورزیوسا", img: "https://i.pravatar.cc/150?img=56" },
            { name: "Chris Hemsworth", role: "دمنتوس", img: "https://i.pravatar.cc/150?img=17" },
            { name: "Tom Burke", role: "پریتوریان جک", img: "https://i.pravatar.cc/150?img=24" },
        ],
        related: ["آخرین نفس", "افسانه پادشاه", "مردان سایه"],
        comments: [
            { user: "آرمین", rating: 5, text: "شاهکار مطلق! جورج میلر دوباره تاریخ سینما رو نوشت.", date: "۱۴۰۳/۰۴/۰۱", likes: 63 },
            { user: "شیرین", rating: 5, text: "آنیا تیلور جوی در این نقش خدایی بود. صحنه‌های اکشن بی‌نظیر!", date: "۱۴۰۳/۰۴/۱۲", likes: 55 },
            { user: "مهدی", rating: 4, text: "بصری‌ترین فیلمی که دیدم. کمی طولانی ولی اصلاً خسته‌کننده نیست.", date: "۱۴۰۳/۰۵/۰۸", likes: 29 },
        ]
    },
    "عصر یخبندان نو": {
        title: "New Ice Age",
        titleFa: "عصر یخبندان نو",
        poster: "img/slider1/7.webp",
        year: "2024",
        duration: "۱ ساعت ۳۸ دقیقه",
        country: "آمریکا",
        lang: "انگلیسی",
        director: "Carlos Saldanha",
        writer: "Michael Berg",
        studio: "20th Century Studios",
        genres: ["انیمیشن", "کمدی", "ماجراجویی"],
        quality: "4K",
        imdb: "7.2",
        rt: "78%",
        usersScore: "4.0",
        desc: "انیمیشن کمدی و دیدنی برای تمام خانواده. ماموث‌ها و دوستانشان در یک ماجراجویی جدید.",
        story: "وقتی یخ‌های قطبی دوباره شروع به پیشروی می‌کنند، مانی، دیگو و سید باید مسیری جدید برای خانه‌شان پیدا کنند. این بار با یک خانواده اسرارآمیز از ماموث‌های منجمد هزار ساله روبرو می‌شوند.",
        cast: [
            { name: "Ray Romano", role: "مانی (صدا)", img: "https://i.pravatar.cc/150?img=25" },
            { name: "John Leguizamo", role: "سید (صدا)", img: "https://i.pravatar.cc/150?img=26" },
            { name: "Denis Leary", role: "دیگو (صدا)", img: "https://i.pravatar.cc/150?img=27" },
        ],
        related: ["انیمیشن فراموشی", "رؤیای نیمه شب"],
        comments: [
            { user: "ستاره", rating: 4, text: "بچه‌ها عاشقش شدن! خانوادگی عالیه.", date: "۱۴۰۳/۰۳/۲۰", likes: 18 },
        ]
    },
    "انیمیشن فراموشی": {
        title: "Oblivion",
        titleFa: "انیمیشن فراموشی",
        poster: "img/slider1/p4.webp",
        year: "2024",
        duration: "۱ ساعت ۵۲ دقیقه",
        country: "آمریکا، ژاپن",
        lang: "انگلیسی",
        director: "Pete Docter",
        writer: "Meg LeFauve",
        studio: "Pixar",
        genres: ["انیمیشن", "درام", "خانوادگی"],
        quality: "4K",
        imdb: "8.4",
        rt: "96%",
        usersScore: "4.7",
        desc: "داستانی زیبا و احساسی از پیکسار که تمام خانواده را به اشک وا می‌دارد.",
        story: "لونا، یک دختر ۱۲ ساله، روزی از خواب بیدار می‌شود و می‌بیند که خاطرات مادرش به تدریج محو می‌شوند. او باید به دنیای درون ذهن مادرش سفر کند و خاطرات فراموش‌شده را پیدا کند قبل از اینکه برای همیشه از دست بروند.",
        cast: [
            { name: "Amy Poehler", role: "مادر (صدا)", img: "https://i.pravatar.cc/150?img=57" },
            { name: "Maya Hawke", role: "لونا (صدا)", img: "https://i.pravatar.cc/150?img=58" },
            { name: "Bill Hader", role: "دوست خیالی", img: "https://i.pravatar.cc/150?img=28" },
        ],
        related: ["عصر یخبندان نو", "رؤیای نیمه شب"],
        comments: [
            { user: "فاطمه", rating: 5, text: "گریه کردم! پیکسار دوباره قلب رو شکست.", date: "۱۴۰۳/۰۸/۰۵", likes: 72 },
            { user: "حسین", rating: 5, text: "با بچه‌ام دیدم. هر دومون اشک ریختیم! شاهکاره.", date: "۱۴۰۳/۰۸/۱۸", likes: 48 },
        ]
    }
};

// ============================================
// لود دیتا از URL پارامتر
// ============================================
$(document).ready(function () {

    const params = new URLSearchParams(window.location.search);
    const movieName = params.get("movie") || "افسانه پادشاه";
    const data = moviesData[movieName] || moviesData["افسانه پادشاه"];

    renderMoviePage(data);
    setupInteractions();
});

function renderMoviePage(data) {
    // عنوان
    document.title = `سینما نوین | ${data.title}`;
    $("#movieTitle").text(data.title);
    $("#movieTitleFa").text(data.titleFa);

    // پس‌زمینه بلور
    $("#movieHeroBg").css("background-image", `url('${data.poster}')`);
    $("#moviePoster").attr("src", data.poster);
    $("#playerThumb").attr("src", data.poster);

    // بج‌ها
    let badgesHtml = data.genres.map(g => `<span class="badge-genre">${g}</span>`).join("");
    badgesHtml += `<span class="badge-quality">${data.quality}</span>`;
    $("#movieBadges").html(badgesHtml);

    // آمار
    $("#movieStats").html(`
        <div class="stat-item"><span class="imdb-score">IMDb ${data.imdb}</span></div>
        <div class="stat-item"><i class="bi bi-clock"></i> ${data.duration}</div>
        <div class="stat-item"><i class="bi bi-calendar3"></i> ${data.year}</div>
        <div class="stat-item"><i class="bi bi-globe2"></i> ${data.country}</div>
    `);

    // توضیح
    $("#movieDesc").text(data.desc);

    // امتیازات
    $("#scoreImdb").text(data.imdb);
    $("#scoreRt").text(data.rt);
    $("#scoreUsers").text(data.usersScore);

    // اطلاعات تب
    $("#infoDirector").text(data.director);
    $("#infoWriter").text(data.writer);
    $("#infoYear").text(data.year);
    $("#infoCountry").text(data.country);
    $("#infoDuration").text(data.duration);
    $("#infoLang").text(data.lang);
    $("#infoStudio").text(data.studio);
    $("#infoGenre").text(data.genres.join("، "));
    $("#infoStory").text(data.story);
    $("#playerDuration").text(data.duration);

    // اطلاعات سریع sidebar
    $("#quickInfo").html(`
        <div class="qi-row"><span class="qi-label">کارگردان</span><span class="qi-val">${data.director}</span></div>
        <div class="qi-row"><span class="qi-label">سال</span><span class="qi-val">${data.year}</span></div>
        <div class="qi-row"><span class="qi-label">مدت</span><span class="qi-val">${data.duration}</span></div>
        <div class="qi-row"><span class="qi-label">زبان</span><span class="qi-val">${data.lang}</span></div>
        <div class="qi-row"><span class="qi-label">کیفیت</span><span class="qi-val">${data.quality}</span></div>
    `);

    // بازیگران
    const castHtml = data.cast.map(c => `
        <div class="cast-card">
            <img src="${c.img}" alt="${c.name}" onerror="this.src='https://i.pravatar.cc/150?img=1'">
            <div class="cast-name">${c.name}</div>
            <div class="cast-role">${c.role}</div>
        </div>
    `).join("");
    $("#castGrid").html(castHtml);

    // نظرات
    renderComments(data.comments);

    // فیلم‌های مشابه
    const relatedHtml = data.related.map(name => {
        const r = moviesData[name];
        if (!r) return "";
        return `
            <div class="related-item" onclick="goToMovie('${name}')">
                <img src="${r.poster}" alt="${name}" onerror="this.src='img/slider1/8.webp'">
                <div class="related-info">
                    <div class="related-title">${r.titleFa}</div>
                    <div class="related-meta">${r.year} • ${r.genres[0]}</div>
                    <div class="related-imdb">⭐ ${r.imdb}</div>
                </div>
            </div>
        `;
    }).join("");
    $("#relatedList").html(relatedHtml);
}

function renderComments(comments) {
    if (!comments || comments.length === 0) {
        $("#commentsList").html('<p style="color:#666;text-align:center;padding:20px;">اولین نفری باشید که نظر می‌دهید!</p>');
        return;
    }
    const html = comments.map(c => {
        const stars = "★".repeat(c.rating) + "☆".repeat(5 - c.rating);
        return `
            <div class="comment-item">
                <div class="comment-avatar">${c.user[0]}</div>
                <div class="comment-body">
                    <div class="comment-header">
                        <span class="comment-user">${c.user}</span>
                        <span class="comment-date">${c.date}</span>
                    </div>
                    <div class="comment-stars">${stars}</div>
                    <div class="comment-text">${c.text}</div>
                    <div class="comment-like">
                        <span><i class="bi bi-hand-thumbs-up"></i> ${c.likes}</span>
                        <span><i class="bi bi-reply"></i> پاسخ</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    $("#commentsList").html(html);
}

function setupInteractions() {
    // دکمه پخش
    $("#btnWatch").click(function () {
        const $player = $("#playerSection");
        if ($player.is(":hidden")) {
            $player.slideDown(300);
            setTimeout(() => {
                $player[0].scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
            // شبیه‌سازی loading
            $(".player-loading").css("display", "flex");
            setTimeout(() => $(".player-loading").hide(), 1800);
        } else {
            $player.slideUp(300);
        }
    });

    // دکمه تریلر
    $("#btnTrailer").click(function () {
        alert("تریلر در حال بارگذاری...");
    });

    // دکمه ذخیره
    let wishlisted = false;
    $("#btnWishlist").click(function () {
        wishlisted = !wishlisted;
        $(this).find("i").toggleClass("bi-bookmark-plus bi-bookmark-check-fill");
        $(this).css("background", wishlisted ? "rgba(183,28,28,0.4)" : "rgba(255,255,255,0.08)");
        $(this).css("border-color", wishlisted ? "#b71c1c" : "rgba(255,255,255,0.2)");
    });

    // دکمه اشتراک‌گذاری
    $("#btnShare").click(function () {
        if (navigator.share) {
            navigator.share({ title: document.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("لینک کپی شد!");
        }
    });

    // تب‌ها
    $(".tab").click(function () {
        const target = $(this).data("tab");
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").removeClass("active");
        $(`#tab-${target}`).addClass("active");
    });

    // ستاره‌های امتیاز
    let selectedRating = 0;
    $("#ratingStars i").hover(
        function () {
            const val = $(this).data("val");
            $("#ratingStars i").each(function () {
                $(this).toggleClass("bi-star-fill active", $(this).data("val") <= val);
                $(this).toggleClass("bi-star", $(this).data("val") > val);
            });
        },
        function () {
            $("#ratingStars i").each(function () {
                $(this).toggleClass("bi-star-fill active", $(this).data("val") <= selectedRating);
                $(this).toggleClass("bi-star", $(this).data("val") > selectedRating);
            });
        }
    ).click(function () {
        selectedRating = $(this).data("val");
    });

    // ارسال نظر
    $(".btn-submit-comment").click(function () {
        const text = $(".comment-form textarea").val().trim();
        if (!text) { alert("لطفاً نظر خود را بنویسید."); return; }
        if (!selectedRating) { alert("لطفاً امتیاز بدهید."); return; }

        const newComment = {
            user: "کاربر مهمان",
            rating: selectedRating,
            text: text,
            date: new Date().toLocaleDateString("fa-IR"),
            likes: 0
        };

        const stars = "★".repeat(newComment.rating) + "☆".repeat(5 - newComment.rating);
        const html = `
            <div class="comment-item" style="animation:fadeUp 0.4s ease;">
                <div class="comment-avatar">${newComment.user[0]}</div>
                <div class="comment-body">
                    <div class="comment-header">
                        <span class="comment-user">${newComment.user}</span>
                        <span class="comment-date">${newComment.date}</span>
                    </div>
                    <div class="comment-stars">${stars}</div>
                    <div class="comment-text">${newComment.text}</div>
                    <div class="comment-like"><span><i class="bi bi-hand-thumbs-up"></i> 0</span></div>
                </div>
            </div>
        `;
        $("#commentsList").prepend(html);
        $(".comment-form textarea").val("");
        selectedRating = 0;
        $("#ratingStars i").removeClass("bi-star-fill active").addClass("bi-star");
    });

    // گزینه‌های پلیر
    $(".opt-btn").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    // play button در پلیر
    $(".play-main").click(function () {
        const icon = $(this).find("i");
        if (icon.hasClass("fa-play")) {
            icon.removeClass("fa-play").addClass("fa-pause");
        } else {
            icon.removeClass("fa-pause").addClass("fa-play");
        }
    });
}

function goToMovie(name) {
    window.location.href = `movie.html?movie=${encodeURIComponent(name)}`;
}



});