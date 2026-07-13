$(function () {

    "use strict";

    // SVG Inject js
    SVGInject(document.querySelectorAll("img.injectable"));

    // Menu fix js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });

    // Banner Slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        dots: true,
        arrows: false,
    });

    // Category Slider
    $('.category_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    // Select js
    $('.select_js').niceSelect();

    // Counter js
    $('.counter').countUp();

    // Vanobox js
    $('.venobox').venobox();

    const isHomePage = $('body').hasClass('home_2') && !$('body').hasClass('event_page') && !$('body').hasClass('about_page') && !$('body').hasClass('contact_page');
    const homeLang = localStorage.getItem('uya_home_lang') || 'en';

    const aiHelpContent = {
        en: {
            volunteer: {
                tag: 'Recommended path',
                title: 'Start as a field volunteer',
                text: 'Join a local drive for 2-3 hours. Help with crowd guidance, item distribution, registrations, or follow-up visits around Egara and Raniganj.',
                link: 'contact.html',
                linkText: 'Reach Us'
            },
            donate: {
                tag: 'Support suggestion',
                title: 'Support a focused community need',
                text: 'Choose a clear need like school kits, food support, health awareness, or event logistics. We will guide you with the current priority.',
                link: 'contact.html',
                linkText: 'Reach Us'
            },
            blood: {
                tag: 'Sports event support',
                title: 'Help organize the Floodlight Football Cup',
                text: 'You can help with team registration, ground coordination, crowd guidance, match support, or local event arrangements for the Gill Cup.',
                link: 'event.html',
                linkText: 'View Events'
            },
            support: {
                tag: 'Local support request',
                title: 'Share the need with basic details',
                text: 'Tell us the location, type of support needed, urgency, and a contact number. Our volunteers will review and respond based on capacity.',
                link: 'contact.html',
                linkText: 'Request Help'
            }
        },
        bn: {
            volunteer: {
                tag: 'প্রস্তাবিত পথ',
                title: 'মাঠ পর্যায়ের স্বেচ্ছাসেবক হিসেবে শুরু করুন',
                text: '২-৩ ঘণ্টার স্থানীয় ড্রাইভে যোগ দিন। ভিড় নিয়ন্ত্রণ, সামগ্রী বিতরণ, রেজিস্ট্রেশন বা এগারা ও রানিগঞ্জ এলাকায় ফলো-আপে সাহায্য করুন।',
                link: 'contact.html',
                linkText: 'যোগাযোগ করুন'
            },
            donate: {
                tag: 'সহায়তার পরামর্শ',
                title: 'নির্দিষ্ট কমিউনিটি প্রয়োজনে সহায়তা করুন',
                text: 'স্কুল কিট, খাদ্য সহায়তা, স্বাস্থ্য সচেতনতা বা রক্তদান ক্যাম্পের ব্যবস্থাপনার মতো পরিষ্কার একটি কারণ বেছে নিন। আমরা বর্তমান প্রয়োজন জানাব।',
                link: 'campaign_list.html',
                linkText: 'কারণ দেখুন'
            },
            blood: {
                tag: 'স্বাস্থ্য ড্রাইভ সহায়তা',
                title: 'রক্তদান ক্যাম্প আয়োজনে সাহায্য করুন',
                text: 'আপনি রক্ত দিতে পারেন, ডোনার রেজিস্টার করতে পারেন, সচেতনতা ছড়াতে পারেন, পরিবহন বা মাঠ পর্যায়ের সমন্বয়ে সাহায্য করতে পারেন।',
                link: 'event.html',
                linkText: 'ইভেন্ট দেখুন'
            },
            support: {
                tag: 'স্থানীয় সহায়তার অনুরোধ',
                title: 'প্রয়োজনের মূল তথ্য আমাদের জানান',
                text: 'স্থান, কী ধরনের সহায়তা দরকার, জরুরি কিনা এবং যোগাযোগ নম্বর জানান। আমাদের স্বেচ্ছাসেবকরা সক্ষমতা অনুযায়ী উত্তর দেবেন।',
                link: 'contact.html',
                linkText: 'সাহায্য চান'
            }
        },
        hi: {
            volunteer: {
                tag: 'सुझाया गया रास्ता',
                title: 'फील्ड वॉलंटियर के रूप में शुरू करें',
                text: '2-3 घंटे की स्थानीय ड्राइव में जुड़ें। भीड़ मार्गदर्शन, सामान वितरण, रजिस्ट्रेशन या एगारा और रानीगंज में फॉलो-अप में मदद करें।',
                link: 'contact.html',
                linkText: 'संपर्क करें'
            },
            donate: {
                tag: 'दान सुझाव',
                title: 'एक स्पष्ट सामुदायिक जरूरत में सहयोग करें',
                text: 'स्कूल किट, भोजन सहायता, स्वास्थ्य जागरूकता या ब्लड डोनेशन कैंप व्यवस्था जैसी स्पष्ट जरूरत चुनें। हम वर्तमान प्राथमिकता बताएंगे।',
                link: 'campaign_list.html',
                linkText: 'कारण देखें'
            },
            blood: {
                tag: 'हेल्थ ड्राइव सहयोग',
                title: 'ब्लड डोनेशन कैंप आयोजित करने में मदद करें',
                text: 'आप रक्तदान कर सकते हैं, डोनर रजिस्टर कर सकते हैं, जागरूकता फैला सकते हैं, परिवहन या ऑन-ग्राउंड समन्वय में मदद कर सकते हैं।',
                link: 'event.html',
                linkText: 'इवेंट देखें'
            },
            support: {
                tag: 'स्थानीय मदद अनुरोध',
                title: 'जरूरत की जरूरी जानकारी साझा करें',
                text: 'स्थान, मदद का प्रकार, तात्कालिकता और संपर्क नंबर बताएं। हमारे वॉलंटियर क्षमता के अनुसार समीक्षा कर जवाब देंगे।',
                link: 'contact.html',
                linkText: 'मदद मांगें'
            }
        }
    };

    const homeTranslations = {
        en: {
            text: {
                'title': 'United Youth Association - Community Association',
                '.navbar-nav .nav-item:eq(0) .nav-link': 'Home',
                '.navbar-nav .nav-item:eq(1) .nav-link': 'About',
                '.navbar-nav .nav-item:eq(2) .nav-link': 'Our Work',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(0) a': 'Causes',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(1) a': 'Services',
                '.navbar-nav .nav-item:eq(3) .nav-link': 'Events',
                '.navbar-nav .nav-item:eq(4) .nav-link': 'Gallery',
                '.navbar-nav .nav-item:eq(5) .nav-link': 'Volunteers',
                '.banner_slider_item[style*="banner-11122"] .banner_text h5': 'United Youth Association',
                '.banner_slider_item[style*="banner-11122"] .banner_text h1': 'Young Hands, Real Help For Our Community.',
                '.banner_slider_item[style*="banner-11122"] .banner_text p': 'We started just two months ago with a simple goal: support children, families, and elderly people through small but consistent community action.',
                '.banner_slider_item[style*="banner-10"] .banner_text h5': 'New Association, Honest Work',
                '.banner_slider_item[style*="banner-10"] .banner_text h1': 'Building Trust One Local Drive At A Time.',
                '.banner_slider_item[style*="banner-10"] .banner_text p': 'Our team is still young, but our commitment is clear. Every effort goes toward practical needs like food, school supplies, basic care, and awareness programs.',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h5': 'Together We Can Begin',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h1': 'Small Steps Can Create Lasting Change.',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text p': 'United Youth Association brings local volunteers together to respond to real needs in our nearby communities.',
                '.banner_text .common_btn': 'discover more',
                '.category_item h3:eq(0)': 'Yoga Day',
                '.category_item h3:eq(1)': 'Blood Donation',
                '.category_item h3:eq(2)': 'Volunteer Team',
                '.category_item h3:eq(3)': 'Awareness',
                '.category_item h3:eq(4)': 'Sports Support',
                '.category_item h3:eq(5)': 'Social Help',
                '.about_us_2 .section_heading h5': 'About Us',
                '.about_us_2 .section_heading h2': 'A Youth-Led Community Association Working With Local Families',
                '.about_description': 'United Youth Association began two months ago with a small group of volunteers and a shared promise to serve with honesty. We focus on practical help for children, families, elderly people, and local communities.',
                '.about_2_text_img .common_btn': 'Read more',
                '.campaign_2 .section_heading h5': 'Current Focus',
                '.campaign_2 .section_heading h2': 'Support Our First Community Causes',
                '.campaign_2 .section_heading_btn .common_btn': 'view more',
                '.become_volunteer_text h2': 'Join Us As A Founding Volunteer',
                '.become_volunteer_text p': 'We are looking for dependable people who can give time, skills, transport support, or local guidance as our work grows from the first few community drives.',
                '.become_volunteer_text .common_btn': 'Join Volunteer',
                '.ai_help_intro span': 'AI Help Assistant',
                '.ai_help_intro h2': 'Find the best way to support our work.',
                '.ai_help_intro p': 'Choose what you want to do. The assistant will suggest the most useful next step for volunteering, local support, or event help.',
                '.ai_help_prompt strong': 'What do you want help with?',
                '.ai_help_prompt span': 'Select one option to get a quick recommendation.',
                '.services_2 .section_heading h5': 'Services',
                '.services_2 .section_heading h2': 'What We Are Starting With',
                '.services_2 .section_heading_btn .common_btn': 'view more',
                '.services_2 .service_item:eq(0) .title': 'Education',
                '.services_2 .service_item:eq(0) p': 'School kits, notebooks, and learning support for children who need a little help to continue their studies.',
                '.services_2 .service_item:eq(1) .title': 'Financial Support',
                '.services_2 .service_item:eq(1) p': 'Small emergency assistance for food, travel, medicines, and basic needs after volunteer verification.',
                '.services_2 .service_item:eq(2) .title': 'Health Awareness',
                '.services_2 .service_item:eq(2) p': 'Local awareness camps on hygiene, nutrition, first aid, and preventive healthcare with community partners.',
                '.services_2 .service_item:eq(3) .title': 'Community Drives',
                '.services_2 .service_item:eq(3) p': 'Organized volunteer drives for ration distribution, awareness, cleanliness, and urgent local support.',
                '.services_2 .service_item:eq(4) .title': 'Medical Help',
                '.services_2 .service_item:eq(4) p': 'Basic medical guidance, medicine support, and referral help for families who cannot manage alone.',
                '.services_2 .service_item:eq(5) .title': 'Elder Care',
                '.services_2 .service_item:eq(5) p': 'Doorstep check-ins, essential items, and friendly support for elderly people in nearby areas.',
                '.event_2 .section_heading h5': 'Events',
                '.event_2 .section_heading h2': 'Upcoming Community Activities',
                '.event_2 .section_heading_btn .common_btn': 'view more',
                '.event_2 .wssus__event_item_2 .title': 'Floodlight Football Cup',
                '.event_2 .wssus__event_item_2 .text p': 'Join the Gill Cup, a 16-team mini-bar football tournament at New Egara, Raniganj.',
                '.home_gallery_area .section_heading h5': 'Gallery',
                '.home_gallery_area .section_heading h2': 'Moments From Our Community Work',
                '.home_faq_area .section_heading h5': 'FAQ',
                '.home_faq_area .section_heading h2': 'Common Questions About United Youth Association',
                '.home_faq_intro': 'Clear answers for volunteers and community members who want to understand how we work.',
                '.testimonial_2_bg .section_heading h5': 'Community Voices',
                '.testimonial_2_bg .section_heading h2': 'What People Say About Our First Efforts',
                '.footer_2_logo_area p': 'United Youth Association is an Indian youth-led community association working for education, health, food support, and community care.',
                '.footer_2_link:eq(0) h3': 'Quick Links',
                '.footer_2_link:eq(1) h3': 'Get Involved',
                '.footer_2_contact h3': 'Reach Us'
            },
            buttons: {
                '.ai_help_options button[data-ai-help="volunteer"]': 'Volunteer',
                '.ai_help_options button[data-ai-help="blood"]': 'Blood Donation',
                '.ai_help_options button[data-ai-help="support"]': 'Need Support',
                '#gallery-tab': 'Gallery',
                '#video-tab': 'Video'
            },
            faq: [
                'What does United Youth Association do?',
                'How can I become a volunteer?',
                'Can I support a specific cause?',
                'Where are your activities based?'
            ],
            faqBody: [
                'United Youth Association works on local education support, health awareness, blood donation, food and essentials support, and elderly care through youth-led community drives.',
                'Reach our team through the Contact page and share your name, phone number, area, and available time. Our team will connect you with suitable field or support work.',
                'Yes. You can help with specific needs such as school kits, food support, health awareness, or event arrangements. We keep the purpose clear before accepting support.',
                'Our current work is based around Egara, Raniganj, Paschim Bardhaman, West Bengal, with a focus on nearby local communities.'
            ]
        },
        bn: {
            text: {
                'title': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন - কমিউনিটি এসোসিয়েশন',
                '.navbar-nav .nav-item:eq(0) .nav-link': 'হোম',
                '.navbar-nav .nav-item:eq(1) .nav-link': 'আমাদের সম্পর্কে',
                '.navbar-nav .nav-item:eq(2) .nav-link': 'আমাদের কাজ',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(0) a': 'কারণ',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(1) a': 'সেবা',
                '.navbar-nav .nav-item:eq(3) .nav-link': 'ইভেন্ট',
                '.navbar-nav .nav-item:eq(4) .nav-link': 'স্বেচ্ছাসেবক',
                '.navbar-nav .nav-item:eq(5) .nav-link': 'আপডেট',
                '.menu_right .common_btn': 'যোগাযোগ করুন',
                '.banner_slider_item[style*="banner-11122"] .banner_text h5': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন',
                '.banner_slider_item[style*="banner-11122"] .banner_text h1': 'তরুণ হাত, আমাদের সমাজের জন্য সত্যিকারের সহায়তা।',
                '.banner_slider_item[style*="banner-11122"] .banner_text p': 'মাত্র দুই মাস আগে আমরা সহজ লক্ষ্য নিয়ে শুরু করেছি: ছোট কিন্তু নিয়মিত কমিউনিটি কাজের মাধ্যমে শিশু, পরিবার ও বয়স্কদের পাশে দাঁড়ানো।',
                '.banner_slider_item[style*="banner-10"] .banner_text h5': 'নতুন এসোসিয়েশন, সৎ কাজ',
                '.banner_slider_item[style*="banner-10"] .banner_text h1': 'প্রতিটি স্থানীয় ড্রাইভে বিশ্বাস গড়ে তুলছি।',
                '.banner_slider_item[style*="banner-10"] .banner_text p': 'আমাদের দল এখনও নতুন, কিন্তু প্রতিশ্রুতি স্পষ্ট। প্রতিটি সহায়তা খাদ্য, স্কুল সামগ্রী, মৌলিক যত্ন ও সচেতনতা কর্মসূচির মতো বাস্তব প্রয়োজনে ব্যবহৃত হয়।',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h5': 'একসাথে শুরু করি',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h1': 'ছোট পদক্ষেপ দীর্ঘস্থায়ী পরিবর্তন আনতে পারে।',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text p': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন স্থানীয় স্বেচ্ছাসেবকদের একত্র করে কাছের সমাজের বাস্তব প্রয়োজনের পাশে দাঁড়ায়।',
                '.banner_text .common_btn': 'আরও জানুন',
                '.category_item h3:eq(0)': 'যোগ দিবস',
                '.category_item h3:eq(1)': 'রক্তদান',
                '.category_item h3:eq(2)': 'স্বেচ্ছাসেবক দল',
                '.category_item h3:eq(3)': 'সচেতনতা',
                '.category_item h3:eq(4)': 'খেলাধুলা সহায়তা',
                '.category_item h3:eq(5)': 'সামাজিক সহায়তা',
                '.about_us_2 .section_heading h5': 'আমাদের সম্পর্কে',
                '.about_us_2 .section_heading h2': 'স্থানীয় পরিবারের পাশে নতুন যুব-নেতৃত্বাধীন এসোসিয়েশন',
                '.about_description': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন দুই মাস আগে কয়েকজন স্বেচ্ছাসেবক এবং সততার সঙ্গে সেবা করার অঙ্গীকার নিয়ে শুরু হয়েছে। আমরা শিশু, পরিবার, বয়স্ক মানুষ এবং স্থানীয় সমাজের বাস্তব সহায়তায় কাজ করি।',
                '.about_2_text_img .common_btn': 'আরও পড়ুন',
                '.campaign_2 .section_heading h5': 'বর্তমান লক্ষ্য',
                '.campaign_2 .section_heading h2': 'আমাদের প্রথম কমিউনিটি কাজগুলোকে সহায়তা করুন',
                '.campaign_2 .section_heading_btn .common_btn': 'আরও দেখুন',
                '.become_volunteer_text h2': 'প্রতিষ্ঠাতা স্বেচ্ছাসেবক হিসেবে যোগ দিন',
                '.become_volunteer_text p': 'আমাদের কাজ প্রথম কয়েকটি কমিউনিটি ড্রাইভ থেকে বড় হচ্ছে। তাই সময়, দক্ষতা, পরিবহন সহায়তা বা স্থানীয় দিকনির্দেশনা দিতে পারবেন এমন নির্ভরযোগ্য মানুষ চাই।',
                '.become_volunteer_text .common_btn': 'স্বেচ্ছাসেবক হন',
                '.ai_help_intro span': 'AI সহায়তা অ্যাসিস্ট্যান্ট',
                '.ai_help_intro h2': 'আমাদের কাজে সহায়তার সেরা পথ খুঁজুন।',
                '.ai_help_intro p': 'আপনি কী করতে চান তা বেছে নিন। অ্যাসিস্ট্যান্ট স্বেচ্ছাসেবা, দান, স্থানীয় সহায়তা বা রক্তদানের জন্য উপযুক্ত পরবর্তী ধাপ জানাবে।',
                '.ai_help_prompt strong': 'আপনি কী বিষয়ে সাহায্য চান?',
                '.ai_help_prompt span': 'দ্রুত পরামর্শ পেতে একটি অপশন বেছে নিন।',
                '.services_2 .section_heading h5': 'সেবা',
                '.services_2 .section_heading h2': 'আমরা যা দিয়ে শুরু করছি',
                '.services_2 .section_heading_btn .common_btn': 'আরও দেখুন',
                '.services_2 .service_item:eq(0) .title': 'শিক্ষা',
                '.services_2 .service_item:eq(0) p': 'যেসব শিশু পড়াশোনা চালিয়ে যেতে সামান্য সাহায্য চায় তাদের জন্য স্কুল কিট, খাতা এবং শেখার সহায়তা।',
                '.services_2 .service_item:eq(1) .title': 'আর্থিক সহায়তা',
                '.services_2 .service_item:eq(1) p': 'স্বেচ্ছাসেবক যাচাইয়ের পর খাদ্য, যাতায়াত, ওষুধ এবং মৌলিক প্রয়োজনের জন্য ছোট জরুরি সহায়তা।',
                '.services_2 .service_item:eq(2) .title': 'স্বাস্থ্য সচেতনতা',
                '.services_2 .service_item:eq(2) p': 'কমিউনিটি পার্টনারদের সঙ্গে স্বাস্থ্যবিধি, পুষ্টি, প্রাথমিক চিকিৎসা এবং প্রতিরোধমূলক স্বাস্থ্য বিষয়ে স্থানীয় ক্যাম্প।',
                '.services_2 .service_item:eq(3) .title': 'কমিউনিটি ড্রাইভ',
                '.services_2 .service_item:eq(3) p': 'রেশন বিতরণ, সচেতনতা, পরিচ্ছন্নতা এবং জরুরি স্থানীয় সহায়তার জন্য সংগঠিত স্বেচ্ছাসেবক ড্রাইভ।',
                '.services_2 .service_item:eq(4) .title': 'চিকিৎসা সহায়তা',
                '.services_2 .service_item:eq(4) p': 'যে পরিবার একা সামলাতে পারে না তাদের জন্য প্রাথমিক চিকিৎসা নির্দেশনা, ওষুধ সহায়তা এবং রেফারেল সাহায্য।',
                '.services_2 .service_item:eq(5) .title': 'বয়স্কদের যত্ন',
                '.services_2 .service_item:eq(5) p': 'কাছাকাছি এলাকার বয়স্ক মানুষদের জন্য বাড়িতে খোঁজ নেওয়া, প্রয়োজনীয় সামগ্রী এবং বন্ধুত্বপূর্ণ সহায়তা।',
                '.event_2 .section_heading h5': 'ইভেন্ট',
                '.event_2 .section_heading h2': 'আসন্ন কমিউনিটি কার্যক্রম',
                '.event_2 .section_heading_btn .common_btn': 'আরও দেখুন',
                '.event_2 .wssus__event_item_2 .title': 'রক্তদান শিবির',
                '.event_2 .wssus__event_item_2 .text p': 'আমাদের কমিউনিটি রক্তদান ড্রাইভে রক্ত দিন এবং জীবন বাঁচাতে সাহায্য করুন।',
                '.home_gallery_area .section_heading h5': 'গ্যালারি',
                '.home_gallery_area .section_heading h2': 'আমাদের কমিউনিটি কাজের মুহূর্ত',
                '.home_faq_area .section_heading h5': 'প্রশ্নোত্তর',
                '.home_faq_area .section_heading h2': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন সম্পর্কে সাধারণ প্রশ্ন',
                '.home_faq_intro': 'স্বেচ্ছাসেবক, দাতা এবং সমাজের মানুষ যারা আমাদের কাজ বুঝতে চান তাদের জন্য পরিষ্কার উত্তর।',
                '.testimonial_2_bg .section_heading h5': 'কমিউনিটির কথা',
                '.testimonial_2_bg .section_heading h2': 'আমাদের প্রথম প্রচেষ্টা সম্পর্কে মানুষের মতামত',
                '.footer_2_logo_area p': 'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন একটি নতুন ভারতীয় যুব-নেতৃত্বাধীন এসোসিয়েশন, যা শিক্ষা, স্বাস্থ্য, খাদ্য সহায়তা এবং কমিউনিটি কেয়ারে কাজ করে।',
                '.footer_2_link:eq(0) h3': 'দ্রুত লিঙ্ক',
                '.footer_2_link:eq(1) h3': 'যুক্ত হন',
                '.footer_2_contact h3': 'যোগাযোগ'
            },
            buttons: {
                '.ai_help_options button[data-ai-help="volunteer"]': 'স্বেচ্ছাসেবক',
                '.ai_help_options button[data-ai-help="blood"]': 'রক্তদান',
                '.ai_help_options button[data-ai-help="support"]': 'সহায়তা চাই',
                '#gallery-tab': 'গ্যালারি',
                '#video-tab': 'ভিডিও'
            },
            faq: [
                'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন কী কাজ করে?',
                'আমি কীভাবে স্বেচ্ছাসেবক হতে পারি?',
                'আমি কি নির্দিষ্ট কারণে দান করতে পারি?',
                'আপনাদের কার্যক্রম কোথায় হয়?'
            ],
            faqBody: [
                'ইউনাইটেড ইয়ুথ অ্যাসোসিয়েশন যুব-নেতৃত্বাধীন কমিউনিটি ড্রাইভের মাধ্যমে শিক্ষা সহায়তা, স্বাস্থ্য সচেতনতা, রক্তদান, খাদ্য ও প্রয়োজনীয় সামগ্রী সহায়তা এবং বয়স্কদের যত্ন নিয়ে কাজ করে।',
                'Contact পেজে আপনার নাম, ফোন নম্বর, এলাকা এবং সময় জানাতে পারেন। আমাদের দল আপনাকে উপযুক্ত মাঠ বা সহায়ক কাজে যুক্ত করবে।',
                'হ্যাঁ। স্কুল কিট, খাদ্য সহায়তা, স্বাস্থ্য সচেতনতা বা রক্তদান ক্যাম্পের ব্যবস্থাপনার মতো নির্দিষ্ট প্রয়োজনে সহায়তা করতে পারেন। সহায়তা নেওয়ার আগে উদ্দেশ্য পরিষ্কার রাখা হয়।',
                'আমাদের বর্তমান কাজ এগারা, রানিগঞ্জ, পশ্চিম বর্ধমান, পশ্চিমবঙ্গ এবং আশেপাশের স্থানীয় সমাজকে কেন্দ্র করে।'
            ]
        },
        hi: {
            text: {
                'title': 'यूनाइटेड यूथ एसोसिएशन - कम्युनिटी एसोसिएशन',
                '.navbar-nav .nav-item:eq(0) .nav-link': 'होम',
                '.navbar-nav .nav-item:eq(1) .nav-link': 'हमारे बारे में',
                '.navbar-nav .nav-item:eq(2) .nav-link': 'हमारा काम',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(0) a': 'कारण',
                '.navbar-nav .nav-item:eq(2) .sub_menu li:eq(1) a': 'सेवाएं',
                '.navbar-nav .nav-item:eq(3) .nav-link': 'इवेंट',
                '.navbar-nav .nav-item:eq(4) .nav-link': 'वॉलंटियर',
                '.navbar-nav .nav-item:eq(5) .nav-link': 'अपडेट',
                '.menu_right .common_btn': 'संपर्क करें',
                '.banner_slider_item[style*="banner-11122"] .banner_text h5': 'यूनाइटेड यूथ एसोसिएशन',
                '.banner_slider_item[style*="banner-11122"] .banner_text h1': 'युवा हाथ, हमारे समाज के लिए सच्ची मदद।',
                '.banner_slider_item[style*="banner-11122"] .banner_text p': 'हमने दो महीने पहले एक सरल लक्ष्य से शुरुआत की: छोटे लेकिन नियमित सामुदायिक काम से बच्चों, परिवारों और बुजुर्गों की मदद करना।',
                '.banner_slider_item[style*="banner-10"] .banner_text h5': 'नया एसोसिएशन, ईमानदार काम',
                '.banner_slider_item[style*="banner-10"] .banner_text h1': 'हर स्थानीय ड्राइव से भरोसा बना रहे हैं।',
                '.banner_slider_item[style*="banner-10"] .banner_text p': 'हमारी टीम अभी नई है, लेकिन प्रतिबद्धता साफ है। हर दान भोजन, स्कूल सामग्री, बेसिक केयर और जागरूकता कार्यक्रम जैसी वास्तविक जरूरतों में जाता है।',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h5': 'मिलकर शुरुआत करें',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text h1': 'छोटे कदम लंबे बदलाव ला सकते हैं।',
                '.banner_slider_item[style*="banner-111.jpeg"] .banner_text p': 'यूनाइटेड यूथ एसोसिएशन स्थानीय वॉलंटियरों को साथ लाकर नजदीकी समुदाय की वास्तविक जरूरतों में मदद करता है।',
                '.banner_text .common_btn': 'और जानें',
                '.category_item h3:eq(0)': 'योग दिवस',
                '.category_item h3:eq(1)': 'रक्तदान',
                '.category_item h3:eq(2)': 'स्वयंसेवक टीम',
                '.category_item h3:eq(3)': 'जागरूकता',
                '.category_item h3:eq(4)': 'खेल सहयोग',
                '.category_item h3:eq(5)': 'सामाजिक मदद',
                '.about_us_2 .section_heading h5': 'हमारे बारे में',
                '.about_us_2 .section_heading h2': 'स्थानीय परिवारों के साथ काम करने वाला नया युवा-नेतृत्व एसोसिएशन',
                '.about_description': 'यूनाइटेड यूथ एसोसिएशन दो महीने पहले कुछ वॉलंटियरों और ईमानदारी से सेवा करने के वादे के साथ शुरू हुआ। हम बच्चों, परिवारों, बुजुर्गों और स्थानीय समुदायों की व्यावहारिक मदद पर ध्यान देते हैं।',
                '.about_2_text_img .common_btn': 'और पढ़ें',
                '.campaign_2 .section_heading h5': 'वर्तमान फोकस',
                '.campaign_2 .section_heading h2': 'हमारे पहले सामुदायिक कारणों को सहयोग दें',
                '.campaign_2 .section_heading_btn .common_btn': 'और देखें',
                '.become_volunteer_text h2': 'फाउंडिंग वॉलंटियर के रूप में जुड़ें',
                '.become_volunteer_text p': 'हम ऐसे भरोसेमंद लोगों की तलाश में हैं जो समय, कौशल, परिवहन सहयोग या स्थानीय मार्गदर्शन दे सकें, जैसे-जैसे हमारा काम शुरुआती कम्युनिटी ड्राइव से आगे बढ़ रहा है।',
                '.become_volunteer_text .common_btn': 'वॉलंटियर बनें',
                '.ai_help_intro span': 'AI हेल्प असिस्टेंट',
                '.ai_help_intro h2': 'हमारे काम में सहयोग का सही तरीका खोजें।',
                '.ai_help_intro p': 'आप क्या करना चाहते हैं चुनें। असिस्टेंट वॉलंटियरिंग, दान, स्थानीय मदद या रक्तदान के लिए सबसे उपयोगी अगला कदम बताएगा।',
                '.ai_help_prompt strong': 'आप किस चीज में मदद चाहते हैं?',
                '.ai_help_prompt span': 'तुरंत सुझाव पाने के लिए एक विकल्प चुनें।',
                '.services_2 .section_heading h5': 'सेवाएं',
                '.services_2 .section_heading h2': 'हम किससे शुरुआत कर रहे हैं',
                '.services_2 .section_heading_btn .common_btn': 'और देखें',
                '.services_2 .service_item:eq(0) .title': 'शिक्षा',
                '.services_2 .service_item:eq(0) p': 'जिन बच्चों को पढ़ाई जारी रखने के लिए थोड़ी मदद चाहिए, उनके लिए स्कूल किट, कॉपी और सीखने का सहयोग।',
                '.services_2 .service_item:eq(1) .title': 'आर्थिक सहायता',
                '.services_2 .service_item:eq(1) p': 'वॉलंटियर सत्यापन के बाद भोजन, यात्रा, दवाइयों और बुनियादी जरूरतों के लिए छोटी आपात सहायता।',
                '.services_2 .service_item:eq(2) .title': 'स्वास्थ्य जागरूकता',
                '.services_2 .service_item:eq(2) p': 'समुदाय भागीदारों के साथ स्वच्छता, पोषण, प्राथमिक उपचार और preventive healthcare पर स्थानीय जागरूकता कैंप।',
                '.services_2 .service_item:eq(3) .title': 'कम्युनिटी ड्राइव',
                '.services_2 .service_item:eq(3) p': 'राशन वितरण, जागरूकता, स्वच्छता और जरूरी स्थानीय सहायता के लिए संगठित वॉलंटियर ड्राइव।',
                '.services_2 .service_item:eq(4) .title': 'चिकित्सा मदद',
                '.services_2 .service_item:eq(4) p': 'जो परिवार अकेले संभाल नहीं पाते, उनके लिए बेसिक मेडिकल मार्गदर्शन, दवा सहयोग और रेफरल मदद।',
                '.services_2 .service_item:eq(5) .title': 'बुजुर्ग देखभाल',
                '.services_2 .service_item:eq(5) p': 'नजदीकी क्षेत्रों के बुजुर्गों के लिए घर जाकर हालचाल, जरूरी सामान और मित्रतापूर्ण सहयोग।',
                '.event_2 .section_heading h5': 'इवेंट',
                '.event_2 .section_heading h2': 'आने वाली सामुदायिक गतिविधियां',
                '.event_2 .section_heading_btn .common_btn': 'और देखें',
                '.event_2 .wssus__event_item_2 .title': 'ब्लड डोनेशन कैंप',
                '.event_2 .wssus__event_item_2 .text p': 'हमारी कम्युनिटी ब्लड डोनेशन ड्राइव में रक्तदान करें और जीवन बचाने में मदद करें।',
                '.home_gallery_area .section_heading h5': 'गैलरी',
                '.home_gallery_area .section_heading h2': 'हमारे सामुदायिक काम के पल',
                '.home_faq_area .section_heading h5': 'FAQ',
                '.home_faq_area .section_heading h2': 'यूनाइटेड यूथ एसोसिएशन के बारे में सामान्य सवाल',
                '.home_faq_intro': 'वॉलंटियर, दानदाता और समुदाय के लोगों के लिए साफ जवाब, जो समझना चाहते हैं कि हम कैसे काम करते हैं।',
                '.testimonial_2_bg .section_heading h5': 'कम्युनिटी आवाजें',
                '.testimonial_2_bg .section_heading h2': 'हमारी शुरुआती कोशिशों पर लोगों की राय',
                '.footer_2_logo_area p': 'यूनाइटेड यूथ एसोसिएशन एक नया भारतीय युवा-नेतृत्व एसोसिएशन है, जो शिक्षा, स्वास्थ्य, भोजन सहायता और कम्युनिटी केयर पर काम करता है।',
                '.footer_2_link:eq(0) h3': 'क्विक लिंक',
                '.footer_2_link:eq(1) h3': 'जुड़ें',
                '.footer_2_contact h3': 'हमसे संपर्क'
            },
            buttons: {
                '.ai_help_options button[data-ai-help="volunteer"]': 'वॉलंटियर',
                '.ai_help_options button[data-ai-help="blood"]': 'रक्तदान',
                '.ai_help_options button[data-ai-help="support"]': 'मदद चाहिए',
                '#gallery-tab': 'गैलरी',
                '#video-tab': 'वीडियो'
            },
            faq: [
                'यूनाइटेड यूथ एसोसिएशन क्या करता है?',
                'मैं वॉलंटियर कैसे बन सकता हूं?',
                'क्या मैं किसी खास कारण के लिए दान कर सकता हूं?',
                'आपकी गतिविधियां कहां आधारित हैं?'
            ],
            faqBody: [
                'यूनाइटेड यूथ एसोसिएशन युवा-नेतृत्व वाली कम्युनिटी ड्राइव के माध्यम से शिक्षा सहयोग, स्वास्थ्य जागरूकता, रक्तदान, भोजन और जरूरी सामान सहायता, और बुजुर्ग देखभाल पर काम करता है।',
                'आप Contact पेज से अपना नाम, फोन नंबर, क्षेत्र और उपलब्ध समय साझा कर सकते हैं। हमारी टीम आपको उपयुक्त फील्ड या सपोर्ट काम से जोड़ेगी।',
                'हां। आप स्कूल किट, भोजन सहायता, स्वास्थ्य जागरूकता या ब्लड डोनेशन कैंप व्यवस्था जैसी खास जरूरतों में सहयोग कर सकते हैं। सहयोग लेने से पहले उद्देश्य साफ रखा जाता है।',
                'हमारा वर्तमान काम एगारा, रानीगंज, पश्चिम बर्धमान, पश्चिम बंगाल और आसपास के स्थानीय समुदायों पर केंद्रित है।'
            ]
        }
    };

    function setText(selector, value) {
        if (selector === 'title') {
            document.title = value;
            return;
        }
        if (selector === '.navbar-nav .nav-item:eq(2) .nav-link') {
            $(selector).html(value + ' <i class="far fa-chevron-down"></i>');
            return;
        }
        $(selector).text(value);
    }

    function setIconButtonText(selector, value) {
        $(selector).each(function () {
            const icon = $(this).children('i').first().prop('outerHTML') || '';
            $(this).html(icon + ' ' + value);
        });
    }

    function setFaqButton(index, value) {
        const button = $('.home_faq_accordion .accordion-button').eq(index);
        const number = button.children('span').first().prop('outerHTML') || '';
        button.html(number + ' ' + value);
    }

    function updateAiHelpResult(lang) {
        const activeType = $('.ai_help_options button.active').data('ai-help') || 'volunteer';
        const content = (aiHelpContent[lang] || aiHelpContent.en)[activeType];

        if (!content) return;

        $('#aiHelpTag').text(content.tag);
        $('#aiHelpTitle').text(content.title);
        $('#aiHelpText').text(content.text);
        $('#aiHelpLink').attr('href', content.link).text(content.linkText);
    }

    function getCurrentHomeLang() {
        return $('.home_language_select').first().val() || homeLang;
    }

    function applyHomeLanguage(lang) {
        const dictionary = homeTranslations[lang] || homeTranslations.en;

        Object.keys(dictionary.text).forEach(function (selector) {
            setText(selector, dictionary.text[selector]);
        });

        Object.keys(dictionary.buttons).forEach(function (selector) {
            setIconButtonText(selector, dictionary.buttons[selector]);
        });

        dictionary.faq.forEach(function (text, index) {
            setFaqButton(index, text);
        });

        dictionary.faqBody.forEach(function (text, index) {
            $('.home_faq_accordion .accordion-body').eq(index).text(text);
        });

        updateAiHelpResult(lang);
        $('html').attr('lang', lang === 'bn' ? 'bn' : lang === 'hi' ? 'hi' : 'en');
    }

    if (isHomePage && $('.home_language_select').length) {
        $('.home_language_select').val(homeLang);
        applyHomeLanguage(homeLang);

        $('.home_language_select').on('change', function () {
            const selectedLang = $(this).val();
            $('.home_language_select').val(selectedLang);
            localStorage.setItem('uya_home_lang', selectedLang);
            applyHomeLanguage(selectedLang);
        });
    }

    $('.ai_help_options button').on('click', function () {
        const type = $(this).data('ai-help');
        const lang = isHomePage ? getCurrentHomeLang() : 'en';
        const content = (aiHelpContent[lang] || aiHelpContent.en)[type];

        if (!content) return;

        $('.ai_help_options button').removeClass('active');
        $(this).addClass('active');
        $('#aiHelpTag').text(content.tag);
        $('#aiHelpTitle').text(content.title);
        $('#aiHelpText').text(content.text);
        $('#aiHelpLink').attr('href', content.link).text(content.linkText);
    });

    // Homepage scroll reveal animation
    if (isHomePage) {
        const revealItems = document.querySelectorAll([
            '.home_2 section:not(.banner)',
            '.home_2 .section_heading',
            '.home_2 .category_item',
            '.home_2 .counter_2_item',
            '.home_2 .campaign_card_2',
            '.home_2 .service_item',
            '.home_2 .wssus__event_item_2',
            '.home_2 .ai_help_panel',
            '.home_2 .home_gallery_item',
            '.home_2 .home_video_item',
            '.home_2 .home_faq_accordion .accordion-item',
            '.home_2 .testimonial_2_bg',
            '.home_2 .single_brand'
        ].join(','));

        revealItems.forEach((item, index) => {
            item.classList.add('scroll_reveal');
            item.style.transitionDelay = `${Math.min((index % 5) * 70, 280)}ms`;
        });

        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal_visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -70px 0px'
            });

            revealItems.forEach((item) => revealObserver.observe(item));
        } else {
            revealItems.forEach((item) => item.classList.add('reveal_visible'));
        }
    }

    // Barfiller js
    $(document).ready(function () {
        $('.barfiller').each(function () {
            $(this).barfiller({});
        });
    });

    // Service Slider
    $('.service_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Marquee animi
    $('.marquee_animi').marquee({
        speed: 50,
        gap: 25,
        delayBeforeStart: 0,
        direction: 'right',
        // for RTL
        // direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
    });

    // Event Slider
    $('.event_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Volunteer slider
    $('.volunteer_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Brand Slider
    $('.brand_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }
        ]
    });

    // related campaing Slider
    $('.related_campaing_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Sticky sidebar
    if ($('.sticky_sidebar').length > 0) {
        $(".sticky_sidebar").stickit({
            top: 90,
        });
    }

    // campaign details slider
    $('.campaign_slider_large').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.campaign_slider_small',
        // for RTL
        // rtl: true,
    });
    $('.campaign_slider_small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.campaign_slider_large',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    });

    // testiminial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // select 2 js
    $(document).ready(function () {
        $('.select_2').select2();
    });

    // Testimonial 2 Slider
    $('.testimonial_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        // for RTL
        // rtl: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    $(document).ready(function () {
        $('.payment_method').on('click', function (e) {
            e.preventDefault(); // prevent the link from jumping
            $('.payment_method').removeClass('active'); // remove from all
            $(this).addClass('active'); // add to the clicked one
        });
    });



    $(document).ready(function () {
        $('.video_donation_box ul li').on('click', function () {
            // remove '$' and trim text
            let value = $(this).text().replace('$', '').trim();

            // update input value
            $('.video_donation_box .input_box input').val(value);

            // manage active class
            $('.video_donation_box ul li').removeClass('active');
            $(this).addClass('active');
        });
    });


    // banner 3 heading animation
    $('.animate-zoom').animatedHeadline({
        animationType: 'zoom'
    });

    // Event 3 slider
    $('.event_3_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        // for RTL
        // rtl: true,
    });
});
