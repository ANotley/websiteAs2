// Embed JQuery Library
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>


//Cost of Items
var iphonesCost = 275.00;
var otherPhonesCost = 100.00;
var chargersCost = 30.00;

//Add current choice to the COURTESY PHONE 
function addRow() {
    //Read current selection
    var currentSelection = $( "#item option:selected" ).text();

    //Read the current table content
    // var row1 = document.getElementById('row1');
    // var row2 = document.getElementById('row2');

    //Users can only add 1 phone and one charger to the table 
    //if table empty
    // if (row1 == null || row1 == ""){
    //     $('#courtesy-phone-table row1').eq(0).html(row1.text());
    // }
    // $('#courtesy-phone-table currentSelection').eq(row1).html('test');
    $("#row1").text("text");


    //if table already has a phone
        //if selection has already been added

    //if table already has a charger
                //if selection has already been added

    

    //If Customer Type != business, then total is calculated as the 'bond' (business doesn't get charged bond)

}

//Remove current choice from the courtesy phone table

//Recalculate bond after value removed


//Javascript form validation
$(document).ready(function() {
    $('select').focus(function() {
        //Hide all of the error messages.
        $('p.error-message').hide();
    });

    //When user clicks submit btn, prevent sending data immediately, and to wait until after data validation
    $('#form').submit(function(e) {
        //Prevent sending form data out
        e.preventDefault();

        //Get data that was entered by users
        //Customer Type Legend
        let firstname = $('#firstname').val();
        // let lastname = $('#lastname').val();
        // let street = $('#street').val();
        // let city = $('#city').val();
        // let postcode = $('#postcode').val();
        // let phonenumber = $('#phonenumber').val();
        // let email = $('#email').val();

        // let purchaseDate = $('#purchase-date').val();
        // let repairDate = $('#repair-date').val();
        // let warrantyBtn = $('#warranty-btn').val();
        // let imeiNumber = $('#imei-number').val();
        // let description = $('#description').val();

        //Customer Type Legend - not empty

        //Check entered data
        //Name mustn't be empty or null
        //First Name - only allow letters, spaces and the '-' symbol
        if(firstname == "" || firstname == null) {
            //Append an error message below the input box.
            $('#firstname').after('<p class="error-message">*Please enter your first name</p>'); 
            return false;//Go back to form, don't do anything else.                       
        }

        // //Surname -  only allow letters, spaces and the '-' symbol
        // if(lastname == "" || lastname == null) {
        //     //Append an error message below the input box.
        //     $('#lastname').after('<p class="error-message">*Please enter your last name</p>'); 
        //     return false;//Go back to form, don't do anything else.                       
        // }

        // if(street == "" || street == null) {
        //     //Append an error message below the input box.
        //     $('#street').after('<p class="error-message">*Please enter your street</p>'); 
        //     return false;//Go back to form, don't do anything else.                       
        // }

        // if(city == "" || city == null) {
        //     //Append an error message below the input box.
        //     $('#city').after('<p class="error-message">*Please enter your city</p>'); 
        //     return false;//Go back to form, don't do anything else.                       
        // }
        
        // //Postcode: must be four digits
        // // var regex = new RegExp('/^\d{4}$/')
        // // if(postcode.match(regex) == false || !(postcode == "") || !(postcode == null)) {            
        // //     //Append an error message below the input box.
        // //     $('#city').after('<p class="error-message">*Your postcode must be 4 numbers long</p>'); 
        // //     return false;//Go back to form, don't do anything else.                       
        // // }

        // //Phone Number - only allows for numbers, spaces and ( ), -, + symbols.
        // if(phonenumber == "" || phonenumber == null) {
        //     //Append an error message below the input box.
        //     $('#phonenumber').after('<p class="error-message">*Please enter your phonenumber</p>'); 
        //     return false;//Go back to form, don't do anything else.                       
        // }
        
        // //Email - must check for @ and full stop (.) after the @. It should also have a minimum length of 5 characters.
        // if(email == "" || email == null) {
        //     //Append an error message below the input box.
        //     $('#email').after('<p class="error-message">*Please enter your email address</p>'); 
        //     return false;//Go back to form, don't do anything else.      
        // }

        // if(purchaseDate == "" || purchaseDate == null) {
        //     //Append an error message below the input box.
        //     $('#purchase-date').after('<p class="error-message">*Please enter your the purchase date</p>'); 
        //     return false;//Go back to form, don't do anything else.                       
        // }


        // //The repair date must be later than the purchase date.
        // if(repairDate == "undefined" || repairDate == null) {
        //     $('#repair-date').after('<p class="error-message">*Please enter the last repair date of the device</p>'); 
        //     return false;//Go back to form, don't do anything else.      
        // }

        // //Warranty should be disabled if purchase date is greater than 24 months.

        // //IMEI Number - must only be numbers with a length of 15.
        // if(imeiNumber == "" || imeiNumber == null) {
        //     //Append an error message below the input box.
        //     $('#imei-Number').after('<p class="error-message">*Please enter your date option</p>'); 
        //     return false;//Go back to form, don't do anything else.      
        // }

        // if(description == "" || description == null) {
        //     //alert("ERROR");
        //     $('#description').after('<p class="error-message">*Please enter your date option</p>'); 
        //     return false;//Go back to form, don't do anything else.      
        // }
        //IF WE REACH THIS POINT, IT MEANS ALL DATA IS CORRECT.
        //Task One: SAVE DATA TO DATABASE - Indexed
        //info in the lab sheet under lab 11 - refer to lab tutorial

        //TASK TWO: CREATE INVOICE IN ANOTHER WEB PAGE
        //Call to ececute displayInvoice() method
        //displayInvoice(name, email, gender, date);
    });
});

//-----------------------
//DisplayInvoice method - simple js function. Must be outside of all the jquery methods
// function displayInvoice(firstname, lastname ) {
//     //Create new blank webpage to display invoice
//     let invoiceWindow = window.open('', '_blank');
 
//     //Get the passed data
//     let firstname = firstname;
//     let lastname = lastname;
//     // let userGender = gender;
//     // let enteredDate = date;

//     //Write the invoice in 'html' format
//     invoiceWindow.document.write(`
//         <html>
//             <head>
//                 <title>Booking Invoice</title>
//             </head>
//             <body>
//                 <h1>Booking Invoice</h1>
//                 <p>Name: ${firstname} </p>
//                 <p>Email: ${lastname} </p>
//             </body>
//         </html>
//     `);
// }

////////////////////////////////////
    

    // $("#add-btn").click(); {
    //     alert("changed?");
    // }
    
    
    
    //Add current choice to the COURTESY PHONE 
    function addRow() {

        //$('#courtesy-phone-table')[0].row[0].col[0].innerHTML = 'iPhone';
        //$('#courtesy-phone-table tr:nth-child(1) td').html("iPhone");
        //$("#item1").html("iPhone");

        //document.getElementById("item1").text = document.getElementById("iphone").text;

        // var rowID = '#first-row';
        // $('#courtesy-phone-table '+ rowID +' .table-row').html('iPhone');

        alert("clicked");



        //Users can only add 1 phone and one charger to the table 
        //if table empty
        // if (row1 == null || row1 == ""){

        // }

        //if table already has a phone
            //if selection has already been added

        //if table already has a charger
                    //if selection has already been added

        
        //Read current selection
    
        
        
        //Read the current table content

        //If Customer Type != business, then total is calculated as the 'bond' (business doesn't get charged bond)

    }

    //Remove current choice from the courtesy phone table
    function removeRow(){
        alert("clicked");

    }
    //Recalculate bond after value removed




