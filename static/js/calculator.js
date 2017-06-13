$(document).ready(function() {
	var positions = JSON.parse(localStorage.positions || "{}");
	var calculator = $("[id=container-calc]").attr("id", function (i) {
        return "draggable_" + i
    });
	$.each(positions, function (id, pos) {
        $("#" + id).css(pos)
    });
	calculator.draggable({
        containment: "#container-calc",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
});
    /*$('#container-calc').draggable(
		drag: funciton(event,ui){
      		dragposition = ui.position;
   }
	);*/
//});

$(document).ready(function() {
    $('.minify').on('click', function(event) {
        $('.calc-body').slideToggle();
    });

    // Get all the keys from document
var keys = document.querySelectorAll('.buttons span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.current h1');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
            summary = '';
            $('.summary p').empty();
		}

        else if(btnVal == 'DEL') {
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);     
        }

        else if(btnVal == 'CE') {
            input.innerHTML = input.innerHTML.substring(0, 
                                                        input.innerHTML.indexOf('+') + 1 ||
                                                        input.innerHTML.indexOf('-') + 1 ||
                                                        input.innerHTML.indexOf('*') + 1 ||
                                                        input.innerHTML.indexOf('/') + 1);
        }
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
            var summary = document.querySelector('.summary > p');
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
            $(summary).append('<p>', input.innerHTML, '</p>');
            
			
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

        else if(btnVal == 'save') {
			var trash = document.createElement('img');
			trash.setAttribute('src', '/static/img/trash.svg');
			trash.setAttribute('class', 'list-trash');
			trash.setAttribute('alt', 'Trash');
            summary = $('.summary p').html();
            result = $('.current h1').html();
            summaryToSave = summary.replace(/<[^>]*>/g, '')                             				//Remove html elements
            resultToSave = result.replace(/<[^>]*>/g, '')                               				//Remove html elements
            var node = document.createElement('li');                                    				// Create a <li> node
            var textnode = document.createTextNode(summaryToSave + '=' + resultToSave); 		// Create a text node
            node.appendChild(textnode);
			node.appendChild(trash)                                                 				// Append the text to <li>
            document.getElementById('results').appendChild(node);                       				// Append <li> to <ul> with id="results"
        }
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}

});
