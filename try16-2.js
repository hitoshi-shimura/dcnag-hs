function output_function(){
    document.write(`<p>引数：なし、返り値：なしの関数</p>`);
}
//引数：あり、返り値：なしの関数
function output_function_num(num){
    document.write(`<p>引数：${num}、返り値：なしの関数</p>`);
}
//引数：あり、返り値：ありの関数
function make_function_num (num){
    let string = (`<p>引数：${num}、返り値：ありの関数</p>`);
    return string;
}

output_function();
output_function_num(10);
let function_num = make_function_num(10);
document.write(function_num);