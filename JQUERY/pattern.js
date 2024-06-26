n=5
for (i = 1;i<=n;i++){
    console.log("*".repeat(i))
}

for (i = 1;i<=n;i++){
    console.log(" ".repeat((n-i))+"*".repeat(i))
}