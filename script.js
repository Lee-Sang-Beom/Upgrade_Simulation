// 현 강화상태를 저장하는 변수
const currentUpgradeLevel = document.getElementById('current_figure');

// 현 강화상태에서 성공 | 실패확률을 표현하는 변수
const sucessRateFigure = document.getElementById('sucess_rate_figure');
const failRateFigure = document.getElementById('fail_rate_figure');

// 최대강화레벨
const MAX_LEVEL = 20;

// '강화하기' 버튼
const tryBtn = document.getElementById('try_btn');

// '리셋하기' 버튼
const resetBtn = document.getElementById('reset_btn');

// 단계별 성공확률
const suceessRateArray = [100, 95, 90, 85, 80, 75, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 3, 2, 1];

// 시도횟수 저장 배열
const tryCountArray = Array.from(new Array(20), (v, k) => {
    return 0;
});

// 현재 강화단계
let currentLevel = 0;

// table 내, 강화시도 횟수 기록변수
const tryZeroToOne = document.getElementById('try_zero_to_one');
const tryOneToTwo = document.getElementById('try_one_to_two');
const tryTwoToThree = document.getElementById('try_two_to_three');
const tryThreeToFour = document.getElementById('try_three_to_four');
const tryFourToFive = document.getElementById('try_four_to_five');
const tryFiveToSix = document.getElementById('try_five_to_six');
const trySixToSeven = document.getElementById('try_six_to_seven');
const trySevenToEight = document.getElementById('try_seven_to_eight');
const tryEightToNine = document.getElementById('try_eight_to_nine');
const tryNineToTen = document.getElementById('try_nine_to_ten');
const tryTenToEleven = document.getElementById('try_ten_to_eleven');
const tryElevenToTwelve = document.getElementById('try_eleven_to_twelve');
const tryTwelveToThirteen = document.getElementById('try_twelve_to_thirteen');
const tryThirteenToFourteen = document.getElementById('try_thirteen_to_fourteen');
const tryFourteenToFifteen = document.getElementById('try_fourteen_to_fifteen');
const tryFifteenToSixteen = document.getElementById('try_fifteen_to_sixteen');
const trySixteenToSeventeen = document.getElementById('try_sixteen_to_seventeen');
const trySeventeenToEighteen = document.getElementById('try_seventeen_to_eighteen');
const tryEighteenToNineteen = document.getElementById('try_eighteen_to_nineteen');
const tryNineteenToTwenty = document.getElementById('try_nineteen_to_twenty');

function overallSwitchTable(currentLevel) {
    if(currentLevel < 20) {
        switch(currentLevel) {
        case 0:
            tryZeroToOne.innerText = tryCountArray[currentLevel];
            return;
        case 1:
            tryOneToTwo.innerText = tryCountArray[currentLevel];
            return;
        case 2:
            tryTwoToThree.innerText = tryCountArray[currentLevel];
            return;
        case 3:
            tryThreeToFour.innerText = tryCountArray[currentLevel];
            return;
        case 4:
            tryFourToFive.innerText = tryCountArray[currentLevel];
            return;
        case 5:
            tryFiveToSix.innerText = tryCountArray[currentLevel];
            return;
        case 6:
            trySixToSeven.innerText = tryCountArray[currentLevel];
            return;
        case 7:
            trySevenToEight.innerText = tryCountArray[currentLevel];
            return;
        case 8:
            tryEightToNine.innerText = tryCountArray[currentLevel];
            return;
        case 9:
            tryNineToTen.innerText = tryCountArray[currentLevel];
            return;
        case 10:
            tryTenToEleven.innerText = tryCountArray[currentLevel];
            return;
        case 11:
            tryElevenToTwelve.innerText = tryCountArray[currentLevel];
            return;
        case 12:
            tryTwelveToThirteen.innerText = tryCountArray[currentLevel];
            return;
        case 13:
            tryThirteenToFourteen.innerText = tryCountArray[currentLevel];
            return;
        case 14:
            tryFourteenToFifteen.innerText = tryCountArray[currentLevel];
            return;
        case 15:
            tryFifteenToSixteen.innerText = tryCountArray[currentLevel];
            return;
        case 16:
            trySixteenToSeventeen.innerText = tryCountArray[currentLevel];
            return;
        case 17:
            trySeventeenToEighteen.innerText = tryCountArray[currentLevel];
            return;
        case 18:
            tryEighteenToNineteen.innerText = tryCountArray[currentLevel];
            return;
        case 19:
            tryNineteenToTwenty.innerText = tryCountArray[currentLevel];
            return;
            
        default:
            return undefined;
        }
    } else{
        // else
    }
}

function resetTable() {
    tryZeroToOne.innerText = 0; 
    tryOneToTwo.innerText = 0; 
    tryTwoToThree.innerText = 0; 
    tryThreeToFour.innerText = 0; 
    tryFourToFive.innerText = 0; 
    tryFiveToSix.innerText = 0;
    trySixToSeven.innerText = 0;
    trySevenToEight.innerText = 0;
    tryEightToNine.innerText = 0; 
    tryNineToTen.innerText = 0; 
    tryTenToEleven.innerText = 0; 
    tryElevenToTwelve.innerText = 0; 
    tryTwelveToThirteen.innerText = 0; 
    tryThirteenToFourteen.innerText = 0; 
    tryFourteenToFifteen.innerText = 0; 
    tryFifteenToSixteen.innerText = 0; 
    trySixteenToSeventeen.innerText = 0; 
    trySeventeenToEighteen.innerText = 0; 
    tryEighteenToNineteen.innerText = 0; 
    tryNineteenToTwenty.innerText = 0; 
}

function printPercentage(currentLevel) {
    sucessRateFigure.textContent = suceessRateArray[currentLevel];
    failRateFigure.textContent = 100 - suceessRateArray[currentLevel];
}

function tryUpgrade() {
    // 성공 시도하고자 하는 확률상태
    const suceessTryRate = suceessRateArray[currentLevel];

    // 1~100 까지의 숫자 (확률)
    const randomValue = Math.floor(Math.random() * 100) + 1;
    
    if(randomValue >= 1 && randomValue <= suceessTryRate) {
        // 강화 성공조건 : randomValue가 sucess_try_rate 이하의 값을 가지는 경우
        if(parseInt(currentUpgradeLevel.innerText) < MAX_LEVEL) {
            currentUpgradeLevel.innerText = parseInt(currentUpgradeLevel.innerText) + 1;
            // alert("강화 성공");
            // currentLevel -> currentLevel + 1 의 시도도, 시도횟수로 사용
            tryCountArray[currentLevel] += 1;

            // 테이블 시도횟수 갱신
            overallSwitchTable(currentLevel);
            currentLevel++;

            // 증가된 강화상태에 대한 확률 표기 변경
            printPercentage(currentLevel);

            if(currentLevel === MAX_LEVEL) {
                // MAX_LEVEL 달성 시, 사용자가 버튼 클릭을 하지 못하도록 변경 
                alert('최대 강화 레벨을 달성하셨습니다.');
                tryBtn.disabled = true;

                // currentLevel === 20 일때, 확률표기
                sucessRateFigure.textContent = 0;
                failRateFigure.textContent = 0;
            }
        } else{
            // btn을 disabled 처리한 것으로, else문 대신
        }
    } else{
        // 강화 실패조건 : randomValue가 sucess_try_rate 초과의 값을 가지는 경우
        // alert("강화 실패");

        // currentLevel의 배열위치에 시도횟수 증가
        tryCountArray[currentLevel] += 1;
        overallSwitchTable(currentLevel);

        // 초기화되므로, 강화버튼 사용 복구
        tryBtn.disabled = false;
    }
}

function tryReset() {
    currentUpgradeLevel.innerText = 0;
    currentLevel = 0;
    tryCountArray.fill(0);
    resetTable();

    // 초기화된 강화상태에 대한 확률 표기 변경
    printPercentage(currentLevel);
    alert('초기화되었습니다!');
}

/* add eventListener */
tryBtn.addEventListener('click', tryUpgrade);
resetBtn.addEventListener('click', tryReset);

// 최초실행
printPercentage(currentLevel);