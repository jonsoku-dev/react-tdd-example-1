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

