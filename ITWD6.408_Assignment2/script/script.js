$(document).ready(function() { 

    //Add current choice to the COURTESY PHONE 
    $("#add-btn").click(function() {
        //Cost of Items
        var iphonesCost = 275.00;
        var otherPhonesCost = 100.00;
        var chargersCost = 30.00;

        //identify which option was selected
        var selectedOption = $('#item option:selected');
        var selectedOptionText = $('#item option:selected').text();


        //identify values in table.
        var row1 = $('#first-item');
        var row2 = $('#second-item');
        var row1Text = $('#first-item').text();
        var row2Text = $('#second-item').text();

        //Users can only add 1 phone and one charger to the table 
        if(selectedOptionText === row1Text) {
            $("#table-error").html('* That item is already in the table');
        } else if (selectedOptionText === row2Text) {
            $("#table-error").html('* That item is already in the table');

            //if table already has a phone
        } else if ((selectedOptionText === 'iPhone') && (row1Text === 'Other Phone')){
            $("#table-error").html('* Only one mobile phone can be added to the table at once');
        } else if ((selectedOptionText === 'iPhone') && (row2Text === 'Other Phone')) {
            $("#table-error").html('* Only one mobile phone can be added to the table at once');

        } else if ((selectedOptionText === 'Other Phone') && (row1Text === 'iPhone')) {
            $("#table-error").html('* Only one mobile phone can be added to the table at once');
        } else if ((selectedOptionText === 'Other Phone') && (row2Text === 'iPhone'))  {
            $("#table-error").html('* Only one mobile phone can be added to the table at once');
            
            //if table already has a charger
        } else if ((selectedOptionText === 'Charger') && (row1Text ==='Charger')) {
            $("#table-error").html('* Only one charger can be added to the table at once');

        } else if ((selectedOptionText === 'Charger') && (row2Text ==='Charger')) {
            $("#table-error").html('* Only one charger can be added to the table at once');

        }  else if(row1Text =='Item') {
            if(selectedOption.is('#iphone')) {
                $("#first-item").html('iPhone');
                $("#first-cost").html('$' + iphonesCost);
            } else if(selectedOption.is('#other-phone')) {
                $("#first-item").html('Other Phone');
                $("#first-cost").html('$' + otherPhonesCost);
            } else if(selectedOption.is('#charger')) {
                $("#first-item").html('Charger');
                $("#first-cost").html('$' + chargersCost);
            }
        }  else {
            //if first row occupied, add to second
            if(selectedOption.is('#iphone')) {
                $("#second-item").html('iPhone');
                $("#second-cost").html('$' + iphonesCost);
            } else if(selectedOption.is('#other-phone')) {
                $("#second-item").html('Other Phone');
                $("#second-cost").html('$' + otherPhonesCost);
            } else if(selectedOption.is('#charger')) {
                $("#second-item").html('Charger');
                $("#second-cost").html('$' + chargersCost);
            } else {
                $("#second-cost").html('$');
            }
        }    

        

        


        //If Customer Type != business, then total is calculated as the 'bond' (business doesn't get charged bond)

    });
});