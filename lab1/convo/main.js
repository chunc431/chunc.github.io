const cursor = document.querySelector('.cursor__inner');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

const dialogue = [
  {
    character1: "Is this real?",
    character2: "No. She's still here."
  },
  {
    character1: "Who? Rachel?",
    character2: "She never left. Remember when we stayed at the cabin by the lake? We were so happy."
  },
  {
    character1: "I remember",
    character2: "She's here. You can't leave."
  },
  {
    character1: "I'm not going to leave. <br> I love you so much.",
    character2: "I'm bones in a box, Teddy."
  },
  {
    character1: "No -",
    character2: "I am. You have to wake up"
  },
  {
    character1: "I won't go, you're here -",
    character2: "I'm not. You have to face that."
  }
];

let currentDialogueIndex = 0;

const dialogueEl = document.querySelector("#dialogue");
const nextButtonEl = document.querySelector("#next");

nextButtonEl.addEventListener("click", function() {
  if (currentDialogueIndex < dialogue.length) {
    const currentDialogue = dialogue[currentDialogueIndex];
  
    dialogueEl.innerHTML = `
      <p class="character1">Teddy: ${currentDialogue.character1}</p>
      <p class="character2">Dolores: ${currentDialogue.character2}</p>
    `;
  
    currentDialogueIndex++; 
  } else {
    nextButtonEl.disabled = true;
  }
});
  
  currentDialogueIndex++; 