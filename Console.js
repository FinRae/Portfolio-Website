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
function redirectDelay(page){
	location.href = page;
}


consoleInput.addEventListener("keyup", e => {
	const code = consoleInput.value.trim();
	const codeLower = code.toLowerCase();
	var doJs = true;
	if (e.key === "Enter") {
		if(codeLower ==="help"){
			addResult(code,"help - Lists all valid commands")
			addResultOutput("aboutme - Prints the about me paragraph")
			addResultOutput("red <page> - Redirects you to a given page e.g. Red Home would take to the home page, Red https://www.google.co.uk/ - would take you to the google webpage")
			addResultOutput("<JavaScript code> - You can run any JavaScript Code in this console, try 1+1")
			addResultOutput("cls / clear - Clears the console")
			doJs = false;
		}
		if(codeLower === "aboutme"){
				addResult(code,"Hey there, my name is Finlay Rae and I'm 17 years old. Im studying Mathematics, Computer Science and Physics at A level but particularly enjoy Computer Science. I code as a passion but also love to play video games, namely valorant. When I choose to code something its usually in python or C# however I know C#, Python, Lua, HTML, CSS and JS. My main interest in computer science is the field of Cyber Security, which I plan to study at university in 2023. If you wish to contact me, please do so in the contact me section of the page.");
			doJs = false;
		}
		
		if(codeLower.startsWith("red")){
			var isUrl = true;
			if (codeLower.split(" ")[1] == "home"){
				addResult(code,"Redirecting to Page: Home in 3 seconds.");
				setTimeout(redirectDelay,3000,"Home.html");
				isUrl = false;
			}
			if (codeLower.split(" ")[1] == "specs"){
				addResult(code,"Redirecting to Page: Specs in 3 seconds.");
				setTimeout(redirectDelay,3000,"Specs.html");
				isUrl = false;
			}
			if (codeLower.split(" ")[1] == "projects"){
				addResult(code,"Redirecting to Page: Projects in 3 seconds.");
				setTimeout(redirectDelay,3000,"Projects.html");
				isUrl = false;
			}
			if(isUrl === true){
				addResult(code,"Redirecting in 3 seconds.");
				setTimeout(redirectDelay,3000,codeLower.split(" ")[1]);
			}
			doJs = false
		}
		if(codeLower === "cls" || codeLower === "clear") {
			location.href = "AboutMe.html";
			doJs = false;
		}

		if(doJs===true){
			try {
				addResult(code, eval(code));
			} catch (err) {
				addResult(code,err);
			}
		
		}
		
		
		
		consoleInput.value = "";
		historyContainer.scrollTop = historyContainer.scrollHeight;
	}
	
});