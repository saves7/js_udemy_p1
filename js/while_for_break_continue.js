let i =1;
while (i<10) {
    console.log(i);
    i++;
    if (i==5) {
        break;
    }
}

i =1;
while (i<10) {
    i++;
    if (i==8) {
        continue;
    }
    console.log(i);
}


for (let i=0; i<10; i++) {
    if (i==5) {
        continue;
    }
    console.log(i);

}