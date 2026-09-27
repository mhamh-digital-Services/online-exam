document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // إعدادات EmailJS
    // =====================================================

    const EMAILJS_PUBLIC_KEY = "8z8mqi6tMrEhcZOhf";
    const EMAILJS_SERVICE_ID = "service_gvhjwdx";
    const EMAILJS_TEMPLATE_ID = "template_ddlwkx9";


    // =====================================================
    // أسئلة الاختبار - 20 سؤال
    // =====================================================

    const questions = [

        {
            type: "صح أو خطأ",
            text: "أتينا كي نتعلم. الفعل (نتعلم) مرفوع بالضمة.",
            options: ["صح", "خطأ"],
            correct: 1
        },

        {
            type: "صح أو خطأ",
            text: "مهما تفعل من خير تجده. الأسلوب في الجملة أسلوب شرط.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "لتدعُ الله وحده. الفعل علامة جزمه حذف حرف العلة.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "المؤمنون متحابون. الجملة جملة فعلية.",
            options: ["صح", "خطأ"],
            correct: 1
        },

        {
            type: "صح أو خطأ",
            text: "الصحفيون يتتبعون الأخبار. الفعل من الأفعال الخمسة.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "علامة الترقيم التي توضع قبل كلمة مثل هي الفاصلة.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "تُستخدم النقطتان الرأسيتان بين الشيء وأقسامه.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "من أساليب الكتاب لزيادة الفهم استخدام الجداول والرسوم الإيضاحية.",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "صح أو خطأ",
            text: "النقطة تأثيرها هو نغمة تبدأ عالية ثم تنخفض تدريجيًا وتنتهي بسكتة.",
            options: ["صح", "خطأ"],
            correct: 1
        },

        {
            type: "صح أو خطأ",
            text: "من أخوات إن تنصب المبتدأ وترفع الخبر (ليت).",
            options: ["صح", "خطأ"],
            correct: 0
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "وضع تدريبات في نهاية الفصل أو الموضوع:",
            options: [
                "الأسئلة",
                "تحديد الأهداف",
                "الفهرس"
            ],
            correct: 0
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "علامة الترقيم التي تستخدم بدل الأسماء في الحوار:",
            options: [
                "القوسان",
                "التنصيص",
                "الشرطة"
            ],
            correct: 2
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "الأستاذ: هل راجعت دروسك جيدًا ( ) الطالب: نعم. علامة الترقيم التي تناسب في الفراغ هي:",
            options: [
                "استفهام",
                "الشرطة",
                "نقاط الحذف"
            ],
            correct: 0
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "العرف الذي يوضح التفصيلات الجزئية هو:",
            options: [
                "تحديد الأهداف",
                "التعداد",
                "الإبراز"
            ],
            correct: 1
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "مازالت الصديقات وفيات. خبر مازال منصوب بـ:",
            options: [
                "الضمة",
                "الفتحة",
                "الكسرة"
            ],
            correct: 2
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "تُعطى الفرصة مرة واحدة. كلمة (الفرصة) هي:",
            options: [
                "خبر",
                "نائب فاعل",
                "مبتدأ"
            ],
            correct: 1
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "لم يكرم العربي ضيفة. لم أداة:",
            options: [
                "جزم",
                "نصب",
                "شرط"
            ],
            correct: 0
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "إن المخدرات مهلكة. اسم إن منصوب بالكسرة لأنه:",
            options: [
                "مفرد",
                "جمع مؤنث سالم",
                "مثنى"
            ],
            correct: 1
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "الصدق منجاة. نوع الجملة السابقة:",
            options: [
                "جملة فعلية",
                "شبه جملة",
                "جملة اسمية"
            ],
            correct: 2
        },

        {
            type: "اختاري الإجابة الصحيحة",
            text: "أي الجمل الآتية تقبل علامة التأثر؟",
            options: [
                "ما أجمل الجو",
                "أحضر الكتاب",
                "لقد أصلح سيارته"
            ],
            correct: 0
        }

    ];


    // =====================================================
    // المتغيرات
    // =====================================================

    let currentQuestion = 0;

    let answers =
        new Array(questions.length).fill(null);

    let studentName = "";

    let studentClass = "";


    // =====================================================
    // عناصر الصفحة
    // =====================================================

    const startPage =
        document.getElementById("startPage");

    const quizPage =
        document.getElementById("quizPage");

    const submitPage =
        document.getElementById("submitPage");

    const resultPage =
        document.getElementById("resultPage");

    const questionContainer =
        document.getElementById("questionContainer");

    const startButton =
        document.getElementById("startExam");

    const questionTitle =
        document.getElementById("questionTitle");

    const questionCounter =
        document.getElementById("questionCounter");

    const finalAnswered =
        document.getElementById("finalAnswered");

    const resultMessage =
        document.getElementById("resultMessage");

    const resultScore =
        document.getElementById("resultScore");

    const backBtn =
        document.getElementById("backBtn");

    const confirmSubmit =
        document.getElementById("confirmSubmit");


    // =====================================================
    // التأكد من العناصر
    // =====================================================

    if (
        !startPage ||
        !quizPage ||
        !submitPage ||
        !resultPage ||
        !questionContainer ||
        !startButton
    ) {

        console.error(
            "يوجد عنصر ناقص في index.html"
        );

        return;
    }


    // =====================================================
    // إخفاء الصفحات
    // =====================================================

    function hideAllPages() {

        startPage.classList.add("hidden");

        quizPage.classList.add("hidden");

        submitPage.classList.add("hidden");

        resultPage.classList.add("hidden");

    }


    // =====================================================
    // إظهار صفحة
    // =====================================================

    function showPage(page) {

        hideAllPages();

        page.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // =====================================================
    // بداية الموقع
    // =====================================================

    hideAllPages();

    showPage(startPage);


    // =====================================================
    // بدء الاختبار
    // =====================================================

    startButton.addEventListener(
        "click",
        function () {

            const nameInput =
                document.getElementById(
                    "studentName"
                );

            const classInput =
                document.getElementById(
                    "studentClass"
                );


            studentName =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            studentClass =
                classInput
                    ? classInput.value.trim()
                    : "";


            if (!studentName) {

                alert(
                    "فضلاً اكتبي اسم الطالبة."
                );

                if (nameInput) {
                    nameInput.focus();
                }

                return;
            }


            if (!studentClass) {

                alert(
                    "فضلاً اكتبي الفصل."
                );

                if (classInput) {
                    classInput.focus();
                }

                return;
            }


            currentQuestion = 0;

            answers =
                new Array(
                    questions.length
                ).fill(null);


            showPage(quizPage);

            renderQuestion();

        }
    );


    // =====================================================
    // عرض السؤال
    // =====================================================

    function renderQuestion() {

        const question =
            questions[currentQuestion];


        if (questionTitle) {

            questionTitle.textContent =
                "السؤال " +
                (currentQuestion + 1);

        }


        if (questionCounter) {

            questionCounter.textContent =
                "السؤال " +
                (currentQuestion + 1) +
                " من " +
                questions.length;

        }


        questionContainer.innerHTML = `

            <div class="single-question">

                <div class="question-type">
                    ${question.type}
                </div>

                <h2 class="single-question-text">
                    ${question.text}
                </h2>

                <div class="single-options">

                    ${question.options
                        .map(function (option, index) {

                            return `

                                <label class="single-option">

                                    <input
                                        type="radio"
                                        name="answer"
                                        value="${index}"
                                        ${
                                            answers[currentQuestion] === index
                                                ? "checked"
                                                : ""
                                        }
                                    >

                                    <span>
                                        ${option}
                                    </span>

                                </label>

                            `;

                        })
                        .join("")}

                </div>


                <div class="question-actions">

                    ${
                        currentQuestion > 0
                            ? `
                                <button
                                    type="button"
                                    id="previousQuestion"
                                    class="secondary-button"
                                >
                                    السابق
                                </button>
                            `
                            : ""
                    }


                    <button
                        type="button"
                        id="nextQuestion"
                        class="main-button"
                    >

                        ${
                            currentQuestion ===
                            questions.length - 1

                                ? "مراجعة وتسليم"

                                : "التالي ←"
                        }

                    </button>

                </div>

            </div>

        `;


        // =================================================
        // اختيار الإجابة
        // =================================================

        const answerInputs =
            document.querySelectorAll(
                'input[name="answer"]'
            );


        answerInputs.forEach(
            function (input) {

                input.addEventListener(
                    "change",
                    function () {

                        answers[currentQuestion] =
                            Number(this.value);

                    }
                );

            }
        );


        // =================================================
        // السابق
        // =================================================

        const previousButton =
            document.getElementById(
                "previousQuestion"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                function () {

                    saveCurrentAnswer();


                    if (
                        currentQuestion > 0
                    ) {

                        currentQuestion--;

                        renderQuestion();

                    }

                }
            );

        }


        // =================================================
        // التالي
        // =================================================

        const nextButton =
            document.getElementById(
                "nextQuestion"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    saveCurrentAnswer();


                    if (
                        answers[currentQuestion] === null ||
                        answers[currentQuestion] === undefined
                    ) {

                        alert(
                            "فضلاً اختاري إجابة قبل الانتقال للسؤال التالي."
                        );

                        return;

                    }


                    if (
                        currentQuestion ===
                        questions.length - 1
                    ) {

                        openReviewPage();

                        return;

                    }


                    currentQuestion++;

                    renderQuestion();

                }
            );

        }

    }


    // =====================================================
    // حفظ الإجابة الحالية
    // =====================================================

    function saveCurrentAnswer() {

        const selected =
            document.querySelector(
                'input[name="answer"]:checked'
            );


        if (selected) {

            answers[currentQuestion] =
                Number(selected.value);

        }

    }


    // =====================================================
    // صفحة المراجعة
    // =====================================================

    function openReviewPage() {

        const answeredCount =
            answers.filter(
                function (answer) {

                    return answer !== null;

                }
            ).length;


        if (finalAnswered) {

            finalAnswered.textContent =
                answeredCount +
                " / " +
                questions.length;

        }


        showPage(submitPage);

    }


    // =====================================================
    // زر الرجوع
    // =====================================================

    if (backBtn) {

        backBtn.addEventListener(
            "click",
            function () {

                showPage(quizPage);

                renderQuestion();

            }
        );

    }


    // =====================================================
    // حساب الدرجة
    // =====================================================

    function calculateScore() {

        let score = 0;


        questions.forEach(
            function (question, index) {

                if (
                    answers[index] ===
                    question.correct
                ) {

                    score++;

                }

            }
        );


        return score;

    }


    // =====================================================
    // تجهيز إجابات الطالبة للمعلمة
    // =====================================================

    function buildAnswersForTeacher() {

        return questions
            .map(
                function (question, index) {

                    const studentAnswerIndex =
                        answers[index];


                    const studentAnswer =
                        studentAnswerIndex === null
                            ? "لم تتم الإجابة"
                            : question.options[
                                studentAnswerIndex
                              ];


                    const correctAnswer =
                        question.options[
                            question.correct
                        ];


                    const isCorrect =
                        studentAnswerIndex ===
                        question.correct;


                    return `
السؤال ${index + 1}

${question.text}

إجابة الطالبة: ${studentAnswer}

الإجابة الصحيحة: ${correctAnswer}

النتيجة: ${
    isCorrect
        ? "✓ صحيحة"
        : "✗ خاطئة"
}

--------------------------------
`;

                }
            )
            .join("\n");

    }


    // =====================================================
    // تحميل EmailJS
    // =====================================================

    function loadEmailJS() {

        return new Promise(
            function (resolve, reject) {

                if (window.emailjs) {

                    try {

                        window.emailjs.init({
                            publicKey:
                                EMAILJS_PUBLIC_KEY
                        });

                    } catch (error) {}

                    resolve();

                    return;
                }


                const script =
                    document.createElement(
                        "script"
                    );


                script.src =
                    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";


                script.onload =
                    function () {

                        try {

                            window.emailjs.init({
                                publicKey:
                                    EMAILJS_PUBLIC_KEY
                            });

                            resolve();

                        } catch (error) {

                            reject(error);

                        }

                    };


                script.onerror =
                    function () {

                        reject(
                            new Error(
                                "تعذر تحميل EmailJS"
                            )
                        );

                    };


                document.head.appendChild(
                    script
                );

            }
        );

    }


    // =====================================================
    // إرسال الاختبار للمعلمة
    // =====================================================

    async function sendEmailToTeacher(
        score
    ) {

        await loadEmailJS();


        const templateParams = {

            student_name:
                studentName,

            student_class:
                studentClass,

            score:
                score,

            answers:
                buildAnswersForTeacher()

        };


        return window.emailjs.send(

            EMAILJS_SERVICE_ID,

            EMAILJS_TEMPLATE_ID,

            templateParams

        );

    }


    // =====================================================
    // التسليم النهائي
    // =====================================================

    if (confirmSubmit) {

        confirmSubmit.addEventListener(
            "click",
            async function () {

                saveCurrentAnswer();


                const answeredCount =
                    answers.filter(
                        function (answer) {

                            return answer !== null;

                        }
                    ).length;


                if (
                    answeredCount <
                    questions.length
                ) {

                    alert(
                        "لم تتم الإجابة على جميع الأسئلة. راجعي الاختبار قبل التسليم."
                    );

                    showPage(quizPage);

                    return;

                }


                const score =
                    calculateScore();


                if (resultScore) {

                    resultScore.textContent =
                        score +
                        " / " +
                        questions.length;

                }


                if (resultMessage) {

                    resultMessage.textContent =
                        "جاري إرسال الاختبار للمعلمة...";

                }


                showPage(resultPage);


                try {

                    await sendEmailToTeacher(
                        score
                    );


                    if (resultMessage) {

                        resultMessage.textContent =
                            "تم تسجيل اختبار " +
                            studentName +
                            " بنجاح.";

                    }

                } catch (error) {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    if (resultMessage) {

                        resultMessage.textContent =
                            "تم تسجيل النتيجة، ولكن تعذر إرسالها للمعلمة.";
                    }


                    alert(
                        "تعذر إرسال الاختبار للمعلمة. تأكدي من اتصال الإنترنت وإعدادات EmailJS."
                    );

                }

            }
        );

    }

});