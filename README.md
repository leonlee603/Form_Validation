# Form_Validation
Form validation by JavaScript

This is a registeration form with JavaScript to provide the validation function.
There are four fields in this form, including "Username", "Email" ,"Password" & "Confirm Password".

The validation including following things:
1. All four fields are required fields. We validate them by comparing the input's value with empty string.
2. Number of character of "Username" and "Password" must be within a range. We check that by comparing the length of the string.
3. Email must match with certain pattern. We check that by using .test() function to return the boolean value.
4. "Password" must have the same value as the "Cofirm Password".
If the condition is match. The border color of the field will trun green to indicate it is correct by adding a "success" class to the form element.
Else, the border color of the field will turn red.

Live Demo:
https://leonlee603.github.io/Form_Validation/
