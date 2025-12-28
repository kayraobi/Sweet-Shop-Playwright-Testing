# Test Case Report

## Report Description

This document made for the test case report for the Sweet Shop web application. The report contains explanations of test cases covering functional testing scenarios including user authentication, navigation, and basket/checkout functionality. The test cases are designed to verify that the application meets its functional requirements and handles well both positive and negative test scenarios appropriately.

**Project Name:** Sweet Shop Web Application Testing Homework

**Application URL:** https://sweetshop.netlify.app/

**Total Test Cases:** 21

## Test Scope

This test case report covers the following functional areas:

1. **Login Functionality (TC_01 - TC_07):** Testing user authentication with valid and invalid credentials, including email validation scenarios.

2. **Navigation Functionality (TC_08 - TC_13):** Testing navigation between different pages including browse section, popular sugars, logo button, basket, about page, and home page.

3. **Basket/Checkout Functionality (TC_14 - TC_21):** Testing basket page billing form, dropdown selections for city and country, and form validation with filled and empty fields.

## Test Objectives

The primary objectives of this testing effort are:

- To verify that all navigation links and buttons function correctly
- To ensure user authentication works with valid credentials
- To validate that the system properly handles invalid login attempts
- To confirm that the basket/checkout form accepts and processes user input correctly
- To verify that dropdown menus function properly with all available options
- To ensure the application handles edge cases such as empty form fields appropriately

## Test Summary

| Category | Test Cases | Description |
|----------|------------|-------------|
| Login Tests | 7 | Positive and negative login scenarios including email validation |
| Navigation Tests | 6 | Testing navigation between different pages and sections |
| Basket/Checkout Tests | 8 | Testing billing form, dropdowns, and form validation |

---

## Test Cases

## Test Case 1

| | |
|---|---|
| **Test Case ID** | TC_01 |
| **Test Case Title** | Verify User Login - Positive |
| **Description** | Check whether a registered user can successfully log into the system using valid credentials. |
| **Test Steps** | • Navigate to the login page<br>• Enter a valid email (test@example.com) and password (password123)<br>• Click the *Login* button |
| **Expected Result** | User is successfully authenticated and redirected to the login page. |
| **Pass / Fail Criteria** | • **Pass:** User is logged in and redirected correctly<br>• **Fail:** Login fails or user is not redirected |

---

## Test Case 2

| | |
|---|---|
| **Test Case ID** | TC_02 |
| **Test Case Title** | Verify User Login - Negative (No email and Password) |
| **Description** | Check whether the system properly handles login attempts with empty email and password fields. |
| **Test Steps** | • Navigate to the login page<br>• Leave email field empty<br>• Leave password field empty<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds or unexpected behavior occurs |

---

## Test Case 3

| | |
|---|---|
| **Test Case ID** | TC_03 |
| **Test Case Title** | Verify User Login - Negative (No Password) |
| **Description** | Check whether the system properly handles login attempts with empty password field. |
| **Test Steps** | • Navigate to the login page<br>• Enter a valid email (test@example.com)<br>• Leave password field empty<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds with empty password |

---

## Test Case 4

| | |
|---|---|
| **Test Case ID** | TC_04 |
| **Test Case Title** | Verify User Login - Negative (No email) |
| **Description** | Check whether the system properly handles login attempts with empty email field. |
| **Test Steps** | • Navigate to the login page<br>• Leave email field empty<br>• Enter a valid password (password123)<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds with empty email |

---

## Test Case 5

| | |
|---|---|
| **Test Case ID** | TC_05 |
| **Test Case Title** | Verify User Login - Negative (Invalid email format) |
| **Description** | Check whether the system properly validates email format during login. |
| **Test Steps** | • Navigate to the login page<br>• Enter an invalid email format (e.g., "test" without @ and domain)<br>• Enter a valid password (password123)<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds with invalid email format |

---

## Test Case 6

| | |
|---|---|
| **Test Case ID** | TC_06 |
| **Test Case Title** | Verify User Login - Negative (Email lacks .com) |
| **Description** | Check whether the system validates email format when .com is missing. |
| **Test Steps** | • Navigate to the login page<br>• Enter email without .com (e.g., "test@123")<br>• Enter a valid password (password123)<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds with incomplete email format |

---

## Test Case 7

| | |
|---|---|
| **Test Case ID** | TC_07 |
| **Test Case Title** | Verify User Login - Negative (Email lacks @) |
| **Description** | Check whether the system validates email format when @ symbol is missing. |
| **Test Steps** | • Navigate to the login page<br>• Enter email without @ (e.g., "test.com")<br>• Enter a valid password (password123)<br>• Click the *Login* button |
| **Expected Result** | Login should fail and user should remain on the login page. |
| **Pass / Fail Criteria** | • **Pass:** Login is prevented and user stays on login page<br>• **Fail:** Login proceeds with invalid email format |

---

## Test Case 8

| | |
|---|---|
| **Test Case ID** | TC_08 |
| **Test Case Title** | Verify Sugar Browse Section Navigation |
| **Description** | Check whether users can navigate to the sweets browse section and interact with sugar items. |
| **Test Steps** | • Navigate to the home page<br>• Click on the browse section<br>• Interact with browse sugar items<br>• Verify navigation to sweets page |
| **Expected Result** | User is successfully navigated to the sweets page and can browse sugar items. |
| **Pass / Fail Criteria** | • **Pass:** User is redirected to sweets page and can browse items<br>• **Fail:** Navigation fails or page does not load correctly |

---

## Test Case 9

| | |
|---|---|
| **Test Case ID** | TC_09 |
| **Test Case Title** | Verify Popular Sugars Sections |
| **Description** | Check whether users can interact with popular sugar sections on the home page. |
| **Test Steps** | • Navigate to the home page<br>• Click on popular sugar items<br>• Verify interaction functionality |
| **Expected Result** | User can successfully interact with popular sugar sections. |
| **Pass / Fail Criteria** | • **Pass:** Popular sugar sections are clickable and functional<br>• **Fail:** Sections are not clickable or do not respond |

---

## Test Case 10

| | |
|---|---|
| **Test Case ID** | TC_10 |
| **Test Case Title** | Verify Candy Logo Button Navigation |
| **Description** | Check whether clicking the candy logo button navigates correctly. |
| **Test Steps** | • Navigate to any page on the website<br>• Click on the candy logo button<br>• Verify navigation |
| **Expected Result** | User is navigated to the appropriate page when clicking the logo. |
| **Pass / Fail Criteria** | • **Pass:** Logo button navigates correctly<br>• **Fail:** Logo button does not work or navigates incorrectly |

---

## Test Case 11

| | |
|---|---|
| **Test Case ID** | TC_11 |
| **Test Case Title** | Verify Basket Navigation |
| **Description** | Check whether users can navigate to the basket page,also this test include Boundary test by adding items from sugars section. |
| **Test Steps** | • Navigate to the home page<br>• Click on the basket button<br>• Verify navigation to basket page |
| **Expected Result** | User is successfully navigated to the basket page. |
| **Pass / Fail Criteria** | • **Pass:** User is redirected to basket page<br>• **Fail:** Navigation fails or incorrect page is displayed |

---

## Test Case 12

| | |
|---|---|
| **Test Case ID** | TC_12 |
| **Test Case Title** | Verify About Page Navigation |
| **Description** | Check whether users can navigate to the about page. |
| **Test Steps** | • Navigate to the home page<br>• Click on the about button<br>• Verify navigation to about page |
| **Expected Result** | User is successfully navigated to the about page. |
| **Pass / Fail Criteria** | • **Pass:** User is redirected to about page<br>• **Fail:** Navigation fails or incorrect page is displayed |

---

## Test Case 13

| | |
|---|---|
| **Test Case ID** | TC_13 |
| **Test Case Title** | Verify Home Page Navigation |
| **Description** | Check whether users can navigate to the home page. |
| **Test Steps** | • Navigate to the website<br>• Verify home page loads correctly |
| **Expected Result** | User is successfully navigated to the home page at https://sweetshop.netlify.app/. |
| **Pass / Fail Criteria** | • **Pass:** Home page loads correctly with correct URL<br>• **Fail:** Page does not load or incorrect URL |

---

## Test Case 14

| | |
|---|---|
| **Test Case ID** | TC_14 |
| **Test Case Title** | Verify Basket Page Billing Information - All Fields Filled |
| **Description** | Check whether users can complete the basket billing form with all required information filled. |
| **Test Steps** | • Navigate to the basket page<br>• Fill in all billing information fields (name, last name, email, address, zip, card details, etc.)<br>• Select delivery type<br>• Enter promo code<br>• Add items to basket<br>• Click empty basket button<br>• Click finish button<br>• Verify user remains on basket page |
| **Expected Result** | All billing information can be entered and form submission is handled correctly. |
| **Pass / Fail Criteria** | • **Pass:** All fields accept input and form processes correctly<br>• **Fail:** Fields do not accept input or form submission fails |

---

## Test Case 15

| | |
|---|---|
| **Test Case ID** | TC_15 |
| **Test Case Title** | Verify Basket Page Billing Information - Empty Fields |
| **Description** | Check whether the basket billing form handles empty fields correctly. |
| **Test Steps** | • Navigate to the basket page<br>• Leave all billing information fields empty<br>• Enter promo code<br>• Click empty basket button<br>• Click finish button<br>• Verify user remains on basket page |
| **Expected Result** | Form handles empty fields appropriately and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Form handles empty fields correctly<br>• **Fail:** Form crashes or behaves unexpectedly with empty fields |

---

## Test Case 16

| | |
|---|---|
| **Test Case ID** | TC_16 |
| **Test Case Title** | Verify Basket City Dropdown - Choose Option |
| **Description** | Check whether the city dropdown works correctly with "Choose..." option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "Choose..." option from city dropdown<br>• Verify selection |
| **Expected Result** | City dropdown accepts "Choose..." selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts selection correctly<br>• **Fail:** Dropdown does not work or selection fails |

---

## Test Case 17

| | |
|---|---|
| **Test Case ID** | TC_17 |
| **Test Case Title** | Verify Basket City Dropdown - Bristol Option |
| **Description** | Check whether the city dropdown works correctly with "Bristol" option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "Bristol" option from city dropdown<br>• Verify selection |
| **Expected Result** | City dropdown accepts "Bristol" selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts Bristol selection correctly<br>• **Fail:** Dropdown does not work or selection fails |

---

## Test Case 18

| | |
|---|---|
| **Test Case ID** | TC_18 |
| **Test Case Title** | Verify Basket City Dropdown - Cardiff Option |
| **Description** | Check whether the city dropdown works correctly with "Cardiff" option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "Cardiff" option from city dropdown<br>• Verify selection |
| **Expected Result** | City dropdown accepts "Cardiff" selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts Cardiff selection correctly<br>• **Fail:** Dropdown does not work or selection fails |

---

## Test Case 19

| | |
|---|---|
| **Test Case ID** | TC_19 |
| **Test Case Title** | Verify Basket City Dropdown - Swansea Option |
| **Description** | Check whether the city dropdown works correctly with "Swansea" option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "Swansea" option from city dropdown<br>• Verify selection |
| **Expected Result** | City dropdown accepts "Swansea" selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts Swansea selection correctly<br>• **Fail:** Dropdown does not work or selection fails |

---

## Test Case 20

| | |
|---|---|
| **Test Case ID** | TC_20 |
| **Test Case Title** | Verify Basket Country Dropdown - Choose Option |
| **Description** | Check whether the country dropdown works correctly with "Choose..." option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "Choose..." option from country dropdown<br>• Verify selection |
| **Expected Result** | Country dropdown accepts "Choose..." selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts selection correctly<br>• **Fail:** Dropdown does not work or selection fails |

---

## Test Case 21

| | |
|---|---|
| **Test Case ID** | TC_21 |
| **Test Case Title** | Verify Basket Country Dropdown - United Kingdom Option |
| **Description** | Check whether the country dropdown works correctly with "United Kingdom" option. |
| **Test Steps** | • Navigate to the basket page<br>• Select "United Kingdom" option from country dropdown<br>• Verify selection |
| **Expected Result** | Country dropdown accepts "United Kingdom" selection and user remains on basket page. |
| **Pass / Fail Criteria** | • **Pass:** Dropdown accepts United Kingdom selection correctly<br>• **Fail:** Dropdown does not work or selection fails |
