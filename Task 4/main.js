function calculateAge() {
    var today = new Date();
    var birthDate = new Date(document.getElementById("dob").value);
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById("result").innerHTML = "Your age is: " + age;
}
