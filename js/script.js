// بيانات الاختبارات
const testsData = [
  {
    unit: 1,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "Choose the correct form: She ___ to school every day.",
            options: ["go", "goes", "going", "went"],
            answer: 1
          },
          {
            id: 2,
            question: "What is the past tense of 'eat'?",
            options: ["eated", "ate", "eaten", "eating"],
            answer: 1
          },
          {
            id: 3,
            question: "Which sentence is correct?",
            options: ["He don't like apples.", "He doesn't likes apples.", "He doesn't like apples.", "He not like apples."],
            answer: 2
          },
          {
            id: 4,
            question: "___ you speak English?",
            options: ["Do", "Does", "Is", "Are"],
            answer: 0
          },
          {
            id: 5,
            question: "They ___ playing football right now.",
            options: ["is", "are", "am", "be"],
            answer: 1
          },
          {
            id: 6,
            question: "What is the opposite of 'expensive'?",
            options: ["cheap", "dear", "costly", "valuable"],
            answer: 0
          },
          {
            id: 7,
            question: "She is ___ than her sister.",
            options: ["taller", "tallest", "tall", "more tall"],
            answer: 0
          },
          {
            id: 8,
            question: "If it rains, I ___ at home.",
            options: ["will stay", "stay", "stayed", "would stay"],
            answer: 0
          },
          {
            id: 9,
            question: "He ___ his homework yet.",
            options: ["didn't finish", "hasn't finished", "doesn't finish", "isn't finishing"],
            answer: 1
          },
          {
            id: 10,
            question: "She enjoys ___ books.",
            options: ["read", "to read", "reading", "reads"],
            answer: 2
          }
        ]
      },
      {
        id: 2,
        title: "اختبار 2",
        questions: [
          {
            id: 1,
            question: "What is the synonym of 'happy'?",
            options: ["sad", "joyful", "angry", "tired"],
            answer: 1
          },
          {
            id: 2,
            question: "I ___ to London last year.",
            options: ["go", "went", "gone", "going"],
            answer: 1
          },
          {
            id: 3,
            question: "She ___ a book when I called her.",
            options: ["read", "was reading", "reads", "reading"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 2,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "What is the plural of 'child'?",
            options: ["childs", "children", "childes", "child"],
            answer: 1
          },
          {
            id: 2,
            question: "This is ___ book.",
            options: ["me", "my", "I", "mine"],
            answer: 1
          },
          {
            id: 3,
            question: "They ___ to the party tomorrow.",
            options: ["come", "came", "will come", "coming"],
            answer: 2
          }
        ]
      }
    ]
  },
  {
    unit: 3,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "What is the past participle of 'write'?",
            options: ["wrote", "writed", "written", "writing"],
            answer: 2
          },
          {
            id: 2,
            question: "She has ___ here for five years.",
            options: ["live", "lived", "living", "lives"],
            answer: 1
          },
          {
            id: 3,
            question: "I wish I ___ a car.",
            options: ["have", "had", "has", "will have"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 4,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "He is used to ___ early.",
            options: ["get up", "getting up", "got up", "gets up"],
            answer: 1
          },
          {
            id: 2,
            question: "The test was ___ difficult.",
            options: ["extreme", "extremely", "extremeness", "extremed"],
            answer: 1
          },
          {
            id: 3,
            question: "She suggested ___ to the cinema.",
            options: ["go", "to go", "going", "went"],
            answer: 2
          }
        ]
      }
    ]
  },
  {
    unit: 5,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "I ___ my keys. I can't find them.",
            options: ["lose", "lost", "have lost", "am losing"],
            answer: 2
          },
          {
            id: 2,
            question: "By next year, I ___ my studies.",
            options: ["will finish", "will have finished", "finish", "finished"],
            answer: 1
          },
          {
            id: 3,
            question: "If I ___ you, I would accept the offer.",
            options: ["am", "was", "were", "will be"],
            answer: 2
          }
        ]
      }
    ]
  },
  {
    unit: 6,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "The book ___ by Shakespeare.",
            options: ["wrote", "was written", "written", "has written"],
            answer: 1
          },
          {
            id: 2,
            question: "She is the woman ___ helped me.",
            options: ["who", "which", "whose", "whom"],
            answer: 0
          },
          {
            id: 3,
            question: "He denied ___ the money.",
            options: ["steal", "to steal", "stealing", "stole"],
            answer: 2
          }
        ]
      }
    ]
  },
  {
    unit: 7,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "I look forward to ___ from you.",
            options: ["hear", "hearing", "heard", "hears"],
            answer: 1
          },
          {
            id: 2,
            question: "It's high time we ___.",
            options: ["leave", "left", "leaving", "have left"],
            answer: 1
          },
          {
            id: 3,
            question: "He was made ___ the work.",
            options: ["do", "to do", "doing", "did"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 8,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "I'd rather you ___ home now.",
            options: ["go", "went", "to go", "going"],
            answer: 1
          },
          {
            id: 2,
            question: "He is ___ intelligent than his brother.",
            options: ["less", "least", "little", "lesser"],
            answer: 0
          },
          {
            id: 3,
            question: "No sooner ___ I arrived than it started to rain.",
            options: ["have", "had", "did", "was"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 9,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "She speaks ___ French.",
            options: ["a little", "a few", "little", "few"],
            answer: 0
          },
          {
            id: 2,
            question: "___ you do me a favor?",
            options: ["Should", "Would", "Could", "Might"],
            answer: 2
          },
          {
            id: 3,
            question: "He accused me ___ lying.",
            options: ["of", "for", "with", "about"],
            answer: 0
          }
        ]
      }
    ]
  },
  {
    unit: 10,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "I can't help ___ about it.",
            options: ["think", "thinking", "to think", "thought"],
            answer: 1
          },
          {
            id: 2,
            question: "The more you practice, ___ you get.",
            options: ["better", "the better", "good", "the good"],
            answer: 1
          },
          {
            id: 3,
            question: "Had I known, I ___ you.",
            options: ["would help", "would have helped", "helped", "had helped"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 11,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "He insisted ___ coming with us.",
            options: ["on", "in", "at", "for"],
            answer: 0
          },
          {
            id: 2,
            question: "It's no use ___ about it.",
            options: ["cry", "crying", "to cry", "cried"],
            answer: 1
          },
          {
            id: 3,
            question: "I wish I ___ harder when I was younger.",
            options: ["studied", "had studied", "would study", "study"],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    unit: 12,
    tests: [
      {
        id: 1,
        title: "اختبار 1",
        questions: [
          {
            id: 1,
            question: "He prevented me ___ entering the room.",
            options: ["from", "to", "against", "of"],
            answer: 0
          },
          {
            id: 2,
            question: "I object to ___ treated like this.",
            options: ["be", "being", "been", "is"],
            answer: 1
          },
          {
            id: 3,
            question: "___ I known, I would have told you.",
            options: ["Have", "Had", "Did", "Would"],
            answer: 1
          }
        ]
      }
    ]
  }
];

// متغيرات عامة
let currentUnit = 1;
let currentTest = 1;
let currentQuestion = 0;
let userAnswers = [];
let timerInterval;
let startTime;

// عناصر الصفحة الرئيسية
const unitsContainer = document.getElementById('unitsContainer');

// عناصر صفحة الاختبار
const questionsContainer = document.getElementById('questionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const timerElement = document.getElementById('timer');

// عناصر صفحة النتائج
const scoreCircle = document.getElementById('scoreCircle');
const scoreValue = document.getElementById('scoreValue');
const totalQuestions = document.getElementById('totalQuestions');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const homeBtn = document.getElementById('homeBtn');

// عرض الوحدات والاختبارات
function displayUnits() {
  if (!unitsContainer) return;
  
  unitsContainer.innerHTML = '';
  
  testsData.forEach(unit => {
    const unitCard = document.createElement('div');
    unitCard.className = 'unit-card';
    
    const unitHeader = document.createElement('div');
    unitHeader.className = 'unit-header';
    unitHeader.textContent = `الوحدة ${unit.unit}`;
    
    const testsContainer = document.createElement('div');
    testsContainer.className = 'tests-container';
    
    unit.tests.forEach(test => {
      const testBox = document.createElement('div');
      testBox.className = 'test-box';
      testBox.textContent = test.title;
      testBox.onclick = () => startTest(unit.unit, test.id);
      testsContainer.appendChild(testBox);
    });
    
    unitCard.appendChild(unitHeader);
    unitCard.appendChild(testsContainer);
    unitsContainer.appendChild(unitCard);
  });
}

// بدء الاختبار
function startTest(unitId, testId) {
  currentUnit = unitId;
  currentTest = testId;
  currentQuestion = 0;
  userAnswers = [];
  startTime = new Date();
  
  // إخفاء الصفحة الرئيسية وإظهار صفحة الاختبار
  if (document.getElementById('homePage')) {
    document.getElementById('homePage').style.display = 'none';
  }
  
  if (document.querySelector('.test-page')) {
    document.querySelector('.test-page').style.display = 'block';
  }
  
  // بدء المؤقت
  startTimer(10 * 60); // 10 دقائق
  
  // تحميل الأسئلة وعرضها
  loadTestQuestions();
}

// بدء المؤقت
function startTimer(durationInSeconds) {
  if (!timerElement) return;
  
  let timeLeft = durationInSeconds;
  
  updateTimerDisplay(timeLeft);
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitTest();
    }
  }, 1000);
}

// تحديث عرض المؤقت
function updateTimerDisplay(seconds) {
  if (!timerElement) return;
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerElement.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// تحميل أسئلة الاختبار
function loadTestQuestions() {
  if (!questionsContainer) return;
  
  const unit = testsData.find(u => u.unit === currentUnit);
  const test = unit.tests.find(t => t.id === currentTest);
  
  displayQuestion(test.questions[currentQuestion], currentQuestion, test.questions.length);
  
  // تحديث حالة الأزرار
  updateNavigationButtons(test.questions.length);
}

// عرض السؤال
function displayQuestion(question, index, total) {
  if (!questionsContainer) return;
  
  questionsContainer.innerHTML = '';
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question-container';
  
  const questionText = document.createElement('div');
  questionText.className = 'question-text';
  questionText.textContent = `${index + 1}. ${question.question}`;
  
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  
  question.options.forEach((option, i) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    if (userAnswers[index] === i) {
      optionElement.classList.add('selected');
    }
    optionElement.textContent = option;
    optionElement.onclick = () => selectOption(i, optionElement);
    optionsContainer.appendChild(optionElement);
  });
  
  questionElement.appendChild(questionText);
  questionElement.appendChild(optionsContainer);
  questionsContainer.appendChild(questionElement);
}

// اختيار الإجابة
function selectOption(optionIndex, element) {
  // إزالة التحديد من جميع الخيارات
  const options = element.parentElement.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));
  
  // تحديد الخيار الحالي
  element.classList.add('selected');
  userAnswers[currentQuestion] = optionIndex;
  
  // تمكين زر التالي
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

// تحديث أزرار التنقل
function updateNavigationButtons(totalQuestions) {
  if (!prevBtn || !nextBtn || !submitBtn) return;
  
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = currentQuestion === totalQuestions - 1;
  submitBtn.style.display = currentQuestion === totalQuestions - 1 ? 'block' : 'none';
}

// السؤال التالي
if (nextBtn) {
  nextBtn.onclick = () => {
    const unit = testsData.find(u => u.unit === currentUnit);
    const test = unit.tests.find(t => t.id === currentTest);
    const total = test.questions.length;
    
    if (currentQuestion < total - 1) {
      currentQuestion++;
      loadTestQuestions();
    }
  };
}

// السؤال السابق
if (prevBtn) {
  prevBtn.onclick = () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadTestQuestions();
    }
  };
}

// تصحيح الإجابات
if (submitBtn) {
  submitBtn.onclick = () => {
    clearInterval(timerInterval);
    submitTest();
  };
}

// إرسال الاختبار وعرض النتائج
function submitTest() {
  const unit = testsData.find(u => u.unit === currentUnit);
  const test = unit.tests.find(t => t.id === currentTest);
  const questions = test.questions;
  
  let correctCount = 0;
  
  // حساب الإجابات الصحيحة
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].answer) {
      correctCount++;
    }
  });
  
  const score = Math.round((correctCount / questions.length) * 100);
  const endTime = new Date();
  const timeTaken = Math.floor((endTime - startTime) / 1000); // بالثواني
  
  // تخزين النتائج في localStorage لعرضها في صفحة النتائج
  localStorage.setItem('testResults', JSON.stringify({
    unit: currentUnit,
    test: currentTest,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    wrongAnswers: questions.length - correctCount,
    score: score,
    timeTaken: timeTaken
  }));
  
  // الانتقال إلى صفحة النتائج
  window.location.href = 'results.html';
}

// عرض النتائج
function displayResults() {
  const results = JSON.parse(localStorage.getItem('testResults'));
  
  if (!results) {
    window.location.href = 'index.html';
    return;
  }
  
  // تحديث عناصر النتائج
  if (totalQuestions) totalQuestions.textContent = results.totalQuestions;
  if (correctAnswers) correctAnswers.textContent = results.correctAnswers;
  if (wrongAnswers) wrongAnswers.textContent = results.wrongAnswers;
  if (finalScore) finalScore.textContent = `${results.score}%`;
  if (scoreValue) scoreValue.textContent = `${results.score}%`;
  
  // تحديث دائرة النتيجة
  if (scoreCircle) {
    scoreCircle.style.setProperty('--p', `${results.score}%`);
  }
}

// إعادة الاختبار
if (restartBtn) {
  restartBtn.onclick = () => {
    // إعادة تحميل نفس الاختبار
    startTest(results.unit, results.test);
  };
}

// العودة للصفحة الرئيسية
if (homeBtn) {
  homeBtn.onclick = () => {
    window.location.href = 'index.html';
  };
}

// تهيئة الصفحات
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('homePage')) {
    displayUnits();
  } else if (document.querySelector('.test-page')) {
    // تحميل معلمات وحدة الاختبار ورقم الاختبار من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const unitParam = urlParams.get('unit');
    const testParam = urlParams.get('test');
    
    if (unitParam && testParam) {
      startTest(parseInt(unitParam), parseInt(testParam));
    } else {
      window.location.href = 'index.html';
    }
  } else if (document.querySelector('.results-container')) {
    displayResults();
  }
});