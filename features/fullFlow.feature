Feature: full flow Casso
  In order to achieve my goals
  As a persona
  I want to make full flow Casso

  Scenario: Check full flow Casso
    Given I login to Casso page
    And I go to create new company page
    And I create a new company
    And I edit company to "Company Full Name"
    And I add new member "ngochuy8888@yopmail.com"
    And I delete member "ngochuy8888@yopmail.com"
    And I add new bank "Vietcombank" "bankusrdemo1" "123456"
    And I update Bank information with "Bank Reminiscent Name" "123456789"
    And I search "" "THANH TOAN HOA DON SO HOA DON 0902612348 QUA TIMO" "" in finance Book
    And I delete card "Bank Reminiscent Name"
    And I delete company
