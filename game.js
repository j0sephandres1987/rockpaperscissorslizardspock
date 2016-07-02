$(document).ready(function() {
  function getRandomPcOption(userOptionClick) {
    var counter = 0, loop = 0;
    var win = false, draw = false;
    var options = ["rock", "paper", "scissors", "lizard", "spock"];
    var icons = [
      '<i class="pc-icon fa fa-hand-rock-o" aria-hidden="true">',
      '<i class="pc-icon fa fa-hand-paper-o" aria-hidden="true">',
      '<i class="pc-icon fa fa-hand-scissors-o" aria-hidden="true">',
      '<i class="pc-icon fa fa-hand-lizard-o" aria-hidden="true">',
      '<i class="pc-icon fa fa-hand-spock-o" aria-hidden="true">'
    ];
    var random = Math.floor(Math.random() * (options.length + 1));
    var iconLoop = setInterval(function(){
      $(".icon-option-container").html(icons[counter]);
      $(".pc-name").html(options[counter]);
      counter++;
      loop++;
      if(counter >= options.length) {
        counter = 0;
      }
      if(loop == 7) {
        clearInterval(iconLoop);
        var pcOption = options[random];
        $(".icon-option-container").html(icons[random]);
        $(".pc-name").html(pcOption);
        var userOption = $(userOptionClick).data("option");
        if(userOption == pcOption) {
          alert("Draw  ('-')");
        }else {
          switch(userOption) {
            case "rock":
              if(pcOption == "paper" || pcOption == "spock") {
                win = false;
              }
              else if(pcOption == "scissors" || pcOption == "lizard") {
                win = true;
              }
              break;
            case "paper":
              if(pcOption == "scissors" || pcOption == "lizard") {
                win = false;
              }
              else if(pcOption == "rock" || pcOption == "spock") {
                win = true;
              }
              break;
            case "scissors":
              if(pcOption == "rock" || pcOption == "spock") {
                win = false;
              }
              else if(pcOption == "paper" || pcOption == "lizard") {
                win = true;
              }
              break;
            case "lizard":
              if(pcOption == "scissors" || pcOption == "rock") {
                win = false;
              }
              else if(pcOption == "spock" || pcOption == "paper") {
                win = true;
              }
              break;
            case "spock":
              if(pcOption == "lizard" || pcOption == "paper") {
                win = false;
              }
              else if(pcOption == "rock" || pcOption == "scissors") {
                win = true;
              }
              break;
            default:
              alert("Bummer...no option");
          }
          if(win) {
            alert("You win :)");
          }else {
            alert("You lost :(");
          }
        }
      }
    }, 70);
  }

  $(".icon-option").click(function() {
    $(".icon-option").removeClass("icon-option-selected");
    $(this).addClass("icon-option-selected");
    getRandomPcOption(this);
  });
});
