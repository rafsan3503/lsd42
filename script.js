// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const customArt = `[[gb;teal;black]    __   _____ ____   __ __ ___   ____  _____ ____ 
   / /  / ___// __ \\/ //  /|__ \\ / __ \\/ ___// __ \\
  / /   \\__ \\/ / / / // / ___/ // / / / __ \\/ /_/ /
 / /______/ / /_/ /__  __/  __// /_/ / /_/ /\\__, / 
/_____/____/_____/  /_/ /____/ \\____/\\____//____/  
                
Welcome to LSD42069, a revolutionary blockchain cryptography token revolutionizing the realm of digital assets and scientific exploration. Envision the colossal force of the entire stock market, now condensed into a sleek, high-powered crypto token on Ethereum.
0x3e76990ef2b7b3c96a0852877364bdaba9ad3e70\n\n欢迎来到LSD42069，这是一种革命性的区块链加密货币代币，\n正在彻底改变数字资产和科学探索的领域。想象一下，整个股票市场的巨大力量现在被压缩成了时尚、\n高效能的加密代币。这一突破得益于顶尖数学家和科学研究人员的集体智慧。\n通过与速度和效率俱佳的Ethereum区块链的整合，LSD42069站在了金融创新的前沿。\n这种整合不仅标志着金融历史上的一个转折点，而且还充分释放\n了区块链技术的潜力，利用Ethereum的快速交易能力。
\nType 'help' to learn more.]`;

$(document).ready(function () {
  $("#terminal").terminal(
    function (command, term) {
      // Handle commands here
      if (command === "hello") {
        term.echo(
          "\nHello, traveller! Welcome to LSD42069. 欢迎来到LSD42069.\n"
        );
      } else if (command === "help") {
        term.echo("\nAvailable commands: hello, help, address, manifesto\n");
      } else if (command === "address") {
        term.echo(
          "\nCoin Address: 0x3e76990ef2b7b3c96a0852877364bdaba9ad3e70\n"
        );
      } else if (command === "manifesto") {
        term.echo(
          `\nYou've stepped into a world where traditional financial systems seem outdated, where buying a house means taking on a mortgage in the hundreds of thousands, and where the idea of social security feels like a distant promise despite deductions from every paycheck. This is a reality shaped by seismic shifts, from the aftermath of 9/11 to the crippling 2008 recession, an unprecedented global pandemic, runaway inflation, and escalating social tensions. You were born into a different era of America, one forever altered by economic and social factors largely beyond your control. It's a new world that calls for innovative solutions.\n\nLSD42069 is the fresh start we've all been waiting for. It's the canvas upon which new financial possibilities are painted, a tapestry woven with the threads of human aspiration. LSD42069 is to liquid staking derivatives what the S&P 500 was to traditional investments, but with an extra twist, giving it that unique edge. It's the stock market for the forward-thinking, a platform that allows you to stake your assets and reap the rewards, all while participating in the exciting world of decentralized finance.\n\nLSD42069 plants the seeds for a forest of financial opportunities. It's the nourishment for the dreams and aspirations of countless individuals. LSD42069 isn't just for you; it's for your children and generations to come. It symbolizes a shift towards a more inclusive and decentralized financial landscape, where you have greater control over your assets and investments. Embrace LSD42069, and embark on a journey towards a more dynamic and innovative financial future.\n\n`
        );
      } else {
        term.error(
          '\nCommand not found. Type "help" for a list of commands.\n'
        );
      }
    },
    {
      prompt: "> ",
      greetings: customArt,
      name: "terminal",
      height: 400,
      scrollOnEcho: true,
      enableInput: true,
    }
  );
});

const overlay = document.getElementById("overlay");
const enterButton = document.getElementById("enterButton");
const mainContainer = document.getElementById("mainContainer");

// Function to hide the overlay and show the site content
function hideOverlay() {
  overlay.style.display = "none";
  mainContainer.style.visibility = "visible";
  mainContainer.style.opacity = "1";
}

// Add a click event listener to the "Enter" button
enterButton.addEventListener("click", hideOverlay);

// JavaScript code to handle audio playback on page click
const audioElement = document.getElementById("videoElement");

// Function to play the audio
function playAudio() {
  videoElement.play();
  // Remove the click event listener after the first click
  document.removeEventListener("click", playAudio);
  console.log("playing!");
}

// Add a click event listener to the entire document
document.addEventListener("click", playAudio);
