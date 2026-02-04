const btn =document.getElementById('mb1');
btn.addEventListener('click',function() {
     if(this.textContent.trim()==="Let's start!"){
        this.textContent="BOOOOO!!";
    }
    else{
        this.textContent="Let's start!";
    }
    document.body.classList.toggle('inverted');
    this.classList.toggle('invertedBut');
   

});
