
function formValidation()
{

    if (document.contactForm.name.value=="")
    {
        document.getElementById('campo').style.display="inline";
        document.getElementById('name').focus();
    }

    else if (document.contactForm.lastname.value=="") 
    {
        document.getElementById('campo').style.display="inline";
        document.getElementById('lastname').focus();
    }

    else if (document.contactForm.Email.value=="") 
    {
        document.getElementById('campo').style.display="inline";
        document.getElementById('Email').focus();
    }

    else if (document.contactForm.subject.value=="") 
    {
        document.getElementById('campo').style.display="inline";
        document.getElementById('subject').focus();
    }

    else if (document.contactForm.message.value=="") 
    {
        document.getElementById('campo').style.display="inline";
        document.getElementById('message').focus();
    }
    else 
    {
        document.getElementById('campo').style.display="none";
        alert('Form submitted successfully')
    }
       
  }
