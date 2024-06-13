const panels = document.querySelectorAll('.panel');
let sequence = [];
let sequenceToGuess = [];

let canClick = false;

const flash = async (panel) => {
  console.log('Flashing panel');
  panel.classList.add('flashpanel');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Stopped flashing panel');
  panel.classList.remove('flashpanel');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Panel is ready for the next action');
};

const getRandomPanel = () => {
  const randomIndex = Math.floor(Math.random() * panels.length);
  const randomPanel = panels[randomIndex];
  console.log(randomPanel);
  console.log("WHITE")
  randomPanel.classList.add("flashpanel");
//   setTimeout(function(){
//     randomPanel.classList.remove("flashpanel");
//   },1000);
  console.log('Randomly selected panel:', randomPanel);
  return randomPanel;
};

const startFlashing = async () => {
  canClick = false;
  sequence.push(getRandomPanel());
  sequenceToGuess = [...sequence];

  console.log('Starting to flash panels in sequence');
  for (const panel of sequence) {
    await flash(panel);
  }
  console.log('Finished flashing panels');

  canClick = true;
};

const panelClicked = (clickedPanel) => {
  if (!canClick) return;

  const expectedPanel = sequenceToGuess.shift();
  if (expectedPanel === clickedPanel) {
    console.log('Correct panel clicked');
    if (sequenceToGuess.length === 0) {
      console.log('Starting a new round');
      startFlashing();
    }
  } else {
    console.log('Wrong panel clicked, game over');
    alert('Game over');
  }
};

// Add click event listeners to each panel.
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log('Panel clicked:', panel);
    panelClicked(panel);
  });
});

// Start the game when the page loads.
startFlashing();
