import PogObject from "PogData";
let value = ""
const pogObject = new PogObject("Throwerfinder", {
  value
});
pogObject.autosave(1);

register("command", add).setName("addthrower");

function add(...args) {
  if(value.includes(args[0])) {
    ChatLib.chat('I already know of this person');
  } else {
    value = value.concat(args[0],",");
    ChatLib.chat("succesfully added the person");
  }
}
register("command", check).setName("checkthrower");

function check(...args) {
    if(value.includes(args[0])) {
        ChatLib.chat("I recognize this person");
    } else {
        ChatLib.chat("I dont recognize this person");
    }
}
register("command", remove).setName("removethrower");

function remove(...args) {
  let arg = args[0]
  value = value.replace(arg.concat(","), "");
}
register("command", all).setName("throwers");

function all() {
    ChatLib.chat(value);
}
register("chat", (playername, event) => {
  if(value.includes(playername)) {
    ChatLib.chat('I have detected ' + playername + ' as a thrower!')
  } 
}).setCriteria("Dungeon Finder > ${playername} joined the dungeon group!").setContains()

register("chat", (playername, event) => {
  let clickableMessage = new Message(new TextComponent("Click this to add ".concat(playername, " as a thrower")).setClick("run_command", "/addthrower ".concat(playername)).setHoverValue("/addthrower ".concat(playername)))
  ChatLib.chat(clickableMessage)
}).setCriteria("PUZZLE FAIL! ${playername}").setContains()

register("chat", (playername, event) => {
  let clickableMessage = new Message(new TextComponent("Click this to add ".concat(playername, " as a thrower")).setClick("run_command", "/addthrower ".concat(playername)).setHoverValue("/addthrower ".concat(playername)))
  ChatLib.chat(clickableMessage)
}).setCriteria("☠ ${playername}").setContains()