/** Translation dictionary. Each key is the exact English text from HTML or JS.
 * ru = Russian, he = Hebrew. Technology names are intentionally left unchanged.
 * When editing English copy, update the matching key here.
 */
const LEG_TRANSLATIONS = {
  "LegSense — A new dimension": { ru: "LegSense — Новое измерение", he: "LegSense — ממד חדש" },
  "How it works": { ru: "Как это работает", he: "איך זה עובד" },
  History: { ru: "История", he: "היסטוריה" },
  Technology: { ru: "Технология", he: "טכנולוגיה" },
  "Analyze My Leg": { ru: "Анализировать ногу", he: "ניתוח הרגל שלי" },
  "Analyze My Leg →": { ru: "Анализировать ногу →", he: "ניתוח הרגל שלי ←" },
  "AI-ASSISTED 3D LEG ANALYSIS": {
    ru: "3D-АНАЛИЗ НОГИ С ПОМОЩЬЮ ИИ",
    he: "ניתוח רגל בתלת־ממד בעזרת AI",
  },
  "See your leg": { ru: "Взгляните на ногу", he: "לראות את הרגל" },
  "in a new": { ru: "в новом", he: "בממד" },
  "dimension.": { ru: "измерении.", he: "חדש." },
  "Three photos become an interactive 3D reconstruction with volume, geometry quality and easy-to-understand health insights.":
    {
      ru: "Три фотографии превращаются в интерактивную 3D-модель с объёмом, оценкой геометрии и понятными результатами.",
      he: "שלוש תמונות הופכות למודל תלת־ממדי אינטראקטיבי עם נפח, איכות גאומטרית ותובנות ברורות.",
    },
  "See how it works": { ru: "Как это работает", he: "איך זה עובד" },
  photos: { ru: "фото", he: "תמונות" },
  "3D": { ru: "3D", he: "תלת־ממד" },
  reconstruction: { ru: "реконструкция", he: "שחזור" },
  Volume: { ru: "Объём", he: "נפח" },
  "in cm³": { ru: "в см³", he: "בסמ״ק" },
  Private: { ru: "Приватно", he: "פרטי" },
  "local processing": { ru: "локальная обработка", he: "עיבוד מקומי" },
  VOLUME: { ru: "ОБЪЁМ", he: "נפח" },
  "MESH QUALITY": { ru: "КАЧЕСТВО СЕТКИ", he: "איכות הרשת" },
  "ANALYSIS READY": { ru: "АНАЛИЗ ГОТОВ", he: "הניתוח מוכן" },
  "Ⅱ Pause": { ru: "Ⅱ Пауза", he: "Ⅱ השהיה" },
  "▶ Play": { ru: "▶ Продолжить", he: "▶ הפעלה" },
  "Pause animation": { ru: "Приостановить анимацию", he: "השהיית ההנפשה" },
  "Play animation": { ru: "Продолжить анимацию", he: "הפעלת ההנפשה" },
  "Pause result model": { ru: "Приостановить модель", he: "השהיית המודל" },
  "Play result model": { ru: "Вращать модель", he: "הפעלת סיבוב המודל" },
  "DRAG TO ROTATE · DEMO MODEL": {
    ru: "ПЕРЕТАЩИТЕ ДЛЯ ВРАЩЕНИЯ · ДЕМО",
    he: "גרירה לסיבוב · מודל לדוגמה",
  },
  "Fast & Easy": { ru: "Быстро и просто", he: "מהיר ופשוט" },
  "Just 3 photos and a few seconds": {
    ru: "Всего 3 фото и несколько секунд",
    he: "רק 3 תמונות וכמה שניות",
  },
  "Interactive 3D Model": { ru: "Интерактивная 3D-модель", he: "מודל תלת־ממדי אינטראקטיבי" },
  "View, rotate and explore your leg": {
    ru: "Рассматривайте и вращайте модель ноги",
    he: "צפייה, סיבוב וחקירת מודל הרגל",
  },
  "Health Insights": { ru: "Оценка состояния", he: "תובנות בריאותיות" },
  "A clearer picture of your leg": {
    ru: "Больше информации о вашей ноге",
    he: "תמונה ברורה יותר של הרגל",
  },
  "Privacy First": { ru: "Защита данных", he: "פרטיות לפני הכול" },
  "Your data stays on your device": {
    ru: "Данные остаются на вашем устройстве",
    he: "הנתונים נשארים במכשיר שלכם",
  },
  "SIMPLE PROCESS": { ru: "ПРОСТОЙ ПРОЦЕСС", he: "תהליך פשוט" },
  "Three angles. One clear picture.": {
    ru: "Три ракурса. Одна ясная картина.",
    he: "שלוש זוויות. תמונה אחת ברורה.",
  },
  "Keep the same pose and distance. LegSense uses the three views to understand the shape": {
    ru: "Сохраняйте позу и расстояние. LegSense использует три ракурса, чтобы восстановить форму",
    he: "שמרו על אותה תנוחה ואותו מרחק. LegSense משתמש בשלוש הזוויות כדי להבין את צורת",
  },
  "of your leg.": { ru: "вашей ноги.", he: "הרגל שלכם." },
  Front: { ru: "Спереди", he: "מבט קדמי" },
  "Face the camera. Keep the full leg visible.": {
    ru: "Встаньте лицом к камере. Нога должна быть видна целиком.",
    he: "עמדו מול המצלמה. ודאו שכל הרגל נראית.",
  },
  "Left side": { ru: "Слева", he: "צד שמאל" },
  "Turn 90°. Keep the camera at the same height.": {
    ru: "Повернитесь на 90°. Сохраняйте высоту камеры.",
    he: "הסתובבו ב־90°. שמרו על אותו גובה מצלמה.",
  },
  "Right side": { ru: "Справа", he: "צד ימין" },
  "Capture the opposite profile without changing pose.": {
    ru: "Снимите противоположный бок, сохраняя позу.",
    he: "צלמו את הצד הנגדי בלי לשנות את התנוחה.",
  },
  "Photo tip:": { ru: "Совет по съёмке:", he: "טיפ לצילום:" },
  "use even lighting, a simple background and keep the whole target area inside the frame.": {
    ru: "используйте ровное освещение, простой фон и держите всю область измерения в кадре.",
    he: "השתמשו בתאורה אחידה וברקע פשוט, והשאירו את כל האזור הנמדד בתוך המסגרת.",
  },
  "YOUR SCAN": { ru: "ВАШЕ СКАНИРОВАНИЕ", he: "הסריקה שלכם" },
  "Ready when you are.": { ru: "Готовы, когда вы готовы.", he: "מוכנים כשאתם מוכנים." },
  "Upload three views. Images stay in your browser in this prototype.": {
    ru: "Загрузите три ракурса. В этом прототипе снимки остаются в браузере.",
    he: "העלו שלוש זוויות. באב־טיפוס זה התמונות נשארות בדפדפן שלכם.",
  },
  "Front photo": { ru: "Фото спереди", he: "תמונה מלפנים" },
  "Left photo": { ru: "Фото слева", he: "תמונה משמאל" },
  "Right photo": { ru: "Фото справа", he: "תמונה מימין" },
  "Click or drop image": { ru: "Нажмите или перетащите фото", he: "לחצו או גררו תמונה" },
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
  "Measured leg length": { ru: "Измеренная длина ноги", he: "אורך הרגל שנמדד" },
  cm: { ru: "см", he: "ס״מ" },
  "cm³": { ru: "см³", he: "סמ״ק" },
  "Used later to calibrate the 3D model to real-world scale.": {
    ru: "Используется для приведения 3D-модели к реальному масштабу.",
    he: "ישמש בהמשך להתאמת המודל התלת־ממדי לקנה מידה אמיתי.",
  },
  "DEMONSTRATION · MODEL NOT CONNECTED": {
    ru: "ДЕМОНСТРАЦИЯ · МОДЕЛЬ НЕ ПОДКЛЮЧЕНА",
    he: "הדגמה · המודל אינו מחובר",
  },
  "Bringing the shape to life.": { ru: "Создаём объёмную форму.", he: "מפיחים חיים בצורה." },
  "Your photos stay on this device.": {
    ru: "Ваши фото остаются на этом устройстве.",
    he: "התמונות נשארות במכשיר הזה.",
  },
  Cancel: { ru: "Отмена", he: "ביטול" },
  "ILLUSTRATIVE MODEL": { ru: "ДЕМОНСТРАЦИОННАЯ МОДЕЛЬ", he: "מודל להמחשה" },
  "Check images": { ru: "Проверка снимков", he: "בדיקת תמונות" },
  "Build point cloud": { ru: "Построение облака точек", he: "בניית ענן נקודות" },
  "Connect the 3D mesh": { ru: "Построение 3D-сетки", he: "בניית הרשת התלת־ממדית" },
  "Preview volume calculation": { ru: "Демонстрация расчёта объёма", he: "הדגמת חישוב הנפח" },
  "Prepare the result": { ru: "Подготовка результата", he: "הכנת התוצאה" },
  "Preparing images…": { ru: "Подготовка снимков…", he: "הכנת התמונות…" },
  "This preview uses a preset mesh and sample measurements. It does not reconstruct or assess your leg.":
    {
      ru: "В демонстрации используются готовая сетка и примерные показатели. Она не восстанавливает и не оценивает вашу ногу.",
      he: "תצוגה זו משתמשת ברשת מוכנה ובמדידות לדוגמה. היא אינה משחזרת או מעריכה את הרגל שלכם.",
    },
  "YOUR RESULT · DEMO": { ru: "ВАШ РЕЗУЛЬТАТ · ДЕМО", he: "התוצאה שלכם · הדגמה" },
  "Every detail, in perspective.": { ru: "Все детали перед вами.", he: "כל פרט, בתמונה המלאה." },
  "Sample volume": { ru: "Примерный объём", he: "נפח לדוגמה" },
  "Entered leg length": { ru: "Указанная длина ноги", he: "אורך הרגל שהוזן" },
  "Reconstruction quality": { ru: "Качество реконструкции", he: "איכות השחזור" },
  "Not evaluated": { ru: "Не оценено", he: "לא הוערכה" },
  "Change vs previous demo": { ru: "Изменение с прошлого демо", he: "שינוי מההדגמה הקודמת" },
  "Insufficient data for a health assessment": {
    ru: "Недостаточно данных для оценки здоровья",
    he: "אין מספיק נתונים להערכת מצב בריאותי",
  },
  "The medical model is not connected. This preview cannot determine whether you are healthy or whether you need to see a doctor. A clinical recommendation will appear here when the validated model is integrated.":
    {
      ru: "Медицинская модель не подключена. Демонстрация не определяет состояние здоровья или необходимость обращения к врачу. Рекомендация появится после подключения проверенной модели.",
      he: "המודל הרפואי אינו מחובר. הדגמה זו אינה יכולה לקבוע אם אתם בריאים או אם יש צורך לפנות לרופא. המלצה קלינית תופיע לאחר שילוב מודל שעבר תיקוף.",
    },
  "Download report ↓": { ru: "Скачать отчёт ↓", he: "הורדת דוח ↓" },
  "Download sample 3D mesh ↓": {
    ru: "Скачать пример 3D-сетки ↓",
    he: "הורדת רשת תלת־ממדית לדוגמה ↓",
  },
  "New scan →": { ru: "Новое сканирование →", he: "סריקה חדשה ←" },
  "We couldn’t complete the preview.": {
    ru: "Не удалось завершить демонстрацию.",
    he: "לא הצלחנו להשלים את ההדגמה.",
  },
  "Try again": { ru: "Повторить", he: "ניסיון נוסף" },
  "Your scan history.": { ru: "История сканирований.", he: "היסטוריית הסריקות שלכם." },
  "Future scans can help visualize changes in volume and geometry over time.": {
    ru: "Повторные сканирования помогут отслеживать изменения объёма и формы со временем.",
    he: "סריקות חוזרות יכולות לסייע בהצגת שינויים בנפח ובגאומטריה לאורך זמן.",
  },
  "ILLUSTRATIVE DATA": { ru: "ДЕМОНСТРАЦИОННЫЕ ДАННЫЕ", he: "נתונים להמחשה" },
  Today: { ru: "Сегодня", he: "היום" },
  "Sep 12": { ru: "12 сент.", he: "12 בספט׳" },
  "Oct 01": { ru: "1 окт.", he: "1 באוק׳" },
  "Oct 18": { ru: "18 окт.", he: "18 באוק׳" },
  "Latest volume": { ru: "Последний объём", he: "הנפח האחרון" },
  "−1.8% since first scan": { ru: "−1,8% с первого сканирования", he: "−1.8% מהסריקה הראשונה" },
  "View all history →": { ru: "Вся история →", he: "לכל ההיסטוריה ←" },
  "Hide history ↑": { ru: "Скрыть историю ↑", he: "הסתרת ההיסטוריה ↑" },
  "This chart is a design preview with illustrative values. Your actual scan history will appear here once analysis and saving are connected.":
    {
      ru: "На графике показаны примерные значения. Реальная история появится после подключения анализа и сохранения.",
      he: "הגרף הוא תצוגת עיצוב עם ערכים להמחשה. היסטוריית הסריקות האמיתית תופיע לאחר חיבור הניתוח והשמירה.",
    },
  "Start a new scan →": { ru: "Начать новое сканирование →", he: "התחלת סריקה חדשה ←" },
  "BUILT WITH CARE": { ru: "ПРОДУМАНО ДО ДЕТАЛЕЙ", he: "נבנה בתשומת לב" },
  "Complex technology.": { ru: "Сложная технология.", he: "טכנולוגיה מורכבת." },
  "Simple experience.": { ru: "Простой интерфейс.", he: "חוויה פשוטה." },
  "LegSense is designed around a local-first pipeline: image preparation, multi-view 3D reconstruction, mesh validation, scale calibration and volume calculation.":
    {
      ru: "LegSense основан на конвейере с приоритетом локальной обработки: подготовка снимков, 3D-реконструкция из нескольких ракурсов, проверка сетки, калибровка масштаба и расчёт объёма.",
      he: "LegSense מתוכנן סביב תהליך שנותן עדיפות לעיבוד מקומי: הכנת תמונות, שחזור תלת־ממדי ממספר זוויות, בדיקת הרשת, כיול קנה המידה וחישוב הנפח.",
    },
  "Planned pipeline · Processing is not connected in this prototype.": {
    ru: "Планируемый конвейер · Обработка в прототипе пока не подключена.",
    he: "תהליך מתוכנן · העיבוד אינו מחובר באב־טיפוס זה.",
  },
  "3 images": { ru: "3 снимка", he: "3 תמונות" },
  "3D mesh": { ru: "3D-сетка", he: "רשת תלת־ממדית" },
  Scale: { ru: "Масштаб", he: "קנה מידה" },
  "Interactive concept · Not a medical assessment": {
    ru: "Интерактивный прототип · Не медицинская оценка",
    he: "אב־טיפוס אינטראקטיבי · לא הערכה רפואית",
  },
  "LEGSENSE PREVIEW": { ru: "ДЕМОНСТРАЦИЯ LEGSENSE", he: "הדגמת LEGSENSE" },
  "Your first step starts here.": { ru: "Начните с первого шага.", he: "הצעד הראשון מתחיל כאן." },
  "Choose three photos to try the upload interface. This is a design preview: photos stay in your browser and no medical analysis is performed.":
    {
      ru: "Выберите три фото, чтобы проверить загрузку. Это прототип: снимки остаются в браузере, медицинский анализ не выполняется.",
      he: "בחרו שלוש תמונות לניסיון ממשק ההעלאה. זהו אב־טיפוס: התמונות נשארות בדפדפן ולא מתבצע ניתוח רפואי.",
    },
  "Front, left and right photos": {
    ru: "Фото спереди, слева и справа",
    he: "תמונות מלפנים, משמאל ומימין",
  },
  "No photos selected.": { ru: "Фотографии не выбраны.", he: "לא נבחרו תמונות." },
  "Back to the model →": { ru: "Вернуться к модели →", he: "חזרה למודל ←" },
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
  "First saved demo": { ru: "Первое сохранённое демо", he: "ההדגמה הראשונה שנשמרה" },
  "Latest demo": { ru: "Последнее демо", he: "ההדגמה האחרונה" },
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
  Date: { ru: "Дата", he: "תאריך" },
  "Entered length": { ru: "Указанная длина", he: "האורך שהוזן" },
  Change: { ru: "Изменение", he: "שינוי" },
  "First demo": { ru: "Первое демо", he: "הדגמה ראשונה" },
  "Clear demo history": { ru: "Очистить историю демо", he: "ניקוי היסטוריית ההדגמות" },
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
  "Your preview is ready.": { ru: "Демонстрация готова.", he: "ההדגמה שלכם מוכנה." },
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
  "Please choose an image file.": { ru: "Выберите файл изображения.", he: "בחרו קובץ תמונה." },
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
  "LegSense demo report": { ru: "Демонстрационный отчёт LegSense", he: "דוח הדגמה של LegSense" },
  "LegSense · Demo report": { ru: "LegSense · Демонстрационный отчёт", he: "LegSense · דוח הדגמה" },
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
  "About this preview": { ru: "Об этой демонстрации", he: "על ההדגמה הזו" },
  "The displayed 3D mesh and volume are preset examples, not reconstructed from your photos. Photos remain in your browser and are not included in this report. Use your browser’s Print command to save this report as a PDF.":
    {
      ru: "Показанные 3D-сетка и объём — готовые примеры, а не реконструкция по вашим снимкам. Фото остаются в браузере и не включаются в отчёт. Чтобы сохранить PDF, используйте команду «Печать» в браузере.",
      he: "הרשת התלת־ממדית והנפח המוצגים הם דוגמאות מוכנות, ולא שחזור מהתמונות שלכם. התמונות נשארות בדפדפן ואינן כלולות בדוח. לשמירת הדוח כ־PDF, השתמשו בפקודת ההדפסה בדפדפן.",
    },
  "Switch language": { ru: "Выбрать язык", he: "בחירת שפה" },
  Close: { ru: "Закрыть", he: "סגירה" },
  "Remove front photo": { ru: "Удалить фото спереди", he: "הסרת תמונה מלפנים" },
  "Remove left photo": { ru: "Удалить фото слева", he: "הסרת תמונה משמאל" },
  "Remove right photo": { ru: "Удалить фото справа", he: "הסרת תמונה מימין" },
  "Selected front photo": { ru: "Выбранное фото спереди", he: "התמונה שנבחרה מלפנים" },
  "Selected left photo": { ru: "Выбранное фото слева", he: "התמונה שנבחרה משמאל" },
  "Selected right photo": { ru: "Выбранное фото справа", he: "התמונה שנבחרה מימין" },
  "front source photo": { ru: "Исходное фото спереди", he: "תמונת המקור מלפנים" },
  "left source photo": { ru: "Исходное фото слева", he: "תמונת המקור משמאל" },
  "right source photo": { ru: "Исходное фото справа", he: "תמונת המקור מימין" },
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
  "Demonstration progress": { ru: "Ход демонстрации", he: "התקדמות ההדגמה" },
  "Illustrative volume history chart, not actual scan results": {
    ru: "Демонстрационный график объёма, не реальные результаты",
    he: "גרף היסטוריית נפח להמחשה, לא תוצאות סריקה אמיתיות",
  },
  "Planned technologies": { ru: "Планируемые технологии", he: "טכנולוגיות מתוכננות" },
  "Planned processing steps": { ru: "Планируемые этапы обработки", he: "שלבי עיבוד מתוכננים" },
};
