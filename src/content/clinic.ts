import type { ClinicContent, PlaceholderText } from '../domain/clinic'

const p = (value: string, label: string): PlaceholderText => ({ value, placeholder: true, label })
const doctorPhoto = { src: '/images/doctors/placeholder.svg', alt: 'Фотография врача — заменить', width: 600, height: 700, placeholder: true }

export const clinicContent: ClinicContent = {
  clinic: {
    name: p('[НАЗВАНИЕ КЛИНИКИ]', 'Название клиники'),
    logoText: p('DENTÉ', 'Логотип'),
    description: p('Частная стоматология бережного лечения', 'Описание клиники'),
    address: p('[ГОРОД, УЛИЦА, ДОМ]', 'Адрес'),
    phoneDisplay: p('+7 (___) ___-__-__', 'Телефон'),
    whatsappNumber: p('77000000000', 'Номер WhatsApp'),
    workingHours: [p('Пн–Сб: 09:00–20:00', 'График'), p('Вс: по записи', 'График')],
    map: { src: '/images/clinic/placeholder.svg', alt: 'Карта расположения клиники — заменить', width: 900, height: 1100, placeholder: true },
  },
  hero: {
    eyebrow: 'Стоматология, которой доверяют',
    title: 'Здоровая улыбка — спокойно, бережно и по понятному плану',
    description: 'Бесплатный первичный осмотр, рассрочка до 24 месяцев и гарантия на услуги. Начните с короткой консультации в WhatsApp.',
    trustItems: ['Врачи с опытом от 4 лет', 'Бесплатный первичный осмотр', 'Рассрочка Kaspi до 24 месяцев', 'Гарантия от 3 лет', 'Сертифицированные материалы'],
    image: { src: '/images/clinic/placeholder.svg', alt: 'Врач стоматологической клиники — заменить фотографию', width: 900, height: 1100, placeholder: true },
  },
  benefits: [
    { id: 'experience', title: p('Опытная команда', 'Преимущество'), description: p('Врачи с подтверждённым опытом от 4 лет.', 'Описание'), icon: '✦', placeholder: true },
    { id: 'materials', title: p('Надёжные материалы', 'Преимущество'), description: p('Сертифицированные импортные материалы.', 'Описание'), icon: '◇', placeholder: true },
    { id: 'installment', title: p('Удобная оплата', 'Преимущество'), description: p('Рассрочка через Kaspi до 24 месяцев.', 'Описание'), icon: '₸', placeholder: true },
    { id: 'consultation', title: p('Первый шаг бесплатно', 'Преимущество'), description: p('Осмотр и первичная консультация.', 'Описание'), icon: '+', placeholder: true },
    { id: 'equipment', title: p('Современное оснащение', 'Преимущество'), description: p('Точная диагностика и бережный подход.', 'Описание'), icon: '◎', placeholder: true },
    { id: 'warranty', title: p('Гарантия на услуги', 'Преимущество'), description: p('Гарантийные условия от 3 лет.', 'Описание'), icon: '✓', placeholder: true },
  ],
  services: [
    { id: 'braces', name: p('Брекеты', 'Услуга'), description: p('Ровная улыбка по индивидуальному плану ортодонта.', 'Описание услуги'), priceFrom: p('от 350 000 ₸', 'Цена'), featured: true, icon: '01', whatsappContext: 'Брекеты' },
    { id: 'whitening', name: p('Отбеливание зубов', 'Услуга'), description: p('Деликатное осветление эмали под контролем врача.', 'Описание услуги'), priceFrom: p('от 65 000 ₸', 'Цена'), featured: true, icon: '02', whatsappContext: 'Отбеливание зубов' },
    { id: 'caries', name: p('Лечение кариеса', 'Услуга'), description: p('Бережное восстановление формы и функции зуба.', 'Описание услуги'), priceFrom: p('от 25 000 ₸', 'Цена'), featured: true, icon: '03', whatsappContext: 'Лечение кариеса' },
    { id: 'veneers', name: p('Виниры', 'Услуга'), description: p('Эстетическая коррекция формы и оттенка улыбки.', 'Описание услуги'), priceFrom: p('от 140 000 ₸', 'Цена'), featured: false, icon: '04', whatsappContext: 'Виниры' },
    { id: 'implants', name: p('Имплантация', 'Услуга'), description: p('Восстановление зубов с предварительной диагностикой.', 'Описание услуги'), priceFrom: p('от 180 000 ₸', 'Цена'), featured: false, icon: '05', whatsappContext: 'Имплантация' },
    { id: 'cleaning', name: p('Профессиональная чистка', 'Услуга'), description: p('Комплексная гигиена и рекомендации по уходу.', 'Описание услуги'), priceFrom: p('от 28 000 ₸', 'Цена'), featured: false, icon: '06', whatsappContext: 'Профессиональная чистка' },
  ],
  quiz: {
    steps: [
      { id: 'service', title: 'Какая услуга вас интересует?', options: [{ id: 'braces', label: 'Брекеты' }, { id: 'whitening', label: 'Отбеливание' }, { id: 'caries', label: 'Лечение кариеса' }, { id: 'implants', label: 'Имплантация' }] },
      { id: 'timing', title: 'Когда планируете лечение?', options: [{ id: 'now', label: 'В ближайшие дни' }, { id: 'month', label: 'В течение месяца' }, { id: 'later', label: 'Пока изучаю варианты' }] },
      { id: 'payment', title: 'Как удобнее оплатить?', options: [{ id: 'full', label: 'Полная оплата' }, { id: 'kaspi', label: 'Рассрочка Kaspi' }, { id: 'consult', label: 'Хочу обсудить варианты' }] },
    ],
    ranges: [{ serviceId: 'braces', minimum: 350000, maximum: 950000 }, { serviceId: 'whitening', minimum: 65000, maximum: 120000 }, { serviceId: 'caries', minimum: 25000, maximum: 65000 }, { serviceId: 'implants', minimum: 180000, maximum: 500000 }],
    fallbackText: 'Индивидуальный расчёт после бесплатного осмотра',
    disclaimer: 'Расчёт ориентировочный и не является медицинским заключением. Точная стоимость определяется после осмотра и диагностики.',
  },
  doctors: [1, 2, 3, 4].map((number) => ({ id: `doctor-${number}`, photo: doctorPhoto, name: p(`[ИМЯ ВРАЧА ${number}]`, 'Имя врача'), specialization: p(number === 1 ? 'Стоматолог-терапевт' : number === 2 ? 'Ортодонт' : number === 3 ? 'Хирург-имплантолог' : 'Гигиенист', 'Специализация'), experienceYears: 4 + number, summary: p('Внимательно объясняет план лечения и помогает пройти его без лишней тревоги.', 'Описание врача'), placeholder: true })),
  cases: [{ id: 'case-1', serviceId: 'braces', beforeImage: { src: '/images/cases/before-placeholder.svg', alt: 'Состояние улыбки до лечения — заменить фото', width: 720, height: 480, placeholder: true }, afterImage: { src: '/images/cases/after-placeholder.svg', alt: 'Состояние улыбки после лечения — заменить фото', width: 720, height: 480, placeholder: true }, summary: p('Коррекция прикуса и выравнивание зубного ряда.', 'Описание кейса'), disclaimer: 'Результат индивидуален и зависит от клинической ситуации.', placeholder: true }],
  reviews: [1, 2, 3].map((number) => ({ id: `review-${number}`, author: p(`[ИМЯ ПАЦИЕНТА ${number}]`, 'Автор отзыва'), text: p(number === 1 ? 'Врач всё подробно объяснил, лечение прошло спокойно и аккуратно.' : number === 2 ? 'Понравились внимательное отношение и понятный план лечения.' : 'Удобно записалась, получила ответы на вопросы и больше не боялась приёма.', 'Текст отзыва'), rating: 5 as const, placeholder: true })),
  legal: { privacy: '#privacy', consent: '#consent' },
}
