// math.js - Pre-K Math with 180 progressively harder lessons
export const mathGames = {};

// Helpers
function randomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function shuffleArray(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

// Pre-K object and shape pools
const countingObjects=['⭐','🐶','🍎','🍌','🍭','🦋','🍇','🍉','🐱','🍓'];
const shapes=['⬛','🔺','🔵','🟢','🟡','🟣','🔶','🔷','🔸','🔹'];

// --- Lesson Types with progressive difficulty ---
function countingLesson(container, lessonNumber){
  const minObjects=1+Math.floor(lessonNumber/5);
  const maxObjects=Math.min(minObjects+3,10);
  const questionsCount=3+Math.floor(lessonNumber/15);

  container.innerHTML=`<h3>Lesson ${lessonNumber}: Counting Objects</h3>`;

  const objSymbol=countingObjects[lessonNumber % countingObjects.length];

  for(let q=1;q<=questionsCount;q++){
    const objectsDiv=document.createElement('div');
    objectsDiv.style.display='flex'; objectsDiv.style.flexWrap='wrap'; objectsDiv.style.marginBottom='15px';
    const countThisQuestion=randomInt(minObjects,maxObjects);
    for(let i=0;i<countThisQuestion;i++){
      const obj=document.createElement('div'); obj.textContent=objSymbol;
      obj.style.fontSize=`${randomInt(25,50)}px`; obj.style.margin='3px';
      objectsDiv.appendChild(obj);
    }
    container.appendChild(objectsDiv);

    const numpad=document.createElement('div'); numpad.style.marginBottom='15px';
    container.appendChild(numpad);
    for(let i=1;i<=10;i++){
      const btn=document.createElement('button'); btn.textContent=i; btn.style.padding='10px'; btn.style.margin='3px';
      btn.addEventListener('click',()=>alert(i===countThisQuestion?'Correct! ✅':'Try again ❌'));
      numpad.appendChild(btn);
    }
  }
}

function numberRecognitionLesson(container, lessonNumber){
  const questionsCount=3+Math.floor(lessonNumber/15);
  container.innerHTML=`<h3>Lesson ${lessonNumber}: Number Recognition</h3>`;

  for(let q=0;q<questionsCount;q++){
    const num=randomInt(1,10);
    const para=document.createElement('p'); para.textContent=`Click the number: ${num}`; container.appendChild(para);

    const numpad=document.createElement('div'); numpad.style.marginBottom='15px';
    container.appendChild(numpad);
    const options=shuffleArray([num,randomInt(1,10),randomInt(1,10)]);
    options.forEach(n=>{
      const btn=document.createElement('button'); btn.textContent=n; btn.style.padding='10px'; btn.style.margin='3px';
      btn.addEventListener('click',()=>alert(n===num?'Correct! ✅':'Try again ❌'));
      numpad.appendChild(btn);
    });
  }
}

function simpleAdditionLesson(container, lessonNumber){
  const questionsCount=3+Math.floor(lessonNumber/15);
  container.innerHTML=`<h3>Lesson ${lessonNumber}: Addition</h3>`;
  const objSymbol=countingObjects[lessonNumber % countingObjects.length];

  for(let q=0;q<questionsCount;q++){
    const a=randomInt(1,5), b=randomInt(1,5);
    const objectsDiv=document.createElement('div'); objectsDiv.style.display='flex'; objectsDiv.style.flexWrap='wrap'; objectsDiv.style.marginBottom='10px';
    for(let i=0;i<a+b;i++){
      const obj=document.createElement('div'); obj.textContent=objSymbol; obj.style.fontSize=`${randomInt(25,50)}px`; obj.style.margin='3px';
      objectsDiv.appendChild(obj);
    }
    container.appendChild(objectsDiv);

    const numpad=document.createElement('div'); numpad.style.marginBottom='15px';
    container.appendChild(numpad);
    const options=shuffleArray([a+b,randomInt(1,10),randomInt(1,10)]);
    options.forEach(n=>{
      const btn=document.createElement('button'); btn.textContent=n; btn.style.padding='10px'; btn.style.margin='3px';
      btn.addEventListener('click',()=>alert(n===a+b?'Correct! ✅':'Try again ❌'));
      numpad.appendChild(btn);
    });
  }
}

function simpleSubtractionLesson(container, lessonNumber){
  const questionsCount=3+Math.floor(lessonNumber/15);
  container.innerHTML=`<h3>Lesson ${lessonNumber}: Subtraction</h3>`;
  const objSymbol=countingObjects[lessonNumber % countingObjects.length];

  for(let q=0;q<questionsCount;q++){
    const a=randomInt(1,5), b=randomInt(0,a);
    const objectsDiv=document.createElement('div'); objectsDiv.style.display='flex'; objectsDiv.style.flexWrap='wrap'; objectsDiv.style.marginBottom='10px';
    for(let i=0;i<a;i++){
      const obj=document.createElement('div'); obj.textContent=objSymbol; obj.style.fontSize=`${randomInt(25,50)}px`; obj.style.margin='3px';
      objectsDiv.appendChild(obj);
    }
    container.appendChild(objectsDiv);

    const numpad=document.createElement('div'); numpad.style.marginBottom='15px';
    container.appendChild(numpad);
    const options=shuffleArray([a-b,randomInt(0,5),randomInt(0,5)]);
    options.forEach(n=>{
      const btn=document.createElement('button'); btn.textContent=n; btn.style.padding='10px'; btn.style.margin='3px';
      btn.addEventListener('click',()=>alert(n===a-b?'Correct! ✅':'Try again ❌'));
      numpad.appendChild(btn);
    });
  }
}

function shapesColorsLesson(container, lessonNumber){
  const questionsCount=2+Math.floor(lessonNumber/20);
  container.innerHTML=`<h3>Lesson ${lessonNumber}: Shapes & Colors</h3>`;
  for(let q=0;q<questionsCount;q++){
    const shape=shapes[lessonNumber % shapes.length];
    const color=['red','blue','green','yellow','purple'][lessonNumber % 5];
    const para=document.createElement('p'); para.innerHTML=`Click the shape/color: <span style="color:${color}">${shape}</span>`; container.appendChild(para);
    const numpad=document.createElement('div'); numpad.style.marginBottom='15px'; container.appendChild(numpad);
    const options=shuffleArray([shape,shapes[randomInt(0,shapes.length-1)],shapes[randomInt(0,shapes.length-1)]]);
    options.forEach(s=>{
      const btn=document.createElement('button'); btn.textContent=s; btn.style.padding='15px'; btn.style.margin='5px';
      btn.addEventListener('click',()=>alert(s===shape?'Correct! ✅':'Try again ❌'));
      numpad.appendChild(btn);
    });
  }
}

function mixedInteractiveLesson(container, lessonNumber){
  const types=[countingLesson,numberRecognitionLesson,simpleAdditionLesson,simpleSubtractionLesson,shapesColorsLesson];
  const count=Math.min(2+Math.floor(lessonNumber/30),5); // more mini-tasks in later lessons
  for(let i=0;i<count;i++){
    types[randomInt(0,types.length-1)](container,lessonNumber);
  }
}

// --- Assign all 180 lessons progressively ---
for(let i=1;i<=180;i++){
  if(i<=30) mathGames[i]=countingLesson;
  else if(i<=60) mathGames[i]=numberRecognitionLesson;
  else if(i<=90) mathGames[i]=simpleAdditionLesson;
  else if(i<=120) mathGames[i]=simpleSubtractionLesson;
  else if(i<=150) mathGames[i]=shapesColorsLesson;
  else mathGames[i]=mixedInteractiveLesson;
}