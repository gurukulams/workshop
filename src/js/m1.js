import QuestionLoader from '../../site/themes/design-system/src/js/components/QuestionLoader'
const hashValue = window.location.hash.slice(1); 
console.log(hashValue);
const element = document.querySelector("#practice-container");

// Set the attribute
element.dataset.practiceCategory = hashValue;
new QuestionLoader();

const message = "Hello from Module 1";
console.log(message);
export default message;