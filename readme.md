=========================================================================

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById will selects a single element by its unique ID. 
getElementsByClassName will selects all elements with a given class name.
querySelector will selects the first element that matches a CSS selector.
querySelectorAll will selects all elements that match a CSS selector.

=========================================================================

2. How do you **create and insert a new element into the DOM**?

Answer: To create a new element first we declare a variable, then then set its content then select the parent element and finally insert it into DOM.

I shall explain it with an example.

suppose we want to add a new li, then we have to 

const li = document.createElement("li");
li.textContent = "New Item";
document.getElementById("myList").appendChild(li);

=========================================================================

3. What is **Event Bubbling** and how does it work?

Answer: When an element receives an event and that event is transmitted to its parent elements in the DOM tree until it gets to the root element is called Event Bubbling.

=========================================================================

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to manage events from multiple child elements.

Event delegation is useful because it reduces the number of event listeners in the DOM which improves performance. Memory usage and processing load are reduced by managing events at the parent level.

=========================================================================

5. What is the difference between **preventDefault() and stopPropagation()** methods?

event.preventDefault() method prevents the default action of browsers taking on that event. Its uses the DOM version of DOM Level 3 Events.

event.stopPropagation() Method prevent further propagation of current events by parent or child elements. Its uses the DOM version of DOM Level 2 Events.

=========================================================================