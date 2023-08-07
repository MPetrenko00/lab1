function calculateArea() {
    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);

    if (isNaN(c1) || isNaN(c2)) {
        document.getElementById("result").textContent = "Введіть коректні значення для катетів.";
        return;
    }

    var area = 0.5 * c1 * c2;
    document.getElementById("result").textContent = "Площа трикутника: " + area.toFixed(2);
}
