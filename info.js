export function createInfo(titleOne, titleTwo, paragraphOne, paragraphTwo, buttonOne, buttonTwo, buttonThree, buttonFour) {
  const infoDiv = document.createElement('div');
  infoDiv.className = 'right'
  infoDiv.innerHTML = `
      <h1>${titleOne}</h1>
      <p>${paragraphOne}</p>
      <h1>${titleTwo}</h1>
      <p>${paragraphTwo}</p>
      <div>
      <button>${buttonOne}</button>
      <button>${buttonTwo}</button>
      <button>${buttonThree}</button>
      <button>${buttonFour}</button>
      </div>
  `;
  return infoDiv;
}
