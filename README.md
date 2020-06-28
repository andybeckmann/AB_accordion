AB_accordion
==========

AB_accordion adds accordion functionality to list items using JavaScript.

## Screenshot
![Screenshot](/screenshot.png?raw=true)

## Required files

### Styles
[AB_accordion/scss/components/_AB_accordion.scss](https://github.com/andybeckmann/AB_accordion/blob/master/scss/components/_AB_accordion.scss)

### Scripts
[AB_accordion/js/AB_accordion.js](https://github.com/andybeckmann/AB_accordion/blob/master/js/AB_accordion.js)

## Example

### HTML
```html
<div class="accordion" id="accordion">
    <ul>
        <li>
            <div class="item current-item">
                <div class="header">Header text <div class="toggle"><span></span></div></div>
                <div class="body">
                    <div class="body-text">...</div>
                </div>
            </div>
        </li>
        <li>
            <div class="item">
                <div class="header">Header text <div class="toggle"><span></span></div></div>
                <div class="body">
                    <div class="body-text">...</div>
                </div>
            </div>
        </li>
    </ul>
</div>
```

### JS
```javascript
accordion('accordion');
```