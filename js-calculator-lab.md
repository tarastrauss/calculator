![](http://www.efulfillmentservice.com/wp-content/uploads/2014/11/Fulfillment-Calculator.png)

# Build a Calculator with HTML, CSS & JS/jQuery

### Intro

This lab provides you with an opportunity to practice the technologies that you've learned so far:

- HTML
- CSS
- JavaScript
- jQuery

#### Getting Started:

- Make sure that you read and fully understand the requirements.
- Feel free to wireframe your app or use the visual examples below for inspiration.
- Pseudocode your program's functionality and logic.
- Pseudocoding will help you identify potential `functions`.
- Always prefer coding more functions with fewer lines of code than fewer functions with more lines of code.
- Using jQuery to manipulate the DOM is recommended but is not a requirement. You can roll with 100% vanilla JS if you prefer.
- Create your `index.html`, `css/main.css` stylesheet and `js/main.js` script files.
- Inside index.html:
	- Create the HTML boilerplate.
	- Link in the `main.css` stylesheet.
	- Include the jQuery library.
	- Include the `main.js` script.
- Setup Git:
  - Create a GitHub repo for your project.
  - Create a local git repo in the main directory of your project.
  - Do an initial commit.
  - Create a remote named `origin` that points to the GitHub repo you just created.
  - `git push origin master` to check that all is good.
  - Slack the link to your GitHub repo.
- Code!
  - Writing the basic HTML structure and content can be a good place to start - detailed styling is not important at this point.
  - Write the JS and jQuery to add the app's functionality. Follow object oriented programming as well as you can.  Don't forget, you need to use variables and/or properties as necessary to hold the current state of the application.
  - Style away with your good friend CSS.
- Commit often. Whenever you complete some HTML, code or CSS that accomplishes something, do a commit! However, make sure what you are committing is working as desired - do not commit broken code.

## Basic Requirements

1. You're going to build a handy **calculator.**
2. A user should basically be able to enter the first operand, choose an operator, enter a second operand, and click the `=` button to see the result.
3. Show a display area that can show each digit or decimal point as it is entered, as well as the result of the computation after the user clicks the `=` button.
4. Display buttons that allow users to click on to enter digits and a decimal point.
5. Display buttons for the following four operations:
	- `+` (addition)
	- `-` (subtraction)
	- `x` (multiplication)
	- `÷` (division)
6. Display a `=` button that will compute and display the result of the operation being applied to the previously entered first and second operands.
7. When a clicks an operator button, clear the display.
8. If the use clicks more than one operator, the most recently clicked operator is in effect.
8. Do not use JavaScript's `eval()` method.
9. Have fun!

## Visual Examples

![](https://upload.wikimedia.org/wikipedia/mediawiki/1/17/Logcalculator.png)

![](https://movefirstblog.files.wordpress.com/2010/12/calendar.jpg?w=500)

![](http://codropspz.tympanus.netdna-cdn.com/codrops/wp-content/uploads/2013/03/Collective53_calculator.jpg)

![](http://www.programmr.com/sites/default/files/imagecache/pageview/cal_0.jpg)

![](http://jsdo-it-static-contents.s3.amazonaws.com/images/capture/h/k/Z/hkZb.jpg?t=1392098012)

![](http://www.naldotech.com/wp-content/uploads/2014/07/android-l-calculator-app.jpg)

------

## Challenge Requirements

1. Implement a `CA` button that will clear the display, and internally reset both operands and operator.
2. Prevent the user from entering more than one decimal per operand.
3. Provide backspace functionality with `←` button.
4. Disable the `=` button until two operands are available.
5. If an operator is clicked immediately after calculating a result, "chain" the calculation by making the current result as the first operand.
6. Implement additional operations (square root, exponents, etc.) of your choice.
