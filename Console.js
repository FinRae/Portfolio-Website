const consoleInput = document.querySelector(".console_input");
const historyContainer = document.querySelector(".console_history");

function addResult(inputAsString, output) {
	const outputAsString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();
	const inputLogElement = document.createElement("div");
	const outputLogElement = document.createElement("div");
	
	inputLogElement.classList.add("console_input_log");
	outputLogElement.classList.add("console_output_log");
	
	inputLogElement.textContent = `> ${inputAsString}`;
	outputLogElement.textContent = outputAsString;
	
	historyContainer.append(inputLogElement, outputLogElement)
}
function addResultOutput(output) {
	const outputAsString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();
	const outputLogElement = document.createElement("div");
	
	outputLogElement.classList.add("console_output_log");
	
	outputLogElement.textContent = outputAsString;
	
	historyContainer.append(outputLogElement)
}

consoleInput.addEventListener("keyup", e => {
	const code = consoleInput.value.trim();
	const codeLower = code.toLowerCase();
	if (e.key === "Enter") {
		
		switch(codeLower){
			case "aboutme":
				addResult(code,"Hey there, my name is Finlay Rae and I'm 17 years old. Im studying Mathematics, Computer Science and Physics at A level but particularly enjoy Computer Science. I code as a passion but also love to play video games, namely valorant. When I choose to code something its usually in python or C# however I know C#, Python, Lua, HTML, CSS and JS. My main interest in computer science is the field of Cyber Security, which i plan to study at university in 2023. If you wish to contact me, please do so in the contact me section of the page.")
				break;
			default:
				try {
					addResult(code, eval(code));
				} catch (err) {
					addResult(code,err);
				}
				break;
		}
		
		
		
		
		
		consoleInput.value = "";
		historyContainer.scrollTop = historyContainer.scrollHeight;
	}
	
});