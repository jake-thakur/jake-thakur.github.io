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
        var fstr = "";
        for (var j = 0; j < k_values.length; j++) {
            k_values[j]=k_values[j].replace("1a^{0}b^{0}","1");
            k_values[j]=k_values[j].replace("1a","a");
            k_values[j]=k_values[j].replace("1b","b");
            k_values[j]=k_values[j].replace("a^{0}","");
            k_values[j]=k_values[j].replace("b^{0}","");
            k_values[j]=k_values[j].replace("a^{1}","a");
            k_values[j]=k_values[j].replace("b^{1}","b");
            if (j==0){
                fstr = k_values[j];
            }
            else {
                fstr += " + " + k_values[j];
            }
        }
        document.getElementById("ye").innerHTML = str;
        document.getElementById("yf").innerHTML = fstr;
        MathJax.typeset();
    }
}