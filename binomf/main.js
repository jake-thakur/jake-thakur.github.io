window.onload = function()
{
    var _ = function (id) {return document.getElementById(id);};
    _("expand").onclick = expand;
    function factorial(v) {
        if (v==0){
            return 1;
        }
        else {
            return v * factorial(v-1);
        }
    }
    function choose(n,k) {
        var num = factorial(n);
        var div = factorial(k)*factorial(n-k);
        return num / div;
    }
    function expand() {
        // prepare n
        document.getElementById("result").style.display = "block";
        var n = document.getElementById("n").value;
        document.getElementById("yn").innerHTML = "@@^{"+n+"}@@";
        //perform expansion
        var deg_a, deg_b;
        var k_values = [];
        // i := k
        for (var i = 0; i <= n; i++) {
            deg_a = n - i;
            deg_b = i;
            var k_n = "@@"+choose(n,i)+"a^{"+deg_a+"}b^{"+deg_b+"}@@";
            k_values.push(k_n);
        }
        var str = k_values[0] + "";
        for (var j = 1; j < k_values.length; j++) {
            str += " + " + k_values[j];
        }
        document.getElementById("ye").innerHTML = str;
        MathJax.typeset();
    }
}