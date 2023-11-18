let fnum = 0;
let snum = 0;
let oper = '';

function add(x){
  let num = document.getElementById('text').value;
  if (num==0){
    num=x;
  }
  else if (num.length < 9){
    num+=x;
  }
  document.getElementById('text').value = num;
}


function operation(op){
  if (op=='='){
    let snum = parseInt(document.getElementById('text').value);
    if (oper=='+'){
      document.getElementById('text').value = fnum+snum;
    }
    else if (oper=='-'){
      document.getElementById('text').value = fnum-snum;
    }
    else if (oper=='*'){
      document.getElementById('text').value = fnum*snum;
    }
    else if (oper=='/'){
      document.getElementById('text').value = fnum/snum;
    }
  }
  else if (op=='back') {
    num = parseInt(document.getElementById('text').value);
    num = parseInt(num/10);
    document.getElementById('text').value = num;
  }
  else if (op=='clear'){
    document.getElementById('text').value = '0';
  }
  else if (op=='neg'){
    num = parseInt(document.getElementById('text').value);
    num = parseInt(num*(-1));
    document.getElementById('text').value = num;
  }
  else{
    fnum = parseInt(document.getElementById('text').value);
    document.getElementById('text').value = '';
    oper = op;
  }
  
  
}
