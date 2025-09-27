function checkPass() {
    if(document.getElementById('pass').value === 'HUYHUYHUY') {
        document.getElementById('login').style.display='none';
        document.getElementById('home').style.display='block';
    } else {
        alert('đi mà hỏi thằng huy');
    }
}