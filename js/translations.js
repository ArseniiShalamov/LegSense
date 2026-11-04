/** Translation dictionary. Each key is the exact English text from HTML or JS.
 * ru = Russian, he = Hebrew. Technology names are intentionally left unchanged.
 * When editing English copy, update the matching key here.
 */
const LEG_TRANSLATIONS = {
  "LegSense — A new dimension": {
    ru: "LegSense — Новое измерение",
    he: "LegSense — ממד חדש",
  },
  "How it works": {
    ru: "Как это работает",
    he: "איך זה עובד",
  },
  History: {
    ru: "История",
    he: "היסטוריה",
  },
  Technology: {
    ru: "Технология",
    he: "טכנולוגיה",
  },
  "Analyze My Leg": {
    ru: "Анализировать ногу",
    he: "ניתוח הרגל שלי",
  },
  "Analyze My Leg →": {
    ru: "Анализировать ногу →",
    he: "ניתוח הרגל שלי ←",
  },
  "AI-ASSISTED 3D LEG ANALYSIS": {
    ru: "3D-АНАЛИЗ НОГИ С ПОМОЩЬЮ ИИ",
    he: "ניתוח רגל בתלת־ממד בעזרת AI",
  },
  "See your leg": {
    ru: "Взгляните на ногу",
    he: "לראות את הרגל",
  },
  "in a new": {
    ru: "в новом",
    he: "בממד",
  },
  "dimension.": {
    ru: "измерении.",
    he: "חדש.",
  },
  "Three photos become an interactive 3D reconstruction with volume, geometry quality and easy-to-understand health insights.":
    {
      ru: "Три фотографии превращаются в интерактивную 3D-модель с объёмом, оценкой геометрии и понятными результатами.",
      he: "שלוש תמונות הופכות למודל תלת־ממדי אינטראקטיבי עם נפח, איכות גאומטרית ותובנות ברורות.",
    },
  "See how it works": {
    ru: "Как это работает",
    he: "איך זה עובד",
  },
  photos: {
    ru: "фото",
    he: "תמונות",
  },
  "3D": {
    ru: "3D",
    he: "תלת־ממד",
  },
  reconstruction: {
    ru: "реконструкция",
    he: "שחזור",
  },
  Volume: {
    ru: "Объём",
    he: "נפח",
  },
  "in cm³": {
    ru: "в см³",
    he: "בסמ״ק",
  },
  Private: {
    ru: "Приватно",
    he: "פרטי",
  },
  "local processing": {
    ru: "локальная обработка",
    he: "עיבוד מקומי",
  },
  VOLUME: {
    ru: "ОБЪЁМ",
    he: "נפח",
  },
  "MESH QUALITY": {
    ru: "КАЧЕСТВО СЕТКИ",
    he: "איכות הרשת",
  },
  "ANALYSIS READY": {
    ru: "АНАЛИЗ ГОТОВ",
    he: "הניתוח מוכן",
  },
  "Ⅱ Pause": {
    ru: "Ⅱ Пауза",
    he: "Ⅱ השהיה",
  },
  "▶ Play": {
    ru: "▶ Продолжить",
    he: "▶ הפעלה",
  },
  "Pause animation": {
    ru: "Приостановить анимацию",
    he: "השהיית ההנפשה",
  },
  "Play animation": {
    ru: "Продолжить анимацию",
    he: "הפעלת ההנפשה",
  },
  "Pause result model": {
    ru: "Приостановить модель",
    he: "השהיית המודל",
  },
  "Play result model": {
    ru: "Вращать модель",
    he: "הפעלת סיבוב המודל",
  },
  "DRAG TO ROTATE · DEMO MODEL": {
    ru: "ПЕРЕТАЩИТЕ ДЛЯ ВРАЩЕНИЯ · ДЕМО",
    he: "גרירה לסיבוב · מודל לדוגמה",
  },
  "Fast & Easy": {
    ru: "Быстро и просто",
    he: "מהיר ופשוט",
  },
  "Just 3 photos and a few seconds": {
    ru: "Всего 3 фото и несколько секунд",
    he: "רק 3 תמונות וכמה שניות",
  },
  "Interactive 3D Model": {
    ru: "Интерактивная 3D-модель",
    he: "מודל תלת־ממדי אינטראקטיבי",
  },
  "View, rotate and explore your leg": {
    ru: "Рассматривайте и вращайте модель ноги",
    he: "צפייה, סיבוב וחקירת מודל הרגל",
  },
  "Health Insights": {
    ru: "Оценка состояния",
    he: "תובנות בריאותיות",
  },
  "A clearer picture of your leg": {
    ru: "Больше информации о вашей ноге",
    he: "תמונה ברורה יותר של הרגל",
  },
  "Privacy First": {
    ru: "Защита данных",
    he: "פרטיות לפני הכול",
  },
  "Your data stays on your device": {
    ru: "Данные остаются на вашем устройстве",
    he: "הנתונים נשארים במכשיר שלכם",
  },
  "SIMPLE PROCESS": {
    ru: "ПРОСТОЙ ПРОЦЕСС",
    he: "תהליך פשוט",
  },
  "Three angles. One clear picture.": {
    ru: "Три ракурса. Одна ясная картина.",
    he: "שלוש זוויות. תמונה אחת ברורה.",
  },
  "Keep the same pose and distance. LegSense uses the three views to understand the shape": {
    ru: "Сохраняйте позу и расстояние. LegSense использует три ракурса, чтобы восстановить форму",
    he: "שמרו על אותה תנוחה ואותו מרחק. LegSense משתמש בשלוש הזוויות כדי להבין את צורת",
  },
  "of your leg.": {
    ru: "вашей ноги.",
    he: "הרגל שלכם.",
  },
  Front: {
    ru: "Спереди",
    he: "מבט קדמי",
  },
  "Face the camera. Keep the full leg visible.": {
    ru: "Встаньте лицом к камере. Нога должна быть видна целиком.",
    he: "עמדו מול המצלמה. ודאו שכל הרגל נראית.",
  },
  "Left side": {
    ru: "Слева",
    he: "צד שמאל",
  },
  "Turn 90°. Keep the camera at the same height.": {
    ru: "Повернитесь на 90°. Сохраняйте высоту камеры.",
    he: "הסתובבו ב־90°. שמרו על אותו גובה מצלמה.",
  },
  "Right side": {
    ru: "Справа",
    he: "צד ימין",
  },
  "Capture the opposite profile without changing pose.": {
    ru: "Снимите противоположный бок, сохраняя позу.",
    he: "צלמו את הצד הנגדי בלי לשנות את התנוחה.",
  },
  "Photo tip:": {
    ru: "Совет по съёмке:",
    he: "טיפ לצילום:",
  },
  "use even lighting, a simple background and keep the whole target area inside the frame.": {
    ru: "используйте ровное освещение, простой фон и держите всю область измерения в кадре.",
    he: "השתמשו בתאורה אחידה וברקע פשוט, והשאירו את כל האזור הנמדד בתוך המסגרת.",
  },
  "YOUR SCAN": {
    ru: "ВАШЕ СКАНИРОВАНИЕ",
    he: "הסריקה שלכם",
  },
  "Ready when you are.": {
    ru: "Готовы, когда вы готовы.",
    he: "מוכנים כשאתם מוכנים.",
  },
  "Upload three views. Images stay in your browser in this prototype.": {
    ru: "Загрузите три ракурса. В этом прототипе снимки остаются в браузере.",
    he: "העלו שלוש זוויות. באב־טיפוס זה התמונות נשארות בדפדפן שלכם.",
  },
  "Front photo": {
    ru: "Фото спереди",
    he: "תמונה מלפנים",
  },
  "Left photo": {
    ru: "Фото слева",
    he: "תמונה משמאל",
  },
  "Right photo": {
    ru: "Фото справа",
    he: "תמונה מימין",
  },
  "Click or drop image": {
    ru: "Нажмите или перетащите фото",
    he: "לחצו או גררו תמונה",
  },
  "Front photo · Click to replace": {
    ru: "Фото спереди · Нажмите для замены",
    he: "תמונה מלפנים · לחצו להחלפה",
  },
  "Left photo · Click to replace": {
    ru: "Фото слева · Нажмите для замены",
    he: "תמונה משמאל · לחצו להחלפה",
  },
  "Right photo · Click to replace": {
    ru: "Фото справа · Нажмите для замены",
    he: "תמונה מימין · לחצו להחלפה",
  },
  "Full leg visible, same pose and camera height in all three views": {
    ru: "Нога видна целиком, поза и высота камеры одинаковы на трёх снимках",
    he: "כל הרגל נראית, התנוחה וגובה המצלמה זהים בשלוש התמונות",
  },
  "Resolution and exposure are checked on your device. Pose, framing and diagnostic suitability need confirmation; automatic recognition is not connected yet.":
    {
      ru: "Разрешение и освещение проверяются на устройстве. Позу, кадрирование и пригодность снимков нужно подтвердить: автоматическое распознавание пока не подключено.",
      he: "הרזולוציה והחשיפה נבדקות במכשיר. יש לאשר את התנוחה, המסגור והתאמת התמונות; זיהוי אוטומטי עדיין לא מחובר.",
    },
  "Try the animation with sample images →": {
    ru: "Попробовать анимацию с примерами →",
    he: "ניסיון ההנפשה עם תמונות לדוגמה ←",
  },
  "Measured leg length": {
    ru: "Измеренная длина ноги",
    he: "אורך הרגל שנמדד",
  },
  cm: {
    ru: "см",
    he: "ס״מ",
  },
  "cm³": {
    ru: "см³",
    he: "סמ״ק",
  },
  "Used later to calibrate the 3D model to real-world scale.": {
    ru: "Используется для приведения 3D-модели к реальному масштабу.",
    he: "ישמש בהמשך להתאמת המודל התלת־ממדי לקנה מידה אמיתי.",
  },
  "DEMONSTRATION · MODEL NOT CONNECTED": {
    ru: "ДЕМОНСТРАЦИЯ · МОДЕЛЬ НЕ ПОДКЛЮЧЕНА",
    he: "הדגמה · המודל אינו מחובר",
  },
  "Bringing the shape to life.": {
    ru: "Создаём объёмную форму.",
    he: "מפיחים חיים בצורה.",
  },
  "Your photos stay on this device.": {
    ru: "Ваши фото остаются на этом устройстве.",
    he: "התמונות נשארות במכשיר הזה.",
  },
  Cancel: {
    ru: "Отмена",
    he: "ביטול",
  },
  "ILLUSTRATIVE MODEL": {
    ru: "ДЕМОНСТРАЦИОННАЯ МОДЕЛЬ",
    he: "מודל להמחשה",
  },
  "Check images": {
    ru: "Проверка снимков",
    he: "בדיקת תמונות",
  },
  "Build point cloud": {
    ru: "Построение облака точек",
    he: "בניית ענן נקודות",
  },
  "Connect the 3D mesh": {
    ru: "Построение 3D-сетки",
    he: "בניית הרשת התלת־ממדית",
  },
  "Preview volume calculation": {
    ru: "Демонстрация расчёта объёма",
    he: "הדגמת חישוב הנפח",
  },
  "Prepare the result": {
    ru: "Подготовка результата",
    he: "הכנת התוצאה",
  },
  "Preparing images…": {
    ru: "Подготовка снимков…",
    he: "הכנת התמונות…",
  },
  "This preview uses a preset mesh and sample measurements. It does not reconstruct or assess your leg.":
    {
      ru: "В демонстрации используются готовая сетка и примерные показатели. Она не восстанавливает и не оценивает вашу ногу.",
      he: "תצוגה זו משתמשת ברשת מוכנה ובמדידות לדוגמה. היא אינה משחזרת או מעריכה את הרגל שלכם.",
    },
  "YOUR RESULT · DEMO": {
    ru: "ВАШ РЕЗУЛЬТАТ · ДЕМО",
    he: "התוצאה שלכם · הדגמה",
  },
  "Every detail, in perspective.": {
    ru: "Все детали перед вами.",
    he: "כל פרט, בתמונה המלאה.",
  },
  "Sample volume": {
    ru: "Примерный объём",
    he: "נפח לדוגמה",
  },
  "Entered leg length": {
    ru: "Указанная длина ноги",
    he: "אורך הרגל שהוזן",
  },
  "Reconstruction quality": {
    ru: "Качество реконструкции",
    he: "איכות השחזור",
  },
  "Not evaluated": {
    ru: "Не оценено",
    he: "לא הוערכה",
  },
  "Change vs previous demo": {
    ru: "Изменение с прошлого демо",
    he: "שינוי מההדגמה הקודמת",
  },
  "Insufficient data for a health assessment": {
    ru: "Недостаточно данных для оценки здоровья",
    he: "אין מספיק נתונים להערכת מצב בריאותי",
  },
  "The medical model is not connected. This preview cannot determine whether you are healthy or whether you need to see a doctor. A clinical recommendation will appear here when the validated model is integrated.":
    {
      ru: "Медицинская модель не подключена. Демонстрация не определяет состояние здоровья или необходимость обращения к врачу. Рекомендация появится после подключения проверенной модели.",
      he: "המודל הרפואי אינו מחובר. הדגמה זו אינה יכולה לקבוע אם אתם בריאים או אם יש צורך לפנות לרופא. המלצה קלינית תופיע לאחר שילוב מודל שעבר תיקוף.",
    },
  "Download report ↓": {
    ru: "Скачать отчёт ↓",
    he: "הורדת דוח ↓",
  },
  "Download sample 3D mesh ↓": {
    ru: "Скачать пример 3D-сетки ↓",
    he: "הורדת רשת תלת־ממדית לדוגמה ↓",
  },
  "New scan →": {
    ru: "Новое сканирование →",
    he: "סריקה חדשה ←",
  },
  "We couldn’t complete the preview.": {
    ru: "Не удалось завершить демонстрацию.",
    he: "לא הצלחנו להשלים את ההדגמה.",
  },
  "Try again": {
    ru: "Повторить",
    he: "ניסיון נוסף",
  },
  "Your scan history.": {
    ru: "История сканирований.",
    he: "היסטוריית הסריקות שלכם.",
  },
  "Future scans can help visualize changes in volume and geometry over time.": {
    ru: "Повторные сканирования помогут отслеживать изменения объёма и формы со временем.",
    he: "סריקות חוזרות יכולות לסייע בהצגת שינויים בנפח ובגאומטריה לאורך זמן.",
  },
  "ILLUSTRATIVE DATA": {
    ru: "ДЕМОНСТРАЦИОННЫЕ ДАННЫЕ",
    he: "נתונים להמחשה",
  },
  Today: {
    ru: "Сегодня",
    he: "היום",
  },
  "Sep 12": {
    ru: "12 сент.",
    he: "12 בספט׳",
  },
  "Oct 01": {
    ru: "1 окт.",
    he: "1 באוק׳",
  },
  "Oct 18": {
    ru: "18 окт.",
    he: "18 באוק׳",
  },
  "Latest volume": {
    ru: "Последний объём",
    he: "הנפח האחרון",
  },
  "−1.8% since first scan": {
    ru: "−1,8% с первого сканирования",
    he: "−1.8% מהסריקה הראשונה",
  },
  "View all history →": {
    ru: "Вся история →",
    he: "לכל ההיסטוריה ←",
  },
  "Hide history ↑": {
    ru: "Скрыть историю ↑",
    he: "הסתרת ההיסטוריה ↑",
  },
  "This chart is a design preview with illustrative values. Your actual scan history will appear here once analysis and saving are connected.":
    {
      ru: "На графике показаны примерные значения. Реальная история появится после подключения анализа и сохранения.",
      he: "הגרף הוא תצוגת עיצוב עם ערכים להמחשה. היסטוריית הסריקות האמיתית תופיע לאחר חיבור הניתוח והשמירה.",
    },
  "Start a new scan →": {
    ru: "Начать новое сканирование →",
    he: "התחלת סריקה חדשה ←",
  },
  "BUILT WITH CARE": {
    ru: "ПРОДУМАНО ДО ДЕТАЛЕЙ",
    he: "נבנה בתשומת לב",
  },
  "Complex technology.": {
    ru: "Сложная технология.",
    he: "טכנולוגיה מורכבת.",
  },
  "Simple experience.": {
    ru: "Простой интерфейс.",
    he: "חוויה פשוטה.",
  },
  "LegSense is designed around a local-first pipeline: image preparation, multi-view 3D reconstruction, mesh validation, scale calibration and volume calculation.":
    {
      ru: "LegSense основан на конвейере с приоритетом локальной обработки: подготовка снимков, 3D-реконструкция из нескольких ракурсов, проверка сетки, калибровка масштаба и расчёт объёма.",
      he: "LegSense מתוכנן סביב תהליך שנותן עדיפות לעיבוד מקומי: הכנת תמונות, שחזור תלת־ממדי ממספר זוויות, בדיקת הרשת, כיול קנה המידה וחישוב הנפח.",
    },
  "Planned pipeline · Processing is not connected in this prototype.": {
    ru: "Планируемый конвейер · Обработка в прототипе пока не подключена.",
    he: "תהליך מתוכנן · העיבוד אינו מחובר באב־טיפוס זה.",
  },
  "3 images": {
    ru: "3 снимка",
    he: "3 תמונות",
  },
  "3D mesh": {
    ru: "3D-сетка",
    he: "רשת תלת־ממדית",
  },
  Scale: {
    ru: "Масштаб",
    he: "קנה מידה",
  },
  "Interactive concept · Not a medical assessment": {
    ru: "Интерактивный прототип · Не медицинская оценка",
    he: "אב־טיפוס אינטראקטיבי · לא הערכה רפואית",
  },
  "LEGSENSE PREVIEW": {
    ru: "ДЕМОНСТРАЦИЯ LEGSENSE",
    he: "הדגמת LEGSENSE",
  },
  "Your first step starts here.": {
    ru: "Начните с первого шага.",
    he: "הצעד הראשון מתחיל כאן.",
  },
  "Choose three photos to try the upload interface. This is a design preview: photos stay in your browser and no medical analysis is performed.":
    {
      ru: "Выберите три фото, чтобы проверить загрузку. Это прототип: снимки остаются в браузере, медицинский анализ не выполняется.",
      he: "בחרו שלוש תמונות לניסיון ממשק ההעלאה. זהו אב־טיפוס: התמונות נשארות בדפדפן ולא מתבצע ניתוח רפואי.",
    },
  "Front, left and right photos": {
    ru: "Фото спереди, слева и справа",
    he: "תמונות מלפנים, משמאל ומימין",
  },
  "No photos selected.": {
    ru: "Фотографии не выбраны.",
    he: "לא נבחרו תמונות.",
  },
  "Back to the model →": {
    ru: "Вернуться к модели →",
    he: "חזרה למודל ←",
  },
  "Confirm the pose and framing checklist to continue.": {
    ru: "Подтвердите позу и кадрирование, чтобы продолжить.",
    he: "אשרו את התנוחה והמסגור כדי להמשיך.",
  },
  "Enter a length between 10 and 150 cm.": {
    ru: "Введите длину от 10 до 150 см.",
    he: "הזינו אורך בין 10 ל־150 ס״מ.",
  },
  "Ready to preview. Reconstruction and medical analysis are not connected.": {
    ru: "Всё готово к демонстрации. Реконструкция и медицинский анализ не подключены.",
    he: "מוכנים להדגמה. השחזור והניתוח הרפואי אינם מחוברים.",
  },
  "Low resolution: use at least 600 pixels on the shorter side.": {
    ru: "Низкое разрешение: короткая сторона должна быть не менее 600 пикселей.",
    he: "רזולוציה נמוכה: השתמשו ב־600 פיקסלים לפחות בצלע הקצרה.",
  },
  "Very dark image: try brighter, even lighting.": {
    ru: "Снимок слишком тёмный: используйте более яркое ровное освещение.",
    he: "התמונה כהה מאוד: נסו תאורה בהירה ואחידה יותר.",
  },
  "Very bright image: check for lost detail.": {
    ru: "Снимок слишком светлый: проверьте, не потеряны ли детали.",
    he: "התמונה בהירה מאוד: בדקו שלא אבדו פרטים.",
  },
  "Resolution and exposure checked. Please confirm framing yourself.": {
    ru: "Разрешение и освещение проверены. Проверьте кадрирование самостоятельно.",
    he: "הרזולוציה והחשיפה נבדקו. אשרו בעצמכם שהמסגור נכון.",
  },
  "Automatic quality check unavailable for this format. Review the image yourself.": {
    ru: "Автопроверка недоступна для этого формата. Проверьте снимок самостоятельно.",
    he: "בדיקת איכות אוטומטית אינה זמינה בפורמט זה. בדקו את התמונה בעצמכם.",
  },
  "Low resolution: consider a higher-resolution image.": {
    ru: "Низкое разрешение: выберите снимок более высокого качества.",
    he: "רזולוציה נמוכה: מומלץ לבחור תמונה ברזולוציה גבוהה יותר.",
  },
  "First saved demo": {
    ru: "Первое сохранённое демо",
    he: "ההדגמה הראשונה שנשמרה",
  },
  "Latest demo": {
    ru: "Последнее демо",
    he: "ההדגמה האחרונה",
  },
  "SAVED DEMO SESSIONS · PRESET VOLUME": {
    ru: "СОХРАНЁННЫЕ ДЕМО · ПРИМЕРНЫЙ ОБЪЁМ",
    he: "הדגמות שמורות · נפח לדוגמה",
  },
  "0.0% change · preset demo values": {
    ru: "Изменение 0,0% · примерные значения",
    he: "שינוי של 0.0% · ערכים לדוגמה",
  },
  "Saved demo sessions on this device only. Preset measurements are not medical results. Photos are never saved in this history.":
    {
      ru: "Демо сохраняются только на этом устройстве. Примерные измерения не являются медицинскими результатами. Фото в истории не сохраняются.",
      he: "ההדגמות נשמרות במכשיר זה בלבד. המדידות לדוגמה אינן תוצאות רפואיות. התמונות אינן נשמרות בהיסטוריה.",
    },
  Date: {
    ru: "Дата",
    he: "תאריך",
  },
  "Entered length": {
    ru: "Указанная длина",
    he: "האורך שהוזן",
  },
  Change: {
    ru: "Изменение",
    he: "שינוי",
  },
  "First demo": {
    ru: "Первое демо",
    he: "הדגמה ראשונה",
  },
  "Clear demo history": {
    ru: "Очистить историю демо",
    he: "ניקוי היסטוריית ההדגמות",
  },
  "No demo sessions saved yet. Complete a preview to see it here.": {
    ru: "Сохранённых демо пока нет. Завершите демонстрацию, чтобы увидеть её здесь.",
    he: "עדיין אין הדגמות שמורות. השלימו הדגמה כדי לראות אותה כאן.",
  },
  "Checking file availability and your capture checklist.": {
    ru: "Проверяем снимки и условия съёмки.",
    he: "בדיקת זמינות התמונות ואישור תנאי הצילום.",
  },
  "Illustrating a point cloud from a preset model.": {
    ru: "Строим облако точек демонстрационной модели.",
    he: "הצגת ענן נקודות מתוך מודל מוכן.",
  },
  "Connecting points into the sample surface mesh.": {
    ru: "Соединяем точки в сетку демонстрационной модели.",
    he: "חיבור הנקודות לרשת המשטח לדוגמה.",
  },
  "Previewing where your model’s volume calculation will run.": {
    ru: "Демонстрируем этап расчёта объёма.",
    he: "הדגמת השלב שבו יתבצע חישוב הנפח.",
  },
  "Preparing the demonstration report.": {
    ru: "Подготавливаем демонстрационный отчёт.",
    he: "הכנת דוח ההדגמה.",
  },
  "Preview cancelled. Your selected photos are still available.": {
    ru: "Демонстрация отменена. Выбранные фото сохранены в форме.",
    he: "ההדגמה בוטלה. התמונות שנבחרו עדיין זמינות בטופס.",
  },
  "Demonstration sequence · Your photos stay on this device.": {
    ru: "Демонстрация · Ваши снимки остаются на устройстве.",
    he: "תהליך לדוגמה · התמונות נשארות במכשיר הזה.",
  },
  "One of the images is missing. Please select all three views again.": {
    ru: "Не хватает одного снимка. Выберите все три ракурса заново.",
    he: "חסרה תמונה. בחרו שוב את כל שלוש הזוויות.",
  },
  "Sample images could not be loaded. Try again or select your own photos.": {
    ru: "Не удалось загрузить примеры. Повторите или выберите свои фотографии.",
    he: "לא ניתן לטעון תמונות לדוגמה. נסו שוב או בחרו תמונות משלכם.",
  },
  "Sample images selected. Click Analyze My Leg to try the demo.": {
    ru: "Примеры выбраны. Нажмите «Анализировать ногу» для запуска демо.",
    he: "נבחרו תמונות לדוגמה. לחצו על ניתוח הרגל שלי להפעלת ההדגמה.",
  },
  "Demo session saved to history on this device. Photos are not saved.": {
    ru: "Демонстрация сохранена в истории на устройстве. Фото не сохраняются.",
    he: "ההדגמה נשמרה בהיסטוריה במכשיר. התמונות אינן נשמרות.",
  },
  "Local saving is unavailable. Download your report to keep this demo session.": {
    ru: "Локальное сохранение недоступно. Скачайте отчёт, чтобы сохранить результат.",
    he: "שמירה מקומית אינה זמינה. הורידו את הדוח כדי לשמור את ההדגמה.",
  },
  "Your preview is ready.": {
    ru: "Демонстрация готова.",
    he: "ההדגמה שלכם מוכנה.",
  },
  "Sample mesh and measurements · No medical assessment performed.": {
    ru: "Примерная сетка и показатели · Медицинская оценка не проводилась.",
    he: "רשת ומדידות לדוגמה · לא בוצעה הערכה רפואית.",
  },
  "The result could not be prepared. Your photos are still selected; please try again.": {
    ru: "Не удалось подготовить результат. Фото остаются в форме; попробуйте ещё раз.",
    he: "לא ניתן להכין את התוצאה. התמונות עדיין נבחרות; נסו שוב.",
  },
  "Preview complete. Sample values are shown below.": {
    ru: "Демонстрация завершена. Примерные показатели — ниже.",
    he: "ההדגמה הושלמה. ערכים לדוגמה מוצגים בהמשך.",
  },
  "Please choose an image file.": {
    ru: "Выберите файл изображения.",
    he: "בחרו קובץ תמונה.",
  },
  "Please choose an image smaller than 20 MB.": {
    ru: "Выберите изображение размером менее 20 МБ.",
    he: "בחרו תמונה שגודלה פחות מ־20 מגה־בייט.",
  },
  "This image could not be opened. Try a JPG, PNG or WebP image.": {
    ru: "Не удалось открыть изображение. Попробуйте JPG, PNG или WebP.",
    he: "לא ניתן לפתוח את התמונה. נסו קובץ JPG, PNG או WebP.",
  },
  "Drop one photo in each field.": {
    ru: "Перетащите по одному фото в каждое поле.",
    he: "גררו תמונה אחת לכל שדה.",
  },
  "Three photos selected. Enter a leg length between 10 and 150 cm.": {
    ru: "Выбраны три снимка. Введите длину ноги от 10 до 150 см.",
    he: "נבחרו שלוש תמונות. הזינו אורך רגל בין 10 ל־150 ס״מ.",
  },
  "Three photos selected. Ready for the next step.": {
    ru: "Три снимка выбраны. Всё готово к следующему шагу.",
    he: "נבחרו שלוש תמונות. מוכנים לשלב הבא.",
  },
  "LegSense demo report": {
    ru: "Демонстрационный отчёт LegSense",
    he: "דוח הדגמה של LegSense",
  },
  "LegSense · Demo report": {
    ru: "LegSense · Демонстрационный отчёт",
    he: "LegSense · דוח הדגמה",
  },
  "ILLUSTRATIVE DATA — NOT A MEDICAL RESULT": {
    ru: "ПРИМЕРНЫЕ ДАННЫЕ — НЕ МЕДИЦИНСКИЙ РЕЗУЛЬТАТ",
    he: "נתונים להמחשה — לא תוצאה רפואית",
  },
  "Reconstruction quality: not evaluated": {
    ru: "Качество реконструкции: не оценено",
    he: "איכות השחזור: לא הוערכה",
  },
  "Health assessment: insufficient data": {
    ru: "Оценка здоровья: недостаточно данных",
    he: "הערכת מצב בריאותי: אין מספיק נתונים",
  },
  "The medical model is not connected. This demonstration cannot determine health status or whether a doctor visit is needed. No medical recommendation has been generated.":
    {
      ru: "Медицинская модель не подключена. Демонстрация не определяет состояние здоровья или необходимость обращения к врачу. Медицинские рекомендации не сформированы.",
      he: "המודל הרפואי אינו מחובר. הדגמה זו אינה יכולה לקבוע מצב בריאותי או צורך בפנייה לרופא. לא הופקה המלצה רפואית.",
    },
  "About this preview": {
    ru: "Об этой демонстрации",
    he: "על ההדגמה הזו",
  },
  "The displayed 3D mesh and volume are preset examples, not reconstructed from your photos. Photos remain in your browser and are not included in this report. Use your browser’s Print command to save this report as a PDF.":
    {
      ru: "Показанные 3D-сетка и объём — готовые примеры, а не реконструкция по вашим снимкам. Фото остаются в браузере и не включаются в отчёт. Чтобы сохранить PDF, используйте команду «Печать» в браузере.",
      he: "הרשת התלת־ממדית והנפח המוצגים הם דוגמאות מוכנות, ולא שחזור מהתמונות שלכם. התמונות נשארות בדפדפן ואינן כלולות בדוח. לשמירת הדוח כ־PDF, השתמשו בפקודת ההדפסה בדפדפן.",
    },
  "Switch language": {
    ru: "Выбрать язык",
    he: "בחירת שפה",
  },
  Close: {
    ru: "Закрыть",
    he: "סגירה",
  },
  "Remove front photo": {
    ru: "Удалить фото спереди",
    he: "הסרת תמונה מלפנים",
  },
  "Remove left photo": {
    ru: "Удалить фото слева",
    he: "הסרת תמונה משמאל",
  },
  "Remove right photo": {
    ru: "Удалить фото справа",
    he: "הסרת תמונה מימין",
  },
  "Selected front photo": {
    ru: "Выбранное фото спереди",
    he: "התמונה שנבחרה מלפנים",
  },
  "Selected left photo": {
    ru: "Выбранное фото слева",
    he: "התמונה שנבחרה משמאל",
  },
  "Selected right photo": {
    ru: "Выбранное фото справа",
    he: "התמונה שנבחרה מימין",
  },
  "front source photo": {
    ru: "Исходное фото спереди",
    he: "תמונת המקור מלפנים",
  },
  "left source photo": {
    ru: "Исходное фото слева",
    he: "תמונת המקור משמאל",
  },
  "right source photo": {
    ru: "Исходное фото справа",
    he: "תמונת המקור מימין",
  },
  "Front view of a teal wireframe leg": {
    ru: "Вид спереди на бирюзовую сетчатую модель ноги",
    he: "מבט קדמי על מודל רגל ברשת בצבע טורקיז",
  },
  "Left side profile of a teal wireframe leg": {
    ru: "Вид слева на бирюзовую сетчатую модель ноги",
    he: "מבט משמאל על מודל רגל ברשת בצבע טורקיז",
  },
  "Right side profile of a teal wireframe leg": {
    ru: "Вид справа на бирюзовую сетчатую модель ноги",
    he: "מבט מימין על מודל רגל ברשת בצבע טורקיז",
  },
  "Animated triangulated 3D leg model. Drag to rotate.": {
    ru: "Анимированная 3D-модель ноги. Перетащите для вращения.",
    he: "מודל רגל תלת־ממדי מונפש. גררו לסיבוב.",
  },
  "Illustrative 3D leg mesh. Drag to rotate.": {
    ru: "Пример 3D-сетки ноги. Перетащите для вращения.",
    he: "רשת רגל תלת־ממדית להמחשה. גררו לסיבוב.",
  },
  "Demonstration progress": {
    ru: "Ход демонстрации",
    he: "התקדמות ההדגמה",
  },
  "Illustrative volume history chart, not actual scan results": {
    ru: "Демонстрационный график объёма, не реальные результаты",
    he: "גרף היסטוריית נפח להמחשה, לא תוצאות סריקה אמיתיות",
  },
  "Planned technologies": {
    ru: "Планируемые технологии",
    he: "טכנולוגיות מתוכננות",
  },
  "Planned processing steps": {
    ru: "Планируемые этапы обработки",
    he: "שלבי עיבוד מתוכננים",
  },
  "About LegSense": {
    ru: "О проекте",
    he: "על LegSense",
  },
  "LegSense — About the project": {
    ru: "LegSense — О проекте",
    he: "LegSense — על הפרויקט",
  },
  Home: {
    ru: "Главная",
    he: "דף הבית",
  },
  "The process": {
    ru: "Как это работает",
    he: "התהליך",
  },
  "Our technology": {
    ru: "Наши технологии",
    he: "הטכנולוגיה שלנו",
  },
  "Try the demo": {
    ru: "Попробовать демо",
    he: "נסו את ההדגמה",
  },
  "THE IDEA BEHIND LEGSENSE": {
    ru: "ИДЕЯ LEGSENSE",
    he: "הרעיון מאחורי LEGSENSE",
  },
  "A clearer view.": {
    ru: "Видеть яснее.",
    he: "לראות ברור יותר.",
  },
  "A better understanding.": {
    ru: "Понимать больше.",
    he: "להבין טוב יותר.",
  },
  "An AI research project that turns three ordinary photos into a way to explore the shape and volume of a leg.":
    {
      ru: "Исследовательский AI-проект, который превращает три обычные фотографии в инструмент изучения формы и объёма ноги.",
      he: "פרויקט מחקר בבינה מלאכותית שהופך שלוש תמונות רגילות לדרך לחקור את צורת הרגל ואת נפחה.",
    },
  "Discover the purpose": {
    ru: "Узнать о цели проекта",
    he: "גלו את מטרת הפרויקט",
  },
  "Illustrative wireframe leg model": {
    ru: "Иллюстрация сетчатой модели ноги",
    he: "מודל רשת של רגל להמחשה",
  },
  "01 / FRONT": {
    ru: "01 / СПЕРЕДИ",
    he: "01 / מלפנים",
  },
  "03 / RIGHT": {
    ru: "03 / СПРАВА",
    he: "03 / מימין",
  },
  "3 PHOTOS → 3D GEOMETRY": {
    ru: "3 ФОТО → 3D-ГЕОМЕТРИЯ",
    he: "3 תמונות ← גאומטריה תלת־ממדית",
  },
  "Illustration of the concept, not a reconstruction of your leg.": {
    ru: "Иллюстрация идеи, а не реконструкция вашей ноги.",
    he: "המחשת הרעיון, לא שחזור של הרגל שלכם.",
  },
  "WHY WE ARE BUILDING IT": {
    ru: "ЗАЧЕМ МЫ ЭТО СОЗДАЁМ",
    he: "למה אנחנו בונים את זה",
  },
  "Make change": {
    ru: "Сделать изменения",
    he: "להפוך שינויים",
  },
  "easier to see.": {
    ru: "более заметными.",
    he: "לקלים יותר לזיהוי.",
  },
  "Our goal is to make monitoring leg shape and volume accessible, quick and convenient using a familiar device: a camera.":
    {
      ru: "Наша цель — сделать наблюдение за формой и объёмом ноги доступным, быстрым и удобным с помощью привычного устройства: камеры.",
      he: "המטרה שלנו היא להפוך מעקב אחר צורת הרגל ונפחה לנגיש, מהיר ונוח באמצעות מכשיר מוכר: מצלמה.",
    },
  "Small changes can be difficult to judge from memory or a single photograph. Repeatable measurements could give people and clinicians a clearer record to discuss over time.":
    {
      ru: "Небольшие изменения сложно оценивать по памяти или одному фото. Повторяемые измерения могут дать пользователям и врачам более ясную картину динамики для совместного обсуждения.",
      he: "קשה להעריך שינויים קטנים מהזיכרון או מתמונה בודדת. מדידות עקביות עשויות לספק לאנשים ולצוותים רפואיים תיעוד ברור יותר לדיון לאורך זמן.",
    },
  "The research question: how accurately and consistently can we measure leg volume from three photographs?":
    {
      ru: "Вопрос исследования: насколько точно и стабильно можно измерять объём ноги по трём фотографиям?",
      he: "שאלת המחקר: באיזו מידת דיוק ועקביות אפשר למדוד נפח רגל משלוש תמונות?",
    },
  "FROM PHOTOS TO INSIGHT": {
    ru: "ОТ ФОТОГРАФИЙ К ПОНИМАНИЮ",
    he: "מתמונות להבנה",
  },
  "Follow the journey.": {
    ru: "Проследите весь путь.",
    he: "עקבו אחר התהליך.",
  },
  "Select a step to see what it contributes.": {
    ru: "Выберите этап, чтобы узнать его задачу.",
    he: "בחרו שלב כדי להבין את תפקידו.",
  },
  "Explore the process": {
    ru: "Этапы работы",
    he: "שלבי התהליך",
  },
  "01 · Capture": {
    ru: "01 · Съёмка",
    he: "01 · צילום",
  },
  "02 · Reconstruct": {
    ru: "02 · Реконструкция",
    he: "02 · שחזור",
  },
  "03 · Measure": {
    ru: "03 · Измерение",
    he: "03 · מדידה",
  },
  "04 · Compare": {
    ru: "04 · Сравнение",
    he: "04 · השוואה",
  },
  "A CONSISTENT START": {
    ru: "ЕДИНЫЕ УСЛОВИЯ СЪЁМКИ",
    he: "התחלה עקבית",
  },
  "Three views. The same pose.": {
    ru: "Три ракурса. Одна поза.",
    he: "שלוש זוויות. אותה תנוחה.",
  },
  "Take one photo from the front, one from the left and one from the right. Keep the whole target area visible, with consistent lighting, pose and camera height.":
    {
      ru: "Сделайте по одному снимку спереди, слева и справа. Вся область измерения должна быть видна; сохраняйте освещение, позу и высоту камеры.",
      he: "צלמו תמונה מלפנים, משמאל ומימין. ודאו שכל האזור הנמדד נראה, ושמרו על תאורה, תנוחה וגובה מצלמה עקביים.",
    },
  "The measured leg length provides a reference for real-world scale. Clear capture instructions help make repeat scans comparable.":
    {
      ru: "Измеренная длина ноги служит ориентиром для реального масштаба. Чёткие правила съёмки помогают сравнивать повторные сканирования.",
      he: "אורך הרגל שנמדד משמש נקודת ייחוס לקנה מידה אמיתי. הוראות צילום ברורות עוזרות להשוות בין סריקות חוזרות.",
    },
  "SHAPE FROM IMAGES": {
    ru: "ФОРМА ИЗ ИЗОБРАЖЕНИЙ",
    he: "צורה מתוך תמונות",
  },
  "From pixels to a surface.": {
    ru: "От пикселей к поверхности.",
    he: "מפיקסלים למשטח.",
  },
  "Image preparation and AI reconstruction turn the views into a 3D mesh: a surface made of connected vertices and faces.":
    {
      ru: "Подготовка изображений и AI-реконструкция преобразуют ракурсы в 3D-сетку — поверхность из соединённых вершин и граней.",
      he: "הכנת תמונות ושחזור בעזרת AI הופכים את הזוויות לרשת תלת־ממדית: משטח המורכב מקודקודים ופאות מחוברים.",
    },
  "Our research pipeline already reconstructs models from multiple images. We are testing its accuracy and consistency before connecting it to this website.":
    {
      ru: "Наш исследовательский pipeline уже создаёт модели из нескольких изображений. Мы проверяем точность и повторяемость перед подключением к сайту.",
      he: "תהליך המחקר שלנו כבר משחזר מודלים ממספר תמונות. אנו בודקים את הדיוק והעקביות לפני חיבורו לאתר.",
    },
  "GEOMETRY WITH SCALE": {
    ru: "ГЕОМЕТРИЯ В РЕАЛЬНОМ МАСШТАБЕ",
    he: "גאומטריה בקנה מידה",
  },
  "A model you can measure.": {
    ru: "Модель, которую можно измерить.",
    he: "מודל שאפשר למדוד.",
  },
  "Mesh processing checks the surface and applies scale calibration. A suitable, closed mesh can then be used to calculate the volume of the defined leg region in cubic centimetres.":
    {
      ru: "Обработка сетки проверяет поверхность и калибрует масштаб. Подходящая замкнутая сетка позволяет вычислить объём выбранной области ноги в кубических сантиметрах.",
      he: "עיבוד הרשת בודק את המשטח ומכייל את קנה המידה. רשת סגורה ומתאימה יכולה לשמש לחישוב נפח אזור הרגל שהוגדר בסנטימטרים מעוקבים.",
    },
  "Volume accuracy, measurement boundaries and reconstruction quality are still being evaluated. A visually convincing model is not automatically an accurate measurement.":
    {
      ru: "Точность объёма, границы измерения и качество реконструкции ещё проверяются. Правдоподобный вид модели сам по себе не гарантирует точность измерения.",
      he: "דיוק הנפח, גבולות המדידה ואיכות השחזור עדיין נבדקים. מודל שנראה משכנע אינו בהכרח מדידה מדויקת.",
    },
  "ILLUSTRATIVE TREND": {
    ru: "ПРИМЕР ДИНАМИКИ",
    he: "מגמה להמחשה",
  },
  "THE VALUE OF REPEAT SCANS": {
    ru: "ЦЕННОСТЬ ПОВТОРНЫХ ИЗМЕРЕНИЙ",
    he: "הערך של סריקות חוזרות",
  },
  "Understand change over time.": {
    ru: "Понимать изменения со временем.",
    he: "להבין שינויים לאורך זמן.",
  },
  "Saved scans can bring volume, shape and dates into one view. The goal is to compare measurements taken under consistent conditions and make changes easier to review.":
    {
      ru: "Сохранённые сканирования объединяют объём, форму и даты. Цель — сравнивать измерения в одинаковых условиях и делать динамику более наглядной.",
      he: "סריקות שמורות יכולות לרכז נפח, צורה ותאריכים בתצוגה אחת. המטרה היא להשוות מדידות בתנאים עקביים ולהקל על בחינת שינויים.",
    },
  "The current website saves demo sessions locally. Real comparisons will use your pipeline results once integration is complete.":
    {
      ru: "Текущий сайт сохраняет демонстрационные сеансы локально. После интеграции сравнение будет использовать реальные результаты pipeline.",
      he: "האתר הנוכחי שומר הדגמות באופן מקומי. לאחר השלמת השילוב, ההשוואות יתבססו על תוצאות תהליך השחזור.",
    },
  "THE TECHNOLOGY, EXPLAINED": {
    ru: "ПОНЯТНО О ТЕХНОЛОГИЯХ",
    he: "הטכנולוגיה, בפשטות",
  },
  "Several tools.": {
    ru: "Несколько инструментов.",
    he: "מספר כלים.",
  },
  "One connected process.": {
    ru: "Один общий процесс.",
    he: "תהליך אחד מחובר.",
  },
  "01 / IMAGE PREPARATION": {
    ru: "01 / ПОДГОТОВКА ФОТО",
    he: "01 / הכנת תמונות",
  },
  "Computer vision": {
    ru: "Компьютерное зрение",
    he: "ראייה ממוחשבת",
  },
  "Prepare and isolate the target leg region so reconstruction starts with useful, consistent inputs.":
    {
      ru: "Подготовка и выделение области ноги помогают начать реконструкцию с пригодных и согласованных входных данных.",
      he: "הכנה ובידוד של אזור הרגל כדי להתחיל את השחזור מנתונים שימושיים ועקביים.",
    },
  "02 / AI RECONSTRUCTION": {
    ru: "02 / AI-РЕКОНСТРУКЦИЯ",
    he: "02 / שחזור בעזרת AI",
  },
  "AI + Hunyuan3D": {
    ru: "AI + Hunyuan3D",
    he: "AI + Hunyuan3D",
  },
  "The reconstruction stage transforms image information into a three-dimensional representation of the leg.":
    {
      ru: "Этап реконструкции преобразует информацию из фотографий в трёхмерное представление ноги.",
      he: "שלב השחזור הופך מידע מהתמונות לייצוג תלת־ממדי של הרגל.",
    },
  "03 / GEOMETRY": {
    ru: "03 / ГЕОМЕТРИЯ",
    he: "03 / גאומטריה",
  },
  "Mesh processing + Trimesh": {
    ru: "Обработка сетки + Trimesh",
    he: "עיבוד רשת + Trimesh",
  },
  "Inspect mesh geometry, apply scale and calculate volume for a clearly defined measurement region.":
    {
      ru: "Проверка геометрии, масштабирование и расчёт объёма чётко определённой области измерения.",
      he: "בדיקת הגאומטריה של הרשת, התאמת קנה המידה וחישוב נפח של אזור מדידה מוגדר היטב.",
    },
  "04 / INTERACTIVE VIEWING": {
    ru: "04 / ИНТЕРАКТИВНЫЙ ПРОСМОТР",
    he: "04 / צפייה אינטראקטיבית",
  },
  "Browser visualization": {
    ru: "Визуализация в браузере",
    he: "המחשה בדפדפן",
  },
  "Rotate and explore the model in your browser. This prototype uses Canvas; Three.js is planned for viewing the pipeline’s real 3D output.":
    {
      ru: "Вращайте и изучайте модель в браузере. В прототипе используется Canvas; Three.js планируется для просмотра реальных 3D-моделей из pipeline.",
      he: "סובבו וחקרו את המודל בדפדפן. אב־הטיפוס משתמש ב־Canvas; מתוכנן שימוש ב־Three.js להצגת הפלט התלת־ממדי האמיתי.",
    },
  "WHERE WE ARE TODAY": {
    ru: "ТЕКУЩИЙ ЭТАП",
    he: "איפה אנחנו היום",
  },
  "Research in progress.": {
    ru: "Исследование продолжается.",
    he: "המחקר בעיצומו.",
  },
  "A clear next step.": {
    ru: "Следующий шаг понятен.",
    he: "הצעד הבא ברור.",
  },
  "Working research pipeline": {
    ru: "Рабочий исследовательский pipeline",
    he: "תהליך מחקר פעיל",
  },
  "Multi-image reconstruction is working. We are testing model quality and developing scaled volume calculations.":
    {
      ru: "Реконструкция по нескольким снимкам работает. Мы тестируем качество моделей и разрабатываем расчёт объёма с учётом масштаба.",
      he: "השחזור ממספר תמונות פועל. אנו בודקים את איכות המודלים ומפתחים חישובי נפח בקנה מידה אמיתי.",
    },
  "Interactive website prototype": {
    ru: "Интерактивный прототип сайта",
    he: "אב־טיפוס אינטראקטיבי של האתר",
  },
  "Photo uploads, animated processing, sample results, reports and local demo history are available. The research model is not yet connected to the website.":
    {
      ru: "Доступны загрузка фото, анимация обработки, примерные результаты, отчёты и локальная история демо. Исследовательская модель пока не подключена к сайту.",
      he: "העלאת תמונות, הדמיית עיבוד, תוצאות לדוגמה, דוחות והיסטוריית הדגמות מקומית זמינים. מודל המחקר עדיין אינו מחובר לאתר.",
    },
  "Future clinical research": {
    ru: "Будущая клиническая работа",
    he: "מחקר קליני עתידי",
  },
  "With clinicians, we aim to develop and validate criteria for interpreting changes and deciding when further examination may be appropriate.":
    {
      ru: "Совместно с врачами мы планируем разработать и проверить критерии интерпретации изменений и необходимости дополнительного обследования.",
      he: "בשיתוף אנשי רפואה, אנו שואפים לפתח ולתקף קריטריונים לפירוש שינויים ולהחלטה מתי עשוי להתאים בירור נוסף.",
    },
  "Designed to support understanding, not replace a clinician.": {
    ru: "Помогать понимать, а не заменять врача.",
    he: "נועד לסייע בהבנה, לא להחליף איש רפואה.",
  },
  "LegSense does not currently provide a diagnosis or a medical assessment. Any future health recommendations will require clinical validation. The long-term aim is an accessible monitoring tool that helps users and clinicians review changes and discuss next steps.":
    {
      ru: "Сейчас LegSense не ставит диагноз и не проводит медицинскую оценку. Будущие рекомендации потребуют клинической проверки. Наша долгосрочная цель — доступный инструмент мониторинга, помогающий пользователям и врачам оценивать динамику и обсуждать дальнейшие действия.",
      he: "LegSense אינו מספק כרגע אבחנה או הערכה רפואית. המלצות בריאות עתידיות ידרשו תיקוף קליני. המטרה ארוכת הטווח היא כלי מעקב נגיש שיסייע למשתמשים ולאנשי רפואה לבחון שינויים ולדון בצעדים הבאים.",
    },
  "EXPLORE THE EXPERIENCE": {
    ru: "ПОПРОБУЙТЕ САМИ",
    he: "גלו את החוויה",
  },
  "See the idea in action.": {
    ru: "Посмотрите идею в действии.",
    he: "ראו את הרעיון בפעולה.",
  },
  "Try the interactive demonstration, or return to the capture guide.": {
    ru: "Попробуйте интерактивную демонстрацию или вернитесь к инструкции по съёмке.",
    he: "נסו את ההדגמה האינטראקטיבית או חזרו למדריך הצילום.",
  },
  "Capture guide": {
    ru: "Инструкция по съёмке",
    he: "מדריך צילום",
  },
  "Back to LegSense": {
    ru: "Вернуться в LegSense",
    he: "חזרה ל־LegSense",
  },
  "Research project · Demonstration website": {
    ru: "Исследовательский проект · Демонстрационный сайт",
    he: "פרויקט מחקר · אתר הדגמה",
  },
};
