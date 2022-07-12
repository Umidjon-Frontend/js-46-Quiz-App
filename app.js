document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        {
            question: "Belgilar uchun qo’llaniladigan char turida belgilar majmui nomi nima deb aytiladi?",
            a: "Chartype",
            b: "ASCII-2",
            c: "ASCII",
            d: "Unicode",
            correct: "d",
        },
        {
            question: "Bitli operatorlar qaysi turlar bilan ishlaydi?",
            a: "Butun sonli",
            b: "Haqiqiy sonli",
            c: "Mantiqiy",
            d: "Ixtiyoriy",
            correct: "a",
        },
        {
            question: "Boshqa turdan float haqiqiy son turiga o’tishda qaysi Convert sinfi metodi qo’llaniladi?",
            a: "Convert.ToSingle()",
            b: "Convert.ToFloat()",
            c: "Convert.ToInt32()",
            d: "Convert.ToDouble()",
            correct: "a",
        },
        {
            question: "Boshqa turdan int butun son turiga o’tishda qaysi Convert sinfi metodi qo’llaniladi?",
            a: "Convert.Int32()",
            b: "Convert.ToInt32()",
            c: "Convert.ToInt16()",
            d: "Convert.ToInt64()",
            correct: "b",
        },
        {
            question: "Boshqa turdan long butun son turiga o’tishda qaysi Convert sinfi metodi qo’llaniladi?",
            a: "Convert.ToInt64()",
            b: "Convert.UInt64()",
            c: "Convert.ToInt32()",
            d: "Convert.ToInt16()",
            correct: "a",
        },
        {
            question: "Boshqa turdan short butun son turiga o’tishda qaysi Convert sinfi metodi qo’llaniladi?",
            a: "Convert.Int16()",
            b: "Convert.UInt16()",
            c: "Convert.ToInt32()",
            d: "Convert.ToInt16()",
            correct: "d",
        },
        {
            question: "C# da grafika chizish uchun foydalaniladigan sinflar berilgan qatorni toping.",
            a: "Image, Pen, Font, Button",
            b: "This, Graphics, Paint",
            c: "Pen, Brush, Font, Image;",
            d: "Base, Font, Button",
            correct: "c",
        },
        {
            question: "C# da konstanta nima?",
            a: "Ixtiyoriy vaqtda almashtirish mumkin bo’lgan o’zgaruvchi.",
            b: "Global o’zgaruvchi",
            c: "Qiymatini almashtirib bo’lmaydigan o’zgaruvchi.",
            d: "String turdagi o’zgaruvchi",
            correct: "c",
        },

        {
            question: "C# dasturlash tili qachon yaratilgan?;",
            a: "2000-yillar",
            b: "1990-yillar",
            c: "1970-yillar",
            d: "1980-yillar",
            correct: "a",
        },
        {
            question: "C# dasturlash tilida “? :” qanday amal?",
            a: "? amali",
            b: "Shartsiz o`tish amali",
            c: "Hech qanday amal emas",
            d: "Ternar amali",
            correct: "d",
        },
        {
            question: "C# dasturlash tilida “else” blokida “if” operatorlaridan foydalanib nechta shartlarni tekshiradi?",
            a: "Bir nechta",
            b: "Faqat 1 ta",
            c: "Faqat 2 ta",
            d: "Faqat 3 ta",
            correct: "a",
        },
        {
            question: "C# dasturlash tilida «%» operator nima vazifa bajaradi?",
            a: "Yig’indidagi foizni beradi",
            b: "Bo’lgandagi qoldiqni beradi",
            c: "Qiymatni foizga o’tkazadi",
            d: "Daraja hisobash",
            correct: "b",
        },
        {
            question: "C# dasturlash tilida «inkor» amalining belgilanishi qaysi?",
            a: "No",
            b: "Not",
            c: "!",
            d: "!=",
            correct: "c",
        },
        {
            question: "C# dasturlash tilida … – fayl bor yoki yo‘qligini tekshiradi. Nuqtalar o‘rnini to‘ldiring.",
            a: "char ExistsCreate()",
            b: "string Exists()",
            c: "int Exists()",
            d: "bool Exists()",
            correct: "d",
        },
        {
            question: "C# dasturlash tilida … – yangi fayl yaratish. Nuqtalar o‘rnini to‘ldiring.",
            a: "Creat()",
            b: "CreatLine()",
            c: "CreatNew()",
            d: "CreatTo()",
            correct: "a",
        },
    ];


    const quiz = document.querySelector("#quiz");
    const question = document.querySelector("#question");
    const answers = document.querySelectorAll(".answer");
    const a_text = document.querySelector("#a_text");
    const b_text = document.querySelector("#b_text");
    const c_text = document.querySelector("#c_text");
    const d_text = document.querySelector("#d_text");
    const submit = document.querySelector("#submit");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers();

        let currentQuizData = quizData[currentQuiz];

        question.innerHTML = currentQuizData.question;

        a_text.innerHTML = currentQuizData.a;
        b_text.innerHTML = currentQuizData.b;
        c_text.innerHTML = currentQuizData.c;
        d_text.innerHTML = currentQuizData.d;
    }

    function deselectAnswers() {
        answers.forEach((item) => (item.checked = false));
    }

    function selectQuiz() {
        let answer;

        answers.forEach((item) => {
            if (item.checked) {
                answer = item.id;
            }
        });
        return answer;
    }

    submit.addEventListener("click", () => {
        let answer = selectQuiz();

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }

            currentQuiz++;

            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
            }
        }
    });
});
