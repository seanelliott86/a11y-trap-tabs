# a11y-trap-tabs
Vanilla JavaScript function to trap the tab keypress inside an designated element.
## How to use
Mark up your html how ever you would like, just make sure the target element that you will be passing to the `trapTabKey()` function wraps all the elements you want to trap focus to.

Review the code below:

### HTML
```html 
<div class="js-target-elm">
    <ul>
	    <li><a href="#">Link 1</a></li>
	    <li><a href="#">Link 2</a></li>
	    <li><a href="#">Link 3</a></li>
	    <li><a href="#">Link 4</a></li>
    </ul>
    <p><a href="#">Another Link</a></p>
</div>

<p><a href="#">Outside target element</a></p>
```

### Javascript
```javascript
var elm = document.querySelector('.js-target-elem');

elm.addEventListener('keydown', function (e) {
    trapTabKey(elm);
}, false);
```
