# Tweeter Demo

[x] TinyApp was a multi-page app. Tweeter will be a 'Single Page App'.
[x] HTML/CSS/jQuery over an Express back-end
[x] Real-time Character Limit
[x] Ajax Calls to avoid page reloads

# Semantic HTML

<html>
<head>
</head>
  <body>
  <div class="navigation">
  
  </div>
    <a href=""></a>
    <h1></h1>
    <div></div>
    <p>Can happily <span>e</span>xist</p>
  </body>
</html>


<header>
<nav>

</nav>
</header>
<main>
  <article></article>
</main>
<footer></footer>

# Box Model

[x] Almost every HTML element can be represented by a box ('Web Developer extension')
[x] The BOX Model fiddle and Dev Tools: https://jsfiddle.net/ChristianNally/rkcs60x7
[x] width, height, padding, border, margin
[x] MDN CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
[x] What is the 'size' of a box? depends on the 'box-sizing' property.
[x] Check out http://guyroutledge.github.io/box-model/

# Element Layout

[] demonstration: https://jsfiddle.net/ChristianNally/La0dyjk2/80/
[x] Before Flexbox, floats were used for layout
[x] With floats, elements can be floated left or right
[x] Floated elements are not part of the normal flow of the document
[x] The parent element containing floated elements will be collapsed
[x] block elements (like <div>) take the whole width of the container regardless of their content
[x] float: left; is a way of changing that, but it sets the height of the parent to 0.
(because the content of the parent is being taken out.) The solution is to add 'clearfix' to the parent.

# Flexbox

[] How to layout elements in a container and how to distribute the space between elements within a container.
[] A flex container expands flex items to fill available free space OR shrinks them to prevent overflow
[] Check out the reference guide here: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[] Left column is about the container element
[] display: flex;
[] flex-direction: row, row-reverse, column or column-reverse;
[] justify-content: flex-start, flex-end, center, space-between, space-around, or space-evenly;
[] align-items: 
[] when working with flexbox, you have a MAIN AXIS and a CROSS AXIS
   (which is horizontal depends on flex-direction)
[] play around with a jsFiddle https://jsfiddle.net/ChristianNally/6a7y8m0h/70/

# CSS Specificity

[] Rules that are more specific are more likely to be the rule that wins for any given element.
[] For rules of equal specificity, the rule that comes later in the list wins.
[] The formula: 1000 * Inline + 100 * IDs + 10 * Classes + 1 * Elements
[] https://cssspecificity.com/ to see how the calculation is done.

# GAMES !

[] https://flexboxfroggy.com/
[] http://www.flexboxdefense.com/
[] https://flukeout.github.io/
