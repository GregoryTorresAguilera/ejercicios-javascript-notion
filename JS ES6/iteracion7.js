//7.1

const exams = [
    { name: "Yuyu Cabeza Crack", score: 5 },
    { name: "Maria Aranda Jimenez", score: 1 },
    { name: "Cristóbal Martínez Lorenzo", score: 6 },
    { name: "Mercedez Regrera Brito", score: 7 },
    { name: "Pamela Anderson", score: 3 },
    { name: "Enrique Perez Lijó", score: 6 },
    { name: "Pedro Benitez Pacheco", score: 8 },
    { name: "Ayumi Hamasaki", score: 4 },
    { name: "Robert Kiyosaki", score: 2 },
    { name: "Keanu Reeves", score: 10 },
  ];
  
  const allScores = exams.reduce(
    (accumulator, exam) => accumulator + exam.score,
    0
  );
  
  console.log(allScores);

  //7.2

totalApproved = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
      return accumulator + exam.score;
    } else {
      return accumulator;
    }
  }, 0);
  
  console.log(totalApproved);
  //7.3

const totalScore = exams.reduce(
    (accumulator, exam) => accumulator + exam.score,
    0
  );
  
  const averageScore = totalScore / exams.length;
  
  console.log(averageScore);
  