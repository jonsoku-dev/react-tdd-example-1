### Install
React 17 기준
```
yarn add --dev enzyme jest-enzyme @wojtekmaj/enzyme-adapter-react-17
```

# Init Enzyme

## 1. console로 해당 돔을 보여준다.
console.log(wrapper.debug());

## 2. toBeTruthy : true를 판단
expect(wrapper).toBeTruthy();

## 3. toBeFalsy : false를 판단
expect(wrapper).toBeFalsy();

# Types of Tests
## 1. Unit Tests
- Tests one piece of code (usually one function)

## 2. Integration tests
- How multiple units work together

## 3. Acceptance / End-to-end (E2E) Tests

# 데이터 테스트 속성
* 렌더링을 테스트할 데이터 테스트 특성
    * 구성 요소의 최상위 요소
* 어떠한 구성 요소도 렌더 되지 않음!
* 왜 새로운 특성인가?왜 ID나 클래스가 아닌가?
    * ID와 클래스는 프로덕션 앱에서 사용함
    * 미래에 변경될 수 있음
    * data-test는 오직 테스트에서만 사용됨
    * 원하는 이름을 정할 수 있다.
* 이러한 테스트 속성이 프로덕션에 있길 원하지 않는다. -> 다음 강의에서

# ejcect를 하여 babelrc 에 속성을 추가한다.
test용으로 작성된 attribute인 data-test 속성을 지워준다.
## install 
https://www.npmjs.com/package/babel-plugin-react-remove-properties
```
yarn add -D babel-plugin-react-remove-properties
```

## 흐름
1. yarn eject
2. package.json의 babel부분에 babel-plugin-react-remove-properties 관련 속성 추가
3. yarn build
4. yarn -g add serve (초기 한번)
5. yarn build
빌드 된걸 보면 data-test 속성은 사라져있다.

# DRY pros and cons
* DRY의 의미는 Don't Repeat Yourself의 약자
* 테스트 코드의 목표가 생산 코드의 목표와 같지 않음
* 실패한 테스트를 쉽게 진단할 수 있기를 원함
* 때때로 이것은 반복된 코드를 의미한다.
* DRY 테스트와 쉽게 진단되는 테스트 간의 균형

## 공통함수로 묶는것에 대해서
묶는건 좋은데... 이것으로 하나의 에러가 전체로 번질 수 있기 때문에, 테스트에서 
디버깅하는 것이 어려워진다. 그래서 beforeEach()를 사용하면 좋을것같다.

## beforeEach
각각 하나마다 다시 실행해주는 for문같은 놈

# Enzyme Text method
text메소드는 말그대로 string을 얻어온다. 만약 컴포넌트에서 string이외의 값이면
JSON.stringfy 한듯한 string으로 넘어올 것이다.
그러므로 아래와 같이 숫자를 강제적으로 string으로 변환하여 값을비교해야한다. 
```
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "counter").text();
  expect(count).toBe("0");
});
```