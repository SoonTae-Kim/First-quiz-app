const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
    //console.log(username.value);
});

//https://www.youtube.com/watch?v=Bsq3gzypMDk
//form에서 event가 제출되는 submit 이벤트가 발생하면 action 속성의 url로
//redirect되지만, preventDefault()를 통해 이 기능을 차단할 수 있다.
saveHighScore = (e) => {
    e.preventDefault(); // 함수의 기본 동작(default)을 중단시킨다.

    const score = {
            score : mostRecentScore,
            name : username.value,
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    //console.log(localStorage.getItem('highScores'));
    window.location.assign('index.html');
};
