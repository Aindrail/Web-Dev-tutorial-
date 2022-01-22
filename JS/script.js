let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg );

function inputMsg(){
    let name = prompt('Enter the name of a student');
    namasteBtn.textContent = 'Roll No. 44 '+name ;
    
}
