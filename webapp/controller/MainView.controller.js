sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.activity2.controller.MainView", {
        
        onInit: function () {
            this._initializeNumberToWords();      // Calling a custom function - Question 1 - Number convert to words
            this._initializeHeightOfTriangle();   // Calling a custom function - Question 2 - Triangle pattern
            this._initializeHeightOfXSign();      // Calling a custom function - Question 3 - X Pattern
            this._initializeTrianglePerimeter();  // Calling a custom function - Question 4 - Perimeter of a Traingle
            this._initializeDisplayColors();      // Calling a custom function - Question 5 - Display a color
            this._initializeHighestSkillset();    // Calling a custom function - Question 6 - Highest Skillset
        },
        
        _initializeNumberToWords: function () {
            const input = this.byId("inpInput1").getValue();
            let number = parseInt(input);
            let result = "";
        
            if (isNaN(number) || number < 1 || number > 999) {
                this.byId("lblOutput1").setText("Valid number between 1 and 999 only.");
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

            result = words;
        
            this.byId("lblOutput1").setText(result);
        },

        _initializeHeightOfTriangle: function () {
            const input = this.byId("inpInput2").getValue();
            let height = parseInt(input);            
            let row = 0;
            let result = "";
            const nbsp = "\u00A0\u00A0"; 

            while (row < height) {
                let line = "";

                //ADD SPACE
                let spaces = 0;
                while (spaces < row) {
                    line += nbsp;
                    spaces++;
                }

                // ADD STAR
                let stars = 0;
                while (stars < (height - row)) {
                    line += "* ";
                    stars++;
                }

                result += line.trimEnd() + "<br>";
                row++;
            }
                  
            this.byId("lblOutput2").setHtmlText(result);
        },

        _initializeHeightOfXSign: function () {
            const input3 = this.byId("inpInput3").getValue();
            const height = parseInt(input3);
            let result = "";
            const nbsp = "\u00A0\u00A0"; 
        
            if (isNaN(height) || height < 3 || height % 2 === 0) {
                this.byId("lblOutput3").setText("Valid odd number >= 3 only.");
                return;
            }
        
            for (let i = 0; i < height; i++) {
                let line = "";
                for (let j = 0; j < height; j++) {
                    if (j === i || j === height - i - 1) {
                        line += "*";
                    } else {
                        line += nbsp;
                    }
                }
                result += line + "<br>";
            }
        
            this.byId("lblOutput3").setHtmlText(result);
        },

        _initializeTrianglePerimeter: function() {
            const a = 4, b = 10, c = 8;
            let result = "";

            let perimeter = a + b + c;

            result = perimeter;

            this.byId("lblOutput4").setText(result);
        },

        _initializeDisplayColors: function() {
            const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
            const o = ["th", "st", "nd", "rd"];
            let result = "";

            for (let i = 0; i < color.length; i++) {
                let suffix;

                if (i + 1 === 1) {
                    suffix = o[1]; 
                } else if (i + 1 === 2) {
                    suffix = o[2]; 
                } else if (i + 1 === 3) {
                    suffix = o[3]; 
                } else {
                    suffix = o[0]; 
                }

                result += `${i + 1}${suffix} choice is ${color[i]}.<br>`;

                this.byId("lblOutput5").setHtmlText(result);
            }
        },
        
        _initializeHighestSkillset: function() {
            let record = [
                {
                  "Name": "Gibo",
                  "Age": 16,
                  "SkillSet": [
                    { "Skill": "SAP UI5" },
                    { "Skill": "SAP HANA" }
                  ]
                },
                {
                  "Name": "Patrick",
                  "Age": 22,
                  "SkillSet": [
                    { "Skill": "SAP UI5" },
                    { "Skill": "SAP HANA" },
                    { "Skill": "SAP ABAP" }
                  ]
                },
                {
                  "Name": "MJ",
                  "Age": 24,
                  "SkillSet": [
                    { "Skill": "SAP HANA" }
                  ]
                }
              ];

            let maxSkills = 0;
            let topPerson = null;
            let result = "";

            record.forEach(person => {
                if (person.SkillSet.length > maxSkills) {
                maxSkills = person.SkillSet.length;
                topPerson = person;
                }
            });

            result = `Name: ${topPerson.Name}<br>Age: ${topPerson.Age}`;
            this.byId("lblOutput6").setHtmlText(result);
                        
        }                
    });
});