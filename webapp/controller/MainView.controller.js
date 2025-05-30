sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.activity2.controller.MainView", {
        
        onInit: 
        
        function () {
            const input = this.byId("inpInput1").getValue();
            let number = parseInt(input);
        
            if (isNaN(number) || number < 1 || number > 999) {
                this.byId("lblOutput1").setText("Valid number between 1 and 999.");
                return;
            }
        
            const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
            const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        
            let words = "";
        
            if (number >= 100) {                
                words += ones[Math.floor(number / 100)] + " Hundred";
                number %= 100;
                
                if (number > 0) words += " ";
            }
        
            if (number >= 10 && number <= 19) {
                words += teens[number - 10];
            } else {
                let t = Math.floor(number / 10);
                let o = number % 10;
                if (t > 0) {
                words += tens[t];
                if (o > 0) words += " ";
                }
                if (o > 0) {
                words += ones[o];
                }
            }
        
           this.byId("lblOutput1").setText(words);
         },  
         
        function () {
            const height = this.byId("inpInput2").getValue();
            let row = 0;

            while (row < height) {
                let line = "";

                //ADD SPACE
                let spaces = 0;
                while (spaces < row) {
                    line += "z";
                    spaces++;
                }

                // ADD STAR
                let stars = 0;
                while (stars < height - row) {
                    line += "* ";
                    stars++;
                }

                console.log(line.trimEnd()); //TRIM TO CLEAN SPACE
                row++;
            }
            //this.byId("lblOutput2").setText(line);
        }
    });
});