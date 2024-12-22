import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
        link1: "Home",
        link2: "Product",
        link3: "Privacy",

        underTitle: "make your",
        title: "Body stronger",
        subTitle: "Elevate your training with the ultimate knee protection.",

        greetingText: "Order SBD knee sleeves now and get a free keychain! Don't miss out on this limited-time offer!",
        greetingButton: "Buy Now",

        aboutTitle: "Choosing the Right Knee Sleeves",
        aboutText: `Choosing the right gear is essential for safety and performance. Knee sleeves are more than just an accessory—they provide crucial support and stability during workouts. Whether lifting heavy, squatting, or doing cardio, they protect your joints, enhance performance, and reduce injury risk. Opt for knee sleeves that balance comfort, durability, and compression. Strong yet flexible materials ensure mobility without compromising support, helping you train harder and recover faster.`,
        aboutButton: "See more",

        featuresTitle1: "Premium Quality Materials",
        featuresSubTitle1: "Engineered for Durability and Long-Lasting Performance",
        featuresText1: "These knee sleeves are crafted from reinforced, high-quality materials designed to withstand the rigors of heavy training. They offer unmatched durability and reliability, ensuring long-term use without compromising on performance.",
        featuresTitle2: "Perfect Fit & Comfort",
        featuresSubTitle2: "Ergonomically Designed for a Snug and Comfortable Fit",
        featuresText2: "The knee sleeves contour perfectly to your body, ensuring a tight yet comfortable fit that won't slip, slide, or restrict movement. This ergonomic design allows you to train longer and harder without discomfort.",
        featuresTitle3: "Athlete Approved",
        featuresSubTitle3: "Trusted by Top Athletes Worldwide",
        featuresText3: "Used by elite athletes, powerlifters, and CrossFit champions, these knee sleeves are proven to enhance strength and performance. Trusted globally, they offer the confidence needed to push your limits safely.",

        footer: "All rights reserved.",



        productName: "Knee Sleeves",
        productSize: "Product Size",
        productButton: "Add to cart",

        productText: "Manufactured with high grade 7mm neoprene and designed to aid performance, these knee sleeves are relied on by strength athletes around the world and are ideal for powerlifting and heavy training.",

        productLi1: "Sold as a pair.",
        productLi2: "IPF approved and IWF compliant with the maximum allowable 30cm length.",
        productLi3: "7mm high grade neoprene for maximal support.",
        productLi4: "Reinforced seam construction to maximise longevity.",
        productLi5: "Antimicrobial treatment minimises the build-up of bacteria and reduces odour.",
        productLi6: "Patented design.",
        productLi7: "Manufactured in Great Britain.",

        option1: "Size guide",
        option2: "How to measure",
        option2Text: "Measure the circumference of your knee joint with your leg out straight, keeping your muscles relaxed. Measure around the centre of your kneecap (at the patella), and around the thickest part of your calf. If your calf is more than 4cm (1.6in) larger than your knee, then you may wish to size up to ensure a good fit. If you want a tight fit best suited to powerlifting and squatting, we recommend sizing down. A regular fitting knee sleeve will be snug. If you are new to wearing knee sleeves we recommend going with the recommended fit instead of sizing down, especially if you fall on size medium or smaller.",
        option3: "care instructions",
        option3Text: "We recommend hand washing your knee sleeves with water or a mild detergent (or a specialist neoprene/wetsuit detergent), then allow the sleeves to air dry standing up. The spin cycle of a washing machine can damage the sleeve, as the knee sleeves become quite bulky when wet and can potentially get caught up or damaged by wringing. High heat from a washing machine or a dryer will degrade the rubber in the sleeves (potentially causing shrinkage or brittleness).",





        cartTitle: "Cart",
        cartSubTitle: "You have not added products to the cart yet",
        cartReturn: "Return to shopping",

        cartItemSize: "Product Size",
        cartItemRemove: "Remove",

        cartInfoTitle: "Subtotal",
        cartSend: "Check Out",
        cartInfoText: "Shipping, taxes, and discount codes calculated at checkout.",




        privacyTitle: "Privacy Policy",
        privacyIntro: "At LiftOff ZB, we value your privacy and are committed to ensuring transparency about how we handle any information related to the use of our website.",
        dataCollection: "Data Collection",
        dataCollectionText: "We do not collect or store any personal information or data about your activity on our website.",
        stripeIntegration: "Stripe Integration",
        stripeText: "We use Stripe to process payments. Stripe may collect certain payment information, such as your credit or debit card details. All payment-related data is handled exclusively by Stripe under their Privacy Policy, which you can review here: https://stripe.com/privacy. We do not have access to your payment details or card information.",
        yourRights: "Your Rights",
        yourRightsText: "Since we do not store any personal data, you do not need to contact us for data deletion or correction. For questions regarding your payments, please reach out directly to Stripe.",
        changesToPrivacy: "Changes to This Privacy Policy",
        changesText: "This Privacy Policy may be updated if our data handling practices or integrations change. We encourage you to check this page periodically for updates.",
        contactUs: "Contact Us",
        contactInfo: "If you have any questions about this Privacy Policy, feel free to contact us:"

    },
  },
  pl: {
    translation: {
        link1: "Strona główna",
        link2: "Produkt",
        link3: "Polityka prywatności",
      
        underTitle: "wzmocnij swoje",
        title: "Ciało silniejsze",
        subTitle: "Podnieś swój trening dzięki najlepszej ochronie na kolana.",
      
        greetingText: "Zamów rękawy na kolana SBD teraz i otrzymaj darmowy brelok! Nie przegap tej oferty czasowej!",
        greetingButton: "Kup teraz",
      
        aboutTitle: "Jak wybrać odpowiednie rękawy na kolana",
        aboutText: "Wybór odpowiedniego sprzętu jest kluczowy dla bezpieczeństwa i wyników. Rękawy na kolana to więcej niż tylko akcesorium — zapewniają one niezbędne wsparcie i stabilność podczas treningu. Niezależnie od tego, czy podnosisz ciężary, robisz przysiady, czy wykonujesz ćwiczenia cardio, chronią twoje stawy, poprawiają wydajność i zmniejszają ryzyko kontuzji. Wybierz rękawy na kolana, które łączą komfort, trwałość i kompresję. Mocne, ale elastyczne materiały zapewniają swobodę ruchów bez utraty wsparcia, co pomaga ci trenować ciężej i szybciej wrócić do formy.",
        aboutButton: "Zobacz więcej",
      
        featuresTitle1: "Materiał najwyższej jakości",
        featuresSubTitle1: "Zaprojektowane z myślą o trwałości i długotrwałej wydajności",
        featuresText1: "Te rękawy na kolana są wykonane z wzmocnionych, wysokiej jakości materiałów, które wytrzymają intensywny trening. Oferują niezrównaną trwałość i niezawodność, zapewniając długotrwałe użytkowanie bez kompromisów w zakresie wydajności.",
      
        featuresTitle2: "Idealne dopasowanie i komfort",
        featuresSubTitle2: "Ergonomicznie zaprojektowane, by idealnie przylegały do ciała",
        featuresText2: "Rękawy na kolana idealnie dopasowują się do ciała, zapewniając ciasne, ale wygodne dopasowanie, które nie zsuwa się, nie przesuwa i nie ogranicza ruchów. Ta ergonomiczna konstrukcja pozwala trenować dłużej i intensywniej bez dyskomfortu.",
      
        featuresTitle3: "Zatwierdzone przez sportowców",
        featuresSubTitle3: "Zaufane przez najlepszych sportowców na całym świecie",
        featuresText3: "Używane przez elity sportowe, trójboistów i mistrzów CrossFit, te rękawy na kolana udowodniono, że poprawiają siłę i wydajność. Zaufane globalnie, dają pewność, by bezpiecznie przekraczać swoje granice.",
      
        footer: "Wszelkie prawa zastrzeżone.",

        productName: "Opaski na kolana",
        productSize: "Rozmiar produktu",
        productButton: "Dodaj do koszyka",

        productText: "Wykonane z wysokiej jakości neoprenu 7 mm, zaprojektowane, aby wspomagać wydajność, te opaski na kolana są stosowane przez sportowców siłowych na całym świecie i są idealne do powerliftingu i intensywnych treningów.",

        productLi1: "Sprzedawane w parze.",
        productLi2: "Zatwierdzone przez IPF i zgodne z normami IWF z maksymalną dozwoloną długością 30 cm.",
        productLi3: "7 mm neoprenu wysokiej jakości dla maksymalnego wsparcia.",
        productLi4: "Wzmocniona konstrukcja szwów w celu zwiększenia trwałości.",
        productLi5: "Antybakteryjne traktowanie minimalizuje rozwój bakterii i redukuje zapach.",
        productLi6: "Zaprojektowane na podstawie opatentowanego wzoru.",
        productLi7: "Wyprodukowane w Wielkiej Brytanii.",

        option1: "Tabela rozmiarów",
        option2: "Jak mierzyć",
        option2Text: "Zmierz obwód stawu kolanowego przy wyprostowanej nodze, trzymając mięśnie wyluzowane. Zmierz wokół środkowej części rzepki (w okolicach patelli) oraz najszerszej części łydki. Jeśli twoja łydka jest o więcej niż 4 cm (1,6 cala) większa od kolana, może być konieczne zwiększenie rozmiaru, aby zapewnić dobre dopasowanie. Jeśli chcesz, aby opaska była ciasna, najlepiej do powerliftingu i przysiadów, polecamy rozmiar mniejszy. Standardowo dopasowana opaska na kolano będzie ciasna. Jeśli jesteś nowy w noszeniu opasek na kolana, zalecamy wybrać zalecany rozmiar zamiast mniejszego, zwłaszcza jeśli pasujesz do średniego lub mniejszego rozmiaru.",
        option3: "Instrukcje pielęgnacji",
        option3Text: "Zalecamy pranie ręczne opasek na kolana wodą lub łagodnym detergentem (lub specjalnym detergentem do neoprenu / pianki), a następnie suszenie ich na powietrzu w pozycji stojącej. Wirowanie w pralce może uszkodzić opaskę, ponieważ opaski na kolana stają się dość grube, gdy są mokre, i mogą się zaplątać lub uszkodzić podczas wykręcania. Wysoka temperatura w pralce lub suszarce może zniszczyć gumę w opaskach (co może powodować ich skurczenie lub kruchość).",

        cartTitle: "Koszyk",
        cartSubTitle: "Nie dodałeś jeszcze produktów do koszyka",
        cartReturn: "Wróć do zakupów",

        cartItemSize: "Rozmiar produktu",
        cartItemRemove: "Usuń",

        cartInfoTitle: "Suma",
        cartSend: "Przejdź do kasy",
        cartInfoText: "Koszt wysyłki, podatki i kody rabatowe obliczane przy kasie.",

        privacyTitle: "Polityka prywatności",
        privacyIntro: "W LiftOff ZB cenimy Twoją prywatność i zobowiązujemy się do zapewnienia przejrzystości w kwestii przetwarzania informacji związanych z korzystaniem z naszej strony internetowej.",
        dataCollection: "Zbieranie danych",
        dataCollectionText: "Nie zbieramy ani nie przechowujemy żadnych danych osobowych ani informacji o Twojej aktywności na naszej stronie.",
        stripeIntegration: "Integracja z Stripe",
        stripeText: "Używamy Stripe do przetwarzania płatności. Stripe może zbierać określone informacje o płatności, takie jak dane Twojej karty kredytowej lub debetowej. Wszystkie dane związane z płatnościami są przetwarzane wyłącznie przez Stripe zgodnie z ich Polityką Prywatności, którą możesz sprawdzić tutaj: https://stripe.com/privacy. Nie mamy dostępu do Twoich danych płatności ani informacji o karcie.",
        yourRights: "Twoje prawa",
        yourRightsText: "Ponieważ nie przechowujemy żadnych danych osobowych, nie musisz się z nami kontaktować w celu ich usunięcia lub korekty. W przypadku pytań dotyczących płatności, prosimy o bezpośredni kontakt ze Stripe.",
        changesToPrivacy: "Zmiany w Polityce prywatności",
        changesText: "Polityka prywatności może zostać zaktualizowana, jeśli nasze praktyki przetwarzania danych lub integracje ulegną zmianie. Zachęcamy do okresowego sprawdzania tej strony w celu uzyskania aktualizacji.",
        contactUs: "Skontaktuj się z nami",
        contactInfo: "Jeśli masz jakiekolwiek pytania dotyczące tej Polityki prywatności, skontaktuj się z nami:"


    },
  },
  ua: {
    translation: {
        link1: "Головна",
        link2: "Продукт",
        link3: "Політика конфіденційності",
      
        underTitle: "зробіть ваше",
        title: "Тіло сильнішим",
        subTitle: "Покращуйте свої тренування з найкращим захистом для колін.",
      
        greetingText: "Замовте наколінники SBD зараз і отримайте безкоштовний брелок! Не пропустіть цю обмежену пропозицію!",
        greetingButton: "Купити зараз",
      
        aboutTitle: "Як вибрати правильні наколінники",
        aboutText: "Вибір правильного обладнання є важливим для безпеки та результатів. Наколінники — це більше, ніж просто аксесуар, вони забезпечують необхідну підтримку та стабільність під час тренувань. Незалежно від того, чи піднімаєте важкі предмети, чи робите присідання, чи займаєтесь кардіо, вони захищають ваші суглоби, покращують результати та зменшують ризик травм. Обирайте наколінники, які поєднують комфорт, міцність і компресію. Міцні, але еластичні матеріали забезпечують свободу рухів без втрати підтримки, що дозволяє вам тренуватися важче та швидше відновлюватися.",
        aboutButton: "Дивитись більше",
      
        featuresTitle1: "Матеріали найвищої якості",
        featuresSubTitle1: "Розроблено для довговічності та тривалої продуктивності",
        featuresText1: "Ці наколінники виготовлені з посилених матеріалів високої якості, що витримують важкі тренування. Вони пропонують неперевершену міцність і надійність, забезпечуючи тривале використання без компромісів у продуктивності.",
      
        featuresTitle2: "Ідеальна посадка та комфорт",
        featuresSubTitle2: "Ергономічний дизайн для щільної та комфортної посадки",
        featuresText2: "Наколінники ідеально підходять до вашого тіла, забезпечуючи щільну, але зручну посадку, яка не сповзає, не ковзає і не обмежує рухи. Цей ергономічний дизайн дозволяє вам тренуватися довше і важче без дискомфорту.",
      
        featuresTitle3: "Затверджено спортсменами",
        featuresSubTitle3: "Довірилися найкращі спортсмени світу",
        featuresText3: "Використовуються елітними спортсменами, пауерліфтерами та чемпіонами CrossFit, ці наколінники довели свою ефективність для підвищення сили та продуктивності. Вони користуються довірою по всьому світу і дають впевненість для безпечного перевищення ваших лімітів.",
      
        footer: "Усі права захищені.",

        productName: "Наколінники",
        productSize: "Розмір продукту",
        productButton: "Додати до кошика",

        productText: "Виготовлені з високоякісного неопрена 7 мм, розроблені для покращення продуктивності, ці наколінники використовуються силачами по всьому світу і ідеально підходять для пауерліфтингу та важких тренувань.",

        productLi1: "Продаються в парі.",
        productLi2: "Затверджені IPF та відповідають стандартам IWF з максимальною дозволеною довжиною 30 см.",
        productLi3: "7 мм високоякісного неопрена для максимальної підтримки.",
        productLi4: "Посилена конструкція швів для збільшення довговічності.",
        productLi5: "Антибактеріальна обробка мінімізує розвиток бактерій і зменшує запах.",
        productLi6: "Патентований дизайн.",
        productLi7: "Виготовлено у Великій Британії.",

        option1: "Таблиця розмірів",
        option2: "Як вимірювати",
        option2Text: "Виміряйте обхват колінного суглоба при прямій нозі, тримаючи м'язи розслабленими. Виміряйте навколо середини колінної чашечки (патела), а також навколо найширшої частини литки. Якщо ваша литка більше ніж на 4 см (1,6 дюйма) більша за коліно, можливо, вам потрібно буде збільшити розмір для забезпечення хорошого прилягання. Якщо ви хочете щільну посадку, найкращу для пауерліфтингу і присідань, рекомендуємо зменшити розмір. Однак стандартний розмір буде щільним. Якщо ви новачок у використанні наколінників, рекомендуємо вибрати рекомендований розмір, а не зменшувати його, особливо якщо ви підходите до середнього або меншого розміру.",
        option3: "Інструкції по догляду",
        option3Text: "Рекомендуємо прати наколінники вручну водою або м'яким миючим засобом (або спеціальним засобом для неопрена/гідрокостюмів), а потім висушити їх на повітрі, поставивши у вертикальне положення. Віджимання в пральній машині може пошкодити наколінники, оскільки вони стають досить об'ємними, коли мокрі, і можуть заплутатися або пошкодитися під час викручування. Висока температура в пральній машині або сушарці може пошкодити гуму в наколінниках (що може призвести до їх стиснення або ламкості).",

      
        cartTitle: "Кошик",
        cartSubTitle: "Ви ще не додали жодного товару до кошика",
        cartReturn: "Повернутись до покупок",

        cartItemSize: "Розмір товару",
        cartItemRemove: "Видалити",

        cartInfoTitle: "Підсумок",
        cartSend: "Оформити замовлення",
        cartInfoText: "Доставка, податки та коди знижок розраховуються при оформленні.",




        privacyTitle: "Політика конфіденційності",
        privacyIntro: "В LiftOff ZB ми цінуємо вашу приватність і зобов'язуємось забезпечити прозорість щодо того, як ми обробляємо будь-яку інформацію, пов'язану з використанням нашого вебсайту.",
        dataCollection: "Збір даних",
        dataCollectionText: "Ми не збираємо і не зберігаємо жодну особисту інформацію чи дані про вашу активність на нашому вебсайті.",
        stripeIntegration: "Інтеграція з Stripe",
        stripeText: "Ми використовуємо Stripe для обробки платежів. Stripe може збирати певну інформацію про платежі, таку як дані вашої кредитної або дебетової картки. Всі дані, пов'язані з платежами, обробляються виключно Stripe відповідно до їх Політики конфіденційності, яку ви можете ознайомитись тут: https://stripe.com/privacy. Ми не маємо доступу до ваших даних про оплату або інформації про картку.",
        yourRights: "Ваші права",
        yourRightsText: "Оскільки ми не зберігаємо жодних особистих даних, вам не потрібно звертатися до нас для видалення або коригування даних. Для запитань щодо ваших платежів, будь ласка, звертайтесь безпосередньо до Stripe.",
        changesToPrivacy: "Зміни в Політиці конфіденційності",
        changesText: "Ця Політика конфіденційності може бути оновлена, якщо наші практики обробки даних або інтеграції зміняться. Ми рекомендуємо періодично перевіряти цю сторінку на наявність оновлень.",
        contactUs: "Зв'язатися з нами",
        contactInfo: "Якщо у вас є будь-які питання щодо цієї Політики конфіденційності, не соромтесь зв'язатися з нами:",


    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources, // Використовуємо об'єкт перекладів замість JSON
    fallbackLng: 'en',
    supportedLngs: ['en', 'pl', 'ua'],
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
