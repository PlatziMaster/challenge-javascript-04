function primos(dato) {

a=dato%2;
b=dato%3;
c=dato%4;
d=dato%5;
e=dato%6;
f=dato%7;
g=dato%8;
h=dato%9;
if(2<dato<9){i=1}else{i=dato%dato};
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
if(a==0){a=1}else{a=0};
console.log(a);
if(b==0){b=1}else{b=0};
console.log(b);
if(c==0){c=1}else{c=0};
console.log(c);
if(d==0){d=1}else{d=0};
console.log(d);
if(e==0){e=1}else{e=0};
console.log(e);
if(f==0){f=1}else{f=0};
console.log(f);
if(g==0){g=1}else{g=0};
console.log(g);
if(h==0){h=1}else{h=0};
console.log(h);
if(i==0){i=1}else{i=0};
console.log(i);

z=a+b+c+d+e+f+g+h+i;

return if(z=1){true}else{false};
}
console.log(primos(2));