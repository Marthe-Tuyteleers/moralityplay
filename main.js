import './style.css';

let ws = new WebSocket('ws://10.150.197.76:1880/websocket');
let page;

ws.onopen = function(){
  console.log('connected')
}

ws.onmessage = function(event) {
  console.log('Message from server', event.data);

  if(event.data === "1"){
    if (page.questions && page.questions.length > 0) {
      nextPage(page.questions[0].nextPage);
    } else {
      if (page.duration === null) {
        nextPage(page.nextPage);
      }
    }
  }

  if(event.data === "2"){
    if (page.questions && page.questions.length > 0) {
      nextPage(page.questions[1].nextPage);
    } else {
      if (page.duration === null) {
        nextPage(page.nextPage);
      }
    }
  }

}


const structure = [
  {
    id: 0,
    text: "Click any button to start",
    nextPage: 1,
    duration: null,
    audio: null
  },
  {
    id: 1,
    text: "As the protagonist, you'll play the role of Marie, a young woman eagerly anticipating her first blind date with Finn. Your choices will shape Marie’s response to the unfolding situation.",
    nextPage: 2,
    duration: 12,
    audio: "intro.mp3"
  },
  {
    id: 2,
    text: "Remember, there are no right or wrong choices, only consequences.",
    nextPage: 3,
    duration: 5,
    audio: "remember.mp3"
  },
  {
    id: 3,
    text: "Marie nervously sits at a table in a cozy café, awaiting the arrival of Finn, her blind date. As he approaches, Marie’s face lights up. He’s actually good looking!",
    nextPage: 4,
    duration: 11,
    audio: "cozy.mp3"
  },
  {
    id: 4,
    text: "After awhile Marie’s initial excitement fades as she notices his suggestive gaze and inappropriate comments throughout the date.",
    audio: "comments.mp3",
    questions: [
      {
        text: "Address Finn's behavior directly and set clear boundaries.",
        nextPage: 5
      },
      {
        text: "Politely ignore Finn's comments and try to steer the conversation elsewhere.",
        nextPage: 7
      }
    ]
  },
  {
    id: 5,
    text: "Feeling uncomfortable but determined to assert herself, Marie confronts Finn about his inappropriate comments. She firmly expresses her discomfort and emphasizes the importance of mutual respect. Finn initially laughs it off, but Marie stands her ground, insisting on respect.",
    nextPage: 6,
    duration: 20,
    audio: "confront.mp3"
  },
  {
    id: 6,
    text: "Marie no longer allows the disrespect so she calmly leaves the date and blocks Finn’s number.",
    nextPage: 14,
    duration: 7,
    audio: "calmleave.mp3"
  },
  {
    id: 7,
    text: "Preferring to avoid confrontation, Marie chooses to brush off Finn’s comments and shifts the conversation to safer topics. However, Finn's behavior persists, making Marie increasingly uncomfortable and uneasy.",
    audio: "topic.mp3",
    questions: [
      {
        text: "Feeling uncomfortable, Marie excuses herself to the bathroom",
        nextPage: 8
      },
      {
        text: "Feeling uncomfortable, Marie decides to leave the date.",
        nextPage: 10
      }
    ]
  },
  {
    id: 8,
    text: "Marie arrives at the bathroom and calls her friend. She tells Marie she’s coming to pick her up from the date.",
    nextPage: 9,
    duration: 6,
    audio: "callfriend.mp3"
  },
  {
    id: 9,
    text: "Marie feels relieved and as soon as she get in the car with her friend she blocks Finn’s number.",
    nextPage: 14,
    duration: 6,
    audio: "incar.mp3"
  },
  {
    id: 10,
    text: "Finn follows Marie outside and corners her in an alley behind the cafe.",
    audio: "corners.mp3",
    questions: [
      {
        text: "Marie calls out for help",
        nextPage: 11
      },
      {
        text: "Due to fear, Marie remains silent.",
        nextPage: 12
      }
    ]
  },
  {
    id: 11,
    text: "Luckily someone near hears her cries for help and comes to the rescue.",
    nextPage: 13,
    duration: 4,
    audio: "help1.mp3"
  },
  {
    id: 12,
    text: "Luckily someone near sees the predicament and comes to the rescue.",
    nextPage: 13,
    duration: 4,
    audio: "help2.mp3"
  },
  {
    id: 13,
    text: "As soon as Marie feels safe at home she calls the police and blocks Finn’s number.",
    nextPage: 14,
    duration: 8,
    audio: "home.mp3"
  },
  {
    id: 14,
    text: "Thank you for playing. Feel free to try different options for other endings. If you've experienced or witnessed transgressive behavior, please call 1712 for support and assistance.",
    nextPage: 0,
    duration: 12,
    audio: "end.mp3"
  },
]

const textElement = document.getElementById('text');
const question1Element = document.getElementById('question1');
const question2Element = document.getElementById('question2');
const question1Wrapper = document.getElementById('question1Wrapper');
const question2Wrapper = document.getElementById('question2Wrapper');

let audio;

function nextPage(id) {
  page = structure.find(p => p.id === id);

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  console.log(page)

  if (page) {
    textElement.textContent = page.text;

    if (page.questions && page.questions.length > 0) {
      question1Element.textContent = page.questions[0].text;
      question2Element.textContent = page.questions[1].text;
      question1Wrapper.style.display = 'block';
      question2Wrapper.style.display = 'block';
    } else {
      question1Element.textContent = '';
      question2Element.textContent = '';
      question1Wrapper.style.display = 'none';
      question2Wrapper.style.display = 'none';
    }

    if (page.audio) {
      audio = new Audio(`/${page.audio}`);
      audio.play();
    }

    if (page.duration && (page.nextPage || page.nextPage === 0)) {
      setTimeout(() => {
        nextPage(page.nextPage);
      }, page.duration * 1000);
    }
  }
}

document.querySelector('body').onclick = function() {
  console.log('hallo')
  nextPage(0);
}