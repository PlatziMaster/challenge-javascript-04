const trialDivision = (number) => {

 dato=number;
 if(Number.isInteger(dato)){
    a=dato%2;
    b=dato%3;
    c=dato%4;
    d=dato%5;
    e=dato%6;
    f=dato%7;
    g=dato%8;
    h=dato%9;
    if(-Infinity<dato & dato<9){i=1}else{i=dato%dato};
    if(a==0){a=1}else{a=0};
    if(b==0){b=1}else{b=0};
    if(c==0){c=1}else{c=0};
    if(d==0){d=1}else{d=0};
    if(e==0){e=1}else{e=0};
    if(f==0){f=1}else{f=0};
    if(g==0){g=1}else{g=0};
    if(h==0){h=1}else{h=0};
    if(i==0){i=1}else{i=0};
    z=a+b+c+d+e+f+g+h+i;
    if(z==1){x=true}else{x=false};
  }else{x=false}
    return x
}




  module.exports = trialDivision;