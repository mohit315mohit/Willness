import React, { useState } from "react";

const questions = [
  { question: "Do you find studies a burden?", category: "Pressure" },
  { question: "Do you always try to maintain your important role among your friends?", category: "Pressure" },
  { question: "Do you feel behind time?", category: "Pressure" },
  { question: "Do you have to struggle to keep up with the pace of time?", category: "Pressure" },
  { question: "Are you able to differentiate between good and bad?", category: "Pressure" },
  { question: "Are you a responsible child?", category: "Pressure" },
  { question: "Do you smoke or consume alcohol?", category: "Pressure" },
  { question: "Do you find it difficult to take quick decisions?", category: "Pressure" },
  { question: "Do you work under time pressure?", category: "Pressure" },
  { question: "Do your friends pressure you to behave like them often?", category: "Pressure" },
  { question: "Do you think your parents expect/expect more than you need?", category: "Pressure" },
  { question: "Do you complete the work within the stipulated time frame?", category: "Pressure" },
  { question: "Do you feel boring to do the work you were happy to do earlier?", category: "Pressure" },
  { question: "Is there a mistake in spite of doing some work carefully?", category: "Pressure" },
  { question: "Do you often have headaches?", category: "Physical Stress" },
  { question: "Do you often feel mentally or physically tired?", category: "Physical Stress" },
  { question: "After studying for a while, do your hands and feet start twitching?", category: "Physical Stress" },
  { question: "Do you not feel refreshed even after waking up in the morning?", category: "Physical Stress" },
  { question: "Do you find your life boring?", category: "Anxiety" },
  { question: "Do you fear being rejected by your friends?", category: "Anxiety" },
  { question: "Do you not fall asleep for a long time even after going to sleep?", category: "Anxiety" },
  { question: "Do you often remain worried?", category: "Anxiety" },
  { question: "Is your performance declining in any work?", category: "Anxiety" },
  { question: "Do you often feel guilty?", category: "Anxiety" },
  { question: "Have you faced embarrassment many times?", category: "Anxiety" },
  { question: "Do you feel helpless?", category: "Anxiety" },
  { question: "Are you unable to concentrate on your work?", category: "Anxiety" },
  { question: "Do you remain very worried about the future?", category: "Anxiety" },
  { question: "Do you feel lack of concentration?", category: "Anxiety" },
  { question: "Do you often have any confusion in your mind?", category: "Anxiety" },
  { question: "Does your mind often remain unstable?", category: "Anxiety" },
  { question: "Do you often feel irritable?", category: "Frustration" },
  { question: "Do you lose your temper quickly?", category: "Frustration" },
  { question: "Do failures discourage you quickly?", category: "Frustration" },
  { question: "Do you lose control during any kind of argument?", category: "Frustration" },
  { question: "Do you get angry often?", category: "Frustration" },
  { question: "Do you start shouting in anger?", category: "Frustration" },
  { question: "Do you find it intolerable to be interrupted repeatedly by your mother or father?", category: "Frustration" },
  { question: "Do you regret your life so far?", category: "Frustration" },
  { question: "Do you feel that your life is a failure?", category: "Frustration" }
];

const categories = ["Pressure", "Physical Stress", "Anxiety", "Frustration"];

export default function QuizApp() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (isYes) => {
    const currentCategory = questions[index].category;
    setAnswers([...answers, { category: currentCategory, value: isYes ? 1 : 0 }]);
    setIndex(index + 1);
  };

  const getCategoryScore = (category) => {
    const filtered = answers.filter((a) => a.category === category);
    const score = filtered.reduce((sum, a) => sum + a.value, 0);
    return (score / filtered.length) * 100 || 0;
  };

  const getOverallAverage = () => {
    const score = answers.reduce((sum, a) => sum + a.value, 0);
    return (score / answers.length) * 100 || 0;
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-xl bg-white text-center">
      {!started ? (
        <button
          onClick={() => setStarted(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition"
        >
          Start Quiz
        </button>
      ) : index < questions.length ? (
        <div>
          <h2 className="text-xl mb-6 font-semibold">
            Q{index + 1}: {questions[index].question}
          </h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          {categories.map((cat) => (
            <div key={cat} className="mb-4 text-left">
              <p className="font-medium mb-1">{cat}</p>
              <div className="w-full bg-gray-200 rounded-full h-5">
                <div
                  className="bg-blue-500 h-5 rounded-full transition-all"
                  style={{ width: `${getCategoryScore(cat)}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">{getCategoryScore(cat).toFixed(1)}%</p>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-lg font-semibold">Overall Score</p>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-purple-600 h-6 rounded-full transition-all"
              style={{ width: `${getOverallAverage()}%` }}
            ></div>
          </div>
          <p className="text-md mt-1">{getOverallAverage().toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
}
