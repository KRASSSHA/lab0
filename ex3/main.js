conf = document.querySelector(".conf");
result = document.querySelector(".result");
R = document.querySelector('[name="R"]');
conf.addEventListener("click", function(){
    result.textContent = (7.44 * parseInt(R.value) ** 3).toFixed(2)
});