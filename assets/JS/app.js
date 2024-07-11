document.addEventListener('DOMContentLoaded' ,function(){
    const tips=[
        "Always declare variables with `let` or `const`.",
        "Use `===` instead of `==` for strict equality comparison.",
        "Avoid using global variables.",
        "Understand the difference between `null` and `undefined`.",
        "Use arrow functions for shorter syntax.",
        "Use template literals for easier string interpolation.",
        "Take advantage of destructuring for easier data access.",
        "Use `map`, `filter`, and `reduce` for array operations.",
        "Always handle asynchronous code properly with Promises or async/await.",
        "Keep your code DRY (Don't Repeat Yourself)."
    ];

function showRandomTip(){
    const randomIndex= Math.floor(Math.random()*tips.length);
    document.getElementById('tip').innerText=tips[randomIndex];

}


showRandomTip()

});