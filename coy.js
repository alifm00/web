(function() {
  const myQuestions = [
    {
      question: "Jurusan yang ada di Fakultas Ilmu Komputer Universitas Sriwijaya, kecuali ....",
      answers: {a: "Teknik Informatika",b: "Sistem Komputasi",c: "Sistem Komputer",d: "Sistem Informasi"},
      correctAnswer: "b"
    },
    {
      question: "Warna almamater Universitas Sriwijaya adalah ....",
      answers: {a: "Merah",b: "Hijau gelap",c: "Kuning",d: "Hitam"},
      correctAnswer: "c"
    },
    {
      question: "Jumlah jurusan di Fakultas Ilmu Komputer Universitas Sriwijaya",
      answers: {a: "4",b: "5",c: "7",d: "6"},
      correctAnswer: "c"
    },
    {
      question: "Program studi diploma komputer di Fakultas Ilmu Komputer Universitas Sriwijaya adalah, kecuali ....",
      answers: {a: "Teknik Informatika",b: "Teknik Komputer Jaringan",c: "Manajemen Informatika",d: "Komputerisasi Akuntansi"},
      correctAnswer: "a"
    },
    {
      question: "Kampus diploma komputer terletak di ....",
      answers: {a: "Madang",b: "Ogan",c: "Palembang",d: "Indralaya"},
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  

  function cek() {    
    const answerContainers = quizContainer.querySelectorAll(".answers");    
    const answerContainer = answerContainers[currentSlide];
    const selector = `input[name=question${currentSlide}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(nyawa>0)
    {
      if(userAnswer === myQuestions[currentSlide].correctAnswer)
      {
        ++benar;
        if(currentSlide+1 == 5)
        {
          document.getElementById("nyawa").innerHTML = "Selamat Anda Menang !";
          nextButton.style.display = "none";
          backButton.style.display = "inline-block"
          document.getElementById("back").innerHTML = "Home";
        }
        showSlide(currentSlide + 1);
      }
      else
      {
        nyawa--;
        if(nyawa == 0)
        {
          nextButton.style.display = "none";
          backButton.style.display = "inline-block"
          document.getElementById("back").innerHTML = "Home";
          document.getElementById("nyawa").innerHTML = "Lives Left: " + nyawa + "<br>Game Over<br>" + `${benar} benar dari ${myQuestions.length} pertanyaan`;
          return;
        }
        document.getElementById("nyawa").innerHTML = "Lives Left: " + nyawa;
      }  
    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    nextButton.style.display = "inline-block";
    backButton.style.display = "none"
    
  }

  function showNextSlide() {
    cek();
  }
  function back()
  {
    window.location = "game.html";
  }
  const quizContainer = document.getElementById("quiz");

  buildQuiz();

  const nextButton = document.getElementById("next");
  const backButton = document.getElementById("back");
  const slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  showSlide(0);

  nextButton.addEventListener("click", showNextSlide);
  backButton.addEventListener("click", back);

  var nyawa = 3;
  var benar = 0;

  document.getElementById("nyawa").innerHTML = "Lives Left: " + nyawa;

})();




