const submitBtn = document.querySelector('#submit-btn');
const textInput = document.querySelector('#text');
const gradeInput = document.querySelector('#grade');
const imageInput = document.querySelector('#image');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', () => {
    const text = textInput.value;
    const grade = gradeInput.value;
    const image = imageInput.value;

    if (text === 'panda' && grade === '3' && (image.startsWith('http://') || image.startsWith('https://'))) {
        result.innerHTML = `
      <h1>Text: ${text}</h1>
      <h1>Grade: ${grade}</h1>
      <img src="${image}" alt="Panda Image">
    `;
    } else {
        result.innerHTML = '<h1>Invalid input. Please try again.</h1>';
    }
});
