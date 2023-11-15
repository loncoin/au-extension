const passwordContainer = document.getElementById('password-container');
      const contentContainer = document.getElementById('content-container-main0');
      const passwordInput = document.getElementById('password-input');
      const passwordSubmit = document.getElementById('password-submit');

      const audioContainer = document.getElementById("audio-container");  	 
      let functions = {};
      function createAudioElement(Title, URL_location) {
        let x_ = document.createElement('audio');
        x_.src = URL_location;
        x_.id = Title;		  
        x_.controls = true;
        x_.style.display = "none"

        audioContainer.appendChild(x_);
        return x_;     
      };

      function play(Title, Toggle) {
        title.play(); 
      }

      document.getElementById("rate-limit-overlay").style.display = 'none'; 
      const entry_pass = "QueEnAstraLucyUgLy$" || 'abc123f';
      contentContainer.style.display = 'none';

      passwordSubmit.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === entry_pass) {   
          passwordContainer.style.display = 'none';
          contentContainer.style.display = 'block';
        } else { 
          console.log('Incorrect password. Try again.');
        }
      });
      document.getElementById('xre7').addEventListener('click', () => {   	  	  
        console.log(window.location.href);
        console.log(window.search)
        if (window.location.href === 'https://jsfiddle.net' || 'https://fiddle.jshell.net/_display/?editor_console=true') { 
          passwordContainer.style.display = 'none';
          contentContainer.style.display = 'block';
        } else {  	 
          console.log('Cannot access debug feature ::: AU not running on JSFiddle');
        }
      });
        	 
      document.getElementById("xre5").style.display = 'none';
      document.getElementById("xre4").addEventListener('click', () => {
        punctuationFilterEnabled = false;
        document.getElementById('xre5').style.display = "block";  
        document.getElementById("xre4").style.display = 'none';   
      });
      document.getElementById("xre5").addEventListener('click', () => {
        punctuationFilterEnabled = true;
        document.getElementById('xre4').style.display = "block";  
        document.getElementById("xre5").style.display = 'none';  
      });




      const askButton = document.getElementById('ask-button');
      askButton.addEventListener('click', generateAnswer);

      document.getElementById('x2s').style.display = "none";
      const model = ["1.1986-42694410", "XBgeDf-B2mKhd-eLRGCc-CnVIjd", "www.floobfloob.com"]; 
      /*
      	Prewritten answers were the only type of responses available in the older versions of the AU (early Sept.2023). There were 
        26, but now only 3 remain. I am planning to remove them soon and turn all the previous 'prewritten answers' into 'DA's.
            🔻🔻🔻
      */
      const prewritten = {
        "current model": `ANSII is currently running on: MODEL#${model[0]}:UUID#${model[1]}:CONNECT%${model[2]}`,
        "model": `ANSII is currently running on: MODEL#${model[0]}:UUID#${model[1]}:CONNECT%${model[2]}`,
        "Model number": `ANSII is currently running on: MODEL#${model[0]}:UUID#${model[1]}:CONNECT%${model[2]}`,  
      };
      
      // MAIN CONTROLS
      let isAdminEnabled = true;
      let punctuationFilterEnabled = true;
      let caseFilterEn = true;
      let timerterminated = false;
      let adminKey = "xlaef";  
      let imageAPIUsesThisHour = 0;
      let imageAPIUsesPerHour = 12;  	

			// MISC FUNCTIONS
      function terminateTimeMsgFnc() {
        function x() {
          timerterminated = !true;
        };
        timerterminated = !false;
        setTimeout(x, 1000);
      }

      function createAudioPlaybackButton(Ido) {
      	// Creates a button to toggle audio playback. Currently non-functional (11.5.23 14:53)
        let s = document.getElementById('x2s')  
        let o = s.cloneNode(true);
        clonedElement.removeAttribute("id");

        clonedElement.style.display = "block";      
        document.getElementById('xre2').appendChild(clonedElement);
        clonedElement.innerHTML = 'Toggle Song Playback (Q13Sf4GhlLtmn)' 

        clonedElement.addEventListener('click', () => {
          if (Ido.paused) {
            Ido.play()
          } else {
            Ido.pause()
          }   		
        });

      }

			
      function fetchDataFromAPI(url) { 
        // Fetches data from an API page. No proxy is installed on this function, will most likely fail if used.
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();  
          })
          .then(data => {  	
            console.log('data;', data);
            return data  
          })
          .catch(error => {  
            console.error('err:', error);
            throw error
          });
      }

      function generateImages(imageUrls) {
				// Generates a list of image objects (imageUrls:array['https://', 'https://'])  
        if (imageAPIUsesThisHour >= imageAPIUsesPerHour) {
          document.getElementById("rate-limit-overlay").style.display = "block"
        } else {   	
          const imageContainer = document.getElementById('image-container');
          imageAPIUsesThisHour++;
 
          imageContainer.innerHTML = '';
    
          imageUrls.forEach((imageUrl) => {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Generated Image'; 
            imageBox.appendChild(img);
 
            imageContainer.appendChild(imageBox);
          });
        }
      }  
      function generateTriple(array) {
				// Old function (similar to generateImages()), no longer used. 
      }

      function getDefinition(parameter, callback) {
      	// Gets data from an online dictionary. // To be improved
        const webAppURL = "https://script.google.com/macros/s/AKfycbwL-iTj-FtXAsYYgTpARF7hekWLGYr50NpAv-SxSxBi52YGJoHoF4T817xm3SxjLV-dhQ/exec";    
        const apiUrl = `${webAppURL}?param=${parameter.replace(' ', "%20")}`;
        console.log(apiUrl) 	
        fetch(apiUrl) 
          .then(dta => {  
            dta.json()
              .then(function(data) { 
                console.log(data); // debug line
                callback(data) 
              })
              .catch(function(error) { 
                console.error('err:', error);
              }); 	 
          })
          .catch(error => {
            console.error("err: ", error);
            callback("err");
          });
      }

      function getWikipediaData(parameter, callback) {
      // gets a wikipedia summary
        const webAppURL = "https://script.google.com/macros/s/AKfycbx6cAUwvfdboJMKfxaoYiI-dBglhJF71cumJh3jimAY6ufQ96LacKosrDRY6T2favML/exec";   
        const apiUrl = `${webAppURL}?param=${parameter.replace(' ', "%20")}`;

        fetch(apiUrl)
          .then(response => response.text())  
          .then(html => {  
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const paragraphs = doc.querySelectorAll("p");
            const summary = Array.from(paragraphs).map(p => p.textContent).join(" ");   	 
            callback(summary);
          })
          .catch(error => {
            console.error("err: ", error);
            callback("err II2X2sFbgfh");
          });     
      }

      function DDTF(param) {
        let str = '';
        for (let x in param[0]) {
          str = str + param[x]
        }

        return (str);		
      }

      function A48B(param) {   	
      	// Sorts dictionary JSON response into a nice format
        let organizedData = ""; 
        for (const entry of param) { 
          const word = entry.word;
          const licenseName = entry.license.name;
          const licenseURL = entry.license.url;
 
          organizedData += `"${word}"`;
          return (organizedData);  	  	
        }
      }


      // DEFINITIONS & WIKI DATA TESTING
      getWikipediaData("coffee", function(data) {
        console.log(data); //
      });

      getDefinition('hello', function(data) {    
        console.log(A48B (data));  
      });
   
      function sendMessageToHole(string) {
      	// not really used anymore. sends a message to a certain google chat group
        const url = 'https://chat.googleapis.com/v1/spaces/AAAACQvyo6E/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=7dcC3GHE5PbrgwD5T3y8Lx0SaoRWAAsuGzYBhdo4htY'; 
        const message = {
          text: string,
        };  
        const payload = {
          text: JSON.stringify(message.text),
        }; 
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('failed to send msg');
            }
          })
          .catch((error) => {
            console.error('failed to send msg:', error);
          });
        console.warn('Message sent to Google Chat space "The Hole"');
      }

      function sendMsgToGoogleChatAPI(webhookURL, string) {	   
      	// sends a message to the Google Chat API, can be sent to any space.
        const url = webhookURL;  
        const message = {
          text: string,
        }; 
        const payload = {
          text: JSON.stringify(message.text),
        };

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('failed to send msg');
            }
          })
          .catch((error) => {
            console.error( 'failed to send msg:', error);
          });
        console.warn('Message sent to chat webhook');
      }  
      
      // Content below will probably be removed/changed soon.
      const way = "I am FloobFloob ANSII/AU! I can assist with a total of " + Object.keys(prewritten).length + " questions at the moment (and a large amount of dynamic questions.). Just type a question in the box, and press the ask button! If I have an answer in my database, I will respond with an answer, and if not, I'll respond with a placeholder message. To test ANSII out, type 'what are ceiling fans' and press the 'ask' button!!";
      prewritten["who are you"] = way;
      prewritten['introduction'] = way;
      prewritten["intro"] = way;		
      ////////////////////////////   		  


      function isAdminCommand(command) {  
      // Admin Commands being removed soon 
        return isAdminEnabled && command.startsWith("admin");
      }

      const horseCode = {
        'A': '..',
        'B': '...',
        'C': '....',
        'D': '.-',
        'E': '..-',
        'F': '...-',
        'G': '--',
        'H': '---',
        'I': '----',
        'J': '-.',
        'K': '--.',
        'L': '---.',
        'M': '-..',
        'N': '--..',
        'O': '-.-',
        'P': '-..-',
        'Q': '-…',
        'R': '-.-.',
        'S': '..-.',
        'T': '.-..',
        'U': '.',
        'V': '.....',
        'W': '-....',
        'X': '....-',
        'Y': '.-.-',
        'Z': '-',
      };

      function encode(text) { 
      	// Encodes 'text' into Horse Code (Quinn, Emily, and I's version of morse code)
        text = text.toUpperCase();
        let encoded = '';

        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === ' ') {
            encoded += '  '; 
          } else if (horseCode[char]) {
            encoded += horseCode[char];
          }
          encoded += ' ';  	
        }

        return encoded.trim();   
      }

      function decode(pattern) {
      	// decodes horse code back into text
        console.log(pattern) 
        const letters = pattern.split('  ');
        let decoded = '';

        for (const letter of letters) {
          const codes = letter.split(' ');
          for (const code of codes) {
            for (const [letter, hCode] of Object.entries(horseCode)) {
              if (code ===  hCode) {
                decoded += letter;
                break;
              }
            }
          }
        }
        console.log(pattern, decoded)  
        return decoded;
      }   		

      function searchFreeImages(query, accessKey, callback) {
      	// searchs the "Unsplash" site for free images with the 'query' prompt.
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Client-ID ${accessKey}`
            }
          })
          .then(response => response.json())
          .then(data => {
            const imageUrls = data.results.map(result => result.urls.regular);
            callback(imageUrls);
          })
          .catch(error => console.error('Error:', error));
      }  

      function reformatJSON(inpt) {  	 	      	    	 		
      	// bad function for converting JSON to a somewhat readable string.
        let str = ''
        for (let index in inpt) {  
          str = str + (index + ": " + inpt[index] + ', ');
        };
        return str;
      }

      function executeAdminCommand(command) {		
      	//idk what any of this does anymore. going to be removed/changed soon hopefully
        if (command.startsWith("admin enable ")) {
          const enteredKey = command.substring(13);
          if (enteredKey === adminKey) {
            isAdminEnabled = true;  
            return "Admin mode enabled.";
          } else {
            return "Invalid admin key.";
          }
        } else if (command === "admin disable") {
          isAdminEnabled = false; 
          return "Admin mode disabled.";
        } else if (command.startsWith("admin sendmsg ")) {
          const message_ = command.substring(8 + 6);
          sendMessageToHole(message_);
        } else if (isAdminCommand(command) && command.startsWith("admin editvalue ")) {
          const parts = command.substring(16).split(", ");
          if (parts.length === 2) {
            const key = parts[0];
            const newValue = parts[1];
            if (prewritten.hasOwnProperty(key)) {
              prewritten[key] = newValue;
              return "Value updated successfully.";
            } else {
              return "Key not found in custom answers.";
            }
          } else {
            return "Invalid command format. Use 'admin editvalue <key>, <new value>'.";
          }
        } else if (isAdminCommand(command) && command.startsWith("admin createvalue ")) {
          const parts = command.substring(18).split(", ");
          if (parts.length >= 2) {
            const key = parts[0];
            const value = parts.slice(1).join(", ");
            prewritten[key] = value;
            return "New custom answer created.";
          } else {
            return "Invalid command format. Use 'admin createvalue <key>, <value>'.";
          }
        } else {
          return "You must enter 'admin enable, (adminkey)' before accessing those commands. Try again in 3 seconds.";
        }
      }
       
      function magic8Ball(input) { 	
      	// RNG function for magic 8 ball (8) command. Going to rewrite soon.
        const pseudoSeed = null;  
        const RNGbool = Math.round(Math.random()) === 0;
        if (RNGbool) {
          return (true)
        } else {
          return (false)
        }
      }

      function generateRating(int3) {		
      	// Even though I wrote this it still makes me cringe. Like what kind of array is written like this??
        const x = ['0/10', '1/10', '1/10', '2/10', '2/10', '3/10', '4/10', '4/10', '4/10', '5/10', '5/10', '5/10', '5/10', '6/10', '6/10', '6/10', '6/10', '7/10', '8/10', '8/10', '8/10', '8/10', '5/10', '6/10', '7/10', '10/10', ];
        return (x[Math.round(Math.random() * (x.length * 1)) - 1])
      }

      function generateAnswer() {			
      	// The function behind it all.  	
        // This function is pretty messy at the moment, will hopefully rewrite this also.
        askButton.classList.add('clicked');
        setTimeout(() => {
          askButton.classList.remove('clicked');
        }, 300);

        const questionInput = document.getElementById('question-input');
        const answerElement = document.getElementById('answer');
        let question = questionInput.value.trim()

        if (caseFilterEn && !(question.startsWith('img'))) {
          question = question.toLowerCase();
        };
        if (punctuationFilterEnabled && !(question.startsWith('encode') || question.startsWith('decode') || question.startsWith("img"))) {
          question = question.replace(/[.,\/#\!$%\^&*;:{}=\-_`~()?]/g, "");
        };

        if (isAdminCommand(question)) {
          answerElement.innerHTML = executeAdminCommand(question);
        } else if (question.startsWith("audio play ")) {
          let x = createAudioElement(Math.random(), question.substring(11));
          play(x)
        } else if (question.startsWith("rate")) {
          animateFormattedText('i say ' + generateRating(0), answerElement)
        } else if (question.startsWith('audio preloaded ')) {
          console.log("https://sndup.net/" + question.substring(16 - 1 + 1))  	 			
          let x = createAudioElement(Math.round(Math.random()), "https://sndup.net/" + question.substring(16 - 1 + 1) + "/d");
          play(x);
          createAudioPlaybackButton(x)
        } else if (question === 'punctuation filter disable') {
          punctuationFilterEnabled = false;
        } else if (question === "punctuation filter enable") {
          punctuationFilterEnabled = true
        } else if (question === 'case filter disable') {
          caseFilterEn = false
        } else if (question === "case filter enable") {
          caseFilterEn = true;
        } else if (question.startsWith('define ')) {  
          function formatDictionaryResponse(response) {
           		const formattedData = response.map((entry) => {
              const word = entry.word || 'N/A';
              const phonetics = entry.phonetics.map((phonetic) => {

                if (phonetic.audio) {
                  audioURL = phonetic.audio;
                  console.log(audioURL);
                }

                return phonetic.audio ? `Phonetic: ${phonetic.text} (Audio: <button class='AP3r4' id='_current'>PLAY AUDIO</button>${phonetic.audio})`:`Phonetic: ${phonetic  .text}`;
              });


              const meanings = entry.meanings.map((meaning) => {
                const partOfSpeech = meaning.partOfSpeech || 'N/A';
                const definitions = meaning.definitions.map((definition) => {
                  const def = definition.definition || 'N/A';
                  const example = definition.example || 'N/A';
                  const antonyms = definition.antonyms.join(', ') || 'N/A';
                  const synonyms = definition.synonyms.join(', ') || 'N/A';
                  return `\n  - Definition: ${def}\n    Example: ${example}\n    Antonyms: ${antonyms}\n    Synonyms: ${synonyms}`;
                });
                const synonyms = meaning.synonyms.join(', ') || 'N/A';
                const antonyms = meaning.antonyms.join(', ') || 'N/A';

                return `\nPart of Speech: ${partOfSpeech}\nSynonyms: ${synonyms}\nAntonyms: ${antonyms}${definitions.join('\n')}`;
              });

              const license = entry.license.name || 'N/A';
              const sourceUrls = entry.sourceUrls.join('\n') || 'N/A';

              return `Word: ${word}\nPhonetics:\n ${phonetics.join('\n')}\nMeanings:\n${meanings.join('\n')}\n`;
            });


            return formattedData.join('\n\n');
          }
          getDefinition(question.substring(7), function(data2) { 
            formatDictionaryResponse(data2)  
            answerElement.innerHTML = formatDictionaryResponse(data2)   		
            let italiansArentReal = document.getElementById('_current'); 
            italiansArentReal.addEventListener('click', function() {
              console.log(22) //debugger  
              play(createAudioElement("audio-element-definition-" + Math.random(), audioURL)) 
            })
          }); 	 		  		    	 
        } else if (question.startsWith('when ')) {  
          const months = ['January', "February", 'March', 'April', "May", "June", "july", "August", "September", 'October', 'November', 'December'] 
          let txt = '';
          const min = 0;   	 
          const max = 11; 
          const randomNum = Math.round(Math.random() * (max - min) + min)  	
          texttr = months[randomNum] + " " + Math.round(Math.random() * (30 - 1) + 1) + ', ' + Math.round(Math.random() * (2069 - 2023) + 2023)   
          animateFormattedText(txt, answerElement)  
        } else if (question === "test audio") {
          let b = createAudioElement('testr', "https://dl.sndup.net/y9mh/Desmeon%20-%20Undone%20(feat%20Steklo)%20[NCS%20Release].mp3");
          play(b)
        } else if (question === "tell me about lemon") {  
          window.open('https://www.floobfloob.com/wiki/others/lemonsterritory/lemonsterritory', "_blank");
          animateFormattedText("Sure thing! A new tab should open with the lemon wiki page.", answerElement)
        } else if (question.startsWith("img ")) {
          generateImages([question.substring(4)]);
        } else if (question.startsWith('image query ')) {
          animateFormattedText("Hello user; this is a reminder that I can only get 50 image requests per hour (for now). Please avoid using this command a lot to avoid rate limitng.", answerElement)
          searchFreeImages(question.substring(12), "DRImwNa1RBRv3JQg0o_7ri5AnLOgnbRzJRE7jkgodFE", imageUrls => {
          generateImages(imageUrls)  
          });
        } else if (question.startsWith("encode ")) {
          animateFormattedText(encode(question.substring(7)), answerElement);
        } else if (question.startsWith("decode ")) {
          let dec = decode(question.substring(7));
          console.log(dec, question, question.substring(7), 658.697964021431)
          animateFormattedText(dec, answerElement);
        } else if (question.startsWith('query ')) {  	 
          getWikipediaData(question.substring(5), function(data) {    	
            let _filter = data.replace('\n', "");
            _filter = _filter.replace("\u00a0", '')  
            console.log(data);
            animateFormattedText(_filter || data.substring(7 - 7), answerElement, 1); 
          });   		  	  
        } else if (question.startsWith('get raw')) {
          console.log(question.substring(8))
          fetchDataFromAPI(question.substring(8)).then(dataAsString => {
              animateFormattedText(reformatJSON(dataAsString) || 'err', answerElement)
            })
            .catch(error => { 	    	
            });

        } else if (question.startsWith("get gd profile")) {
					// the coolest command ever, gets data from a GD profile
          fetchDataFromAPI('https://gdbrowser.com/api/profile/' + question.substring(14 + 1)).then(dataAsString => {
              animateFormattedText(reformatJSON(dataAsString) || "err", answerElement)
            })
            .catch(error => {  
            });




        } else if (question.startsWith("random")) {
          animateFormattedText(`random number generation : ${Math.round(Math.random() * Number(question.substring(6)) * 1000) / 1000 || 10}`, answerElement);
        } else if (question.startsWith('8')) {
            const randompseu = magic8Ball(question.substring(2));
            if (randompseu === true || 0) {
              animateFormattedText('I say no', answerElement)
            } else {
              animateFormattedText("I say yes", (answerElement))
            }
            console.log('x r r45' + question);
            sendMsgToGoogleChatAPI('https://chat.googleapis.com/v1/spaces/AAAA_Fq_asg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=TrDGmJ5icyhWsvazRScmdzo-pTymTloZK-W6Ff_1cOc', (question + ',' + randompseu + "( " + 'true=no' + ")")) // for debugging/other purposes;
        } else if (question.startsWith("solve ")) {
        		// going to remove soon. not a very safe command (as eval() can do a lot more than just solve math), and it also sucks at doing math.
            const equation = question.substring(6);
            try {
              const result = eval(equation);
              animateFormattedText(`The answer to that equation is ${result}`, answerElement);
            } catch (error) {
              answerElement.innerHTML = "invalid equation, learn math bro";
          }
        } else if (question.startsWith("redirect to ")) {
          const url = question.substring(12);
          let cutoffLength = 12;
          window.open((url), '_blank');
          answerElement.innerHTML = `Redirecting to ${question.substring(cutoffLength)}...`;
        } else if (question.startsWith('view source')) {
        	window.open(('https://www.floobfloob.com/ask/source'), '_blank');
        } else {		  		   	
          animateFormattedText(prewritten[question] || "Nope", answerElement, 28.901);
        }
      }

      function animateFormattedText(text, element, timestampmult) {
        element.innerHTML = '';   
        const intervalId = setInterval(function() {
          if (text.length > 0) {
            element.innerHTML += text[0];
            text = text.slice(1);  
          } else {
            clearInterval(intervalId);
          }
        }, (timestampmult) || 30);    
      }
