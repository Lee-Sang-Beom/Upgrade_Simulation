Project - Upgrade Simulation
======================

## 1. 프로젝트 계획 이유
[**Upgrade_Simulation**](https://lee-sang-beom.github.io/Upgrade_Simulation//) : 많은 사람들이 즐기는 게임이라는 익숙한 주제로, 강의 참고 없이 스스로 HTML과 CSS를 계획한 대로 설계해보는 연습을 해보고자 하였습니다.

### - 제공기능
	1. 강화 시뮬레이션 기능
      - 강화 하기
      - 초기화 하기
      - 강화 확률표 : 강화 수치 별 시도횟수 기록

	2. TypeIt lib : TypeIt animation 제공

### - 한계 및 발전
	* UX적인 고민
     - 사용자가 버튼을 눌렀을 때, 어떤 이벤트가 완료되었는지 확실히 전달되지 않는 점이 아쉬운 점으로 다가옵니다. 이 부분에 대해 어떻게 처리할 지 고민이 필요합니다.

     - 단순한 alert()로 표시하면 전달 자체는 확실하겠지만, 사용성이 떨어지리라 생각하기에 이벤트가 적용된 text부분을 따로 부각하여 사용자가 변화감을 느낄 수 있도록 하여, 보완할 수 있다고 생각합니다.

****

## 2. Install
### 2.1. TypeIt
- 타이핑 애니메이션 구현을 위한, TypeIt 라이브러리를 설치합니다.
      ```
      npm install typeit
      ```

### 2.2. ESLint
- ESLint 설치
    ``` 
    npm install eslint --save-dev
    ``` 

- config 파일 설정 및 설치
    ``` 
    npx eslint --init
    ``` 
    - How would you like to configure ESLint? : Use a popular style guide
    - Which style guide do you want to follow? : Standard
    - What format do you want your config file to be in? : JavaScript


    ```
    module.exports = {
        "extends": "standard",
        "rules": {
            "indent": [
                "error",
                4
            ],
            "semi": [
                "error",
                "always"
            ],
            "no-trailing-spaces": 0,
            "keyword-spacing": 0,
            "no-unused-vars": 1,
            "no-multiple-empty-lines": 0,
            "space-before-function-paren": 0,
            "eol-last": 0
        }
    };
    ```
- 실행
    ```
    npx eslint <yourefile.js>
    option : --fix (자동수정)
    ```