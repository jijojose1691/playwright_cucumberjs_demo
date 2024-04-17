Feature: Login Page

  @tagRegression @P0 @validLogin
  Scenario Outline: Login with valid credentials
    Given I am on the login screen
    When I fill the login form with valid username "<username>"
    Then I should be able to see the home screen

    Examples: 
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |

  @tagRegression @P0 @invalidLogin
  Scenario: login using vaild user but invaild password credentials
    Given I am on the login screen
    When I fill the login form with valid username "locked_out_user"
    Then I should see error "Epic sadface: Sorry, this user has been locked out."

  @tagRegression @P0 @invalidLogin
  Scenario Outline: Invalid Login
    Given I am on the login screen
    When I fill the login form with "<username>" and "<password>"
    Then Verify error message "<errormessage>" is shown

    Examples: 
      | username        | password       | errormessage                                                              |
      | wrong_user      | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | wrong_password | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | wrong_password | Epic sadface: Username and password do not match any user in this service |
      |                 |                | Epic sadface: Username is required                                        |
